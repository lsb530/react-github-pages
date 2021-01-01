// 앞에서 언급된 참조 순서에 따른 의존성 문제를 간단히 해결했다. import 구문을 사용하여 script 엘리먼트없이 연결된 파일 및 의존 파일을
// 먼저 모두 내려 받고 코드를 구동하도록 변경한 것이다.
import MyModule from './MyModule.js'; // import 구문을 사용해 지정된 파일(MyModule.js)의 기본(default)으로 공유하는 모듈을 불렀다.
import { ModuleName } from './MyModule.js'; // 이름을 맞춰 모듈 안의 특정 함수 혹은 변수를 참조할 수 있다.
import { ModuleName as RenameModuleName } from './MyModule.js'; // 객체 구조 할당과 유사하게 특정 모듈을 가져올 때 이름이 충돌할 경우 다른 이름으로 변경하여 불러들일 수 있다.
function Func() {
    MyModule();
}
export const CONST_VALUE = 0; // 변수나 클래스의 이름을 다른 파일에서 따로 참조할 수 있도록 정의한다.
export class MyClass {} // 변수나 클래스의 이름을 다른 파일에서 따로 참조할 수 있도록 정의한다.
export default new Func(); // 현재 파일이 다른 파일에서 기본(default)으로 참조하게 되는 항목을 정의한다.