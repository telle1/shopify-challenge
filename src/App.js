import './App.css';
import React, { useState } from 'react';



function App() {
  const API_KEY = process.env.REACT_APP_API_KEY 

  const [movieTitle, setMovieTitle] = useState('');
  const [movieInfo, setMovieInfo] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [button, setButton] = useState(false)

  console.log(movieInfo, 'movieinfo');
  console.log(nominations, 'nominations')

  const handleMovie = (e) => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${movieTitle}&type=movie`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // console.log(data.Search[0].Title)
        // data.Search.map(obj => setMovieInfo({...movieInfo, obj}))
        setMovieInfo(data.Search);
        // setMovieInfo({title: data.Search[0].Title, year: data.Search[0].Year, poster: data.Search[0].Poster})
      })
      .catch((err) => console.log(err));
  };

  const handleNominate = (movie) => {
    setNominations([...nominations, movie])
    // setButton(true) //disabling all buttons
    // console.log('movie', movie)
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
            <div className='test'>
              <div className='test-image'>
                <img src={movie.Poster} alt='Movie'></img>
              </div>
              <div className='test-descript'>
                <p>{movie.Title}</p>
                <p>{movie.Year}</p>
              </div>
              <div className='test-btn'>
                <button disabled={button} onClick={() => handleNominate(movie)}>Nominate</button>
              </div>
            </div>
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
