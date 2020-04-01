class Button {
  constructor(engPrim, engAlt, rusPrim, rusAlt, keyCode, width) {
    this.text = {
      en: [engPrim, engAlt],
      ru: [rusPrim, rusAlt],
    };
    this.keyCode = keyCode;
    this.width = width;
  }
}

const keyMap = {
  Backquote: {
    keyCode: 192,
    key: '`',
  },
  Digit1: {
    keyCode: 49,
    key: '1',
  },
  Digit2: {
    keyCode: 50,
    key: '2',
  },
  Digit3: {
    keyCode: 51,
    key: '3',
  },
  Digit4: {
    keyCode: 52,
    key: '4',
  },
  Digit5: {
    keyCode: 53,
    key: '5',
  },
  Digit6: {
    keyCode: 54,
    key: '6',
  },
  Digit7: {
    keyCode: 55,
    key: '7',
  },
  Digit8: {
    keyCode: 56,
    key: '8',
  },
  Digit9: {
    keyCode: 57,
    key: '9',
  },
  Digit0: {
    keyCode: 48,
    key: '0',
  },
  Minus: {
    keyCode: 173,
    key: '-',
  },
  Equal: {
    keyCode: 61,
    key: '=',
  },
  Backspace: {
    keyCode: 8,
    key: 'Backspace',
  },
  Tab: {
    keyCode: 9,
    key: 'Tab',
  },
  KeyQ: {
    keyCode: 81,
    key: 'q',
  },
  KeyW: {
    keyCode: 87,
    key: 'w',
  },
  KeyE: {
    keyCode: 69,
    key: 'e',
  },
  KeyR: {
    keyCode: 82,
    key: 'r',
  },
  KeyT: {
    keyCode: 84,
    key: 't',
  },
  KeyY: {
    keyCode: 89,
    key: 'y',
  },
  KeyU: {
    keyCode: 85,
    key: 'u',
  },
  KeyI: {
    keyCode: 73,
    key: 'i',
  },
  KeyO: {
    keyCode: 79,
    key: 'o',
  },
  KeyP: {
    keyCode: 80,
    key: 'p',
  },
  BracketLeft: {
    keyCode: 219,
    key: '[',
  },
  BracketRight: {
    keyCode: 221,
    key: ']',
  },
  Backslash: {
    keyCode: 220,
    key: '\\',
  },
  CapsLock: {
    keyCode: 20,
    key: 'CapsLock',
  },
  KeyA: {
    keyCode: 65,
    key: 'a',
  },
  KeyS: {
    keyCode: 83,
    key: 's',
  },
  KeyD: {
    keyCode: 68,
    key: 'd',
  },
  KeyF: {
    keyCode: 70,
    key: 'f',
  },
  KeyG: {
    keyCode: 71,
    key: 'g',
  },
  KeyH: {
    keyCode: 72,
    key: 'h',
  },
  KeyJ: {
    keyCode: 74,
    key: 'j',
  },
  KeyK: {
    keyCode: 75,
    key: 'k',
  },
  KeyL: {
    keyCode: 76,
    key: 'l',
  },
  Semicolon: {
    keyCode: 59,
    key: ';',
  },
  Quote: {
    keyCode: 222,
    key: "'",
  },
  ShiftLeft: {
    keyCode: 16,
    key: 'Shift',
  },
  KeyZ: {
    keyCode: 90,
    key: 'z',
  },
  KeyX: {
    keyCode: 88,
    key: 'x',
  },
  KeyC: {
    keyCode: 67,
    key: 'c',
  },
  KeyV: {
    keyCode: 86,
    key: 'v',
  },
  KeyB: {
    keyCode: 66,
    key: 'b',
  },
  KeyN: {
    keyCode: 78,
    key: 'n',
  },
  KeyM: {
    keyCode: 77,
    key: 'm',
  },
  Comma: {
    keyCode: 188,
    key: ',',
  },
  Period: {
    keyCode: 190,
    key: '.',
  },
  Slash: {
    keyCode: 191,
    key: '/',
  },
  ShiftRight: {
    keyCode: 16,
    key: 'Shift',
  },
  ControlLeft: {
    keyCode: 17,
    key: 'Control',
  },
  OSLeft: {
    keyCode: 91,
    key: 'OS',
  },
  AltLeft: {
    keyCode: 18,
    key: 'Alt',
  },
  Space: {
    keyCode: 32,
    key: ' ',
  },
  AltRight: {
    keyCode: 18,
    key: 'Alt',
  },
  ControlRight: {
    keyCode: 17,
    key: 'Control',
  },
  ArrowLeft: {
    keyCode: 37,
    key: 'ArrowLeft',
  },
  ArrowDown: {
    keyCode: 40,
    key: 'ArrowDown',
  },
  ArrowRight: {
    keyCode: 39,
    key: 'ArrowRight',
  },
  ArrowUp: {
    keyCode: 38,
    key: 'ArrowUp',
  },
};

export default keyMap;
