package com.gymbuddy.backgymbuddy.admin.question.controller;

import com.gymbuddy.backgymbuddy.admin.base.BaseController;
import com.gymbuddy.backgymbuddy.admin.history.domain.History;
import com.gymbuddy.backgymbuddy.admin.question.domain.Question;
import com.gymbuddy.backgymbuddy.admin.question.domain.QuestionComment;
import com.gymbuddy.backgymbuddy.admin.question.domain.QuestionCommentDto;
import com.gymbuddy.backgymbuddy.admin.question.domain.QuestionDto;
import com.gymbuddy.backgymbuddy.admin.question.service.QuestionCommentService;
import com.gymbuddy.backgymbuddy.admin.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.gymbuddy.backgymbuddy.admin.base.Constants.ADMIN_QUESTION_PREFIX;
import static com.gymbuddy.backgymbuddy.admin.base.Constants.USER_QUESTION_PREFIX;

@Slf4j
@RestController
@RequiredArgsConstructor
public class QuestionController extends BaseController {

    private final String ADMIN_URI = ADMIN_QUESTION_PREFIX;
    private final String USER_URI = USER_QUESTION_PREFIX;

    private String questionPath = "/resources/static/img/question";
    private String rootPath = System.getProperty("user.dir") + "/src/main" + questionPath;
    private File saveFile = new File(rootPath);

    private final QuestionService questionService;
    private final QuestionCommentService questionCommentService;

    /**
     * 전체 1:1 문의글 조회(관리자)
     */
    @GetMapping("/question/all/{page}")
    public ResponseEntity<Map<String, Object>> selectAdminQuestionList(@PathVariable int page) {
        return createResponseEntity(true, questionService.findAll(page));
    }

    /**
     * 1:1 문의 상세 조회(관리자)
     */
    @GetMapping("/question/detail/{id}")
    public ResponseEntity<Map<String, Object>> selectAdminQuestionDetail(@PathVariable("id") Long id) {
        log.info("1:1 문의 조회: {}", id);
        return createResponseEntity(true, questionService.findDetail(id));
    }

    /**
     * 1:1 문의 삭제(관리자)
     */
    @DeleteMapping("/question/delete")
    public ResponseEntity<Map<String, Object>> deleteQuestionByAdmin(@RequestBody List<Integer> ids) {
        log.info("1:1 문의 삭제: {}", ids);

        for (int id : ids) {
            long idL = new Long(id);
            questionService.delete(idL);
        }

        Map<String, Object> result = new HashMap<>();
        result.put("result", "success");
        return createResponseEntity(true, result);
    }

    /**
     * 전체 1:1 문의 조회(사용자)
     * 사용자가 쓴 문의 전체 조회
     */
    @GetMapping("/user/question/all/{id}/{page}")
    public ResponseEntity<Map<String, Object>> selectUserQuestionList(@PathVariable("id") Long id, @PathVariable("page") int page) {
        return createResponseEntity(true, questionService.findAllByUser(id, page));
    }

    /**
     * 1:1 문의 상세 조회(사용자)
     */
    @GetMapping("/user/question/detail/{id}")
    public ResponseEntity<Map<String, Object>> selectUserQuestionDetail(@PathVariable("id") Long id) {
        log.info("1:1 문의 조회: {}", id);
        return createResponseEntity(true, questionService.findDetail(id));
    }

    /**
     * 1:1 문의 등록(사용자)
     */
    @PostMapping("/question/new")
    public ResponseEntity<Map<String, Object>> insertQuestion(@ModelAttribute QuestionDto dto) {
        log.info("1:1 문의 등록: {}", dto);

        String imgName1 = dto.getFile1().getOriginalFilename();
        String imgName2 = dto.getFile2().getOriginalFilename();
        String imgName3 = dto.getFile3().getOriginalFilename();
        try {
            if (!saveFile.exists()) {
                saveFile.mkdir();
            }
            // 파일1
            File realFile1 = new File(saveFile + "/" + System.currentTimeMillis() + "_" + imgName1);
            dto.getFile1().transferTo(realFile1);
            dto.setImgName1(imgName1);
            dto.setImgPath1(questionPath + "/" + realFile1.getName());

            // 파일2
            File realFile2 = new File(saveFile + "/" + System.currentTimeMillis() + "_" + imgName2);
            dto.getFile2().transferTo(realFile2);
            dto.setImgName2(imgName2);
            dto.setImgPath2(questionPath + "/" + realFile2.getName());

            // 파일3
            File realFile3 = new File(saveFile + "/" + System.currentTimeMillis() + "_" + imgName3);
            dto.getFile3().transferTo(realFile3);
            dto.setImgName3(imgName3);
            dto.setImgPath3(questionPath + "/" + realFile3.getName());
        } catch (Exception e) {
            log.error(e.getMessage());
        }

        Long id = questionService.save(dto);

        Map<String, Object> result = new HashMap<>();
        result.put("id", id);
        return createResponseEntity(true, result);
    }

