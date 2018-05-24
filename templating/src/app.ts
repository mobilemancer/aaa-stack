import { PLATFORM } from "aurelia-pal";
import { RouterConfiguration, Router } from "aurelia-router";

export class App {
  message = "Templating";
  router: Router;
  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.map([
      {
        route: "1",
        name: "one",
        moduleId: PLATFORM.moduleName("1/one.html"),
        title: "Basic Templating"
      },
      {
        route: "2",
        name: "two",
        moduleId: PLATFORM.moduleName("2/two"),
        title: "Template with View-Model"
      },
      {
        route: "3",
        name: "three",
        moduleId: PLATFORM.moduleName("3/three"),
        title: "Template with Conditionals"
      },
      {
        route: "4",
        name: "four",
        moduleId: PLATFORM.moduleName("4/four"),
        title: "Template with Repeaters"
      },
      {
        route: "5",
        name: "five",
        moduleId: PLATFORM.moduleName("5/five"),
        title: "Template reuse"
      },
      {
        route: "6",
        name: "six",
        moduleId: PLATFORM.moduleName("6/six"),
        title: "Template composition"
      }
    ]);
    config.mapUnknownRoutes(PLATFORM.moduleName("index.html"));
  }
}
