---
sidebar_position: 5
---

# 1-2. Fake Entity

## 가상 개체의 원리
마인크래프트 멀티플레이어 게임에서는 서버와 클라이언트가 패킷을 주고 받으며 진행됩니다. 클라이언트는 서버가 보낸 패킷을 바탕으로 랜더링하고, 
서버는 클라이언트가 보낸 패킷을 읽고 저장합니다. 이때, 플러그인이 인위적으로 패킷을 한 클라이언트에 보낸다면, 서버에는 개체에 관한 정보가
존재하지 않지만 클라이언트는 그 개체를 랜더링합니다. 따라서, 클라이언트가 로그아웃 후 재접속할 때, 그 개체는 존재하지 않고, 더 이상 보여지지 않습니다. 이때, Tap은 그 클라이언트에만 존재하는 개체를 가상 개체, 혹은 FakeEntity라고 부릅니다.

## 사용법
Tap은 가상 서버를 만들고, 그 서버 안에 존재하는 플레이어들에게 가상 개체에 대한 정보를 보냅니다. 

### 서버 생성
Tap을 사용해 가상 서버를 생성하는 방법은 다음과 같습니다.
```kotlin
val server = FakeEntityServer.create(PLUGIN)
```
#### 예시
```kotlin
package io.github.xxx.plugin

import io.github.monun.tap.fake.FakeEntityServer
...

class MyPlugin: JavaPlugin() {
    override fun onEnable() {
        val fakeServer = FakeEntityServer.create(this)
    }
}

```

### 플레이어 추가
서버 생성 이후, 가상 개체에 대한 정보를 받을 플레이어를 추가합니다.
```kotlin
server.addPlayer(PLAYER)
```
또, 플레이어를 제거할 수 있습니다.
```kotlin
server.removePlayer(PLAYER)
```

#### 예시
```kotlin
package io.github.xxx.plugin

import io.github.monun.tap.fake.*
...

class MyPlugin: JavaPlugin(), Listener {
    lateinit var fakeServer: FakeEntityServer
        private set
    
    override fun onEnable() {
        fakeServer = FakeEntityServer.create(this)
    }

    @EventHandler
    fun onPlayerJoin(e: PlayerJoinEvent) {
        fakeServer.addPlayer(e.player)
    }

    @EventHandler
    fun onPlayerQuit(e: PlayerQuitEvent) {
        fakeServer.removePlayer(e.player)
    }
}
```

### 가상 개체 스폰
서버 셋업이 완료 되었다면, 이제 가상 개체를 추가해야 합니다. 개체를 네가지 종류로 나눌 수 있습니다.
    - 몹(LivingEntity)
    - 떨어지는 블록(FallingBlockEntity)
    - 아이템(ItemEntity)
    - 일반 개체(Entity)
하지만, 가상 개체에서, '몹'과 '일반 개체'는 같은 종류로 분류합니다.

#### 몹 & 일반 개체
```kotlin
server.spawnEntity(LOCATION, ENTITY_CLASS)
```

#### 떨어지는 블록
> 이 코드를 실행하면, 버킷 API의 BlockData가 NMS의 BlockData가 되면서, 클론된 객체로 스폰되므로, 스폰 이후 BlockData의 변화는 생성된 개체에 영향을 미치지 않습니다.

```kotlin
server.spawnFallingBlock(LOCATION, BLOCK_DATA)
```

#### 아이템
> 이 코드를 실행하면, 버킷 API의 ItemStack이 NMS의 ItemStack이 되면서, 클론된 객체로 스폰되므로, 스폰 이후 ItemStack의 변화는 생성된 개체에 영향을 미치지 않습니다.

```kotlin
server.spawnItem(LOCATION, ITEMSTACK)
```

#### 예시
```kotlin
package io.github.xxx.plugin

import io.github.monun.tap.fake.*
...

class MyPlugin: JavaPlugin(), Listener {
    lateinit var fakeServer: FakeEntityServer
        private set
    
    override fun onEnable() {
        fakeServer = FakeEntityServer.create(this)
    }

    @EventHandler
    fun onPlayerJoin(e: PlayerJoinEvent) {
        fakeServer.addPlayer(e.player)
    }

    @EventHandler
    fun onPlayerQuit(e: PlayerQuitEvent) {
        fakeServer.removePlayer(e.player)
    }

    @EventHandler
    fun onPlayerInteract(e: PlayerInteractEvent) {
        when (e.action) {
            Action.RIGHT_CLICK_BLOCK -> {
                val fakeEntity: FakeEntity = fakeServer.spawnEntity(e.player.location, ArmorStand::class)
            }
            Action.RIGHT_CLICK_AIR -> {
                val fakeEntity: FakeEntity = fakeServer.spawnFallingBlock(e.player.location, Material.DIRT.createBlockData())
            }
            Action.LEFT_CLICK_AIR -> {
                val fakeEntity: FakeEntity = fakeServer.spawnItem(e.player.location, ItemStack(Material.DIAMOND))
            }
        }
    }
}
```

### 탑승객 추가 및 제거
*추가*
```kotlin
val fakeEntity: FakeEntity

fakeEntity.addPassenger(PASSENGER)
```

*제거*
```kotlin
val fakeEntity: FakeEntity

fakeEntity.removePassenger(PASSENGER)
```

### 이동
가상 개체를 이동할 경우, 이동할 목적지, 또는 변위를 설정해야합니다.

*목적지*
```kotlin
val fakeEntity: FakeEntity

fakeEntity.moveTo(LOCATION)
```

*변위*
```kotlin
val fakeEntity: FakeEntity

fakeEntity.move(DX, DY, DZ)
```

*회전을 포함한 변위*
```kotlin
val fakeEntity: FakeEntity

fakeEntity.move(DX, DY, DZ, YAW, PITCH)
```

### 메타데이터 업데이트
버킷 API를 사용해 가상 개체를 수정할 경우, 모든 함수가 작동되는 것은 아니니 이 점을 참고해 주세요.
```fakeEntity: FakeEntity
fakeEntity.updateMetadata<T: Entity> {
    LAMBDA: T -> Unit
}
```
