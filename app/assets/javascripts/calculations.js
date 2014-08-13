//why is it adding a # to the front of stuff?
//why is the subtotal not calculating?


$(document).on('page:change', function(){
  $('#shifts-wrapper').on('keyup', '.rate', function(){    
    var subtotalElement = $(this).closest('.shift').children('.subtotal');    
    var subtotalNumber =  $(this).val() * $(this).closest('.shift').children('.hours').val();   
    subtotalElement.text(subtotalNumber);
  });


  //could refactor function underneath, which repeats function above except switching '.hours' and '.rate'
  $('#shifts-wrapper').on('keyup', '.hours', function(){
    var subtotalElement = $(this).closest('.shift').children('.subtotal');
    var subtotalNumber =  $(this).val() * $(this).closest('.shift').children('.rate').val();
    subtotalElement.text(subtotalNumber);


  });

    $('#shifts-wrapper').on('keyup', '.rate', function(){
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

  $('#shifts-wrapper').on('keyup', '.hours', function(){
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

   $('#shifts-wrapper').on('keyup', '.hours', function(){
    var totalHoursElement = $('#timesheet_total_hours'),
        totalHoursValue = 0;
    $('.hours').each(function(index, elem){
      var h = parseFloat($(elem).val());
      if (h){
        totalHoursValue += h;
      }
      totalHoursElement.text(totalHoursValue);
    });
  });
});
