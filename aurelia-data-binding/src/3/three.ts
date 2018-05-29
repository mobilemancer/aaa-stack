import { computedFrom } from "aurelia-framework";

export class Three {
  counter = 0;
  observedCounter = 0;
  firstName = "";
  familyName = "";

  public get fullName(): string {
    this.counter++;
    return this.firstName + " " + this.familyName;
  }

  @computedFrom("firstName", "familyName")
  public get observedFullName(): string {
    this.observedCounter++;
    return this.firstName + " " + this.familyName;
  }
}
