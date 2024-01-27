var btnGak = document.getElementById('btn_gak');

btnGak.addEventListener('click', function() {
    // Mendapatkan tinggi dan lebar viewport
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;

    // Mendapatkan tinggi dan lebar tombol
    var btnWidth = btnGak.offsetWidth;
    var btnHeight = btnGak.offsetHeight;

    // Menghitung posisi acak
    var randomX = Math.floor(Math.random() * (viewportWidth - btnWidth));
    var randomY = Math.floor(Math.random() * (viewportHeight - btnHeight));

    // Menetapkan posisi baru
    btnGak.style.position = 'absolute';
    btnGak.style.left = randomX + 'px';
    btnGak.style.top = randomY + 'px';
});