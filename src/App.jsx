import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Features } from "./pages/Features/Features";
import { Family } from "./pages/Family/Family";
import { MonthlyInstallments } from "./pages/MonthlyInstallments/MonthlyInstallments";
import { HowToVideos } from "./pages/HowToVideos/HowToVideos";
import { FixedNavbar } from "./components/molecules/FixedNavbar/FixedNavbar";

function App() {
  return (
    <>
      <FixedNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/family" element={<Family />} />
        <Route path="/monthly-installments" element={<MonthlyInstallments />} />
        <Route path="/how-to" element={<HowToVideos />} />
      </Routes>
    </>
  );
}

export default App;
