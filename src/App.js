import { Routes, Route } from 'react-router-dom';
import About from './views/About/About';
import ErrorPage from './views/ErrorPage/ErrorPage';
import Home from './views/Home/Home';
import logements from 'data/logements.json';
import LocationRender from 'views/LocationRender/LocationRender';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      {logements.map((item) => (
        <Route
          key={item.id}
          path={`/id/${item.id}`}
          element={<LocationRender title={item.title} rating={item.rating} pictures={item.pictures} equipments={item.equipments} description={item.description} tags={item.tags} host={item.host} location={item.location} />}
        />
      ))}
      <Route path='*' element={<ErrorPage />}></Route>
    </Routes>
  );
}

export default App;
