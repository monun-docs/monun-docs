# Server Setup

본 문서에서는 위 [링크](https://github.com/monun/inv-captive)의 서버 설정에서 다룹니다.

---

## 서버 구축

본 플러그인은 서버 구축을 지원합니다.

[Releases](https://github.com/monun/inv-captive/releases)에 있는 `server.ps1`을 설치하세요.
순차적으로 해당의 파일을 다운로드 하신 후 열어주시면 됩니다.

오류 사항의 관해 위 [링크](https://github.com/qogusdn1017/monun-documentation-contribution/blob/main/inv-captive/Server-Error-FaQ.md)을 참조하세요.

**리눅스 환경의 경우 PowerShell을 설치하셔야 동작됩니다.**

## JDK 지원

본 문서에서 JDK란 `Java Development Kit`의 약어입니다.

위 JDK 관련한 오류는 해당 [링크](https://github.com/qogusdn1017/monun-documentation-contribution/blob/main/inv-captive/Server-Error-FaQ.md)을 클릭하세요.

본 플러그인은 `JDK-11` 부터 지원하고 있습니다.

### JDK
[JDK-11](https://www.oracle.com/kr/java/technologies/javase-jdk11-downloads.html)

> 본 버킷이 `JDK-1.8`의 지원을 종료 함에 따라 `JDK-11`로 동작하여야 합니다.

## 서버 스크립트 실행

**새 디렉토리**에서 동작시키는 것을 권장합니다.
디렉토리의 경로에 따라 ``Powershell`` 혹은 ``Cmd``을 구동하여 `./server.ps1` 을 입력하세요.

## 의존성 사용

> 본 환경에서 서버 구축을 하였다면 본 문은 생략하셔도 됩니다.

해당의 플러그인은 의존성을 지닙니다.

각각의 의존성은 아래와 같습니다.

``
Tap
Kommand
`` 와 같습니다.

위 와 같은 플러그인의 요인에 들어가는 의존성을 꼭 서버에 적용하여 주세요.
