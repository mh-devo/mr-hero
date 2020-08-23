/*global $, jQuery, alert, document, window, setTimeout*/
/*jslint plusplus: true */
$(document).ready(function () {
    "use strict";
    $(".navbar-nav li:first .nav-link").addClass("active");  // add class active to Home link
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1 && $(this).scrollTop() < 600) { // hide navbar between (2 and 600)
            $(".navbar").slideUp("fast");
        } else if ($(this).scrollTop() <= 2) {  // show navbar scroll top
            $(".navbar").fadeIn();
            $(".navbar").css({
                "background" : "transparent",
                "box-shadow" : "none",
                "padding" : ".5rem 1rem"
            });
        } else {   // show navbar scroll down
            $(".navbar").slideDown("slow");
            $(".navbar").css({
                "padding" : "0 1rem",
                "background" : "linear-gradient(to right,#d09efe,#86c2fd)", // navbar background color
                "opacity" : ".9",
                "box-shadow" : "1px 4px 15px -9px #717171"
            });
        }
        // Change nav active on scroll
        var section = $("section"),
            nav = $("nav"),
            navHeight = nav.outerHeight(),
            curPos = $(this).scrollTop();
        section.each(function () {
            var top = $(this).offset().top - navHeight,
                bottom = top + $(this).outerHeight();
            if (curPos >= top && curPos <= bottom) {
                nav.find("#nav-content > ul > li > a").removeClass("active");
                nav.find('#nav-content > ul > li > a[href="#' + $(this).attr('id') + '"]').addClass("active");
            }
        });
    });
    // navbar mob toggler icon on click change background color
    $(".navbar .navbar-toggler").click(function () {
        $(".navbar #nav-content").css({
            "background" : "linear-gradient(to right,#d09efe,#86c2fd)", // navbar mob background color
            "opacity" : ".9",
            "box-shadow" : "1px 4px 15px -9px #717171"
        });
    });
    
    // Smooth scroll on click
    $("#nav-content > ul > li > a").click(function (e) {
        e.preventDefault();
        var curLink = $(this),
            scrollPoint = $(curLink.attr("href")).position().top;
        $("html, body").animate({scrollTop: scrollPoint}, 1000);
    });
});
//              Start Canvas Skills
var skills = document.getElementById("c-skills");  // get canvas id
skills.width = skills.clientWidth;  // canvas width
skills.height = skills.clientHeight;  // canvas height
var ctx = skills.getContext("2d");
function clearArc1(ccoTer001, ccoTer01, ccoTer1, ccoTer11, ccoTer111, ccoTer002,
    ccoTer02, ccoTer2, ccoTer22, ccoTer222, rcoTer3) {
    "use strict";
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(ccoTer001, ccoTer01, ccoTer1, ccoTer11, Math.PI * ccoTer111, false);
    ctx.arc(ccoTer002, ccoTer02, ccoTer2, ccoTer22, Math.PI * ccoTer222, true);
    ctx.clearRect(162, rcoTer3, 150, 25);
    ctx.fill();
    ctx.restore();
}
function drawSkills(coTer1, coTer11, coTer111, coTer2, coTer22, coTer222, cotNuma,
    cotNumb, color, skName, skHeight, skCounter, counHeight) {
    "use strict";
    var num1 = $(".count1").attr("data-count"),
        num2 = $(".count2").attr("data-count"),
        num3 = $(".count3").attr("data-count"),
        num4 = $(".count4").attr("data-count"),
        cotNuma1 = ((num1 * 0.01454) + 0.446),
        cotNumb1 = ((num1 * 0.04535) - 4.835),
        i1 = 0,
        cotNuma2 = ((num2 * 0.01138) + 0.462),
        cotNumb2 = ((num2 * 0.03555) - 4.805),
        i2 = 0,
        cotNuma3 = ((num3 * 0.00828) + 0.472),
        cotNumb3 = ((num3 * 0.0259) - 4.79),
        i3 = 0,
        cotNuma4 = ((num4 * 0.00525) + 0.475),
        cotNumb4 = ((num4 * 0.01631) - 4.781),
        i4 = 0;
    function step1() {
        setTimeout(function () {
            clearArc1(168.7, 137, 45.4, 1.40, 1.9, 168.7, 137, 70.4, -0.3, 0.46, 177);
            var progressa = ((i1 * 0.01454) + 0.446),
                progressb = ((i1 * 0.04535) - 4.835);
            cotNuma = Math.min(progressa, cotNuma1);
            cotNumb = Math.min(progressb, cotNumb1);
            skCounter = Math.min(i1, num1);
            i1++;
            drawSkills(coTer1, coTer11, coTer111, coTer2, coTer22, coTer222, cotNuma,
                           cotNumb, color, skName, skHeight, skCounter, counHeight);
            if (i1 <= num1) {
                step1();
            }
        }, 20);
    }
    function step2() {
        setTimeout(function () {
            clearArc1(160, 133, 75.3, 1.45, 1.6, 160, 133, 100.3, -1.25, 0.47, 210);
            var progressa = ((i2 * 0.01138) + 0.462),
                progressb = ((i2 * 0.03555) - 4.805);
            cotNuma = Math.min(progressa, cotNuma2);
            cotNumb = Math.min(progressb, cotNumb2);
            skCounter = Math.min(i2, num2);
            i2++;
            drawSkills(coTer1, coTer11, coTer111, coTer2, coTer22, coTer222, cotNuma,
                       cotNumb, color, skName, skHeight, skCounter, counHeight);
            if (i2 <= num2) {
                step2();
            }
        }, 15);
    }
    function step3() {
        setTimeout(function () {
            clearArc1(162, 125, 110, 1.48, 1.3, 162, 125, 134, -2.2, 0.475, 235);
            var progressa = ((i3 * 0.00828) + 0.472),
                progressb = ((i3 * 0.0259) - 4.79);
            cotNuma = Math.min(progressa, cotNuma3);
            cotNumb = Math.min(progressb, cotNumb3);
            skCounter = Math.min(i3, num3);
            i3++;
            drawSkills(coTer1, coTer11, coTer111, coTer2, coTer22, coTer222, cotNuma,
                       cotNumb, color, skName, skHeight, skCounter, counHeight);
            if (i3 <= num3) {
                step3();
            }
        }, 10);
    }
    function step4() {
        setTimeout(function () {
            clearArc1(168.9, 135, 140, 1.491, 1, 168.9, 135, 168, -3.15, 0.478, 262);
            var progressa = ((i4 * 0.00525) + 0.475),
                progressb = ((i4 * 0.01631) - 4.781);
            cotNuma = Math.min(progressa, cotNuma4);
            cotNumb = Math.min(progressb, cotNumb4);
            skCounter = Math.min(i4, num4);
            i4++;
            drawSkills(coTer1, coTer11, coTer111, coTer2, coTer22, coTer222, cotNuma,
                       cotNumb, color, skName, skHeight, skCounter, counHeight);
            if (i4 <= num4) {
                step4();
            }
        }, 5);
    }
    if (color === "firColor" && skName === "firName" && skCounter === "firCounter") {
        color = $(".count1").attr("data-color");
        skName = $(".count1").attr("data-skill");
        skCounter = $(".count1").attr("data-count");
    } else if (color === "secColor" && skName === "secName" && skCounter === "secCounter") {
        color = $(".count2").attr("data-color");
        skName = $(".count2").attr("data-skill");
        skCounter = $(".count2").attr("data-count");
    } else if (color === "thiColor" && skName === "thiName" && skCounter === "thiCounter") {
        color = $(".count3").attr("data-color");
        skName = $(".count3").attr("data-skill");
        skCounter = $(".count3").attr("data-count");
    } else if (color === "fouColor" && skName === "fouName" && skCounter === "fouCounter") {
        color = $(".count4").attr("data-color");
        skName = $(".count4").attr("data-skill");
        skCounter = $(".count4").attr("data-count");
    }
    if (cotNuma === "cotNuma1" && cotNumb === "cotNumb1") {
        step1();
    } else if (cotNuma === "cotNuma2" && cotNumb === "cotNumb2") {
        step2();
        
    } else if (cotNuma === "cotNuma3" && cotNumb === "cotNumb3") {
        step3();
    } else if (cotNuma === "cotNuma4" && cotNumb === "cotNumb4") {
        step4();
    }
    ctx.beginPath();
    ctx.arc(154, 135, coTer1, coTer11, Math.PI * coTer111, false);
    ctx.arc(154, 135, coTer2, coTer22, Math.PI * coTer222, true);
    ctx.fillStyle = "#e0e0e0";  // circle container color
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(154, 135, coTer1, coTer11, Math.PI * cotNuma, false);
    ctx.arc(154, 135, coTer2, cotNumb, Math.PI * coTer222, true);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
    // Skill name
    ctx.beginPath();
    ctx.font = "18px Questrial";    // skill name font size
    ctx.fillStyle = $(color).attr("data-color");
    ctx.fillText(skName, 171, skHeight);
    ctx.closePath();
    // Skill count
    ctx.beginPath();
    ctx.font = "14px Questrial";   // count number font size 
    ctx.fillStyle = "#ffffff";       // number color
    ctx.fillText(skCounter + " %", 122, counHeight);
    ctx.closePath();
}
$(document).ready(function () {
    "use strict";
    $(window).scroll(function () {
        var expHeight = $(".experience").offset().top - window.innerHeight;
        if ($(window).scrollTop() > (expHeight + 450)) {
            if (!$(".num-skills").hasClass("done")) {
                $(".num-skills").addClass("done").each(function () {
                    // first skill
                    drawSkills(44, 1.40, 1.9, 69, -0.3, 0.46, "cotNuma1",
                               "cotNumb1", "firColor", "firName", 196, "firCounter", 193);
                    // second skill
                    drawSkills(72, 1.45, 1.6, 97, -1.25, 0.47, "cotNuma2",
                           "cotNumb2", "secColor", "secName", 226, "secCounter", 223);
                    // third skill
                    drawSkills(100, 1.48, 1.3, 125, -2.2, 0.475, "cotNuma3",
                           "cotNumb3", "thiColor", "thiName", 254, "thiCounter", 251);
                    // fourth skill
                    drawSkills(128, 1.491, 1, 153, -3.15, 0.478, "cotNuma4",
                               "cotNumb4", "fouColor", "fouName", 283, "fouCounter", 279);
                });
            }
        }
    });
});
//               End Canvas Skills

