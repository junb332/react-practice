import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">🍞 행복한 빵집</Link>
      <nav className="nav">
        {/* href 대신 to를 사용합니다 */}
        <Link to="/menu">메뉴소개</Link>
        <Link to="/location">오시는길</Link>
        <Link to="/contact">문의하기</Link>
      </nav>
    </header>
  );
};

export default Header;