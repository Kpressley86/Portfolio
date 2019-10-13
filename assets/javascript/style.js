$(document).ready(function(){

    // HIDES SMOKE DIV FOR BETTER DISPLAY //
    $(function() {
        setTimeout(function() {
            $("#smoke").hide('blind', {}, 500)
        }, 5000);
    });

    // DISPLAYS MAIN PAGE INFO //
    $('.hidden').hide("fast",function(){
        $(".hidden").show(6000);
        });



});