Sothebys.Lot = DS.Model.extend({
  name: DS.attr(),
  products: DS.hasmany('product', {async: true})
});
