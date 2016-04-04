import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      players: this.store.findAll('player')
    };
  }
});
