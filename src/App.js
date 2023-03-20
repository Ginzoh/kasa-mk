import { Routes, Route } from 'react-router-dom';
import About from './About';
import './css/Kasa.css';
import ErrorPage from './ErrorPage';
import Home from './Home';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='*' element={<ErrorPage />}></Route>
    </Routes>
  );
}

export default App;
