"use strict"; // Mengaktifkan strict mode untuk penanganan kode yang lebih ketat

// Mendapatkan elemen container, register button, dan login button berdasarkan ID
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

/**
 * Fungsi untuk mengaktifkan form registrasi (Sign Up).
 * Fungsi ini menambahkan class 'active' pada elemen container,
 * yang akan memicu animasi transisi di CSS.
 */
function activateRegisterForm() {
    try {
        if (!container) throw new Error("Elemen container tidak ditemukan.");
        container.classList.add('active');
    } catch (error) {
        console.error("Error saat mengaktifkan form registrasi: ", error.message);
    }
}

/**
 * Fungsi untuk menonaktifkan form registrasi (kembali ke form login).
 * Fungsi ini menghapus class 'active' dari elemen container,
 * sehingga form login akan kembali terlihat.
 */
function deactivateRegisterForm() {
    try {
        if (!container) throw new Error("Elemen container tidak ditemukan.");
        container.classList.remove('active');
    } catch (error) {
        console.error("Error saat menonaktifkan form registrasi: ", error.message);
    }
}

/**
 * Memastikan bahwa elemen-elemen yang diperlukan ditemukan sebelum menambahkan event listener.
 * Jika elemen-elemen tersebut ada, tambahkan event listener untuk tombol register dan login.
 * Jika tidak, tampilkan pesan error di console.
 */
try {
    if (!container || !registerBtn || !loginBtn) {
        throw new Error("Salah satu elemen yang dibutuhkan tidak ditemukan. Pastikan ID sudah benar.");
    }

    // Menambahkan event listener pada tombol register untuk mengaktifkan form registrasi
    registerBtn.addEventListener('click', activateRegisterForm);

    // Menambahkan event listener pada tombol login untuk menonaktifkan form registrasi (kembali ke form login)
    loginBtn.addEventListener('click', deactivateRegisterForm);

} catch (error) {
    // Menampilkan pesan error jika salah satu elemen tidak ditemukan atau terjadi masalah lain
    console.error("Terjadi kesalahan saat menyiapkan event listener: ", error.message);
}

/**
 * Penanganan global untuk menangkap error yang tidak terduga.
 * Ini akan menampilkan pesan error yang lebih umum kepada pengguna jika terjadi masalah.
 */
window.addEventListener('error', (event) => {
    alert("Terjadi kesalahan pada aplikasi. Silakan coba lagi nanti.");
    console.error("Error yang tidak terduga: ", event.message);
});