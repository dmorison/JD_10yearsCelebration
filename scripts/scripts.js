var windowHeight = window.innerHeight;
console.log('window height: ' + windowHeight);
var height_75 = windowHeight * 0.75;
console.log('height 75: ' + height_75);
var height_15 = windowHeight * 0.15;
console.log('height 15: ' + height_15);
var height_10 = windowHeight * 0.1;
console.log('height 10: ' + height_10);

var mainView = document.querySelector('main');
mainView.style.height = windowHeight + 'px';
// mainView.style.overflow = 'hidden';
var sectionTitle = mainView.querySelector('.title');
sectionTitle.style.height = height_15 + 'px';
var articleContainer = mainView.querySelector('article');
articleContainer.style.height = height_75 + 'px';
var sectionFooter = mainView.querySelector('.footer');
sectionFooter.style.height = height_10 + 'px';

mainView.querySelector('.frame-outer').style.height = height_75 - 60 + 'px';
// mainView.querySelector('.frame-inner').style.height = '100%';

var imageHeight = document.querySelector('.image').clientHeight + 10;
console.log(imageHeight);
var controlsHeight = document.querySelector('.controls').clientHeight;
console.log(controlsHeight);
mainView.querySelector('.frame-mid').style.height = imageHeight + controlsHeight + 10 + 'px';

var marginCalc = ((height_75 - 60) - (imageHeight + controlsHeight + 10)) / 2;
console.log('top margin should be: ' + marginCalc);
mainView.querySelector('.frame-mid').style.marginTop = marginCalc + 'px';


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

