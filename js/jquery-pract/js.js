$(document).ready(function () {
    
    $('.name-menu').on('change', function (event) {

      if (event.target.value) {
          $('.names').addClass('text-hide').removeClass('bgc-red');
          $('#' + event.target.value).addClass('bgc-red').removeClass('text-hide');
      } else {
          $('.names').removeClass('bgc-red text-hide');
      }

    })

    $('#hamburger').on('click', function(){
        $(this).toggleClass('open');
    })

});