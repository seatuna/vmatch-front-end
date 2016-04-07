import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      characters: this.get('store').findAll('character'),
      players: this.get('store').findAll('player')
    };
  },
});
