# 운동친구
![gymbuddy_main](https://user-images.githubusercontent.com/61612976/118395607-3706d680-b686-11eb-8ef1-2576a1ec5f46.png)
<br />
<br />

## 개요
- **구성원** : 백엔드 2, 프론트엔드 2, 디자이너 1 
- **기간** : 2021.01 - 2021.03 (2021.04 테스트)
- **주제** : 실제로 서비스될 원데이 운동 클래스의 프로그램 및 굿즈 소개와 회사의 소개 및 칼럼, 유튜브 등을 게시할 수 있는 원데이 운동 클래스 및 커뮤니티 사이트
- **구현 목표** : Vue.js의 프론트와 Spring Boot와 JPA의 백을 사용하여 원데이 클래스의 프로그램 및 굿즈를 소개하고, 관리자가 직접 칼럼과 유튜브 등을 게시할 수 있는 서비스를 제공합니다.
<br />

## 개발 환경
|개발 환경|설정|
|---|---|
|개발 언어|Java 1.8|
|Database|MariaDB|
|개발 IDE|IntelliJ IDEA|
|Java Framework|Spring Boot|
|Persistent Framework|JPA, Spring Data JPA|
|CSS Framework|Bootstrap 4.4.1|
|Javascript Library|Vue.js|
|형상 관리|Github|
|테스트 도구|Postman|
|빌드 도구|Gradle|
|협업 도구|Notion|
<br />

## 구현 기능
* AWS RDS를 이용한 서버 구축
* DataGrip을 사용한 MariaDB 데이터베이스 구성
* Spring Security를 이용한 회원가입 및 로그인, 정보수정 로직
* 회사 소개와 멤버를 소개하는 페이지
* 회사의 공지 및 뉴스를 게시할 수 있는 게시판
* 정기적으로 올라오는 회사의 칼럼을 게시할 수 있는 게시판
* 원데이 클래스의 프로그램 및 굿즈 정보 전달을 위한 기능
* 원데이 클래스나 홈페이지, 계정 등에 대해 질문할 수 있는 문의 게시판
* 관리자 등급만이 사용할 수 있는 Admin 페이지 (관리자가 사용자가 보는 페이지의 대부분을 직접 게시함)
<br />

## 담당 기능
* DataGrip을 사용한 MariaDB 데이터베이스 구성
* 사용자 및 Admin 페이지의 소개 및 멤버, 문의 및 FAQ, 굿즈 파트 기능 구현
<br /><br />

## 사용자 페이지
### 소개
*
![gymbuddy_intro1](https://user-images.githubusercontent.com/61612976/118395636-5dc50d00-b686-11eb-87ba-a7ca07c25cde.png)
![gymbuddy_intro2](https://user-images.githubusercontent.com/61612976/118395608-379f6d00-b686-11eb-858c-0a754dac6804.png)
<br />

### 멤버
*
![gymbuddy_member](https://user-images.githubusercontent.com/61612976/118395606-366e4000-b686-11eb-8bdf-4133d03cd813.png)

<br />

### 문의
* 
![gymbuddy_question_list](https://user-images.githubusercontent.com/61612976/118395604-35d5a980-b686-11eb-8e9b-913ff5fcce8f.png)
![gymbuddy_question_insert](https://user-images.githubusercontent.com/61612976/118395603-35d5a980-b686-11eb-9038-0b6bafb161a6.png)
<br />

### 자주묻는질문(FAQ)
* 
![gymbuddy_faq](https://user-images.githubusercontent.com/61612976/118395597-30785f00-b686-11eb-8987-0599d28190f5.png)
<br />

### 굿즈
* 
![gymbuddy_goods_list](https://user-images.githubusercontent.com/61612976/118395601-353d1300-b686-11eb-8f6b-f40be802ee31.png)
![gymbuddy_goods_detail](https://user-images.githubusercontent.com/61612976/118395598-32dab900-b686-11eb-9abe-7ea24039af1f.png)
<br /><br />


## 관리자(Admin) 페이지
### 소개
*
![gymbuddy_admin_intro1](https://user-images.githubusercontent.com/61612976/118396036-8e0dab00-b688-11eb-92ad-0076c575cde5.png)
![gymbuddy_admin_intro2](https://user-images.githubusercontent.com/61612976/118396039-90700500-b688-11eb-8375-6ff33137cc46.png)
<br />

### 멤버
*
![gymbuddy_admin_member](https://user-images.githubusercontent.com/61612976/118396040-91089b80-b688-11eb-90b2-9c38c1c3d18d.png)
<br />

### 자주묻는질문(FAQ)
*
![gymbuddy_admin_faq_list](https://user-images.githubusercontent.com/61612976/118394962-c611ef80-b682-11eb-8bbe-4cbc7591a60b.png)
![gymbuddy_admin_faq_insert](https://user-images.githubusercontent.com/61612976/118395083-84ce0f80-b683-11eb-9278-55e5107481dd.png)
<br />

### 문의
*
[목록]
[상세]
[검색]
<br />

### 굿즈
*
![gymbuddy_admin_goods_list1](https://user-images.githubusercontent.com/61612976/118396042-9239c880-b688-11eb-8f71-d7923f15fc35.png)
![gymbuddy_admin_goods_insert](https://user-images.githubusercontent.com/61612976/118396533-e5ad1600-b68a-11eb-90f8-15c669399c43.png)
<br />
