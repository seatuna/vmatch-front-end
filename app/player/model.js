import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  rank: DS.attr('string'),
  characters: DS.attr(),
  opponents: DS.attr()

  // characters: DS.hasMany('characters', { async: true }),
  // opponent: DS.hasMany('opponents', { async: true})
});
