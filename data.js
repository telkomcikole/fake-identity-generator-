// Nama dan keluarga
const names = [
  "Budi", "Siti", "Andi", "Rina", "Agus", "Dewi", "Hendra", "Nina", "Bayu", "Ani",
  "Joko", "Lia", "Rudi", "Eka", "Fajar", "Maya", "Heri", "Tuti", "Indra", "Sari"
];

const surnames = [
  "Putra", "Putri", "Wijaya", "Saputra", "Suryadi", "Pratama", "Kusuma", "Lesmana",
  "Santoso", "Gunawan", "Susanto", "Mahendra", "Pramudya", "Wirawan", "Setiawan"
];

// Kota & wilayah
const cities = {
  Jakarta: ["Jakarta Pusat", "Jakarta Timur", "Jakarta Selatan"],
  Bandung: ["Bandung Kulon", "Bandung Wetan", "Buahbatu"],
  Surabaya: ["Surabaya Barat", "Surabaya Timur"],
  Medan: ["Medan Kota", "Medan Denai"],
  Semarang: ["Semarang Tengah", "Semarang Barat"]
};

const villages = {
  "Jakarta Pusat": ["Senayan", "Tanah Abang"],
  "Jakarta Timur": ["Cipinang", "Duren Sawit"],
  "Bandung Kulon": ["Caringin", "Babakan Ciparay"],
  "Bandung Wetan": ["Cihapit", "Cikawao"],
  "Surabaya Barat": ["Manukan", "Sambikerep"],
  "Medan Kota": ["Bantan", "Pasar Merah"],
  "Semarang Tengah": ["Pekunden", "Randusari"]
};

const provinces = {
  Jakarta: "DKI Jakarta",
  Bandung: "Jawa Barat",
  Surabaya: "Jawa Timur",
  Medan: "Sumatera Utara",
  Semarang: "Jawa Tengah"
};

const postalCodes = {
  Jakarta: {
    "Jakarta Pusat": "101xx-105xx",
    "Jakarta Timur": "131xx-139xx"
  },
  Bandung: {
    "Bandung Kulon": "4021x",
    "Bandung Wetan": "4011x"
  },
  Surabaya: {
    "Surabaya Barat": "6011x-6022x",
    "Surabaya Timur": "6023x-6029x"
  },
  Medan: {
    "Medan Kota": "2011x",
    "Medan Denai": "2021x"
  },
  Semarang: {
    "Semarang Tengah": "5013x",
    "Semarang Barat": "5014x"
  }
};

const streets = [
  "Jalan Sudirman", "Jalan Thamrin", "Jalan Diponegoro", "Jalan Ahmad Yani"
];

const domains = ["gmail.com", "yahoo.com", "hotmail.com"];

const occupations = [
  "Programmer", "Desainer Grafis", "Manajer Pemasaran", "Guru",
  "Dokter", "Advokat", "Akuntan", "Web Developer"
];

const companies = [
  "PT Tekno Global", "CV Inovasi Digital", "UD Berkah Jaya"
];

// Gender berdasarkan nama
function getGender(name) {
  const maleNames = ["Budi", "Andi", "Agus", "Hendra", "Bayu", "Joko", "Rudi", "Arif"];
  const femaleNames = ["Siti", "Rina", "Dewi", "Nina", "Ani", "Lia", "Maya", "Tuti"];

  if (maleNames.includes(name)) return "Laki-laki";
  if (femaleNames.includes(name)) return "Perempuan";
  return Math.random() > 0.5 ? "Laki-laki" : "Perempuan";
}

module.exports = {
  names,
  surnames,
  cities,
  villages,
  provinces,
  postalCodes,
  streets,
  domains,
  occupations,
  companies,
  getGender
};