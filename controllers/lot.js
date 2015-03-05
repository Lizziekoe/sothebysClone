Sothebys.LotController = Ember.ObjectController.extend({
  isAdding: false,
  actions: {
    add: function() {
      this.set('isAdding', true);
    },
    save: function() {
      var lot = this.model;
      var product = this.store.createRecord('product', {
        description: this.get('description'),
        owner: this.get('owner'),
        bidNumber: this.get('bidNumber'),
        startPrice: this.get('startPrice'),
        backStory: this.get('backStory'),
        yearAcquired: this.get('yearAcquired'),
        image: this.get('image'),
      });
      lot.get('products').then(function(products) {
        products.pushObject(product);
        product.save();
        lot.save();
      });

      this.set('isAdding', false)
    }
  }
});
