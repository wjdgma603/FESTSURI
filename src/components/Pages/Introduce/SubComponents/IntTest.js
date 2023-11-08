import React, { useState } from 'react';

import "./IntTest.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);




  // 페이지 스크롤 이벤트 처리
  const handleScroll = () => {
    // 페이지 하단에 도달하면 버튼을 보이게 하고 그렇지 않으면 숨겨줌.
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  //  window.TOP
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // 스크롤 이벤트 리스너 추가
  window.addEventListener('scroll', handleScroll);

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      Top
    </button>
  );
};

export default ScrollToTopButton;