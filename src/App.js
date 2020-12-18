import './App.css';
import React, { useEffect, useState } from 'react';
import SearchResults from './components/search_results'
import Nominations from './components/nominations'
import Search from './components/search'

function App() {

  const [movieTitle, setMovieTitle] = useState('');
  const [movieInfo, setMovieInfo] = useState([]);
  const [nominations, setNominations] = useState([]);

  console.log(movieInfo, 'movieinfo');
  console.log(nominations, 'nominations')

  useEffect(() => {
    const noms = localStorage.getItem('nominations')    
    if (noms){
      const saveNoms = JSON.parse(noms);
      setNominations(saveNoms) 
    }
    
  }, [])

  return (
    <div className='App'>
      <h1>The Shoppies</h1>

      <div className="search">
        <Search movieTitle={movieTitle} setMovieTitle={setMovieTitle} setMovieInfo={setMovieInfo}/>
      </div>

      <div className='results_and_nom'>
        <div className='test-wrapper'>
          {movieInfo ? movieInfo.map(movie => (
            <React.Fragment>
              <SearchResults key={movie.imdbID} movie={movie} setNominations={setNominations} nominations={nominations}/>
            </React.Fragment>
          )) : <p>No Results</p> }
        </div>

        <div className='nominations'>
          {nominations.length === 5 ? <p class="nom-message">You reached 5 nominations!</p> : null}
          <p>Nominations</p>  
          <div>
            {nominations.map(nomination => (
            <React.Fragment>
              <Nominations key={nomination.imdbID} nomination={nomination} nominations={nominations} setNominations={setNominations}/>
            </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
