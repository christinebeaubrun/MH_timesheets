

$(document).on('page:change', function(){
  var review = $('#review'),
  edit = $('#edit'),
  timesheet = $('#new_timesheet'),
  emailPreview = $('#email-preview');

  review.on('click', function(event){
    event.preventDefault();
    var shiftPartial = [
    'Date:  <span role="date"></span><br />',
    'Start time:  <span role="start_time"></span><br />', 
    'Hours worked:  <span role="hours"></span><br />',
    'Position:  <span role="position"></span><br />',
    'Pay rate:  <span role="rate"></span><br />',
    'Subtotal pay:  <span role="subtotal"></span><br /><br />'
    ];


      $.each($('.shift'), function(){
        $('.append_shift').append(shiftPartial);

        // iterate over formsheet inputs
        $('#new_timesheet input').each(function(){
          var thisClass = $(this).attr('class');
          $('span[role=' + thisClass + ']').text($(this).val());
        });
        $('#new_timesheet label').each(function(){
          var thisClass = $(this).attr('class');
          $('span[role=' + thisClass + ']').text($(this).text());
        });
      });


    timesheet.slideUp();
    emailPreview.slideDown();  
  });

// edit.click(function(event){
//   event.preventDefault();
//   timesheet.slideDown();
//   emailPreview.slideUp();
// });
});
