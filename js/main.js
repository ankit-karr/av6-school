(function ($) {
  "use strict";

  window.initTemplate = function () {
    setActiveNav();
    if ($("#spinner").length) {
      setTimeout(function () {
        $("#spinner").removeClass("show");
      }, 1);
    }

    if (typeof WOW === "function") {
      new WOW({ live: false }).init();
    }

    $(window)
      .off("scroll.template")
      .on("scroll.template", function () {
        if ($(this).scrollTop() > 45) {
          $(".navbar").addClass("sticky-top shadow-sm");
        } else {
          $(".navbar").removeClass("sticky-top shadow-sm");
        }

        if ($(this).scrollTop() > 300) {
          $(".back-to-top").fadeIn("slow");
        } else {
          $(".back-to-top").fadeOut("slow");
        }
      });

    $(".back-to-top")
      .off("click.template")
      .on("click.template", function () {
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
        return false;
      });

    if ($.fn.owlCarousel && $(".header-carousel").length) {
      $(".header-carousel").owlCarousel({
        animateOut: "slideOutDown",
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText: [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>',
        ],
      });
    }

    if ($.fn.owlCarousel && $(".class-carousel").length) {
      $(".class-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
          '<i class="fas fa-chevron-left"></i>',
          '<i class="fas fa-chevron-right"></i>',
        ],
        responsiveClass: true,
        responsive: {
          0: { items: 1 },
          576: { items: 1 },
          768: { items: 2 },
          992: { items: 3 },
          1200: { items: 4 },
        },
      });
    }

    if ($.fn.owlCarousel && $(".blog-carousel").length) {
      $(".blog-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
          '<i class="fas fa-chevron-left"></i>',
          '<i class="fas fa-chevron-right"></i>',
        ],
        responsiveClass: true,
        responsive: {
          0: { items: 1 },
          576: { items: 1 },
          768: { items: 2 },
          992: { items: 3 },
          1200: { items: 3 },
        },
      });
    }

    if ($.fn.owlCarousel && $(".training-carousel").length) {
      $(".training-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
          '<i class="fas fa-chevron-left"></i>',
          '<i class="fas fa-chevron-right"></i>',
        ],
        responsiveClass: true,
        responsive: {
          0: { items: 1 },
          576: { items: 1 },
          768: { items: 2 },
          992: { items: 3 },
          1200: { items: 3 },
        },
      });
    }

    if ($.fn.owlCarousel && $(".team-carousel").length) {
      $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
          '<i class="fas fa-chevron-left"></i>',
          '<i class="fas fa-chevron-right"></i>',
        ],
        responsiveClass: true,
        responsive: {
          0: { items: 1 },
          576: { items: 1 },
          768: { items: 2 },
          992: { items: 3 },
          1200: { items: 4 },
        },
      });
    }

    if ($.fn.owlCarousel && $(".testimonial-carousel").length) {
      $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
          '<i class="fas fa-chevron-left"></i>',
          '<i class="fas fa-chevron-right"></i>',
        ],
        responsiveClass: true,
        responsive: {
          0: { items: 1 },
          576: { items: 1 },
          768: { items: 2 },
          992: { items: 3 },
          1200: { items: 3 },
        },
      });
    }

    if ($.fn.counterUp) {
      $('[data-toggle="counter-up"]').counterUp({ delay: 5, time: 2000 });
    }

    $(document)
      .off("click.templatePlay")
      .on("click.templatePlay", ".btn-play", function () {
        var src = $(this).data("src") || "";
        $("#video").attr(
          "src",
          src ? src + "?autoplay=1&modestbranding=1&showinfo=0" : "",
        );
      });

    $("#videoModal")
      .off("hide.bs.modal.template")
      .on("hide.bs.modal.template", function () {
        $("#video").attr("src", "");
      });
  };

  $(function () {
    window.initTemplate();
  });
})(jQuery);

function setActiveNav() {
  const current = (
    location.pathname.split("/").pop() || "index.html"
  ).toLowerCase();

  const links = document.querySelectorAll(
    ".navbar-nav a.nav-link, .navbar-nav a.dropdown-item",
  );
  if (!links.length) return;

  links.forEach((a) => a.classList.remove("active"));

  links.forEach((a) => {
    const hrefRaw = a.getAttribute("href") || "";
    const href = hrefRaw.split("?")[0].split("#")[0].toLowerCase();
    if (!href) return;

    const file = href.split("/").pop();
    if (file === current) {
      a.classList.add("active");

      const dd = a.closest(".dropdown-menu");
      if (dd) {
        const toggle = dd.parentElement?.querySelector(
          ".nav-link.dropdown-toggle",
        );
        if (toggle) toggle.classList.add("active");
      }
    }
  });
}
