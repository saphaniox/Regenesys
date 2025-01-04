import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Features from "./pages/features/Features";
import Career from "./pages/career/Career";
import { Provider } from "react-redux";
import { myStore } from "./services/store";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Provider store={myStore}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/my-feature" element={<Features />} />
            <Route path="/careers" element={<Career />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
