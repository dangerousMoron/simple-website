//stolen from https://github.com/denysvitali/thebestmotherfuckingwebsite

"use strict";
var r = document.getElementById("rbw"),
  currentHue = 0,
  hueAddition = 5,
  documentElement = document.getElementsByTagName("html")[0],
  clickEvent = "ontouchstart" in window ? "touchend" : "click",
  classMethods = ["remove", "add"],
  rainbowTiming = 1000 / 25,
  stringArray = ["Add more contrast", "Remove additional contrast", "Inverted mode", "Normal mode"];

function createControls() {
  var contrastDiv = document.createElement('div');
    contrastDiv.id = "contrast";
    contrastDiv.innerText = stringArray[0];

  var nightmodeDiv = document.createElement('div');
    nightmodeDiv.id = "invmode";
    nightmodeDiv.innerText = stringArray[2];
  document.body.appendChild(contrastDiv);
  document.body.appendChild(nightmodeDiv);
}

function doColors() {
  var color = "hsl(" + currentHue + ", 80%, 60%)",
    nextHue = currentHue + hueAddition;
  currentHue = nextHue > 360 ? 0 : nextHue;
  r.style.color = color;
  setTimeout(doColors, rainbowTiming);
}

function someControl(id, textArr, className) {
  /* You see? No  jQuery needed, check:
   * http://www.vanilla-js.com/
   * http://jsperf.com/getelementbyid-vs-jquery-id/44
   */
  var el = document.getElementsByTagName("html")[0];
  var acbox = document.getElementById(id),
    textNode = acbox.firstChild,
    toggled = false;
  acbox.addEventListener(
    clickEvent,
    function() {
      var selector = Number((toggled = !toggled));
      textNode.data = textArr[selector];
      el.classList[classMethods[selector]](className);
    },
    false
  );
}

function addContrastControl() {
  someControl(
    "contrast",
    [stringArray[0], stringArray[1]],
    "contrast"
  );
}

function addInvertedControl() {
  var el = document.getElementsByTagName("html")[0];
  el.classList[classMethods[1]]("inverted"); //stupid kludge to make it dark mode by default

  someControl("invmode", [stringArray[2], stringArray[3]], "inverted");
}
// Go back to previous page
function goBack() {
  window.history.back();
}

createControls();
doColors();
addContrastControl();
addInvertedControl();
