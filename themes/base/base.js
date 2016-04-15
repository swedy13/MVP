// Detects window size before rendering content
if (Meteor.isClient) {
  Session.setDefault('appX', $(window).width());  
  $(window).resize(_.debounce(function() {
    Session.set('appX', $(window).width());
  }, 300));
  
  Template.Base.helpers({
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
}
