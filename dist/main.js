var app = {
	init: function() {
		app.toggleSidebar();
	},
	
	// Sidebar
	menuIcon: $('.menu-icon'),
	appContainer: $('body'),
	toggleSidebar: function() {
		app.menuIcon.on('click', function() {
			app.appContainer.toggleClass('show-sidebar');
		});
	}
}

$(document).ready(app.init);
