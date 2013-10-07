App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.IndexController = Ember.Controller.extend({
  actions: {
    approvePage: function (id) {
      console.log('Approve page with id', id);
    }
  }
});

App.PlusOneComponent = Ember.Component.extend({
  classNameBindings: ['isEnabled:enabled:disabled'],
  isEnabled: true,
  actions: {
    makePlusOne: function () {
      if (this.get('isEnabled')) {
        this.toggleProperty('isEnabled');
        this.sendAction('action', this.get('id'));
      }
    }
  }
});
