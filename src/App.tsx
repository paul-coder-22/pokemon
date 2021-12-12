import React from "react";
import "./App.css";
import {
  PokemonSchema,
  PokemonSpritesSchema,
  UnpatchedPokemonSchema,
} from "./Types/PokemonSchema";
import { pokemonData } from "./Data/pokeData";
import PokeDesk from "./Component/PokeDesk/PokeDesk";
export interface AppState {
  searchField: string;
  allPokemons: PokemonSchema[];
  searchedPokemons: PokemonSchema[];
  selectedPokemons: PokemonSchema | undefined;
}

class App extends React.Component<any, AppState> {
  state = {
    searchField: "",
    allPokemons: [],
    searchedPokemons: [],
    selectedPokemons: undefined,
  };

  patchPokemonData = (pokemons: UnpatchedPokemonSchema[]) => {
    const patchedPokemons = pokemons.map((pokemon) => {
      let parsedSprites: PokemonSpritesSchema = {
        normal: undefined,
        animated: undefined,
      };
      parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);

      const patechedPokemon: PokemonSchema = {
        ...pokemon,
        sprites: parsedSprites,
      };
      return patechedPokemon;
    });
    return patchedPokemons;
  };

  componentDidMount() {
    const patchedPokemon: PokemonSchema[] = this.patchPokemonData(pokemonData);
    this.setState({
      allPokemons: patchedPokemon,
      searchedPokemons: patchedPokemon,
    });
  }

  handleInputChange = (inputValue: string) => {
    const { allPokemons } = this.state;
    const searchedPokemons = allPokemons.filter((pokemon: PokemonSchema) => {
      return (
        pokemon.name &&
        pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
      );
    });
    this.setState({
      searchField: inputValue,
      searchedPokemons,
    });
  };
  handleOnClick = (pokemonName: string) => {
    const { allPokemons } = this.state;
    const selectedPokemons = allPokemons.find(
      (pokemon: PokemonSchema) => pokemon.name === pokemonName
    );
    this.setState({ selectedPokemons });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <PokeDesk
          onInputChange={this.handleInputChange}
          selectedPokemons={this.state.selectedPokemons}
          handleOnClick={this.handleOnClick}
          searchedPokemons={this.state.searchedPokemons}
        />
      </div>
    );
  }
}

export default App;
