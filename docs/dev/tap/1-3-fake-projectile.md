---
sidebar_position: 6
---

# 1-3. Fake Projectile
Tap의 가상 발사체는 개체가 아닙니다. Tap의 가상 발사체를 이용하여 가상 개체를 쉽게 발사체로 사용할 수 있습니다. 

## 사용 방법
비록 가상 발사체는 인터페이스가 아닌 클래스이지만, 직접 객체를 생성하는 것이 아니라 \(~~`new FakeProjectile`~~\) 자신만의 방법으로 발사체의 방향과 위치를 정해주고 움직여주는 방법을 설정해 주어야합니다.

## onPreUpdate, onMove, onTrail

***onPreUpdate*** 단계는 개체에 가한 힘에 의한 위치변화가 아닌, 즉 마찰력이나 중력 등에 의한 x, y, z 속도의 변화를 계산하는 단계입니다.

***onMove*** 단계는 계산된 위치로 개체를 이동시키는 단계입니다.

***onTrail*** 단계는 발사체가 블록이나 다른 개체에 충돌하였는지 확인하는 단계입니다.

## 예시 (Psychics 플러그인 중)
[스톰브레이커](https://github.com/monun/psychics/blob/master/psychics-abilities/ability-storm-breaker/src/main/kotlin/io/github/monun/psychics/ability/stormbreaker/AbilityStormBreaker.kt)의 229번째 줄에 AxeProjectile을 참고하세요.

[슬링샷](https://github.com/monun/psychics/blob/master/psychics-abilities/ability-sling-shot/src/main/kotlin/io/github/monun/psychics/ability/slingshot/AbilitySlingShot.kt)의 99번째 줄에 CobblestoneProjectile을 참고하세요.