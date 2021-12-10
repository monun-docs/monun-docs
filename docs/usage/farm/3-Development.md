---
slug: /usage/farm/development
sidebar_position: 5
---

# 개발하기

**이 내용은 플러그인을 이용해 커스터마이징을 하고 싶은 개발자들을 위한 문서이며, 플러그인 사용과는 별도의 내용을 다룹니다**

## API

### FarmWorld
Bukkit API의 World와 대응합니다.

### FarmCrop
이 객체는 작물이나 나무, 씨앗이나 묘목에 대한 정보를 담고 있습니다.

### FarmChunk
Bukkit API의 Chunk와 대응합니다. 대응하는 청크에 의해 로드/언로드 됩니다.

### FarmManager
서버 내의 모든 FarmWorld를 관리합니다.

### CropStage
작물의 성장을 관라힙니다.

### Farm
FarmManager 인스턴스를 관리합니다.

### CropType
작물의 종류와 관련된 내용이 있습니다.

### FarmIO
Farm의 SQL 데이터베이스와 연결하고 정보를 불러오고 저장합니다.

## 개발하기
일단 플러그인을 사용해 개발하는 기초 내용은 [여기](../Develop-Plugins)에서 다룹니다.

## 원하는 월드의 FarmWorld 객체 가져오기
```kotlin
val world: FarmWorld? = Farm.manager.getWorld(BUKKIT_WORLD)
```
위 코드에서 `BUKKIT_WORLD`는 Bukkit API의 월드 객체를 나타냅니다.

> 월드가 로드되지 않았을 때 `null`을 리턴합니다. 

## 원하는 청크 가져오기

```kotlin
val world: FarmWorld = Farm.manager.getWorld(BUKKIT_WORLD) ?: throw RuntimeException("World Not Initialized")
val chunk: FarmChunk? = world.chunkAt(CHUNK_X, CHUNK_Y)
```
위 코드는 **청크 좌표**를 이용해 월드에서 청크를 가져옵니다.

> 청크가 로드되지 않았을 떄 `null`을 리턴합니다.

## 원하는 작물 가져오기

```kotlin
val world: FarmWorld = Farm.manager.getWorld(BUKKIT_WORLD) ?: throw RuntimeException("World Not Initialized")
val crop: FarmCrop? = world.cropAt(CROP_X, CROP_Y, CROP_Z)
```
위 코드는 주어진 좌표에 위치한 작물을 가져옵니다.

> 작물이 존재하지 않을 때 `null`을 리턴합니다.


