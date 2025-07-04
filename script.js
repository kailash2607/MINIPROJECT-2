async function getIPAddress() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    document.getElementById("ipDisplay").textContent = data.ip;
  } catch (error) {
    document.getElementById("ipDisplay").textContent = "⚠ Error loading IP";
  }
}

// Auto-fetch on page load
window.onload = getIPAddress;