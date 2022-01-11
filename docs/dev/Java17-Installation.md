---
sidebar_position: 2
---

# Java 17 Installation

## 개요

이 문서에서는 Java 17을 설치하는 내용을 다루고 있습니다.

모장은 1.18 출시와 함께, Java 17 버전부터 지원한다는 내용을 발표하였습니다. 따라서 1.17.X 버전의 Java 16에서 Java 17로 업그레이드 해야합니다. 

## 시작 하기 전

Oracle JDK의 라이선스 정책이 다시 Java 16 이전과 같아집니다! 자세한 내용은 [이 페이지](https://blogs.oracle.com/java/post/free-java-license)를 확인하세요

물론 OpenJDK도 사용 가능합니다. 다음 내용을 확인하세요.

## OS별 OpenJDK 배포판 설치 방법

### Windows:

> [Oracle JDK](https://www.oracle.com/java/technologies/downloads/#java17)
>
> [OpenJDK](https://jdk.java.net/17/)
>
> [Amazon Corretto](https://docs.aws.amazon.com/corretto/latest/corretto-17-ug/downloads-list.html): [.msi](https://corretto.aws/downloads/latest/amazon-corretto-17-x64-windows-jdk.msi) [.zip](https://corretto.aws/downloads/latest/amazon-corretto-17-x64-windows-jdk.zip)
>
> [Azul Zulu](https://www.azul.com/downloads/?version=java-17-lts&os=windows&package=jdk)

원하는 배포판을 받아 설치한 뒤, JAVA_HOME 및 Path 환경변수를 설정해주시면 됩니다. 

#### GUI
1. `Win + R` 키를 눌러, 실행 창을 열고, `"C:\Windows\system32\rundll32.exe" sysdm.cpl,EditEnvironmentVariables` 를 입력해줍니다.
2. 기존에 시스템 변수에 `JAVA_HOME` 이 있다면 더블클릭하여 수정을, 아니라면 `새로 만들기` 를 눌러 변수 이름에 `JAVA_HOME` 을 넣은 뒤, 설치한 Java 의 루트 경로 (Java 설치 시 bin, conf, lib 등 들어있는 폴더) 를 값으로 넣어줍니다.
3. 시스템 변수의 Path를 더블클릭한 후, `%JAVA_HOME%\bin` 를 추가해줍니다.

#### CLI
1. `cmd`를 관리자 권한으로 엽니다.
2. `set JAVA_HOME "<자바 설치 경로>"`을 실행합니다.
> 자바 설치 경로 예: C:\Program Files\OpenJDK\jdk-17.0.1
3. `setx /m JAVA_HOME %JAVA_HOME% && setx /m PATH "%PATH%;%JAVA_HOME%\bin"`을 실행합니다.

---
### macOS
> [OracleJDK](https://www.oracle.com/java/technologies/downloads/#java17)
>
> [OpenJDK](https://jdk.java.net/17/)
>
> [Amazon Corretto](https://corretto.aws/downloads/latest/amazon-corretto-17-x64-macos-jdk.pkg)
>
> [Azul Zulu](https://www.azul.com/downloads/?version=java-17-lts&os=macos&package=jdk)

JAVA_HOME 설정이 필요한 경우는 아래를 참조하세요.
```bash
export JAVA_HOME=$(/usr/libexec/java_home)
```
---

### Linux:

> [Oracle JDK](https://www.oracle.com/java/technologies/downloads/#java17)
>
> [OpenJDK](https://jdk.java.net/17/)
>
> [Amazon Corretto](https://docs.aws.amazon.com/corretto/latest/corretto-17-ug/downloads-list.html): [Linux x64 .deb](https://corretto.aws/downloads/latest/amazon-corretto-17-x64-linux-jdk.deb) [Linux x64 .rpm](https://corretto.aws/downloads/latest/amazon-corretto-17-x64-linux-jdk.rpm) [Linux x64 .tar.gz](https://corretto.aws/downloads/latest/amazon-corretto-17-x64-linux-jdk.tar.gz)
>
> [Azul Zulu](https://www.azul.com/downloads/?version=java-17-lts&os=linux&package=jdk)

#### Debian 계열 Linux 환경 (apt 사용):


```shell
# 필요시 deb 파일이 받아진 디렉터리로 cd 명령을 사용하여 이동하시거나, apt 명령 내에서 경로를 지정해주시길 바랍니다.
sudo apt-get install -y ./파일이름.deb
```

#### Arch Linux 환경

> [AUR](https://aur.archlinux.org/)에서 다운로드 or [yay](https://aur.archlinux.org/packages/yay)를 이용한 빌드 (yay 패키지 설치 필요)

```shell
# AUR
git clone https://aur.archlinux.org/<pkgname>
cd <pkgname>
makepkg-si

# yay
yay -S <pkgname>

# yay로 설치를 하시게 된다면 기본 경로는 상황에 따라 달라 질 수 있습니다.
```

archlinux-java-run 패키지를 이용해 실시간으로 Java 버전 업데이트

```shell
# yay
yay -S archlinux-java-run

sudo archlinux-java set <JAVA_ENV>
```

#### 이외 Linux 환경

바이너리 파일을 받아서 환경변수를 조정하는 방식입니다.

```shell
tar xvf <filename>.tar.gz
# 아래의 내용을 /etc/profile 이나 ~/.bashrc 에 추가하셔서 자동으로 적용되게 해주세요.

export JAVA_HOME=(자바 경로)
export PATH=$JAVA_HOME/bin:$PATH

source ~/.zshrc # bash 사용시 ~/.bashrc, ~/.bash_proile
```

#### Linux Global Environment
```shell
sudo echo "export JAVA_HOME=(자바 경로)" >> /etc/environment # you can use /etc/profile instead of /etc/environment
sudo echo "export PATH=$JAVA_HOME/bin:$PATH" >> /etc/environment # you can use /etc/profile instead of /etc/environment
sudo reboot # do not use -f option
```

---

이후 터미널에서 `java -version` 으로 버전을 확인하세요.

```sh
> java -version
openjdk version "17.x.x" 202x-xx-xx
...
```

---

이외의 JDK 바이너리 파일들은 구글링하여 확인하실 수 있습니다.
