document.addEventListener("DOMContentLoaded", function() {
    const showNotificationBtn = document.querySelector(".show-notification");
    const notification = document.getElementById("notification");
    const closeNotificationBtn = document.querySelector(".close-notification");
  
    showNotificationBtn.addEventListener("click", function() {
      notification.style.display = "block";
    });
  
    closeNotificationBtn.addEventListener("click", function() {
      notification.style.display = "none";
    });
  });