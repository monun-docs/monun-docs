---
slug: /plugins/speculation/server-setup
---

# Speculation Server Setup

본 문서에서는 [Speculation](https://github.com/monun/speculation)의 서버 설정에 대해서 다룹니다.

---

## JDK 지원 안내
본 플러그인은 `JDK-16` **"만"** 지원하고 있습니다. 마인크래프트 1.18에서부터는 JDK-17이 필요하므로 따로 수정이 필요합니다.

JDK 설치 내용은 [여기](/usage/Java16-Installation)를 참조하여주시길 바랍니다.

---

## 서버 구동

1. [server.zip](https://github.com/monun/speculation/releases/latest/download/server.zip) 다운로드
2. 원하는 폴더에 압축 풀기
3. 서버 실행
   * windows -> run-windows.bat 실행
   * linux -> ./run-linux.sh
4. 서버 접속
5. 팀 선택 `/team join <team> <player>`
6. 게임 시작 `/speculation start <world> <players> <teamMatch>`
    * 예) 개인매치 - `/speculation start world @a false`
    * 예) 그룹매치 - `/speculation start world @a true`

(JDK 조건이 만족되지 않을경우 실행되지 않을 수 있습니다.)

(상단의 구동 방법은 speculation 레포지토리 공식 README에서 가져왔습니다. [[확인하기](https://github.com/monun/speculation/blob/master/README.md)])
