# Server Error FAQ

마인크래프트 서버 실행 시 나오는 오류 메시지들에 대한 자주 묻는 질문 모음입니다.

# 질문 하기 전에

Google과 같은 검색 사이트에서 직접 검색하여 먼저 문제를 찾아 보시는 것을 추천 드립니다.

관련된 내용을 무조건 이슈에 작성하지 말고, "오류내용이 이 플러그인과 관련해서밖에 나올 수 없다" 라고 생각하는 경우에 이슈를 달아 주시길 바라겠습니다.

## Java Version Error:

오류 내용이

```
org.bukkit.plugin.InvalidPluginException: java.lang.UnsupportedClassVersionError: ~~~ has been compiled by a more recent version of the Java Runtime (class file version xx.0), this version of the Java Runtime only recognizes class file versions up to xx.0
```

와 같거나 유사한 경우, 자바 버전에 관련된 문제입니다. JDK 11이나 JDK 16을 설치해야합니다. (최신쪽은 대부분 16 사용중입니다.) 설치 내용은 [Java Installation](/docs/Dev Docs/Java-Installations.md) 문서를 참조해주세요.

## Unknown Dependency:

오류 내용이
```
org.bukkit.plugin.UnknownDependencyException: Unknown dependency ~~~. Please download and install ~~~ to run this plugin.
```
와 같거나 유사한 경우, 의존성 플러그인이 누락된 문제입니다. 의존성 플러그인을 다운받아 주세요.

제가 제작한 의존 가능한 플러그인들은 [Tap](https://github.com/monun/tap/releases), [Kotlin](https://github.com/monun/kotlin-plugin/releases)등이 있으며, 다른 이들이 만든 의존성 플러그인들은 [WorldEdit](https://dev.bukkit.org/projects/worldedit/files), [ProtocolLib](https://github.com/dmulloy2/ProtocolLib/releases) 등이 있습니다.