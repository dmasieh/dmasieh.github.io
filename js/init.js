$( document ).ready(function() {
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible('open', 0);
    $('#closecollap').collapsible('close', 0);
    $('.carousel').carousel();
    autoplay()   
	function autoplay() {
    	$('.carousel').carousel('next');
    	setTimeout(autoplay, 5500);
	}
    $('.tooltipped').tooltip({delay: 50});
});