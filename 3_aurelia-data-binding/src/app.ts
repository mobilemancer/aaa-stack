import { PLATFORM } from "aurelia-pal";
import { RouterConfiguration, Router } from "aurelia-router";

export class App {
  message = "Data Binding";
  router: Router;
  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.map([
      {
        route: "1",
        name: "one",
        moduleId: PLATFORM.moduleName("1/one"),
        title: "Basic Data-Binding"
      },
      {
        route: "2",
        name: "two",
        moduleId: PLATFORM.moduleName("2/two"),
        title: "Class & Style"
      },
      {
        route: "3",
        name: "three",
        moduleId: PLATFORM.moduleName("3/three"),
        title: "Computed Properties"
      },
      {
        route: "4",
        name: "four",
        moduleId: PLATFORM.moduleName("4/four"),
        title: "Referring to Elements"
      },
      {
        route: "5",
        name: "five",
        moduleId: PLATFORM.moduleName("5/five"),
        title: "Value Converters"
      },
      {
        route: "6",
        name: "six",
        moduleId: PLATFORM.moduleName("6/six"),
        title: "Trigger or Delegate?"
      },
      {
        route: "7",
        name: "seven",
        moduleId: PLATFORM.moduleName("7/seven"),
        title: "Observable Properties"
      }
    ]);
    config.mapUnknownRoutes(PLATFORM.moduleName("index.html"));
  }
}