    /**
     * 1:1 문의 수정(사용자)
     */
    @PutMapping("/question/update/{id}")
    public ResponseEntity<Map<String, Object>> updateQuestion(
            @PathVariable("id") Long id, @ModelAttribute QuestionDto dto) {
        log.info("미션 수정 id: {}, dto: {}", id, dto);

        Question question = questionService.findOne(id);

        if (dto.getFile1() != null) {
            String imgName1 = dto.getFile1().getOriginalFilename();
            if (!question.getImgName1().equals(imgName1)) {
                try {
                    File realFile = new File(saveFile + "/" + System.currentTimeMillis() + "_" + imgName1);
                    dto.getFile1().transferTo(realFile);
                    dto.setImgName1(imgName1);
                    dto.setImgPath1(questionPath + "/" + realFile.getName());

                    File originFile = new File(saveFile + "/" + dto.getImgPath1());
                    if (originFile.exists()) {
                        originFile.delete();
                    }
                } catch (Exception e) {
                    log.error(e.getMessage());
                }
            }
        }
        if (dto.getFile2() != null) {
            String imgName2 = dto.getFile2().getOriginalFilename();
            if (!question.getImgName2().equals(imgName2)) {
                try {
                    File realFile = new File(saveFile + "/" + System.currentTimeMillis() + "_" + imgName2);
                    dto.getFile2().transferTo(realFile);
                    dto.setImgName2(imgName2);
                    dto.setImgPath2(questionPath + "/" + realFile.getName());

                    File originFile = new File(saveFile + "/" + dto.getImgPath2());
                    if (originFile.exists()) {
                        originFile.delete();
                    }
                } catch (Exception e) {
                    log.error(e.getMessage());
                }
            }
        }
        if (dto.getFile3() != null) {
            String imgName3 = dto.getFile3().getOriginalFilename();
            if (!question.getImgName3().equals(imgName3)) {
                try {
                    File realFile = new File(saveFile + "/" + System.currentTimeMillis() + "_" + imgName3);
                    dto.getFile3().transferTo(realFile);
                    dto.setImgName3(imgName3);
                    dto.setImgPath3(questionPath + "/" + realFile.getName());

                    File originFile = new File(saveFile + "/" + dto.getImgPath3());
                    if (originFile.exists()) {
                        originFile.delete();
                    }
                } catch (Exception e) {
                    log.error(e.getMessage());
                }
            }
        }

        questionService.update(id, dto);
        Question findQuestion = questionService.findOne(id);

        boolean flag = true;
        if (dto.getContents() != null) {
            flag = dto.getContents().equals(findQuestion.getContents()) ? true : false;
        }
        if (dto.getImgPath1() != null) {
            flag = dto.getImgPath1().equals(findQuestion.getImgPath1());
        }
        if (dto.getImgName1() != null) {
            flag = dto.getImgName1().equals(findQuestion.getImgName1());
        }
        if (dto.getImgPath2() != null) {
            flag = dto.getImgPath2().equals(findQuestion.getImgPath2());
        }
        if (dto.getImgName2() != null) {
            flag = dto.getImgName2().equals(findQuestion.getImgName2());
        }
        if (dto.getImgPath3() != null) {
            flag = dto.getImgPath3().equals(findQuestion.getImgPath3());
        }
        if (dto.getImgName3() != null) {
            flag = dto.getImgName3().equals(findQuestion.getImgName3());
        }

        Map<String, Object> result = new HashMap<>();
        result.put("result", flag);
        return createResponseEntity(true, result);
    }

    /**
     * 1:1 문의 삭제(사용자)
     * 상세 페이지에서만 삭제 가능
     */
    @DeleteMapping("/user/question/delete/{id}")
    public ResponseEntity<History> deleteQuestion(@PathVariable("id") Long id) {
        log.info("1:1 문의 삭제: {}", id);

        questionService.delete(id);

        Map<String, Object> result = new HashMap<>();
        result.put("result", "success");
        return createResponseEntity(true, result);
    }

    /**
     * 1:1 문의 댓글 등록(관리자)
     */
    @PostMapping("/question/newReply")
    public ResponseEntity<History> insertQuestionReply(@RequestBody QuestionCommentDto dto) {
        log.info("1:1 문의 댓글 등록: {}", dto);

        Map<String, Object> result = new HashMap<>();
        result.put("id", questionCommentService.save(dto));
        return createResponseEntity(true, result);
    }

    /**
     * 1:1 문의 댓글 수정(관리자)
     */
    @PutMapping("/question/updateReply/{id}")
    public ResponseEntity<History> updateQuestionReply(
            @PathVariable("id") Long id, @RequestBody QuestionCommentDto dto) {
        log.info("1:1 문의 댓글 수정 id: {}, dto: {}", id, dto);

        questionCommentService.update(id, dto);
        QuestionComment findComment = questionCommentService.findOne(id);

        boolean flag = true;
        if (dto.getTitle() != null) {
            flag = dto.getTitle().equals(findComment.getTitle()) ? true : false;
        }
        if (dto.getContents() != null) {
            flag = dto.getContents().equals(findComment.getContents()) ? true : false;
        }

        Map<String, Object> result = new HashMap<>();
        result.put("result", flag);
        return createResponseEntity(true, result);
    }

    /**
     * 1:1 문의 댓글 삭제(관리자)
     */
    @DeleteMapping("/question/deleteReply/{id}")
    public ResponseEntity<History> deleteQuestionReply(@PathVariable("id") Long id) {
        log.info("1:1 문의 댓글 삭제: {}", id);
        questionCommentService.delete(id);

        Map<String, Object> result = new HashMap<>();
        result.put("result", "success");
        return createResponseEntity(true, result);
    }
}
