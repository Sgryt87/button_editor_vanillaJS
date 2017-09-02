var style;

window.onload = function save() {
  var print = document.getElementById('print');
  style = print.style;
}

function reset() {
  var print = document.getElementById('print');
  var inputs = document.getElementsByClassName('input');
  for(var i = 0; i < inputs.length; i++) {
    inputs[i].value = inputs[i].dataset.value;
  }
  var checkboxes = document.querySelectorAll("input[type=checkbox]");
  for(var i = 0; i < checkboxes.length; i++){
    checkboxes[i].checked = false;
    enabled(checkboxes[i]);
  }
  print.style = style;
}

function enabled(checkbox) {
  // console.log(el.parentNode);
  var inputs = checkbox.parentNode.getElementsByClassName('input');
  for(var i = 0; i < inputs.length; i++) {
    inputs[i].disabled = !checkbox.checked;
  }
}

function inputText() {
  var text = document.getElementById('text');
  var print = document.getElementById('print');
  print.innerHTML = text.value;
};

function inputFF() {
  var selected = document.getElementById('select').value;
  var print = document.getElementById('print');
  print.style.fontFamily = selected;
};

function fontColorVal() {
  var colorText = document.getElementById('color-text');
  var colorBox = document.getElementById('color-box');
  var print = document.getElementById('print');
  colorBox.value = colorText.value;
  print.style.color = colorText.value;
}

function fontColorBox() {
  var colorText = document.getElementById('color-text');
  var colorBox = document.getElementById('color-box');
  var print = document.getElementById('print');
  colorText.value = colorBox.value;
  print.style.color = colorBox.value;
}

function fontSizeText() {
    var fontSizeText = document.getElementById('font-size-text');
    var fontSizeSlider = document.getElementById('font-size-slider');
    var print = document.getElementById('print');
    fontSizeSlider.value = fontSizeText.value;
    print.style.fontSize = fontSizeText.value + 'px';
}

function fontSizeSlider() {
    var fontSizeText = document.getElementById('font-size-text');
    var fontSizeSlider = document.getElementById('font-size-slider');
    var print = document.getElementById('print');
    fontSizeText.value = fontSizeSlider.value;
    print.style.fontSize = fontSizeSlider.value + 'px';
}
