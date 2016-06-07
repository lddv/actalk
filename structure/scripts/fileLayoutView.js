// , 'text!templates/view.hbs'
define(['marionette', 'handlebars'],
	function (Mnt, Hbs) {
    return Mnt.LayoutView.extend({
      template: Hbs.compile($('#global').html()),
			el: 'body',
			regions: {
				content: '#content'
			}
    });
  }
);
