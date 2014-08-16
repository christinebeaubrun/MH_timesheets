//why is it adding a # to the front of stuff?
//why is the subtotal not calculating?


$(document).on('page:change', function(){
  $('#timesheet').on('keyup', '.rate', function(){  
    var subtotalElement = $(this).closest('.shift').children('.subtotal-div-1').children('.subtotal-div-2').children('.subtotal-div-3').children('.subtotal-div-4').children('.subtotal');
    var subtotalNumber =  $(this).val() * $(this).closest('.shift').children('.hours-div-1').children('.hours-div-2').children('.hours-div-3').children('.hours-div-4').children('.hours').val();   
    subtotalElement.val(subtotalNumber);
  });


  //could refactor function underneath, which repeats function above except switching '.hours' and '.rate'
  $('#timesheet').on('keyup', '.hours', function(){
    var subtotalElement = $(this).closest('.shift').children('.subtotal-div-1').children('.subtotal-div-2').children('.subtotal-div-3').children('.subtotal-div-4').children('.subtotal');
    var subtotalNumber =  $(this).val() * $(this).closest('.shift').children('.rate-div-1').children('.rate-div-2').children('.rate-div-3').children('.rate-div-4').children('.rate').val();
    subtotalElement.val(subtotalNumber);

  });

    $('#timesheet').on('keyup', '.rate', function(){
    var grandTotalElement = $('#timesheet_grand_total'),
        grandTotalValue = 0;

    $('.subtotal').each(function(index, elem){
      var s = parseFloat($(elem).val());
      if (s){
        grandTotalValue += s;
      }
      grandTotalElement.val(grandTotalValue);
    });
  });
  //could refactor function underneath, which repeats function above except switching '.hours' and '.rate'

  $('#timesheet').on('keyup', '.hours', function(){
    var grandTotalElement = $('#timesheet_grand_total'),
        grandTotalValue = 0;

    $('.subtotal').each(function(index, elem){
      var s = parseFloat($(elem).val());
      if (s){
        grandTotalValue += s;
      }
      grandTotalElement.val(grandTotalValue);
    });
  });

   $('#timesheet').on('keyup', '.hours', function(){
    var totalHoursElement = $('#timesheet_total_hours'),
        totalHoursValue = 0;
    $('.hours').each(function(index, elem){
      var h = parseFloat($(elem).val());
      if (h){
        totalHoursValue += h;
      }
      totalHoursElement.val(totalHoursValue);
    });
  });
});
