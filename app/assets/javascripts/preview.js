$(document).on('page:change', function(){
  var review = $('#review'),
  edit = $('#edit'),
  timesheet = $('#new_timesheet'),
  emailPreview = $('#email-preview');

  review.on('click', function(event){
    event.preventDefault();
    // var shiftPartial = [
    // '<br />Date:  <span role="date"></span><br />',
    // 'Start time:  <span role="start_time"></span><br />',
    // 'Hours worked:  <span role="hours"></span><br />',
    // 'Position:  <span role="position"></span><br />',
    // 'Pay rate:  <span role="rate"></span><br />',
    // 'Subtotal pay:  <span role="subtotal"></span><br /><br /></div>'
    // ];


    $.each($('.shift'), function(index, shift){
      var thisPartialDiv = "<div class='partial" + index + "'>";
      var thisPartialDivClass = ".partial" + index;

      // $('.append_shift').append(thisPartialDiv + shiftPartial.join("\n"));

      ($(this).find($('#new_timesheet input'))).each(function(){
        var thisRow = $(this).attr('class');
        $(thisPartialDivClass).find($('span[role=' + thisRow + ']')).text($(this).val());
      });

      ($(this).find($('#new_timesheet label'))).each(function(){
        var thisRow = $(this).attr('class');
        $(thisPartialDivClass).find($('span[role=' + thisRow + ']')).text($(this).text());
      });
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
