---
sidebar_position: 2
---

# 0. InvFX Getting Started

## 개발 환경
    * JDK 16+
    * Kotlin
    * Paper 1.17+

## InvFX 사용하기
### build.gradle
```groovy
repositories {
    mavenCentral()
}

dependencies {
    implementation 'io.github.monun:invfx-api:+'
}
```

### build.gradle.kts
```kotlin
repositories {
    mavenCentral()
}

dependencies {
    implementation("io.github.monun:invfx-api:+")
}
```

### plugin.yml
```yaml
name: ...
author: ...
main: ...
version: ...
libraries:
    - io.github.monun:invfx:+
    - org.jetbrains.kotlin:kotlin-stdlib:1.5.21
    - org.jetbrains.kotlin:kotlin-reflect:1.5.21
    - org.jetbrains.kotlinx:kotlinx-coroutines-core:1.5.0
```
> 주의! 여기에서는 invfx-api 대신 invfx을 넣어야한다


<!--
val heptagram = retrieveUser("Heptagram")
println(heptagram.fans.map { it.blackCowness }.sum())

-------------------------------------------------------
| C͟O͟N͟S͟O͟L͟E͟ | TERMINAL | PROBLEMS |
Exception in thread "main" java.lang.ArithmeticException: integer overflow
-->

