var activePieceElement = null;
//gets piece selected and stores in a global variable in this file from onclick event
//mides any previous error messages from using other pieces
function GetActivePiece(event) {
  activePieceElement = event.currentTarget;
  $("#errorMsg").prop("hidden", true);
}
//moves selected piece in the -x direction by 1 pixel
function MovePieceLeft() {
  var moveSpace =
    parseInt(
      window.getComputedStyle(activePieceElement).getPropertyValue("left")
    ) + -1;
  activePieceElement.style.left = moveSpace + "px";
}
//moves selected piece in the +x direction by 1 pixel
function MovePieceRight() {
  var moveSpace =
    parseInt(
      window.getComputedStyle(activePieceElement).getPropertyValue("left")
    ) + 1;
  activePieceElement.style.left = moveSpace + "px";
}
//moves selected piece in the +y direction by 1 pixel
function MovePieceUp() {
  var moveSpace =
    parseInt(
      window.getComputedStyle(activePieceElement).getPropertyValue("top")
    ) + -1;
  activePieceElement.style.top = moveSpace + "px";
}
//moves selected piece in the -y direction by 1 pixel
function MovePieceDown() {
  var moveSpace =
    parseInt(
      window.getComputedStyle(activePieceElement).getPropertyValue("top")
    ) + 1;
  activePieceElement.style.top = moveSpace + "px";
}
//rotates selcted piece by 45 degrees using transform
//will not allow users to rotato the rhomboid
function RotatePiece() {
  if (activePieceElement.id != "gold-rhomboid") {
    var currentRotationalPos = GetRotationalDegreeValue();
    currentRotationalPos += 45;

    activePieceElement.style.transform = `rotate(${currentRotationalPos}deg)`;
  } else {
    $("#errorMsg").prop("hidden", false);
  }
}
//gets the transform rotation degree number from the selected piece
function GetRotationalDegreeValue() {
  var degree = 0;

  var transformElementVal = window
    .getComputedStyle(activePieceElement)
    .getPropertyValue("transform");

  const pieceTansformMatrix = new DOMMatrix(transformElementVal);

  degree =
    Math.atan2(pieceTansformMatrix.b, pieceTansformMatrix.a) * (180 / Math.PI);

  return degree;
}
