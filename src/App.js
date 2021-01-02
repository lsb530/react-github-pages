import logo from './logo.svg';
import './App.css';
import axios from 'axios';   //axios 추가

function send() {
    console.log('나와라 콘솔!');
    const client = axios.create();   // axios 기능생성
        const name = '내이름은 코난';
        client.post('/api' , {name} );   //axios 기능을 통한 post 사용및 name 값 전달.
}

function App() {
  return (
    <div className="App">
      <h1 className="title">리액트 GitHub Pages 배포 </h1>
      <p><button onClick={send}>보내기 버튼 생성!</button></p>
    </div>
  );
}

export default App;