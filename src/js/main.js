var app = {
	init: function() {
		app.toggleSidebar();
	},

	// Sidebar
	menuIcon: $('.menu-icon'),
	appContainer: $('.app'),
	toggleSidebar: function() {
		app.menuIcon.on('click', function() {
			app.appContainer.toggleClass('app--sidebar-open');
		});
	}
}

$(document).ready(app.init);
