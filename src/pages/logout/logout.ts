import { AuthService } from 'aurelia-auth';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Logout {

  constructor(private auth: AuthService) { };

  activate() {
    this.auth.logout("#/login")
      .then(response => console.log("ok logged out on logout.js"))
      .catch(err => console.log("error logged out logout.js"));
  }
}
