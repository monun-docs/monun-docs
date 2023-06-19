---
sidebar_position: 6
---

# paper-sample-complex
여러 버전 지원 가능한 Paper 기반 플러그인을 위한 템플릿

## 사용법
1. `https://github.com/monun/paper-sample-complex/`에서 레포 클론하기
```bash
git clone https://github.com/monun/paper-sample-complex/
```
2. 입맛에 맞게 수정한다

## 구성

- 개발 서버 런처 (minecraft-server-launcher) 기반
- `setupModules`
- 배포 기능 (라이브러리용)
- LibraryLoader
- 최신버전의 paperDevBundle (패치된 NMS)
- gradle 기반 plugin.yml

## 구조
|모듈|설명|
|:--:|:--|
|API|개발자가 사용할 수 있는 인터페이스|
|CORE|API의 구현|
|DONGLE|CORE에서 사용할 NMS에 의한 복잡한 구현|
|PUBLISH|배포를 위한 Gradle Script|

### 개발 서버 런처
프로젝트 루트에서
```bash
./run       # NMS 개발서버
./run reobf # NMS 개발서버를 난독화시킨 서버
./run clip  # papermc.io 에서 구할 수 있는 서버
```

### setupModules
`settings.gradle.kts`에서 `rootProject` 값을 바꾼 후 실행하면, `sample-`로 시작하는 모든 모듈의 이름을 바꿔줍니다.
```bash
./gradlew setupModules
```

### 배포
`mavenCentral`, `mavenLocal`, `서버의 libraries` 등 메이븐 저장소에 배포를 하기 위한 코드를 제공합니다. 

```bash
# Server(서버의 libraries 폴더)에 배포
./gradlew publishAllPublicationsToServer    # API와 CORE(Core + Dongle)을 모두 배포    
./gradlew publishApiPublicationToServer     # API만 배포
./gradlew publishCorePublicationToServer    # CORE(Core + Dongle)만 배포

# MavenLocal($HOME의 .m2 폴더)에 배포
./gradlew publishAllPublicationsToMavenLocal    # API와 CORE(Core + Dongle)을 모두 배포    
./gradlew publishApiPublicationToMavenLocal     # API만 배포
./gradlew publishCorePublicationToMavenLocal    # CORE(Core + Dongle)만 배포

# MavenCentral에 배포(cf. MavenCentral에 배포하기)
./gradlew publishAllPublicationsToCentral    # API와 CORE(Core + Dongle)을 모두 배포    
./gradlew publishApiPublicationToCentral     # API만 배포
./gradlew publishCorePublicationToCentral    # CORE(Core + Dongle)만 배포

```

#### MavenCentral에 배포하기
MavenCentral에 배포하기 위한 기본적인 내용은 [Publishing Guides](https://central.sonatype.org/publish/publish-guide/)를 확인해 주세요

MavenCentral에 배포하기 위해서는 `username`과 `password`가 필요합니다. 이는 개인정보이므로 절대 깃허브같은 곳에 올리면 안되죠. Javascript의 dotenv와 비슷한 역할을 하는 폴더가 있는데, `$HOME/.gradle/gradle.properties`(없으면 만드세요)입니다. 여기에 다음과 같이 설정하면 됩니다.
```properties
nexusUsername=<my username>
nexusPassword=<my password>
```
그리고 `signing`에 대해서는 gpg라는 암호를 사용해야하는데, gpg키를 설정한 후, 방금 전에 사용한 파일에 아래와 같이 저장하면 됩니다. 그리고, 공개키를 `https://keys.openpgp.org/`나 `https://keyserver.ubuntu.com/`같은 키서버에 등록하시면 됩니다.
```properties
signing.keyId=<키 아이디 앞 8자리>
signing.password=<키 비밀번호>
signing.secretKeyRingFile=<키링 gpg 파일 위치>
```

### LibraryLoader
여러가지 버전을 지원하는 경우, 개발자가 사용할 수 있는 `API`와 그 구현인 `CORE`을 분리시키면 효율적으로 버전별로 관리할 수 있습니다. `LibraryLoader.loadImplement(MyApi::class.java)`로 `API`에서 `CORE` 기능을 사용할 수 있고, `Library.loadNMS(Feature::class.java)`로 `CORE`에서 `DONGLE`의 구현을 사용하실 수 있습니다. 

내부코드와 작동원리는 `LibraryLoader`과 자바의 클래스로딩에 대해 찾아보세요.

#### 예시
1. API
```kotlin
interface MyAPI {
    companion object: MyAPI by LibraryLoader.loadImplement(MyAPI::class.java)   // Core의 구현을 사용합니다. Core 모듈의 MyAPIImpl라는 클래스에서 불러옵니다.

    fun printMyVersion()
}
```
2. CORE
```kotlin
// class 이름이 무조건 {API의 이름}Impl이어야합니다
class MyAPIImpl: MyAPI {
    private val version = LibraryLoader.loadNMS(Version::class.java)    // NMS의 구현을 불러옵니다. Dongle 모듈의 NMSVersion 클래스에서 불러옵니다.

    fun printMyVersion() {
        println(version.version)
    }
}

// NMS와 Core을 이어주는 매게체
interface Version {
    val version: String
}
```
3. DONGLE (모든 버전에 다 있어야합니다)
```kotlin
// class 이름이 무조건 "NMS{매게체 이름}"이어야합니다.
class NMSVersion: Version {
    override val version = "MY_NMS_VERSION" // 버전별로 다른 코드를 사용하는데 적합합니다.
}
```

### 최신버전의 paperDevBundle
NMS의 Paper 패치 버전을 의존성으로 가집니다. 배포하기 전 난독화 하시는 것을 잊지 마세요.

### Gradle 기반 plugin.yml
`build.gradle.kts`나 `gradle.properties`에서 플러그인을 설정하실 수 있습니다. 플러그인 빌드 시 자동으로 `plugin.yml`으로 바꿔줍니다.