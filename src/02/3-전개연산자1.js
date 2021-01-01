/* 전개 연산자 : 배열이나 객체, 변수명 앞에 마침표 세 개(...)를 입력한다. 다만 배열/객체/함수 인자 표현식([],{},()) 안에서만 사용해야 한다 */
// 이전
var array1 = ['one','two'];
var array2 = ['three','four'];
var combined = [array1[0], array1[1], array2[0], array2[1]];
console.log(combined);
var combined = array1.concat(array2);
console.log(combined);
var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty';
function func() {
    var args = Array.prototype.slice.call(this, arguments);
    var fist = args[0];
    var others = args.slice(1, args.length);
}
// 이후
var array1 = ['one','two'];
var array2 = ['three','four'];
var combined = [...array1, ...array2];
console.log(array2);
// const [first, second, three='empty', ...others] = array1;
// console.log(others);
// func(...args){ var [first, ...others] = args;}