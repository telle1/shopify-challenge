function Nominations({nomination, setNominations, nominations}){

    const handleRemove = (nom) => {    
        const rmvNom = nominations.filter(movie => movie !== nom)
        setNominations(rmvNom)
        localStorage.setItem('nominations', JSON.stringify(rmvNom));
    }

    return (
        <div className="nomination-inner-wrapper">
            <div className="nomination-image">
                <img src={nomination.Poster} alt="Movie Poster"></img>
            </div>
            <div className="nomination-descript">
                <div>
                    {nomination.Title} 
                    <br/>
                    ({nomination.Year})
                </div>
            </div>
            <div className="nomination-btn">
                <button onClick={() => handleRemove(nomination)}>Remove</button>
            </div>
        </div>
    )
}

export default Nominations

{/* <div className='result-inner-wrapper'>
<div className='result-image'>
  <img src={movie.Poster} alt='Movie'></img>
</div>
<div className='result-descript'>
  <p>{movie.Title}</p>
  <p>{movie.Year}</p>
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
</div> */}