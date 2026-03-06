import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Details from './pages/Details';
import Methodology from './pages/Methodology';
import DataSources from './pages/DataSources';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/data-sources" element={<DataSources />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
