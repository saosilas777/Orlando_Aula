$(document).ready(function () {
    $("#logo-header").on("mouseover", function () {
        //    $("#banner h1").css({"color": "red", "font-size": "2em","transition": "1s"});
        $("#banner h1").addClass("efeito");

    }).on("mouseout", function () {
        $("#banner h1").removeClass("efeito");
    });
    $("#search-input").on("focus", function () {
        $("#search-input").addClass("efeito-focus");
    })
    $("#search-input").on("blur", function () {
        $("#search-input").removeClass("efeito-focus");
    })
});
$(".thumbnails").owlCarousel({
    loop: true,
    margin: 10,
    navigation: true,

    navigationText: ["Anterior", "Proximo"],
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 3
        },
        768: {
            items: 12
        }
    }

});

$(function(){
    $(".thumbnails .items").on("click", function(){
        console.log($(this).data("video"));
        $("video").attr({"src":"mp4/"+$(this).data('video')+".mp4","poster":"images/"+$(this).data('video')+".jpg"});
    });
});