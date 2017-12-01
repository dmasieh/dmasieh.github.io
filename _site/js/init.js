$( document ).ready(function() {
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible('open', 0);
    $('#closecollap').collapsible('close', 0);
    $('.carousel').carousel();
    $('.tooltipped').tooltip({delay: 50});
});