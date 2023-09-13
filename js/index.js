$(document).ready(function () {
  // 초기에 content 숨기기
  $(".content").css("opacity", 0);

  $("#book").bind("turning", function (event, page, view) {
    // 모든 .content 요소의 opacity를 0으로 설정
    $(".content").css("opacity", 0);
  });

  $("#book").bind("turned", function (event, page, view) {
    function fadeInContentOfPage(pageNumber) {
      var pageContentElements = $(
        "#book .page[data-page-number='" + pageNumber + "'] .content"
      );
      pageContentElements.each(function (index, element) {
        setTimeout(function () {
          $(element).animate({ opacity: 1 }, 500);
        }, 0 * (index + 1));
      });
    }

    if (view[0]) {
      console.log("Left Page Number:", view[0]);
      fadeInContentOfPage(view[0]);
    }

    if (view[1]) {
      console.log("Right Page Number:", view[1]);
      setTimeout(function () {
        fadeInContentOfPage(view[1]);
      }, 0 *
        $("#book .page[data-page-number='" + view[0] + "'] .content").length);
    }
  });

  $("#book").turn({ gradients: true, acceleration: true });
});
