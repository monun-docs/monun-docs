---
slug: /usage/auto-reloader/usage
---

# Usage

본 문서는 [AutoReloader](https://github.com/monun/auto-reloader)의 사용법에 대해 다룹니다

---

## AutoReloader
플러그인을 개발할 때 매번 빌드, 아티팩트 복사, 재시작 함수 실행을 해야하는 번거로움을 줄이는데 사용할 수 있습니다. 빌드스크립트에 아티팩트를 서버의 `plugins/update` 폴더에 복사하도록 설정하면, `AutoReloader` 플러그인은 변경된 플러그인을 감지해 자동으로 서버를 리로딩 해줍니다

## 사용방법
1. AutoReloader [Releases](https://github.com/monun/auto-reloader/releases)로 들어가서 `AutoReloader.jar`을 다운받습니다
2. 서버의 `plugins` 폴더에 넣고 서버를 재시작합니다
3. `plugins` 폴더 안에 `update` 폴더를 하나 만들고, 그 안에 업데이트된 플러그인을 넣으면 `AutoReloader`는 이를 감지하고 리로딩해 줍니다.

## 설정하기
config 파일의 `update-action` 항목을 설정하실 수 있습니다
1. `RELOAD`: 변경된 파일 감지시 플러그인을 리로딩 합니다 ***(기본값)***
2. `RESTART`: 변경된 파일 감지시 서버를 재시작합니다
3. `SHUTDOWN`:  변경된 파일 감지시 서버를 종료 합니다

## 주의
1. 업데이트된 플러그인의 이름이 기존 플러그인의 이름과 일치해야합니다
    - `예) MyPlugin.jar -> MyUpdatedPlugin.jar (x)`

## 자동 빌드스크립트 예시
```kotlin
// build.gradle.kts

tasks {
    register<Jar>("paperJar") {
        doLast {
            copy {
                from(archiveFile)
                val plugins = File(rootDir, "server/plugins/")
                into(if (File(plugins, archiveFileName.get()).exists()) File(plugins, "update") else plugins)
            }
        }
    }
}
```