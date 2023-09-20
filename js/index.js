$(document).ready(function () {
  $("#book").bind("turning", function (event, page, view) {
    $(".content").css({
      opacity: 0,
      transform: "translateY(20px)",
    });

    var audioElement = document.getElementById("pageTurnSound");
    audioElement.currentTime = 0; // 오디오를 시작부터 재생
    audioElement.play();
  });

  $("#book").bind("turned", function (event, page, view) {
    function fadeInContentOfPage(pageNumber) {
      var pageContentElements = $(
        "#book .page[data-page-number='" + pageNumber + "'] .content"
      );
      pageContentElements.each(function (index, element) {
        setTimeout(function () {
          $(element).css({
            opacity: 1,
            transform: "translateY(0)",
          });
        }, 750 * (index + 1));
      });
    }

    if (view[0]) {
      fadeInContentOfPage(view[0]);
    }

    if (view[1]) {
      setTimeout(function () {
        fadeInContentOfPage(view[1]);
      }, 1000 *
        $("#book .page[data-page-number='" + view[0] + "'] .content").length);
    }
  });

  $("#book").turn({ gradients: true, acceleration: true });
});
