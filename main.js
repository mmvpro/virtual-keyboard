let langRu = false;
langRu = (localStorage.getItem('langRu') === 'true');

const keys = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'ShiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'win', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'
];
const keysRu = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'ShiftLeft', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'win', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'
];

const keysCode = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Dogot6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'keyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'win', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'
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

let allKeys;

function setLangLocalSorege() {
  localStorage.setItem('langRu', langRu);
}
window.addEventListener('unload', setLangLocalSorege);

function pushTextInTextArea(key) {
  textArea.focus();
  let text = key.innerText;

  if (key.id === 'enter') {
    text = '\n';
  }
  if (key.id === 'arrowup') {
    text = '▲';
  }
  if (key.id === 'arrowleft') {
    text = '◄';
  }
  if (key.id === 'arrowdown') {
    text = '▼';
  }
  if (key.id === 'arrowright') {
    text = '►';
  }
  if (key.id === 'space') {
    text = ' ';
  }
  if (key.id === 'tab') {
    text = '    ';
  }
  if (key.id === 'capslock' || key.id === 'shiftleft' || key.id === 'shiftright' || key.id === 'controlleft' || key.id === 'controlright' || key.id === 'win' || key.id === 'altleft' || key.id === 'altright') {
    return;
  }
  textArea.focus();
  const index = textArea.selectionStart;
  const newText = textArea.value.slice(0, index) + text + textArea.value.slice(index);
  textArea.value = newText;

  textArea.setSelectionRange(index + 1, index + 1);
}

function backspace() {
  textArea.focus();
  const index = textArea.selectionStart;

  const newText = textArea.value.slice(0, index - 1) + textArea.value.slice(index);
  textArea.value = newText;

  if (index > 1) textArea.setSelectionRange(index - 1, index - 1);
}
function del() {
  textArea.focus();
  const index = textArea.selectionStart;

  const newText = textArea.value.slice(0, index) + textArea.value.slice(index + 1);
  textArea.value = newText;

  textArea.setSelectionRange(index, index);
}
function space() {
  textArea.focus();
  const index = textArea.selectionStart;

  const newText = textArea.value.slice(0, index) + ' ' + textArea.value.slice(index);
  textArea.value = newText;

  textArea.setSelectionRange(index + 1, index + 1);
}
function tab() {
  textArea.focus();
  const index = textArea.selectionStart;

  const newText = textArea.value.slice(0, index) + '    ' + textArea.value.slice(index);
  textArea.value = newText;

  textArea.setSelectionRange(index + 4, index + 4);
}

let capslockIsActive = false;
let shiftIsActive = false;
let ctrlLeftIsActive = false;
let altLeftIsActive = false;
function setUpDown() {
  for (let i = 0; i < allKeys.length; i += 1) {
    let key = allKeys[i];
    if (
      key.id === 'tab'
      || key.id === 'backspace'
      || key.id === 'capslock'
      || key.id === 'shiftleft'
      || key.id === 'shiftright'
      || key.id === 'controlleft'
      || key.id === 'controlright'
      || key.id === 'win'
      || key.id === 'altleft'
      || key.id === 'altright'
      || key.id === 'enter'
      || key.id === 'space'
      || key.id === 'delete'
    ) {
      i += 1;
    } else key.classList.toggle('up');
  }
}
function capslock() {
  capslockIsActive = !capslockIsActive;
  if (!shiftIsActive) setUpDown();
}

