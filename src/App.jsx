import { BrowserRouter as Router } from "react-router-dom";
import Header from "./common/Header";

const App = () => {
  return (
    <>
      <Router>
        <Header />
      </Router>
    </>
  );
};

export default App;
