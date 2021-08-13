# Server Setup

이 문서에서는 [Parkour Maker](https://github.com/noonmaru/parkour-maker)의 서버 설정을 다룹니다.

~~아직까지는 레포지토리가 이사를 가질 않았으니 추후 이사 가셨을때 주소 monun으로 바꾸는거 잊지 말자~~

---

## 서버 구동기

현재 Parkour Maker가 요구하는 Paper 버전은 1.16.1입니다.

## 서버 구축

# windows

준비물: [paper 1.16.1](https://papermc.io/api/v2/projects/paper/versions/1.16.1/builds/138/downloads/paper-1.16.1-138.jar) [kotlin](https://github.com/noonmaru/kotlin-plugin/releases/download/1.3.72/kotlin-1.3.72-lib.jar) [worldedit](https://dev.bukkit.org/projects/worldedit/files/2869453/download) [ProtocolLib](https://github.com/dmulloy2/ProtocolLib/releases/download/4.6.0/ProtocolLib.jar) [Tap](https://github.com/noonmaru/tap/releases/download/2.8.8/tap-2.8.8-dist.jar)

paper 1.16.1을 서버 폴더 안에 넣줍니다.

paper를 넣었다면 폴더 안을 우 클릭 후 세로 만들기 > 텍스트 문서를 클릭해서 텍스트 문서를 만들어줍니다.

텍스트 파일을 만들었다면 두 번 클릭해 텍스트 파일을 열어줍니다.

열은 텍스트 파일에 이렇게 써줍니다.

'java -Xms1G -Xmx12G paper-1.16.1-138.jar'
'pause' (pause는 선택사항입니다.)

써주셨으면 메모장 위쪽에 있는 파일 클릭 후 저장을 눌러줍니다.

저장하셨다면. txt 파일을. bat 파일로 바꿔줍니다.

.txt가 안 보인다면 파일 탐색기 위쪽에 있는 보기를 클릭 후 파일 확장명을 체크해줍니다.

바꾸셨다면. bat 파일을 두 번 클릭하여 실행시켜보면

'You need to agree to the EULA in order to run the server. Go to eula.txt for more info'

라면서 실행이 안 됩니다.

그럼 엔터를 눌러 꺼주고 폴더 안에 eula.txt 파일이 생겼을 것입니다.

eula.txt 파일을 두 번 클릭하여 실행 후 eula=false을 eula=true로 바꿔줍니다.

저장하고 파일을 끈 후. bat 파일을 두 번 클릭하여 실행합니다.

그럼 서버가 열렸을 것입니다.

그럼 stop을 검은 창에 치고 엔터를 눌러 서버를 닫아줍니다.

그리고 위 준비물에 있는 kotlin, Tap, ProtocolLib, worldedit을 다운로드해 서버 폴더 안에 있는 plugins 폴더 안에 넣어줍니다.

그럼 서버 설정은 끝났습니다.
