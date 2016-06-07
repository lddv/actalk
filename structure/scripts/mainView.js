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
        var _this = this;
        var fileCollection = new FileCollection();
        // this.mainLayout.header.show(new FileHeaderView());
        fileCollection.fetch({
          dataType: "jsonp",
          success: function(col, response) {
            _this.mainLayout.content.show(new FileRootView({
              collection: col
            }));
          }
        });
      }
    });
  }
);
