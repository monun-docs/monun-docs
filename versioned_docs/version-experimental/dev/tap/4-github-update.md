---
sidebar_position: 5
---

# 1-4. Github Update

플러그인이 로드 될 때, 깃허브 릴리즈에 더 새로운 버전의 플러그인이 존재하는 지 확인하고, 존재할 경우, 플러그인을 다운받아 업데이트 해주는 기능을 지원합니다.

## 플러그인 최신 버전 유지
**동기**
```kotlin
JavaPlugin.updateFromGithub(USER, REPO, ASSET_NAME, CALLBACK)
```

**비동기**
```kotlin
JavaPlugin.updateFromGithubMagically(USER, REPO, ASSET_NAME, RECEIVER)
```

### 예시
```kotlin
package io.github.xxx.plugin
    
class Plugin: JavaPlugin() {
    override fun onEnable() {
        updateFromGithubMagically("monun", "psychics", "Psychics.jar") {
            // Action
        }
    }
}
```