# RawatRumah

**RawatRumah** adalah aplikasi web untuk membantu pemilik rumah mengelola aset dan aktivitas perawatan dalam satu tempat. Catat barang rumah, atur jadwal servis, simpan riwayat pekerjaan, dan pantau biaya perawatan melalui antarmuka yang sederhana dan responsif.

> RawatRumah saat ini merupakan prototipe interaktif. Data disimpan secara lokal di browser menggunakan `localStorage`; aplikasi belum menggunakan backend, sinkronisasi antarperangkat, atau autentikasi pengguna.

## Fitur

- **Dashboard** — ringkasan kondisi rumah, jadwal aktif, dan aktivitas perawatan.
- **Manajemen barang** — tambah, cari, dan filter aset rumah; buka halaman detail untuk melihat informasi dan riwayat barang.
- **Jadwal perawatan** — buat jadwal, ubah status, dan hapus jadwal. Jadwal terdekat yang masih aktif digunakan sebagai ringkasan servis barang.
- **Pencatatan servis** — catat servis manual atau tandai jadwal sebagai selesai. Penyelesaian jadwal hanya memengaruhi jadwal terkait.
- **Riwayat perawatan** — simpan tindakan, pelaksana, tanggal, biaya, dan catatan.
- **Biaya perawatan** — lihat transaksi dan ringkasan biaya yang tercatat.
- **Penyimpanan lokal** — perubahan tersimpan pada browser yang digunakan dan bertahan setelah halaman dimuat ulang.
- **Tampilan responsif** — navigasi tersedia untuk layar desktop maupun perangkat seluler.

## Teknologi

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) dan CSS aplikasi

## Persyaratan

- Node.js versi LTS yang kompatibel dengan Next.js 16
- npm

## Menjalankan proyek secara lokal

1. Clone repositori dan masuk ke direktori proyek:

   ```bash
   git clone <URL-REPOSITORI>
   cd RawatRumah
   ```

2. Pasang dependensi:

   ```bash
   npm install
   ```

3. Jalankan server pengembangan:

   ```bash
   npm run dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser.

Tidak diperlukan file `.env` untuk menjalankan prototipe saat ini.

## Perintah yang tersedia

| Perintah | Keterangan |
| --- | --- |
| `npm run dev` | Menjalankan server pengembangan Next.js. |
| `npm run build` | Membuat build produksi. |
| `npm run start` | Menjalankan build produksi yang telah dibuat. |
| `npm run lint` | Memeriksa kode menggunakan ESLint. |
| `npm run typecheck` | Memeriksa tipe TypeScript tanpa membuat output. |

## Struktur proyek

```text
app/                  Halaman dan rute aplikasi (App Router)
  assets/             Daftar barang dan detail barang
  dashboard/          Ringkasan perawatan rumah
  expenses/           Ringkasan biaya
  history/            Riwayat servis
  schedules/          Pengelolaan jadwal perawatan
  settings/           Pengaturan demo
components/
  app-shell.tsx       Navigasi dan kerangka aplikasi
  data.tsx            State bersama, data awal, dan penyimpanan localStorage
```

## Data dan batasan prototipe

Data awal disediakan sebagai contoh agar alur aplikasi dapat langsung dicoba. Data aplikasi disimpan pada browser dengan key `rawatrumah-demo-v1` dan tidak dikirim ke server.

- Data tidak otomatis tersedia pada browser atau perangkat lain.
- Menghapus data situs/browser dapat menghapus data RawatRumah yang tersimpan.
- Profil dan beberapa ringkasan antarmuka masih berupa data demo.
- Belum tersedia backend, akun pengguna, backup, notifikasi sungguhan, atau sinkronisasi lintas perangkat.

## Pengembangan berikutnya

Arah pengembangan yang dapat dipertimbangkan meliputi backend dan autentikasi, pencatatan biaya yang lebih lengkap, pengaturan profil yang persisten, serta notifikasi jadwal perawatan.

## Lisensi

Belum ada lisensi yang ditetapkan. Semua hak atas proyek ini tetap pada pemilik repositori sampai lisensi ditambahkan.
