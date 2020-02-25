
$(document).ready(function() {
  $("#toggle").on("click", function() {
    $("#mynav").css("width","250px");
    $("#grayed").addClass("enabled");
  });

  $("#one").on("click", function() {
    
    $("#grayed").removeClass("enabled");
  });

});

