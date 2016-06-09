export class Examples {

  router = null;

  configureRouter(config, router) {
    config.map([
      { route: ['', 'books'], name: 'books', moduleId: './books/books', nav: true, title: 'Books' },
      { route: 'books/:id', name: 'book', moduleId: './book/book', title: 'Book' },
      { route: 'authors', name: 'authors', moduleId: './authors/authors', nav: true, title: 'Authors' },
      { route: 'messages', name: 'messages', moduleId: './messages/messages', nav: true, title: 'Messages' },
      { route: 'chat', name: 'chat', moduleId: './chat/chat', nav: true, title: 'Chat' }
    ]);
    this.router = router;
  }

}
