# 3-1. KommandArgument Content Explanation

이 문서는 KommandArgument 내부의 내용들에 대해 해설합니다.

---
KommandArugment에서 지원하는 Argument 타입은 다음과 같습니다:

<!-- Reference: https://minecraft.fandom.com/wiki/Argument_types -->

## Brigadier 원시 타입

| Argument Type     | Kommand method                           | Return Type | Simple Description                                           | Official Examples                                            |
| ----------------- | ---------------------------------------- | ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| brigadier:bool    | bool()                                   | Boolean     | true/false 형태의 논리 자료형입니다.                         | `true` `false`                                               |
| brigadier:double  | double(minimum: Double, maximum: Double) | Double      | [배정도 부동소숫점](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) 형태의 숫자입니다.<br />최솟값: `-1.7976931348623157E308`, 최댓값: `1.7976931348623157E308` 를 기본값으로 갖습니다. | `0` `1.2` `.5` `-1` `-.5` `-1234.56`                         |
| brigadier:float   | float(minimum: Float, maximum: Float)    | Float       | [단정도 부동소숫점](https://en.wikipedia.org/wiki/Single_precision_floating-point_format) 형태의 숫자입니다.<br />최솟값: `-3.4028235E38`, 최댓값: `3.4028235E38` 를 기본값으로 갖습니다. | `0` `1.2` `.5` `-1` `-.5` `-1234.56`                         |
| brigadier:integer | int(minimum: Int, maximum: Int)          | Int         | 32비트 정수입니다.<br />최솟값: `-2,147,483,648`, 최댓값 `2,147,483,647` 를 기본값으로 갖습니다. | `0` `123` `-123`                                             |
| brigadier:long    | long(minimum: Long, maximum: Long)       | Long        | 64비트 정수입니다.<br />최솟값: `-9,223,372,036,854,775,808`, 최댓값 `9,223,372,036,854,775,807` 를 기본값으로 갖습니다. | `0` `123` `–123`                                             |
| brigadier:string  | string(stringType: StringType)           | String      | 문자열입니다.<br />Single Word: 공백이 없는 문자열입니다.<br />Quotable Phrase: 공백이 없는 문자열이거나, 따옴표로 둘러싸인 문자열입니다.<br />Greedy Phrase: 명령문의 나머지 부분을 전부 취하는 문자열입니다. | Single word: `word` `word_with_underscores`<br />Quotable phrase: `"quoted phrase"` `word` `""`<br />Greedy phrase: `word` `word with spaces` `"and symbols"` |

## Minecraft 내부 타입 

<!-- TODO: UPDATE CONTENTS -->