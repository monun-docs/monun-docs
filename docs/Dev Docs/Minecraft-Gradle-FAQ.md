# Minecraft Gradle FAQ

이 문서에서는 플러그인 혹은 라이브러리 빌드 실행 시 주로 나오는 오류에 대해 다루는 문서입니다.

# 질문 하기 전에

Google과 같은 검색 사이트에서 직접 검색하여 먼저 문제를 찾아 보시는 것을 추천 드립니다.

관련된 내용을 무조건 이슈에 작성하지 말고, "오류내용이 이 플러그인과 관련해서밖에 나올 수 없다" 라고 생각하는 경우에 이슈를 달아 주시길 바라겠습니다.

## NO JDK

오류 내용이

```
ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.

Please set the JAVA_HOME variable in your environment to match the
location of your Java installation.
```

와 같거나 유사한 경우, JDK가 설치되지 않았거나 PATH에 등록되지 않은 것입니다. 해결 방법은 [Java Installation](/docs/Dev Docs/Java-Installation.md) 문서를 확인하고 와주세요.

## USING JRE

오류 내용이

```
> Kotlin could not find the required JDK tools in the Java installation 'C:\Program Files (x86)\Java\jre1.8.0_291' used by Gradle. Make sure Gradle is running on a JDK, not JRE.
```

와 같거나 유사한 경우, JDK가 설치되지 않았거나 PATH에 등록되지 않았고, JRE를 이용해 빌드 시도를 한 것입니다. 해결 방법은 [Java Installation](/docs/Dev Docs/Java-Installation.md) 문서를 확인하고 와주세요.

## NMS Local Repository

오류 내용이

```
> Could not resolve all files for configuration ':compileClasspath'.
   > Could not find org.spigotmc:spigot:1.16.5-R0.1-SNAPSHOT.
     Searched in the following locations:
       - file:/C:/Users/사용자이름/.m2/repository/org/spigotmc/spigot/1.16.5-R0.1-SNAPSHOT/maven-metadata.xml
       - file:/C:/Users/사용자이름/.m2/repository/org/spigotmc/spigot/1.16.5-R0.1-SNAPSHOT/spigot-1.16.5-R0.1-SNAPSHOT.pom
       - https://repo.maven.apache.org/maven2/org/spigotmc/spigot/1.16.5-R0.1-SNAPSHOT/maven-metadata.xml
       - https://repo.maven.apache.org/maven2/org/spigotmc/spigot/1.16.5-R0.1-SNAPSHOT/spigot-1.16.5-R0.1-SNAPSHOT.pom
       - https://papermc.io/repo/repository/maven-public/org/spigotmc/spigot/1.16.5-R0.1-SNAPSHOT/maven-metadata.xml
       - https://papermc.io/repo/repository/maven-public/org/spigotmc/spigot/1.16.5-R0.1-SNAPSHOT/spigot-1.16.5-R0.1-SNAPSHOT.pom
       - https://jitpack.io/org/spigotmc/spigot/1.16.5-R0.1-SNAPSHOT/maven-metadata.xml
       - https://jitpack.io/org/spigotmc/spigot/1.16.5-R0.1-SNAPSHOT/spigot-1.16.5-R0.1-SNAPSHOT.pom
     Required by:
         project :
```

와 같거나 유사한 경우, Spigot 파일들이 로컬 메이븐에 저장되어 있지 않기에 발생하는 오류입니다.

[BuildTools](https://www.spigotmc.org/wiki/buildtools/)를 이용해 관련 파일들을 받아 주시길 바랍니다.

`java -jar BuildTools.jar --rev <version>`

build.gradle.kts에 [setupWorkspace가 들어가 있는 경우](https://github.com/monun/tap/blob/master/build.gradle.kts), `./gradlew setupWorkspace` 명령을 통해 자동으로 BuildTools 작업을 실행 하실 수 있습니다.