import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./common/Header";
import Home from "./pages/Home";
import SinglePage from "./pages/SinglePage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./common/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single-product" element={<SinglePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
