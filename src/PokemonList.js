import React from 'react'

export default function PokemonList({ pokemon }) {
  return (
    <div className="section">
      {pokemon.map( p => (
        <div className='is-size-4 has-text-centered is-capitalized' key={p}>{p}</div>
      ))}
    </div>
  )
}
