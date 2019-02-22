$(document).ready(() => {
  new WOW().init();
  // Khi click vào nút
  $(".js--scroll-to-project").click(() => {
    $("html, body").animate(
      { scrollTop: $(".js--section-projects").offset().top },
      1000
    );
  });

  $(".js--scroll-to-contact").click(() => {
    $("html, body").animate(
      { scrollTop: $(".js--section-contact").offset().top },
      1000
    );
  });

  $(".js--scroll-to-home").click(() => {
    $("html, body").animate(
      { scrollTop: $(".js--section-home").offset().top },
      1000
    );
  });

  $(".js--scroll-to-skills").click(() => {
    $("html, body").animate(
      { scrollTop: $(".js--section-skills").offset().top },
      1000
    );
  });

  $(".js--scroll-to-about").click(() => {
    $("html, body").animate(
      { scrollTop: $(".js--section-about").offset().top },
      1000
    );
  });

  $(".navigation__burger").click(() => {
    if ($(".navigation__static").css("opacity") == 0) {
      $(".navigation__static").css("opacity", 1);
    } else {
      $(".navigation__static").css("opacity", 0);
    }
  });

  // Khi lăn con trỏ
  $(window).on("scroll", handleScrolling);

  //Scrolling
  function handleScrolling() {
    let $navtarget = $(".navtarget");
    let $currentPos = $(document).scrollTop();
    let $navLi = $(".navigation ul li");
    let $burger = $(".navigation__burger");
    let newSection = "";

    if ($currentPos > $(".section-about-me").offset().top + 800) {
      $burger.addClass("navstyle2");
    }
    if ($currentPos < $(".section-about-me").offset().top + 800) {
      $burger.removeClass("navstyle2");
    }

    for (el of $navtarget) {
      if ($(el).offset().top - 500 > $currentPos) {
        break;
      }
      newSection = $(el).attr("id");
    }
    for (el of $navLi) {
      if ($(el).attr("id") === newSection) {
        $(el).addClass("navstyle");
      }
      if ($(el).attr("id") !== newSection) {
        $(el).removeClass("navstyle");
      }
    }
  }
});
