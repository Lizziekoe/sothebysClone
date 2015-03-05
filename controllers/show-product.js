Sothebys.ShowProductController = Ember.ObjectController.extend({
  isDeleted: false,
  actions: {
    delete: function() {
      if (confirm('Are you sure?')) {
        var product = this.get('model');
        var lot = this.get('model').get('lot');
        this.get('model').destroyRecord();

        this.set('isDeleted', true);
        this.transitionToRoute('lot', lot);
        this.set('isDeleted', false);
      }
    }
  }
});
