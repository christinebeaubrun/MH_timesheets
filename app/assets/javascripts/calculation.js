// $('form#new_timesheet input').each(function(){
//   var thisId = $(this).attr('id');
//   $('span[role=' + thisId + ']').text($(this).val());
// });

$(document).on('page:change', function(){


  $('#shifts-wrapper').on('keyup', '.rate', function(){

    var subtotalElement = $(this).closest('.shift').children('.subtotal');


    console.log($(this).closest('.shift').children('.hours').val());
    var subtotalNumber =  $(this).val() * $(this).closest('.shift').children('.hours').val();
    //console.log("subtotal number is " + subtotalNumber);
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
