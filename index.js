const fragment = document.createDocumentFragment();
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
document.body.appendChild(keyboard);
const keys = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
  'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '|',
  'caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
  'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift',
  'ctrl', 'win', 'alt', 'space', 'alt', 'ctrl',
];

for (let i = 0; i < 55; i += 1) {
  const button = document.createElement('button');
  button.classList.add('button');
  button.textContent = keys[i];
  keyboard.appendChild(button);
}

document.querySelector('');
