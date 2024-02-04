var yesBtn = document.getElementById('yes-btn');
var noBtn = document.getElementById('no-btn');
var imageIndex = 0;
var images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg'];

function showExpectedImage() {
  document.getElementById('valentine-img').src = 'expected-image.jpg';
}

function increaseYesBtnSize() {
  var currentSize = parseInt(window.getComputedStyle(yesBtn).getPropertyValue('font-size'));
  yesBtn.style.fontSize = (currentSize + 2) + 'px';
}

function decreaseNoBtnSize() {
  var currentSize = parseInt(window.getComputedStyle(noBtn).getPropertyValue('font-size'));
  noBtn.style.fontSize = (currentSize - 2) + 'px';
}

function showRandomImage() {
  document.getElementById('valentine-img').src = images[imageIndex];
  imageIndex = (imageIndex + 1) % images.length;
}

function changeNoBtnText() {
  switch (noBtn.innerHTML) {
    case 'No':
      noBtn.innerHTML = 'เเน่ใจหรอ';
      break;
    case 'เเน่ใจหรอ':
      noBtn.innerHTML = 'อ้วนทำเค้าเสียใจ';
      break;
    case 'อ้วนทำเค้าเสียใจ':
      noBtn.innerHTML = 'กดใช่เถอะ';
      break;
    case 'กดใช่เถอะ':
      noBtn.innerHTML = 'เค้าจะร้องไห้เเล้วนะ';
      break;
    case 'เค้าจะร้องไห้เเล้วนะ':
      noBtn.innerHTML = 'กดใช่เดี๋ยวนี้เลย';
      break;
    case 'กดใช่เดี๋ยวนี้เลย':
      noBtn.innerHTML = 'อ้วน!! กดใช่สิ';
      break;
  }
}

yesBtn.addEventListener('click', function() {
  showExpectedImage();
  increaseYesBtnSize();
});

noBtn.addEventListener('click', function() {
  decreaseNoBtnSize();
  changeNoBtnText();
  showRandomImage();
});
