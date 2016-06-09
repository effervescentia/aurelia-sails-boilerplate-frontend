import { FrameworkConfiguration } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    './components/nav-bar',
    './components/pagination.html',
    './components/list-search.html',

    './value-converters/upper'
  ]);
}
