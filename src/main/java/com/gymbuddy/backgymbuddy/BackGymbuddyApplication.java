package com.gymbuddy.backgymbuddy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class BackGymbuddyApplication /* extends  SpringBootServletInitializer */ {

    public static void main(String[] args) {
        SpringApplication.run(BackGymbuddyApplication.class, args);
    }

 /*   @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(BackGymbuddyApplication.class);
    } */
}
