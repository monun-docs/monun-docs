# Server Error FaQ

마인크래프트 서버 실행 시 나오는 오류 메시지들에 대한 자주 묻는 질문 모음입니다.

# 질문 하기 전에

Google과 같은 검색 사이트에서 직접 검색하여 먼저 문제를 찾아 보시는 것을 추천 드립니다.

관련된 내용을 무조건 이슈에 작성하지 말고, "오류내용이 이 플러그인과 관련해서밖에 나올 수 없다" 라고 생각하는 경우에 이슈를 달아 주시길 바라겠습니다.

---

# Java Version Error

## 시작하기 전에

Java Version 관련 오류는 여러가지가 있습니다. 이 글에서는 대표적인 오류 내용으로 설명을합니다.

```
org.bukkit.plugin.InvalidPluginException: java.lang.UnsupportedClassVersionError: ~~~ has been compiled by a more recent version of the Java Runtime (class file version 55.0), this version of the Java Runtime only recognizes class file versions up to 52.0
```

와 같은 오류가 나올 경우 이 글을 확인해주세요.

---

최근 [PaperMC](https://papermc.io/) 에서 Minecraft 1.17이 출시 될 시 Java 8에 대한 지원을 중단한다는 소식이 나왔습니다. 이로 인하여 개발자들이 Java(JDK) 11로 버전을 올려서 코드를 작성하게 되었습니다.

이 과정에서 JDK 11을 이용해 플러그인이 컴파일 되고, 현재로써는 PaperMC가 계속 Java 8을 지원하지만 JDK 11을 이용해 컴파일 된 플러그인이 로딩이 되고 있지 않습니다.

## 해결 방법

Java 11이하의 Java를 제거하고 Java 11을 설치하는 방법입니다.

설치하는 방법은 다양합니다. [여기](/Java-Installation.md)에서 확인해주시길 바랍니다.

---

```

```

와 같은 오류가 나올 경우 이 글을 확인해주세요.

---

32비트의 Java를 설치하여서 나오는 오류 내용입니다.

64비트의 Java를 설치하고 시도해 보시길 바랍니다. OpenJDK11이 권장됩니다.

설치 문서는 [여기](docs/Tech Docs/Java-Installation)에서 확인해주시길 바랍니다.
# Unknown Dependency

```
org.bukkit.plugin.UnknownDependencyException: Unknown dependency ~~~. Please download and install ~~~ to run this plugin.
```

와 같은 오류가 나올 경우 이 글을 확인해주세요.

---

의존성 플러그인이 없어서 나오는 오류 내용입니다. 의존성 플러그인을 다운받아 주세요.

제가 제작한 의존 가능한 플러그인들은 [Tap](https://github.com/monun/tap/releases), [Kotlin](https://github.com/monun/kotlin-plugin/releases)등이 있으며, 다른이들이 만든 의존성 플러그인들은 [WorldEdit](https://dev.bukkit.org/projects/worldedit/files), [ProtocolLib](https://github.com/dmulloy2/ProtocolLib/releases) 등이 있습니다.

다운로드 하실 때, `src/main/resources/` 에 위치한 plugin.yml을 확인하여 depend가 무엇이 있는지 확인하시고, 루트 디렉터리의 `build.gradle.kts`의 dependencies 를 확인하여 **정확한 버전**을 확인해주십시오. 그렇지 않을 경우 오류가 발생 할 수 있습니다.