import './font.css';
import './App.css';
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Main from "./components/Pages/Main/Main.js";
import Party from './components/Pages/Party/Party';
import Exhibition from './components/Pages/Exhibition/Exhibition';
import Exhibition_sub from './components/Pages/ExhibitionSub/Exhibition_sub';
import Board from './components/Pages/Board/Board';
import Gallery from './components/Pages/Gallery/Gallery';
import Party_sub from './components/Pages/PtyExbDetail/Party_sub.js';
import Introduce from './components/Pages/Introduce/Introduce';
// import PtyExbDetail from './components/Pages/PtyExbDetail/PtyExbDetail';
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
      <Header Loaded={isHeaderLoaded} />
      <Routes>
        <Route path='/' element={<Main IsHeaderLoaded={IsHeaderLoaded} />} />
        <Route path='/login' element={<Login IsFooterLoaded={IsFooterLoaded} />} />
        <Route path='/Party' element={<Party />} />
        <Route path='/Exhibition' element={<Exhibition />} />
        <Route path='/Party_sub' element={<Party_sub />} />
        <Route path='/Exhibition_sub' element={<Exhibition_sub />} />
        <Route path='/Board' element={<Board IsFooterLoaded={IsFooterLoaded} />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/Introduce' element={<Introduce />} />
      </Routes>
      <Footer FtLoaded={isFooterLoaded} />
    </div>
  );
}

export default App;