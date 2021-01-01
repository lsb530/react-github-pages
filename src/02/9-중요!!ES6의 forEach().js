// ES6의 forEach() 함수를 사용하면 반복문의 순번(i++)과 배열의 크기(chunks.length)를 따로 변수에 저장하는 과정을 생략할 수 있다.
// 이전코드
function parse(qs) {
    var queryString = qs.substr(1); // queryString = '?banana=10&apple=20&orange=30'
    var chunks = queryString.split('&');
    var result = {};
    for(var i = 0; i< chunks.length; i++) {
        var parts = chunks[i].split('=');
        var key = parts[0]; // key = 'banana'
        var value = parts[1]; // value = '10'
        result[key] = value; // result = { banana: '10' }
    }
    return result;
}
// ES6 코드
function parse_ES6(qs) {
    const queryString = qs.substr(1); // queryString = 'banana=10&apple=20&orange=30'
    const chunks = queryString.split('&'); // chunks = ['banana=10', 'apple=20', 'orange=30']
    let result = {};
    chunks.forEach((chunk) => {
        const parts = chunk.split('='); // chunk = 'banana=10', parts = ['banana', '10']
        const key = parts[0]; // key = 'banana'
        const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
        result[key] = value; // result = { banana:10 }
    });
    return result;
}
// 키와 키값을 구조 분해 할당방식으로 변환하면 위의 코드를 좀더 간결하게 바꿀 수 있다.
function parse_ES6_Simple(qs) {
    const queryString = qs.substr(1); // queryString = 'banana=10&apple=20&orange=30'
    const chunks = queryString.split('&'); // chunks = ['banana=10', 'apple=20', 'orange=30']
    let result = {};
    chunks.forEach((chunk) => {
        const [key, value] = chunk.split('='); // key = 'banana', value = '10'
        result[key] = value; // result = { banana:'10' }
    });
    return result;
}
qs = '?banana=10&apple=20&orange=30';
var data1 = parse(qs);
var data2 = parse_ES6(qs);
var data3 = parse_ES6_Simple(qs);
console.log(data1);
console.log(data2);
console.log(data3);