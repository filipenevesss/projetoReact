import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/empresa' Component={Empresa}/>
        <Route path='/contato' Component={Contato}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
