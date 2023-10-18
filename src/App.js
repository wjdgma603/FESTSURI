import './font.css'
import './App.css';
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header/>
        <h1>대제목 40rem bold #111 -4%</h1>
        <h2>중제목 32rem -4%</h2>
        <h3>소제목 24rem</h3>
        <h4>강조폰트</h4>
        <h5>포인트폰트</h5>
        <p>기본폰트</p>


    </div>
  );
}

export default App;
