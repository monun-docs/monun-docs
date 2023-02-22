---
sidebar_position: 5
---

# paper-sample
Paper 기반 플러그인을 위한 템플릿

## 사용법
1. `https://github.com/monun/paper-sample/`에서 레포 클론하기
```bash
git clone https://github.com/monun/paper-sample/
```
2. 입맛에 맞게 수정한다


## 구성

- 개발 서버 런처 (minecraft-server-launcher) 기반
- 최신버전의 paperDevBundle (패치된 NMS)
- `testDevJar`, `testReObfJar`
- gradle 기반 plugin.yml

### 개발 서버 런처
프로젝트 루트에서
```bash
./run       # NMS 개발서버
./run reobf # NMS 개발서버를 난독화시킨 서버
./run clip  # papermc.io 에서 구할 수 있는 서버
```

### 최신버전의 paperDevBundle
NMS의 Paper 패치 버전을 의존성으로 가집니다. 배포하기 전 난독화 하시는 것을 잊지 마세요.

### testDevJar, testReObfJar
프로젝트 루트에서
```bash
./gradlew testDevJar    # 개발용 플러그인 생성     -> Paper의 NMS 개발서버에서만 실행 가능
./gradlew testReObfJar  # 난독화시킨 플러그인 생성 -> 일반적인 서버에서 실행 가능
```

### Gradle 기반 plugin.yml
`build.gradle.kts`나 `gradle.properties`에서 플러그인을 설정하실 수 있습니다. 플러그인 빌드 시 자동으로 `plugin.yml`으로 바꿔줍니다.