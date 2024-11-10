import './App.css';
import Home from './pages/Home';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Item } from './components/Item';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
          <Route path="/item">
            <Item />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
        </BrowserRouter> */}
      {/* <Menu /> */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
