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

jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},3000);
	});
});
