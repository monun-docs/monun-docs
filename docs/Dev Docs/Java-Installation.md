# Java Installation

## 개요

이 문서에서는 자바를 설치하는 내용을 다루고 있습니다.

마인크래프트 [21w19a](https://www.minecraft.net/en-us/article/minecraft-snapshot-21w19a) 버전부터 Java 16 을 요구함에 따라, Spigot과 Paper을 포함한 모장의 서버 코드를 기반으로 하는 마인크래프트 서버 실행는 Java 16을 필요로 하게 되었습니다.

이에 따라, NMS (net.minecraft.server, 모장의 서버 코드를 의미) 나 Paper API (Spigot의 포크로, 퍼포먼스 향상 및 확장된 API 제공) 를 사용하는 플러그인 개발에서는, JDK 16을 필수적으로 사용해야 합니다. (단순 Bukkit 및 Spigot API 사용 시에는 JDK 1.8로도 충분합니다.)

## 시작 하기 전

[2019년 4월 이후 적용된 Oracle JDK의 새로운 라이선스 정책](https://www.oracle.com/java/technologies/javase/jdk-faqs.html) 에 따라, 개발이나 프로토타입 제작 등 개인 사용 목적이 아닌, 프로덕션에서는 Oracle JDK를 무료로 이용할 수 없습니다. (유료 구독 필요, 자세한 내용은 위 문서 참고)

해당 정책 이후, 오픈소스 개발자들을 중심으로, 사람들은 [GPLv2+CE](http://openjdk.java.net/legal/gplv2+ce.html) 라이선스를 취하고 있는 OpenJDK 기반의 다른 배포판들을 찾아 떠나게 되었습니다.

대표적인 OpenJDK 기반의 배포판에는, AdoptOpenJDK 및 Azul Zulu, Amazon Corretto 등이 있습니다. 

Oracle 에서 배포하는 OpenJDK 를 그대로 사용하거나 개인 사용 목적에 한해서는 OracleJDK 또한 사용이 가능합니다.

각 배포판별 장단점 등을 고려하여, 원하는 배포판을 받아 사용하시면 됩니다.

## OS별 OpenJDK 배포판 설치 방법

### Windows:

> [Oracle JDK](https://www.oracle.com/java/technologies/javase-jdk16-downloads.html)
>
> [OpenJDK](https://jdk.java.net/16/)
>
> [Amazon Corretto](https://docs.aws.amazon.com/corretto/latest/corretto-16-ug/downloads-list.html): [[.msi](https://corretto.aws/downloads/latest/amazon-corretto-16-x64-windows-jdk.msi)] [[.zip](https://corretto.aws/downloads/latest/amazon-corretto-16-x64-windows-jdk.zip)]
>
> [AdoptOpenJDK](https://adoptopenjdk.net/releases.html?variant=openjdk16&jvmVariant=hotspot)
>
> [Azul Zulu](https://www.azul.com/downloads/?version=java-16-sts&os=windows&package=jdk)

원하는 배포판을 받아 설치한 뒤, JAVA_HOME 및 Path 환경변수를 설정해주시면 됩니다. 

1. `Win + R` 키를 눌러, 실행 창을 열고, `"C:\Windows\system32\rundll32.exe" sysdm.cpl,EditEnvironmentVariables` 를 입력해줍니다.
2. 기존에 시스템 변수에 `JAVA_HOME` 이 있다면 더블클릭하여 수정을, 아니라면 `새로 만들기` 를 눌러 변수 이름에 `JAVA_HOME` 을 넣은 뒤, 설치한 Java 의 루트 경로 (Java 설치 시 bin, conf, lib 등 들어있는 폴더) 를 값으로 넣어줍니다.
3. 시스템 변수의 Path를 더블클릭한 후, `%JAVA_HOME%\bin` 를 추가해줍니다.

---
### macOS
> [OracleJDK](https://www.oracle.com/java/technologies/javase-jdk16-downloads.html)
>
> [OpenJDK](https://jdk.java.net/16/)
>
> [AdoptOpenJDK](https://adoptopenjdk.net/releases.html?variant=openjdk16&jvmVariant=hotspot)
>
> [Azul Zulu](https://www.azul.com/downloads/?version=java-16-sts&os=macos&package=jdk)
>
> [Amazon Corretto](https://corretto.aws/downloads/latest/amazon-corretto-16-x64-macos-jdk.pkg)

JAVA_HOME 설정이 필요한 경우는 아래를 참조하세요.
```bash
export JAVA_HOME=$(/usr/libexec/java_home)
```
---

### Linux:

> [Oracle JDK](https://www.oracle.com/java/technologies/javase-jdk16-downloads.html)
>
> [OpenJDK](https://jdk.java.net/16/)
>
> [Amazon Corretto](https://docs.aws.amazon.com/corretto/latest/corretto-16-ug/downloads-list.html): [[Linux x64 .deb](https://corretto.aws/downloads/latest/amazon-corretto-16-x64-linux-jdk.deb)] [[Linux x64 .rpm](https://corretto.aws/downloads/latest/amazon-corretto-16-x64-linux-jdk.rpm)] [[Linux x64 .tar.gz](https://corretto.aws/downloads/latest/amazon-corretto-16-x64-linux-jdk.tar.gz)]
>
> [AdoptOpenJDK](https://adoptopenjdk.net/releases.html?variant=openjdk16&jvmVariant=hotspot)
>
> [Azul Zulu](https://www.azul.com/downloads/?version=java-16-sts&os=linux&package=jdk)

#### Debian 계열 Linux 환경 (apt 사용):


```shell
# 필요시 deb 파일이 받아진 디렉터리로 cd 명령을 사용하여 이동하시거나, apt 명령 내에서 경로를 지정해주시길 바랍니다.
sudo apt-get install -y ./파일이름.deb
```

#### 아치 리눅스 환경

> [AUR](https://aur.archlinux.org/)에서 다운로드 or [yay](https://aur.archlinux.org/packages/yay)를 이용한 빌드 (yay 패키지 설치 필요)

```shell
# AUR
git clone https://aur.archlinux.org/<pkgname>
cd <pkgname>
makepkg-si

#yay
yay -S <pkgname>

# yay로 설치를 하시게 된다면 기본 경로는 상황에 따라 달라 질 수 있습니다.
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

이후 터미널에서 ``java -version``으로 버전을 확인하세요.

```
openjdk version "16.x.x" 2021-07-20
OpenJDK Runtime Environment Corretto-16.x.x.x.x (build 16.x.x+x)
OpenJDK 64-Bit Server VM Corretto-16.x.x.x.x (build 16.x.x+x, mixed mode, sharing)
```

---

이외의 JDK 바이너리 파일들은 구글링하여 확인하실 수 있습니다.