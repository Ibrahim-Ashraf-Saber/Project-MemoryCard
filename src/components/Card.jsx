
function Card({ pokemon, handleCardClick }) {
  return (
    <div onClick={handleCardClick} className="md:w-[180px] h-[250px] flex-col justify-center items-center bg-black/25 rounded-lg text-white hover:scale-105 transition duration-500 cursor-pointer">
      <div>
        <img src={pokemon.img} className="w-full h-[200px] object-contain" />
      </div>
      <div className="text-center md:text-[16px] text-[12px] capitalize">
        {pokemon.name}
      </div>
    </div>
  );
}

export default Card;
