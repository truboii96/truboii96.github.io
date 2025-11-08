// Countdown to Christmas
const countdownEl = document.getElementById('countdown');

function updateCountdown() {
  const now = new Date();
  const christmas = new Date(now.getFullYear(), 11, 25);
  const diff = christmas - now;

  if (diff <= 0) {
    countdownEl.textContent = "🎁 Santa is delivering gifts!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  countdownEl.textContent = `${days} days, ${hours} hrs, ${minutes} mins until Christmas!`;
}

setInterval(updateCountdown, 60000);
updateCountdown();

// Fake Santa "movement"
const santa = document.getElementById('santa');
const locationText = document.getElementById('location-text');

const locations = [
  { city: "New York", top: "40%", left: "30%" },
  { city: "London", top: "35%", left: "50%" },
  { city: "Paris", top: "40%", left: "52%" },
  { city: "Tokyo", top: "45%", left: "80%" },
  { city: "Sydney", top: "70%", left: "85%" }
];

let i = 0;
function moveSanta() {
  const loc = locations[i];
  santa.style.top = loc.top;
  santa.style.left = loc.left;
  locationText.textContent = `🎅 Santa is now in ${loc.city}!`;
  i = (i + 1) % locations.length;
}

setInterval(moveSanta, 5000);
moveSanta();
