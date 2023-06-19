import Layout from './layout/Layout';
import Menu from './pages/Menu';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Nopage from './pages/Nopage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<Nopage />} />
            <Route path="/" element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="menu" element={<Menu />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
