---
sidebar_position: 8
---

# PDC
## Persistent Data Container

PersistentDataContainer은 서버 종료후에도, 특정 엔티티, 타일엔티티나 ItemMeta등 의 정보를 저장해주는 기능이 있습니다. Key-Value 형태로 저장되어있어, HashMap과 비슷하게 사용하실 수 있습니다.

## 사용법
일단 PersistentDataContainer은 여러가지 형태의 데이터(Integer, String, IntegerArray 등)를 저장할 수 있기 때문에, Key에 타입에 대한 정보도 있어야합니다. Tap은 PersistentDataKey 기능을 제공합니다.

```kotlin
PersistentDataKey(namespacedKey, persistentDataType)
```

하지만 namespacedKey의 경우와 persistentDataType 모두 매번 직접 사용하기에는 번거로움이 있을 수 있습니다. 그래서 Tap은 PersistentDataKeyChain 기능을 제공합니다. PersistentDataKeyChain은 사용할 여러가지 키들의 PersistentDataKey를 묶어놓은 형태로- keychain은 열쇠고리라는 뜻입니다 - , 키 값들을 변수 처럼 사용하실 수 있습니다. 특히, `complex`, `primitive` 기능을 통해 타입을 인식하거나 `kotlinx.serialization.Serializable`를 상속하는 클래스를 자동으로 직렬화(serialize)해주는 메소드를 제공합니다. 또는 직접 PersistentDataType을 제공해 사용하실 수 있게끔 `cast`도 있습니다.

```kotlin
object MyKeyChain: PersistentDataKeyChain() {
    val myAgeKey = primitive<Int>("myAge") // Int에 맞는 PersistentDataType을 찾아줍니다 ... PersistentDataType.INTEGER

    val myHealthDataKey = complex<PlayerHealthData>("myHealthData") // PlayerHealthData 객체를 ByteArray로 직렬화시켜주는 타입을 자동생성합니다. kotlinx.serialization.Serializable을 상속해야 합니다

    val uniqueIdKey = cast("uniqueId", MyPersistentDataTypes.UUID) // MyPersistentDataTypes.UUID 라는 커스텀 PersistentDataType을 사용하실 수도 있습니다.
}
```

키까지 다 준비되었으니, 이제 사용할 일만 남았네요. 일단 PersistentDataHolder을 상속하는 엔티티, 타일엔티티 또는 ItemMeta 등이 필요합니다. 
Player를 이용해 예시를 들어보면, 다음과 같이 사용하실수 있습니다.

```kotlin
import io.github.monun.tap.data.persistentData

object PlayerStatusKeys: PersistentDataKeyChain() {
    val playerAgeKey = primitive<Int>("playerAge") // Int에 맞는 PersistentDataType을 찾아줍니다 ... PersistentDataType.INTEGER

    val healthDataKey = complex<PlayerHealthData>("healthData") // PlayerHealthData 객체를 ByteArray로 직렬화시켜주는 타입을 자동생성합니다. kotlinx.serialization.Serializable을 상속해야 합니다

    val uniqueIdKey = cast("uniqueId", MyPersistentDataTypes.UUID) // MyPersistentDataTypes.UUID 라는 커스텀 PersistentDataType을 사용하실 수도 있습니다.
}

fun newYear(player: Player) {
    player.persistentData.let { data ->
        data[playerAgeKey] += 1
        data[healthDataKey] diagnosePlayer(player)
        data[uniqueIdKey] = player.uniqueId
        data["emotion"] = getPlayerEmotion(player)  // 자동으로 타입 추론 : 원시타입이 있으면 사용, 없으면 직렬화시키는 타입 생성. 후자의 경우, kotlinx.serialization.Serializable을 상속해야 합니다.
    }
}

enum class PlayerEmotion {
    HAPPY,
    SAD,
    EXCITED,
    EMOTIONAL_DAMAGE
}

fun getPlayerEmotion(player: Player): PlayerEmotion {
    // Internal Code
}

@Serializable
data class PlayerHealthData(
    val hasDiabetes: Boolean, // 당뇨?
    val hsaAsthma: Boolean // 천식?
)

fun diagnosePlayer(): PlayerHealthData {
    // InternalCode
}
```