import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import NavPage from "./components/NavPage";
import MainSwiper from "./components/MainSwiper";
import HotFocus from "./components/HotFocus";
import TimeDeal from "./components/TimeDeal";
import { AppProvider } from "./AppContext"; // AppProvider 가져오기

function App() {
  return (
    <Router>
      <AppProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <NavBar />
          <MainContent />
          <Footer />
        </div>
      </AppProvider>
    </Router>
  );
}

// MainContent 컴포넌트를 별도로 정의하여 Swiper와 Routes를 관리
function MainContent() {
  const location = useLocation(); // 현재 경로 가져오기
  const isHomePage = location.pathname === "/"; // 현재 경로가 기본 페이지인지 확인 (true일 때 렌더링)

  return (
    <main className="flex-grow mt-44">
      {isHomePage ? <MainSwiper /> : null} {/* 기본 페이지에서만 Swiper 표시 */}
      <Routes>
        <Route path="/" element={<HotFocus />} /> {/* Home에서 HotFocus 표시 */}
        <Route path="/" element={<TimeDeal />} /> {/* Home에서 TimeDeal 표시 */}
        <Route path="/:name" element={<NavPage />} />
      </Routes>
    </main>
  );
}

export default App;
