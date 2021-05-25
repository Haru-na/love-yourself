
$(function () {
   console.log("hello");

   


// $( '.js-input' ).keyup(function() {
//     if( $(this).val() ) {
//        $(this).addClass('not-empty');
//     } else {
//        $(this).removeClass('not-empty');
//     }
//   });


});

$( '.js-input' ).keyup(function() {
   if( $(this).val() ) {
      $(this).addClass('not-empty');
   } else {
      $(this).removeClass('not-empty');
   }

$('.contact > h2').on("mouseover",function () {
  $('.contact > .slide').slidDown();
})
 });

