import { PLATFORM } from "aurelia-pal";
import { autoinject } from "aurelia-framework";
import { RouterConfiguration, Router } from "aurelia-router";

@autoinject
export class App {

  configureRouter(config: RouterConfiguration, router: Router): void {
    config.map([
      {
        route: ["", "home"],
        name: "home",
        moduleId: PLATFORM.moduleName("home.html"),
        title: "Home"
      },
      {
        route: "navstates",
        name: "navstates",
        moduleId: PLATFORM.moduleName("navstates.html"),
        title: "navstates"
      },
      {
        route: "params/:id",
        name: "params",
        moduleId: PLATFORM.moduleName("params"),
        title: "Params"
      },
      {
        route: "wildcard/*path",
        name: "wildcard",
        moduleId: PLATFORM.moduleName("wildcard"),
        title: "Wildcard"
      }
    ]);
    config.mapUnknownRoutes(PLATFORM.moduleName("home.html"));
  }
}
