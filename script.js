body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

header {
    background-color: white;
    padding: 20px 0;
}

header .container .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

nav ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
}

nav ul li {
    margin-right: 20px;
}

nav ul li a {
    text-decoration: none;
    color: #333;
}

header .container .header-title { /* Perubahan: target class header-title */
    margin: 0;
    text-align: center;
    flex-grow: 1; /* Biarkan h2 mengambil ruang yang tersedia */
    white-space: nowrap;
}

/* header .container h2 {
    margin: 0;
    text-align: center;
    flex-grow: 1;
    white-space: nowrap;
} */

.sign-up {
    background-color: #E2EAF4;
    color: black;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

/* Hero Section */
.hero {
    background-color: #E2EAF4;
    padding: 100px 0;
}

.hero .container .hero-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.hero .container .hero-text {
    flex: 1;
}

.hero .container .hero-media {
    flex: 1;
    text-align: right;
    
}

.hero .container .hero-media img {
    width: 480px;
    height: 380px;
    height: auto;
}

.hero .container .hero-text button {
    background-color: white; /* Ubah warna latar belakang menjadi putih */
    color: black; /* Ubah warna teks menjadi hitam atau warna lain yang sesuai */
    padding: 10px 20px; /* Sesuaikan padding jika perlu */
    border: none; /* Hapus border jika tidak diinginkan */
    border-radius: 5px; /* Tambahkan border radius 5px */
    cursor: pointer;
}

.testi-social {
    background-color: white;
    color: black;
    padding: 60px 0;
    text-align: center;
}

.testi-social h2 {
    margin-bottom: 20px;
}

.social-logos {
    display: flex;
    justify-content: center;
    align-items: center;
}

.social-logos a {
    display: inline-block;
    margin: 0; /* Hilangkan margin pada tautan */
    padding: 0; /* Hilangkan padding pada tautan */
}

.social-logos img {
    width: 40px;
    height: 40px;
    margin: 0; /* Hilangkan margin pada gambar */
    padding: 0; /* Hilangkan padding pada gambar */
    display: block; /* Penting untuk menghilangkan spasi tambahan */
}

.feature-list {
    background-color: #f6f7fa;
    padding: 60px 0;
}

.feature-list .container .feature-list-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.feature-list .container .feature-list-text {
    flex: 1;
}

.feature-list .container .feature-list-text p {
    line-height: 1.6; /* Meningkatkan keterbacaan */
    font-size: 16px; /* Menyesuaikan ukuran teks */
    max-width: 500px; /* Membatasi lebar teks */
    text-align: justify; /* Rata kanan dan kiri */
    margin-bottom: 20px; /* Menambahkan jarak dengan elemen selanjutnya */
}

.feature-list .container .feature-list-media {
    flex: 1;
    text-align: right;
}

.feature-list .container .feature-list-media img {
    width: 380px;
    height: 550px;
    border-radius: 8px;
}

feature-list ul {
    list-style-type: disc;
    padding-left: 20px;
}

/* Feature Split */
.feature-split {
    padding: 0;
    margin: 0;
}

.feature-split .container {
    padding: 0;
    margin: 0;
    width: 100%;
    max-width: 100%;
}

.feature-split .feature-split-content {
    display: flex;
    width: 100%;
    height: 600px;
    margin: 0;
    padding: 0;
}

.feature-split .feature-split-media {
    flex: 0 0 50%;
    background: #E2EAF4;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 50vw;
    height: 100%;
}

.feature-split .feature-split-media img {
    width: 320px;
    height: 360px;
    object-fit: cover;
    border-radius: 8px;
    background: #fff;
}

.feature-split-text {
    flex: 1;
    height: 600px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 60px;
}

.feature-split-text h2 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #222;
    text-align: left;
    position: relative;
    z-index: 2;
}

.feature-split-text p {
    font-size: 16px;
    line-height: 1.7;
    color: #444;
    margin-bottom: 30px;
    max-width: 500px;
    text-align: left;
    position: relative;
    z-index: 2;
}

.feature-split-text button {
    padding: 12px 32px;
    font-size: 15px;
    border: none;
    background: #E2EAF4;
    color: #333;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
}

.feature-split-text button:hover {
    background: #f0f0f0;
}

/* Feature Quote Section */
.feature-quote {
    padding: 60px 0;
    background-color: #f6f7fa;
}

.feature-quote .container .feature-quote-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.feature-quote .container .feature-quote-text {
    flex: 1;
}

.feature-quote .container .feature-quote-media {
    flex: 1;
    text-align: right;
    position: relative; /* Penting untuk layering */
    width: 400px;
    height: 232px;
}

.feature-quote .container .quote-image-back,
.feature-quote .container .quote-image-front {
    position: absolute;
    width: 400px; /* Lebar persegi panjang */
    height: 232px; /* Tinggi persegi panjang */
}

.feature-quote .container .quote-image-front { /* Perubahan: Front di kiri */
    z-index: 2; /* Layer depan */
    background-color: black; /* Hitam */
    top: 32px; /* Geser ke bawah */
    left: 100px; /* Geser ke kanan */
}

.feature-quote .container .quote-image-back { /* Perubahan: Back di kanan */
    z-index: 1; /* Layer belakang */
    background-color: rgba(255, 255, 255, 0.7); /* Putih transparan */
    top: 0;
    left: 132px; /* Geser ke kanan */
}

/* Testi Quote Section */
.testi-quote {
    background-color: #E2EAF4;
    color: black;
    padding: 60px 0;
}

.testi-quote .container .testi-quote-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.testi-quote .container .testi-quote-text {
    flex: 1;
}

