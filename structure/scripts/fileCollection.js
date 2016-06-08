define(['backbone', 'underscore', 'fileModel'],
	function (Backbone, _, FileModel) {
		return Backbone.Collection.extend({
      model: FileModel,
			fetch: function(size, autoSort){
				var newCollection = [{
				  "id": 1001,
				  "name": "funis",
				  "size": "KB",
				  "children": true
				}, {
				  "id": 1002,
				  "name": "stipes",
				  "size": "KB"
				}, {
				  "id": 1003,
				  "name": "foliolum",
				  "size": "KB",
				  "children": true
				}, {
				  "id": 1004,
				  "name": "caballus",
				  "size": "KB"
				}];

		    this.add(newCollection, {sort: autoSort});
		  }
    });
  }
);
