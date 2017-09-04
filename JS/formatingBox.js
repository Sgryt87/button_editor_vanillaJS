// var style;
//
// window.onload = function save() {
//   var print = document.getElementById('print');
//   style = print.style;
// }

function padTopBox() {
  var padTB = document.getElementById('padding-top-box');
  var padTV = document.getElementById('padding-top-val');
  var print = document.getElementById('print');
  padTV.value = padTB.value;
  print.style.paddingTop = padTB.value + 'px';
}

function padTopVal() {
  var padTB = document.getElementById('padding-top-box');
  var padTV = document.getElementById('padding-top-val');
  var print = document.getElementById('print');
  padTB.value = padTV.value;
  print.style.paddingTop = padTV.value + 'px';
}

function padRightBox() {
  var padTB = document.getElementById('padding-right-box');
  var padTV = document.getElementById('padding-right-val');
  var print = document.getElementById('print');
  padTV.value = padTB.value;
  print.style.paddingRight = padTB.value + 'px';
}

function padRightVal() {
  var padTB = document.getElementById('padding-right-box');
  var padTV = document.getElementById('padding-right-val');
  var print = document.getElementById('print');
  padTB.value = padTV.value;
  print.style.paddingRight = padTV.value + 'px';
}

function padBotBox() {
  var padTB = document.getElementById('padding-bottom-box');
  var padTV = document.getElementById('padding-bottom-val');
  var print = document.getElementById('print');
  padTV.value = padTB.value;
  print.style.paddingBottom = padTB.value + 'px';
}

function padBotVal() {
  var padTB = document.getElementById('padding-bottom-box');
  var padTV = document.getElementById('padding-bottom-val');
  var print = document.getElementById('print');
  padTB.value = padTV.value;
  print.style.paddingBottom = padTV.value + 'px';
}

function padLeftBox() {
  var padTB = document.getElementById('padding-left-box');
  var padTV = document.getElementById('padding-left-val');
  var print = document.getElementById('print');
  padTV.value = padTB.value;
  print.style.paddingLeft = padTB.value + 'px';
}

function padLeftVal() {
  var padTB = document.getElementById('padding-left-box');
  var padTV = document.getElementById('padding-left-val');
  var print = document.getElementById('print');
  padTB.value = padTV.value;
  print.style.paddingLeft = padTV.value + 'px';
}
