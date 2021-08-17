# 3-1. KommandArgument Content Explanation

이 문서는 KommandArgument 내부의 내용들에 대해 해설합니다.

---

KommandArugment에서 지원하는 Argument 타입은 다음과 같습니다:

<!-- Reference: https://minecraft.fandom.com/wiki/Argument_types -->

## Brigadier 원시 타입

| Argument Type     | Kommand method | Return Type | Simple Description                                           |
| ----------------- | -------------- | ----------- | ------------------------------------------------------------ |
| brigadier:bool    | bool()         | Boolean     | true/false 형태의 논리 자료형입니다.                         |
| brigadier:double  | double()       | Double      | [배정도 부동소숫점](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) 형태의 숫자입니다.<br />최솟값: `-1.7976931348623157E308`, 최댓값: `1.7976931348623157E308` 를 기본값으로 갖습니다. |
| brigadier:float   | float()        | Float       | [단정도 부동소숫점](https://en.wikipedia.org/wiki/Single_precision_floating-point_format) 형태의 숫자입니다.<br />최솟값: `-3.4028235E38`, 최댓값: `3.4028235E38` 를 기본값으로 갖습니다. |
| brigadier:integer | int()          | Int         | 32비트 정수입니다.<br />최솟값: `-2,147,483,648`, 최댓값 `2,147,483,647` 를 기본값으로 갖습니다. |
| brigadier:long    | long()         | Long        | 64비트 정수입니다.<br />최솟값: `-9,223,372,036,854,775,808`, 최댓값 `9,223,372,036,854,775,807` 를 기본값으로 갖습니다. |
| brigadier:string  | string()       | String      | 문자열입니다. 기본값은 Single Word 입니다.<br />Single Word: 공백이 없는 문자열입니다.<br />Quotable Phrase: 공백이 없는 문자열이거나, 따옴표로 둘러싸인 문자열입니다.<br />Greedy Phrase: 명령문의 나머지 부분을 전부 취하는 문자열입니다. |

## Minecraft 내부 타입 

### 범위를 갖는 타입


| Argument Type              | Kommand method | Return Type  | Simple Description             |
| -------------------------- | -------------- | ------------ | ------------------------------ |
| minecraft:float_range | doubleRange() | 

| Argument Type              | Kommand method | Return Type  | Simple Description             |
| -------------------------- | -------------- | ------------ | ------------------------------ |
| minecraft:color            | color()        | ChatColor    | 채팅에서 지원하는 모든 색상 값입니다. |
| minecraft:componet         | component()    | Component    | <!-- TODO: 이거어케함--> |
| minecraft:nbt_compound_nbt | compoundTag()  | JsonObject   | SNBT 포멧의 복합 NBT입니다.    |
| minecraft:dimension        | dimension()    | World        | 개채, 청크 및 블록을 포함하는 월드입니다. |
| minecraft:entity_anchor    | entityAnchor() | EntityAnchor | Entity의 eyes 혹은 feet입니다. |
| minecraft:entity           | entity()       | Entity       |                                |