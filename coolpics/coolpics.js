// JavaScript to toggle the menu visibility on mobile screens
function toggleMenu() {
    const navigation = document.getElementById('navigation');
    if (navigation.style.display === 'flex') {
      navigation.style.display = 'none';
    } else {
      navigation.style.display = 'flex';
      navigation.style.flexDirection = 'column';
      navigation.style.gap = '1em';
      navigation.style.marginTop = '1em';
    }
  }
  
  // Automatically hide the menu when the screen is resized above 700px
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 700) {
      document.getElementById('navigation').style.display = 'flex';
      document.getElementById('navigation').style.flexDirection = 'row';
    } else {
      document.getElementById('navigation').style.display = 'none';
    }
  });
  