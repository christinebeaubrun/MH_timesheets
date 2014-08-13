$(document).on('page:change', function(){
  var maxShifts      = 13, //maximum shifts allowed
      shiftsWrapper  = $('#shifts-wrapper'), //id tag where shifts elements will be inserted
      addShift       = $('#add-shift'),
      removeShift    = $('#remove-shift');

  function appendShift(){
    $('.shift.hidden').clone().removeClass('hidden').appendTo(shiftsWrapper);
  };

  appendShift();

  addShift.on('click', function(event){
    event.preventDefault();
    appendShift();
  });

  removeShift.on('click', function(event){
    event.preventDefault;
    $('div.shift:last').remove();
  });

});
