define(['marionette', 'handlebars', 'fileCollection'],
	function (Mnt, Hbs, FileCollection) {
		return Mnt.CompositeView.extend({
			template: Hbs.compile($('#item').html()),
			tagName: 'li',
      childViewContainer: '.subcategories',
			initialize: function(options) {
				_.extend(this, options);
				if (_.isEmpty(this.collection)) {
					var children = this.model.get('children');
					this.collection = _.isEmpty(children) ? null : new FileCollection(children);
				}
			},
			onRender: function() {
				this.$('.subcategories:first').sortable({ axis: 'y' });
				this.model.get('children') ? this.$el.find('.category-name').addClass('folder-icon') :
																		 this.$el.find('.category-name').addClass('file-icon');
			}
			// attachView: function(collectionView, childView, index) {
			// 	collectionView.$('ul:first').append(childView.el);
			// }
    });
  }
);
