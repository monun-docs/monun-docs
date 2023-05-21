---
sidebar_position: 7
---

# Dynamic Argument

[여기](https://github.com/monun/kommand/blob/master/kommand-plugin/src/main/kotlin/io/github/monun/kommand/plugin/KommandPlugin.kt)를 확인하세요

## Suggestions
KommandArgument(`string()`, `int()`, `blockPosition()`...)는 자신의 타입에 맞는 자동완성 기능을 제공합니다. 에를 들어 `entity()`를 사용하면 `@a`, `@p`, `@s` 등이, `blockPosition()`을 사용하면 `~`, `~ ~`, `~ ~ ~`가 추천됩니다. 이렇게 기본적으로 제공되는 자동완성 리스트를 다음과 같이 수정하실 수 있습니다.
```kotlin
KommandArgument<T>.apply {
    suggests {
        // suggests문을 사용하는 경우 기본값은 사라집니다. (기본값 사용을 원하신다면 suggestDefault()를 호출하세요)
        // suggests문에서 suggest() 메소드를 호출하지 않으면 - 예를 들어 if문에서만 suggests를 호출하는 경우 - 아무것도 추천되지 않습니다.
        suggest(listOf(
            "suggestionA",
            "suggestionB",
            "suggestionC"
        ))
    }
}
```

### 예시
```kotlin
// blockPosition의 향하는 블록위치 자동완성 기능 구현
val autoCompleteBlockPosition = blockPosition().apply {
    suggests { ctx ->

        // 플레이어가 향하는 블록을 가져온다
        ctx.source.player.rayTraceBlocks(20.0)?.let { res ->
            res.hitBlock?.let { block ->
                // 만약 블록이 있다면 그 블록의 위치를 추천해준다
                suggest(listOf(
                    "${block.x}",
                    "${block.x} ${block.y}",
                    "${block.x} ${block.y} ${block.z}"
                ))
            }
        } ?: suggestDefault()   // 그렇지 않는다면 기본값을 추천해준다
    }
}


...
    // autoCompleteBlockPosition 사용하기
    then("initPos" to autoCompleteBlockPosition) {
        executes {
            val initPos: BlockPosition3D by it
            
            ...
        }
    }
```

## Dynamic Argument
위에서는 자동완성 추천 리스트를 바꿨다면, 이번에는 Kommand에서 기본적으로 지원하지 않는 타입을 만들어 사용해봅시다. `dynamic`은 사용자의 명령어 `string`를 직접 파싱해서 사용하실 수 있습니다. 
```kotlin
// (기본값) StringType.SINGLE_WORD는 '/playerinfo Heptagram'과 같이 하나의 argument를 사용하실 수 있고, 이 같은 경우, `input`인수는 'Heptagram'를 반환합니다. 

// StringType.GREEDY_PHRASE는 '/ability apply Heptagram spiderman'과 같이 여러개의 argument를 사용하실 수 있고, 이 같은 경우, `input`인수는 'apply Heptagram spiderman'를 반환합니다. 

// StringType.QUOTABLE_PHRASE '/nick "Friend Of Heptagram"'과 같이 따옴표로 둘러쌓인 하나의 argument를 사용하실 수 있고, 이 같은 경우, `input`인수는 'Friend Of Heptagram'을 반환합니다. 
val argument = dynamic(StringType.GREEDY_PHRASE) { ctx, input ->
    // input을 이용해 원하시는 객체를 반환
    // null 반환 시 명령어 입력 단계에서 입력값이 유효하지 않음을 자동으로 알려줍니다(빨간 경고문)
    MyUser(input)
}.apply {
    suggests {
        ...
    }
}

then("arg" to argument) {
    executes {
        val arg: MyUser by it   // 여기서 MyUser은 argument에서 반환하는 객체
    }
}
```


### 예시
예를 들어 Ability string을 인수로 받고 Ability 객체를 반환하는 `argument`를 만드시려면
```kotlin
 // 꼭 메소드일 필요는 없습니다. 
fun abilityArgument() = dynamic { ctx, input ->
    Ability.findOrNull(input)   // Ability
}.apply {
    suggest {
        // Ability.listAbilities에서 반환하는 값들을 autoComplete에 등록
        suggest(Ability.listAbilities())
    }
}

kommand {
    register("applyAbility") {
        then("ability" to abilityArgument()) {
            executes {
                val ability: Ability by it // 만약 dynamic 문에서 null을 반환했다면 실행되지 않으니 null-check 하실 필요는 없습니다

                ...
            }
        }
    }
}
```