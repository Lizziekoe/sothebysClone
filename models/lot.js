Sothebys.Lot = DS.Model.extend({
  name: DS.attr(),
  products: DS.hasMany('product', {async: true})
});
