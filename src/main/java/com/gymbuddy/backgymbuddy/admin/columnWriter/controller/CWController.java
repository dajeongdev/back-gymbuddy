package com.gymbuddy.backgymbuddy.admin.columnWriter.controller;

import com.gymbuddy.backgymbuddy.admin.base.BaseController;
import com.gymbuddy.backgymbuddy.admin.columnWriter.domain.ColumnWriter;
import com.gymbuddy.backgymbuddy.admin.columnWriter.service.CWService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.gymbuddy.backgymbuddy.admin.base.Constants.COLUMN_WRITER_PREFIX;

@Slf4j
@RestController
@RequiredArgsConstructor
public class CWController extends BaseController {

    private final String URI_PREFIX = COLUMN_WRITER_PREFIX;

    private final CWService CWService;

    /**
     * 전체 칼럼 작성자 조회
     */
    @GetMapping(URI_PREFIX + "/all")
    public ResponseEntity<List<ColumnWriter>> selectColumnWriterList() {
        List<ColumnWriter> list = CWService.findAll();
        return createResponseEntity(true, list);
    }

    /**
     * 칼럼 작성자 상세
     */
    @GetMapping(URI_PREFIX + "/detail/{columnWriterId}")
    public ResponseEntity<ColumnWriter> selectColumnWriterDetail(@PathVariable("columnWriterId") Long columnWriterId) {
        log.info("칼럼 작성자 아이디로 조회 : {}", columnWriterId);
        ColumnWriter result = CWService.findOne(columnWriterId);
        return createResponseEntity(true, result);
    }

    /**
     * 칼럼 작성자 등록
     */
    @PostMapping(URI_PREFIX + "/new")
    public ResponseEntity<Map<String, Object>> insertColumnWriter(@RequestBody ColumnWriter columnWriter) {
        log.info("컬럼 작성자 등록 : {}", columnWriter);
        Long id = CWService.save(columnWriter);
        return createResponseEntity(true, id);
    }

    /**
     * 칼럼 작성자 내용 수정
     */
    @PutMapping(URI_PREFIX + "/update/{id}")
    public ResponseEntity<Map<String, Object>> updateColumnWriter(@PathVariable("id") Long id, @RequestBody String contents) {
        log.info("컬럼 작성자 수정 : {}", contents);
        CWService.update(id, contents);
        ColumnWriter findColumnWriter = CWService.findOne(id);

        Map<String, Object> result = new HashMap<>();
        result.put("id", findColumnWriter.getId());
        result.put("contents", findColumnWriter.getContents());
        return createResponseEntity(true, result);
    }

    /**
     * 칼럼 작성자 삭제
     */
    @DeleteMapping(URI_PREFIX + "/delete")
    public ResponseEntity deleteColumnWriter(@RequestParam List<Long> ids) {
        // TODO 로그가 어떻게 남는지 확인 필요
        log.info("컬럼 작성자 삭제 : {}", ids.toString());
        int result = CWService.delete(ids);
        return createResponseEntity(true, result);
    }

}
