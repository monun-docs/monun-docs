---
sidebar_position: 5
---

# Server Script

[Server Script](https://github.com/monun/server-script) 레포지토리에 대한 설명 문서입니다.

---

## Server Script 레포지토리가 뭔가요?

간편하게 마인크래프트 서버를 구축해주는 스크립트를 담은 레포지토리입니다.

리눅스 환경에서 스크립트 실행이 권장되며, 윈도우 환경에서도 사용이 가능하나 현재로서는 어느정도 복잡합니다.

---

## 실행 필수환경

- Java
- Linux 환경

## 실행하기
아래 명령어들은 리눅스 환경을 요구합니다. 윈도우의 경우 [여기](Windows-Setup)에서 설정하세요.

### 기본
```bash
wget https://raw.githubusercontent.com/monun/server-script/master/.server/start.sh # 다운로드
chmod +x ./start.sh # 실행 권한 부여
./start.sh launch # 실행
```
> [서버를 설정하기](#서버-설정하기)

### 커스텀

`https://raw.githubusercontent.com/monun/server-script/master/paper.sh`에서 다운로드 받으신 후 파일을 수정해 배포하세요.
```bash
chmod +x ./{script}.sh # 실행 권한 주기
./{script}.sh # 실행하기
```
> 만든 스크립트를 배포하실 수 있습니다.

---

## 서버 설정하기
```bash
# start.sh.conf

memory=2 # 2GB 메모리 할당
backup=true # 서버 종료 후 자동 백업
force_restart=true # 서버 종료 후 재시작
plugins=(
   'https://example.com/plugin.jar',
   'https://example.com/world-edit.jar'
) # 두 URL에서 플러그인 다운로드

server=https://example.com/server.jar # URL 설정하기
# server=/path/to/my.jar # 로컬 경로로 찾기
# server=. # 현재 경로에서 자동으로 찾기
```

## 문제해결

- 다운로드한 `server.jar`이 인식이 안돼요
   - grep 에서 perl 정규식을 사용 할 수 있어야 합니다. grep 업데이트를 진행해주세요. (최소 grep 2.5)

## 다른 구현체들

[Paper 전용 서버 실행기](Paper-Server-Script): [monun](https://github.com/monun/server-script/tree/paper)

Go언어로 제작된 서버 실행기: [aroxu](https://github.com/aroxu/server-script)

Rust: [dolphin2410](https://github.com/dolphin2410/server-script)

## License
Server Script의 라이선스는 MIT입니다.
