$(document).ready(function () {
  // 첫 로딩 시 오른쪽 페이지의 content를 0으로 설정
  let initialView = $("#book").turn("view");
  if (initialView[1]) {
    $(".page:eq(" + (initialView[1] - 1) + ") .content").css("opacity", 0);
  }

  $("#book").bind("turning", function (event, page, view) {
    var audioElement = document.getElementById("pageTurnSound");
    audioElement.currentTime = 0; // 오디오를 시작부터 재생
    audioElement.play();

    //   if (view[1]) {
    //     $(".page:eq(" + (view[1] - 1) + ") .content").css("opacity", 0);
    //   }
    // });

    // $("#book").bind("turned", function (event, page, view) {
    //   function fadeInContentOfPage(pageNumber) {
    //     var pageContentElements = $(`#book .page:eq(${pageNumber - 1}) .content`);

    //     pageContentElements.each(function (index, element) {
    //       setTimeout(function () {
    //         $(element).animate({ opacity: 1 }, 500); // 투명도를 천천히 1로 변화
    //       }, 500 * (index + 1));
    //     });
    //   }

    //   // 좌측 페이지의 content는 무조건 표시
    //   fadeInContentOfPage(view[0]);

    //   // 오른쪽 페이지가 있으면 그 페이지의 content 표시
    //   if (view[1]) {
    //     var delayForLeftPage =
    //       500 * $(".page:eq(" + (view[0] - 1) + ") .content").length;
    //     setTimeout(function () {
    //       fadeInContentOfPage(view[1]);
    //     }, delayForLeftPage);
    //   }
  });

  $("#book").turn({ gradients: true, acceleration: true });
});
