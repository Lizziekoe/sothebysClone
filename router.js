Sothebys.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('lots');
  this.resource('lot', {path: ':lot_id'}, function() {
    this.resource('new-product');
    this.resource('show-product');
  });
  this.resource('new-lot');
});
