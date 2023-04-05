import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import CardDetail from './component/CardDetail';
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <img style={{ width: "22rem", margin: "5rem" }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png' alt='pokeball' />



      <Router>
        <Link className='home' to="/">
          <img src='https://cdn-icons-png.flaticon.com/512/361/361998.png' alt='pokelink' />
        </Link>

        <Routes>
          <Route path="/pokemon/:name" element={<CardDetail />} />
          <Route path="/" element={<Home />} />

        </Routes>

      </Router>

    </div>
  );
}

export default App;
