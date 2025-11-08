// === COUNTDOWN TO CHRISTMAS ===
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const christmas = new Date(now.getFullYear(), 11, 25); // Dec 25
  const diff = christmas - now;

  if (diff <= 0) {
    countdownEl.textContent = "🎁 Santa is delivering gifts right now!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  countdownEl.textContent = `${days} days, ${hours} hrs, ${minutes} mins until Christmas!`;
}

setInterval(updateCountdown, 60000);
updateCountdown();

// === LEAFLET MAP ===
const map = L.map("map").setView([20, 0], 2); // World view

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
}).addTo(map);

// Santa icon
const santaIcon = L.icon({
  iconUrl: "assets/santa-icon.png",
  iconSize: [50, 50],
  iconAnchor: [25, 25],
});

const santaMarker = L.marker([0, 0], { icon: santaIcon }).addTo(map);

const locationText = document.getElementById("location-text");

// Fake Santa route (you can randomize or add more!)
const route = [
  { city: "North Pole 🎅", coords: [89.9, 135] },
  { city: "New York, USA 🗽", coords: [40.7128, -74.006] },
  { city: "London, UK 🇬🇧", coords: [51.5074, -0.1278] },
  { city: "Paris, France 🇫🇷", coords: [48.8566, 2.3522] },
  { city: "Nairobi, Kenya 🇰🇪", coords: [-1.2864, 36.8172] },
  { city: "Tokyo, Japan 🇯🇵", coords: [35.6762, 139.6503] },
  { city: "Sydney, Australia 🇦🇺", coords: [-33.8688, 151.2093] },
  { city: "Santiago, Chile 🇨🇱", coords: [-33.4489, -70.6693] },
];

let currentStop = 0;

function moveSanta() {
  const stop = route[currentStop];
  santaMarker.setLatLng(stop.coords);
  map.panTo(stop.coords);
  locationText.textContent = `🎅 Santa is now in ${stop.city}!`;

  currentStop = (currentStop + 1) % route.length;
}

// Move Santa every 5 seconds
moveSanta();
setInterval(moveSanta, 5000);
