const logo = document.getElementById('logo');
const body = document.body;
const video = document.getElementById('background-video');

logo.addEventListener('click', () => {
  body.classList.toggle('active');

  if (video.style.display === 'none' || video.style.display === '') {
    video.style.display = 'block';
    video.style.width = '100vw';
    video.style.height = '100vh';
    video.play();
  } else {
    video.style.display = 'none';
    video.pause();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var gridItems = document.querySelectorAll('.grid-item img');

  gridItems.forEach(function(gridItem) {
      gridItem.addEventListener('mouseover', function() {
          this.classList.add('dark-image');
      });

      gridItem.addEventListener('mouseout', function() {
          this.classList.remove('dark-image');
      });
  });
});