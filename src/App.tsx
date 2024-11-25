import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Market from "./pages/Market";
import Owner from "./pages/Owner"
import { Container } from "@mui/material";

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/market" Component={Market}></Route>
          <Route path="/owner" Component={Owner}></Route>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
