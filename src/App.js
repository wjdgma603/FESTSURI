import './font.css';
import './App.css';
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Main from "./components/Pages/Main/Main.js";
import Party from './components/Pages/Party/Party';
import Exhibition from './components/Pages/Exhibition/Exhibition';
import Board from './components/Pages/Board/Board';
import Gallery from './components/Pages/Gallery/Gallery';
import Party_sub from './components/Pages/PtyExbDetail/Party_sub.js';
import Introduce from './components/Pages/Introduce/Introduce';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/party' element={<Party/>}/>
          <Route path='/exhibition' element={<Exhibition/>}/>
          <Route path='/exbition/detail' element={<Party_sub/>}/>
          <Route path='/board' element={<Board/>}/>
          <Route path='/board/NftCrt' element={''}/>
          <Route path='NoticeDetail' element={''}/>
          <Route path='InquiryDetail' element={''}/>
          <Route path='InquiryCreate' element={''}/>
          <Route path='FAQ' element={''}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/introduce' element={<Introduce/>}/>
        </Routes>
    </div>
  );
}

export default App;