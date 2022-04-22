const buttons = document.querySelectorAll('.game-pad button');
let turn = 'circle';
let turnImage = document.querySelector('.turn-icon');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (event) => {
    if (buttons[i].classList.length < 1) {
      event.target.classList.add(`board__field--${turn}`, 'board__field');
      if (turn === 'circle') {
        turn = 'cross';
      } else {
        turn = 'circle';
      }
      turnImage.src = `pravidla_images/${turn}.svg`;
      event.target.disabled = true;
    }
  });
}
