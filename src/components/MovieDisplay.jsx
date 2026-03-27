import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { options } from '../data';
import '../MovieDisplay.css';
import { useContext } from 'react';

import useOnlineStatus from '../hooks/useOnlineStatus';
import LanguageContext from '../contexts/LanguageContext';

const MoviesDisplay = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const onlineStatus = useOnlineStatus();

  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [play, setPlay] = useState(false);
  const { language } = useContext(LanguageContext);
  const fetchMovieDetails = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        options
      );
      const data = await res.json();
      setMovie(data);
    } catch {
      setError('Failed to load movie details');
    } finally {
      setLoading(false);
    }
  };

  const fetchTrailer = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        options
      );
      const data = await res.json();

      const trailer = data.results.find(
        (vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
      );

      if (trailer) setTrailerKey(trailer.key);
    } catch {
      console.log('Trailer not found');
    }
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchTrailer();
  }, [movieId]);

  if (loading)
    return (
      <div className="md-shimmer">
        <h1 className="md-shimmer-text">MovieFlix</h1>
      </div>
    );
  if (error) return <p className="md-error">{error}</p>;
  if (onlineStatus === false) return <h1>Uhh! You are offline</h1>;
  return (
    <div className="md-page">
      <div className="md-head">
        <button className="md-back-btn" onClick={() => navigate(-1)}>
          {language === 'Hindi' ? '← वापस जाएं' : '← Back'}
        </button>
      </div>

      <div
        className="md-hero"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        }}
      >
        <div className="md-hero-content">
          <h1 className="md-title">{movie?.title}</h1>
          <p className="md-overview">{movie?.overview}</p>

          {trailerKey && (
            <button className="md-play-btn" onClick={() => setPlay(true)}>
              ▶ {language === 'Hindi' ? 'चलाएँ"' : 'Play'}
            </button>
          )}
        </div>
      </div>

      {play && (
        <div className="md-trailer-overlay" onClick={() => setPlay(false)}>
          <iframe
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
            allow="autoplay; fullscreen"
            title="Trailer"
          />
        </div>
      )}
    </div>
  );
};

export default MoviesDisplay;
