import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Features from "./pages/features/Features";
import Career from "./pages/career/Career";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-feature" element={<Features />} />
          <Route path="/careers" element={<Career />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
