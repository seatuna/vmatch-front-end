import DS from 'ember-data';

export default DS.Model.extend({
  player_id: DS.attr('number'),
  character_id: DS.attr('number'),
  
  player: DS.belongsTo('player', { async: true }),
  character: DS.belongsTo('character', { async: true })
});
