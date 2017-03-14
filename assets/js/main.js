$(function() {

  var header = document.getElementById('header');
  var intro = document.getElementById('intro');

  window.onscroll = function() {
    var y = (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;

    // header
    if (y > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (y >= intro.offsetHeight - 60) {
      header.classList.add('reveal');
    } else {
      header.classList.remove('reveal');
    }

    if (y >= $('.who').offset().top - ($('.who').height() / 2)) {
      $('.who').addClass('scrolled');
    }
  }

  $('.typed').typed({
    stringsElement: $('.intro h1'),
    cursorChar: '<div class="cursor"></div>',
    startDelay: 750,
    preStringTyped: function() {
      $('.typed-cursor').addClass('finished')
    }
  });

})
