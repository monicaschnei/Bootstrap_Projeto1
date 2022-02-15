$(document).ready(() => {

    $('.navbar-btn').on('click', function(){
      $('.navbar-nav').toggleClass('active'); 
      $(this).find('i').toggleClass('fa-bars');
      $(this).find('i').toggleClass('fa-times'); 
      
     
    })
  })