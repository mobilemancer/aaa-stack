class HomeRoute {
  static view() {
    return "<template>Home route. Welcome ${message}</template>";
  }

  constructor() {
    this.message = "home";
  }
}

class ContactsRoute {
  static view() {
    return "<template>Contacts route. Welcome ${message}</template>";
  }

  constructor() {
    this.message = "to contacts";
  }
}

class App {
  static view() {
    return `<template>
        Hello \${message}!
        <div>
          <a repeat.for='nav of router.navigation' href.bind='nav.href'>\${nav.title}</a>
        </div>
      </template>`;
  }

  constructor() {
    this.message = "world";
  }

  configureRouter(config, router) {
    config.map([
      { route: "home", moduleId: HomeRoute, title: "Home", nav: true },
      {
        route: "contacts",
        moduleId: ContactsRoute,
        title: "Contacts",
        nav: true
      }
    ]);
    this.router = router;
  }
}

new Au.Aurelia({}).start().then(aurelia => aurelia.setRoot(App, document.body));
