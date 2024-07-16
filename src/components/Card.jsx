import React from "react";

const Card = ({ pokemon, loading, infoPokemon }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 w-full ">
        {pokemon.map((poke) => {
          return (
            <div className="flex justify-center items-center" key={poke.id}>
              <div className="bg-[#FAE8E0]  w-72 lg:w-96 h-32 rounded-3xl flex items-center justify-between mb-10 p-5 shadow-lg shadow-[#EF7C8E]" onClick={()=>infoPokemon(poke)}>
                <h2 className="text-2xl">{poke.id}</h2>
                <img src={poke.sprites.front_default} width={110} alt="poke" />
                <h2 className="text-xl lg:text-2xl">{poke.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
