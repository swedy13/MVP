if (Meteor.isClient) {
				// Detects window size before rendering content
				Session.setDefault('appX', $(window).width());
				$(window).resize(_.debounce(function() {
								Session.set('appX', $(window).width());
				}, 300));
}
