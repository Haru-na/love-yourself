
$( '.js-input' ).keyup(function() {
    if( $(this).val() ) {
       $(this).addClass('not-empty');
    } else {
       $(this).removeClass('not-empty');
    }
  });
$(".main3 > div").hide();
$(".main3 > h2").on("mouseover",function(){
   $(".main3 > div").slideDown();
   
});