$(document).on('page:change', function(){
  var maxShifts      = 13, //maximum shifts allowed
      shiftsWrapper  = $('#shifts-wrapper'), //id tag where shifts elements will be inserted
      addShift       = $('#add-shift'),
      removeShift    = $('#remove-shift'),
      shiftCount     = 0;

      // shiftForm      = '<div id="new-shift-row-'+ shiftCount +'"><div class="row"><div class="large-6 small-12 columns"><div class="row collapse"><div class="large-3 small-2 columns"><span class="prefix">date</span></div><div class="large-9 small-10 columns"><input id="timesheet_date" name="timesheet[shifts][][date]" type="date"></div></div></div><div class="large-6 columns"><input id="timesheet_start_time" name="timesheet[shifts][][start_time]" placeholder="Start Time" type="text"></div></div><div class="row"><div class="large-6 medium-6 columns"><input type="text" class="position" name="timesheet[shifts][][position]" placeholder="Position" type="text"></div><div class="large-6 medium-6 columns"><input id="timesheet_pay_rate" name="timesheet[shifts][][pay_rate]" placeholder="Pay Rate" type="text"></div></div><div class="row"><div class="large-6 medium-6 columns"><input id="timesheet_hours_worked" name="timesheet[shifts][][hours_worked]" placeholder="Hours Worked" type="text"></div><div class="large-6 medium-6 columns"><label class="subtotal" class="subtotal" name="timesheet[shifts][][subtotal]"></div></div></div><div class="row"><div class="large-12 large-centered columns"><hr></div></div><br>';

  function loadFirstShift(){
      shiftCount++;
      var firstShift;
      firstShift = '<div class="shift" id="new-shift-row-'+ shiftCount +'"><div class="row"><div class="large-6 medium-6 small-12 columns"><div class="row collapse"><div class="large-3 medium-3 small-2 columns"><span class="prefix">date</span></div><div class="large-9 medium-9 small-10 columns"><input class="date" id="timesheet_date" name="timesheet[shifts][][date]" type="date" required></div></div></div><div class="large-6 medium-6 small-12 columns"><input class="start_time" id="timesheet_start_time" name="timesheet[shifts][][start_time]" placeholder="Start Time" type="text" required></div></div><div class="row"><div class="large-6 medium-6 small-12 columns"><input type="text" class="position" name="timesheet[shifts][][position]" placeholder="Position" type="text" required></div><div class="large-6 medium-6 small-12 columns"><div class="row collapse"><div class="large-2 medium-2 small-2 columns"><span class="prefix">$</span></div><div class="large-10 medium-10 small-10 columns"><input class="rate" id="timesheet_pay_rate" name="timesheet[shifts][][pay_rate]" placeholder="Pay Rate" type="text" required></div></div></div></div><div class="row"><div class="large-6 medium-6 small-12 columns"><div class="row collapse"><div class="large-3 medium-3 small-2 columns"><span class="prefix">hrs</span></div><div class="large-9 medium-9 small-10 columns"><input class="hours" id="timesheet_hours_worked" name="timesheet[shifts][][hours_worked]" placeholder="Time On Shift" type="text" required></div></div></div><div class="large-6 medium-6 small-12 columns"><div class="row collapse"><div class="large-2 medium-2 small-2 columns"><span class="prefix">$</span></div><div class="large-10 medium-10 small-10 columns"><input class="subtotal" name="timesheet[shifts][][subtotal]" placeholder="Subtotal" type="text" required></div></div></div></div></div>';
      shiftsWrapper.append(firstShift);
  };




  loadFirstShift();

  // var rowBar = '<div class="row"><div class="large-12 large-centered columns"><hr></div></div><br>'

  $(addShift).on('click', function(ev){
    var shiftForm;
    ev.preventDefault();
    if (shiftCount <= maxShifts) {
      shiftCount++;
      shiftForm = '<div class="shift" id="new-shift-row-'+ shiftCount +'"><div class="row"><div class="large-12 large-centered columns"><hr></div></div><br><div class="row"><div class="large-6 medium-6 small-12 columns"><div class="row collapse"><div class="large-3 medium-3 small-2 columns"><span class="prefix">date</span></div><div class="large-9 medium-9 small-10 columns"><input class="date" id="timesheet_date" name="timesheet[shifts][][date]" type="date" required></div></div></div><div class="large-6 medium-6 small-12 columns"><input class="start_time" id="timesheet_start_time" name="timesheet[shifts][][start_time]" placeholder="Start Time" type="text" required></div></div><div class="row"><div class="large-6 medium-6 small-12 columns"><input type="text" class="position" name="timesheet[shifts][][position]" placeholder="Position" type="text" required></div><div class="large-6 medium-6 small-12 columns"><div class="row collapse"><div class="large-2 medium-2 small-2 columns"><span class="prefix">$</span></div><div class="large-10 medium-10 small-10 columns"><input class="rate" id="timesheet_pay_rate" name="timesheet[shifts][][pay_rate]" placeholder="Pay Rate" type="text" required></div></div></div></div><div class="row"><div class="large-6 medium-6 small-12 columns"><div class="row collapse"><div class="large-3 medium-3 small-2 columns"><span class="prefix">hrs</span></div><div class="large-9 medium-9 small-10 columns"><input class="hours" id="timesheet_hours_worked" name="timesheet[shifts][][hours_worked]" placeholder="Time On Shift" type="text" required></div></div></div><div class="large-6 medium-6 small-12 columns"><div class="row collapse"><div class="large-2 medium-2 small-2 columns"><span class="prefix">$</span></div><div class="large-10 medium-10 small-10 columns"><input class="subtotal" name="timesheet[shifts][][subtotal]" placeholder="Subtotal" type="text" required></div></div></div></div></div>';
      shiftsWrapper.append(shiftForm);
    }
  });

  $(removeShift).on('click', function(ev){
    ev.preventDefault();
    if ( shiftCount > 1) {
      $('div[id="new-shift-row-'+ shiftCount +'"]').remove();
      shiftCount--;
    }
  });
});
