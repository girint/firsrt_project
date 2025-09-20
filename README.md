#  💻 CODE TAB 💻


<!--![256컬러](메인사진 추가해보자)-->
<div align="center">

 ![title001](https://github.com/NovTeamProject/Team_Project/assets/145963611/c9aa4e57-dd0e-456a-8631-ace01e80288e)<!--!여기에 사진 추가하면 돼-->





| **![표만드는법]** | **![kakao]** | **![notion2]** |
| :------: |  :------: | :------: |
| [주소] |  만료  |  만료 |


</div>

## 📚 목차 📚

01. [📂 PPT](#-PPT-)
02. [📖 프로젝트 소개](#-프로젝트-소개)
03. [💡 기획 의도](#기획-의도)
04. [🙋‍♀️ Team_Member](#%EF%B8%8F-team_member-%EF%B8%8F)
05. [📋 개발 일지](#개발-일지)
06. [📈  요구 명세서](#-요구-명세서-)
07. [📊 Diagram](#-다이어그램-)
08. [📹 기능 설명](#-기능-설명-)
09. [🔨개발 환경](#-개발-환경-)
10. [🤐개선 사항](#-개선-사항-)


       
## 📖 프로젝트 소개📖   <!--예시로 하나 남겨두기-->

- 코드탭 - 코드를 배우고 싶은 사람들을 위한 인터넷 강의사이트
- 코드를 배우고 싶어하는 누구든지 두드리면서 함께 배워나가자는 의미로 코드탭이라는 이름을 지음
- 선생님은 강의를 올릴 수 있고 코드 학습에 필요한 질문을 할 수 있도록 게시판을 구현
- 각 강의마다 게시판을 구현하면서 선생님과 학생간의 커뮤니케이션을 할 수 있도록 구현


<div align="center">  <!--!마찬가지 표만드는 법-->

| **남원우** | **변재혁** | **유지호** | **차소영** |
| :------: |  :------: | :------: | :------: | 
| [<img src="https://avatars.githubusercontent.com/u/145524959?v=4" height=150 width=150> <br/> @wwnoov](https://github.com/wwnoov) | [<img src="https://avatars.githubusercontent.com/u/145942491?v=4" height=150 width=150> <br/> @jaehyukpyon2](https://github.com/jaehyukpyon2) | [<img src="https://avatars.githubusercontent.com/u/145963790?v=4" height=150 width=150> <br/> @jiho-96](https://github.com/jiho-96) | [<img src="https://avatars.githubusercontent.com/u/145963611?v=4" height=150 width=150> <br/> @Eumnya415](https://github.com/Eumnya415) |
| 로그인, 회원가입<br>명예의 전당<br>정답 서비스<br>기능 구현<br>Git Hub 관리 | DB 설계 및 Query 작성 <br> MyBatis구축 <br> 학생, 선생님 강의 시스템 <br> 기능 구현 <br> AWS 배포 |  Query 작성<br> 질의 응답 게시판<br>기능 구현<br>발표 자료 준비<br>DB 관리 | 나의 강의실<br> 강의 상세 페이지<br> 기능 구현<br>웹 디자인 설계 <br>노션 관리 <br>| 

</div>


## 📹 기능 설명 📹 <!--!여러개도 한번에 숨김처리로 나타낼수 있음-->


<details><summary>메인화면</summary>
<br/>

https://github.com/NovTeamProject/Team_Project/assets/145524959/506a9e4e-71b8-4072-8a95-cd954fea215e


</details>

<details><summary>로그인</summary>
<br/>

https://github.com/NovTeamProject/Team_Project/assets/145524959/c26d468e-2da1-4310-8325-a83cff4bba20

### [로그인 Code](https://github.com/NovTeamProject/Team_Project/blob/c431c8cf1b65235d922cd6ea7fdba3a699816c18/src/main/java/com/example/team_project/teacher/controller/TeacherJoinController.java#L25C5-L59C2)

### [주소API Code](https://github.com/NovTeamProject/Team_Project/blob/c431c8cf1b65235d922cd6ea7fdba3a699816c18/src/main/webapp/membership/views/joinTeacher.jsp#L119C1-L178C10)

</details>

<details><summary>회원가입</summary>
<br/>

https://github.com/NovTeamProject/Team_Project/assets/145524959/3dc13eac-2342-4cbe-bf40-672a653f5e30

https://github.com/NovTeamProject/Team_Project/assets/145524959/21eaa843-b469-44ba-9011-04a819514617

### [회원가입 Code](https://github.com/NovTeamProject/Team_Project/blob/c431c8cf1b65235d922cd6ea7fdba3a699816c18/src/main/java/com/example/team_project/teacher/controller/TeacherJoinController.java#L25C5-L59C2)    

</details>


## 🤐 개선 사항 🤐  <!--!하나더 꾸미는 방법 나타나기-->

<details><summary>개선사항</summary>
<br/>
 
1. 유효성 검사 (프론트, 백 동일하게 적용)
2. 보안
3. 문서화 (한 사람이 한 것 처럼 → 코딩)
4. 성능 (데이터 문자 → 숫자 / sort X → Index)
5. select * 를 사용하지 말 것 → 필드명을 명확히 할 것
6. 오류 시 쿼리가 보이는 것 문제 해결
7. 상호 개발에 대해서 직접 확인할 것
8. 모바일 지원 (Grid, Flex)
9. 사용 이력 남도록 하기 (동영상 시청 기록)
10. 반응형 웹 보완 (마우스 호버 효과가 화면 줄이면 제대로 작동 안하는 현상..)

</details>

## 🔨 개발 환경 🔨 <!--이건 간지나서 하나 살려둠-->
<div>
<img src="https://img.shields.io/badge/JAVA-C01818?style=flat-square&logo=coffeescript&logoColor=white" />
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=fff"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=000"/>
     
<br>
<img src="https://img.shields.io/badge/bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white"/>
<img src="https://img.shields.io/badge/jquery-0769AD?style=flat&logo=jquery&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=fff"/>
<br>

<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white" />
<img src="https://img.shields.io/badge/MariaDB-003545?style=flat&logo=MariaDB&logoColor=white" />
<img src="https://img.shields.io/badge/Mybatis-000000?style=flat&logo=Fluentd&logoColor=white"/>
<br>
<img src="https://img.shields.io/badge/IntelliJ-000000?style=flat-square&logo=intellijidea&logoColor=white" />
<img src="https://img.shields.io/badge/bitly-EE6123?style=flat-square&logo=bitly&logoColor=blue" />  
<img src="https://img.shields.io/badge/StarUML-E25A1C?style=flat-square&logo=apachespark&logoColor=white" />
<br>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=slack&logoColor=white" />
<img src="https://img.shields.io/badge/notion-000000?style=flat-square&logo=notion&logoColor=blue" />  

<img src="https://img.shields.io/badge/amazonaws-232F3E?style=flat-square&logo=amazonaws&logoColor=blue" />
<br>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white" />
<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" />
<img src="https://img.shields.io/badge/Sourcetree-0052CC?style=flat-square&logo=Sourcetree&logoColor=blue" />
<img src="https://img.shields.io/badge/gitkraken-179287?style=flat-square&logo=gitkraken&logoColor=white">
</div>
