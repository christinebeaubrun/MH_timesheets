$(document).on('page:change', function(){
    var review = $('#review'),
        edit = $('#edit'),
        timesheet = $('#timesheet'),
        emailPreview = $('#email-preview');

    $('form#new_timesheet').on('change', 'input', function(){
      var $this = $(this),
          thisId = $this.attr('id');

      $('span[role=' + thisId + ']').text($this.val());
    });

    review.click(function(){
      // emailPreview.toggle("slow");
      timesheet.slideUp();
      emailPreview.slideDown();
    });

    edit.click(function(){
      timesheet.slideDown();
      emailPreview.slideUp();
    });
});
