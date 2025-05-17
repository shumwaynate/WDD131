// JavaScript to toggle the menu visibility on mobile screens
function toggleMenu() {
  const navigation = document.getElementById('navigation');
  navigation.classList.toggle('hide');
}

// Automatically hide the menu when the screen is resized above 700px
window.addEventListener('resize', () => {
  if (window.innerWidth >= 700) {
      document.getElementById('navigation').classList.remove('hide');
  } else {
      document.getElementById('navigation').classList.add('hide');
  }
});

// Image Viewer Logic
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (event) => {
  const clickedImage = event.target.closest('img');
  if (clickedImage) {
    const fullImageSrc = clickedImage.src.split('-')[0] + '-full.jpg';

    const modal = document.createElement('dialog');
    modal.innerHTML = `
      <div class="dialog-content">
        <img src="${fullImageSrc}" alt="Full View">
        <button class="close-viewer">X</button>
      </div>
    `;

    document.body.appendChild(modal);
    modal.showModal();

    const closeButton = modal.querySelector('.close-viewer');

    closeButton.addEventListener('click', () => {
      modal.close();
      document.body.removeChild(modal);
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.close();
        document.body.removeChild(modal);
      }
    });
  }
});
