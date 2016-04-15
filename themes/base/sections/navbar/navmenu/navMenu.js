if (Meteor.isClient) {

  Template.NavMenu.events({
    'click': function(event) {
      if ($(event.target).is('.navmenu')) {
        $('.navmenu').fadeOut(100);
        $('.navmenu-container').css('transform', 'translateX(-100%)');
      }
    },
    'click .username > span': function() {
      $('.navmenu').fadeOut(100);
      $('.navmenu-container').css('transform', 'translateX(-100%)');
    },
    'click li': function(event) {
      var target = $(event.target);
      var parent = target.parent();

      console.log($(event.target).parent());
      
      if (target.is('.disabled') || parent.is('.disabled')) {
        // do nothing
      }
      else {
        $('.navmenu').fadeOut(100);
        $('.navmenu-container').css('transform', 'translateX(-100%)');
      }
    }
  });
}
