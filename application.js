$(document).ready(function() {
  newGrid(64, "black");

  $("button[name='clear_button']").click(function(){
    $(".square").removeClass("black multicolour gradient").addClass("initial");
  });

  $("button[name='reset_button']").click(function(){
    var type = $(this).attr("id")
    clearGrid();
    var grid_size = prompt("How many squares wide is the new grid?", "64");
    newGrid(grid_size, type);
  });

});

function newGrid(size, type) {
  var container_size = $(".container").width();
  var square_size = String((container_size / size) - 2) + "px";
  var new_grid = (size * size) + 1;
  $(".container").append(new Array(new_grid).join('<div class="square initial"></div>'));
  $(".square").width(square_size);
  $(".square").height(square_size);

  changeColours(type)
};

function changeColours(colour) {
  $(".square").mouseenter(function(){
    $(this).addClass(colour);
  });
}

function clearGrid() {
  $(".container").empty();
};