//              Start Service function position
function service() {
    "use strict";
    var icon1 = $(".circle .icon:first-child"),
        icon2 = $(".circle2 .icon:first-child"),
        icon3 = $(".circle .icon:last-child"),
        icon4 = $(".circle2 .icon:last-child"),
        shapeHeight = $(".services .shape").innerHeight(),   // text container height
        shapeWidth = $(".services .shape").innerWidth(),   // shape container width
        service1 = $(".text .service:nth-child(1)"),
        service2 = $(".text .service2:nth-child(2)"),
        service3 = $(".text .service:nth-child(3)"),
        service4 = $(".text .service2:nth-child(4)");
    // circle & arrow height (not container) = 306px, half = 153px
    // icon width = 122px, half = 61px
    // icon2 top = 90px, icon3 top = 180px
    if ($(window).innerWidth() >= 751) {
        // icon1
        icon1.css({
            "top" : ((shapeHeight / 2) - 153) + "px",
            "left" : ((shapeWidth / 2) - 61) + "px"
        });
        // icon2
        icon2.css({
            "top" : ((shapeHeight / 2) - 153) + 90 + "px",
            "left" : ((shapeWidth / 2) + 30) + "px"
        });
        // icon3
        icon3.css({
            "top" : ((shapeHeight / 2) - 153) + 180 + "px",
            "left" : ((shapeWidth / 2) - 61) + "px"
        });
        // icon4
        icon4.css({
            "top" : ((shapeHeight / 2) - 153) + 90 + "px",
            "left" : ((shapeWidth / 2) - 153) + "px"
        });
    } else {
        // icons position in 767px window
        // icon width = 80, half = 40
        
        // icon1
        icon1.css({
            "top" : ((service1.innerHeight() / 2)) - 30 + "px",  // 30 = (half icon width(40) - marginTop(10))
            "left" : (shapeWidth - 74.78)  // 74.78 = minimum width of the (shapeWidth) in minimum width of the window
        });
        // icon2
        icon2.css({   // 60 = marginTop(10) + marginBottom(50) of the service1,,   40 = half icon width
            "top" : (service1.innerHeight() + 60) + ((service2.innerHeight() / 2) - 40) + "px",
            "left" : (shapeWidth - 74.78)
        });
        // icon3
        icon3.css({   // 50 = marginBottom of the service2
            "top" : (service1.innerHeight() + 60 + service2.innerHeight() + 50) + ((service3.innerHeight() / 2) - 40) + "px",
            "left" : (shapeWidth - 74.78)
        });
        // icon4
        icon4.css({
            "top" : (service1.innerHeight() + 60 + service2.innerHeight() + 50 + service3.innerHeight() + 50) + ((service4.innerHeight() / 2) - 40) + "px",
            "left" : (shapeWidth - 74.78)
        });
    }
}
//              End Service function position

