var imgLst = document.querySelector('.image-list');
// console.log(imgLst);

var images = imgLst.querySelectorAll('img');
// console.log(images);

var controls = document.querySelectorAll('.control');
// console.log(controls);

function removeFromList(useArray, className) {

  for (var i = 0; i < useArray.length; i++) {
    var img = useArray[i];
    var className = className;
    if (img.classList) {
      img.classList.remove(className);
    } else {
      img.className = img.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

}

function selectItem(year) {
  console.log(year);

  removeFromList(images, 'active');
  removeFromList(controls, 'selected');

  var control = document.getElementById(year);
  if (control.classList) {
    control.classList.add('selected');
  } else {
    control.className += ' selected';
  }

  for (var i = 0; i < controls.length; i++) {
    console.log(controls[i].id);
    if (controls[i].id === year) {
      var image = images[i];
      if (image.classList) {
        image.classList.add('active');
      } else {
        image.className += ' active';
      }
    }
  }

} 

for (var i = 0; i < controls.length; i++) {

  controls[i].addEventListener('click', function() {
    selectItem(this.id);
  });

}

