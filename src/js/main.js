var app = {
	init: function() {
		app.toggleSidebar();
		app.resetSidebar();
	},
	
	// Sidebar
	menuIcon: $('.menu-icon'),
	appContainer: $('.app'),
	toggleSidebar: function() {
		app.menuIcon.on('click', function() {
			app.appContainer.toggleClass('app--sidebar-open');
		});
	},
	resetSidebar: function() {
		// If user resizes the window > 575px and sidebar is open,
		// Remove class to readjust components into its correct position  
		$(window).resize(function() {
			if ($(window).width() > 575) {
				app.appContainer.removeClass('app--sidebar-open');
			}
		});
	}
}

$(document).ready(app.init);
	