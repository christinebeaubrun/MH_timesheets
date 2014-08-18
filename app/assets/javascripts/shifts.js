$(document).on('page:change', function(){
  var shiftsWrapper  = $('#shifts-wrapper'), //id tag where shifts elements will be inserted
  addShift       = $('#add-shift'),
  removeShift    = $('#remove-shift');

  function appendShift(){
    $('.shift.hidden').clone().removeClass('hidden').appendTo(shiftsWrapper);
 };

  appendShift();

  $(addShift).on('click', function(ev){
    ev.preventDefault();
    appendShift();
  });

  $(removeShift).on('click', function(ev){
    ev.preventDefault();
    if ($('div.shift').not('.hidden').length > 1){
      $("div[class='shift']:not('.hidden'):last").remove();
    }
  });

});
