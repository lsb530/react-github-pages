var x = 0;
var y = 0;
var obj = { x: x, y: y }; // obj에 대입한 객체의 키 이름이 키값과 동일하다
var randomKeyString = 'other';
var combined = {};
combined['one' + randomKeyString] = 'some value'; // 연산결과로 키값을 대입할 때는 키값을 지정할 코드를 추가로 작성
var obj2 = {
    x: x,
    methodA: function() { console.log('method A'); },
    methodB: function() { return 0; }
};
console.log(combined);
console.log(obj2);
console.log(obj2.methodA());
console.log(obj2.methodB());