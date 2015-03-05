Sothebys.ShowProductRoute = Ember.Route.extend({
  model: function(params) {
    var lot = this.modelFor('lot');
    var product = lot.get('products').then(function(products) {
      this.store.find('product', params.product_id);
      });
    return product;
  }
});
