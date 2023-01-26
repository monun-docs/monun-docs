---
sidebar_position: 8
---

# Entity Events
엔티티별 이벤트 등록 시스템

### Manager
이벤트 등록을 위한 매니저
```kotlin
val manager = EntityEventManager(plugin: Plugin)
```

### 리스너 등록
`entity`(이하 등록 엔티티)가 이벤트를 작동(trigger)시켰을때 실행되는 리스너를 등록합니다.
```kotlin
manager.registerEvents(entity: Entity, listener: Listener)
```

### EntityProvider
한 이벤트에는 관련된 엔티티가 2개가 있을 수 있는데, 이 경우에는 누가 작동시켰는지 말하기 애매합니다. 따라서 이 경우에는 등록 엔티티를 직접 설정해야합니다. 몇은 [EntityProvider](https://github.com/monun/tap/tree/master/tap-api/src/main/kotlin/io/github/monun/tap/event/EntityProvider.kt)에 기본적으로 지원되나 그렇지 않은 경우도 있습니다. Tap은 `EntityProvider`이라는 API를 제공해 다음과 같이 직접 추가하실 수 있습니다.

```kotlin
/**
 *  엔티티가 2개인 대표적인 예시로 EntityDamageByEntityEvent가 있다. 
 *  아래 코드는 Damagee(데미지를 입은 자)를 등록 엔티티로 설정해주는 기능을 갖는다.
 */
class Damagee: EntityProvider<EntityDamageByEntityEvent> {
    override fun getFrom(event: EntityDamageByEntityEvent): Entity {
        // 등록 엔티티로 설정할 엔티티를 반환
        return event.entity
    }
}
```

### TargetEntity
위에서 설정한 EntityProvider을 등록해줍니다. [DefaultProvider](https://github.com/monun/tap/tree/master/tap-api/src/main/kotlin/io/github/monun/tap/event/DefaultProvider.kt)에 존재하는 경우에는 사용하지 않아도 됩니다
```kotlin
@TargetEntity(KClass<out EntityProvider<*>>)
```



#### 사용법
```kotlin
import io.github.monun.tap.event.EntityProvider

class MyListener: Listener {
    /**
     * EntityDamageByEntityEvent 중 등록 엔티티가 Damager인 경우 실행됨, 다른말로 등록 엔티티가 다른 엔티티를 공격한 경우 실행됨.
     */
    @EventHandler
    @TargetEntity(EntityProvider.EntityDamageByEntity.Damager::class)
    fun onPlayerInteract(e: EntityDamageByEntityEvent) {
        println(e.damager)
    }
}
```

## 사용 예시
```kotlin
package io.github.xxx.plugin

import io.github.monun.tap.event.EntityProvider
import io.github.monun.tap.event.EntityEventManager
...

class InteractingPlayer: EntityProvider<PlayerInteractEvent> {
    override fun getFrom(event: PlayerInteractEvent): Entity {
        return event.player
    }
}
    
class Plugin: JavaPlugin() {
    override fun onEnable() {
        val manager = EntityEventManager(this)

        kommand {
            register("minigame") {
                requires { isPlayer }
                then("register") {
                    executes {
                        manager.registerEvents(player, object: Listener {
                            var validHits = 0
                            var totalHits = 0

                            val meleeAccuracy: Double
                                get() {
                                    if (totalHits == 0) return 0.0
                                    return validHits.toDouble() / totalHits
                                }

                            @EventHandler
                            @TargetEntity(InteractingPlayer::class)
                            fun onPlayerInteract(e: PlayerInteractEvent) {
                                totalHits++
                            }

                            @EventHandler
                            @TargetEntity(EntityProvider.EntityDamageByEntity.Damager::class)
                            fun onDoDamage(e: EntityDamageByEntityEvent) {
                                validHits++

                                // 데미지의 10% 돌려받기
                                (e.damager as LivingEntity).damage(e.damage * 0.1) // e.damager은 등록 엔티티이므로 플레이어임이 보장된다
                            }
                        })
                    }
                }
            }
        }
    }
}
```