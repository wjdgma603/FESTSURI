import './font.css';
import './App.css';
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Main from "./components/Pages/Main/Main.js";
import Party from './components/Pages/Party/Party';
import Exhibition from './components/Pages/Exhibition/Exhibition';
import Board from './components/Pages/Board/Board';
import Gallery from './components/Pages/Gallery/Gallery';
import Introduce from './components/Pages/Introduce/Introduce';
import PtyExbDetail from './components/Pages/PtyExbDetail/PtyExbDetail';
import Footer from './components/Footer/Footer';
import Login from './components/Pages/Personal/Login';
import { useState, useEffect } from 'react';

function App() {

  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
  function IsHeaderLoaded() {
    useEffect(() => {
      setIsHeaderLoaded(true);
      return () => {
        setIsHeaderLoaded(false);
      };
    }, []);
    return isHeaderLoaded;
  }
  const [isFooterLoaded, setIsFooterLoaded] = useState(false);
  function IsFooterLoaded() {
    useEffect(() => {
      setIsFooterLoaded(true);
      return () => {
        setIsFooterLoaded(false);
      };
    }, []);
    return isFooterLoaded;
  }
  // 컴포넌트 마운트 시 True, 언마운트시 False 반환.
  return (
    <div className="App">
      <Header Loaded={isHeaderLoaded}/>
        <Routes>
          <Route path='/*' element={<Main IsHeaderLoaded={IsHeaderLoaded}/>}/>
          <Route path='/login/*' element={<Login IsFooterLoaded={IsFooterLoaded}/>}/>
          <Route path='/party/*' element={<Party/>}/>
          <Route path='/exhibition/*' element={<Exhibition/>}/>
          <Route path='/exbition/detail/*' element={<PtyExbDetail/>}/>
          <Route path='/board/*' element={<Board IsFooterLoaded={IsFooterLoaded}/>}/>
          <Route path='/gallery/*' element={<Gallery/>}/>
          <Route path='/introduce/*' element={<Introduce/>}/>
        </Routes>
      <Footer FtLoaded={isFooterLoaded}/>
    </div>
  );
}

export default App;