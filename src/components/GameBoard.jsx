import Header from "./Header";
import ScoreBoard from "./ScoreBoard";
import Card from "./Card";
import Footer from "./Footer";
import Result from "./Result";
import { floor, random } from "mathjs";
import { useState } from "react";
import { useEffect } from "react";

function GameBoard() {
  const fiveRandomId = (count = 5, min = 1, max = 1000) => {
    const numbers = new Set();
    while (numbers.size < count) {
      const rnd = floor(random() * (max - min + 1)) + min;
      numbers.add(rnd);
    }
    setRandomId(Array.from(numbers));
  };

  const shuffleArray = (arr) => {
    const max = arr.length - 1;
    for (let i = 0; i <= max; i++) {
      const rnd = floor(random() * (max - i + 1)) + i;
      [arr[i], arr[rnd]] = [arr[rnd], arr[i]];
    }
    return arr;
  };

  const [pokemon, setPokemon] = useState([]);
  const [randomId, setRandomId] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isWin, setIsWin] = useState(true);
  const [score, setScore] = useState(0);
  const [highScore, setHigihScore] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const [clickCounts, setClickCounts] = useState({});

  const handleResetClick = () => {
    setPokemon([]);
    setRandomId([]);
    setIsLoading(true);
    setIsEnd(false);
    setIsWin(true);
    setScore(0);
    setShowBack(false);
    setClickCounts({});

    const newRandomIds = fiveRandomId();
    setRandomId((prev) => [...prev, newRandomIds]);
  };

  const handleCardClick = (id) => {
    const newClickCounts = { ...clickCounts };
    newClickCounts[id] = (newClickCounts[id] || 0) + 1;
    setClickCounts(newClickCounts);

    if (newClickCounts[id] === 2) {
      setIsEnd(true);
      setIsWin(false);
      if (score + 1 > highScore) {
        setHigihScore(score);
      }
      return;
    }

    setScore((prev) => prev + 1);

    if (score + 1 === 5) {
      setIsEnd(true);
      setIsWin(true);
      if (score + 1 > highScore) {
        setHigihScore(score + 1);
      }
      return;
    }

    const newCards = shuffleArray([...pokemon]);
    setPokemon(newCards);
    setShowBack(true);
    setTimeout(() => setShowBack(false), 1000);
  };

  useEffect(() => {
    setRandomId((prev) => [...prev, fiveRandomId()]);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    randomId.map((id) => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.json())
        .then((res) => {
          setPokemon((prev) => [
            ...prev,
            { id: res.id, name: res.name, img: res.sprites.front_default },
          ]);
          setIsLoading(false);
        })
        .catch((error) => console.error(error));
    });
  }, [randomId]);

  console.log(pokemon);

  return (
    <div className="bg-bgImg w-screen min-h-screen bg-center bg-cover pt-5">
      {isLoading ? (
        <div className="md:text-3xl text-l absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Loading ...
        </div>
      ) : (
        <>
          <Header />
          <ScoreBoard score={score} highScore={highScore} />
          {isEnd ? (
            <Result isWin={isWin} handleResetClick={handleResetClick} />
          ) : (
            <div className="flex justify-center">
              <div className="grid md:grid-cols-5 grid-cols-2 gap-3 m-9 md:w-[80%]">
                {showBack ? (
                  <>
                    <div className="md:w-[180px] h-[250px] flex justify-center items-center bg-black rounded-lg text-white hover:scale-105 transition duration-500 cursor-pointer">
                      Good Luck
                    </div>
                    <div className="md:w-[180px] h-[250px] flex justify-center items-center bg-black rounded-lg text-white hover:scale-105 transition duration-500 cursor-pointer">
                      Good Luck
                    </div>
                    <div className="md:w-[180px] h-[250px] flex justify-center items-center bg-black rounded-lg text-white hover:scale-105 transition duration-500 cursor-pointer">
                      Good Luck
                    </div>
                    <div className="md:w-[180px] h-[250px] flex justify-center items-center bg-black rounded-lg text-white hover:scale-105 transition duration-500 cursor-pointer">
                      Good Luck
                    </div>
                    <div className="md:w-[180px] h-[250px] flex justify-center items-center bg-black rounded-lg text-white hover:scale-105 transition duration-500 cursor-pointer">
                      Good Luck
                    </div>
                  </>
                ) : (
                  <>
                    {pokemon.map((pokemon) => (
                      <Card
                        key={pokemon.id}
                        pokemon={pokemon}
                        handleCardClick={() => handleCardClick(pokemon.id)}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>
          )}
          <Footer />
        </>
      )}
    </div>
  );
}

export default GameBoard;
