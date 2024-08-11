import { ProductDetail } from "../pages";
import "./App.css";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/productdetails" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App