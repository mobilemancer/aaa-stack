import { EventAggregator } from "aurelia-event-aggregator";
import { SignalRService } from "./signalRService";
import { HttpClient, json } from "aurelia-fetch-client";
import { autoinject } from "aurelia-framework";

@autoinject
export class App {
  name = "";
  message = "";
  chatlog: HTMLTextAreaElement;

  constructor(
    private httpClient: HttpClient,
    private signalR: SignalRService,
    private eventAggregator: EventAggregator
  ) {
    this.eventAggregator.subscribe("chat-data", data => {
      this.chatlog.value = this.chatlog.value + data + "\n";
    });
  }

  nameEntered() {
    this.connectWithServer(name);
  }

  textEntered() {
    this.sendToServer();
  }

  async connectWithServer(name) {
    await this.signalR.init();
  }

  sendToServer() {
    this.signalR.send(this.message);
  }
}
