var diffX = NaN;
var diffY = NaN;
var selectedShapeElement = null;
//mousedown/touchstart event handler
//when user grabs/picks up piece to grab
//compute the pieces x and y coordinates in relation to mouse for ease of drag and store values in global vars for dragging
//store selected shape in a global variable to remeber what piece we are dragging
//add event listeners to track dragging and dropping of picked up shape
function Grab(event) {
  var selectedShape = event.currentTarget;
  selectedShapeElement = document.getElementById(selectedShape.id);

  if (event instanceof TouchEvent == false) {
    diffX =
      event.clientX -
      parseInt(
        window.getComputedStyle(selectedShapeElement).getPropertyValue("left")
      );
    diffY =
      event.clientY -
      parseInt(
        window.getComputedStyle(selectedShapeElement).getPropertyValue("top")
      );
  }

  selectedShapeElement.addEventListener("mousemove", Drag);
  selectedShapeElement.addEventListener("touchmove", Drag);
  document.addEventListener("mouseup", Drop);
  selectedShapeElement.addEventListener("touchend", Drop);

  event.preventDefault();
}
//handles mousemove/touchmove event
//depending on if user is on mobile or using a mouse
//this function calcualtes x and y coords in relation to users mouse or finger
//to make the shape piece move with dragging device
function Drag(event) {
  console.log("drag");

  var dragPosX;
  var dragPosY;
  if (event instanceof TouchEvent) {
    dragPosX = event.touches[0].clientX;
    dragPosY = event.touches[0].clientY;
  } else {
    dragPosX = event.clientX - diffX;
    dragPosY = event.clientY - diffY;
  }

  selectedShapeElement.style.top = dragPosY + "px";
  selectedShapeElement.style.left = dragPosX + "px";
  selectedShapeElement.style.zIndex = "2";
}
//handles mouseup/touchend event
//when user lets go of a piece, the piece will stop dragging and stay in its dropped place
//we remove all event listeners assigned when we grabbed the piece so that the piece stays in its place
//and can only be moved again by re grabbing it mousedown/touchstart
function Drop(event) {
  selectedShapeElement.style.zIndex = "1";
  selectedShapeElement.removeEventListener("mousemove", Drag);
  selectedShapeElement.removeEventListener("touchmove", Drag);
  document.removeEventListener("mouseup", Drop);
  selectedShapeElement.removeEventListener("touchend", Drop);
  diffX = NaN;
  diffY = NaN;
  selectedShapeElement = null;
  event.preventDefault();
}
