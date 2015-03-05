Sothebys.NewProductRoute = Ember.Route.extend({
  model: function(params) {
    var lot = this.modelFor('lot');
    var product = this.store.createRecord('product');
    lot.get('products').then(function(products) {
      products.pushObject(product);
    });
    return product;
  }

});
