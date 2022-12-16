---
sidebar_position: 3
---

# Fake Entity

## 가상 개체의 원리
마인크래프트 멀티플레이어는 서버와 클라이언트가 패킷을 주고 받으며 게임이 진행됩니다. 클라이언트는 서버가 보낸 패킷을 바탕으로 랜더링하고, 
서버는 클라이언트가 보낸 패킷을 읽고 저장합니다. 이때, 플러그인이 인위적으로 패킷을 한 클라이언트에 보낸다면, 서버에는 개체에 관한 정보가
존재하지 않지만 클라이언트 상에는 존재해 그 개체를 렌더링합니다. 클라이언트가 재접속하면, 그 개체는 서버상에 존재하지 않으므로, 더 이상 보여지지 않습니다. Tap은 이 개체들(이하 FakeEntity)을 따로 가상 서버(이하 FakeServer)에 저장해 이용을 가능하게 해줍니다.

## 서버 생성
다음 메소드를 호출해 FakeServer를 생성할 수 있습니다 

```kodef
// io.github.monun.tap.fake.FakeEntityServer#create

fun FakeEntityServer.Companion<T>#create(plugin: Plugin)
```

#### 예시
```kotlin
package io.github.xxx.plugin

import io.github.monun.tap.fake.FakeEntityServer
...

class MyPlugin: JavaPlugin() {
    override fun onEnable() {
        /* 가상 서버를 생성합니다 */
        val fakeServer = FakeEntityServer.create(this)
    }
}

```

## 서버 업데이트
FakeServer는 틱(tick) 마다 업데이트를 해 주어야 변경사항이 플레이어에게 전송이 됩니다. 다음을 매 틱마다 호출해 업데이트를 해주세요
```kodef
// io.github.monun.tap.fake.FakeEntityServer#update

fun FakeEntityServer#update()
```

#### 예시
```kotlin
package io.github.xxx.plugin

import io.github.monun.tap.fake.FakeEntityServer
...

class MyPlugin: JavaPlugin() {
    override fun onEnable() {
        val fakeServer = FakeEntityServer.create(this)
        
        /* 틱 마다 업데이트를 해주는 태스크 등록 */
        server.scheduler.runTaskTimer(this, fakeServer::update, 0L, 1L)
    }
}
```

## 플레이어 추가
다음을 사용해 FakeServer에 플레이어를 접속시킬 수 있습니다
```kodef
// io.github.monun.tap.fake.FakeEntityServer#addPlayer

fun FakeEntityServer#addPlayer(player: Player)
```
플레이어를 내보낼 수도 있습니다
```kodef
// io.github.monun.tap.fake.FakeEntityServer#removePlayer

fun FakeEntityServer#removePlayer(player: Player)
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
        server.scheduler.runTaskTimer(this, fakeServer::update, 0L, 1L)
        server.pluginManager.registerEvents(this, this)
    }

    @EventHandler
    fun onPlayerJoin(e: PlayerJoinEvent) {
        /* 플레이어가 실제 서버에 접속하면 가상서버에 접속시킨다 */
        fakeServer.addPlayer(e.player)
    }

    @EventHandler
    fun onPlayerQuit(e: PlayerQuitEvent) {
        /* 플레이어가 실제 서버에서 나가면 가상서버에서 내보낸다 */
        fakeServer.removePlayer(e.player)
    }
}
```

## FakeEntity 스폰
서버 셋업이 완료 되었다면, 이제 FakeEntity를 추가해야 합니다. 개체를 다섯가지 종류로 나눌 수 있습니다.

- 몹(LivingEntity)
- 떨어지는 블록(FallingBlockEntity)
- 아이템(ItemEntity)
- 일반 개체(Entity)
- 플레이어 개체(PlayerEntity)

※ '몹'과 '일반 개체'는 같은 종류로 분류합니다.

### 몹 & 일반 개체

```kodef
// io.github.monun.tap.fake.FakeEntityServer#spawnEntity

fun FakeEntityServer#spawnEntity<T: Entity>(location: Location, entityClass: Class<T>): FakeEntity<T>
```

### 떨어지는 블록
> 이 코드를 실행하면, 버킷 API의 BlockData가 NMS의 BlockData가 되면서, 클론된 객체로 스폰되므로, 스폰 이후 BlockData의 변화는 생성된 개체에 영향을 미치지 않습니다.

```kodef
// io.github.monun.tap.fake.FakeEntityServer#spawnFallingBlock

fun FakeEntityServer#spawnFallingBlock(location: Location, blockData: BlockData): FakeEntity<FallingBlock>
```

### 아이템
> 이 코드를 실행하면, 버킷 API의 ItemStack이 NMS의 ItemStack이 되면서, 클론된 객체로 스폰되므로, 스폰 이후 ItemStack의 변화는 생성된 개체에 영향을 미치지 않습니다.

```kodef
// io.github.monun.tap.fake.FakeEntityServer#spawnItem

fun FakeEntityServer#spawnItem(location: Location, item: ItemStack): FakeEntity<Item>
```

### 플레이어
***Since v4.7.1***
```kodef
// io.github.monun.tap.fake.FakeEntityServer#spawnPlayer

fun FakeEntityServer#spawnPlayer(
    location: Location, 
    name: String, 
    profileProperties: Set<ProfileProperty> = emptySet(), 
    skinParts: FakeSkinParts = FakeSkinParts(), 
    uniqueId: UUID = UUID.randomUUID()): FakeEntity<Player>
```

