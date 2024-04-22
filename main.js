// # Nilai Akhir Siswa

// ## Pendahuluan
// Aplikasi ini menghitung nilai akhir siswa berdasarkan nilai UTS, UAS, dan tugas. Aplikasi ini juga menampilkan predikat dan nilai huruf siswa.

// ## Fitur
// - Menghitung nilai akhir siswa berdasarkan nilai UTS, UAS, dan tugas.
// - Menampilkan predikat siswa berdasarkan nilai akhir.
// - Menampilkan nilai huruf siswa berdasarkan nilai akhir.
// - Mereset formulir input.

// ## Cara Penggunaan
// 1. Masukkan NIS siswa.
// 2. Masukkan nama siswa.
// 3. Masukkan kelas siswa.
// 4. Masukkan nilai UTS siswa.
// 5. Masukkan nilai UAS siswa.
// 6. Masukkan nilai tugas siswa.
// 7. Klik tombol "Hitung Nilai Akhir".
// 8. Nilai akhir, predikat, dan nilai huruf siswa akan ditampilkan.

function resetForm() {
  document.getElementById("nis").value = "";
  document.getElementById("nama").value = "";
  document.getElementById("kelas").value = "";
  document.getElementById("uts").value = "";
  document.getElementById("uas").value = "";
  document.getElementById("tugas").value = "";
  document.querySelector(".result h2").innerHTML = "";
  document.querySelector(".NIS-SISWA").innerHTML = "";
  document.querySelector(".Nama-Siswa").innerHTML = "";
  document.querySelector(".Kelas-Siswa").innerHTML = "";
  document.querySelector(".nilai-akhir").innerHTML = "";
  document.querySelector(".predikat").innerHTML = "";
  document.querySelector(".nilai-huruf").innerHTML = "";
}
function hitungNilaiAkhir() {
  let nis = document.querySelector("#nis").value;
  let nama = document.querySelector("#nama").value;
  let kelas = document.querySelector("#kelas").value;
  let uts = parseFloat(document.querySelector("#uts").value);
  let uas = parseFloat(document.querySelector("#uas").value);
  let tugas = parseFloat(document.querySelector("#tugas").value);
  let nilaiAkhir = (uts * 30) / 100 + (uas * 35) / 100 + (tugas * 35) / 100;
  let predikat = "";
  let nilaiHuruf = "";

  if (!nis.match(/^[0-9]+$/)) {
    alert("NIS hanya boleh diisi dengan angka!");
    return;
  }

  if (!nama.match(/^[a-zA-Z- ]+$/)) {
    alert("Nama siswa hanya boleh diisi dengan huruf!");
    return;
  }

  if (!kelas.match(/^[0-9]+$/)) {
    alert("Kelas hanya boleh diisi dengan angka!");
    return;
  }

  document.querySelector(".NIS-SISWA").innerHTML = nis;
  document.querySelector(".Nama-Siswa").innerHTML = nama;
  document.querySelector(".Kelas-Siswa").innerHTML = kelas;
  document.querySelector(".nilai-akhir").innerHTML = nilaiAkhir;

  if (nilaiAkhir >= 85) {
    predikat = "Sangat Baik";
    nilaiHuruf = "A";
  } else if (nilaiAkhir >= 75) {
    predikat = "Baik";
    nilaiHuruf = "B";
  } else if (nilaiAkhir >= 60) {
    predikat = "Cukup";
    nilaiHuruf = "C";
  } else {
    predikat = "Kurang";
    nilaiHuruf = "D";
  }

  document.querySelector(".predikat").innerHTML = predikat;
  document.querySelector(".nilai-huruf").innerHTML = nilaiHuruf;

  if (nilaiAkhir >= 75) {
    document.querySelector(".result h2").innerHTML = "LULUS!!";
  } else {
    document.querySelector(".result h2").innerHTML = "TIDAK LULUS!!";
  }
}
