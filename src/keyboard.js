import keyMap from './button.js';

class Keyboard {
  constructor() {
    this.lang = 'en';
    this.capitalisation = 'normal';
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
    document.addEventListener('keydown', (evt) => {
      evt.preventDefault();
      document.querySelector(`[data-key-code="${evt.keyCode}"]`).classList.toggle('keyboard__button_active');
    });
    document.addEventListener('keyup', (evt) => {
      evt.preventDefault();
      document.querySelector(`[data-key-code="${evt.keyCode}"]`).classList.toggle('keyboard__button_active');
    });
  }

  addButtons() {
    const fragment = document.createDocumentFragment();
    const keyCodes = Object.keys(keyMap);
    keyCodes.forEach((x) => {
      const button = document.createElement('div');
      button.textContent = keyMap[x].key[this.capitalisation][this.lang];
      button.classList.add('keyboard__button');
      button.classList.add(`keyboard__button_width_${keyMap[x].width}`);
      button.dataset.keyCode = keyMap[x].keyCode;
      fragment.appendChild(button);
    });

    return fragment;
  }

  switchLanguage() {
    this.lang = this.lang === 'en' ? 'ru' : 'en';
  }

  shiftCapitalisation() {
    this.capitalisation = this.capitalisation === 'normal' ? 'shifted' : 'normal';
  }
}

export default Keyboard;
