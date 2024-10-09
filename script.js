$(document).ready(function(){
    //JS UNTUK NAV BAR
    //get url parts pake pop biar dapet yang terakhir
    var page = window.location.pathname.split("/").pop();
    //function buat iterasi ke tiap link di navbar
    $(".nav_bar a").each(function(){
        var link = $(this).attr("href");
        var recipes = $('.nav_bar a[href="recipes.html"]');
      //untuk navbar recepies
        if(page === "breakfast.html" || page === "lunch.html" ||   page === "dinner.html" ||  page === "snacks.html" ||  page === "gluten.html" ||  page === "salad.html") {
          $(".nav_bar a").removeClass("nav_active")
            $(recipes).addClass("nav_active");
        }
        //cek apakah sama dengan page yang sekarang di select
        if(link === page){
            $(".nav_bar a").removeClass("nav_active")
            $(this).addClass("nav_active");
        }
    });

    //function untuk expanded search bar
    $(".search-container i").click(function(){
        const searchInput = $(".search-container input[type='text']");
        searchInput.focus();
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
        //manggil functuin show slides
        showSlides();
    }, 5000);

    //JS UNTUK BUTTON RECIPES
    $(".button1").click(function(){
        window.location.href = "recipes.html";
    })

    //JS UNTUK BUTTON EXERCISE
    $(".button2").click(function(){
        window.location.href = "exercise.html";
    })

    //JS UNTUK BUTTON BMI
    $(".button3").click(function(){
        window.location.href = "bmi.html";
    })

    //JS UNTUK BUTTON STORY
    $(".button4").click(function(){
        window.location.href = "https://www.myheart.org.sg/beneficiaries/from-hypertension-to-heart-attack-how-survivors-embrace-the-new-norm/";
    })

    //funtion untuk search
    //Daftar keyword dan id section yang sesuai
    const keywordMap = {
        "noncommunicable diseases": "#noncommunicable_diseases",
        "serangan jantung": "#heart_attack",
        "heart attack": "#heart_attack",
        "diabetes": "#diabetes",
        "diabetes type": "#type",
        "healthy lifestyle": "#healty_lifestyle",
        "exercise": "#exercise",
        "sleep": "#sleep",
        "stress": "#stress",
        "smoke": "#smoking",
        "exercise tips": "#tips",
        "exercise for older people": "#exercises-seniors",
        "exercise routine": "#exercises-routines",
        "sarapan" : "#recipe-index",
        "breakfast" : "#recipe-index",
        "lunch" : "#recipe-index",
        "makan siang" : "#recipe-index",
        "makan malam" : "#recipe-index",
        "dinner" : "#recipe-index",
        "snacks" : "#recipe-index",
        "gluten free" : "#recipe-index",
        "bebas gluten" : "#recipe-index",
        "salad" : "#recipe-index",
        "sayur" : "#recipe-index",
        "high calories" : "#calories",
        "low calories" : "#calories",
        "kalori" : "#calories",
        "kalori rendah" : "#calories",
        "kalori tinggi" : "#calories",
        "tinggi kalori" : "#calories",
        "rendah kalori" : "#calories",
    };

    $(".search-container input[type='text']").on('keypress', function(e) {
        //13 = asci enter
        if (e.which === 13) { 
            const keyword = $(this).val().toLowerCase(); 
            const headerHeight = 150;
            //if keyword ada di keyword map
            if (keywordMap[keyword]) {
                $('html, body').animate({
                scrollTop: $(keywordMap[keyword]).offset().top - headerHeight
                }, 800);
            } else {
                alert("Hasil Pencarian Tidak Ada");
            }
        }
    });
    
    // back to top
    $(".back-to-top").click(function() {
      console.log("Back-to-top button clicked!");
      const headerHeight = 200;
      switch (page) {
          case "index.html":
              $('html, body').animate({
                  scrollTop: $("#slider").offset().top 
              }, 500);  
              break;
          case "exercise.html":
              $('html, body').animate({
                  scrollTop: $("#tips").offset().top - headerHeight
              }, 500);  
              break;
            case "recipes.html":
              $('html, body').animate({
                  scrollTop: $("#recipe-index").offset().top - headerHeight
              }, 500);  
              break;
            case "bmi.html":
              $('html, body').animate({
                  scrollTop: $(".bmi-container").offset().top - headerHeight
              }, 500);  
              break;
            case "breakfast.html":
              $('html, body').animate({
                  scrollTop: $(".title").offset().top - headerHeight
              }, 500);  
              break;
            case "lunch.html":
              $('html, body').animate({
                  scrollTop: $(".title").offset().top - headerHeight
              }, 500);  
              break;
            case "dinner.html":
              $('html, body').animate({
                  scrollTop: $(".title").offset().top - headerHeight
              }, 500);  
              break;
            case "snacks.html":
              $('html, body').animate({
                  scrollTop: $(".title").offset().top - headerHeight
              }, 500);  
              break;
            case "gluten.html":
              $('html, body').animate({
                  scrollTop: $(".title").offset().top - headerHeight
              }, 500);  
              break;
            case "salad.html":
              $('html, body').animate({
                  scrollTop: $(".title").offset().top - headerHeight
              }, 500);  
              break;
            case "pumpkinbread.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "bananabread.html":
                $('html, body').animate({
                    scrollTop: $("#why-love").offset().top - headerHeight
                }, 500);  
                break;
            case "beefstew.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
             case "berriessmoothie.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
             case "broccolisalad.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
             case "caesardress.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "chickencaesar.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "chickensatay.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "chickentacos.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "croutons.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "dinner.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "eggcasserole.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "eggmuffin.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "eggsaladcado.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "fudgybrownie.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "herbchicken.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "honeywings.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "italiandress.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "italianpasta.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "lemonshrimp.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "maplechicken.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "mashedpotato.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "potatobites.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "pumpkinbar.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "roastedsalad.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "roastedveggie.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "saladtoast.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "turkeymeetball.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
            case "veggiesrolls.html":
              $('html, body').animate({
                  scrollTop: $("#why-love").offset().top - headerHeight
              }, 500);  
              break;
          default:
              console.log("No matching page");
      }
    });

  
    //BMI Calculator
      const bmiText = $("#bmi");
      const descText = $("#desc");
      const form = $("form");
    
      // Reset function
      function onFormReset() {
        bmiText.text(0);
        bmiText.removeClass(); 
        descText.html("N/A");
      }
    
      // Submit function
      function onFormSubmit(e) {
        e.preventDefault();
    
        const weight = parseFloat($("#weight").val());
        const height = parseFloat($("#height").val());
    
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
          alert("Please enter a valid weight and height");
          return;
        }
    
        const heightInMeters = height / 100; 
        //rumus bmi
        const bmi = weight / Math.pow(heightInMeters, 2);
        const desc = interpretBMI(bmi);
    
        bmiText.text(bmi.toFixed(2));
        bmiText.addClass(desc); 
        descText.html(`You are <strong>${desc}</strong>`);
      }
    
      function interpretBMI(bmi) {
        if (bmi < 18.5) {
          return "underweight";
        } else if (bmi < 25) {
          return "healthy";
        } else if (bmi < 30) {
          return "overweight";
        } else {
          return "obese";
        }
      }
      
      // Event listeners
      form.on("submit", onFormSubmit);
      form.on("reset", onFormReset);

      //SCROLL ANIMATION
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.target.className != 'slider' && entry.target.className != 'search-container' && entry.target.className != 'icon'){
              if(entry.isIntersecting) {
                entry.target.classList.add("in-view");
                entry.target.classList.remove("not-in-view");
              }
              else {
                entry.target.classList.remove("in-view");
                entry.target.classList.add("not-in-view");
              }
            }
          })
        },
        {
          rootMargin: '0px',
          threshold: [0, 0.1, 1],
        }
      )

      const tag = document.querySelectorAll(".title, div");
      tag.forEach((tag) => {
        observer.observe(tag)
      })
});


  // Sorting Button Functionality
  $(".sort-btn").click(function() {
      let sortType = $(this).data('sort');
      if (sortType === 'default') {
          // Implement sorting logic for 'Workout at Home'
          console.log("Sorting by Workout at Home");
      } else if (sortType === 'name') {
          // Implement sorting logic for 'Simple Workout'
          console.log("Sorting by Simple Workout");
      }

});

  //Sorting untuk exercises
  $(".sorting").click(function() {
    $("#exercises-routines").hide();
    $("#exercises-seniors").show();
  });
  $(".sorting1").click(function() {
    $("#exercises-seniors").hide();
    $("#exercises-routines").show();
  });
// Menampilkan semua exercises
$(".sorting2").click(function() {
  $("#exercises-routines").show();
  $("#exercises-seniors").show();
});

 //fungsi js untuk checbox ingredients recipes 
  $(document).ready(function() {
    $('input[type="checkbox"]').click(function() {
        if ($(this).is(':checked')) {
            $(this).next('label').css({
                'text-decoration': 'line-through',
                'margin-left': '10px' 
            });
            $(this).addClass('checked');
        } else {
            $(this).next('label').css({
                'text-decoration': 'none',
                'margin-left': '10px' 
            });
            $(this).removeClass('checked');
        }
    });
    // Tambahkan jarak default pada semua label di awal
    $('input[type="checkbox"]').next('label').css('margin-left', '8px');
});

//JS untuk filtering calories in recipes
$(document).ready(function() {
  $('.recipe').show();
  $('.calorie-button').click(function() {
      var filter = $(this).data('filter');
      
      if (filter === 'all') {
          $('.recipe').show(); 
      } else if (filter === 'low') {
          $('.recipe').hide(); 
          $('.low').show();    
      } else if (filter === 'high') {
          $('.recipe').hide(); 
          $('.high').show();   
      }
  });
});



