import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      characters: this.store.findAll('character'),
      players: this.store.findAll('player')
    };
  },
});
