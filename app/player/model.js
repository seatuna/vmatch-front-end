import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  rank: DS.attr('string'),

  characters: DS.hasMany('characters', {async: true}),
  opponents: DS.hasMany('opponents', {async: true})
});