//              Start people opinion testimonials function
function peopleOpinion() {
    "use strict";
    var containerWidth = $(".people-container").width(),
        containerHeight = $(".people-container").height(),
        firstPeopleOpinion = $(".people-opinion:first"),       // first people opinion container
        peopleCount = $(".people-opinion").length,         // people-opinion number
        pre = $(".fa-angle-left"),
        next = $(".fa-angle-right"),
        clicksNum = 0,
        clicks = 1,
        i,
        preContainer = $(".people-say .arrow-pre"),
        nextContainer = $(".people-say .arrow-next");
    for (i = 3; i < peopleCount; i += 3) {     // Clicks number in big screens (show 3 people opinion)
        clicksNum++;
    }
    if ($(window).innerWidth() <= 991 && $(window).innerWidth() > 699) {   // Clicks number in medium screens (show 2 people opinion)
        clicksNum = 0;
        for (i = 2; i < peopleCount; i += 2) {
            clicksNum++;
        }
    } else if ($(window).innerWidth() <= 699) {   // Clicks number in small screens (show 1 people opinion)
        clicksNum = 0;
        for (i = 1; i < peopleCount; i += 1) {
            clicksNum++;
        }
    }
    next.on('click', function () {   // next button
        if (clicks <= clicksNum) {
            firstPeopleOpinion.css({"margin-left" : -containerWidth * clicks + "px"});
            clicks++;
        } else {
            clicks = 1;
            firstPeopleOpinion.css({"margin-left" : -0 + "px"});
        }
    });
    pre.on('click', function () {    // previous button
        var pclicks = clicks - 2;
        if (clicks <= clicksNum && clicks !== 1) {
            firstPeopleOpinion.css({"margin-left" : +(-(containerWidth * pclicks)) + "px"});
            clicks--;
        } else if (clicks === ((clicks - clicksNum) + clicksNum) && clicks !== 1) {
            firstPeopleOpinion.css({"margin-left" : +(-(containerWidth * pclicks)) + "px"});
            clicks--;
        }
    });
    preContainer.css("margin-top", ((containerHeight / 2) - (pre.height() / 2) + "px"));    // previous arrow height
    nextContainer.css("margin-top", ((containerHeight / 2) - (next.height() / 2) + "px"));  // next arrow height
}
//                                   End people opinion testimonials function

