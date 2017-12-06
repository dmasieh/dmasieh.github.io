$( document ).ready(function() {
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible('open', 0);
    $('.carousel').carousel();
    autoplay()   
	function autoplay() {
    	$('.carousel').carousel('next');
    	setTimeout(autoplay, 6000);
	}
    $('.tooltipped').tooltip({delay: 50});
    $('.materialboxed').materialbox();
});