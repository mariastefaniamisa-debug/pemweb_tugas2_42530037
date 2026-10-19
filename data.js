// Sumber data lokal (tanpa database): array of object
// Field "poster" menunjuk ke file gambar di folder public/img
const films = [
  { id: 1, judul: "Inception", genre: "sci-fi", sutradara: "Christopher Nolan", tahun: 2010, poster: "/img/inception.svg",
    sinopsis: "Seorang pencuri yang mencuri rahasia lewat mimpi diberi tugas menanamkan sebuah ide ke pikiran target." },
  { id: 2, judul: "The Dark Knight", genre: "action", sutradara: "Christopher Nolan", tahun: 2008, poster: "/img/the-dark-knight.svg",
    sinopsis: "Batman menghadapi Joker, penjahat kacau yang menguji batas moral Gotham." },
  { id: 3, judul: "Interstellar", genre: "sci-fi", sutradara: "Christopher Nolan", tahun: 2014, poster: "/img/interstellar.svg",
    sinopsis: "Sekelompok astronot menembus lubang cacing untuk mencari planet baru bagi umat manusia." },
  { id: 4, judul: "Mad Max: Fury Road", genre: "action", sutradara: "George Miller", tahun: 2015, poster: "/img/mad-max-fury-road.svg",
    sinopsis: "Furiosa melarikan diri dari tiran gurun bersama Max dalam pengejaran penuh aksi." },
  { id: 5, judul: "Parasite", genre: "drama", sutradara: "Bong Joon-ho", tahun: 2019, poster: "/img/parasite.svg",
    sinopsis: "Keluarga miskin menyusup ke kehidupan keluarga kaya, memicu rangkaian kejadian tak terduga." },
  { id: 6, judul: "Whiplash", genre: "drama", sutradara: "Damien Chazelle", tahun: 2014, poster: "/img/whiplash.svg",
    sinopsis: "Seorang drummer muda berhadapan dengan guru musik yang keras demi mengejar kesempurnaan." },
  { id: 7, judul: "Spirited Away", genre: "animation", sutradara: "Hayao Miyazaki", tahun: 2001, poster: "/img/spirited-away.svg",
    sinopsis: "Chihiro terjebak di dunia roh dan harus bekerja di pemandian untuk menyelamatkan orang tuanya." },
  { id: 8, judul: "Coco", genre: "animation", sutradara: "Lee Unkrich", tahun: 2017, poster: "/img/coco.svg",
    sinopsis: "Miguel, bocah pecinta musik, secara tak sengaja masuk ke Negeri Orang Mati." }
];

module.exports = films;
