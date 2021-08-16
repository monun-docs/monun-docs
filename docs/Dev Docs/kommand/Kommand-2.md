# 2. Requires, Arguments, Contexts

이 문서에서는 Kommand에서 지원하는 Requires, Arguments, Contexts에 대해 다룹니다.

---

## Requires

명령을 사용하기 위해 전제적인 조건을 넣고 싶다면, requires를 사용할 수 있습니다.

다음은 예제 코드입니다:

```kotlin
// on onEnable()
    ...

kommand {
    register("sample") {
        requires { playerOrNull != null && player.isOp }
            executes {
                sender.sendMessage(text("Hello World!"))
            }
    }
}
    
    ...
---
```

'/sample' 명령에 명령을 사용하는 사람이 플레이어야하고, 플레이어가 관리자 권한을 소유하고 있는지에 대한 전제조건을 넣었습니다.

---

## Arguments & Contexts

Kommand 에서는 커맨드에 대한 Arguments를 지원합니다. 또 이러한 Argument를 Context로 가져와 사용 할 수 있습니다.

then을 이용해 Argument를 만들 수 있으며, Context를 이용해 입력 된 Argument를 가져올 수 있습니다. 

KommandArgument에서는 자주 사용되거나 기본적인 Argument를 불러올 수 있습니다.

다음은 예제 코드입니다:

```kotlin
// on onEnable()
    ...

kommand {
    register("sample") {
        requires { playerOrNull != null && player.isOp }
        executes {
                player.sendMessage(text("Missing Arguments! Use \"/sample argument\""))
        }
        then("argument" to string()) {
            executes {
                val argument: String by it // Kommand의 getValue를 import해야 사용할 수 있는 구문입니다.
                player.sendmessage(text("입력된 Argument는 다음과 같습니다: $argument"))
            }
        }
    }
}
    
    ...
```

Argument를 생성하고 Context로 받아와 플레이어에게 Argument를 전달하는 코드가 완성되었습니다.