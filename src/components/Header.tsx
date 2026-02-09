import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🍞 행복한 빵집</div>
      <nav className="nav">
        <a href="#menu">메뉴소개</a>
        <a href="#location">오시는길</a>
        <a href="#contact">문의하기</a>
      </nav>
    </header>
  );
};

export default Header;