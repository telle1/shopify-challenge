import './nominations.css';

function Nominations({ nomination, setNominations, nominations }) {
    
  const handleRemove = (nom) => {
    const rmvNom = nominations.filter((movie) => movie !== nom);
    setNominations(rmvNom);
    localStorage.setItem('nominations', JSON.stringify(rmvNom));
  };

  return (
    <div className='nomination-inner-wrapper'>
      <div className='nomination-image'>
        <img src={nomination.Poster} alt='Movie Poster'></img>
      </div>
      <div className='nomination-descript'>
        <div>
          <p>{nomination.Title}</p>
          <div class="gold-line"></div>
          <p class="nomination-year">({nomination.Year})</p>
        </div>
      </div>
      <div className='nomination-btn'>
        <button onClick={() => handleRemove(nomination)}>Remove</button>
      </div>
    </div>
  );
}

export default Nominations;
