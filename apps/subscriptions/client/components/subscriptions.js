Template.NavMenu.helpers({
  subsPath: function() {
    var routeName = "subscriptions";
    var path = FlowRouter.path(routeName);

    return path;
  }
});
