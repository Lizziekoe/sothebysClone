Sothebys.LotsRoute = Ember.Route.extend({
    model: function(params) {
      return this.store.find('lot');
    }
});
