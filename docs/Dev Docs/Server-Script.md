# Server Script

[Server Script](https://github.com/monun/server-script) 레포지토리에 대한 설명 문서입니다.

---

## Server Script 레포지토리가 뭔가요?

간편하게 마인크래프트 Paper 서버를 구축해주는 스크립트를 담은 레포지토리입니다.

리눅스 환경에서 스크립트 실행이 권장되며, 윈도우 환경에서도 사용이 가능하나 현재로써는 어느정도 복잡합니다.

---

## 실행 필수환경

- JAVA

- LINUX (Shell)

### Linux

#### start.sh (기본)

1. .server/start.sh 파일을 다운로드
   * `wget https://raw.githubusercontent.com/monun/server-script/master/.server/start.sh`
2. 실행권한 부여
   * `chmod +x ./start.sh`
3. 실행 
   * `./start.sh` (현재 폴더에서 서버 실행됨)
4. [선택] 서버 시작시 생성된 ./start.sh.conf 파일을 필요대로 수정

#### {server}.sh (사전 설정 가능)

1. 원하는 스크립트 선택 (아래 방법 중 하나를 선택)
   * 예) paper 스크립트 다운로드 `wget https://raw.githubusercontent.com/monun/server-script/master/paper.sh`
   * 예) 프로젝트를 복제 `git clone https://github.com/monun/server-script.git`
2. [선택] 스크립트를 수정 (플러그인, 백업, 재시작 등)
3. 실행권한 부여
   * `chmod +x ./{script}.sh`
4. 실행
   * `./{script}.sh` (`.{script}` 폴더에서 server.sh 스크립트를 이용한 서버가 실행됨)
5. [선택] 사전설정된 스크립트를 배포

### Windows

윈도우 유저분들은 WSL혹은 mingw64를 통해 실행하세요.

#### WSL

어느정도 리눅스에 대한 지식이 필요하기에, 아래의 mingw64 보다는 다소 복잡할 수 있습니다.

[Microsoft 공식 설명서](https://docs.microsoft.com/ko-kr/windows/wsl/install-win10) 를 읽고, WSL을 구성한 뒤 서버스크립트를 WSL 내에서 실행시켜주시면 됩니다.

#### mingw64

* git을 설치하면 `C:\Program Files\Git\mingw64` 경로에 자동으로 설치됩니다.
* 환경변수 PATH에 `C:\Program Files\Git\mingw64\bin` 을 추가하세요.
* [wget.exe](https://eternallybored.org/misc/wget/) 파일을 다운로드하여 mingw64 폴더에 넣어주세요. (주의: GNU에서 릴리즈하는 공식 바이너리 파일이 아닙니다. 주의해 주시기 바랍니다.)

---

## start.sh.conf의 server 설정하기 (서버로 사용할 jar파일 설정하기)

1. URL로 설정하기 (웹에서 파일을 다운로드하여 `~/.minecraft/server/` 폴더에 저장 후 서버 시작)
   * `server=https://papermc.io/api/v1/paper/1.7/latest/download` : wget을 통해 웹에서 다운로드 합니다.
2. 로컬 경로로 설정하기
   * `server=/user/monun/my.jar`
     * 리눅스 디렉터리 /user/monun/my.jar 를 이용해 서버를 실행합니다.
   * `server=$HOME/my.jar`
     * $HOME 변수가 존재할때 $HOME 디렉터리에 있는 my.jar 를 이용해 서버를 실행합니다.
   * `server=C:\\Users\monun\my.jar`
     * 윈도우 디렉터리 C:\Users\monun\my.jar 를 이용해 서버를 실행합니다.
3. 현재 디렉토리에서 자동으로 찾기
   * `server=.`

## 문제해결

* 다운로드한 server jar이 인식이 안돼요
  * grep 에서 perl 정규식을 사용 할 수 있어야 합니다. grep 업데이트를 진행해주세요. (최소 grep 2.5)

## 다른 구현체들

Go언어로 제작된 서버 실행기: [aroxu](https://github.com/aroxu/server-script)

## License
Server Script의 라이선스는 MIT입니다.