$(document).ready(function () {

  const $toggleBtns = $('.toggle-icon');
  const $toggleBtnClose = $('#toggleBtnClose');
  const $sidebar = $('#sidebar');
  const $mainWrapper = $('.main-wrapper');
  const $sidebarBackdrop = $('#sidebarBackdrop');

  $toggleBtns.on('click', function () {
    const width = $(window).width();

    if (width > 1199) {
      $sidebar.toggleClass('collapsed');
      $mainWrapper.toggleClass('expanded');
    }
    else if (width <= 1199 && width > 767) {
      $sidebar.toggleClass('show-full');
      $mainWrapper.toggleClass('show-collapsed');
    }
    else {
      $sidebar.toggleClass('mobile-open');
      $sidebarBackdrop.addClass('active')
    }
  });

  $toggleBtnClose.on('click', function () {
    $sidebar.removeClass('mobile-open show-full');
    $sidebarBackdrop.removeClass('active');
  });

  $sidebarBackdrop.on('click', function () {
    $(this).addClass('active');
  });
});


/*sticky header*/
// $(window).scroll(function () {
//   var scroll = $(window).scrollTop();

//   if (scroll >= 70) {
//     $("header.navbar").addClass("darkHeader");
//     $(".btnBacktotop").addClass("active");
//   } else {
//     $("header.navbar").removeClass("darkHeader");
//     $(".btnBacktotop").removeClass("active");
//   }
// });

