// reduce()함수 사용방법 알아보기
// 첫번째 인자에는 변환함수((total,num)=>total+num), 두번째 인자에는 초깃값(0)을 전달한다.
// 그러면 reduce() 함수는 변환 함수의 첫 번째 인자를 이전 결과값, 두번째 인자를 배열(numbers)의 각 요소값(1,2,3,...)으로 생각하여
// 순환 할당하면서 함수를 실행한다. 초기값으로 전달한 0은 이전 결과값인 total에 할당된다.
// 실무에서 reduce() 함수는 보통 배열을 특정 자료형으로 변환하는데 사용한다.
// 즉! 배열의 총합을 구하는 예제는 '단순히 합을 구하는 예제'가 아니라 '배열을 숫자로 변환한 예제'로 이해해야 한다.
function sum(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
data = [1,2,3,4,5,6,7,8,9,10];
var s = sum(data);
console.log(s);

// map()과 reduce() 활용
// reduce의 두번째 인자는 초기값
function parse(qs) {
    var queryString = qs.substr(1); // queryString = 'banana=10&apple=20&orange=30'
    var chunks = queryString.split('&');
    return chunks
        .map((chunk) => {
            const [key, value] = chunk.split('='); // key = 'banana', value = '10'
            return { key: key, value: value }; // { key: 'banana', value: '10' }
    })
        .reduce((result, item) => { // result = {}, item = { key: 'banana', value: '10' }
            result[item.key] = item.value;  // result = { banana: '10' }
            return result;
    }, {})
}
qs = '?banana=10&apple=20&orange=30';
var data = parse(qs);
console.log(data);