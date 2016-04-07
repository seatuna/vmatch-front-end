import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model: function(){
    return {
      players: this.get('store').findAll('player'),
      characters: this.get('store').findAll('character')
    };
  },
  actions: {
    createPlayer: function(properties, characterName, opponentName) {
      let playAsCharacter = this.store.peekAll('character').find(function(character){
        return character.get('name') === characterName;
      });
      let playAgainstCharacter = this.store.peekAll('character').find(function(character){
        return character.get('name') === opponentName;
      });
      // let newPlayer = this.store.createRecord('player', properties);
      // playAsCharacter.get('players').pushObject(newPlayer);
      // playAgainstCharacter.get('players').pushObject(newPlayer);
      // newPlayer.save().then(()=>console.log('record created'));

      this.get('ajax').post('http://localhost:3000/players', {
        data: {
          "player": {
            "name": properties.name,
            "rank": properties.rank
          },
          "selected_character": playAsCharacter.id,
          "selected_opponent": playAgainstCharacter.id
        }
      });
      this.refresh();
      console.log('Player created!');

    }
  }
});
