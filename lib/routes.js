FlowRouter.route('/', {
  name: 'home',
  triggersEnter(context, redirect) {
    redirect('subscriptions');
  },
  action() {
    BlazeLayout.setRoot('body');
    BlazeLayout.render('Base', {main: 'Subscriptions'});
  }
});

FlowRouter.route('/subscriptions', {
  name: 'subscriptions',
  action() {
    BlazeLayout.setRoot('body');
    BlazeLayout.render('Base', {main: 'Subscriptions'});
  }
});

FlowRouter.route('/top-scores', {
  name: 'top-scores',
  action() {
    BlazeLayout.setRoot('body');
    BlazeLayout.render('Base', {main: 'TopScores'});
  }
});
