import './App.css';
import Home from './pages/Home';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Order } from './pages/Order';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          {/* <Route path="/order" element={<Order />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
