$(document).on('page:change', function(){
    var review = $('#review'),
        edit = $('#edit'),
        timesheet = $('#timesheet'),
        emailPreview = $('#email-preview'),
        hideEdit = $('#hide-edit');

    hideEdit.hide();

    review.on('click', function(event){
      event.preventDefault();
      // iterate over formsheet inputs and associate the values to their divs
      $('form#new_timesheet input').each(function(){
        var thisId = $(this).attr('id');
        $('span[role=' + thisId + ']').text($(this).val());
      });

      $('#hide-review').hide();
      timesheet.slideUp();
      hideEdit.slideDown();
      emailPreview.slideDown();
    });

    edit.click(function(event){
      event.preventDefault();
      $('#hide-review').slideDown();
      timesheet.slideDown();
      emailPreview.slideUp();
    });
});
