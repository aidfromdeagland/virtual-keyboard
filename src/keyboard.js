import keyMap from './button.js';

class Keyboard {
  constructor() {
    this.lang = 'en';
    this.shifted = false;
    this.capslocked = false;
  }

  init() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    wrapper.appendChild(textarea);
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    wrapper.appendChild(keyboard);
    keyboard.appendChild(this.addButtons());
    document.body.appendChild(wrapper);
  }

  addButtons() {
    const fragment = document.createDocumentFragment();
    const keyCodes = Object.keys(keyMap);
    keyCodes.forEach((x) => {
      const button = document.createElement('div');
      button.textContent = keyMap[x].key;
      button.classList.add('keyboard__button');
      button.classList.add(`keyboard__button_width_${keyMap[x].width}`);
      fragment.appendChild(button);
    });

    return fragment;
  }
}

export default Keyboard;
