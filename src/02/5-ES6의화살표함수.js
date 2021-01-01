// 기존의 함수식으로 표현
var add = (first, second) => {
    return first + second;
};

// 바로 return이 오는경우
var add = (first, second) => first + second;

// 반환값이 객체라면 결과값을 값싸서 간결하게 표현 가능
var addAndMultiple = (first, second) => ({ add: first + second, multiply: first * second});

// 함수 표현식 반환
function addNumber(num) {
    return function (value) {
        return num + value;
    };
}

// 화살표 함수를 사용하여 간결한 코드로 함수 반환
var addNumber = num => value => num + value;

// 콜백함수의 this범위로 생기는 오류를 피하기 위해 bind() 함수를 사용하여 this객체를 전달하는 과정을 포함한다
class MyClass {
    value = 10;
    constructor() {
        var addThis2 = function(first, second) {
            return this.value + first + second;
        }.bind(this);
        var addThis3 = (first, second) => this.value + first + second;
    }
}

console.log(add(5, 7));
console.log(addAndMultiple(5,3));
console.log(addAndMultiple(5,3).add);
console.log(addAndMultiple(5,3).multiply);
console.log(addNumber(3)(7));
var m = new MyClass();
console.log(m);
console.log(m.value);