$(document).ready(function() {
  newGrid(64);

  $("button").click(function() {
    var type = ($(this).prop("name"))
    setStyle(type);
    changeColour();
  });

});

function newGrid(size) {
  var container_size = $(".container").width();
  var square_size = String((container_size / size) - 2) + "px";
  var new_grid = (size * size) + 1;
  $(".container").append(new Array(new_grid).join('<div class="square initial"></div>'));
  $(".square").width(square_size);
  $(".square").height(square_size);

  changeColour()
};

function randomColour() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

function resetGrid() {
  $(".square").css({
    "background-color": "rgb(255,255,255)",
    "border": "1px solid gray"
  });
};

function rgbDarker(rgb){
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "rgb(" +
  ((parseInt(rgb[1],10)-8).toString()) + ", " +
  ((parseInt(rgb[1],10)-8).toString()) + ", " +
  ((parseInt(rgb[1],10)-8).toString()) + ")";
};

function changeColour() {
  $(".square").on("mouseenter", function() {
    if ($(this).hasClass("colour")) {
      var randColour = randomColour();
      var style = { backgroundColor: randColour, border: "1px solid "+randColour };
    } else if ($(this).hasClass("gradient")) {
      var darkerCol = rgbDarker($(this).css("background-color"));
      var style = { backgroundColor: darkerCol, border: "1px solid " +darkerCol };
    } else {
      var style = { backgroundColor: "black", border: "1px solid black" };
    }
    $(this).css(style);
  });
};

function setStyle(type) {
  resetGrid();
  if (type === "reset") {
    $(".square").removeClass("colour gradient");
  } else if (type === "colour") {
    $(".square").removeClass("gradient").addClass("colour");
  } else if (type === "gradient") {
    $(".square").removeClass("colour").addClass("gradient");
  }
};
