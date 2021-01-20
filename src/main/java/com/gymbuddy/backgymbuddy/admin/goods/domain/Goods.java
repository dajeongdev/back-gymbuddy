package com.gymbuddy.backgymbuddy.admin.goods.domain;

import com.gymbuddy.backgymbuddy.admin.base.BaseDomain;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Goods extends BaseDomain {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "goods_id")
    private Long id;

    /**
     * 굿즈 이름
     */
    private String goodsName;

    /**
     * 이미지 경로
     */
    private String imgPath;

    /**
     * 이미지 이름
     */
    private String imgName;

}