import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { AuthService } from 'aurelia-auth';

@autoinject
export class Login {

  heading = 'Login';

  email = '';
  password = '';

  constructor(private auth: AuthService, private client: HttpClient) { };

  login() {
    var creds = "grant_type=password&email=" + this.email + "&password=" + this.password;
    return this.auth.login(this.email, this.password)
      //return this.auth.login(creds)
      .then(response => console.log("success logged " + response))
      .catch(err => err.json())
      .then(err => console.log(`login failure: ${err}`));
  };

  authenticate(name) {
    return this.auth.authenticate(name, false, null)
      .then(response => console.log("auth response " + response));
  }
}
