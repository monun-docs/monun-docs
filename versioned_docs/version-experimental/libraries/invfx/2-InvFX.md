---
sidebar_position: 3
---

# InvFX의 기능들
이 페이지는 InvFX의 더 다양한 기능에 대한 내용을 다룹니다.

## InvSpace
InvSpace는 인벤토리 상에서 공간을 차지하는 객체가 상속받고 있습니다. `InvPane`, `InvList`, `InvFrame` 모두 이에 상속받습니다. InvSpace의 기능은 아이템을 원하는 좌표에 놓을 수 있도록 하고 클릭이벤트를 핸들링 하는 것입니다.

### InvSpace 기능을 이용한 InvFrame
```kotlin
frame(numLines, Component.text(invTitle)) {
    item(itemX, itemY, item)
    onClick { x, y, clickEvent ->
        if (itemX == x && itemY == y) {
            // Action
        }
    }
}
```

위 코드와 같이, InvSpace의 기능을 활용하면, 아이템의 위치 좌표를 쉽게 파악할 수 있다는 장점이 있습니다.

## InvWindow
InvWindow는 앞에서 말했듯이 물리적이지는 않지만 가상의 InventoryHolder입니다. 기본적인 InvFrame은 InvWindow에 상속받기 때문에 InvFrame 자체를 InvWindow라고 보셔도 무관합니다. InvFX에서 InvWindow의 역할은 기본적으로 두가지로 나뉘는데 하나는 InvFX에 의해 만들어진 인벤토리와 다른 인벤토리를 구별하는 것이고, 나머지 하나는 인벤토리에 이벤트를 전달해주는 역할입니다.

## InvRegion
InvFX는 InvFrame을 그룹으로 나눌 수 있도록 설계되었습니다. InvRegion은 InvFrame 안의 그룹을 나타냅니다. InvRegion은 InvPane과 InvList, 두가지 종류가 있습니다.

### InvPane
InvPane은 특별한 기능이 없는 단순한 인벤토리 칸의 집합입니다. InvPane을 만드는 방법은 다음과 같습니다. 시작점의 x, y 좌표, 너비(w)와 높이(h)를 다음 코드에 대입하면 됩니다.

```kotlin
frame(numLines, Component.text(invTitle)) {
    pane(x, y, w, h, init)
}
```
> 주의! y + w의 값은 9이하어야 하고, x + h의 값은 `numLines`이하여야합니다. 또한, x, y, w, h 모두 양수어야합니다.

위 코드의 `init`에서 InvFrame의 초기 설정과 비슷하게, 핸들러 설정이나 아이템 위치를 할 수 있습니다. 아이템 위치를 설정할 때는, InvFrame 상에서의 좌표가 아닌 위에서 정의한 InvPane의 시작점을 기준으로 상대적인 좌표를 의미하니 주의하세요. `onClick` 핸들러 또한 x, y 는 시작점 중심 상대적 좌표를 의미합니다.

```kotlin
frame(numLines, Component.text(invTitle)) {
    pane(x, y, w, h) {
        item(relX, relY, item)
        onClick { x, y, clickEvent ->
            if (x == relX && y == relX) {
                // Action
            }
        }
    }
}
```

### InvList
InvList는 InvPane과 달리, InvList 안에 들어있는 아이템들의 배열의 개념으로 만들어졌습니다. 대표적인 사용 예로는 [Psychics의 능력자 책자](https://github.com/monun/psychics/blob/master/psychics-core/src/main/kotlin/io/github/monun/psychics/invfx/InvPsychic.kt)가 있습니다.

InvFrame에서 InvList를 만드는 방법은 다음과 같습니다.
```kotlin
frame(numLines, Component.text(invTitle)) {
    list(x, y, w, h, trim, data, init)
}
```
`x`, `y`, `w`, `h`에는 InvPane과 같이 시작 좌표 x, y, 너비(w)와 높이(h)를 대입합니다. `data`에는 어떠한 객체를 아이템으로 바꾸기 전의, 즉 마인크래프트 상의 아이템가 아닌 날것의 정보를 넣습니다. 예를 들어, 만약 다음과 같은 정보
```kotlin
val sticks = arrayListOf("a", "b", "c")
```
를 사용 할 경우, `data`에는 `sticks`를 반환하는 `lambda형`인 `{ sticks }`를 넣습니다. 이 날것의 정보를 마인크래프트의 아이템화를 시키는 것은 InvList의 `init` 단계에서 `transform` 함수가 합니다. 만약 `sticks`의 모든 값의 이름을 가진 막대기 아이템으로 만든다면 다음과 같은 코드가 필요합니다.
```kotlin
frame(numLines, Component.text(invTitle)) {
    list(x, y, w, h, trim, data) {
        transform { stickName -> 
            ItemStack(Material.STICK).apply { 
                itemMeta = itemMeta.apply { 
                    displayName(Component.text(stickName)) 
                } 
            } 
        }
    }
}
```
즉, 이 코드는 `sticks`를 루프하여 각 항목을 원하는 `ItemStack`으로 반환하는 코드입니다. 

또한, `data`의 크기가 주어진 InvList의 인벤토리 칸의 개수보다 큰 경우를 대비해 `pages`가 존재합니다. 이는 책자 처럼 InvList의 `pages` 값을 수정하면서 모든 아이템을 볼 수 있도록 해줍니다. `trim` 인수는 내부 코드에서 페이지 변화로 인한 업데이트 시 더 자세한 제한을 두기 위함이므로, 특별한 경우가 아닌 이상 기본적으로 `true`로 두시는 것이 좋을 것 같습니다.
