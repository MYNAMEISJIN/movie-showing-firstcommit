
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import NavigationBar from './component/NavigationBar';
import { useState } from 'react';


function App() {
  const [page, setPage] = useState(1)
  return (
    <div>
      <NavigationBar setPage={setPage}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies page={page} setPage={setPage}/>}/>
        <Route path='/movies/:id' element={<MovieDetails/>}/>

      </Routes>
    </div>
  );
}

export default App;
