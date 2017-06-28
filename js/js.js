$(document).on('click','.nav-link',function(e) {
  e.preventDefault();
  var target=$(this).attr('href');
  var targetOffset=$(target).offset();
  $('html,body').animate({
    scrollTop:(targetOffset.top)
  }, 500)
});

$(document).on('click','.scrollTop',function(e) {
  e.preventDefault();
  $('html,body').animate({
    scrollTop:(0)
  }, 500);
});
