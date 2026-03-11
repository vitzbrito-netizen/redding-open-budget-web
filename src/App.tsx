import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Methodology from "./pages/Methodology";
import DataSources from "./pages/DataSources";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/data-sources" element={<DataSources />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
      <Analytics />
    </Router>
  );
}

export default App;
