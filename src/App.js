import { Routes, Route } from 'react-router-dom';
import About from './views/About/About';
import ErrorPage from './views/ErrorPage/ErrorPage';
import Home from './views/Home/Home';
import LocationRender from 'views/LocationRender/LocationRender';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path="/logement/:id" element={<LocationRender />} />
      <Route path='*' element={<ErrorPage />}></Route>
    </Routes>
  );
}

export default App;
