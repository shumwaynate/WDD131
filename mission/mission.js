// Select the theme dropdown and logo element
const themeSelector = document.querySelector('#themeSelect');
const body = document.body;
const logo = document.querySelector('#logo');

// Function to handle theme change
function changeTheme() {
  const selected = themeSelector.value;

  if (selected === 'dark') {
    body.classList.add('dark');
    logo.src = 'image_dark.png'; // Switch to white logo
  } else {
    body.classList.remove('dark');
    logo.src = 'image.png'; // Switch back to blue logo
  }
}

// Listen for changes to the dropdown
themeSelector.addEventListener('change', changeTheme);
