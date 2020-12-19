import React, { useState, useEffect } from 'react';
import './search_results.css';

function SearchResults({ movie, nominations, setNominations }) {

  const [buttonText, setButtonText] = useState('Nominate');
  const [cursor, setCursor] = useState('pointer');
  const [buttonColor, setButtonColor] = useState('#59bfff');
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    disableButton();
  }, [nominations]);

  const handleNominate = (movie) => {
    setNominations([...nominations, movie]);
    localStorage.setItem(
      'nominations',
      JSON.stringify([...nominations, movie])
    );
  };

  const disableButton = () => {
    /*This prevents re-nominating a movie already if taken from local storage*/
    const checkID = () => {
      for (let nom of nominations) {
        if (movie.imdbID === nom.imdbID) {
          return true;
        }
      }
    };

    if (nominations.includes(movie) || checkID()) {
      setButtonClicked(true);
      setButtonColor('gray');
      setCursor('auto');
      setButtonText('Nominated');
    } else {
      setButtonClicked(false);
      setButtonColor('#59bfff');
      setCursor('pointer');
      setButtonText('Nominate');
    }
  };

  return (
    <React.Fragment>
      <div className='result-inner-wrapper'>
        <div className='result-image'>
          <img src={movie.Poster} alt='Movie'></img>
        </div>
        <div className='result-descript'>
          <p>{movie.Title}</p>
          <p>({movie.Year})</p>
        </div>
        <div className='result-btn'>
          <button
            disabled={buttonClicked}
            onClick={() => handleNominate(movie)}
            style={{ backgroundColor: buttonColor, cursor: cursor }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SearchResults;
