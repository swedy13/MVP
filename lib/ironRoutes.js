/* Router.configure({
   layoutTemplate: 'Base'
   });

   Router.route('/', {
   template: 'SubscriptionsSB'
   });
   ActiveRoute.path('/');

   Router.route('/SubscriptionsSB');

   Router.route('/TopScoresSB');
   Router.route('/MyScoresSB');
   Router.route('/StatsSB');

   Router.route('/ProfileSB');
   Router.route('/ConnectionsSB');
   Router.route('/AchievementsSB');

   Router.route('/Help');
   Router.route('/Settings');

   Router.route('/AccountsEnter');
   Router.route('/AccountsExit');


   // Detects window size before rendering content
   if (Meteor.isClient) {
   $(window).resize(_.debounce(function() {
   Session.set('appX', $(window).width());
   }, 300));
   
   Template.Base.helpers({
   getContent: function() {
   if (Session.get('appX') <= 699) {
   return 'Mobile';
   }
   else if (Session.get('appX') <= 1024) {
   return 'Tablet';
   }
   else {
   return 'Desktop';
   }
   }
   });
   } */
