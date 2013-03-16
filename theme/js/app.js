(function () {
  var BLOG = window.BLOG || {};
  window.BLOG = BLOG;

  BLOG.headerScroll = function () {
      console.log('hello')

      var setHeader = _.throttle(this.setHeader, 100);

      $(window).scroll(setHeader);
    };

  BLOG.setHeader = function() {
    console.log('hi');
    if ($(window).scrollTop() >= 180) {
      console.log('hello')
      $('body').addClass('scroll');
      $('.article-fixed-title').addClass('show');
    } else {
      $('.article-fixed-title').removeClass('show');
      $('body').removeClass('scroll');
    }
  };
  return BLOG;
})();