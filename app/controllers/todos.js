import Ember from 'ember';

const {
  set,
  get,
  computed,
  Controller
  }= Ember;

export default Controller.extend({
  remaining: computed('model.@each.isDone', 'model.length',function() {
    const model = get(this,'model');
    const doneModel = model.filter(function(item){
      return item.get('isDone');
    });
    return model.get('length') - doneModel.get('length');
  }),

  isEmpty: computed('model.length',function() {
    return get(this,'model.length') === 0;
  }),

  allAreDone: computed('model.@each.isDone',{
    set(key,value){
      const model = get(this,'model');
      if (arguments.length === 2) {
        model.forEach(function(item){
          set(item,'isDone', true);
        });
        return value;
      }
    },
    get(){
      const model = get(this,'model');
      return !get(this,'isEmpty') && model.isEvery('isDone', true);
    }
  }),

  actions: {
    createToDo: function(title) {
      this.store.add('todo', { title: title, isDone:false });
    },

    clearCompletedTodos: function() {
      const model = get(this,'model');
      const self = this;
      model.forEach(function(item){
        if(item.get('isDone')){
          self.store.remove('todo',item);
        }
      });
    }
  }
});
