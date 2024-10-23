import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AppProvider } from "./AppContext"; // AppProvider 가져오기

function App() {
  return (
    <AppProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">메인</main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
