if (Meteor.isClient) {
  
  Template.Main.helpers({
    // Detects window size before rendering content
    // Note: The 'appX' session variable is defined in 'base.js'
    mobile() {
      if (Session.get('appX') <= 700) {
        return true;
      }
    },

    tablet() {
      if (Session.get('appX') <= 1024) {
        return true;
      }
    }
  });
}
