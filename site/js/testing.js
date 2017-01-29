//dev script for testing active panel states
$(function() {
	$(document).click(function () {
	  $('.page-container').each(function(){
	    var classes = ['intro-panel-active page-container','work-panel-active page-container','about-panel-active page-container', 'focus-panel-active page-container', 'contact-panel-active page-container'];
	    this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
	  });
	});
})
