var app = {
	init: function() {
		app.toggleSidebar();
		app.resetSidebar();
	},
	
	menuIcon: $('.menu-icon'),
	appContainer: $('.app'),
	body: $('body'),
	mask: $('.mask'),
	main: $('.main'),

	// Sidebar
	
	toggleSidebar: function() {
		app.menuIcon.on('click', function() {
			app.appContainer.toggleClass('app--sidebar-open');
			app.body.toggleClass('overflow-none');
			app.main.toggleClass('overflow-none');
			app.activateMask();
		});
	},
	resetSidebar: function() {
		// If user resizes the window > 575px and sidebar is open,
		// Remove class to readjust components into its correct position  
		$(window).resize(function() {
			if ($(window).width() > 575 && app.appContainer.hasClass('app--sidebar-open')) {
				app.appContainer.removeClass('app--sidebar-open');
				app.body.removeClass('overflow-none');
				app.deactivateMask();
			}
		});
	},
	activateMask: function () {
		app.mask.toggleClass('mask--active');
	},
	deactivateMask: function () {
		app.mask.removeClass('mask--active');
	}
}

$(document).ready(app.init);
	