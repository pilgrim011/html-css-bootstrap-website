$(document).ready(function() {
  $("#toggle").on("click", function() {
    $("#mynav").css("width", "250px");
    $("#grayed").addClass("enabled");
  });

  $("#one,#two,#three").on("click", function() {
    $("#mynav").css("width", "0px");
    $("#grayed").removeClass("enabled");
  });
});
