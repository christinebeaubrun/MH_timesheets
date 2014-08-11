

$(document).on('page:change', function(){
    var review = $('#review'),
        edit = $('#edit'),
        timesheet = $('#new_timesheet'),
        emailPreview = $('#email-preview');

    review.on('click', function(event){

      event.preventDefault();
      // iterate over formsheet inputs and associate the values to their divs
      $('form#new_timesheet input').each(function(){
        var thisClass = $(this).attr('class');
        $('span[role=' + thisClass + ']').text($(this).val());
      });
      $('form#new_timesheet label').each(function(){
        var thisClass = $(this).attr('class');
        $('span[role=' + thisClass + ']').text($(this).text());
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
