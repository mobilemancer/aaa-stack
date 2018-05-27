export class One {
  name = "";

  counter_onetime = 0;
  counter_toview = 0;
  counter_fromview = 0;
  counter_twoway = 0;
  counter_bind = 0;

  click_handler_add() {
    console.log("adding");
    this.counter_onetime++;
    this.counter_toview++;
    this.counter_fromview++;
    this.counter_twoway++;
    this.counter_bind++;
  }

  click_handler_subract() {
    this.counter_onetime--;
    this.counter_toview--;
    this.counter_fromview--;
    this.counter_twoway--;
    this.counter_bind--;
  }
}
