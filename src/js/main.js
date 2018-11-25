var app = {
	init: function() {
		app.toggleSidebar();
		app.resetSidebar();
	},
	
	// Sidebar
	menuIcon: $('.menu-icon'),
	appContainer: $('body'),
	toggleSidebar: function() {
		app.menuIcon.on('click', function() {
			app.appContainer.toggleClass('show-sidebar');
		});
	},
	resetSidebar: function() {
		// If user resizes the window > 575px and sidebar is open,
		// Remove class to readjust components into its correct position  
		$(window).resize(function() {
			if ($(window).width() > 575) {
				app.appContainer.removeClass('show-sidebar');
			}
		});
	}
}

$(document).ready(app.init);
	