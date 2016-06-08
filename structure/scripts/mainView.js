define(['marionette', 'handlebars', 'fileLayoutView', 'fileCollection', 'fileRootView'],
	function (Mnt, Hbs, FileLayoutView, FileCollection, FileRootView) {
    return Mnt.ItemView.extend({
      template: false,
      initialize: function(options) {
        _.extend(this, options);
        this.mainLayout = new FileLayoutView({
          el: this.el
        });
        this.mainLayout.render();
      },
      onRender: function() {
        var fileCollection = new FileCollection();
        fileCollection.fetch();
				this.mainLayout.content.show(new FileRootView({
					collection: fileCollection
				}));
      }
    });
  }
);
