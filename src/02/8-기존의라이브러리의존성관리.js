// html문서
<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="./lib/math.js" language="javascript"></script>
<script src="./app.js" language="javascript"></script>
</head>
</html>
<span id="pi-label"></span>

// lib/math.js
LibMath = {};
LibMath.sum = function (x,y) { return x + y; };
LibMath.pi = 3.141593;

// app.js
var math = LibMath;
$("#pi-label").text("2파이= " + math.sum(math.pi, math.pi));

//이때 app.js는 math.js뿐만 아니라 제이쿼리까지 사용한다. 만약 html 문서에서 app.js를 먼저 참조할 경우 정의되지 않는 함수를 참조하는 의존성 문제 발생
//여기까지보면 script엘리먼트의 선언 순서가 매우 중요하다는 것을 알 수 있다. 다음과 같이 엘리먼트의 순서가 바뀌면 오류가 발생한다.
<script src="./app.js" language="javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="./lib/math.js" language="javascript"></script>