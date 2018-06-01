class App {
  static view() {
    return `<template>
      Hello \${message}!
    </template>`;
  }

  constructor() {
    this.message = "world";
  }
}

new Au.Aurelia({}).start().then(aurelia => aurelia.setRoot(App, document.body));
