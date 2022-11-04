---
sidebar_position: 6
---

# Paper 전용 서버 실행기

## 기존 Server-Script의 한계
기존 Server-Script는 이용자가 직접 제공한 URL에서 서버 프로그램을 다운로드 받아 실행합니다. 하지만 PaperMC API v2에 따라, 더 이상 하나의 정적 URL로 서버 프로그램을 다운로드 받을 수 없게 되었고, 버전 별로 빌드 번호를 불러와 주는 API가 따로 필요했습니다.

## 해결
Paper 전용 서버 실행기는 [paper-api](https://github.com/monun/paper-api)를 통해 빌드 정보를 불러옵니다. 따라서 서버 실행기에게 마인크래프트 버전만 제공해 준다면 [paper-api](https://github.com/monun/paper-api)가 링크를 생성해주고, 실행기는 이를 통해 제공된 URL에서 서버 프로그램을 다운받아줍니다.

## 요구 사항
- Linux 환경
- Java 16+

## 사용법
1. 다운로드
```bash
wget https://raw.githubusercontent.com/monun/server-script/paper/.server/start.sh # wget을 이용해 다운로드 받기
chmod +x ./start.sh # Linux의 경우 파일에 실행 권한 주기
```
2. 서버 설정
```bash
# server.conf.json

version=<VERSION> # 설정 안할 시 1.17.1
build=<BUILD> # 설정 안할 시 latest

# 예시
version=1.18.1 # 1.18.1 버전 사용
build=66 # 66번 빌드 사용
build=latest # 최신 빌드 사용
```
> `server=<URL>` 대신에 `version=<VERSION>`을 넣어 주셔야 합니다. 따로 빌드번호를 지정할 경우, `build=<BUILD>`으로 설정해주실 수 있습니다.

3. 실행
```bash
./start.sh launch
```