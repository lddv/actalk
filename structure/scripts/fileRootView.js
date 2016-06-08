define(['marionette', 'fileTreeView'],
	function (Mnt, FileTreeView) {
		return Mnt.CollectionView.extend({
      childView: FileTreeView,
      tagName: 'ul',
			initialize: function(options){
				this.collection = options.collection;
				this.collection.forEach(function(model){
					model.set('rootElement', true);
				});
			}
    });
  }
);
