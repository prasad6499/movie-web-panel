import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import TopRatedMovies from './pages/TopRatedMovies';
import UpcomingMovies from './pages/UpcomingMovies';
import MovieDetails from './pages/MovieDetails';
import Navbar from './components/Navbar';
import SearchPage from './pages/SearchPages';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} exact/>
        <Route path="/top-rated" element={<TopRatedMovies/>} />
        <Route path="/upcoming" element={<UpcomingMovies/>} />
        <Route path="/movie/:movieId" element={<MovieDetails/>} />
        <Route path="/search" element={<SearchPage/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
