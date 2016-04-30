Package.describe({
<<<<<<< HEAD
		name: 'themes-base',
		version: '0.0.1',
		summary: 'Mythros base theme',
		git: '',
		documentation: 'README.md'
=======
  name: 'themes-base',
  version: '0.0.1',
  summary: 'Mythros base theme',
  git: '',
  documentation: 'README.md'
>>>>>>> 99bee4fff07a6a0b89072c51e8eec92b93f5358e
});


Package.onUse(function(api) {
<<<<<<< HEAD

		api.versionsFrom('1.3.1');

		api.use(['ecmascript', 'templating', 'mquandalle:stylus', 'fortawesome:fontawesome']);

		/* CSS */
		api.addFiles('lib/main.styl', 'client');
		/* HTML */
		api.addFiles([
				'lib/framework/templates/Body.html',
				'lib/framework/templates/Footer.html',
				'lib/framework/templates/Base.html',
				'lib/framework/templates/Nav.html',
				'lib/framework/templates/NavMenu.html',
				'lib/framework/templates/NavSub.html',
				'lib/framework/templates/Navbar.html',
				'lib/framework/templates/Sidebar.html'
		], 'client');
		/* JS */
		api.addFiles([
				'lib/framework/js/main.js',
				'lib/framework/js/navBar.js',
				'lib/framework/js/navMenu.js'
		], 'client')
=======
  
  api.versionsFrom('1.3.1');
  
  api.use(['ecmascript', 'templating', 'mquandalle:stylus', 'fortawesome:fontawesome']);

  /* CSS */
  api.addFiles('lib/main.styl', 'client');
  /* HTML */
  api.addFiles([
    'lib/framework/templates/Body.html',
    'lib/framework/templates/Footer.html',
    'lib/framework/templates/Base.html',
    'lib/framework/templates/Nav.html',
    'lib/framework/templates/NavMenu.html',
    'lib/framework/templates/NavSub.html',
    'lib/framework/templates/Navbar.html',
    'lib/framework/templates/Sidebar.html'
  ], 'client');
  /* JS */
  api.addFiles([
    'lib/framework/js/main.js',
    'lib/framework/js/navBar.js',
    'lib/framework/js/navMenu.js'
  ], 'client')
>>>>>>> 99bee4fff07a6a0b89072c51e8eec92b93f5358e
});


/* Package.onTest(function(api) {
<<<<<<< HEAD
			api.use('ecmascript');
			api.use('tinytest');
			api.use('themes-base');
			api.mainModule('themes-base-tests.js');
			}); */
=======
   api.use('ecmascript');
   api.use('tinytest');
   api.use('themes-base');
   api.mainModule('themes-base-tests.js');
   }); */
>>>>>>> 99bee4fff07a6a0b89072c51e8eec92b93f5358e