function shift() {
  const fl = [
    [langRu ? 'ё' : '`', '~'], ['1', '!'], ['2', '@'], ['3', '#'], ['4', '$'], ['5', '%'], ['6', '^'], ['7', '&'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+']
  ];
  if (!capslockIsActive) setUpDown();

  if (!shiftIsActive) {
    for (let i = 0; i < fl.length; i += 1) {
      allKeys[i].innerText = fl[i][1];
      shiftIsActive = !shiftIsActive;
    }
  } else {
    for (let i = 0; i < fl.length; i += 1) {
      allKeys[i].innerText = fl[i][0];
      shiftIsActive = !shiftIsActive;
    }
  }
}
function changeLang() {
  if (ctrlLeftIsActive && altLeftIsActive) {
    if (langRu) {
      for (let i = 0; i < allKeys.length; i += 1) {
        if (allKeys[i].id === keys[i]) {
          allKeys[i].innerText = keys[i];
        }
      }
      langRu = false;
    } else {
      for (let i = 0; i < allKeys.length; i += 1) {
        if (allKeys[i].id === keys[i]) {
          allKeys[i].innerText = keysRu[i];
        }
      }
      langRu = true;
    }
  }
}

function getKey(e) {
  textArea.focus();
  const code = e.code;

  let index = keysCode.indexOf(code);
  let key = allKeys[index];
  if (key.id === 'shiftleft' || key.id === 'shiftright' || key.id === 'controlleft'
  || key.id === 'capslock' || key.id === 'altleft') {
    key.classList.toggle('active');
    if (key.id === 'capslock') capslock();
    if (key.id === 'shiftleft' || key.id === 'shiftright') shift();
    if (key.id === 'controlleft') {
      ctrlLeftIsActive = !ctrlLeftIsActive;
      if (altLeftIsActive) changeLang();
    }
    if (key.id === 'altleft') {
      altLeftIsActive = !altLeftIsActive;
      changeLang();
    }
  } else key.classList.add('active');
}
function removeActive() {
  for (let i = 0; i < allKeys.length; i += 1) {
    const key = allKeys[i];
    if (key.classList.contains('active')) {
      if (key.id === 'shiftleft' || key.id === 'shiftright' || key.id === 'controlleft' || key.id === 'capslock' || key.id === 'altleft') i += 1;
      else key.classList.remove('active');
    }
  }
}

body.addEventListener('keydown', getKey);
textArea.addEventListener('keyup', removeActive);

function renderKey() {
  const data = langRu ? keysRu : keys;
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
      key.innerText = 'Caps Lock';
    } else if (keyText === 'Delete') {
      key.innerText = 'Del';
    } else if (keyText === 'ShiftRight' || keyText === 'ShiftLeft') {
      key.innerText = 'Shift';
    } else if (keyText === 'ControlRight' || keyText === 'ControlLeft') {
      key.innerText = 'Ctrl';
    } else if (keyText === 'AltRight' || keyText === 'AltLeft') {
      key.innerText = 'Alt';
    } else {
      key.innerText = keyText;
    }

    keyboard.append(key);

    key.addEventListener('mousedown', (e) => {
      const k = e.target;
      if (k.id === 'shiftleft' || k.id === 'shiftright' || k.id === 'controlleft' || k.id === 'capslock' || k.id === 'altleft') {
        k.classList.toggle('active');
        if (k.id === 'capslock') capslock();
        if (k.id === 'shiftleft' || k.id === 'shiftright') shift();
        if (k.id === 'controlleft') {
          ctrlLeftIsActive = !ctrlLeftIsActive;
          if (altLeftIsActive) changeLang();
        }
        if (k.id === 'altleft') {
          altLeftIsActive = !altLeftIsActive;
          changeLang();
        }
      } else k.classList.add('active');

      if (keyText === 'Backspace') {
        backspace();
        return;
      }
      if (keyText === 'Delete') {
        del();
        return;
      }
      if (keyText === 'Space') {
        space();
        return;
      }
      if (keyText === 'Tab') {
        tab();
        return;
      }

      pushTextInTextArea(key);
    });
    key.addEventListener('mouseup', (e) => {
      textArea.focus();
      const k = e.target;
      if (k.id === 'shiftleft' || k.id === 'shiftright' || k.id === 'controlleft' || k.id === 'capslock' || k.id === 'altleft') {
        return;
      }
      key.classList.remove('active');
    });
  });
  allKeys = document.querySelectorAll('.key');
}

renderKey();
