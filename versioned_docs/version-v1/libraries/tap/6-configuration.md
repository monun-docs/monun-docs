---
sidebar_position: 7
---

# Configuration

yaml 설정을 kotlin 객체로!

### @Name
configuration 이름
```kotlin
@Name("entity-info") // 없으면 기본값은 클래스 이름을 kebab-case로 나타낸값 (예: my-entity-info)
class MyEntityInfo 
```

### @RangeInt, @RangeLong, @RangeFloat, @RangeDouble
설정 값의 범위를 제한합니다. 기본값은 해당 primitive 타입의 범위입니다. (예: Int.MIN_VALUE ~ Int.MAX_VALUE)
```kotlin
@RangeInt(min = 0, max = 10)
```

### @Config
만약 `yaml`에 해당 설정이 없고, `required`가 참이면(`required`의 기본값은 참입니다) 값을 `yaml`에 저장합니다. 이때 값이 `null`이면 에러가 뜹니다.
반대로 `required`가 거짓이고, 값이 `null`이나 `0`이면, 저장하지 않습니다.
```kotlin
@Config(value = "설정 이름", required = isRequired)
val item: Int = 0
```

### Configuration 예시
```kotlin
enum class SkillType {
    WIZARD,
    ARCHER
}

open class EntityConfig {
    @Config(value = "entity-health")
    @RangeDouble(min = 1.0)
    val health: Double = 20.0 // Double, Int, Float, Long 지원


}

@Name("pig-cfg")
class SuperPigConfig: EntityConfig() {
    @Config(required = true)
    val skill = SkillType.WIZARD // Enum 지원

    @Config
    val hasNose: Boolean = true

    @Config(required = false)
    val happiness: Int = 0

    @Config(required = false)
    val canSpeakKorean: Boolean? = null
}
```

### 설정 적용하기
```kotlin
/**
 *  @param ktConfig 코틀린 설정 객체
 *  @param ymlConfig YamlConfiguration 또는 File
 *  @param separateByClass 참이면 루트를 @Name으로 설정한 이름으로, 거짓이면 
 *
 *  @return 변경사항이 있으면 참, 없으면 거짓을 반환합니다.
 */
ConfigSupport.compute(ktConfig, ymlConfig, separateByClass): Boolean
```

### 예시
```kotlin
val myconfig = DefaultConfigurations()
ConfigSupport.compute(myconfig, File("/path/to/cfg.yml"), separateByClass = true)
```
1. /path/to/cfg.yml이 존재하지 않으면 새로운 파일 생성, 기본값 설정
```yaml
# /path/to/cfg.yaml
entity-config:
    entity-health: 20.0

pig-cfg:
    has-nose: true
    skill: WIZARD
```

2. /path/to/cfg.yml이 다음과 같으면
```yaml
entity-config:
    entity-health: 10.0

pig-cfg:
    has-nose: false
    skill: WIZARD
    happiness: 2
```

코틀린 객체가 다음과 같이 변경됨
```kotlin
pig.hasNose == false
pig.skill == SkillType.WIZARD
pig.happiness == 2
pig.canSpeakKorean == null
pig.health == 10.0
```