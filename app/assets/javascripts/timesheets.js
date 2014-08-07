$(document).on('page:change', function(){
    var review = $('#review'),
        edit = $('#edit'),
        timesheet = $('#timesheet'),
        emailPreview = $('#email-preview'),
        firstName = $('#timesheet_firstname').keyup(function () {
                      $('#firstname').text(this.value);
                    });

    review.click(function(){
      // append text in fields to preview form
      // $('#timesheet_firstname').clone().append($('#firstname'));
      timesheet.slideUp();
      emailPreview.slideDown();
    });

    edit.click(function(){
      timesheet.slideDown();
      emailPreview.slideUp();
    });

});
