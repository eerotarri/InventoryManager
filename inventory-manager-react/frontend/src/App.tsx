import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/navbar";
import Layout from "./pages/Layout";

// Create a client

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<p>No page</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
