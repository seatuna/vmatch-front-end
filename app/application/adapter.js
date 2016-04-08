import Ember from 'ember';
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: 'https://vmatch.herokuapp.com/',
  auth: Ember.inject.service(),

  headers: Ember.computed('auth.credentials.token', {
    get() {
      let headers = {};
      const token = this.get('auth.credentials.token');
      if (token) {
        headers['Authorization'] = `Token token=${token}`;
      }
      return headers;
    }
  })
});
