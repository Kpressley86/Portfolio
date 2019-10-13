$(document).ready(function(){

    // HIDES SMOKE DIV FOR BETTER DISPLAY //
    $(function() {
        setTimeout(function() {
            $("#smoke").hide('blind', {}, 500)
        }, 5000);
    });

    // SLIDE IN HIDDEN CLASSES //
    $('.hidden').hide("fast",function(){
        $(".hidden").show(6000);
        });



});