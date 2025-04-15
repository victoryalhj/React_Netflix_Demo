import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';

//1.홈페이지 
//2.영화전체보여주는페이지(서치) /movies
//3.영화디테일페이지 / movies/:id
//추천영화 /movies/:id/recommendation
//리뷰 /movies/:id/reviews

function App() {
  return (
    <Routes>

      <Route path="/" element={<AppLayout/>}>
        <Route index element={<Homepage />} />
        <Route path="movies">
          <Route index element={<MoviePage/>} />
          <Route path=":id" element={<MovieDetailPage/>} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage/>}/>

    </Routes>


  );
}

export default App;
