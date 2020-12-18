function Nominations({nomination, setNominations, nominations}){

    const handleRemove = (nom) => {    
        const rmvNom = nominations.filter(movie => movie != nom)
        setNominations(rmvNom)
    }

    return (
        <div class="nomination">
            <img src={nomination.Poster} alt="Movie Poster"></img>
            <div class="nomination-info">
                <div>{nomination.Title} ({nomination.Year})</div>
                <div><button onClick={() => handleRemove(nomination)}>Remove</button></div>
            </div>
        </div>
    )
}

export default Nominations