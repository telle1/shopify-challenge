function Search({movieTitle, setMovieTitle, setMovieInfo}){

    const API_KEY = process.env.REACT_APP_API_KEY 

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

    )
}

export default Search