$('.dropdown-toggle').click(function(e) {
    e.preventDefault();
    $('.dropdown-menu').toggle();
  });
  
  $('.dropdown-menu a').click(function() {
    var selected = $(this).text();
    $('.dropdown-toggle').text(selected);
    $('.dropdown-menu').hide();
  });
  