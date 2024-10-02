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
        "simple exercise": "#exercises",
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
      const headerHeight = 150;
      switch (page) {
          case "index.html":
              $('html, body').animate({
                  scrollTop: $("#slider").offset().top - headerHeight
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


  
  $(document).ready(function() {
      // Ketika checkbox diklik
      $('input[type="checkbox"]').click(function() {
          // Jika checkbox dicentang
          if ($(this).is(':checked')) {
              // Tambahkan garis coret pada label
              $(this).next('label').css('text-decoration', 'line-through');
          } else {
              // Jika checkbox tidak dicentang, hilangkan garis coret
              $(this).next('label').css('text-decoration', 'none');
          }
      });
});

