$(document).ready(function(){
    //JS UNTUK NAV BAR
    //get url parts pake pop biar dapet yang terakhir
    var page = window.location.pathname.split("/").pop();
    //function buat iterasi ke tiap link di navbar
    $(".nav_bar a").each(function(){
        var link = $(this).attr("href");
       //cek apakah sama dengan page yang sekarang di select
        if(link === page){
            $(".nav_bar a").removeClass("nav_active")
            $(this).addClass("nav_active");
        }
    });

    //JS UNTUK CAROUSEL
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = $(".mySlides");
        let dots = $(".dot");
        slides.hide(); 
        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        } 

        dots.removeClass("active"); 
        $(slides[slideIndex - 1]).show(); 
        $(dots[slideIndex - 1]).addClass("active"); 
    }

    setInterval(function() {
        showSlides();
    }, 5000);

    //JS UNTUK BUTTON RECIPES
    $(".button1").click(function(){
        window.location.href = "recipes.html";
    })
});
