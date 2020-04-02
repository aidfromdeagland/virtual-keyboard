class Button {

}

const keyMap = {
  Backquote: {
    keyCode: 192,
    key: { normal: { en: '`', ru: 'ё' }, shifted: { en: '~', ru: 'Ё' } },
    type: 'print',
    width: '100',
  },
  Digit1: {
    keyCode: 49,
    key: { normal: { en: '1', ru: '1' }, shifted: { en: '!', ru: '!' } },
    type: 'print',
    width: '100',
  },
  Digit2: {
    keyCode: 50,
    key: { normal: { en: '2', ru: '2' }, shifted: { en: '@', ru: '"' } },
    type: 'print',
    width: '100',
  },
  Digit3: {
    keyCode: 51,
    key: { normal: { en: '3', ru: '3' }, shifted: { en: '#', ru: '№' } },
    type: 'print',
    width: '100',
  },
  Digit4: {
    keyCode: 52,
    key: { normal: { en: '4', ru: '4' }, shifted: { en: '$', ru: ';' } },
    type: 'print',
    width: '100',
  },
  Digit5: {
    keyCode: 53,
    key: { normal: { en: '5', ru: '5' }, shifted: { en: '%', ru: '%' } },
    type: 'print',
    width: '100',
  },
  Digit6: {
    keyCode: 54,
    key: { normal: { en: '6', ru: '6' }, shifted: { en: '^', ru: ':' } },
    type: 'print',
    width: '100',
  },
  Digit7: {
    keyCode: 55,
    key: { normal: { en: '7', ru: '7' }, shifted: { en: '&', ru: '?' } },
    type: 'print',
    width: '100',
  },
  Digit8: {
    keyCode: 56,
    key: { normal: { en: '8', ru: '8' }, shifted: { en: '*', ru: '*' } },
    type: 'print',
    width: '100',
  },
  Digit9: {
    keyCode: 57,
    key: { normal: { en: '9', ru: '9' }, shifted: { en: '(', ru: '(' } },
    type: 'print',
    width: '100',
  },
  Digit0: {
    keyCode: 48,
    key: { normal: { en: '0', ru: '0' }, shifted: { en: ')', ru: ')' } },
    type: 'print',
    width: '100',
  },
  Minus: {
    keyCode: 173,
    key: { normal: { en: '-', ru: '-' }, shifted: { en: '_', ru: '_' } },
    type: 'print',
    width: '100',
  },
  Equal: {
    keyCode: 61,
    key: { normal: { en: '=', ru: '=' }, shifted: { en: '+', ru: '+' } },
    type: 'print',
    width: '100',
  },
  Backspace: {
    keyCode: 8,
    key: { normal: { en: 'Backspace', ru: 'Backspace' }, shifted: { en: 'Backspace', ru: 'Backspace' } },
    type: 'func',
    width: '200',
  },
  Tab: {
    keyCode: 9,
    key: { normal: { en: 'Tab', ru: 'Tab' }, shifted: { en: 'Tab', ru: 'Tab' } },
    type: 'func',
    width: '150',
  },
  KeyQ: {
    keyCode: 81,
    key: { normal: { en: 'q', ru: 'й' }, shifted: { en: 'Q', ru: 'Й' } },
    type: 'print',
    width: '100',
  },
  KeyW: {
    keyCode: 87,
    key: { normal: { en: 'w', ru: 'ц' }, shifted: { en: 'W', ru: 'Ц' } },
    type: 'print',
    width: '100',
  },
  KeyE: {
    keyCode: 69,
    key: { normal: { en: 'e', ru: 'у' }, shifted: { en: 'E', ru: 'У' } },
    type: 'print',
    width: '100',
  },
  KeyR: {
    keyCode: 82,
    key: { normal: { en: 'r', ru: 'к' }, shifted: { en: 'R', ru: 'К' } },
    type: 'print',
    width: '100',
  },
  KeyT: {
    keyCode: 84,
    key: { normal: { en: 't', ru: 'е' }, shifted: { en: 'T', ru: 'Е' } },
    type: 'print',
    width: '100',
  },
  KeyY: {
    keyCode: 89,
    key: { normal: { en: 'y', ru: 'н' }, shifted: { en: 'Y', ru: 'Н' } },
    type: 'print',
    width: '100',
  },
  KeyU: {
    keyCode: 85,
    key: { normal: { en: 'u', ru: 'г' }, shifted: { en: 'U', ru: 'Г' } },
    type: 'print',
    width: '100',
  },
  KeyI: {
    keyCode: 73,
    key: { normal: { en: 'i', ru: 'ш' }, shifted: { en: 'I', ru: 'Ш' } },
    type: 'print',
    width: '100',
  },
  KeyO: {
    keyCode: 79,
    key: { normal: { en: 'o', ru: 'щ' }, shifted: { en: 'O', ru: 'Щ' } },
    type: 'print',
    width: '100',
  },
  KeyP: {
    keyCode: 80,
    key: { normal: { en: 'p', ru: 'з' }, shifted: { en: 'P', ru: 'З' } },
    type: 'print',
    width: '100',
  },
  BracketLeft: {
    keyCode: 219,
    key: { normal: { en: '[', ru: 'х' }, shifted: { en: '{', ru: 'Х' } },
    type: 'print',
    width: '100',
  },
  BracketRight: {
    keyCode: 221,
    key: { normal: { en: ']', ru: 'ъ' }, shifted: { en: '}', ru: 'Ъ' } },
    type: 'print',
    width: '100',
  },
  Backslash: {
    keyCode: 220,
    key: { normal: { en: '\\', ru: '\\' }, shifted: { en: '|', ru: '/' } },
    type: 'print',
    width: '125',
  },
  CapsLock: {
    keyCode: 20,
    key: { normal: { en: 'CapsLock', ru: 'CapsLock' }, shifted: { en: 'CapsLock', ru: 'CapsLock' } },
    type: 'func',
    width: '150',
  },
  KeyA: {
    keyCode: 65,
    key: { normal: { en: 'a', ru: 'ф' }, shifted: { en: 'A', ru: 'Ф' } },
    type: 'print',
    width: '100',
  },
  KeyS: {
    keyCode: 83,
    key: { normal: { en: 's', ru: 'ы' }, shifted: { en: 'S', ru: 'Ы' } },
    type: 'print',
    width: '100',
  },
  KeyD: {
    keyCode: 68,
    key: { normal: { en: 'd', ru: 'в' }, shifted: { en: 'D', ru: 'В' } },
    type: 'print',
    width: '100',
  },
  KeyF: {
    keyCode: 70,
    key: { normal: { en: 'f', ru: 'а' }, shifted: { en: 'F', ru: 'А' } },
    type: 'print',
    width: '100',
  },
  KeyG: {
    keyCode: 71,
    key: { normal: { en: 'g', ru: 'п' }, shifted: { en: 'G', ru: 'П' } },
    type: 'print',
    width: '100',
  },
  KeyH: {
    keyCode: 72,
    key: { normal: { en: 'h', ru: 'р' }, shifted: { en: 'H', ru: 'Р' } },
    type: 'print',
    width: '100',
  },
  KeyJ: {
    keyCode: 74,
    key: { normal: { en: 'j', ru: 'о' }, shifted: { en: 'J', ru: 'О' } },
    type: 'print',
    width: '100',
  },
  KeyK: {
    keyCode: 75,
    key: { normal: { en: 'k', ru: 'л' }, shifted: { en: 'K', ru: 'Л' } },
    type: 'print',
    width: '100',
  },
  KeyL: {
    keyCode: 76,
    key: { normal: { en: 'l', ru: 'д' }, shifted: { en: 'L', ru: 'Д' } },
    type: 'print',
    width: '100',
  },
  Semicolon: {
    keyCode: 59,
    key: { normal: { en: ';', ru: 'ж' }, shifted: { en: ':', ru: 'Ж' } },
    type: 'print',
    width: '100',
  },
  Quote: {
    keyCode: 222,
    key: { normal: { en: "'", ru: 'э' }, shifted: { en: '"', ru: 'Э' } },
    type: 'print',
    width: '100',
  },
  Enter: {
    keyCode: 13,
    key: { normal: { en: 'Enter', ru: 'Enter' }, shifted: { en: 'Enter', ru: 'Enter' } },
    type: 'func',
    width: '150',
  },
  ShiftLeft: {
    keyCode: 16,
    key: { normal: { en: 'Shift', ru: 'Shift' }, shifted: { en: 'Shift', ru: 'Shift' } },
    type: 'func',
    width: '175',
  },
  KeyZ: {
    keyCode: 90,
    key: { normal: { en: 'z', ru: 'я' }, shifted: { en: 'Z', ru: 'Я' } },
    type: 'print',
    width: '100',
  },
  KeyX: {
    keyCode: 88,
    key: { normal: { en: 'x', ru: 'ч' }, shifted: { en: 'X', ru: 'Ч' } },
    type: 'print',
    width: '100',
  },
  KeyC: {
    keyCode: 67,
    key: { normal: { en: 'c', ru: 'с' }, shifted: { en: 'C', ru: 'С' } },
    type: 'print',
    width: '100',
  },
  KeyV: {
    keyCode: 86,
    key: { normal: { en: 'v', ru: 'м' }, shifted: { en: 'V', ru: 'М' } },
    type: 'print',
    width: '100',
  },
  KeyB: {
    keyCode: 66,
    key: { normal: { en: 'b', ru: 'и' }, shifted: { en: 'B', ru: 'И' } },
    type: 'print',
    width: '100',
  },
  KeyN: {
    keyCode: 78,
    key: { normal: { en: 'n', ru: 'т' }, shifted: { en: 'N', ru: 'Т' } },
    type: 'print',
    width: '100',
  },
  KeyM: {
    keyCode: 77,
    key: { normal: { en: 'm', ru: 'ь' }, shifted: { en: 'M', ru: 'Ь' } },
    type: 'print',
    width: '100',
  },
  Comma: {
    keyCode: 188,
    key: { normal: { en: ',', ru: 'б' }, shifted: { en: '<', ru: 'Б' } },
    type: 'print',
    width: '100',
  },
  Period: {
    keyCode: 190,
    key: { normal: { en: '.', ru: 'ю' }, shifted: { en: '>', ru: 'Ю' } },
    type: 'print',
    width: '100',
  },
  Slash: {
    keyCode: 191,
    key: { normal: { en: '/', ru: '.' }, shifted: { en: '?', ru: ',' } },
    type: 'print',
    width: '100',
  },
  ShiftRight: {
    keyCode: 16,
    key: { normal: { en: 'Shift', ru: 'Shift' }, shifted: { en: 'Shift', ru: 'Shift' } },
    type: 'func',
    width: '100',
  },
  ArrowUp: {
    keyCode: 38,
    key: { normal: { en: '△', ru: '△' }, shifted: { en: '△', ru: '△' } },
    type: 'print',
    width: '100',
  },
  Delete: {
    keyCode: 46,
    key: { normal: { en: 'Delete', ru: 'Delete' }, shifted: { en: 'Delete', ru: 'Delete' } },
    type: 'func',
    width: '100',
  },
  ControlLeft: {
    keyCode: 17,
    key: { normal: { en: 'Control', ru: 'Control' }, shifted: { en: 'Control', ru: 'Control' } },
    type: 'func',
    width: '100',
  },
  OSLeft: {
    keyCode: 91,
    key: { normal: { en: 'SysKey', ru: 'SysKey' }, shifted: { en: 'SysKey', ru: 'SysKey' } },
    type: 'func',
    width: '100',
  },
  AltLeft: {
    keyCode: 18,
    key: { normal: { en: 'Alt', ru: 'Alt' }, shifted: { en: 'Alt', ru: 'Alt' } },
    type: 'func',
    width: '100',
  },
  Space: {
    keyCode: 32,
    key: { normal: { en: ' ', ru: ' ' }, shifted: { en: ' ', ru: ' ' } },
    type: 'print',
    width: '700',
  },
  AltRight: {
    keyCode: 18,
    key: { normal: { en: 'Alt', ru: 'Alt' }, shifted: { en: 'Alt', ru: 'Alt' } },
    type: 'func',
    width: '100',
  },
  ControlRight: {
    keyCode: 17,
    key: { normal: { en: 'Control', ru: '' }, shifted: { en: '', ru: '' } },
    type: 'func',
    width: '175',
  },
  ArrowLeft: {
    keyCode: 37,
    key: { normal: { en: '◁', ru: '◁' }, shifted: { en: '◁', ru: '◁' } },
    type: 'print',
    width: '100',
  },
  ArrowDown: {
    keyCode: 40,
    key: { normal: { en: '▽', ru: '▽' }, shifted: { en: '▽', ru: '▽' } },
    type: 'print',
    width: '100',
  },
  ArrowRight: {
    keyCode: 39,
    key: { normal: { en: '▷', ru: '▷' }, shifted: { en: '▷', ru: '▷' } },
    type: 'print',
    width: '100',
  },
};

export default keyMap;
