iris.screen(function(self) {
	self.create = function() {
		self.tmpl(iris.path.welcome.html);

		self.screens('screens',
			[
				[ 'apis', iris.path.screens.apis.js]
			]
			);
		
		
	}

	self.awake = function() {
		iris.navigate('#/apis');
	}

}, iris.path.welcome.js);