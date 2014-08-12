

$(document).on('page:change', function(){

  var form;
  
  form = [
  '<div class="shift"><br><a>Shift:</a><br>',
  'Date of shift: <input type="text" class="date" name="timesheet[shifts][][date]"><br>',
  'Start time: <input type="text" class="start_time" name="timesheet[shifts][][start_time]"><br>',
  'Position: <input type="text" class="position" name="timesheet[shifts][][position]"><br>', //needs a name or an id? name...
  'Rate per hour: <input type="text" class="rate" name="timesheet[shifts][][pay_rate]"></br>',
  'Hours this shift: <input type="text" class="hours" name="timesheet[shifts][][hours_worked]"></br>',
  'Subtotal: <label class="subtotal" class="subtotal" name="timesheet[shifts][][subtotal]"></div>',
  ];

  function appendForm() {
    $('#place_to_add_form').append(form.join("\n"));  
  }

  appendForm();
  
  $('#add_form_button').click(function(){
    appendForm();
  });
  


  $('.container').on('keyup', '.rate', function(){    
    var subtotalElement = $(this).closest('.shift').children('.subtotal');    
    var subtotalNumber =  $(this).val() * $(this).closest('.shift').children('.hours').val();   
    subtotalElement.text(subtotalNumber);
  });
  //could refactor function underneath, which repeats function above except switching '.hours' and '.rate'
  $('.container').on('keyup', '.hours', function(){
    var subtotalElement = $(this).closest('.shift').children('.subtotal');
    var subtotalNumber =  $(this).val() * $(this).closest('.shift').children('.rate').val();
    subtotalElement.text(subtotalNumber);

    (function(){
    })();

  });


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