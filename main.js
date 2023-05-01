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
  if (key.id === 'tab') {
    textArea.value += '    ';
    return;
  }
  if (key.id === 'capslock' || key.id === 'shift' || key.id === 'control' || key.id === 'win' || key.id === 'alt') {
    textArea.value += '';
    return;
  }

  textArea.value += key.innerText;
}

function backspace() {
  textArea.focus();
  const index = textArea.selectionStart;

  const s = textArea.value.charAt(index - 1);
  console.log('index: ', index, 's: ', s);
  const newText = textArea.value.slice(0, index - 1) + textArea.value.slice(index);
  textArea.value = newText;

  if (index > 1) textArea.setSelectionRange(index - 1, index - 1);
}
function del() {
  textArea.focus();
  const index = textArea.selectionStart;

  const s = textArea.value.charAt(index);
  console.log('index: ', index, 's: ', s);
  const newText = textArea.value.slice(0, index) + textArea.value.slice(index + 1);
  textArea.value = newText;

  textArea.setSelectionRange(index, index);
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
      const k = e.target;
      if (k.id === 'shift' || k.id === 'control' || k.id === 'capslock' || k.id === 'alt') {
        k.classList.toggle('active');
      } else k.classList.add('active');

      if (keyText === 'Backspace') {
        backspace();
        return;
      }
      if (keyText === 'Delete') {
        del();
        return;
      }

      renderKeyText(key);
    });
    key.addEventListener('mouseup', (e) => {
      textArea.focus();
      const k = e.target;
      console.dir(k.id);
      if (k.id === 'shift' || k.id === 'control' || k.id === 'capslock' || k.id === 'alt') {
        return;
      }
      key.classList.remove('active');
    });
  });
}

renderKey();
