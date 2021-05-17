# 운동친구
![gymbuddy_main](https://user-images.githubusercontent.com/61612976/118395607-3706d680-b686-11eb-8ef1-2576a1ec5f46.png)
<br />
<br />

## 개요
- **구성원** : 백엔드 2, 프론트엔드 2, 디자이너 1 
- **기간** : 2021.01 - 2021.03 (2021.04 테스트)
- **주제** : 원데이 운동 클래스를 진행하는 회사의 소개와 운동 프로그램 및 굿즈 소개, 칼럼, 유튜브 등을 게시할 수 있는 웹 사이트
- **구현 목표** : Vue.js와 Spring Boot, JPA를 기반으로 원데이 클래스 프로그램 및 굿즈 및 칼럼과 유튜브 등을 직접 관리할 수 있는 어드민 기능 제공
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
* 관리자가 등록한 소개, 활동기록, BI(Business Identity) 정보를 이미지와 함께 확인할 수 있다.
![gymbuddy_intro1](https://user-images.githubusercontent.com/61612976/118395636-5dc50d00-b686-11eb-87ba-a7ca07c25cde.png)
![gymbuddy_intro2](https://user-images.githubusercontent.com/61612976/118395608-379f6d00-b686-11eb-858c-0a754dac6804.png)
<br />

### 멤버
![gymbuddy_member](https://user-images.githubusercontent.com/61612976/118395606-366e4000-b686-11eb-8bdf-4133d03cd813.png)
<br />

### 문의
* 작성자와 관리자 외의 타인에게 노출되지 않고 1:1로 문의글을 남길 수 있고, 에디터를 기본으로 사용할 수 있으며, 이미지 추가가 가능하다.
![gymbuddy_question_list](https://user-images.githubusercontent.com/61612976/118395604-35d5a980-b686-11eb-8e9b-913ff5fcce8f.png)
![gymbuddy_question_insert](https://user-images.githubusercontent.com/61612976/118395603-35d5a980-b686-11eb-9038-0b6bafb161a6.png)
<br />

### 자주묻는질문(FAQ)
* 홈페이지 하단 푸터의 자주묻는질문 버튼을 통해 계정, 홈페이지 이용 등 관리자가 등록한 자주묻는질문을 확인할 수 있다.
![gymbuddy_faq](https://user-images.githubusercontent.com/61612976/118395597-30785f00-b686-11eb-8987-0599d28190f5.png)
<br />

### 굿즈
* 관리자가 등록한 이미지, 판매 상태 등 굿즈들의 목록을 볼 수 있고, 클릭하면 상세 내용 확인할 수 있다.
![gymbuddy_goods_list](https://user-images.githubusercontent.com/61612976/118395601-353d1300-b686-11eb-8f6b-f40be802ee31.png)
![gymbuddy_goods_detail](https://user-images.githubusercontent.com/61612976/118395598-32dab900-b686-11eb-9abe-7ea24039af1f.png)
<br /><br />


## 관리자(Admin) 페이지
### 소개
* 소개에는 이미지를 최대 3개까지 추가할 수 있고, BI는 웹과 모바일 버전을 구분하여 이미지를 등록한다.
![gymbuddy_admin_intro1](https://user-images.githubusercontent.com/61612976/118396036-8e0dab00-b688-11eb-92ad-0076c575cde5.png)
![gymbuddy_admin_intro2](https://user-images.githubusercontent.com/61612976/118396039-90700500-b688-11eb-8375-6ff33137cc46.png)
<br />

### 멤버
* 멤버 또한 웹과 모바일 버전을 구분하여 이미지를 등록한다.
![gymbuddy_admin_member](https://user-images.githubusercontent.com/61612976/118396040-91089b80-b688-11eb-90b2-9c38c1c3d18d.png)
<br />

### 자주묻는질문(FAQ)
* 관리자가 홈페이지 이용 등에 필요한 정보들을 카테고리, 제목, 내용을 포함해 등록할 수 있다.
![gymbuddy_admin_faq_list](https://user-images.githubusercontent.com/61612976/118394962-c611ef80-b682-11eb-8bbe-4cbc7591a60b.png)
![gymbuddy_admin_faq_insert](https://user-images.githubusercontent.com/61612976/118395083-84ce0f80-b683-11eb-9278-55e5107481dd.png)
<br />

### 문의
* 사용자들이 남긴 문의글의 목록을 확인할 수 있고, 해당 게시글에 댓글을 달 수 있으며, 문의글의 제목 또는 작성자별로 검색할 수 있다.
![gymbuddy_admin_question_list](https://user-images.githubusercontent.com/61612976/118433495-17b78a00-b716-11eb-85e7-54ba5533a916.png)
![gymbuddy_admin_question_detail](https://user-images.githubusercontent.com/61612976/118433497-18e8b700-b716-11eb-8f44-23d8ce910f61.png)
![gymbuddy_admin_question_search](https://user-images.githubusercontent.com/61612976/118433489-15edc680-b716-11eb-87bf-7e2fd196b452.png)
<br />

### 굿즈
* 굿즈에는 썸네일 이미지, 상세 이미지를 필수로 넣어야 하며, 기본 정보를 포함해 여러 개의 옵션을 추가할 수 있다.
![gymbuddy_admin_goods_list1](https://user-images.githubusercontent.com/61612976/118396042-9239c880-b688-11eb-8f71-d7923f15fc35.png)
![gymbuddy_admin_goods_insert](https://user-images.githubusercontent.com/61612976/118396533-e5ad1600-b68a-11eb-90f8-15c669399c43.png)
<br />
