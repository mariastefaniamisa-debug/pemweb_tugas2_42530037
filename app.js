const express = require("express");
const path = require("path");
const films = require("./data");

const app = express();
const PORT = 3000;

// 1. Konfigurasi view engine EJS + path absolut
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware static files (CSS) dengan path absolut
app.use(express.static(path.join(__dirname, "public")));

// 2a. Rute Katalog: filter genre via Query Parameter (req.query)
// Contoh: /?genre=action
app.get("/", (req, res) => {
  const genreDipilih = (req.query.genre || "").toLowerCase();

  const daftarGenre = [...new Set(films.map((f) => f.genre))];

  const hasil = genreDipilih
    ? films.filter((f) => f.genre === genreDipilih)
    : films;

  res.render("index", {
    title: "Katalog Film",
    films: hasil,
    daftarGenre,
    genreDipilih
  });
});

// 2b. Rute Detail: Route Parameter (req.params)
// Contoh: /item/3
app.get("/item/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = films.find((f) => f.id === id);

  // Jika ID tidak ditemukan -> tampilkan halaman "tidak ditemukan"
  if (!film) {
    return res.status(404).render("404", {
      title: "Data Tidak Ditemukan",
      pesan: `Film dengan ID "${req.params.id}" tidak ditemukan.`
    });
  }

  res.render("detail", { title: film.judul, film });
});

// Rute lain yang tidak dikenal
app.use((req, res) => {
  res.status(404).render("404", {
    title: "Halaman Tidak Ditemukan",
    pesan: "Halaman yang Anda cari tidak tersedia."
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
