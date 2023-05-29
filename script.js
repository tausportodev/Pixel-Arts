// Requisito 1
const body = document.getElementsByTagName('body');
const colorPalette = document.createElement('header');
body[0].appendChild(colorPalette);
colorPalette.id = 'color-palette';
for (let i = 0; i < 4; i += 1) {
  const colors = document.createElement('div');
  colorPalette.appendChild(colors);
  colors.classList.add('color');
}

// Requisito 2 e 3
const colors = () => {
  const divColor = document.querySelectorAll('.color');
  const colorChoice = ['#000000', '#40E0D0', '#FA8072', '#6A5ACD'];
  for (let i = 0; i < divColor.length; i += 1) {
    divColor[i].style.backgroundColor = colorChoice[i];
  }
};

colors();

// Requisito 4

const button = document.createElement('button');
body[0].appendChild(button);
button.id = 'button-random-color';
button.innerText = 'Cores aleatórias';

const randomColor = () => {
  button.addEventListener('click', () => {
    const divColor = document.querySelectorAll('.color');
    for (let colors of divColor) {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i += 1) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      const black = document.querySelector('.selected');
      colors.style.backgroundColor = color;
      black.style.backgroundColor = '#000000';
    }
  });
};

randomColor();

// Requisito 5

const localStorageColor = () => {
  const buttonStorage = document.querySelector('#button-random-color');
  buttonStorage.addEventListener('click', () => {
    const color = document.querySelectorAll('.color');
    const save = [];

    for (let i = 0; i < color.length; i += 1) {
      save.push(color[i].style.backgroundColor);
      color[i].style.backgroundColor = localStorage.setItem('colorPalette', JSON.stringify(save));
    }
  });
};

localStorageColor();

const loadInfo = () => {
  const divColor = document.querySelectorAll('.color');
  const saveInfo = JSON.parse(localStorage.getItem('colorPalette')) || [];
  for (let i = 0; i < divColor.length; i += 1) {
    divColor[i].style.backgroundColor = saveInfo[i];
  }
};
loadInfo();

// Requisito 6 e Requisito 7

const section = document.createElement('section');
body[0].appendChild(section);
section.id = 'pixel-board';

for (let row = 0; row < 5; row += 1) {
  const rowDiv = document.createElement('div');
  section.appendChild(rowDiv);

  for (let i = 0; i < 5; i += 1) {
    const columnDiv = document.createElement('div');
    rowDiv.appendChild(columnDiv);
    columnDiv.classList.add('pixel');
    columnDiv.style.backgroundColor = '#FFFFFF';
  }
}

// Requisito 8 e 9
const selectedColor = () => {
  const colorsSelect = document.querySelectorAll('.color');
  const firstSelected = colorsSelect[0];
  firstSelected.classList.add('selected');
  for (let color of colorsSelect) {
    color.addEventListener('click', (event) => {
      const selected = document.querySelector('.selected');
      selected.classList.remove('selected');
      event.target.classList.add('selected');     
    });
  }
};

selectedColor();

// Requisito 10
const alteredColor = () => {
  const pixel = document.querySelectorAll('.pixel');

  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', (event) => {
      const selectedPixel = document.querySelector('section .selected');
      const selectedPallete = document.querySelector('header .selected');

      event.target.style.backgroundColor = selectedPallete.style.backgroundColor;
      // event.target.classList.add('selected');
      for (let index = 0; index < selectedPallete.length; index += 1) {
        selectedPixel[index].classList.remove('selected');
      }
    });
  }
};

alteredColor();

// Requisito 11

const whiteDefault = () => {
  const buttonDefault = document.createElement('button');
  buttonDefault.id = 'clear-board';
  buttonDefault.innerText = 'Limpar';
  section.before(buttonDefault);

  const colorPixel = document.querySelectorAll('.pixel');
  buttonDefault.addEventListener('click', () => {
    for (let index = 0; index < colorPixel.length; index += 1) {
      colorPixel[index].style.backgroundColor = '#FFFFFF';
    }
  });
};

whiteDefault();

// Requisito 12

const localStorageBoard = () => {
  const divPixel = document.querySelectorAll('.pixel');

  for (let i = 0; i < divPixel.length; i += 1) {
    divPixel[i].addEventListener('click', () => {
      const board = [];

      for (let i = 0; i < divPixel.length; i += 1) {
        board.push(divPixel[i].style.backgroundColor);
        divPixel[i].style.backgroundColor = localStorage.setItem('pixelBoard', JSON.stringify(board));
      }
    });
  }
};

localStorageBoard();

// const loadInfoBoard = () => {
//   const divPixel = document.querySelectorAll('.pixel');
//   const saveInfoBoard = JSON.parse(localStorage.getItem('pixelBoard'));
//   for (let i = 0; i < divPixel.length; i += 1) {
//     divPixel[i].style.backgroundColor = saveInfoBoard[i];
//     console.log(divPixel[i]);
//   }
// };

// loadInfoBoard();

// Requisito 13
const boardSize = () => {
  const inputSize = document.createElement('input');
  const buttonSize = document.createElement('button');

  inputSize.id = 'board-size';
  buttonSize.id = 'generate-board';
  buttonSize.innerText = 'VQV';
  section.before(inputSize);
  section.before(buttonSize);

  buttonSize.addEventListener('click', () => {
    const pixelBoard = document.querySelector('#pixel-board');

    for (let row = 0; row < inputSize.value; row += 1) {
      const rowDivChoice = document.createElement('div');
      pixelBoard.appendChild(rowDivChoice);
      rowDivChoice.className = 'pixel';

      for (let row = 0; row < inputSize.value; row += 1) {
        const columnDivChoice = document.createElement('div');
        pixelBoard.appendChild(columnDivChoice);
        columnDivChoice.className = 'pixel';
      }
    }
  });
};

boardSize();