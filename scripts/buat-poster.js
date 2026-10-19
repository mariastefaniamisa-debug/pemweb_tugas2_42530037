const fs = require("fs");
const path = require("path");
const films = require("../data");

const warna = {
  "sci-fi": ["#0f2027", "#2c5364"],
  action: ["#7f1d1d", "#f97316"],
  drama: ["#3b0764", "#9333ea"],
  animation: ["#0e7490", "#facc15"]
};

function bungkus(teks, maks) {
  const kata = teks.split(" ");
  const baris = [];
  let cur = "";
  kata.forEach((k) => {
    if ((cur + " " + k).trim().length > maks) { baris.push(cur.trim()); cur = k; }
    else cur = (cur + " " + k).trim();
  });
  if (cur) baris.push(cur);
  return baris;
}
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

films.forEach((f) => {
  const [a, b] = warna[f.genre];
  const baris = bungkus(f.judul, 12);
  const mulai = 300 - ((baris.length - 1) * 26);
  const teks = baris.map((l, i) =>
    `<text x="200" y="${mulai + i * 52}" text-anchor="middle" font-family="Arial, sans-serif" font-size="44" font-weight="bold" fill="#fff">${esc(l)}</text>`).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs>
<rect width="400" height="600" fill="url(#g)"/>
<circle cx="340" cy="80" r="90" fill="#fff" opacity="0.08"/>
<circle cx="50" cy="540" r="120" fill="#fff" opacity="0.08"/>
<text x="200" y="70" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" letter-spacing="4" fill="#fff" opacity="0.85">${f.genre.toUpperCase()}</text>
${teks}
<text x="200" y="550" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" fill="#fff" opacity="0.9">${f.tahun}</text>
</svg>`;
  fs.writeFileSync(path.join(__dirname, "..", "public", f.poster), svg);
});
console.log("Poster dibuat:", films.length);
