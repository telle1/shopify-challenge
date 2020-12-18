import './App.css';
import React, { useState } from 'react';
import SearchResults from './components/search_results'



function App() {
  const API_KEY = process.env.REACT_APP_API_KEY 

  const [movieTitle, setMovieTitle] = useState('');
  const [movieInfo, setMovieInfo] = useState([]);
  const [nominations, setNominations] = useState([]);

  console.log(movieInfo, 'movieinfo');
  console.log(nominations, 'nominations')

  const handleMovie = (e) => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${movieTitle}&type=movie`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovieInfo(data.Search);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='App'>
      <h1>The Shoppies</h1>
      <div className='search-movie'>
        <label htmlFor='movie-title'>Movie title</label>
        <br />
        <form onSubmit={handleMovie}>
          <div className='test-1'>
            <button type='submit'>
              <i className='fa fa-search'></i>
            </button>
            <input
              type='text'
              name='movie-title'
              placeholder='Enter movie'
              value={movieTitle}
              onChange={(e) => setMovieTitle(e.target.value)}
              required
            ></input>
          </div>
        </form>
      </div>

      <div className='results_and_nom'>
        <div className='test-wrapper'>
          {movieInfo ? movieInfo.map(movie => (
            <React.Fragment>
              <SearchResults movie={movie} setNominations={setNominations} nominations={nominations}/>
            </React.Fragment>
          )) : <p>No Results</p> }
        </div>

        <div className='nominations'>
          {nominations.length === 5 ? <p class="nom-message">You reached 5 nominations!</p> : null}
          <p>Nominations</p>  
          <p>{nominations.map(nomination => (
            <div class="nomination">
              <img src={nomination.Poster}></img>
              <p class="nomination-info">{nomination.Title} ({nomination.Year})</p>
            </div>
          ))}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
