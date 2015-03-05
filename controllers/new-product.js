Sothebys.NewProductController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var product = this.get('model');
      product.save();

      var controller = this;
      product.get('lot').then(function(lot) {
        lot.save();
        controller.transitionToRoute('lot', lot);

      });
    }
  }
});
