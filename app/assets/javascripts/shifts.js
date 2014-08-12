$(document).on('page:change', function(){
  var maxShifts      = 13, //maximum shifts allowed
      shiftsWrapper  = $('#shifts-wrapper'), //id tag where shifts elements will be inserted
      addShift       = $('#add-shift'),
      removeShift    = $('#remove-shift'),
      x              = shiftsWrapper.length,
      shiftCount     = 0,
      shiftForm      = '<div class="row"><div class="large-12 large-centered columns"><hr></div></div><br><div class="row"><div class="large-6 small-12 columns"><div class="row collapse"><div class="large-3 small-2 columns"><span class="prefix">date</span></div><div class="large-9 small-10 columns"><input id="timesheet_date" name="timesheet[date]" type="date"></div></div></div><div class="large-6 columns"><input id="timesheet_start_time" name="timesheet[start_time]" placeholder="Start Time" type="text"></div></div><div class="row"><div class="large-6 medium-6 columns"><input type="text" class="position" name="timesheet[position]" placeholder="Position" type="text"></div><div class="large-6 medium-6 columns"><input id="timesheet_pay_rate" name="timesheet[pay_rate]" placeholder="Pay Rate" type="text"></div></div><div class="row"><div class="large-6 medium-6 columns"><input id="timesheet_hours_worked" name="timesheet[hours_worked]" placeholder="Hours Worked" type="text"></div><div class="large-6 medium-6 columns"><label class="subtotal" class="subtotal" name="timesheet[shifts][][subtotal]"></div></div>';



  $(addShift).on('click', function(event){
    event.preventDefault();
    if (x <= maxShifts) {
      shiftsWrapper.append(shiftForm);
      x++;
      shiftCount++;
    }
  });

  $(removeShift).on('click', function(event){
    event.preventDefault();
  });
});
