export class Four {
  counter = 0;
  ctr: HTMLInputElement;

  click_handler_add() {
    this.counter++;
    this.updateElement();
  }

  click_handler_subract() {
    this.counter--;
    this.updateElement();
  }

  updateElement() {
    this.ctr.value = this.counter.toString();
  }
}
