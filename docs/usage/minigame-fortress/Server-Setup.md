---
slug: /usage/minigame-fortress/server-setup
---

# Server Setup

본 문서에서는 [minigame-fortress](https://github.com/monun/minigame-fortress)의 서버설정에 대해서 다룹니다.

---

## 자동 서버 구축 
이 플러그인은 자동 서버 구축을 지원합니다.

**새 디렉토리**에서 동작시키는 것을 권장합니다.

[Releases](https://github.com/monun/minigame-fortress/releases)에 있는 server.ps1을 다운로드.

새로 만든 디렉토리에 넣어 실행시켜주시면 됩니다.

디렉토리의 경로에 따라 powershell 혹은 cmd을 구동하여 ./server.ps1 을 입력하세요.

**리눅스 환경의 경우 PowerShell을 설치하셔야 동작됩니다.**

서버 구축과 서버 오류 사항과 관련된 내용은 [여기](/docs/Dev Docs/Minecraft-Server-FAQ.md)를 참조하세요.

## JDK 지원 안내
본 플러그인은 Java 8, Java 11을 지원합니다.

하지만 Java 11 사용을 권장합니다.
## 의존성 사용

> 위 내용대로 서버 구축을 하였다면 본 항목은 생략하셔도 됩니다.

해당의 플러그인은 의존성을 지닙니다 각각의 의존성은 아래와 같습니다.

```
[Kotlin 1.4.30]
[minigame-fortress 0.0.1]
[team-spawn 0.0.1]
[block-trigger 0.0.1]
[delayed-respawn 0.0.1]
[ProtocolLib 4.6.0]
[worldedit-bukkit-7.2.2]
```
[Kotlin 1.4.30](https://github.com/monun/kotlin-plugin/releases/download/1.1.0/Kotlin-1.4.30.jar)

[Minigame-fortress 0.0.1](https://github.com/monun/minigame-fortress/releases/download/0.0.1/Fortress.jar)

[Team-spawn 0.0.1](https://github.com/monun/team-spawn/releases/download/0.0.1/TeamSpawn.jar)

[Block-trigger 0.0.1](https://github.com/monun/block-trigger/releases/download/0.0.1/BlockTrigger.jar)

[Delayed-respawn 0.0.1](https://github.com/monun/delayed-respawn/releases/download/0.0.1/DelayedRespawn.jar)

[ProtocolLib 4.6.0](https://github.com/dmulloy2/ProtocolLib/releases/download/4.6.0/ProtocolLib.jar)

[Worldedit-bukkit-7.2.2](https://dev.bukkit.org/projects/worldedit/files/3433988)

위와 같은 플러그인의 요인에 들어가는 의존성을 꼭 서버폴더 plugins 내부폴더에 적용하여 주세요.
