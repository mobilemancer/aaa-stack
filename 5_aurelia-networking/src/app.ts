import { autoinject } from "aurelia-dependency-injection";
import { HttpClient, json, RequestInit } from "aurelia-fetch-client";

@autoinject
export class App {
  message = "Aurelia Networking";
  counter: number;
  counterReply: string;

  getUrl = "https://devsum-numbers.azurewebsites.net/api/GetCounter";
  postUrl = "https://devsum-numbers.azurewebsites.net/api/ConverCounter";

  constructor(private httpClient: HttpClient) {}

  async get_number_clicked() {
    let response = await this.httpClient.fetch(this.getUrl);
    if (response.ok) {
      this.counter = await response.json();
    }
  }

  async post_number_clicked() {
    let init: RequestInit = {
      method: "POST",
      body: JSON.stringify({ counter: this.counter })
    };

    let response = await this.httpClient.fetch(this.postUrl, init);
    if (response.ok) {
      this.counterReply = await response.text();
    }
  }
}
