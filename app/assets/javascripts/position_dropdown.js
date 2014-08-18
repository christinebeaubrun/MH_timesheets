function alertSelection(position) {
  var mhPosition = {
    "Tour Guide": 32,
    "Co-host": 22,
    "Admin": 15.84
  };

  if(position === "Other") {
    $("input#timesheet_pay_rate.rate").prop('disabled', false);
  }
  else {
        $("input#timesheet_pay_rate.rate").prop('disabled', true);
    if (position === "Tour Guide") {
        $("input#timesheet_pay_rate.rate").val('' + mhPosition["Tour Guide"]);
    }
    if (position === "Co-host") {
        $("input#timesheet_pay_rate.rate").val('' + mhPosition["Co-host"]);
   }
      else {
        $("input#timesheet_pay_rate.rate").val('' + mhPosition["Admin"]);
      }
  }
}

$(document).on('change', "select#MH_Position", function(event){
  var select_element = $("select option:selected")[0].value;
  alertSelection(select_element);
});

