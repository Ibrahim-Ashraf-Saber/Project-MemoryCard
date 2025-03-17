function ScoreBoard({ score, highScore }) {
  return (
    <div className="flex-col items-center justify-center mx-5 selection">
      <div className="flex flex-wrap items-center justify-center mt-5 gap-9">
        <div className="flex items-center justify-center">
          <div className="uppercase">score:</div>
          <div>{score}</div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="uppercase">high score:</div>
          <i className="text-2xl text-yellow-500 bx bxs-trophy"></i>
          <div>{highScore}</div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-9">{score} / 5</div>
    </div>
  );
}

export default ScoreBoard;
