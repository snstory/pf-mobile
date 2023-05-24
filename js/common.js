const swiper = new Swiper('.swiper', {
   direction: 'horizontal',
   loop: false,
   slidesPerView: 1,
   spaceBetween: 15,
   slidesPerView: 'auto',
});

const swiperList = new Swiper('.swiper-list', {
   direction: 'horizontal',
   loop: false,
   slidesPerView: 1,
   spaceBetween: 15,
   slidesPerView: 'auto',
   pagination: {
      el: '.members .pazing',
   },
});

(($) => {
   $('.open-main-program').click((e) => {
      e.preventDefault();
      $('.open-main-program-layer')
         .show(0)
         .scrollTop(0)
         .removeClass('off')
         .addClass('on');
      $('body').css({ overflow: 'hidden' });
   });

   $('.close-main-program').click((e) => {
      e.preventDefault();
      $('.open-main-program-layer')
         .removeClass('on')
         .addClass('off')
         .delay(300)
         .hide(0, () => {
            $('body').css({ overflow: 'visible' });
         });
   });

   $.map($('.main-nav > ul > li'), (n, i) => {
      $(n).click((e) => {
         e.preventDefault();

         engine(parseInt($(n).attr('myNo')), $('.main-nav > ul > li'));
      }).attr('myNo', i);

      function engine(no, arr) {
         $.map(arr, (n, i) => {
            no === i ? $($(n).addClass('on')) : $($(n).removeClass('on'));
         });
      }
   });

})(jQuery);