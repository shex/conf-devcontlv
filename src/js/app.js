App = Ember.Application.create();

App.Router.map(function() {
  this.resource("pages", { path: "/pages" });
  this.resource("pics", { path: "/pics" });
});

App.PagesRoute = Ember.Route.extend({
  model: function() {
    return ['PageOne', 'PageTwo', 'PageThree'];
  }
});

App.PicsRoute = Ember.Route.extend({
  model: function() {
    return ['PicOne', 'PicTwo', 'PicThree'];
  }
});



App.PagesController = Ember.Controller.extend({
  actions: {
    approvePage: function (id) {
      console.log('Approve page with id', id);
    }
  }
});

App.PicsController = Ember.Controller.extend({
  actions: {
    approvePic: function (id) {
      console.log('Approve picture with id', id);
    }
  }
});

App.PageView = Ember.View.extend({
  classNames: ['page'],
  templateName: 'page'
});

App.PicView = Ember.View.extend({
  classNames: ['pic'],
  templateName: 'pic'
});

App.PlusOneComponent = Ember.Component.extend({
  classNames: ['plus-one'],
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
