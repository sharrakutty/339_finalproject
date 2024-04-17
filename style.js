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

// Carousel //
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
  // Hide all carousel items
  carouselItems.forEach(item => {
    item.style.display = 'none';
  });

  // Show the slide at the specified index
  carouselItems[index].style.display = 'block';
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);

// Set up event listeners for next and previous buttons
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', previousSlide);