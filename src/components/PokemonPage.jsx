import React, { Component } from "react";
import Axios from "axios";
import { Radar } from "react-chartjs-2";

export default class PokemonPage extends Component {
  state = {
    pokemon: null
  };

  componentDidMount() {
    const url = `https://pokeapi.co/api/v2/pokemon/${this.props.name}`;
    Axios.get(url).then(({ data }) => {
      this.setState({
        pokemon: data
      });
    });
  }

  render() {
    const { pokemon } = this.state;
    if (pokemon) {
      const createRef = (input, key, value) => {
        const refObj = {};
        input.forEach(item => {
          refObj[item[key].name] = item[value];
        });
        return refObj;
      };

      //grab stats from pokemon in state
      const pokemonStats = {
        labels: Object.keys(createRef(pokemon.stats, "stat", "base_stat")),
        datasets: [
          {
            label: `${pokemon.name} Stats`,
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: Object.values(createRef(pokemon.stats, "stat", "base_stat"))
          }
        ]
      };
      return (
        pokemon && (
          <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon} />
            <Radar
              width={100}
              height={100}
              options={{ maintainAspectRatio: false }}
              data={pokemonStats}
            />
          </div>
        )
      );
    }

    //Render just the pokemon image
    return (
      pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon} />
        </div>
      )
    );
  }
}
