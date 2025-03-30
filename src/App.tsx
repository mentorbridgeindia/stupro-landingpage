import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import BlogHome from "./pages/BlogHome";

const App = () => {
  return (
    <ParallaxProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog" element={<BlogHome />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ParallaxProvider>
  );
};

export default App;
