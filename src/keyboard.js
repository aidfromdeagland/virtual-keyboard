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
    const keyboardButtons = document.querySelectorAll('.keyboard__button');
    document.addEventListener('keydown', (evt) => {
      if (Object.keys(keyMap).includes(evt.code)) {
        evt.preventDefault();
        document.querySelector(`[data-code="${evt.code}"]`).classList.add('keyboard__button_active');
      }
    });
    document.addEventListener('keyup', (evt) => {
      if (Object.keys(keyMap).includes(evt.code)) {
        evt.preventDefault();
        document.querySelector(`[data-code="${evt.code}"]`).classList.remove('keyboard__button_active');
      }
    });
    document.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('keyboard__button')) {
        evt.target.classList.add('keyboard__button_active')
        setTimeout(() => evt.target.classList.remove('keyboard__button_active'), 100);
      }
    });

    const controlButtons = document.querySelectorAll('[data-code*="Control"]');
    Array.from(controlButtons).forEach((x) => x.addEventListener('keydown', (evt) => {
      console.log(evt);
    }));
  }

  addButtons() {
    const fragment = document.createDocumentFragment();
    const keyCodes = Object.keys(keyMap);
    keyCodes.forEach((x) => {
      const button = document.createElement('div');
      button.textContent = keyMap[x].key[this.capitalisation][this.lang];
      button.classList.add('keyboard__button');
      button.classList.add(`keyboard__button_width_${keyMap[x].width}`);
      button.dataset.code = x;
      button.dataset.lowEn = keyMap[x].key.normal.en;
      button.dataset.lowRu = keyMap[x].key.normal.ru;
      button.dataset.upEn = keyMap[x].key.shifted.en;
      button.dataset.upRu = keyMap[x].key.shifted.ru;
      button.dataset.type = keyMap[x].type;
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
