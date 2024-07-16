import { useState, useEffect } from "react";

const PokeCard = ({ pokemon }) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    if (pokemon) {
      const pokemonTypes = pokemon.types.map((type) => type.type.name);
      setTypes(pokemonTypes);
    }
  }, [pokemon]);

  if (!pokemon) {
    return (
      <div className="flex lg:fixed right-0 top-0 items-center justify-center h-1/5 w-2/5">
        Bir Pokemon seçin
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:fixed right-0 top-0 items-center justify-center rounded-lg h-full w-3/6 lg:w-2/5">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="h-40 object-contain mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{pokemon.name}</h2>
      <ul className="flex gap-2 pb-2">
        {types.map((type, index) => (
          <li key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {type}
            {index !== types.length - 1 }
          </li>
        ))}
      </ul>
      <p className="text-lg text-gray-700">Ağırlık: {pokemon.weight} kg</p>
      <div className="w-4/5 mx-auto">
        {pokemon.stats.map((poke) => (
          <div key={poke.stat.name} className="flex justify-between py-1">
            <span className="text-gray-700 font-medium">{poke.stat.name}:</span>
            <span className="text-gray-900 font-bold">{poke.base_stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokeCard;
