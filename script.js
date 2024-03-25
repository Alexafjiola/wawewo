// Ambil elemen-elemen yang diperlukan
const showTextButton = document.getElementById('showTextButton');
const showPhotoButton = document.getElementById('showPhotoButton');
const showVideoButton = document.getElementById('showVideoButton');

const textContainer = document.getElementById('textContainer');
const photoContainer = document.getElementById('photoContainer');
const videoContainer = document.getElementById('videoContainer');

const hideTextButton = document.getElementById('hideTextButton');
const hidePhotoButton = document.getElementById('hidePhotoButton');
const hideVideoButton = document.getElementById('hideVideoButton');

// Tambahkan event listener untuk tombol "Tampilkan Kata"
showTextButton.addEventListener('click', function() {
  // Sembunyikan tombol-tombol lainnya
  showPhotoButton.classList.add('hidden');
  showVideoButton.classList.add('hidden');

  // Sembunyikan tombol "Tampilkan Kata" dan tampilkan kontainer teks
  showTextButton.classList.add('hidden');
  textContainer.classList.remove('hidden');
});

// Tambahkan event listener untuk tombol "Kembali" di kontainer teks
hideTextButton.addEventListener('click', function() {
  // Tampilkan kembali tombol-tombol lainnya
  showPhotoButton.classList.remove('hidden');
  showVideoButton.classList.remove('hidden');

  // Sembunyikan kontainer teks dan tampilkan kembali tombol "Tampilkan Kata"
  textContainer.classList.add('hidden');
  showTextButton.classList.remove('hidden');
});

// Tambahkan event listener untuk tombol "Tampilkan Foto"
showPhotoButton.addEventListener('click', function() {
  // Sembunyikan tombol-tombol lainnya
  showTextButton.classList.add('hidden');
  showVideoButton.classList.add('hidden');

  // Sembunyikan tombol "Tampilkan Foto" dan tampilkan kontainer foto
  showPhotoButton.classList.add('hidden');
  photoContainer.classList.remove('hidden');
});

// Tambahkan event listener untuk tombol "Kembali" di kontainer foto
hidePhotoButton.addEventListener('click', function() {
  // Tampilkan kembali tombol-tombol lainnya
  showTextButton.classList.remove('hidden');
  showVideoButton.classList.remove('hidden');

  // Sembunyikan kontainer foto dan tampilkan kembali tombol "Tampilkan Foto"
  photoContainer.classList.add('hidden');
  showPhotoButton.classList.remove('hidden');
});

// Tambahkan event listener untuk tombol "Tampilkan Video"
showVideoButton.addEventListener('click', function() {
  // Sembunyikan tombol-tombol lainnya
  showTextButton.classList.add('hidden');
  showPhotoButton.classList.add('hidden');

  // Sembunyikan tombol "Tampilkan Video" dan tampilkan kontainer video
  showVideoButton.classList.add('hidden');
  videoContainer.classList.remove('hidden');
});

// Tambahkan event listener untuk tombol "Kembali" di kontainer video
hideVideoButton.addEventListener('click', function() {
  // Tampilkan kembali tombol-tombol lainnya
  showTextButton.classList.remove('hidden');
  showPhotoButton.classList.remove('hidden');

  // Sembunyikan kontainer video dan tampilkan kembali tombol "Tampilkan Video"
  videoContainer.classList.add('hidden');
  showVideoButton.classList.remove('hidden');
});
