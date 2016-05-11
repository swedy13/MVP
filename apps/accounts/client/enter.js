Template.AccountsEnter.events({
  'click .signin': function() {
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();

    Meteor.loginWithPassword(email, password, function(error) {
      if (error) {
        console.log(error.reason);
      }
    });
  },

  'click .signup': function() {
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();

    Accounts.createUser({
      email: email,
      password: password
    }, function(error) {
      if (error) {
        console.log(error.reason);
      }
    });
    console.log('complete');
  }
});
