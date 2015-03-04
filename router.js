Sothebys.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('add');
  this.resource('lots', {path: 'add'});
  this.resource('new-lot');
});
