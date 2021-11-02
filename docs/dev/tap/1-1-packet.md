---
sidebar_position: 4
---

# 1-1. Packets
Tap에서는 패킷 관련 함수를 지원합니다. 

## 가상 개체 스폰
PacketSupport를 이용해 가상 개체를 스폰하는 경우, 가상 서버를 이용해 스폰하는 것과 달리, 몹과 일반 개체를 구분해야합니다. 몹은 LivingEntity 클래스에 상속받는 개체 - 좀비, 플레이어, 늑대 등이 있고, 일반 개체는 보트, 마인카트 등이 있습니다

### 몹
```kotlin
PacketSupport.spawnEntity(
    ENTITY_ID,
    UUID,
    TYPE_ID,
    X,
    Y,
    Z,
    YAW,
    PITCH,
    ROLL,
    VELOCITY
)
```

### 일반 개체
```kotlin
PacketSupport.spawnEntity(
    ENTITY_ID,
    UUID,
    X,
    Y,
    Z,
    YAW,
    PITCH,
    ENTITY_TYPE,
    OBJECT_ID,
    VELOCITY
)
```

## 개체 메타데이터
개체의 매타데이터를 업데이트합니다.
```kotlin
PacketSupport.entityMetadata(ENTITY)
```

## 개체 장비
개체의 장비를 수정합니다.
```kotlin
PacketSupport.entityEquipment(ENTITY_ID, EQUIPMENTS)
```

## 텔레포트
개체를 순간이동 시킵니다.

*표준*
```kotlin
PacketSupport.entityTeleport(
    ENTITY_ID,
    X,
    Y,
    Z,
    YAW,
    PITCH,
    IS_ON_GROUND
)
```

*축약*

```kotlin
PacketSupport.entityTeleport(
    ENTITY,
    LOCATION,
    IS_ON_GROUND
)
```

## 상대적으로 이동
개체의 현재 위치를 기준으로 변위만큼 이동하고 방향을 수정합니다. 이때, 움직이는 변위의 x, y, z 값은 모두 8보다 작아야합니다.

### 변위만

*표준*
```kotlin
PacketSupport.relEntityMove(
    ENTITY_ID,
    DX,
    DY,
    DZ,
    IS_ON_GROUND
)
```

*축약*
```kotlin
PacketSupport.relEntityMove(
    ENTITY_ID,
    D_VECTOR,
    IS_ON_GROUND
)
```

### 변위 및 회전

*표준*
```kotlin
PacketSupport.relEntityMoveLook(
    ENTITY_ID,
    DX,
    DY,
    DZ,
    YAW,
    PITCH,
    IS_ON_GROUND
)
```

*축약*
```kotlin
PacketSupport.relEntityMoveLook(
    ENTITY_ID,
    D_VECTOR,
    YAW,
    PITCH,
    IS_ON_GROUND
)
```

## 머리 회전
플레이어나 좀비같이 머리가 있는 개체의 머리를 회전시킵니다.

```kotlin
PacketSupport.entityHeadLook(
    ENTITY_ID,
    YAW
)
```

## 개체 속도 변화
개체의 속도를 변화시킵니다.

```kotlin
PacketSupport.entityVelocity(
    ENTITY_ID,
    VELOCITY
)
```

## 개체 상태
개체의 상태를 수정합니다.

```kotlin
PacketSupport.entityStatus(
    ENTITY_ID,
    DATA
)
```

## 애니매이션
개체에 애니매이션을 실행합니다. 애니메이션은 오른팔 흔들기, 왼팔 흔들기, 데미지 입기, 침대 나가기 등이 있습니다.

*표준*

```kotlin
PacketSupport.entityAnimation(
    ENTITY_ID,
    DATA
)
```

*축약*

```kotlin
PacketSupport.entityAnimation(
    ENTITY_ID,
    ANIMATIONTYPE
)
```

## 탑승
개채를 다른 개체에 탑승시킵니다.

```kotlin
PacketSupport.mount(
    ENTITY_ID,
    PASSENGER_IDS
)
```

## 개체 제거
개체를 제거합니다.

### 단일 개체
```kotlin
PacketSupport.removeEntity(
    ENTITY_ID
)
```

### 여러 개체
```kotlin
PacketSupport.removeEntities(
    ENTITY_IDS
)
```

## 파티클
파티클을 생성합니다.

```kotlin
PacketSupport.spawnFireworkParticles(
    X,
    Y,
    Z,
    FIREWORK_PARTICLE
)
```