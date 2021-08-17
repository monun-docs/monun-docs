# [Kotlin Plugin](https://github.com/monun/kotlin-plugin/) Usage

## WARNING!

현재 Kotlin Plugin은 deprecated이므로 아카이브 상태입니다.

1.16.5 이하 버전에서 사용하여 주시길 바랍니다.

---

## Kotlin Plugin 이란?

[Kotlin Plugin](https://github.com/monun/kotlin-plugin)은 Kotlin을 의존성으로 갖는 플러그인들을 위해 제작된 플러그인입니다.

여러가지 Kotlin 관련 라이브러리를 담고 있습니다.

이 플러그인이 있다면 본인의 플러그인에 Kotlin을 전부 담지 않아도 됩니다.

## 사용법

사용법은 간단합니다.

[Releases](https://github.com/monun/kotlin-plugin/releases)에서 자신의 Kotlin 버전에 알맞는 플러그인을 다운로드하시어 서버에 적용하시고,

본인 플러그인 depend 항목에 Kotlin 을 적어주면 됩니다.

```yaml
depend: [Kotlin]
```

### 라이브러리 목록:

- Kotlin Stdlib
- Kotlin Reflect
- Kotlinx Serialization Json
- Kotlinx Coroutines Core
- Kotlin Exposed (Core, Dao, Jdbc)
- etc...

---

## 왜 Deprecated인가?

1.17 업데이트 이후 plugin.yml에 libraries 항목이 생겼습니다.

Maven Central 레포지토리에서 필요한 라이브러리를 플러그인이 다운받아 주기 때문에, 더 이상 필요하지 않게 되었습니다.

자세한 내용은 [Spigot Plugin.yml Wiki](https://www.spigotmc.org/wiki/plugin-yml/#optional-attributes)의 libraries 항목을 참고해주세요.