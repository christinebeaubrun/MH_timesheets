$(document).on('page:change', function(){
  // $('.shift').on('keyup', $(this), function(){
  //   var payRate = +$('.rate').val();
  //   var shiftHours = +$('.hours').val();
  //   $('.subtotal').val(payRate + shiftHours);
  // });

    $('.container').on('keyup', '.rate', function(){
    var grandTotalElement = $('#timesheet_grand_total'),
        grandTotalValue = 0;

    $('.subtotal').each(function(index, elem){
      var s = parseFloat($(elem).text());
      if (s){
        grandTotalValue += s;
      }
      grandTotalElement.text(grandTotalValue);
    });
  });
  //could refactor function underneath, which repeats function above except switching '.hours' and '.rate'

  $('.container').on('keyup', '.hours', function(){
    var grandTotalElement = $('#timesheet_grand_total'),
        grandTotalValue = 0;

    $('.subtotal').each(function(index, elem){
      var s = parseFloat($(elem).text());
      if (s){
        grandTotalValue += s;
      }
      grandTotalElement.text(grandTotalValue);
    });
  });

  $('.container').on('keyup', '.hours', function(){
    var totalHoursElement = $('#timesheet_total_hours'),
        totalHoursValue = 0;
    $('.hours').each(function(index, elem){
      var h = parseFloat($(elem).val());
      console.log(h);
      if (h){
        totalHoursValue += h;
      }
      totalHoursElement.text(totalHoursValue);
    });
  });
});
