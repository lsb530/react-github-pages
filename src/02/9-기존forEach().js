// 기존 자바스크립트로 쿼리스트링 'banana=10&apple=20&orange=30'을 문자를 기준으로 분리하여 객체에 담아 반환하는 parse()함수 선언
// 코드를 보면 for문을 이용하여 banana, apple, orange와 10, 20, 30을 분리한다.
function parse(qs) {
    var queryString = qs.substr(1); // queryString = 'banana=10&apple=20&orange=30'
    var chunks = queryString.split('&');
    var result = {};
    for(var i = 0; i < chunks.length; i++) {
        var parts = chunks[i].split('=');
        var key = parts[0]; // key = 'banana'
        var value = parts[1]; // value = '10'
        result[key] = value; // result = { banana: '10' }
    }
    return result;
}

// 만약 10, 20, 30을 문자열이 아닌 숫자로 변환하려면 다음과 같이 코드를 작성하면 된다.
function parseToNum(qs) {
    var queryString = qs.substr(1); // queryString = 'banana=10&apple=20&orange=30'
    var chunks = queryString.split('&');
    var result = {};
    for(var i = 0; i< chunks.length; i++) {
        var parts = chunks[i].split('=');
        var key = parts[0]; // key = 'banana'
        var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]); // value = '10'
        result[key] = value; // result = { banana: 10 }
    }
    return result;
}
qs = '?banana=10&apple=20&orange=30';
var stringdata = parse(qs);
console.log(stringdata);
var numdata = parseToNum(qs);
console.log(numdata);