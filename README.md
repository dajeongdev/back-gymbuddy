# 운동친구
![gymbuddy_main](https://user-images.githubusercontent.com/61612976/117940547-2122aa00-b344-11eb-9e18-a6bd3d852b12.png)
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
![gymbuddy_intro](https://user-images.githubusercontent.com/61612976/117940502-17994200-b344-11eb-9511-30bb5ef8346d.png)
<br />

### 멤버
*
![gymbuddy_member](https://user-images.githubusercontent.com/61612976/117940512-19fb9c00-b344-11eb-9fbf-17affafb8505.png)

<br />

### 문의
* 
[목록]
[등록]
<br />

### 자주묻는질문(FAQ)
* 
[목록]
<br />

### 굿즈
* 
[굿즈 목록]
![gymbuddy_goods_detail](https://user-images.githubusercontent.com/61612976/118349332-16a62180-b58b-11eb-8ac3-b02ff52fc06a.png)
<br /><br />


## 관리자(Admin) 페이지
### 소개
*
![gymbuddy_admin_mission1](https://user-images.githubusercontent.com/61612976/118349244-85cf4600-b58a-11eb-9860-d52e964da6e1.png)
![gymbuddy_admin_mission2](https://user-images.githubusercontent.com/61612976/118349245-8667dc80-b58a-11eb-9ab0-8f1d15217edc.png)
<br />

### 멤버
*
![gymbuddy_admin_member](https://user-images.githubusercontent.com/61612976/118349241-8536af80-b58a-11eb-953a-c5b928b2c593.png)
<br />

### 자주묻는질문(FAQ)
*
[목록]
[등록]
<br />

### 문의
*
[목록]
[상세]
<br />

### 굿즈
*
![gymbuddy_admin_goods_list](https://user-images.githubusercontent.com/61612976/118349475-dabf8c00-b58b-11eb-92f8-5462dec929f4.png)
![gymbuddy_admin_goods](https://user-images.githubusercontent.com/61612976/118349240-82d45580-b58a-11eb-8cd2-fdc2544bcf19.png)
<br />
