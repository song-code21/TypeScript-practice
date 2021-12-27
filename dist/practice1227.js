"use strict";
// enum 타입-> 열거형
// 상수들의 집합에 이름을 부여
var StarBuksGrade;
(function (StarBuksGrade) {
    StarBuksGrade[StarBuksGrade["WELCOME"] = 0] = "WELCOME";
    StarBuksGrade[StarBuksGrade["GREEN"] = 1] = "GREEN";
    StarBuksGrade[StarBuksGrade["GOLD"] = 2] = "GOLD";
})(StarBuksGrade || (StarBuksGrade = {}));
function getDiscount(v) {
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
