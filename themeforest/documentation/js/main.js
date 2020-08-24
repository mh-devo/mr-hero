$(document).ready(function() {
    "use strict";
    $("nav ul .navbar .navlink").on('click', function() {
        if (!($("nav ul .navbar .navlink").hasClass("clicked"))) {
            $(this).addClass("clicked");
            $("nav ul .navbar .up").css("display","none");
            $("nav ul .navbar .down").css("display","inline-block");
        } else {
            $("nav ul .navbar .down").css("display","none");
            $("nav ul .navbar .up").css("display","inline-block");
            $(this).removeClass("clicked");
        }
        $("nav ul .navbar ul").toggle("slow");
    });
    $("nav ul .header-nav .navlink2").on('click', function() {
        if (!($("nav ul .header-nav .navlink2").hasClass("clicked"))) {
            $(this).addClass("clicked");
            $("nav ul .header-nav .up").css("display","none");
            $("nav ul .header-nav .down").css("display","inline-block");
        } else {
            $("nav ul .header-nav .down").css("display","none");
            $("nav ul .header-nav .up").css("display","inline-block");
            $(this).removeClass("clicked");
        }
        $("nav ul .header-nav ul").toggle("slow");
    });
    $("nav ul .about-nav .navlink3").on('click', function() {
        if (!($("nav ul .about-nav .navlink3").hasClass("clicked"))) {
            $(this).addClass("clicked");
            $("nav ul .about-nav .up").css("display","none");
            $("nav ul .about-nav .down").css("display","inline-block");
        } else {
            $("nav ul .about-nav .down").css("display","none");
            $("nav ul .about-nav .up").css("display","inline-block");
            $(this).removeClass("clicked");
        }
        $("nav ul .about-nav ul").toggle("slow");
    });
    $("nav ul .exp-nav .navlink4").on('click', function() {
        if (!($("nav ul .exp-nav .navlink4").hasClass("clicked"))) {
            $(this).addClass("clicked");
            $("nav ul .exp-nav .up").css("display","none");
            $("nav ul .exp-nav .down").css("display","inline-block");
        } else {
            $("nav ul .exp-nav .down").css("display","none");
            $("nav ul .exp-nav .up").css("display","inline-block");
            $(this).removeClass("clicked");
        }
        $("nav ul .exp-nav ul").toggle("slow");
    });
    $("nav ul .service-nav .navlink5").on('click', function() {
        if (!($("nav ul .service-nav .navlink5").hasClass("clicked"))) {
            $(this).addClass("clicked");
            $("nav ul .service-nav .up").css("display","none");
            $("nav ul .service-nav .down").css("display","inline-block");
        } else {
            $("nav ul .service-nav .down").css("display","none");
            $("nav ul .service-nav .up").css("display","inline-block");
            $(this).removeClass("clicked");
        }
        $("nav ul .service-nav ul").toggle("slow");
    });
    $("nav ul .blog-nav .navlink6").on('click', function() {
        if (!($("nav ul .blog-nav .navlink6").hasClass("clicked"))) {
            $(this).addClass("clicked");
            $("nav ul .blog-nav .up").css("display","none");
            $("nav ul .blog-nav .down").css("display","inline-block");
        } else {
            $("nav ul .blog-nav .down").css("display","none");
            $("nav ul .blog-nav .up").css("display","inline-block");
            $(this).removeClass("clicked");
        }
        $("nav ul .blog-nav ul").toggle("slow");
    });
    $("nav ul .contact-nav .navlink7").on('click', function() {
        if (!($("nav ul .contact-nav .navlink7").hasClass("clicked"))) {
            $(this).addClass("clicked");
            $("nav ul .contact-nav .up").css("display","none");
            $("nav ul .contact-nav .down").css("display","inline-block");
        } else {
            $("nav ul .contact-nav .down").css("display","none");
            $("nav ul .contact-nav .up").css("display","inline-block");
            $(this).removeClass("clicked");
        }
        $("nav ul .contact-nav ul").toggle("slow");
    });
});
