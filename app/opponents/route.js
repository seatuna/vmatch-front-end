import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      players: this.get('store').findAll('player'),
      characters: this.get('store').findAll('character'),
      opponents: this.get('store').findAll('play_against_character')
    };
  }
});
