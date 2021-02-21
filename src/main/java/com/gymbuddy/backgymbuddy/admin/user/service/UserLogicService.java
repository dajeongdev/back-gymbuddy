package com.gymbuddy.backgymbuddy.admin.user.service;

import com.gymbuddy.backgymbuddy.admin.base.Address;
import com.gymbuddy.backgymbuddy.admin.user.domain.Grade;
import com.gymbuddy.backgymbuddy.admin.user.domain.User;
import com.gymbuddy.backgymbuddy.admin.user.domain.UserDto;
import com.gymbuddy.backgymbuddy.admin.user.repository.UserRepository;
import com.gymbuddy.backgymbuddy.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.*;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserLogicService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;

    /**
     * 회원가입
     */
    public Map<String, Object> join(UserDto user) {
        Map<String, Object> result = new HashMap<>();
        // 이이디 중복 확인
        Optional<User> byIdentity = userRepository.findByIdentity(user.getIdentity());
        if (byIdentity.isPresent()) {
            result.put("successYn", "N");
            result.put("msg", "이미 사용중인 아이디입니다.");
            return result;
        }
        // 이메일 중복 확인
        Optional<User> byEmail = userRepository.findByEmail(user.getEmail());
        if (byEmail.isPresent()) {
            result.put("successYn", "N");
            result.put("msg", "이미 가입된 이메일입니다.");
            return result;
        }

        User entity = new User();
        entity.setIdentity(user.getIdentity());
        entity.setEmail(user.getEmail());
        entity.setPassword(passwordEncoder.encode(user.getPassword()));
        entity.setName(user.getName());
        entity.setPhone(user.getPhone());
        entity.setAddress(new Address(user.getZipcode(), user.getStreet1(), user.getStreet2()));
        entity.setAgreeYn(user.getAgreeYn());
        entity.setGrade(Grade.NORMAL.toString());
        entity.setCreateDate(LocalDateTime.now());
        entity.setUpdateDate(LocalDateTime.now());
        entity.setRoles(Collections.emptyList());

        userRepository.save(entity);

        result.put("successYn", "Y");
        result.put("id", entity.getId());
        return result;
    }

    /**
     * 로그인
     */
    public String login(UserDto user) {
        User member = userRepository.findByIdentity(user.getIdentity())
                .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 이메일입니다."));
        if (!passwordEncoder.matches(user.getPassword(), member.getPassword())) {
            throw new IllegalArgumentException("잘못된 비밀번호 입니다.");
        }
        return jwtTokenProvider.createToken(member.getUsername(), member.getRoles());
    }

    /**
     * 전체 회원 조회
     */
    public List<UserDto> findAll(int page) {
        List<User> entities = userRepository.findAll(PageRequest.of(page, 10)).getContent();

        List<UserDto> list = new ArrayList<>();
        for (User user : entities) {
            UserDto dto = new UserDto();
            dto.setId(user.getId());
            dto.setGrade(user.getGrade());
            dto.setIdentity(user.getIdentity());
            dto.setName(user.getName());
            dto.setEmail(user.getEmail());
            dto.setPhone(user.getPhone());
            dto.setAgreeYn(user.getAgreeYn());
            list.add(dto);
        }
        return list;
    }

    /**
     * 회원정보 조회(엔티티)
     */
    public User findOne(Long id) {
        return userRepository.findById(id).get();
    }

    /**
     * 회원정보 조회(dto)
     */
    public UserDto findUserDto(Long id) {
        User user = findOne(id);

        UserDto dto = new UserDto();
        dto.setIdentity(user.getIdentity());
        dto.setName(user.getName());
        dto.setPhone(user.getPhone());
        dto.setEmail(user.getEmail());
        Address address = user.getAddress();
        dto.setZipcode(address.getZipcode());
        dto.setStreet1(address.getStreet1());
        dto.setStreet2(address.getStreet2());
        dto.setAgreeYn(user.getAgreeYn());

        return dto;
    }

    /**
     * 정보수정
     */
    @Transactional
    public void update(Long id, UserDto user) {
        User origin = findOne(id);
        if (user.getName() != null) {
            origin.setName(user.getName());
        }
        if (user.getPassword() != null) {
            origin.setPassword(passwordEncoder.encode(user.getPassword()));
        }
        if (user.getPhone() != null) {
            origin.setPhone(user.getPhone());
        }
        if (user.getStreet1() != null && user.getStreet2() != null && user.getZipcode() != null) {
            origin.setAddress(new Address(user.getZipcode(), user.getStreet1(), user.getStreet2()));
        }
        if (user.getAgreeYn() != null) {
            origin.setAgreeYn(user.getAgreeYn());
        }
    }

    /**
     * 탈퇴
     */
    @Transactional
    public void signOut(Long id) {
        User origin = findOne(id);
        userRepository.delete(origin);
    }

    /**
     * 비밀번호 변경
     * @param user 회원정보
     * @param num 임시비밀번호
     */
    @Transactional
    public void updatePassword(UserDto user, int num) {
        User origin = findOne(user.getId());
        String password = passwordEncoder.encode(Objects.toString(num));
        origin.setPassword(password);
    }
}