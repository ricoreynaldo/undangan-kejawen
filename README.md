# undangan-kejawen

Undangan pernikahan digital bernuansa kejawen tradisional. Arsitektur sama dengan
`undangan-lintang` / `undangan-netflix`: frontend vanilla di `public/`, server statis Express,
RSVP & ucapan di Firebase Firestore.

## Alur tampilan

1. **Sampul** — gunungan wayang kulit bergoyang, aksara Jawa "Sugeng Rawuh", nama tamu (`?to=Nama`).
   Tombol *Bukak Serat Ulem* → gunungan "dicabut" seperti pembuka pagelaran wayang.
2. **Hero** — pagelaran wayang kulit, nama dalam aksara Jawa, tanggal + hari pasaran
   (Legi/Pahing/Pon/Wage/Kliwon dihitung otomatis), countdown, paribasan.
3. **Atur Pambagya** (pembuka), **Sang Penganten** (bingkai berbentuk gunungan),
   **Lelampahan Tresna** (kisah), **Rantaman Adat** (angka Jawa ꧑ ꧒ ꧓),
   **Adicara** (acara + peta), **Galeri**, **Atur Pangestu** (RSVP + buku tamu),
   **Tanda Katresnan** (kado), **Panutup**.
4. Musik latar: gending karawitan Jawa.

## Mengedit konten

Semua teks, tanggal, foto, rekening ada di `public/js/config.js`.
Foto mempelai (`images/groom.jpg`, `images/bride.jpg`) belum ada → tampil placeholder batik.
Aksara Jawa ditulis manual di config (kosongkan `''` untuk menyembunyikan).

## Aset

Semua foto, batik, gunungan, dan musik berasal dari Wikimedia Commons dengan lisensi bebas
(CC0, domain publik, CC BY, CC BY-SA). Atribusi lengkap ada di `public/kredit.html`
(ditautkan dari footer) — **jangan dihapus** selama aset ber-lisensi CC BY / CC BY-SA dipakai.
Motif kawung latar adalah SVG buatan sendiri (di `style.css`).

## Firebase

1. Buat project Firebase + Firestore, salin config web ke `public/js/firebase-config.js`.
2. Publish `firestore.rules` (`firebase deploy --only firestore:rules`).

Selama `apiKey` masih `ISI_...`, RSVP berjalan dalam **mode demo** (tersimpan di
localStorage perangkat sendiri, tidak terlihat tamu lain).

## Menjalankan

```bash
npm install
npm start
```

Buka http://localhost:3053/?to=Budi+Santoso
