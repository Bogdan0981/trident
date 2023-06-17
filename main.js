$("a[href*='#']").on("click", function (e) {
  var anchor = $(this);
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $(anchor.attr("href")).offset().top,
      },
      666
    );
  e.preventDefault();
  return false;
});
