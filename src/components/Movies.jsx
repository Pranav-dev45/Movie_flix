import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { BASE_URL, API_KEY } from '../data'; 
import LanguageContext from '../contexts/LanguageContext';

const Movies = () => {
  const { movieCategory } = useParams();
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [rating, setRating] = useState(0);

  const { language } = useContext(LanguageContext);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError('');

      const res = await fetch(
        `${BASE_URL}${movieCategory}?api_key=${API_KEY}`
      );

      const data = await res.json();

      setMovies(data.results);
      setFilteredMovies(data.results);
    } catch (err) {
      setError("⚠️ Oops! We couldn't load the movies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (movieCategory) {
      fetchMovies();
    }
  }, [movieCategory]);

  const handleFilter = (value) => {
    setRating(value);

    if (value === 0) {
      setFilteredMovies(movies);
    } else {
      const updated = movies.filter(
        (movie) => movie.vote_average >= value
      );
      setFilteredMovies(updated);
    }
  };

  return (
    <div>
      {/* 🔹 Top Row */}
      <div className="top-bar">
        <h2 className="logo" onClick={() => navigate('/')}>
          {language === 'Hindi' ? 'मूवी फ्लिक्स' : 'MovieFlix'}
        </h2>

        <button className="back-btn" onClick={() => navigate('/')}>
          {language === 'Hindi' ? '← होम पर वापस जाएं' : '← Back To Home'}
        </button>
      </div>

      <div className="movies-page">

        {/* 🔹 Filter */}
        <div className="filter-container">
          <select
            value={rating}
            onChange={(e) => handleFilter(Number(e.target.value))}
          >
            <option value="0">
              {language === 'Hindi' ? 'सभी रेटिंग' : 'All Ratings'}
            </option>
            <option value="5">5+</option>
            <option value="6">6+</option>
            <option value="7">7+</option>
            <option value="8">8+</option>
          </select>
        </div>

        {/* 🔹 Loading */}
        {loading && (
          <div className="movies-container">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="shimmer-card"></div>
            ))}
          </div>
        )}

        {/* 🔹 Error */}
        {error && <p className="error-text">{error}</p>}

        {/* 🔹 Movies */}
        {!loading && filteredMovies?.length > 0 && (
          <div className="movies-container">
            {filteredMovies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "https://via.placeholder.com/300x450"
                    }
                    alt={movie.title}
                  />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* 🔹 No Results */}
        {!loading && !error && filteredMovies.length === 0 && (
          <p className="no-results">No Results Found</p>
        )}
      </div>
    </div>
  );
};

export default Movies;