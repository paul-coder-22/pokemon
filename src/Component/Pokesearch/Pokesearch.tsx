import { PokemonSchema } from "../../Types/PokemonSchema";
import "./Pokesearch.css";

interface selectedPokemon {
  selectedPokemons: PokemonSchema | undefined;
}

const Pokesearch = ({ selectedPokemons }: selectedPokemon) => {
  const { name, height, weight, base_experience, sprites } =
    selectedPokemons || {};
  return (
    <div className="pokemon-card">
      {selectedPokemons ? (
        <div className="card">
          <div className="card-header" style={{ textAlign: "center" }}>
            <img
              src={sprites?.animated || sprites?.normal}
              alt=""
              style={{ height: "120px", width: "120px" }}
            />
          </div>
          <div className="card-body">
            <span className="card-info">
              <div>
                <span className="tag tag-teal">Name</span>
                <span>{name}</span>
              </div>
              <div>
                <span className="tag tag-pink">Exp</span>
                <span>{base_experience}</span>
              </div>
              <div>
                <span className="tag tag-purple">Height</span>
                <span>{height}</span>
              </div>
              <div>
                <span className="tag tag-violet">Weight</span>
                <span>{weight}</span>
              </div>
            </span>
          </div>
        </div>
      ) : (
        <div className="card-body">
          <h1>Find Your Pokemon</h1>
        </div>
      )}
    </div>
  );
};

export default Pokesearch;
