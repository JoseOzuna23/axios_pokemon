import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([]);


  const mostrarPokemon =() => {
    
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0.')
      .then((res) => {
        console.log(res.data.results);
        setPokemon(res.data.results)
      })
      .catch((error) => {
        console.log(error);
      })
  };

  return (
    <div className="App">
      <h1 className='text-center bg-success'>lista de los nombres Pokemones</h1>
      <button className='btn btn-danger' onClick={mostrarPokemon}> Cargar Lista</button>

      {
        pokemon.map((poke, indice) => (
          
            <li key={indice} >{poke.name}</li>               

        ))
      }


    </div>
  )
}

export default App
