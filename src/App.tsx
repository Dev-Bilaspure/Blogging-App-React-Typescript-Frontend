import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/secondary/Navbar";
import Home from "./pages/Home";
import Authentication from "./pages/Auth";
import React, { useEffect } from "react";
import Blog from "./pages/Blog";
import { useStore } from "./store/useStore";
import TestingImageUpload from "./pages/TestingImageUpload";

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Authentication />} />
      <Route path="/signup" element={<Authentication />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/testing" element={<TestingImageUpload />} />
    </Routes>
  );
};

function App() {
  const {
    actions: {
      auth: { initializeUser },
    },
  } = useStore();

  useEffect(() => {
    initializeUser();
  }, []);

  return (
    <div className="mt-[60px] sm:mt-[40px]">
      <HelmetProvider>
        <BrowserRouter>
          <Navbar />
          <RoutesList />
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
