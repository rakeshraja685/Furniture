import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryProductsPage from "./pages/CategoryProductsPage";
import Login from "./components/Login/Login";
import CreateAccount from "./components/Login/CreateAccount";
import "./App.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>

        <Route path="/CreateAccount" element={<CreateAccount/>}/>

        <Route path="/home" element={<HomePage />} />


        <Route path="/category/:categoryId" element={<CategoryProductsPage />} />


        <Route path="/products" element={<CategoryProductsPage />} />


        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
