$( document ).ready(function() {
  var position = {
    "Tour Guide": 32,
    "Co-host": 22,
    "Admin": 15.84
  };

  $('#MH_Position').change(function(){
       var positionSelected = $(this).find("option:selected").attr('value');
        function alertSelection(position) {
            if(position === "Other") {
              alert("You selected: " + position );
            }
        }
    alertSelection(positionSelected);
  });
});

