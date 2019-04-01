jQuery(function ($) {

    
    //Closes sidebar when X is clicked
    $("#close-sidebar").click(function () {
        $(".page-wrapper").removeClass("toggled");
    });

    //Opens sidebar when hamburger is clicked
    $("#show-sidebar").click(function () {
        $(".page-wrapper").addClass("toggled");
    });

    //Closes sidebar when page other than sidebar is clicked
    $(document).ready(function () {
        $(".page-content").click(function () {
            $(".page-wrapper").removeClass("toggled");
        });
    });

});


