import Ember from 'ember';
import Orbit from 'orbit';
import LocalStorageSource from 'orbit-common/local-storage-source';
import EO from 'ember-orbit';
import config from '../config/environment';

const LocalStorageStore = EO.Store.extend({
  orbitSourceClass: LocalStorageSource,
  orbitSourceOptions: {
    namespace: config.modulePrefix // n.s. for localStorage
  }
});

export function initialize(container, application) {
  Orbit.Promise = Ember.RSVP.Promise;
  application.register('schema:main', EO.Schema);
  application.register('store:main', LocalStorageStore);
  application.inject('controller', 'store', 'store:main');
  application.inject('route', 'store', 'store:main');
  application.inject('component', 'store', 'store:main');
}

export default {
  name: 'injectStore',
  initialize
};
