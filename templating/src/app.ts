import { PLATFORM } from "aurelia-pal";
import { RouterConfiguration, Router } from "aurelia-router";

export class App {
  message = "Templating";
  router: Router;
  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = "Title";
    config.map([
      {
        route: "1",
        name: "one",
        moduleId: PLATFORM.moduleName("one"),
        title: "Basic Templating"
      },
      {
        route: "2",
        name: "two",
        moduleId: PLATFORM.moduleName("two"),
        title: "Template with View-Model"
      },
      {
        route: "3",
        name: "three",
        moduleId: PLATFORM.moduleName("three"),
        title: "Template with Conditionals"
      },
      {
        route: "4",
        name: "four",
        moduleId: PLATFORM.moduleName("four"),
        title: "Template with Repeaters"
      }
    ]);
  }
}
