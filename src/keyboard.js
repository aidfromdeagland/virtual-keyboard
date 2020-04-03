import buttonsMap from './buttonsmap.js';

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
    const info = document.createElement('div');
    info.innerHTML = '<div class="info__hint"><p>Switch language combo: <span>ctrl</span> + <span>shift</span></p></div>'
      + '<div class="info__os"><p>Developed for WINDOWS OS<p></div>';
    info.classList.add('info');
    wrapper.appendChild(keyboard);
    keyboard.appendChild(this.addButtons());
    wrapper.appendChild(info);
    document.body.appendChild(wrapper);
    const shiftKeys = document.querySelectorAll('[data-code*="Shift');
    const capslockKey = document.querySelector('[data-code="CapsLock"');
    capslockKey.classList.add('keyboard__button_capslock');

    document.addEventListener('keydown', (evt) => {
      if (Object.keys(buttonsMap).includes(evt.code)) {
        evt.preventDefault();
        if ((evt.code === 'ShiftLeft' || evt.code === 'ShiftRight')) {
          if (!Array.from(shiftKeys).some((x) => x.classList.contains('keyboard__button_active'))) {
            this.shiftCapitalisation();
          }

          this.drawButtons();
        }

        document.querySelector(`[data-code="${evt.code}"]`).classList.add('keyboard__button_active');

        if (buttonsMap[evt.code].type === 'print') {
          textarea.value += buttonsMap[evt.code].key[this.capitalisation][this.lang];
        } else if (buttonsMap[evt.code].type === 'func') {
          switch (evt.code) {
            case 'Backspace':
              if (textarea.selectionStart > 0) {
                const startPos = textarea.selectionStart;
                textarea.value = textarea.value.slice(0, textarea.selectionStart - 1)
                  + textarea.value.slice(textarea.selectionStart);
                textarea.selectionStart = startPos - 1;
                textarea.selectionEnd = textarea.selectionStart;
              }
              break;
            case 'Delete':
              if (textarea.selectionStart < textarea.value.length) {
                const startPos = textarea.selectionStart;
                textarea.value = textarea.value.slice(0, textarea.selectionStart)
                  + textarea.value.slice(textarea.selectionStart + 1);
                textarea.selectionStart = startPos;
                textarea.selectionEnd = textarea.selectionStart;
              }
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
      if (Object.keys(buttonsMap).includes(evt.code)) {
        evt.preventDefault();
        document.querySelector(`[data-code="${evt.code}"]`).classList.remove('keyboard__button_active');

        if (evt.code === 'ShiftLeft' || evt.code === 'ShiftRight') {
          this.shiftCapitalisation();
          this.drawButtons();

          if (evt.ctrlKey) {
            this.switchLanguage();
            this.drawButtons();
          }
        }

        if (evt.code === 'ControlLeft' || evt.code === 'ControlRight') {
          if (evt.shiftKey) {
            this.switchLanguage();
            this.drawButtons();
          }
        }

        if (evt.code === 'CapsLock') {
          this.shiftCapitalisation();
          this.drawButtons();
          this.toggleCapslock();
          capslockKey.classList.toggle('keyboard__button_capslock_active');
        }
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

  toggleCapslock() {
    this.capslocked = this.capslocked !== true;
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
