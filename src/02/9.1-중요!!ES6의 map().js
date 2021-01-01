// 앞의 forEach()는 가변 변수 let을 사용했다. 만약 불변 변수(const)만을 사용하려면 map() 함수를 사용하면 된다.
// map() 함수는 각 배열 요소를 정의된 함수를 통해 변환한 결과값들로 새 배열을 반환한다.
// 쉽게 말해 배열을 가공하여 새 배열을 만드는 함수이다.
// 코드를 실행해보면 forEach() 함수를 이용했을 때와 같은 결괏값을 출력하지만 map() 함수는 결괏값을 바로 반환하므로 가변 변수를 사용하지 않아도 된다.
function parse(qs) {
    var queryString = qs.substr(1); // queryString = 'banana=10&apple=20&orange=30'
    var chunks = queryString.split('&');
    var result = chunks.map((chunk) => {
        const [key, value] = chunk.split('='); // key = 'banana', value = '10'
        return { key: key, value: value }; // { key: 'banana', value: '10' }
    });
    return result;
}
qs = '?banana=10&apple=20&orange=30';
var data = parse(qs);
console.log(data);