플레이어를 스폰하기 위해서는 이름과 스킨에 대한 정보가 필요합니다.

#### ProfileProperty
ProfileProperty는 프로필정보, 즉 스킨에 대한 내용을 담고 있습니다. 모장은 플레이어의 프로필 정보를 API를 통해 제공합니다. 그리고 이는 tap의 `MojangAPI` 클래스를 이용해 쉽게 얻을 수 있습니다.

프로필 정보를 얻기 위해서는 우선 스킨 소유자의 `UUID`를 가져와야 합니다.
```kodef
// io.github.monun.tap.mojangapi.MojangAPI#fetchProfile

fun MojangAPI#fetchProfile(skinOwner: String): Profile?
```

`Profile` 클래스의 `uuid()` 메소드는 `UUID`를 리턴합니다.
```kodef
// io.github.monun.tap.mojangapi.Profile#uuid

fun Profile#uuid(): UUID
```

UUID를 얻고 나면, 스킨에 대한 정보를 얻을 수 있습니다.
```kodef
// io.github.monun.tap.mojangapi.MojangAPI#fetchSkinProfile

fun MojangAPI#fetchSkinProfile(uuid: UUID): SkinProfile?
```

`SkinProfile` 클래스의 `profileProperties`는 `List<ProfileProperty>`를 리턴합니다.
```kodef
// io.github.monun.tap.mojangapi.SkinProfile#profileProperties

fun SkinProfile#profileProperties(): List<ProfileProperty>
```

#### FakeSkinParts
FakeSkinParts는 스킨의 바깥 부분의 설정을 담고 있습니다. 이는 cape, jacket, sleeve 등을 포함합니다. 기본값은 모두 켜진상태입니다. 마인크래프트는 이러한 정보를 7bit의 정보로 표현합니다. 켜진 상태는 1, 꺼진 상태는 0으로 표현합니다.
![img](@site/static/img/bytes.png)
```kotlin
FakeSkinParts(bytes: Int)
```
#### UUID
가상 개체의 UUID, ***절대 중복되면 안됩니다!!***. 특별한 경우가 아니라면 기본 값으로 두세요.

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
        server.scheduler.runTaskTimer(this, fakeServer::update, 0L, 1L)
        server.pluginManager.registerEvents(this, this)
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
                // 갑옷 거치대 스폰
                val fakeEntity: FakeEntity<ArmorStand> = fakeServer.spawnEntity(e.player.location, ArmorStand::class.java)
            }
            Action.RIGHT_CLICK_AIR -> {
                // 떨어지는 흙 스폰
                val fakeEntity: FakeEntity<FallingBlock> = fakeServer.spawnFallingBlock(e.player.location, Material.DIRT.createBlockData())
            }
            Action.LEFT_CLICK_BLOCK -> {
                // 다이아몬드 아이템 스폰
                val fakeEntity: FakeEntity<Item> = fakeServer.spawnItem(e.player.location, ItemStack(Material.DIAMOND))
            }
            Action.LEFT_CLICK_AIR -> {
                // 이름이 NPC_1이고, Heptagram의 스킨을 가진 플레이어 스폰
                // cape와 모자 이외의 외투는 없다 (0b1000001)
                val uuid = MojangAPI.fetchProfile("Heptagram")!!.uuid()
                val profiles = MojangAPI.fetchSkinProfile(uuid)!!.profileProperties()

                val fakeEntity: FakeEntity<Player> = fakeServer.spawnPlayer(e.player.location, "NPC_1", profiles, FakeSkinParts(0b1000001))
            }
        }
    }
}
```

## 탑승객 추가 및 제거
*추가*
```kodef
// io.github.monun.tap.fake.FakeEntity#addPassenger

fun FakeEntity#addPassenger(passenger: FakeEntity<*>)
```

*제거*
```kodef
// io.github.monun.tap.fake.FakeEntity#removePassenger

fun FakeEntity#removePassenger(passenger: FakeEntity<*>)
```

## 이동
FakeEntity를 이동할 경우, 이동할 목적지, 또는 변위를 설정해야합니다.

*목적지*
```kodef
// io.github.monun.tap.fake.FakeEntity#moveTo

fun FakeEntity#moveTo(target: Location)
```

*변위*
```kodef
// io.github.monun.tap.fake.FakeEntity#move

fun FakeEntity#move(x: Double, y: Double, z: Double)
```

*회전을 포함한 변위*
```kodef
// io.github.monun.tap.fake.FakeEntity#moveAndRotation

fun FakeEntity#moveAndRotation(x: Double, y: Double, z: Double, yaw: Float, pitch: Float)
```

## 개체 업데이트
버킷 API를 사용해 FakeEntity를 수정할 경우, 모든 함수가 작동되는 것은 아니니 이 점을 참고해 주세요.
```kodef
// io.github.monun.tap.fake.FakeEntity#updateMetadata

fun FakeEntity#updateMetadata<T: Entity>(lambda: T.() -> Unit)
```

## 플레이어 스킨 변경

```kodef
// io.github.monun.tap.fake.FakeEntity#updateSkinParts

fun FakeEntity<T>#updateSkinParts(skinParts: FakeSkinParts) // sth like this
```