define(['backbone', 'underscore', 'fileModel'],
	function (Backbone, _, FileModel) {
		return Backbone.Collection.extend({
      model: FileModel,
      url: 'http://www.mocky.io/v2/57348812110000d22eba0c18',
			parse: function(response) {
				return _.isEmpty(response.data) ? {} : response.data;
			}
    });
  }
);
