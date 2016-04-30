Package.describe({
				name: 'theme',
				version: '0.0.1',
				summary: 'Mythros theme',
				git: '',
				documentation: 'README.md'
});

Package.onUse(function(api) {

				api.versionsFrom('1.3.2.4');

				api.use(['ecmascript', 'mquandalle:stylus', 'fortawesome:fontawesome']);

				api.addFiles([
								'lib/main.styl',
								'lib/Theme.jsx'
				], 'client');

				api.export('Theme');

				/*api.mainModule('theme.js');*/
});


/*Package.onTest(function(api) {
	*				api.use('ecmascript');
	*				api.use('tinytest');
	*				api.use('theme');
	*				api.mainModule('theme-tests.js');
	*});*/
