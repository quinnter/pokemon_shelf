import React from 'react'
import PokemonCard from './PokemonCard';

const PokemonGrid = (props) => {
    return (
        <div>
            {props.pokemons.map((pokemon) => {
                return (
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                )
            })}
        </div>
    )
}

export default PokemonGrid
