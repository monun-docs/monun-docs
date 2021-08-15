# 1. Writing Sample Kommand

이 문서에서는 Sample Kommand 명령어 제작을 다룹니다.

---

## Kommand를 넣어야 하는 위치

서버의 로딩 완료 이전에 명령어의 등록이 요구되므로, JavaPlugin의 onLoad 또는 onEnable 에 Kommand를 이용하여 명령어를 등록해야 합니다.

---

## '/sample' Kommand 제작해보기

kommand를 import 하여 '/sample' 명령어를 사용할 수 있는 Kommand의 예제입니다.

```kotlin
package foo.sample.plugin.commands

import io.github.monun.kommand.kommand
...

override fun onEnable() {
    kommand {
        register("sample") {
            executes {
                sender.sendMessage(text("Hello World!")) // Using Kyori's Adventure API
            }
        }
    }
}
```

### 기존 Bukkit Command 방식과 비교

(이 코드는 Kommand README.md 내부에서 가져왔습니다.)

```kotlin
class CommandDispatcher : CommandExecutor {
    ...
    override fun onCommand(...) {
        val commandName = args[0]

        if ("first".equals(commandName, true)) {
            // first 명령 처리
        } else if ("second".equals(commandName, true)) {
            // second 명령 처리
        } else {
            // Error
        }
        //when 문으로도 구현 가능
    }
}
...
```

실행할 때 DSL을 사용하여 더욱 직관적인 코드 작성이 가능합니다.