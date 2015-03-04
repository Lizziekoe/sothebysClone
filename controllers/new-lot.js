Sothebys.NewLotController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        name: this.get('name')
      });

      newLot.save();
      this.set('lot', "");
      this.transitionToRoute('lots');
    }
  }
});
