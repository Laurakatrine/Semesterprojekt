    var pageLoaded = $(document).attr("title");

    $(document).ready(function () {
        $(".header").load("news.html");
        $("footer").load("titel-Footer.html");

        if (pageLoaded == "Startside") {
            $(".submenu_master").load("navbar_simple.html");
            $(".navbar").load("slideshow.html");
            $(".content_master").load("submenu.html");
        } if else (pageLoaded == "Strandkiosk") {
            alert("This page is not shown correctly");
        }
    });


