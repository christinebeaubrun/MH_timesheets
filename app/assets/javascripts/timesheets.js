
$(document).on('page:change', function(){
    var review = $('#review'),
        edit = $('#edit'),
        timesheet = $('#timesheet'),
        emailPreview = $('#email-preview');

    review.on('click', function(event){
      event.preventDefault();
      // iterate over formsheet inputs and associate the values to their divs
      $('form#new_timesheet input').each(function(){
        var thisId = $(this).attr('id');
        $('span[role=' + thisId + ']').text($(this).val());
      });
      timesheet.slideUp();
      emailPreview.slideDown();
    });

    edit.click(function(event){
      event.preventDefault();
      timesheet.slideDown();
      emailPreview.slideUp();
    });
});


