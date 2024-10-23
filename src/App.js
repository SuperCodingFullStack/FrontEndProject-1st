import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import NavPage from "./components/NavPage";
import { AppProvider } from "./AppContext"; // AppProvider 가져오기

function App() {
  return (
    <AppProvider>
      {/* Router는 App에서만 한 번 사용 */}
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <NavBar />
          <Routes>
            {/* 동적으로 생성된 페이지 */}
            <Route path="/" element={<main className="flex-grow">메인</main>} />
            <Route path="/:name" element={<NavPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
