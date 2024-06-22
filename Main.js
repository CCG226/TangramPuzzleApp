//adds all the default event listeners to each piece using jquery
//mousedown, onclick, touchstart
function SetUp() {
  $("#purple-triangle").get(0).addEventListener("mousedown", Grab);
  $("#blue-triangle").get(0).addEventListener("mousedown", Grab);
  $("#red-triangle").get(0).addEventListener("mousedown", Grab);
  $("#teal-triangle").get(0).addEventListener("mousedown", Grab);
  $("#violet-triangle").get(0).addEventListener("mousedown", Grab);
  $("#green-square").get(0).addEventListener("mousedown", Grab);
  $("#gold-rhomboid").get(0).addEventListener("mousedown", Grab);

  $("#purple-triangle").get(0).addEventListener("touchstart", Grab);
  $("#blue-triangle").get(0).addEventListener("touchstart", Grab);
  $("#red-triangle").get(0).addEventListener("touchstart", Grab);
  $("#teal-triangle").get(0).addEventListener("touchstart", Grab);
  $("#violet-triangle").get(0).addEventListener("touchstart", Grab);
  $("#green-square").get(0).addEventListener("touchstart", Grab);
  $("#gold-rhomboid").get(0).addEventListener("touchstart", Grab);

  $("#purple-triangle").get(0).addEventListener("click", GetActivePiece);
  $("#blue-triangle").get(0).addEventListener("click", GetActivePiece);
  $("#red-triangle").get(0).addEventListener("click", GetActivePiece);
  $("#teal-triangle").get(0).addEventListener("click", GetActivePiece);
  $("#violet-triangle").get(0).addEventListener("click", GetActivePiece);
  $("#green-square").get(0).addEventListener("click", GetActivePiece);
  $("#gold-rhomboid").get(0).addEventListener("click", GetActivePiece);

  $("#rotateBtn").get(0).addEventListener("click", RotatePiece);
  $("#moveLeftBtn").get(0).addEventListener("click", MovePieceLeft);
  $("#moveRightBtn").get(0).addEventListener("click", MovePieceRight);
  $("#moveUpBtn").get(0).addEventListener("click", MovePieceUp);
  $("#moveDownBtn").get(0).addEventListener("click", MovePieceDown);
}
//controls how web application is dynamically displayed based on what device user is using
function LayoutHandler() {
  //runs on refresh / onload
  SetUp(); //set event listeners

  var device = GetUserDeviceType();
  console.log(device);
  if (device == "Mobile") {
    var container = document.getElementById("container");
    container.style.display = "block";
    container.style.justifyContent = "";
    container.style.marginLeft = "0px";
    var puzzle = document.getElementById("puzzle");
    puzzle.style.height = "60vh";
    puzzle.style.width = "65vh";
    var outline = document.getElementById("outline");
    outline.style.height = "60vh";
    outline.style.width = "65vh";
    var img = document.getElementById("outlineImg");
    img.style.width = "42rem";
    img.style.marginLeft = "0px";
  }
  if (device == "Tablet") {
    var container = document.getElementById("container");
    container.style.display = "block";
    container.style.justifyContent = "";
    container.style.marginLeft = "0px";
    var puzzle = document.getElementById("puzzle");
    puzzle.style.marginLeft = "20%";
    puzzle.style.height = "40vh";
    puzzle.style.width = "45vh";
    var outline = document.getElementById("outline");
    outline.style.marginLeft = "20%";
    outline.style.height = "40vh";
    outline.style.width = "45vh";
    var img = document.getElementById("outlineImg");
    img.style.width = "42rem";
    img.style.marginLeft = "0px";
  }
}
//determines type of device client is on
function GetUserDeviceType() {
  console.log(window.innerWidth);
  if (window.innerWidth <= 576) {
    //mobile
    return "Mobile";
  } else if (window.innerWidth <= 900) {
    //tablet
    return "Tablet";
  } else {
    //desktops or larger
    return "Desktop";
  }
}
