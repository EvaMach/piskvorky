const buttons = document.querySelectorAll('.game-pad button');
let turn = 'circle';
let winner;
let turnImage = document.querySelector('.turn-icon');

const getSymbol = (field) => {
  return field.className.slice(14, 20);
};

const boardSize = 10;
const getField = (row, column) => {
  return buttons[row * boardSize + column];
};

const getPosition = (field) => {
  let i = 0;
  while (i < buttons.length && field !== buttons[i]) {
    i++;
  }
  return {
    row: Math.floor(i / boardSize),
    column: i % boardSize,
  };
};

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const symbol = getSymbol(field);
  const origin = getPosition(field);

  let i;

  let inRow = 1;
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (event) => {
    if (buttons[i].classList.length < 1) {
      event.target.classList.add(`board__field--${turn}`, 'board__field');
      event.target.disabled = true;
      if (isWinningMove(event.target)) {
        winner = turn === 'circle' ? 'kolečko' : 'křížek';
        confirm(`Vyhrál ${winner}. Spustit novou hru?`)
          ? location.reload()
          : '';
      }
      turn = turn === 'circle' ? 'cross' : 'circle';
      turnImage.src = `pravidla_images/${turn}.svg`;
    }
  });
}
