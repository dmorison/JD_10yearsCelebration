var windowHeight = window.innerHeight;
// console.log('window height: ' + windowHeight);

var header = document.querySelector('header');
header.style.height = windowHeight + 'px';

var height_75 = windowHeight * 0.75;
// console.log('height 75: ' + height_75);
var height_15 = windowHeight * 0.15;
// console.log('height 15: ' + height_15);
var height_10 = windowHeight * 0.1;
// console.log('height 10: ' + height_10);

var mainView = document.querySelector('main');
mainView.style.height = windowHeight + 'px';
var sectionTitle = mainView.querySelector('.title');
sectionTitle.style.height = height_15 + 'px';
var articleContainer = mainView.querySelector('article');
articleContainer.style.height = height_75 + 'px';
var sectionFooter = mainView.querySelector('.footer');
sectionFooter.style.height = height_10 + 'px';

mainView.querySelector('.frame-outer').style.height = height_75 - 60 + 'px';

if (window.innerWidth > 460) {

  var frameMidWidth = mainView.querySelector('.frame-mid').clientWidth;
  // console.log('frame mid width: ' + frameMidWidth);
  mainView.querySelector('.controls').style.width = frameMidWidth * 2 + 'px';
  var controlsArray = mainView.querySelectorAll('.control');
  for (var p = 0; p < controlsArray.length; p++) {
    controlsArray[p].style.width = frameMidWidth / 6 + 'px';
  }

  var imagesArray = mainView.querySelectorAll('.image');
  for (var i = 0; i < imagesArray.length; i++) {
    imagesArray[i].style.height = height_75 - 120 + 'px';
  }

  setTimeout(function() {
    var newImagesArray = mainView.querySelectorAll('.image');
    for (var q = 0; q < newImagesArray.length; q++) {
      // console.log(newImagesArray[q].clientWidth);
      var imageWidth = newImagesArray[q].clientWidth + 10;
      var imageMargin = (frameMidWidth - imageWidth) / 2;
      newImagesArray[q].style.marginLeft = imageMargin + 'px';
    }
  }, 1000);

  var navRight = mainView.querySelector('#nav-right');
  navRight.addEventListener('click', function() {
    mainView.querySelector('.controls').style.left = '-' + (frameMidWidth - 50) + 'px';
    this.style.display = 'none';
    navLeft.style.display = 'block';
  });

  var navLeft = mainView.querySelector('#nav-left');
  navLeft.addEventListener('click', function() {
    mainView.querySelector('.controls').style.left = '0px';
    this.style.display = 'none';
    navRight.style.display = 'block';
  });
}

setTimeout(function() {
  var imageHeight = document.querySelector('.image').clientHeight + 10;
  // console.log(imageHeight);
  var controlsHeight = document.querySelector('.controls').clientHeight;
  // console.log(controlsHeight);
  mainView.querySelector('.frame-mid').style.height = imageHeight + controlsHeight + 10 + 'px';

  var marginCalc = ((height_75 - 60) - (imageHeight + controlsHeight + 10)) / 2;
  // console.log('top margin should be: ' + marginCalc);
  mainView.querySelector('.frame-mid').style.marginTop = marginCalc + 'px';
}, 4000);



var enterButton = document.getElementById('enter');
enterButton.addEventListener('click', function() {
  header.style.top = windowHeight + 10 + 'px';
});


//****** photo frame functionality ******//

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

