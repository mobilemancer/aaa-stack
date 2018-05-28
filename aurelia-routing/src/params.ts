import { RouteConfig } from "aurelia-router";

export class Params {
  title = "";
  params = "";

  activate(params: any, routeConfig: RouteConfig) {
    this.title = routeConfig.title;
    this.params = JSON.stringify(params);
  }
}
