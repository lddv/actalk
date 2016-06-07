define(['marionette', 'fileTreeView'],
	function (Mnt, FileTreeView) {
		return Mnt.CollectionView.extend({
      childView: FileTreeView,
      tagName: 'ul'
    });
  }
);
