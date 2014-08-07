$(document).on('page:change', function(){

  // prevent user from going back in app
  // history.pushState(null, null, location.href);
  //   window.onpopstate = function(event) {
  //   history.go(1);
  // };
  // window.onbeforeunload = function() { return "YOUR WORK WILL BE LOST"; };


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
