---
sidebar_position: 3
---

# 1. Creating an InvFX window
이 페이지에서는 InvFX를 사용하기 위해 필요한 기초적이지만 대부분의 내용을 다룹니다

## Inventory와 InvFX
Bukkit API에서 상자, 화로, 모루 등 인벤토리의 컨테이너를 InventoryHolder이라고 하고, 상자, 화로, 모루 등을 클릭했을때 나오는 창을 Inventory라고 합니다. InvFX에서는 물리적인 InventoryHolder 대신에, InvWindow라고 하는 가상 InventoryHolder를 사용합니다. 또한, InvFrame은 Bukkit API의 Inventory로 변환 할 수 있고, 더 깨끗한 코드로 만들 수 있는 일종의 래퍼(Wrapper)와 같은 개념입니다.
![invframe](https://user-images.githubusercontent.com/80996692/139724121-480f08f3-6a7d-490a-be52-1c9230ca09c3.png)


## InvFX로 인벤토리 만들기
InvFX로 인벤토리를 만드는 방법은 다음과 같습니다

```kotlin
import io.github.monun.invfx.InvFX
...

frame(numLines, Component.text(invTitle), init)
```
> 위 코드의 `numLines` 대신에 원하는 인벤토리의 줄의 수(가로줄의 개수)를 넣으세요. 모든 칸의 수(세로줄의 개수)는 9입니다. 그리고 `invTitle` 대신에 원하는 인벤토리의 이름을 넣으세요

제일 마지막 인수인 `init`은 인벤토리의 초기 설정을 위한 것입니다. 자세한 설명은 다음 내용을 확인하세요.

## 인벤토리 초기 설정
InvFrame을 생성할 때, InvFrame의 이벤트 핸들러(`InventoryClickEvent`, `InventoryCloseEvent` 등 이벤트 발생시 처리)를 설정하거나, 인벤토리의 아이템을 설정해 주어야 합니다

### 핸들러 설정

핸들러는 다음과 같이 설정할 수 있습니다. 인벤토리 열림(`InventoryOpenEvent`)과 닫힘(`InventoryCloseEvent`) 이벤트 제외하고 모든 이벤트는 취소됩니다. 예를 들어, 아이템을 클릭했을 때, 아이템은 잡히거나, 움직이거나, 버려지지 않습니다.

```
import io.github.monun.invfx.InvFX
...

frame(numLines, Component.text(invTitle)) {
    onOpen { openEvent ->
        // 인벤토리 열리면 실행
    }

    onClose { closeEvent ->
        // 인벤토리 닫히면 실행
    }

    onClickBottom { clickEvent ->
        // 아이템이 놓일 수 없는 인벤토리 안쪽 부분을 클릭했을 때 실행
    }

    onClickOutside { clickEvent ->
        // 인벤토리 밖을 클릭했을 때 실행
    }

    onClick { clickEvent ->
        // 아이템이 놓일 수 있는 공간을 클릭했을 때 실행
    }
}
```

### 아이템 설정
InvFX의 좌표 표기 방식은 일반적인 좌표평면과는 다릅니다. 왼쪽 위에서 오른쪽으로 갈수록 x좌표값은 증가하고, 아래로 갈수록 y좌표값이 증가합니다. 
![graph](https://user-images.githubusercontent.com/80996692/139722035-f8411a62-caa9-48e9-bcad-c2c68df5a9f9.png)

```kotlin
import io.github.monun.invfx.InvFX
...

frame(numLines, Component.text(invTitle)) {
    slot(x, y) {
        item = itemToPlace
        onClick { clickEvent ->
            // x, y 좌표에 해당하는 칸을 클릭했을 경우 실행
        }
    }
}
```
> 위 코드의  `itemToPlace` 대신에 그 좌표에 넣고 싶은 아이템을 입력하세요

### 예시
```kotlin
package io.github.xxx.plugin

import io.github.monun.invfx.InvFX
...

class MyPlugin: JavaPlugin() {
    override fun onEnable() {
        
    }

    fun generateInventory(player: Player) {
        val invFrame = frame(6, Component.text("SAMPLE_INVENTORY")) {
            onOpen { openEvent ->
                openEvent.player.sendMessage("You opened the inventory")
            }
            slot (0, 0) {
                item = ItemStack(Material.DIAMOND)
                onClick { clickEvent ->
                    clickEvent.whoClicked.sendMessage("You clicked the diamond!")
                }
            }
        }
    }
}
```

## 플레이어에게 인벤토리를 전달하기
인벤토리를 생성하였으니 이제 플레이어가 그 인벤토리를 열게 해야합니다. 이를 위해서, 다음과 같은 코드를 실행하면 됩니다

```kotlin
import io.github.monun.invfx.openFrame

player.openFrame(frame)
```
> 위 코드의 `frame` 대신에 전에 제작한 InvFrame을, `player` 대신에 인벤토리가 열릴 플레이어 객체를 넣으면 됩니다

## 완성 예시
플레이어가 참가하면 인벤토리를 보여주고, 다이아몬드를 누르기 전까지 인벤토리가 계속 열리는 코드입니다

```kotlin
package io.github.xxx.plugin

import io.github.monun.invfx.InvFX
import io.github.monun.invfx.openFrame
...

class MyPlugin: JavaPlugin(), Listener {
    
    fun generateInventory(player: Player) {
        val invFrame = frame(1, Component.text("SAMPLE_INVENTORY")) {
            var clicked = false

            onOpen { openEvent ->
                openEvent.player.sendMessage("You opened the inventory")
            }

            onClose { closeEvent ->
                if (!clicked) {
                    closeEvent.player.sendMessage("Please click the diamond")
                    object: BukkitRunnable() {
                        override fun run() {
                            player.openFrame(invFrame)
                        }
                    }.runTaskLater(1)
                }
            }

            slot (0, 0) {
                item = ItemStack(Material.DIAMOND)
                onClick { clickEvent ->
                    clicked = true
                    clickEvent.whoClicked.closeInventory()
                }
            }
        }
        player.openFrame(invFrame)
    }

    override fun onEnable() {
        server.pluginManager.registerEvents(this, this)
        Bukkit.getOnlinePlayers().forEach {
            generateInventory(it)
        }
    }

    @EventHandler
    fun onPlayerJoin(e: PlayerJoinEvent) {
        generateInventory(e.player)
    }
}
```