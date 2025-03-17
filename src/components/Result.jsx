function Result({ isWin, handleResetClick }) {
  return (
    <div className="flex flex-col justify-center items-center gap-5 m-9">
      <div className="text-3xl">{isWin ? "You Wins!" : "Game Over!"}</div>
      <button
        className="bg-green-900 text-white p-3 rounded-xl"
        onClick={handleResetClick}
      >
        Play Again
      </button>
    </div>
  );
}

export default Result;
