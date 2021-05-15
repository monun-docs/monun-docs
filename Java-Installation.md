# Java Installation

이 문서에서는 자바를 설치하는 내용을 다루고 있습니다. ([PaperMC](https://papermc.io/)의 [Java 8](https://papermc.io/java11) 버전 지원 중단 공지와 관련된 이유로 JDK 11 기준으로 설명합니다.)

## 시작 하기 전

JDK 11 버전을 설치함으로써 환경변수가 자동으로 설정 될 수 있고 그로 인해 원래 작업하시던 내용에 영향을 미칠 수 있습니다.

이 점 유의하시어 진행을 해 주시길 바랍니다.

(참고: JDK11을 이용하지 않을 시 개발된 플러그인 및 라이브러리의 사용이 제한 될 수 있습니다.)

---

Oracle에서 직접 지원하는 안정적인 [Oracle JDK 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)를 설치 하거나,

GPL 라이선스로 제공되는 OpenJDK를 다운로드 할 수도 있습니다.

#### OpenJDK 설치

이 문서에서는 GPL 라이선스를 사용하는 OpenJDK를 기준으로 설명됩니다.

---

### Windows:

> OJDKBuild에서 다운로드: [여기](https://github.com/ojdkbuild/ojdkbuild/)로 접속해 README.md에 있는 .msi를 실행하면 됩니다.

> AdoptOpenJDK에서 다운로드: [여기](https://github.com/AdoptOpenJDK/openjdk11-binaries/releases)로 접속해 Assets에 있는 .msi를 설치하시면 됩니다.

> [Chocolatey](https://chocolatey.org/)를 이용하여 AdoptOpenJDK를 설치 할 수 있습니다. 명령은 다음과 같습니다:

```
choco install openjdk11
```

---

### macOS:

HomeBrew를 사용하여 AdoptOpenJDK에서 다운로드 합니다.

```
brew tap AdoptOpenJDK/openjdk
```

```
brew cask install adoptopenjdk11
```

---

### Linux:

#### Debian 계열 Linux 환경 (apt 사용):

```shell
sudo apt-get update && sudo apt-get install -y openjdk-11-jdk-headless
```

#### Arch 계열 Linux 환경 (pacman 사용):

```shell
sudo pacman -Syu && sudo pacman -S jre11-openjdk-headless
```

#### RHEL 계열 Linux 환경 (yum 사용):
```shell
sudo yum install java-11-openjdk-devel.x86_64
```

---

이외의 JDK 바이너리 파일들은 https://jdk.java.net/ 에서 확인 가능합니다.