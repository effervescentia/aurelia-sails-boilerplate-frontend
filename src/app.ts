import { AuthorizeStep, FetchConfig } from 'aurelia-auth';
import { Router, RouterConfiguration } from 'aurelia-router'
import { autoinject } from 'aurelia-framework';

@autoinject
export class App {
  router: Router;

  constructor(private fetchConfig: FetchConfig) { }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Boilerplate';
    config.addPipelineStep('authorize', AuthorizeStep);
    config.map([
      { route: ['', 'about'], name: 'about', moduleId: 'pages/about/about', nav: true, title: 'About' },
      { route: 'examples', name: 'examples', moduleId: 'pages/examples/examples', nav: true, title: 'Examples', auth: true },
      { route: 'login', name: 'login', moduleId: 'pages/login/login', nav: false, title: 'Login' },
      { route: 'logout', name: 'logout', moduleId: 'pages/logout/logout', nav: false, title: 'Logout' }
    ]);

    this.router = router;
  }

  activate() {
    this.fetchConfig.configure();
  }
}
