FlowRouter.route('/', {
  action() {
    BlazeLayout.setRoot('body');
    BlazeLayout.render('Base');
  }
});
