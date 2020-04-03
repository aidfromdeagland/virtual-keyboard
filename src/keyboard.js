import buttonsMap from './buttonsmap.js';

class Keyboard {
  constructor() {
    this.lang = 'en';
    this.capitalisation = 'normal';
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
    const shiftKeys = document.querySelectorAll('[data-code*="Shift');
    const controlKeys = document.querySelectorAll('[data-code*="Control');
    const capslockKey = document.querySelector('[data-code="CapsLock"');

    document.addEventListener('keydown', (evt) => {
      if (Object.keys(buttonsMap).includes(evt.code)) {
        evt.preventDefault();
        if ((evt.code === 'ShiftLeft' || evt.code === 'ShiftRight')) {
          if (!Array.from(shiftKeys).some((x) => x.classList.contains('keyboard__button_active'))) {
            this.shiftCapitalisation();
          }

          if (evt.ctrlKey) {
            this.switchLanguage();
            this.drawButtons();
          }

          this.drawButtons();
        }

        if (evt.code === 'ControlLeft' || evt.code === 'ControlRight') {
          if (evt.shiftKey) {
            this.switchLanguage();
            this.drawButtons();
          }
        }

        document.querySelector(`[data-code="${evt.code}"]`).classList.add('keyboard__button_active');

        if (buttonsMap[evt.code].type === 'print') {
          textarea.value += buttonsMap[evt.code].key[this.capitalisation][this.lang];
        } else if (buttonsMap[evt.code].type === 'func') {
          switch (evt.code) {
            case 'Backspace':
              textarea.value = textarea.value.slice(0, -1);
              break;
            case 'Tab':
              textarea.value += '\t';
              break;
            case 'Enter':
              textarea.value += '\n';
              break;
            default:
              break;
          }
        }
      }
    });

    document.addEventListener('keyup', (evt) => {
      if (Object.keys(buttonsMap).includes(evt.code) && evt.code !== 'CapsLock') {
        evt.preventDefault();
        document.querySelector(`[data-code="${evt.code}"]`).classList.remove('keyboard__button_active');

        if (evt.code === 'ShiftLeft' || evt.code === 'ShiftRight') {
          this.shiftCapitalisation();
          this.drawButtons();
        }
      } else if (evt.code === 'CapsLock') {
        this.shiftCapitalisation();
        capslockKey.classList.toggle('keyboard__button_active');
        this.drawButtons();
      }
    });

    document.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('keyboard__button')) {
        evt.target.classList.add('keyboard__button_active');

        evt.target.addEventListener('mouseup', mouseOffHandler);
        evt.target.addEventListener('mouseout', mouseOffHandler);
      }
    });
    const mouseOffHandler = function (evt) {
      evt.target.classList.remove('keyboard__button_active');
      evt.target.removeEventListener('mouseup', mouseOffHandler);
      evt.target.removeEventListener('mouseout', mouseOffHandler);
    };
  }

  addButtons() {
    const fragment = document.createDocumentFragment();
    const keyCodes = Object.keys(buttonsMap);
    keyCodes.forEach((x) => {
      const button = document.createElement('div');
      button.textContent = buttonsMap[x].key[this.capitalisation][this.lang];
      button.classList.add('keyboard__button');
      button.classList.add(`keyboard__button_width_${buttonsMap[x].width}`);
      button.dataset.code = x;
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

  drawButtons() {
    const keyboardButtons = document.querySelectorAll('.keyboard__button');
    for (let i = 0; i < keyboardButtons.length; i += 1) {
      keyboardButtons[i].textContent = buttonsMap[keyboardButtons[i].dataset.code]
        .key[this.capitalisation][this.lang];
    }
  }
}

export default Keyboard;
