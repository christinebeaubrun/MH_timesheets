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

    review.click(function(event){
      // emailPreview.toggle("slow");
      event.preventDefault();

      timesheet.slideUp();
      emailPreview.slideDown();
    });

    edit.click(function(event){
      event.preventDefault();
      timesheet.slideDown();
      emailPreview.slideUp();
    });
});
