

$(document).on('page:change', function(){
  var review = $('#review'),
  edit = $('#edit'),
  timesheet = $('#new_timesheet'),
  emailPreview = $('#email-preview');

  review.on('click', function(event){
    event.preventDefault();

    var nameAndEmailPartial = [
    "<div class='part1'><br />First name: <span role='firstname'>" + $('.firstname').val() + "</span>",
    "<br />Last name: <span role='lastname'>" + $('.lastname').val() + "</span>",
    "<br />Email: <span role='email'>" + $('.email').val() + '</span><br /></div>'
    ];
    var grandTotalAndHoursPartial = [
    "<div class='part3'><br />Total hours: <span role='total_hours'>" + $('.total_hours').text() + "</span>",
    "<br />Grand total: <span role='grand_total'>" + $('.grand_total').text() + "</span></div>"
    ];

    $('.append_shift').append(nameAndEmailPartial.join("\n"));

    var shiftPartial = [
    '<div class="part2"><br />Date:  <span role="date"></span><br />',
    'Start time:  <span role="start_time"></span><br />', 
    'Hours worked:  <span role="hours"></span><br />',
    'Position:  <span role="position"></span><br />',
    'Pay rate:  <span role="rate"></span><br />',
    'Subtotal pay:  <span role="subtotal"></span><br /></div>'
    ]; 

    $.each($('.shift'), function(index, shift){
      var thisPartialDiv = "<div class='partial" + index + "'>";
      var thisPartialDivClass = ".partial" + index; 

      $('.append_shift').append(thisPartialDiv + shiftPartial.join("\n"));

      ($(this).find($('#new_timesheet input'))).each(function(){
        var thisRow = $(this).attr('class');
        $(thisPartialDivClass).find($('span[role=' + thisRow + ']')).text($(this).val());
      });

      ($(this).find($('#new_timesheet label'))).each(function(){
        var thisRow = $(this).attr('class');
        $(thisPartialDivClass).find($('span[role=' + thisRow + ']')).text($(this).text());
      });
    });

    $('.append_shift').append(grandTotalAndHoursPartial.join("\n"));

    timesheet.slideUp();
    emailPreview.slideDown();  
  });

  edit.click(function(event){
    event.preventDefault();
    //remove all the partial part1 and part3. 
      $('div[class=part1]').remove();
      $('div[class=part2]').remove();
      $('div[class=part3]').remove();

    timesheet.slideDown();
    emailPreview.slideUp();
  });
});
