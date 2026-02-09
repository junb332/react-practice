import './App.css'; // 스타일 파일 불러오기
import Header from './components/Header'; // 헤더 컴포넌트 불러오기
import Footer from './components/Footer'; // 푸터 컴포넌트 불러오기

function App() {
  return (
    <div className="app-container">
      {/* 1. 상단 헤더 */}
      <Header />

      {/* 2. 메인 콘텐츠 (본문) */}
      <main className="main-content">
        <section className="hero">
          <h1>갓 구운 빵의 따뜻함을 전합니다 🥖</h1>
          <p>매일 아침 8시, 신선한 재료로 정성을 다해 굽습니다.</p>
        </section>
        
        <section className="menu-preview">
          <h2>오늘의 추천 메뉴</h2>
          <ul>
            <li>🥐 소금빵 - 3,500원</li>
            <li>🥪 잠봉뵈르 - 8,500원</li>
            <li>🥖 바게트 - 4,000원</li>
          </ul>
        </section>
      </main>

      {/* 3. 하단 푸터 */}
      <Footer />
    </div>
  );
}

export default App;