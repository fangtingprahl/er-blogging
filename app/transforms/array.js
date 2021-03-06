import DS from 'ember-data';
import Ember from 'ember';

export default DS.Transform.extend({
  deserialize(serialized) {
    return Ember.typeOf(serialized) === "array" ? serialized
      : [];
  },

  serialize(deserialized) {
    const type = Ember.typeOf(deserialized);
    if (type === "array") {
      return deserialized;
    } else if (type === "string") {
      return deserialized.split(',').map(function(item) {
        return Ember.$.trim(item);
      });
    } else {
      return [];
    }
  }
});
