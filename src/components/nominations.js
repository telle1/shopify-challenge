function Nominations({nomination, setNominations, nominations}){

    const handleRemove = (nom) => {    
        const rmvNom = nominations.filter(movie => movie !== nom)
        setNominations(rmvNom)
        localStorage.setItem('nominations', JSON.stringify(rmvNom));
    }

    return (
        <div className="nomination">
            <img src={nomination.Poster} alt="Movie Poster"></img>
            <div className="nomination-info">
                <div>{nomination.Title} ({nomination.Year})</div>
                <div><button onClick={() => handleRemove(nomination)}>Remove</button></div>
            </div>
        </div>
    )
}

export default Nominations