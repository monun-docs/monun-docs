# 0. Kommand Getting Started

## 개발 환경
    * JDK 16
    * Kotlin
    * Paper 1.17+

## Kommand를 프로젝트에 넣기

Kommand 라이브러리를 프로젝트에 넣어봅시다.

---

### Maven

```xml
<dependency>
    <groupId>io.github.monun</groupId>
    <artifactId>kommand-api</artifactId>
    <version>(version)</version>
    <scope>compile</scope>
</dependency>
```

### Gradle

```kotlin
repositories {
    mavenCentral()
}
```

```kotlin
dependencies {
    implementation("io.github.monun:kommand-api:<version>")
}
```

### plugin.yml

```yaml
name: ...
version: ...
main: ...
libraries:
  - io.github.monun:kommand:<version>
```

**※ 주의: 컴파일러의 의존성 설정으로는 kommand-api를, plugin.yml파일에는 kommand를 넣어주셔야 정상 작동합니다.**

프로젝트를 리로딩 하여서 적용이 되었는지 확인해보세요!

---