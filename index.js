const turn = 'circle';

const buttons = document.querySelectorAll('.game-pad button');

for (let i = 0; i < buttons.length; i ++) {
    buttons[i].addEventListener('click', (event) => {
        event.target.classList.add(`board__field--${turn}`)  
    })
};