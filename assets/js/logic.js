function toggleMode() {
    const icon = document.getElementById('mode-icon');
    const currentMode = document.body.classList.contains('dark-mode');
  
    if (currentMode) {
      document.body.classList.remove('dark-mode');
      icon.innerHTML = '🌘'; // Moon emoji for light mode
    } else {
      document.body.classList.add('dark-mode');
      icon.innerHTML = '☀️'; // Sun emoji for dark mode
    }
  }