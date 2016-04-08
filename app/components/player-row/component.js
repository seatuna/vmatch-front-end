import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['card','card-block'],
  isEditable: false,
  doubleClick: function(){
    this.toggleProperty('isEditable');
  },
  actions: {
    updatePlayer: function(){
      console.log('Component Action : updatePlayer');
      this.sendAction('routeUpdatePlayer', this.get('player'));
      this.set('isEditable', false);
    },

    destroyPlayer: function(){
      console.log('Component Action : destroyPlayer');
      this.sendAction('routeDestroyPlayer', this.get('player'));
    }
  }
});
