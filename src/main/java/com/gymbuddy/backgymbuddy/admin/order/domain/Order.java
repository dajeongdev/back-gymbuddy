package com.gymbuddy.backgymbuddy.admin.order.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Order {

    @Id
    private Long id;
}
