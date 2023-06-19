---
sidebar_position: 3
---

# Kommand 작성하기

이 문서에서는 Kommand 명령어 작성하는 방법을 다룹니다.

## 주의사항

명령어는 서버의 로딩 완료 이전에 등록이 되어야합니다. 따라서 플러그인의 onLoad 또는 onEnable에서 사용해야 합니다.

## 예제 코드

`/sample` 명령어를 등록해 봅시다

```kotlin
package io.github.myname.myplugin

import io.github.monun.kommand.kommand
...

override fun onEnable() {
    // 여기에서 this는 없어도 되나, this가 의미하는 것이 Plugin의 객체이어야 합니다.
    this.kommand {
        register("sample") {    // sample 명령어 등록

            // 이 명령을 실행하기 위해 필요한 조건. 이 조건을 만족시키지 않으면 명령어가 등록되지 않습니다
            // 필수 x
            requires { isPlayer && isOp }   // 이 경우에는 실행 주체가 플레이어이고, OP권한을 갖고 있어야합니다

            // 실행하는 코드 등록. 마인크래프트에서 '/sample' 명령어를 사용하면 실행됩니다
            // 주의) 이 블록 안에 있는 코드만이 실행됩니다. 즉, `executes {  }` 밖은 onEnable과 함께 실행되는 코드이고, executes안에만 명령어 실행 시 실행됩니다.
            // 필수 o
            executes {

                // 여기서 sender은 명령을 실행한 주체를 의미합니다
                // 예를 들어 콘솔에서 실행했다면 콘솔, 플레이어가 실행했다면 실행한 플레이어를 반환합니다
                // 하지만 requires구문에서 플레이어를 조건으로 내세웠기 때문에 안전하게 Player로 Type Casting 할 수 있습니다
                sender.sendMessage(text("Hello World!"))    // 명령어를 실행한 이에게 "Hello, World!" 전송
            }

            then("foo") {   // sample 뒤에 오는 하위 명령를 등록합니다. 즉, `/sample foo`를 명령했을 때 실행되는 것을 등록하는 것입니다.
                
                // 여기서도 requires구문을 실행할 수 있습니다.
                // 주의) 이것은 하위명령의 requires이기 때문에 상위명령의 requires도 적용됩니다. 아까 실행주체가 플레이어임이 조건에 있었으므로, 여기에서도 실행주체가 플레이어인 것이 보장됩니다.
                requires { player.name == "Bob" }   // 플레이어 이름이 Bob이어야 함

                executes {  // '/sample foo' 명령어 실행 코드 등록

                    // sender 이외에도 player, playerOrNull 등 명령어 실행 주체를 가져올 수 있는 방법이 있습니다
                    // 주의) requires에 isPlayer이 없이 `player`을 사용하는 것은 좋지 않습니다. 이 경우에는 콘솔이 실행하면 에러가 뜹니다.
                    player.sendMessage(text("Hello Foo!"))  // 명령어 실행한 플레이어에게 "Hello, Foo!" 전송
                }

                // 인수를 등록함
                // 예시) '/sample foo 102'
                // 102자리에 아무 정수형 인수를 제공할 수 있습니다.
                then("myint" to int()) {    // int() 대신 string(), float() 등 여러가지 인수의 형태가 있습니다. 자세한 것은 다음 장에서 설명하겠습니다.
                    executes {
                        // Delegation을 이용해 'myint' 값을 가져온다
                        // 주의) 변수 이름이 위에 등록한 변수의 이름과 일치해야한다 (myint)
                        // Kommand의 getValue를 import해야 함
                        val myint: Int by it

                        for (i in 0..myint) {
                            sender.sendMessage("Hello Foo!")
                        }
                    }
                }
            }
        }
    }
}
```

실행할 때 DSL을 사용하여 더욱 직관적인 코드 작성이 가능합니다.