// Select elements from the DOM
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('.dark');

// List of image filenames
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Loop through images and create thumbnails
for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  thumbBar.appendChild(newImage);

  // Event listener to update displayed image
  newImage.addEventListener('click', (e) => {
    displayedImage.setAttribute('src', e.target.getAttribute('src'));
  });
}

// Darken/Lighten button functionality
btn.addEventListener('click', () => {
  if (btn.textContent === 'Darken') {
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#f4f4f4';
    btn.textContent = 'Lighten';
  } else {
    document.body.style.backgroundColor = '#f4f4f4';
    document.body.style.color = '#333';
    btn.textContent = 'Darken';
  }
});
