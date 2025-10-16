function updateTime() {
  const timeElement = document.getElementById("time");
  timeElement.textContent = `Current Time: ${Date.now()} ms`;
}

// Update once on load
updateTime();

// Optionally, update every second:
setInterval(updateTime, 1000);
