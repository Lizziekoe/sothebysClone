Sothebys.NewProductController = Ember.ObjectController.extend({
  isAdding: false,
  actions: {
    add: function() {
      this.set('isAdding', true);
    },
    save: function() {
      var product = this.get('model');
      product.save();

      var controller = this;
      product.get('lot').then(function(lot) {
        lot.save();
        controller.transitionToRoute('lot', lot);
      });
      this.set('isAdding', false)
    }
  }
});
