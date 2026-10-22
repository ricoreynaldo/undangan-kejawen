// ============================================================
//  SEMUA KONTEN UNDANGAN ADA DI SINI — cukup edit file ini.
//  Foto: taruh di public/images/ lalu sesuaikan path-nya.
//  Foto yang belum ada otomatis tampil sebagai placeholder batik.
//  (Isi di bawah adalah data CONTOH — ganti dengan data asli.)
//  Aksara Jawa: tulis manual (Unicode ꦲ–ꦿ), kosongkan '' untuk menyembunyikan.
// ============================================================
window.INVITATION = {
  brand: 'PAWIWAHAN',

  couple: {
    short: ['Bagas', 'Sekar'], // tampil besar di sampul & penutup
    aksara: 'ꦧꦒꦱ꧀ ꦭꦤ꧀ ꦱꦼꦏꦂ', // "Bagas lan Sekar"
    groom: {
      name: 'Raden Bagas Wicaksono, S.T.',
      parents: 'Putra kaping kalih saking Bapak Suryo Hadiningrat lan Ibu Rahayu Lestari',
      photo: 'img-undangan/61d0d79a7753b69f3e143795836a8153.jpg',
    },
    bride: {
      name: 'Sekar Ayu Kinasih, S.Pd.',
      parents: 'Putri pambajeng saking Bapak Hartono Prawiro lan Ibu Sri Wahyuni',
      photo: 'img-undangan/a843abd1f4f511a3b717402a0b48a006.jpg',
    },
  },

  // Tanggal utama (countdown + hari pasaran Jawa dihitung otomatis) — format ISO lokal
  date: '2026-12-20T08:00:00+07:00',

  cover: {
    defaultGuest: 'Bapak/Ibu/Sedherek', // dipakai bila tidak ada ?to=Nama di URL
    greeting: 'ꦱꦸꦒꦼꦁꦫꦮꦸꦃ', // "Sugeng Rawuh"
  },

  hero: {
    photo: 'img-undangan/45c3f0078259ab963014c4d835a8c48e.jpg',
    caption: 'Pawiwahan Ageng',
    // Paribasan Jawa + terjemahan
    proverb: 'Witing tresna jalaran saka kulina',
    proverbMeaning: 'Cinta tumbuh karena terbiasa bersama.',
  },

  opening: {
    salam: 'Rahayu, Sugeng Pinanggih',
    text: 'Kanthi nyuwun sih rahmating Gusti Ingkang Maha Kuwasa, kawula badhe ngawontenaken pawiwahan putra-putri kawula. Mugi Bapak/Ibu/Sedherek kersa rawuh paring donga pangestu.',
    translation: 'Dengan memohon rahmat Tuhan Yang Maha Kuasa, kami bermaksud menyelenggarakan pernikahan putra-putri kami. Besar harapan kami Bapak/Ibu/Saudara berkenan hadir memberikan doa restu.',
    quote: 'Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.',
    quoteSource: 'QS. Ar-Rum: 21',
  },

  // Lelampahan tresna (kisah cinta)
  story: [
    {
      year: '2018',
      title: 'Kapisan Pinanggih',
      text: 'Kami pertama kali bertemu di sanggar karawitan kampus. Ia menabuh saron, saya belajar nembang — dan sejak itu gending terasa lebih merdu dari biasanya.',
    },
    {
      year: '2021',
      title: 'Tresna Tuwuh',
      text: 'Latihan setiap Kamis malam berubah jadi obrolan panjang di angkringan. Tanpa terasa, kebiasaan itu menumbuhkan rasa — witing tresna jalaran saka kulina.',
    },
    {
      year: '2026',
      title: 'Nglamar',
      text: 'Dengan membawa seserahan dan restu keluarga, lamaran dilaksanakan secara adat. Kini kami bersiap melangkah bersama dalam ikatan suci pernikahan.',
    },
  ],

  // Rantaman adicara adat (opsional — kosongkan [] untuk menyembunyikan)
  rituals: [
    { name: 'Siraman', text: 'Mandi suci calon pengantin dengan air kembang setaman sebagai lambang penyucian diri.' },
    { name: 'Midodareni', text: 'Malam terakhir masa lajang; calon pengantin putri dipingit dan didoakan agar secantik bidadari.' },
    { name: 'Ijab Kabul', text: 'Akad nikah, inti dari seluruh rangkaian — janji suci di hadapan Tuhan dan para saksi.' },
    { name: 'Panggih', text: 'Pertemuan kedua mempelai: balangan gantal, wiji dadi, sindur binayang, hingga dhahar klimah.' },
    { name: 'Sungkeman', text: 'Kedua mempelai bersimpuh memohon restu dan maaf kepada orang tua.' },
  ],

  events: [
    {
      label: 'Ijab Kabul',
      date: 'Minggu, 20 Desember 2026',
      time: '08.00 – 09.30 WIB',
      venue: 'Masjid Gedhe Kauman',
      address: 'Jl. Kauman, Ngupasan, Gondomanan, Kota Yogyakarta',
      // Lokasi untuk preview peta: alamat, nama tempat, atau koordinat "lat,lng"
      mapQuery: 'Masjid Gedhe Kauman Yogyakarta',
      // Link tombol "Pirsani Lokasi" (opsional — kosongkan agar otomatis dari mapQuery)
      map: '',
    },
    {
      label: 'Pahargyan',
      date: 'Minggu, 20 Desember 2026',
      time: '11.00 – 14.00 WIB',
      venue: 'Pendopo Agung Royal Ambarrukmo',
      address: 'Jl. Laksda Adisucipto No. 81, Caturtunggal, Depok, Sleman',
      mapQuery: 'Pendopo Agung Royal Ambarrukmo Yogyakarta',
      map: '',
    },
  ],

  gallery: [
    'img-undangan/45c3f0078259ab963014c4d835a8c48e.jpg',
    'img-undangan/d0defbbc7f6b72c5f8f8f7620ad5691a.jpg',
    'img-undangan/a751177140d9a863db5f558a5c12d23a.jpg',
    'img-undangan/6fe3e4aa5d48be2166de719e3831f568.jpg',
    'img-undangan/af8229644236640067d2be790fe9a79a.jpg',
    'img-undangan/a843abd1f4f511a3b717402a0b48a006.jpg',
  ],

  gift: {
    // Rekening & e-wallet — tambah / hapus baris sesuai kebutuhan.
    // type: 'bank' (Transfer bank) atau 'ewallet' (E-wallet)
    // logo: gambar di public/images/ (png/jpg/svg) — kosongkan untuk tanpa logo
    accounts: [
      { type: 'bank', name: 'BCA', number: '0123 4567 89', holder: 'Bagas Wicaksono', logo: '' },
      { type: 'bank', name: 'BRI', number: '0021 0100 1234 567', holder: 'Sekar Ayu Kinasih', logo: '' },
      { type: 'ewallet', name: 'DANA', number: '0812 3456 7890', holder: 'Sekar Ayu Kinasih', logo: '' },
    ],
    qris: '', // isi 'images/qris.png' bila sudah ada gambar QRIS
    address: 'Jl. Kaliurang Km 7, Ngaglik, Sleman, Yogyakarta 55581',
    addressRecipient: 'Sekar Ayu Kinasih',
  },

  closing: 'Mugi Gusti tansah paring berkah, rahayu, lan kabagyan dhumateng kita sedaya.',
  closingTranslation: 'Semoga Tuhan senantiasa memberikan berkah, keselamatan, dan kebahagiaan untuk kita semua.',
  closingAksara: 'ꦩꦠꦸꦂꦤꦸꦮꦸꦤ꧀', // "Matur Nuwun"

  // Tag WhatsApp di footer — nomor format bebas (0812…, +62 812…, 62812…).
  // Kosongkan whatsapp ('') untuk menyembunyikan tag.
  contact: {
    whatsapp: '085920063749',
    message: 'Halo HEAVEN, saya tertarik membuat undangan digital.',
  },

  // Taruh file musik di public/audio/ — '' untuk menonaktifkan
  music: 'audio/gending.mp3',
};
