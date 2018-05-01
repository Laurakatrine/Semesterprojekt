    var pageLoaded = $(document).attr("title");

    $(document).ready(function () {
        $(".header").load("news.html");
        $("footer").load("titel-Footer.html");
        $(".submenu_master").load("navbar_simple.html");
        $(".navbar").load("slideshow.html");
        $(".content_master").load("submenu.html");
    });

    function loadMainMenu() {
        $(".content_sub > div").remove();
        $(".submenu_master").load("navbar_simple.html");
        $(".navbar").load("slideshow.html");
        $(".content_master").load("submenu.html");
    }

    function loadMainContact() {
        $(".content_sub > div").remove();
        $(".navbar > div").remove();
        $("div.content_master > center").remove();
        $(".content_sub").load("kontakt.html");
    }

    function loadFood() {
        $(".content_sub > div").remove();
        $(".content_sub").load("Mad.html");
    }

    function loadDrinks() {
        $(".content_sub > div").remove();
        $(".content_sub").load("KunDrikkelse.html");
    }

    function loadSnacks() {
        $(".content_sub > div").remove();
        $(".content_sub").load("KunKage.html");
    }

    function loadOrderFood() {
        $(".content_sub > div").remove();
        $(".navbar > div").remove();
        $("div.content_master > center").remove();
        $(".content_sub").load("webs.prototype/bestilling.html");
    }

    function loadEvents() {
        $(".content_sub > div").remove();
        $(".navbar > div").remove();
        $("div.content_master > center").remove();
        $(".navbar").load("video_sport.html")
        $(".content_sub").load("arrangementer.html");
    }

    function loadSportsCenter() {
        $(".content_sub > div").remove();
        $(".navbar > div").remove();
        $("div.content_master > center").remove();
        $(".content_sub").load("idrætscenteret.html");
    }
