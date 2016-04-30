Template.AccountsExit.events({
  'click .signout': function() {
    console.log('click');
    Meteor.logout();
  }
});
