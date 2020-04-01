import keyMap from './button.js';

class Keyboard {
  constructor() {
    this.lang = 'en';
    this.shifted = false;
    this.capslocked = false;
  }

  init() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    keyboard.appendChild(this.addButtons());
    document.body.appendChild(keyboard);
  }

  addButtons() {
    const fragment = document.createDocumentFragment();
    const keyCodes = Object.keys(keyMap);
    const keyValues = Object.values(keyMap);
    keyCodes.forEach((x, index) => {
      const button = document.createElement('div');
      button.textContent = keyValues[index].key;
      button.classList.add('keyboard__button');
      button.classList.add(`keyboard__button_${x}`);
      fragment.appendChild(button);
    });

    return fragment;
  }
}

export default Keyboard;
