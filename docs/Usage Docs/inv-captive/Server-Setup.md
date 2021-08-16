# Server Setup

본 문서에서는 [inv-captive](https://github.com/monun/inv-captive)의 서버 설정에 대해서 다룹니다.

---

## 자동 서버 구축

본 플러그인은 자동 서버 구축을 지원합니다.

[Releases](https://github.com/monun/inv-captive/releases)에 있는 `server.ps1`을 다운로드.

해당 파일을 다운로드 하신 후 열어주시면 됩니다.

서버 구축과 서버 오류 사항과 관련된 내용은 [여기](/docs/Dev Docs/Minecraft-Server-FAQ.md)를 참조하세요.

**새 디렉토리**에서 동작시키는 것을 권장합니다.
디렉토리의 경로에 따라 ``powershell`` 혹은 ``cmd``을 구동하여 `./server.ps1` 을 입력하세요.

**리눅스 환경의 경우 PowerShell을 설치하셔야 동작됩니다.**

## JDK 지원 안내

본 플러그인은 `JDK-11` 부터 지원하고 있습니다.

JDK 설치 내용은 [여기](/docs/Dev Docs/Java-Installation.md)를 참조하여주시길 바랍니다.

> 본 버킷이 `JDK-1.8`의 지원을 종료 함에 따라 `JDK-11`로 동작하여야 합니다.

## 의존성 사용

> 위 내용대로 서버 구축을 하였다면 본 항목은 생략하셔도 됩니다.

해당의 플러그인은 의존성을 지닙니다.

각각의 의존성은 아래와 같습니다.

```
[Tap 3.3.2]
[Kotlin 1.4.21]
```

[[Tap 3.3.2 Download](https://github.com/monun/tap/releases/download/3.3.2/Tap.jar)]

[[Kotlin 1.4.21 Download](https://github.com/monun/kotlin-plugin/releases/download/1.4.21/Kotlin.jar)]

위와 같은 플러그인의 요인에 들어가는 의존성을 꼭 서버폴더 plugins 내부폴더에 적용하여 주세요.