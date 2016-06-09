import { bindable, autoinject } from 'aurelia-framework';
import { AuthService } from 'aurelia-auth';

@autoinject
export class NavBar {
  @bindable router = null;

  constructor(private auth: AuthService) { }

  get isAuthenticated() {
    return this.auth.isAuthenticated();
  }
}
