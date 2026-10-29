import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ThreeField from "./components/ThreeField.jsx";
import { TopBar } from "./components/TopBar.jsx";
import { useRise } from "./components/useRise.js";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Pricing from "./pages/Pricing.jsx";
import Tos from "./pages/Tos.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const location = useLocation();
  const inverse = location.pathname === "/contact";

  useEffect(() => {
    document.body.classList.toggle("inverse", inverse);
    document.documentElement.classList.toggle("inverse", inverse);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", inverse ? "#0a0a0a" : "#ffffff");
  }, [inverse]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => document.body.classList.add("loaded"), 60);
    return () => clearTimeout(t);
  }, [location.pathname]);

  useRise([location.pathname]);

  return (
    <>
      <ThreeField />
      <div className="relative z-10">
        <TopBar inverse={inverse} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/tos" element={<Tos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
