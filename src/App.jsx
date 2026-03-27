import { useState } from 'react';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import { movies } from './data';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import LanguageContext from './contexts/LanguageContext';

const App = () => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <div className="page">
        <Header />
        <div className="hero-content">
          <h1>
            {language === 'Hindi'
              ? 'अनलिमिटेड फिल्में और शो'
              : 'Unlimited Movies, TV Shows & More'}
          </h1>
          <p>
            {language === 'Hindi'
              ? 'कहीं भी देखें। कभी भी रद्द करें।'
              : 'Watch anywhere. Cancel anytime.'}
          </p>
          <Link to={`/movies`} className="primarybtn">
            {language === 'Hindi' ? 'अभी देखें' : 'Explore Now'}
          </Link>
        </div>
      </div>
      <div className="movies-section">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title[language]}
            image={movie.image}
            category={movie.category}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default App;
