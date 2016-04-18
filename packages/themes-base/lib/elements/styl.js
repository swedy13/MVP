if (Meteor.isClient) {

  Template.Base.events({
    'click li': (event) => {
      const self = $(event.target).closest('li');
      const siblings = self.siblings('li');

      if (!self.hasClass('active') &&
          !self.hasClass('disabled') &&
          siblings.hasClass('active'))
      {
        siblings.removeClass('active');
        self.addClass('active');
      }
    }
  });
}
