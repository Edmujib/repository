
import './App.css';
import React, { useState } from 'react';

function App() {

  const [games, setGames] = useState([])



  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8610003c92mshdcaa54a700f8228p119dabjsn755547102130',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?limit=5`, options)
    .then(response => response.json())
    .then(response => setGames(response))
    // .then(response => console.log(response))
    .catch(err => console.error(err));

  // console.log(games)


  return (
    <main className="main">
      <header>
        <div className='logo'>
          GAMEZONE
        </div>

        <nav>
          <a className='cars' href='about'>About</a>
          <a className='cars' href='cars'>war</a>
          <a className='cars' href='model'>kids</a>
          <a className='cars' href='Login'>Login</a>

        </nav>

      </header>

      <div className='welcome'>
        <h1>ADVENTURE AWAITS YOU</h1>

        <div className='nav'>
          <p className='adventure'>You Are Welcome To GameZone</p>

          <p className='bankook'>explore now</p>
        </div>


      </div>

      <span className='section'>
        <input type="text" className='input' placeholder='        search name of games here.....' />
        <button>search</button>
      </span>

      <div className="card">
        {games.map(game => {
          return (
            <div className='car' key={game.id}>

              <img src={game.thumbnail} alt="" />
              <div className="item">NAME:{game.title}</div>
              <div className="item">DEVELOPER:{game.developer}</div>
              <div className="item">DESCRIPTION:{game.short_description}</div>
              <div className="item">{game.game_url}</div>
              <div className="item">{game.release_date}</div>

            </div>
          )
        })}
      </div>




    </main>

  )


}

export default App;
