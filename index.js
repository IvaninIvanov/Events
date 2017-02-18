/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year shoudl use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "UP778885";
}

function targetTextToConsole(event){
  console.log(event.target.textContent);
}

function tttcAttacher(){
  document.getElementById('button0').addEventListener('click', targetTextToConsole);
}

function lovelyParaAttacher() {
  document.getElementById('thisisalovelyparagraph').addEventListener("click", lovelyToggle);
}

function lovelyButtonAttacher(){
  document.getElementById("button1").addEventListener("click", lovelyToggle);
}
function concatEventHandler() {
  var a = document.getElementById("in1").value;
  var b = document.getElementById("in2").value;
  document.getElementById("out1").innerHTML = a+b;
}
function concatAttacher() {
  document.getElementById("in1").addEventListener("change", concatEventHandler);
  document.getElementById("in2").addEventListener("change", concatEventHandler);
}

function snitchAttacher(){
  document.getElementById("mousewatcher").addEventListener("mouseout", snitchUpdater);
  document.getElementById("mousewatcher").addEventListener("mouseover", snitchUpdater);
}

function exampleEventHandler(event) {
    console.log("This is a", event.type, "event.");
}

function snitchUpdater(event) {
  if (event.type == 'mouseover') {
    window.snitch.textContent = "IN";
  }
  if (event.type == 'mouseout') {
    window.snitch.textContent = "OUT";
  }
}

function reportUpdater(event) {
  var x = event.screenX;
  var y = event.screenY;
  document.getElementById('report').textContent = "x: " + x + " y: " + y;
}

function reportAttacher() {
  document.getElementById('mousereporter').addEventListener("mousemove", reportUpdater);
}

function idValidationAttacher() {
  document.getElementById('newid').addEventListener('input', idValidationHandler )
}

function idValidationHandler() {
  var s = document.getElementById('newid').value;
  if (s.indexOf(' ') >= 0) {
    newid.className = 'invalid';
  }
  else {
    newid.className = ""
  }
}
