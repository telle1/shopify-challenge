import './App.css';
import React, { useEffect, useState } from 'react';
import SearchResults from './components/search_results/search_results';
import Nominations from './components/nominations/nominations';
import Search from './components/search/search';

function App() {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieInfo, setMovieInfo] = useState([]);
  const [nominations, setNominations] = useState([]);

  useEffect(() => {
    const noms = localStorage.getItem('nominations');
    if (noms) {
      const saveNoms = JSON.parse(noms);
      setNominations(saveNoms);
    }
  }, []);

  return (
    <div className='App'>
      <h1>The Shoppies</h1>
      <div className='search'>
        <Search
          movieTitle={movieTitle}
          setMovieTitle={setMovieTitle}
          setMovieInfo={setMovieInfo}
        />
      </div>

      <div className='results_and_nom'>
        <div className='results-outer-wrapper'>
          <h2>Results</h2>
          {movieInfo ? (
            movieInfo.map((movie) => (
              <SearchResults
                key={movie.imdbID}
                movie={movie}
                setNominations={setNominations}
                nominations={nominations}
              />
            ))
          ) : (
            <p>No Results</p>
          )}
        </div>
        <div className='nominations-outer-wrapper'>
          <h2>Nominations</h2>
          {nominations.length === 5 ? (
            <p class='nom-message'>You reached 5 nominations!</p>
          ) : null}
          <div>
            {nominations.map((nomination) => (
              <Nominations
                key={nomination.imdbID}
                nomination={nomination}
                nominations={nominations}
                setNominations={setNominations}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
