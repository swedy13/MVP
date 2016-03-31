if (Meteor.isClient) {
  Template.Navbar.events({
    'click .logo': function() {
      console.log('click');
      if ($('.navmenu').css('display') == 'none') {
        $('.navmenu').fadeIn(100);
        $('.navmenu-container').css('transform', 'translateX(0)');
      }
      else {
        $('.navmenu').fadeOut(100);
        $('.navmenu-container').css('transform', 'translateX(-100%)');
      }
    }
  });
}
