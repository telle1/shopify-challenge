import logo from './logo.svg';
import './App.css';
import test from './view_results.png';

function App() {
  return (
    <div className='App'>
      <h1>The Shoppies</h1>
      <div class='search-movie'>
        <label for="movie-title">Movie title</label><br/>
        <div class="test-1">
          <button type='submit'>
            <i class='fa fa-search'></i>
          </button>
          <input type='text' name='movie-title' placeholder='Enter movie'></input>
        </div>
      </div>

      <div class='results_and_nom'>
        <div class="test-wrapper">
        <div class='test'>
          <div class='test-image'>
            <img src={test} alt='Movie'></img>
          </div>
          <div class='test-descript'>Description</div>
          <div class='test-btn'>
            <button type='submit'>Nominate</button>
          </div>
        </div>

        <div class='test'>
          <div class='test-image'>
            {' '}
            <img src={test} alt='Movie'></img>
          </div>
          <div class='test-descript'>Description</div>
          <div class='test-btn'>
            <button type='submit'>Nominate</button>
          </div>
        </div>
        </div>
        

        <div class='nominations'>
          <h5>Nominations</h5>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* Results Table */
}
{
  /* <div class="results"> */
}
<table>
  <tr>
    <th class='movie-img'>Results for</th>
  </tr>

  <tr>
    <td>
      <div>
        <img src={test} alt='Movie'></img>
        <p>Name</p>
        <p>Date</p>
      </div>
    </td>
  </tr>
</table>;
{
  /* </div> */
}
