/* 이전 */
var objectOne = {one: 1, two: 2, other: 0};
var objectTwo = {three: 3, four: 4, other: -1};
var combined = {
    one: objectOne.one,
    two: objectOne.two,
    three: objectTwo.three,
    four: objectTwo.four,
};
console.log(combined);
var combined = Object.assign({}, objectOne, objectTwo); // 병합할 객체는 뒤의 객체로 덮어쓴다.(other:0->-1)
// combined = {one:1, two:2, three:3, four:4, other: -1}
console.log(combined);
var combined = Object.assign({}, objectTwo, objectOne); // 병합할 객체는 뒤의 객체로 덮어쓴다.(other:-1->0)
// combined = {one:1, two:2, three:3, four:4, other: 0}
console.log(combined);
var others = Object.assign({}, combined);
console.log(others);
delete others.other;
// others = {one:1, two:2, three:3, four:4}
console.log(others);

/* 이후 */
console.log('바뀐이후....');
var objectOne = {one:1, two:2, other: 0};
var objectTwo = {three:3, four:4, other: -1};
var combined = {
    ...objectOne,
    ...objectTwo,
};
//combined = {one:1,two:2,three:3,four:4,other:-1}
console.log(combined);
var combined = {
    ...objectTwo,
    ...objectOne,
};
//combined = {one:1,two:2,three:3,four:4,other:-0}
console.log(combined);
var { other, ...others } = combined;
// others = {one:1, two:2, three:3, four:4}
console.log(others);