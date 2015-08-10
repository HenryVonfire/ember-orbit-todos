import Ember from 'ember';

const {
  get,
  Controller
  }= Ember;

export default Controller.extend({
  content: [],

  /*remaining: function() {
    return get(this,"model.length") - get(this,"completed");
  }.property('@each.isDone', 'model.length'),

  completed: function(){
    const model = this.store.filter(function(model){
      return model.isDone;
    });
    return model.length;
    //return this.filterProperty('isDone', true).get('length');
  }.property('@each.isDone'),

  isEmpty: function() {
    return this.get('length') === 0;
  }.property('length'),

  allAreDone: function(key, value) {
    if (arguments.length === 2) {
      this.setEach('isDone', value);

      return value;
    } else {
      return !this.get('isEmpty') && this.everyProperty('isDone', true);
    }
  }.property('@each.isDone'),*/

  actions: {
    createToDo: function(title) {
      this.store.add('todo', { title: title });
    },

    clearCompletedTodos: function() {
      console.log(get(this,'model'));
      //this.filterProperty('isDone', true).forEach(this.removeObject, this);
    }
  }
});
