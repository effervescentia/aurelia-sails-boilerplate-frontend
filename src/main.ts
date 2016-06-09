import 'bootstrap';
import { Aurelia } from 'aurelia-framework';
import { CSRFInterceptor, LoggerInterceptor } from 'aurelia-sails-socket-client';
import authConfig from './authConfig';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .feature('resources')
    .plugin('aurelia-sails-socket-client', (sails, io) => {
      sails.configure(x => {
        io.sails.url = 'http://localhost:1337'
        x.withBaseUrl('/api/v1');
        x.withInterceptor(new CSRFInterceptor('/csrfToken', sails));
        x.withInterceptor(new LoggerInterceptor());
      });
    })
    .plugin('aurelia-auth', baseConfig => {
      baseConfig.configure(authConfig);
    });

  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(() => aurelia.setRoot());
}
