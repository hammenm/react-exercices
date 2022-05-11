function PlayerTurn({ turn, winner }) {
  if (winner) {
    return `Winner: ${winner}`;
  }
  return `Next turn: ${turn}`;
}

export default PlayerTurn;
