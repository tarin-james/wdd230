// Check if it's Monday, Tuesday, or Wednesday
function isBannerDay() {
    const today = new Date();
    const day = today.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
    return day >= 1 && day <= 3; // Monday, Tuesday, or Wednesday
  }
  
  // Close the banner
  function closeBanner() {
    document.getElementById("chamber-banner").style.display = "none";
  }
  
  // Show or hide the banner based on the day of the week
  window.onload = function() {
    console.log(isBannerDay())
    if (isBannerDay()) {
      document.getElementById("chamber-banner").style.display = "flex";
    }
  };