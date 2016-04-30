Template.NavMenu.helpers({
  disabled() {
    if (!Meteor.Id) {
      return 'disabled';
    }
  },

  invisible() {
    if (!Meteor.Id) {
      return 'invisible';
    }
  }
});

Template.NavMenu.events({
  'click': (event) => {
    const target = $(event.target);
    const li = target.closest('li');

    // Only closes when:
    // A) non-disabled menu link is clicked
    // B) click outside menu
    if (target.hasClass('navmenu') ||
        !(target.hasClass('navmenu-container') ||
          li.hasClass('active') || li.hasClass('disabled')))
    {
      $('.navmenu').fadeOut(100);
      $('.navmenu-container').css('transform', 'translateX(-100%)');            
    }
  }
});
