import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([]);


  useEffect(() => {
    
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=200&offset=0.')
      .then((res) => {
        console.log(res.data.results);
        setPokemon(res.data.results)
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className="App">
      <h1 className='text-center bg-success'>lista de los nombres Pokemones</h1>

      {
        pokemon.map((poke) => (
          <div className=''>
            <ul >
            {<li >{poke.name}</li>}
            </ul>
          </div>

        ))
      }


    </div>
  )
}

export default App
