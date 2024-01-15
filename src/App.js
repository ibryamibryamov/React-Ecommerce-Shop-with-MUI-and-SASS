import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Men from "./pages/Men";
import Wishlist from "./pages/Wishlist";
import ViewItem from "./pages/ViewItem";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Women from "./pages/Women";
import Equipment from "./pages/Equipment";
function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/men" Component={Men} />
        <Route path="/wishlist" Component={Wishlist} />
        <Route path="/view-item" Component={ViewItem} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={Register} />
        <Route path="/women" Component={Women} />
        <Route path="/equipment" Component={Equipment} />
        <Route path="/view-item" Component={ViewItem} />
      </Routes>
    </Router>
  );
}

export default App;
