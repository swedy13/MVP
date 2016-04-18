// Note: The 'appX' session variable is defined in 'base.js'
Template.Base.helpers({
  // Detects window size before rendering content
  mobile() {
    // Mobile
    if (Session.get('appX') <= 700) {
      return true;
    }
    // Desktop
    else {
      return false;
    }
  }
});

Template.Body.helpers({
  // Detects window size before rendering content
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
