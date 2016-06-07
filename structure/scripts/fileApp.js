define(["marionette", "mainView"],
	function (Mnt, MainView) {
		var app = new Mnt.Application();
		app.addRegions({
			body: "body"
		});
		app.on("start", function() {
			this.body.show(new MainView());
		});
		return app;
	}
);
