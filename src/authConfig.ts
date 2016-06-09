let devConfig = {
  baseUrl: 'http://localhost:1337',
  loginRedirect: '#/examples',
  providers: {
    google: {
      //responseType :'code',
      clientId: '239531826023-ibk10mb9p7ull54j55a61og5lvnjrff6.apps.googleusercontent.com',
      state: () => {
        var val = ((Date.now() + Math.random()) * Math.random()).toString().replace(".", "");
        return encodeURIComponent(val);
      }
    },
    linkedin: {
      clientId: '778mif8zyqbei7'
    },
    facebook: {
      clientId: '1452782111708498'
    }
  }
};

var prodConfig = {
  providers: {
    google: {
      clientId: '239531826023-3ludu3934rmcra3oqscc1gid3l9o497i.apps.googleusercontent.com'
    },
    linkedin: {
      clientId: '7561959vdub4x1'
    },
    facebook: {
      clientId: '1653908914832509'
    }
  }
};

let config;
if (window.location.hostname === 'localhost') {
  config = devConfig;
} else {
  config = prodConfig;
}

export default config;
