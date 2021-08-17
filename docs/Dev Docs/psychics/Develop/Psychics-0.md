# 0. Psychics Getting Started

## 개발 환경
    * JDK 16
    * Kotlin
    * Paper 1.17+

## Psychics를 포크하기

문서를 작성하는 시각엔 공식적인 Psychics 라이브러리가 없습니다.

[Psychics](https://github.com/monun/psychics)에서 포크합시다.

---

### Github Fork

깃허브에서 포크를 하라면 [Psychics](https://github.com/monun/psychics)의 우측 상단에 있는 Fork 버튼을 눌러야 합니다.

<!-- 임시용 링크로, 추후 호스팅 또는 assets 폴더 형식으로 변경 부탁드립니다 -->
![fork button](https://user-images.githubusercontent.com/59782214/129550884-81a1d3af-9205-4e81-b9e6-d85bac2b42b8.png)
<!-- ![fork button](../../../static/img/fork.png) -->
<!-- 미리보기가 안 되면, 수정할 때 불편하니까, 결정될때까지 assets 형식 사용하지 않겠습니다 -->

### Setting Up Project

포크를 완료할 경우, 작업할 수 있도록 컴퓨터에 가져옵니다.

포크한 걸 클론할 수 있지만, IntelliJ IDEA 사용자면 **New** > **Project from Version Control**을 이용하실 수 있습니다.

그 후에 프로젝트에 있는 gradle.properties를 수정하면 됩니다.

### Building Psychics Core Plugin

IntelliJ IDEA를 사용하는 경우 우측 상단에 있는 Gradle 창을 열어줍니다.

![gradle button](https://user-images.githubusercontent.com/68156872/129556085-83bbeda6-9d1a-4482-a2b3-979869b5fa6a.png)

Gradle 창을 열어준 뒤 psychics-core 서브모듈의 paperJar 테스크를 실행시켜줍니다.

![task](https://user-images.githubusercontent.com/68156872/129560582-70cb399b-b418-41cf-865a-1a0a2558a3fd.png)

paperJar를 실행해주고





<!--
val heptagram = retrieveUser("Heptagram")
println(heptagram.fans.map { it.blackCowness }.sum())

-------------------------------------------------------
| C͟O͟N͟S͟O͟L͟E͟ | TERMINAL | PROBLEMS |
Exception in thread "main" java.lang.ArithmeticException: integer overflow
-->

