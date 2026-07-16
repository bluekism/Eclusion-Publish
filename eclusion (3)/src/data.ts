import { Product, Founder, Collaborator, ContactInfo } from './types';

// ============================================================================
// IDENTIFIER: ECLUSION DATASET CONFIGURATION
// Use this file to add, modify, or delete products and personnel profiles.
// To link a new product image from an assets folder, add 'imagePath' with the path
// (e.g. '/assets/products/custom_tote.png') and place the image file in that folder.
// ============================================================================

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Tote Bag Kotak Hijau",
    category: "Tote Bag",
    price: 74000,
    priceFormatted: "Rp. 74.000",
    imageKey: "tote-green",
    imagePath: "", // Set to a local path like '/assets/products/tote-green.png' if using custom files
    illustrator: "Ayu",
    illustratorBio: "Ayu adalah anak berusia 11 tahun penyandang Down Syndrome yang memiliki kepekaan luar biasa terhadap komposisi warna cerah dan motif alam. Setiap kali melukis, ia selalu bersenandung bahagia.",
    illustratorAvatar: "ayu",
    description: "Tas jinjing (Tote Bag) kain kanvas premium dengan motif kotak-kotak hijau segar khas musim panas yang digambar langsung oleh Ayu. Sangat pas untuk membawa laptop, buku kuliah, ataupun perlengkapan piknik akhir pekan Anda.",
    tags: ["Kanvas Premium", "Serbaguna", "Summer Vibes", "Checked Pattern"]
  },
  {
    id: "prod-2",
    name: "Gantungan Kunci Bunny Pink",
    category: "Key Chain",
    price: 29000,
    priceFormatted: "Rp. 29.000",
    imageKey: "bunny-keychain",
    imagePath: "",
    illustrator: "Laras",
    illustratorBio: "Laras (12 tahun, Tunawicara) mengekspresikan imajinasinya lewat karakter hewan-hewan imut. Laras sangat suka kelinci karena gerakannya yang lincah dan lucu.",
    illustratorAvatar: "laras",
    description: "Gantungan kunci akrilik tebal dua sisi dengan ilustrasi kelinci pink ceria rancangan Laras. Dilengkapi dengan gantungan logam kokoh dan rantai mini. Menambah kelucuan pada kunci rumah atau tas ransel Anda.",
    tags: ["Akrilik Tebal", "Karakter Kelinci", "Tahan Air", "Double Sided"]
  },
  {
    id: "prod-3",
    name: "Tote Bag Sand & Teal Wave",
    category: "Tote Bag",
    price: 74000,
    priceFormatted: "Rp. 74.000",
    imageKey: "tote-teal",
    imagePath: "",
    illustrator: "Banyu",
    illustratorBio: "Banyu (10 tahun, Autisme) menyukai keteraturan pola geometri dan kombinasi warna ombak laut yang menenangkan. Baginya, melukis adalah tempat teraman untuk berbicara pada dunia.",
    illustratorAvatar: "banyu",
    description: "Tote bag kanvas kokoh dengan warna paduan biru teal laut dan kuning pasir pantai yang estetik. Desain ombak laut di bagian tengah memberikan ketenangan batin khas liburan musim panas.",
    tags: ["Kanvas Tebal", "Pola Geometris", "Summer Sea", "Eco Friendly"]
  },
  {
    id: "prod-4",
    name: "Topi Kuning Ceria",
    category: "Hat",
    price: 55000,
    priceFormatted: "Rp. 55.000",
    imageKey: "yellow-cap",
    imagePath: "",
    illustrator: "Ayu",
    illustratorBio: "Ayu adalah anak berusia 11 tahun penyandang Down Syndrome yang memiliki kepekaan luar biasa terhadap komposisi warna cerah dan motif alam. Setiap kali melukis, ia selalu bersenandung bahagia.",
    illustratorAvatar: "ayu",
    description: "Topi baseball warna kuning pastel cerah berpola matahari musim panas yang menyenangkan. Terbuat dari bahan katun twill premium yang menyerap keringat, lengkap dengan gesper pengatur ukuran di bagian belakang.",
    tags: ["Katun Twill", "Baseball Cap", "Adjustable Size", "Sun Protection"]
  },
  {
    id: "prod-5",
    name: "Kaos Kaki Lavender Ribbed",
    category: "Socks",
    price: 37000,
    priceFormatted: "Rp. 37.000",
    imageKey: "socks-lavender",
    imagePath: "",
    illustrator: "Bumi",
    illustratorBio: "Bumi (13 tahun, ADHD) menyalurkan energinya yang meluap-luap menjadi garis-garis dinamis dan warna-warna yang berani. Karya seninya selalu dipenuhi dengan keceriaan tak terbatas.",
    illustratorAvatar: "bumi",
    description: "Kaos kaki rajutan katun elastis berwarna lavender lembut dengan aksen bintang kuning kecil yang ditenun rapi. Sangat nyaman di kaki, tidak panas, dan membawa kebahagiaan di setiap langkah kaki Anda.",
    tags: ["Rajutan Katun", "Elastis Lembut", "Lavender Tone", "Anti Gerah"]
  },
  {
    id: "prod-6",
    name: "Kaos Kaki Ungu Bintang",
    category: "Socks",
    price: 37000,
    priceFormatted: "Rp. 37.000",
    imageKey: "socks-purple",
    imagePath: "",
    illustrator: "Bumi",
    illustratorBio: "Bumi (13 tahun, ADHD) menyalurkan energinya yang meluap-luap menjadi garis-garis dinamis dan warna-warna yang berani. Karya seninya selalu dipenuhi dengan keceriaan tak terbatas.",
    illustratorAvatar: "bumi",
    description: "Kaos kaki katun rajut dengan kombinasi garis ungu tua dan motif bunga aster imut di bagian atas. Memberikan sentuhan retro yang ceria untuk melengkapi gaya berpakaian casual harian Anda.",
    tags: ["Aesthetic Stripes", "Retro Socks", "Bahan Breathable", "Comfy Ribbed"]
  },
  {
    id: "prod-7",
    name: "Gantungan Kunci Smiley Daisy",
    category: "Key Chain",
    price: 29000,
    priceFormatted: "Rp. 29.000",
    imageKey: "flower-keychain",
    imagePath: "",
    illustrator: "Banyu",
    illustratorBio: "Banyu (10 tahun, Autisme) menyukai keteraturan pola geometri dan kombinasi warna ombak laut yang menenangkan. Baginya, melukis adalah tempat teraman untuk berbicara pada dunia.",
    illustratorAvatar: "banyu",
    description: "Gantungan kunci berbentuk bunga matahari pelangi dengan wajah tersenyum lebar di tengahnya. Karya kolaboratif indah yang merefleksikan kebebasan berekspresi anak-anak istimewa.",
    tags: ["Rainbow Petals", "Smiley Pin", "Akrilik Ganda", "Keychain Lucu"]
  },
  {
    id: "prod-8",
    name: "Mug Keramik Mentari",
    category: "Others",
    price: 45000,
    priceFormatted: "Rp. 45.000",
    imageKey: "sunny-cup",
    imagePath: "",
    illustrator: "Ayu",
    illustratorBio: "Ayu adalah anak berusia 11 tahun penyandang Down Syndrome yang memiliki kepekaan luar biasa terhadap komposisi warna cerah dan motif alam. Setiap kali melukis, ia selalu bersenandung bahagia.",
    illustratorAvatar: "ayu",
    description: "Mug keramik tahan panas dengan lukisan matahari tersenyum dan ombak laut biru pastel. Sangat cocok menemani segelas es teh manis atau kopi susu hangat Anda di pagi hari yang cerah.",
    tags: ["Keramik Tebal", "Microwave Safe", "Handmade Painting", "Summer Wave"]
  }
];

