import { observable } from "aurelia-framework";

export class Seven {
  @observable counter = 0;
  ctr: HTMLInputElement;

  attached() {
    console.log("Attached");
  }

  click_handler_add() {
    this.counter++;
  }

  click_handler_subract() {
    this.counter--;
  }

  counterChanged(newValue, oldValue) {
    console.log("Counter Changed");
    if (!this.ctr) return;
    this.ctr.value = this.counter.toString();
  }
}
