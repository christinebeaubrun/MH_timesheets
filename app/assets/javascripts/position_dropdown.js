function setPayRate(position, rateField) {
  var mhPosition = {
    "Tour Guide": 32,
    "Co-host": 22,
    "Admin": 15.84
  };

  if(position === "Other"){
    rateField.prop('disabled', false);
    rateField.val('');
  } else {
    rateField.prop('disabled', true);
    rateField.val('' + mhPosition[position]);
  }

  // if(position === "Other") {
  //   rateField.prop('disabled', false);
  //   rateField.val('');
  // }
  // else {
  //       rateField.prop('disabled', true);
  //   if (position === "Tour Guide") {
  //       rateField.val('' + mhPosition["Tour Guide"]);
  //   }
  //   if (position === "Co-host") {
  //       rateField.val('' + mhPosition["Co-host"]);
  //  }
  //   if (position === "Admin") {
  //       rateField.val('' + mhPosition["Admin"]);
  //     }
  // }
}

function setSubtotal(rate, hours, subtotal){
   var rateAmount = parseFloat(rate.val());
   var hoursAmount = parseFloat(hours.val());

   if(rateAmount && hoursAmount){
     subtotal.val(rateAmount * hoursAmount);
     subtotal.trigger('change');
   }
}

$(document).on('change', "select.MH_Position", function(event){
  var position = $(this).val();
  var rateField = $(this).parents('.shift').find('.rate');
  var hoursField = $(this).parents('.shift').find('.hours');
  var subtotalField = $(this).parents('.shift').find('.subtotal');
  setPayRate(position, rateField);
  setSubtotal(rateField, hoursField, subtotalField);
});

$(document).on('change', '.hours', function(event){
  var rateField = $(this).parents('.shift').find('.rate');
  var hoursField = $(this);
  var subtotalField = $(this).parents('.shift').find('.subtotal');
  setSubtotal(rateField, hoursField, subtotalField);
});

$(document).on('change', ".subtotal", function(event){
  var totalPay = 0;
  var totalHours = 0;
  $('.subtotal').each(function(){
    var subtotal = parseFloat($(this).val());
    if(subtotal){
      totalPay += subtotal;
    }
  });

  $('.hours').each(function(){
    var hours = parseFloat($(this).val());
    if(hours){
      totalHours += hours;
    }
  });

  $('#timesheet_total_hours').val(totalHours);
  $('#timesheet_grand_total').val(totalPay);
});

