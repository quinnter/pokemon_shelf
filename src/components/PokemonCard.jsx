import React, { Component } from 'react'
import Axios from 'axios';

class PokemonCard extends Component {
    state = {
        pokemonSprite: ''
    }

    render() {
        const { pokemon } = this.props
        return (
            <div>
                <img src={this.state.pokemonSprite} alt={pokemon.name}></img>
                <h2>{pokemon.name}</h2>
            </div>
        )
    }

    componentDidMount() {
        const url = `https://pokeapi.co/api/v2/pokemon/${this.props.pokemon.name}`
        Axios.get(url)
            .then(({ data: { sprites } }) => {
                this.setState({ pokemonSprite: sprites.front_default })
            })
    }

}

export default PokemonCard

// getImage = async (pokemonName) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
//     const response = await Axios.get(url)
//     const sprite = response.data.sprite.front_default
//     return sprite
// }