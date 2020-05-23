$(document).ready(function() {
	$('.mobile').on('click', function(){
		$('.mobile-nav').toggleClass('open');
		$('.mobile > i').toggleClass('mobile-icon')
	
	})
});