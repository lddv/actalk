define(['marionette', 'handlebars', 'fileCollection'],
	function (Mnt, Hbs, FileCollection) {
		return Mnt.CompositeView.extend({
			template: Hbs.compile($('#item').html()),
			tagName: 'li',
      childViewContainer: '.subcategories',

			events: {
				'click .item-value': 'getData',
				'click .remove-item-button': 'removeData'
			},
			initialize: function(options){
				this.collection = options.collection ? options.collection : new FileCollection();
			},
			removeData: function(e){
				e.preventDefault();
				e.stopPropagation();
				if (!this.model.get('rootElement')) {
					this.model.collection.remove(this.model);
				}
			},
			getData: function(e){
				e.preventDefault();
				e.stopPropagation();
				this.collection.fetch(this.model.get('value'));
			},
			onRender: function() {
				this.model.get('children') ? this.$el.find('.category-name').addClass('folder-icon remove-item-button item-value') :
																		 this.$el.find('.category-name').addClass('file-icon');
			}
    });
  }
);
