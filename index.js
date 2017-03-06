$(document).ready()
$('.readmore').on('click', function(){
event.preventDefault() 

	$('#show-this-on-click').slideDown();
	$('.readmore').hide();
	$('.readless').show();

});

$('.readless').on('click', function(){
	$('.readless').hide();
	$('.readmore').show();
	$('#show-this-on-click').slideUp();

});


$(document).ready()
$('.learnmore').on('click', function(){
event.preventDefault() 

	$('#learnmoretext').slideDown();
	$('.learnmore').hide();
	

});