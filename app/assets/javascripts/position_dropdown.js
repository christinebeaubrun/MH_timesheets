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
}

function calculateSubtotal(hours, payRate, subtotalField) {
  var totalPay = 0;
  if(hours && payRate) {
    subtotalField.val(hours * payRate);
  }
}

function addTotalHours(timesheetTotalHours, totalWeeklyHours) {
  $('input.subtotal').trigger('change');
  timesheetTotalHours.val(totalWeeklyHours);
}

function addTotalPay(timesheetGrandTotal, totalWeeklyPay) {
  timesheetGrandTotal.val(totalWeeklyPay);
}


$(document).on('change', ".MH_Position", function() {
  var position = $(this).val();
  var rateField = $(this).parents(".shift").find(".rate");
  setPayRate(position, rateField);
});

$(document).on('keyup', ".hours", function() {
  var hours = parseFloat($(this).val());
  var payRate = parseFloat($(this).parents(".shift").find(".rate").val());
  var subtotalField = $(this).parents(".shift").find(".subtotal");
  calculateSubtotal(hours, payRate, subtotalField);
});

$(document).on('keyup', '.hours', function() {
  var totalhoursArray = $('.hours');
  var totalWeeklyHours = 0;
  totalhoursArray.each(function(index, value) {
      if( parseFloat( $(this).val()) ) {
          totalWeeklyHours += parseFloat( $(this).val() );
      }
  });
  var timesheetTotalHours = $('#timesheet_total_hours');
  addTotalHours(timesheetTotalHours, totalWeeklyHours);
});

$(document).on('change', 'input.subtotal', function() {
  var subtotalArray = $('.subtotal');
  var totalWeeklyPay = 0;
  subtotalArray.each(function(index, value) {
      if( parseFloat( $(this).val()) ) {
        totalWeeklyPay += parseFloat( $(this).val() );
      }
  });
  var timesheetGrandTotal = $('#timesheet_grand_total');
  addTotalPay(timesheetGrandTotal, totalWeeklyPay);
});

