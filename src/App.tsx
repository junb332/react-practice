import './App.css'; // 스타일 파일 불러오기
import Header from './components/Header'; // 헤더 컴포넌트 불러오기
import Footer from './components/Footer'; // 푸터 컴포넌트 불러오기
import Home from './pages/Home';
import Menu from './pages/Menu';
import Location from './pages/Location';
import Contact from './pages/Contact';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    // ✅ 모든 라우팅 관련 컴포넌트(<Link>가 포함된 Header 포함)를 Router로 감싸야 합니다.
    <Router>
      <div className="app-container">
        <Header /> 
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;