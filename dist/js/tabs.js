$(document).ready(function(){
	
	$('.tabs__link').click(function(e){
		e.preventDefault();
		const tab_id = $(this).attr('href');

		$('.tabs__link').removeClass('active');
		$('.tabs__content').removeClass('active');

		$(this).addClass('active');
		$(tab_id).addClass('active');
	})

})