Sothebys.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('lots');
  this.resource('lot', {path: ':lot_id'}, function() {
    this.resource('show-product', {path: ':product_id'});
  });
  this.resource('new-lot');
});
