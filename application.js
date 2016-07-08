$(document).ready(function() {
  $(".container").append(new Array(257).join('<div class="bit"></div>'));

  $(".bit").mouseenter(function(){
    $(this).toggleClass("active");
    if ($(this).css("border-color") == "rgb(128, 128, 128)") {
      $(this).css("border-color", "black");
    } else {
      $(this).css("border-color", "rgb(128, 128, 128)");
    }
  });

  $("button[name='clear_button']").click(function(){
    $(".bit").removeClass("active").css("border-color", "rgb(128, 128, 128)");
  });

  $("button[name='reset_button']").click(function(){
    var grid_size = prompt("How many squares in the new grid?", "16");
    var new_grid = grid_size * grid_size
    
  });
});
