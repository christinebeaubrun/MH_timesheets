

$(document).on('page:change', function(){
    var review = $('#review'),
        edit = $('#edit'),
        timesheet = $('#timesheet'),
        emailPreview = $('#email-preview');

    review.on('click', function(event){
      event.preventDefault();
      // iterate over formsheet inputs and associate the values to their divs
      $('form#new_timesheet input').each(function(){
        var thisId = $(this).attr('id');
        $('span[role=' + thisId + ']').text($(this).val());
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


$(document).ready(function(){

  var form;
  
  form = [
  '<div class="shift"><br><a>Shift:</a><br>',
  'Date of shift: <input type="text"><br>',
  'Start time: <input type="text"><br>',
  'Position: <input type="text"><br>', //needs a name or an id? name...
  'Rate per hour: <input type="text" class="rate"></br>',
  'Hours this shift: <input type="text" class="hours"></br>',
  'Subtotal: <label class="subtotal"></div>',
  ];

  function appendForm() {
    $('#place_to_add_form').append(form.join("\n"));  
  }

  appendForm();
  console.log('one appendForm was called');
  
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
      console.log('subTotal calculation was called');
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
        console.log("totalhours was called");       
        totalHoursValue += h;
      }
      totalHoursElement.text(totalHoursValue);
    });
  });

}); 
