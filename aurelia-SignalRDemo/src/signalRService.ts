import {
  HttpClient,
  json,
  HttpClientConfiguration
} from "aurelia-fetch-client";
import { autoinject } from "aurelia-framework";
import { HubConnection } from "@aspnet/signalr";
import * as signalR from "@aspnet/signalr";
import { EventAggregator } from "aurelia-event-aggregator";
import { OutgoingHttpHeaders } from "http";

@autoinject
export class SignalRService {
  private readonly baseUrl: string = "http://localhost:7071/api/";
  private readonly baseUrlProd = "https://signalrdevsum18.azurewebsites.net/api/";
  private hubConnection: HubConnection;

  constructor(
    private httpClient: HttpClient,
    private eventAggregator: EventAggregator
  ) {
    let headers: OutgoingHttpHeaders = {
      Accept: "application/json",
      "X-Requested-With": "Fetch"
    };

    let conf = new HttpClientConfiguration();
    conf.withBaseUrl(this.baseUrlProd);
    conf.withDefaults({
      credentials: "same-origin",
      headers: headers
    });

    this.httpClient.configure(config => conf);
  }

  private async getConnectionInfo(): Promise<any> {
    let result = await this.httpClient
      .fetch("negotiate")
      .then(response => {
        return response.json();
      })
      .then((data: any) => {
        return data;
      });
    return result;
  }

  async init() {
    let info = await this.getConnectionInfo();
    let options = {
      accessTokenFactory: () => info.accessKey
    };

    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(info.endpoint, options)
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this.hubConnection.start().catch(err => console.error(err.toString()));

    this.hubConnection.on("notify", (data: any) => {
      this.eventAggregator.publish("chat-data", data);
    });
  }

  send(message: string): any {
    this.httpClient.fetch("message", {
      method: "post",
      body: message
    });
  }
}
