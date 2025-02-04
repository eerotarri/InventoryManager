import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Details from "./pages/Details";

// Create a client

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/item/:id" element={<Details />} />
          <Route path="*" element={<p>No page</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
