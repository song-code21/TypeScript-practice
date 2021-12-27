// enum 타입-> 열거형
// 상수들의 집합에 이름을 부여

enum StarBuksGrade {
  WELCOME,
  GREEN, 
  GOLD
}

function getDiscount(v: StarBuksGrade): number {
  switch (v) {
    case StarBuksGrade.WELCOME:
      return 0;
    case StarBuksGrade.GREEN:
      return 5;
    case StarBuksGrade.GOLD:
      return 10;
  }
}
console.log(getDiscount(StarBuksGrade.GREEN));