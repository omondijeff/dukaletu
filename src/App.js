import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./containers/productDetail";
import ProductListing from "./containers/productListing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
