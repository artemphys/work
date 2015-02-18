$(document).ready(function() {
    $("*").not(".mapOverlay").click(function() {
        $(".mapOverlay").css({"pointerEvents":"auto"});
    });
});
