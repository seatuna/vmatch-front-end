import Ember from 'ember';

export default Ember.Component.extend({
  playerForm: {},
  characterName: '',
  opponentName: '',
  actions: {
    createPlayer: function(){
      this.sendAction('routeCreatePlayer',
        this.get('playerForm'),
        this.get('characterName'), // .toLowerCase() and regex remove special chars
        this.get('opponentName'));
      this.set('playerForm', {});
      this.set('characterName', '');
      this.set('opponentName', '');
    }
  }
});
