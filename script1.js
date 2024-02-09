// Optional: Close the popup when clicking outside of it
window.onclick = function(event) {
    if (!event.target.matches('.search-symbol')) {
      var popups = document.getElementsByClassName('popup-content');
      for (var i = 0; i < popups.length; i++) {
        var popup = popups[i];
        if (popup.style.display === 'block') {
          popup.style.display = 'none';
        }
      }
    }
  }