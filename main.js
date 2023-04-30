const keys = [
  '`',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace',
  'Tab',
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  '[',
  ']',
  '\\',
  'Delete',
  'CapsLock',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  ';',
  "'",
  'Enter',
  'Shift',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  ',',
  '.',
  '/',
  'ArrowUp',
  'Shift',
  'Control',
  'win',
  'Alt',
  'Space',
  'Alt',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
  'Control'
];

const body = document.body;
const container = document.createElement('main');
const textArea = document.createElement('textarea');
const keyboard = document.createElement('section');

container.className = 'container';
textArea.className = 'text-area';
textArea.setAttribute('autofocus', true);
textArea.setAttribute('rows', '10');
keyboard.className = 'keyboard';

container.append(textArea, keyboard);
body.append(container);

function renderKeyText(key) {
  textArea.focus();

  if (key.id === 'enter') {
    textArea.value += '\n';
    return;
  }
  if (key.id === 'arrowup') {
    textArea.value += '▲';
    return;
  }
  if (key.id === 'arrowleft') {
    textArea.value += '◄';
    return;
  }
  if (key.id === 'arrowdown') {
    textArea.value += '▼';
    return;
  }
  if (key.id === 'arrowright') {
    textArea.value += '►';
    return;
  }
  if (key.id === 'space') {
    textArea.value += ' ';
    return;
  }

  textArea.value += key.innerText;
}
function renderKey() {
  const data = keys;
  console.log(data);
  data.forEach((keyText, index) => {
    const key = document.createElement('div');
    key.className = 'key';
    key.id = keys[index].toLocaleLowerCase();

    if (keyText === 'ArrowUp') {
      key.innerText = '▲';
    } else if (keyText === 'ArrowLeft') {
      key.innerText = '◄';
    } else if (keyText === 'ArrowDown') {
      key.innerText = '▼';
    } else if (keyText === 'ArrowRight') {
      key.innerText = '►';
    } else if (keyText === 'CapsLock') {
      key.classList.add('key-text');
      key.innerText = 'Caps Lock';
    } else if (keyText === 'Delete') {
      console.log(keyText);
      key.innerText = 'Del';
    } else {
      key.innerText = keyText;
    }

    keyboard.append(key);

    key.addEventListener('mousedown', (e) => {
      e.target.classList.add('active');

      renderKeyText(key);
    });
  });
}

renderKey();
