# Integrasi Notes App dengan RESTful API

Dalam mengerjakan proyek ini, ada beberapa kriteria yang perlu Anda penuhi. Kriteria-kriteria ini diperlukan agar Anda dapat lulus dari tugas ini. Berikut adalah daftar kriteria dari proyek submission yang harus Anda penuhi.

## Ketentuan Pengerjaan Tugas

Untuk mempermudah penilaian submission yang dikirim, Anda perlu memahami ketentuan-ketentuan berikut dalam mengerjakan tugas ini.

1. Mempertahakanan Kriteria Submisson Sebelumnya (sudah saya laksanakan pada file HTML dan JavaScript).

2. Memanfaatkan RESTful API sebagai Sumber Data
Aplikasi harus memanfaatkan RESTful API yang telah kami sediakan sebagai sumber data. RESTful API yang digunakan adalah https://notes-api.dicoding.dev/v2. Dokumentasi API bisa Anda akses pada tautan tersebut.

Ada beberapa fitur yang wajib Anda adopsi dengan API di atas.

   - Membuat atau menambahkan catatan baru.
   - Mendapatkan dan menampilkan daftar catatan.
   - Menghapus catatan yang tersimpan.

Catatan:
Kriteria ini juga menyebabkan data local (data dumi) sudah tidak digunakan lagi. Silakan manfaatkan Notes API sebagai data utama aplikasi notesapp Anda.

3. Menggunakan webpack sebagai Module Bundler
Pengembangan aplikasi Notes App harus menggunakan webpack sebagai module bundler dengan spesifikasi berikut:

   - Aplikasi harus menerapkan html-webpack-plugin dalam konfigurasinya.
   - Aplikasi harus dapat dijalankan untuk fase development dengan perintah npm run start-dev dan memanfaatkan webpack-dev-server.
   - Aplikasi harus dapat di-build untuk fase production dengan perintah npm run build.

4. Menggunakan Fetch API
Menggunakan Fetch API untuk melakukan Asynchronous JavaScript Request dalam berinteraksi dengan API https://notes-api.dicoding.dev/v2.

5. Memiliki Indikator Loading
Anda diwajibkan untuk menampilkan indikator loading saat melakukan proses request HTTP dalam menunggu hasilnya. Contohnya menampilkan indikator loading saat user sedang masuk aplikasi atau buat akun baru.

Sebagai tips, Anda juga dapat membangun indikator loading menggunakan Web component.

Selamat mengerjakan dan sukses selalu!