export const FOUNDERS: Founder[] = [
  {
    name: "Nadia",
    role: "Founder & Creative Lead",
    avatarKey: "nadia",
    bio: "Nadia menggagas Eclusion dari mimpinya agar karya lukis sahabat-sahabat istimewanya bisa diapresiasi luas oleh masyarakat Indonesia."
  },
  {
    name: "Naura",
    role: "Co-Founder & Product Designer",
    avatarKey: "naura",
    bio: "Naura mengkurasi lukisan mentah dan mentransformasikannya menjadi pola-pola siap cetak pada produk merchandise berkualitas tinggi."
  },
  {
    name: "Samudra",
    role: "Co-Founder & Community Outreach",
    avatarKey: "samudra",
    bio: "Samudra berfokus menjalin kemitraan dengan sekolah luar biasa (SLB) dan yayasan difabel untuk merangkul lebih banyak seniman cilik berkebutuhan khusus."
  }
];

export const COLLABORATORS: Collaborator[] = [
  {
    name: "Ayu",
    role: "Pelukis Utama (Down Syndrome)",
    avatarKey: "ayu",
    bio: "Ayu mahir memadupadankan palet warna pastel hangat seperti matahari kuning dan langit biru."
  },
  {
    name: "Banyu",
    role: "Seniman Geometri (Autisme)",
    avatarKey: "banyu",
    bio: "Pola garis ombak laut dan ketelitian simetris menjadi ciri khas utama dari karya-karya Banyu."
  },
  {
    name: "Bumi",
    role: "Ilustrator Dinamis (ADHD)",
    avatarKey: "bumi",
    bio: "Karya Bumi didominasi coretan abstrak yang berenergi tinggi, mencerminkan semangat juangnya."
  }
];

export const CONTACTS: ContactInfo[] = [
  {
    platform: "Instagram",
    label: "@eclusion.id",
    value: "Eclusion Indonesia",
    link: "https://www.instagram.com/eclusion.id?igsh=MW1sOGd6bXp3cW84ZA=="
  },
  {
    platform: "Website",
    label: "www.eclusion.id",
    value: "Eclusion Official Site",
    link: "https://www.instagram.com/eclusion.id?igsh=MW1sOGd6bXp3cW84ZA==" // Redirects to Instagram as requested
  },
  {
    platform: "Whatsapp",
    label: "+62 812-3456-7890",
    value: "Hubungi Admin Eclusion",
    link: "https://www.instagram.com/eclusion.id?igsh=MW1sOGd6bXp3cW84ZA==" // Direct connection
  }
];
