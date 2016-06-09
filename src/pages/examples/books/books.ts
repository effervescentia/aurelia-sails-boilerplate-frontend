import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@autoinject(HttpClient)
export class Books {

  items: any[];

  constructor(private client: HttpClient) { }

  activate() {
    this.client.fetch('/books')
      .then(res => console.log(res));
  }

}
