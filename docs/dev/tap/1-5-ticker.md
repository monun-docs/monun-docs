---
sidebar_position: 8
---

# 1-5. Ticker
Ticker는 BukkitRunnable을 개선하고 보완한 기능이다.

## 종류
### Plank
> 호출 횟수에 따라 tick이 증가하는 Ticker를 생성합니다. -Ticker 코드 中

### Precision
> 시간에 따라 tick이 변화하는 Ticker를 생성합니다. 태스크는 시간 지연 관계없이 tick과 동기화되어 실행됩니다. -Ticker 코드 中

### Flex
> 시간에 따라 tick이 변화하는 Ticker를 생성합니다. 태스크는 시간 지연에 따라 한번만 호출됩니다. -Ticker 코드 中

## 사용
### 한 번 실행
```kotlin
val ticker: Ticker
    
ticker.runTask(ACTION, DELAY)
```

### 반복 실행
```kotlin
val ticker: Ticker
    
ticker.runTaskTimer(ACTION, INITIAL_DELAY, PERIOD)
```

