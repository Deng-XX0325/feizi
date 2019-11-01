


$(function() {
    $(".magnify").click(function() {
        $(this).after("<div onclick='closeImg()' class='PhotoZoom'></div>");
        var imgSrc = $(this).attr('src');
        let heit = $(window).height();
        let imgH = $(this).height();
        let $zoom =  $(".PhotoZoom");
        if(imgH>heit){
            $zoom.css("background-image", "url(" + imgSrc + ")");
            $zoom.css("background-size","18rem");
            $zoom.fadeIn(200);
        }else{
            $zoom.css("background-image", "url(" + imgSrc + ")");
            $zoom.fadeIn(200);
        }
    })
});
function closeImg() {
    $('.PhotoZoom').fadeOut(200).remove();
}