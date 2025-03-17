function ScoreBoard({ score, highScore }) {
  return (
    <div className="flex-col justify-center items-center selection mx-5">
      <div className="flex items-center justify-center gap-9 mt-5 flex-wrap">
        <div className="flex justify-center items-center">
          <div className="uppercase">score:</div>
          <div>{score}</div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <div className="uppercase">high score:</div>
          <i class="bx bxs-trophy text-yellow-500 text-2xl"></i>
          <div>{highScore}</div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-9">{score} / 5</div>
    </div>
  );
}

export default ScoreBoard;
