Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {name: 'home', controller: 'MainController'});
Router.route('/login', {name: 'login', controller: 'LoginController'});
// Router.route('/backend', {name: 'backend', controller: 'BackendController'});

MainController = RouteController.extend({
  action: function() {
  	this.render('home');
  }
});

LoginController = RouteController.extend({
  action: function() {
  	this.render('login');
  }
});

// BackendController = RouteController.extend({
//   action: function() {
//   	this.render('backend');
//   }
// });