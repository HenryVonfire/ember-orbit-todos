import Ember from 'ember';

const {
  set,
  getWithDefault,
  Component
  } = Ember;

export default Component.extend({
  keyPress(e) {
    if (e.which === 13) {
      this.sendAction('action',getWithDefault(this,'value',''));
      set(this,'value','');
    }
  }
});
