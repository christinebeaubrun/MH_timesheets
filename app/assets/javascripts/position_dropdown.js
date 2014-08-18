// $(document).on('page:change', function(){
//   var position = {
//     "Tour Guide": 32,
//     "Co-host": 22,
//     "Admin": 15.84
//   };

function alertSelection(position) {
  if(position === "Other") {
    alert("You selected: " + position );
  }
}

$(document).on('change', "select#MH_Position", function(event){
  var select_element = $("select option:selected")[0].value;
  alertSelection(select_element);
});

