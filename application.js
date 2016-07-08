$(document).ready(function() {
  newGrid(64);

  $("button[name='clear_button']").click(function(){
    $(".bit").removeClass("active").css("border-color", "rgb(128, 128, 128)");
  });

  $("button[name='reset_button']").click(function(){
    clearGrid();
    var grid_size = prompt("How many squares wide is the new grid?", "64");
    newGrid(grid_size);
  });

});

function newGrid(size) {
  var container_size = $(".container").width();
  var square_size = String((container_size / size) - 2) + "px";
  var new_grid = (size * size) + 1;
  $(".container").append(new Array(new_grid).join('<div class="bit"></div>'));
  $(".bit").width(square_size);
  $(".bit").height(square_size);

  // need to have the mouseenter inside this function rather than inside
  // $(document).ready for some reason?
  $(".bit").mouseenter(function(){
    $(this).addClass("active");
  });

};

function clearGrid() {
  $(".container").empty();
};