//                           Start blog position function
function blog() {
    "use strict";
    var detailsHeight = $(".small-card .content .details").innerHeight(),
        small3Height = $(".small3-card .content").innerHeight(),
        small3HeadingHeight = $(".small3-card .content .heading").innerHeight(),
        small3CenterHeading = (small3Height / 2) - (small3HeadingHeight / 2),     //  center Heading
        small3CenterIcon = 98 - small3HeadingHeight;   //  center play icon
    
    $(".small-card .content .details").css({     //  small-card hide details container
        "-webkit-transform" : "translateY(" + detailsHeight + "px" + ")",
        "-moz-transform" : "translateY(" + detailsHeight + "px" + ")",
        "-o-transform" : "translateY(" + detailsHeight + "px" + ")",
        "transform" : "translateY(" + detailsHeight + "px" + ")"
    });
    $(".small3-card .content").find(".overlay .icon").css({    // small3-card hide icon container
        "-webkit-transform" : "translateY(" + small3Height + "px" + ")",
        "-moz-transform" : "translateY(" + small3Height + "px" + ")",
        "-o-transform" : "translateY(" + small3Height + "px" + ")",
        "transform" : "translateY(" + small3Height + "px" + ")"
    });
    $(".small-card .content").mouseover(function () {              //  small-card effect on mouseover
        $(this).find(".heading").css({"bottom" : (detailsHeight + "px")});
        $(this).find(".details").css({
            "-webkit-transform" : "translateY(0px)",
            "-moz-transform" : "translateY(0px)",
            "-o-transform" : "translateY(0px)",
            "transform" : "translateY(0px)"
        });
    });
    $(".small-card .content").mouseleave(function () {        //  small-card effect on mouseleave
        $(this).find(".heading").css({"bottom" : "0px"});
        $(this).find(".details").css({
            "-webkit-transform" : "translateY(" + detailsHeight + "px" + ")",
            "-moz-transform" : "translateY(" + detailsHeight + "px" + ")",
            "-o-transform" : "translateY(" + detailsHeight + "px" + ")",
            "transform" : "translateY(" + detailsHeight + "px" + ")"
        });
    });
    $(".small3-card .content .overlay .heading").css({          //  small3-card center heading
        "-webkit-transform" : "translateY(" + small3CenterHeading + "px" + ")",
        "-moz-transform" : "translateY(" + small3CenterHeading + "px" + ")",
        "-o-transform" : "translateY(" + small3CenterHeading + "px" + ")",
        "transform" : "translateY(" + small3CenterHeading + "px" + ")"
    });
    $(".small3-card .content").mouseover(function () {    // small3-card effect on mouseover
        $(this).find(".overlay .heading").css({
            "-webkit-transform" : "translateY(-" + small3HeadingHeight + "px" + ")",
            "-moz-transform" : "translateY(-" + small3HeadingHeight + "px" + ")",
            "-o-transform" : "translateY(-" + small3HeadingHeight + "px" + ")",
            "transform" : "translateY(-" + small3HeadingHeight + "px" + ")"
        });
        $(this).find(".overlay .icon").css({
            "-webkit-transform" : "translateY(" + small3CenterIcon + "px)",
            "-moz-transform" : "translateY(" + small3CenterIcon + "px)",
            "-o-transform" : "translateY(" + small3CenterIcon + "px)",
            "transform" : "translateY(" + small3CenterIcon + "px)"
        });
    });
    $(".small3-card .content").mouseleave(function () {     // small3-card effect on mouseleave
        $(this).find(".overlay .heading").css({
            "-webkit-transform" : "translateY(" + small3CenterHeading + "px" + ")",
            "-moz-transform" : "translateY(" + small3CenterHeading + "px" + ")",
            "-o-transform" : "translateY(" + small3CenterHeading + "px" + ")",
            "transform" : "translateY(" + small3CenterHeading + "px" + ")"
        });
        $(this).find(".overlay .icon").css({
            "-webkit-transform" : "translateY(" + small3Height + "px" + ")",
            "-moz-transform" : "translateY(" + small3Height + "px" + ")",
            "-o-transform" : "translateY(" + small3Height + "px" + ")",
            "transform" : "translateY(" + small3Height + "px" + ")"
        });
    });
}
//                           End blog position function
$(document).ready(function () {
    "use strict";
    service();
    peopleOpinion();
    blog();
    $(window).resize(function () {
        service();
        peopleOpinion();
        blog();
    });
});
//  loader function
$(function () {
    "use strict";
    $(window).ready(function () {
        $(".loader .cir-container, .loader").fadeOut(1500);
    });
});