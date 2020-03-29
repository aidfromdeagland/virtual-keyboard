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
