$(document).ready(function() {


    // ==== Aos Start

    AOS.init();

    // ==== Aos End






    //========== Nav Manu Active Start
    $('.nav-menu li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
    //========== Nav Manu Active End










    // Image Slider Start

    var screenWidth = $(window).width();
    var sepValue = 175; 

    if (screenWidth < 768) {
        sepValue = 50; 
    } else if (screenWidth < 1024) {
        sepValue = 155;
    };

    // Image Slider End






    //===== Sticky Menu Bar Start

    window.onscroll = function() {stickyNavbar()};

    var navbar = document.querySelector(".nav-area");
    
    var stickyPoint = 100;
    
    function stickyNavbar() {
      if (window.pageYOffset >= stickyPoint) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
    
    //===== Sticky Menu Bar End









    //==== Nav Menu Slider Start

        $('.nav_trigger').click(function(){
            $('.sidebar').addClass('slide_sidebar');
        })

        $('.nav_dismess, .sidebar .sidebar-menu a').click(function(){
            $('.sidebar').removeClass('slide_sidebar');
        })

    //==== Nav Menu Slider End








    

    // ==== Section Select Start
    $('.nav-menu a[href^="#"], .sidebar-menu a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        
        if (target.length) {
            var offset = $(window).width() < 768 ? 50 : 70;
    
            $('html, body').animate({
                scrollTop: target.offset().top - offset 
            }, 1000);
        }
    });
    // ==== Section Select End







    //====== Hero Banner Wraper Start
    $('.recent_work-wraper').owlCarousel({              
        items: 1,                 
        loop: true, 
        animateOut: 'fadeOut',    
        animateIn: 'fadeIn',     
        autoplay: true,
        autoplayTimeout: 5000, 
        smartSpeed: 450, 
        margin: 0,
        nav: false,
      });
      //====== Hero Banner Wraper Start







        
    //========== Services Box Start
    $(".services-box__header").click(function(e){
        e.preventDefault();
        $(this).next(".services-box__content").slideToggle(400); 
        $(this).find('.dropdown-arrow__btn').toggleClass('active');
        $(this).closest('.services-box').toggleClass('active');
    });
    //=============== Services Box End









    //=============== Project Card Start
    $('.project-card__wraper').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 2000,
        fluidSpeed: 2000,
        slideTransition: 'ease-in-out',
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    //=============== Project Card End











    //=============== Testimonial Card Start
    $('.testiomonial-card__wraper').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 2000,
        fluidSpeed: 2000,
        slideTransition: 'ease-in-out',
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1,
                stagePadding: 80
            },
            1000:{
                items:1,
                stagePadding: 150,
            }
        }
    });


    if ($('.testiomonial-card__wraper').hasClass('owl-loaded')) {
        console.log('Owl Carousel is initialized and loaded.');
    } else {
        console.log('Owl Carousel is not yet loaded.');
    }
    //=============== Testimonial Card End



    // ====== Copyright Text Start
    document.getElementById("year").textContent = new Date().getFullYear();
    // ====== Copyright Text End



});

    //========= Text Animation Start
    document.addEventListener("DOMContentLoaded", (event) => {
        
        function createScrollTrigger(triggerElement, timeline) {
            ScrollTrigger.create({
                trigger: triggerElement,
                start: "top bottom",
                onLeaveBack: () => {
                    timeline.progress(0);
                    timeline.pause();
                },
            });

            ScrollTrigger.create({
                trigger: triggerElement,
                start: "top 80%",
                onEnter: () => timeline.play(),
            });
        }

        const splitTypeElements = document.querySelectorAll("[text-split]");
        splitTypeElements.forEach((element) => {
            new SplitType(element, {
                types: "words, chars",
                tagName: "span",
            });
        });

        // --- 1. Words Slide Up ---
        document.querySelectorAll("[words-slide-up]").forEach((element) => {
            const tl = gsap.timeline({ paused: true });
            tl.from(element.querySelectorAll(".word"), {
                opacity: 0,
                yPercent: 100,
                duration: 0.5,
                ease: "back.out(2)",
                stagger: { amount: 0.5 },
            });
            createScrollTrigger(element, tl);
        });

        // --- 2. Words Rotate In ---
        document.querySelectorAll("[words-rotate-in]").forEach((element) => {
            const tl = gsap.timeline({ paused: true });
            const words = element.querySelectorAll(".word");
            tl.set(words, { transformPerspective: 1000 });
            tl.from(words, {
                rotationX: -90,
                duration: 0.6,
                ease: "power2.out",
                stagger: { amount: 0.6 },
            });
            createScrollTrigger(element, tl);
        });

        // --- 4. Letters Slide Up ---
        document.querySelectorAll("[letters-slide-up]").forEach((element) => {
            const tl = gsap.timeline({ paused: true });
            tl.from(element.querySelectorAll(".char"), {
                yPercent: 100,
                duration: 0.35,
                ease: "power1.out",
                stagger: { amount: 0.6 },
            });
            createScrollTrigger(element, tl);
        });

        // --- 6. Letters Fade In ---
        document.querySelectorAll("[letters-fade-in]").forEach((element) => {
            const tl = gsap.timeline({ paused: true });
            tl.from(element.querySelectorAll(".char"), {
                opacity: 0,
                duration: 0.6,
                ease: "power1.out",
                stagger: { amount: 3 },
            });
            createScrollTrigger(element, tl);
        });


        gsap.set("[text-split]", { opacity: 1 });
    });

    //========= Text Animation Start













    // ===== Particles Js Start 

    document.querySelectorAll('.particles-skill').forEach((element, index) => {
        const uniqueId = 'particles-id-' + index;
        element.id = uniqueId;

        particlesJS(uniqueId, {
            "particles": {
                "number": { "value": 50, "density": { "enable": true, "value_area": 100 } },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.3 },
                "size": { "value": 2, "random": true },
                "line_linked": { "enable": true, "distance": 100, "color": "#ffffff", "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 2 }
            },
            "interactivity": {
                "events": { "onhover": { "enable": true, "mode": "repulse" } }
            },
            "retina_detect": true
        });
    });
    // ===== Particles Js End





    // Get audio element
    const audio = document.getElementById("bgMusic");
    const loader = document.getElementById("loader");

    // Wait for user interaction to start music
    loader.addEventListener('click', function() {
        audio.play();
        loader.style.display = 'none'; 
    });