.testi-quote .container .testi-quote-media {
    margin-top: 20px;
}

.testi-quote .container .person-image {
    width: 70px;
    height: 70px;
    border-radius: 50%; /* Membuat gambar menjadi lingkaran */
    object-fit: cover;
    margin-bottom: 10px;
}

.testi-quote .container .person-name {
    font-weight: none;
}
/* Rest of your CSS remains the same */

.features {
    padding: 80px 0;
    text-align: center;
}

.features .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.feature {
    text-align: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.feature .feature-content { /* Tambahkan gaya untuk feature-content */
    display: flex;
    flex-direction: column;
    align-items: center;
}

.feature img {
    width: 262px;
    height: 350px;
    margin-bottom: 20px;
}

.feature h3 {
    margin-bottom: 10px;
}

.feature p {
    color: #666;
}

.cta {
    background-color: #007bff;
    color: white;
    padding: 60px 0;
    text-align: center;
}

.cta h2 {
    font-size: 2em;
    margin-bottom: 20px;
}

.cta button {
    background-color: white;
    color: #E2EAF4;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
}

footer {
    background-color: #E2EAF4;
    color: black;
    padding: 40px 0;
}

footer .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

footer .footer-left {
    flex: 1;
    text-align: left;
    font-weight: bold;
}

footer .footer-center {
    flex: 1;
    text-align: center;
}

footer .footer-right {
    flex: 1;
    text-align: left;
}

footer .footer-center img.instagram-logo {
    width: 30px; /* Sesuaikan ukuran logo Instagram */
    height: 30px;
    margin-top: 10px; /* Tambahkan margin atas untuk memberi jarak */
}

footer .footer-bottom {
    text-align: center;
    margin-top: 40px;
}

footer .footer-bottom p {
    margin: 0;
}

/* Responsive Design */


section {
    opacity: 0;
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    transform: translateY(50px);
}

section.active {
    opacity: 1;
    transform: translateY(0);
} 

.mobile-nav {
    display: none; /* Hide dropdown by default */
}



@media (max-width: 768px) {

    .mobile-nav {
        display: block;
        width: 100%;
        padding: 10px;
        font-size: 16px;
        margin-top: 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: white;
        text-align: center; /* Center dropdown text */
        margin-left: auto; /* Center dropdown horizontally */
        margin-right: auto;
    }

    header .header-content {
        flex-direction: column;
        align-items: center; /* Center items horizontally */
    }

    

    .header-title {
        text-align: center;
        width: 100%;
        margin-top: 10px;
    }

    .hero {
        padding: 60px 0;
    }

    .hero .container .hero-content {
        flex-direction: column;
    }

    .hero .container .hero-media {
        text-align: center;
    }

    .hero .container .hero-media img {
        width: 100%; /* Gambar mengisi lebar layar */
        height: auto;
    }

    .hero h1 {
        font-size: 2em;
    }

    .hero p {
        font-size: 1em;
    }

    .feature-list .container .feature-list-content {
        flex-direction: column;
    }

    .feature-list .container .feature-list-media {
        text-align: center;
        order: -1; /* Gambar ditampilkan di atas teks */
        margin-bottom: 20px;
    }

    .feature-list .container .feature-list-media img {
        width: 100%;
        height: auto;
    }
    
    .feature-split .feature-split-content {
        flex-direction: column;
        height: auto; /* Tinggi otomatis berdasarkan konten */
    }

    .feature-split .feature-split-media {
        width: 100%;
        height: auto;
    }

    .feature-split .feature-split-media img {
        width: 100%;
        height: auto;
    }

    .feature-split-text {
        height: auto;
        padding: 20px;
    }

    .feature-quote .container .feature-quote-content {
        flex-direction: column;
    }

    .feature-quote .container .feature-quote-media {
        text-align: center;
        margin-top: 20px;
    }

    .feature-quote .container .quote-image-back,
    .feature-quote .container .quote-image-front {
        position: relative; /* Menghilangkan posisi absolute */
        width: 100%;
        left: 0;
        top: 0;
    }

    .features .feature-grid {
        grid-template-columns: 1fr; /* 1 kolom */
    }

    .container {
        width: 95%;
    }

    header .header-content {
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }

    nav ul {
        display: none;
    }

    .sign-up {
        margin-top: 10px;
        margin-left: auto; /* Center button horizontally */
        margin-right: auto;
        display: block; 
    }

    .hero .hero-content {
        flex-direction: column;
        text-align: center;
        gap: 20px;
    }

    .hero .hero-text h1 {
        font-size: 1.8em;
    }

    .hero .hero-media img {
        width: 100%;
        max-width: 320px;
    }

    .feature-list-content,
    .feature-quote-content,
    .feature-split-content {
        flex-direction: column;
        text-align: center;
        gap: 20px;
    }

    .feature-list-media img,
    .feature-split-media img,
    .feature-quote-media .quote-image-front,
    .feature-quote-media .quote-image-back {
        width: 100%;
        height: auto;
    }

    .feature-quote-media {
        width: 100%;
        height: auto;
    }

    .feature-quote-media img {
        position: relative;
        top: 0;
        left: 0;
        margin-bottom: 10px;
    }

    .testi-quote .testi-quote-content {
        padding: 0 15px;
    }

    .feature-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .feature img {
        width: 100%;
        max-width: 300px;
        height: auto;
    }

    .cta h2 {
        font-size: 1.5em;
    }

    footer .container {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 20px;
    }

    .footer-left,
    .footer-center,
    .footer-right {
        flex: none;
    }
}










