# Server Setup

이 문서에서는 [Parkour Maker](https://github.com/noonmaru/parkour-maker)의 서버 설정을 다룹니다.

~~아직까지는 레포지토리가 이사를 가질 않았으니 추후 이사 가셨을때 주소 monun으로 바꾸는거 잊지 말자~~

---

## 서버 구동기

현재 Parkour Maker가 요구하는 JDk버전은 11입니다.

## 서버 구축

## windows
papermc사이트에 들어가서 paper-1.16.1-138버전을 다운 받아줌니다.(https://papermc.io/api/v2/projects/paper/versions/1.16.1/builds/138/downloads/paper-1.16.1-138.jar 으로 들어가시면 다운 받으실수 있습니다.)
다운 받으셨으면
바탕화면에 파일을 만들어서 다운받은 파일을 넣어줍니다.
넣은 폴더에 우클릭을 하여 새로만들기 > 텍스트 문서을 눌러줍니다.
파일 이름은 아무것이나 상관 없습니다.
만든 텍스트 파일을 두번 클릭해서 실행해줍니다
실행한 파일은 메모장으로 열릴텐데 메모장에 이렇게 써줍니다.
java -Xms1G -Xmx2G -jar paper-1.16.1-138.jar
pause
써줬다면 메모장위 파일 > 저장을 눌러주고 닫아 줍니다.
그럼 폴더안에 paper-1.16.1-138.jar파일과 불라불라.txt파일이 있을텐데 이 불라불라.txt파일을 불라불라.bat파일로 바꿔줍니다.(만약 .txt가 안보인다면 파일 탐색기 위 보기을 클릭 파일 확장명을 체크해 줍니다.)
바꿔줬다면 불라불라.bat파일을 두번 클릭해서 실행해줍니다.

그럼 eula 어쩌구 저쩌구 라고 뜰 텐데 그럼 엔터을 눌러 닫아주고 폴더안에 eula.txt는 파일이 생겼을 것입니다.
그 eula.txt을 클릭하면 eula=false라고 쓰여 있을 겁니다 이 eula=flase을 eula=true로 바꿔줍니다.
그리고 파일 > 저장을 눌러 저장하고 닫아줍니다.
그리고 다시 불라불라.bat파일을 두번 클릭해주면 서버가 열립니다!
