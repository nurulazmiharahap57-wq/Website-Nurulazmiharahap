// Ambil elemen-elemen section dan tombol
const homeSection = document.getElementById('homeSection');
const aboutSection = document.getElementById('aboutSection');
const contactSection = document.getElementById('contactSection');

const homeBtn = document.getElementById('homeBtn');
const aboutBtn = document.getElementById('aboutBtn');
const contactBtn = document.getElementById('contactBtn');

// Fungsi untuk mengubah section aktif
function showSection(sectionToShow) {
    // Sembunyikan semua section
    homeSection.classList.remove('active-section');
    aboutSection.classList.remove('active-section');
    contactSection.classList.remove('active-section');
    
    // Tampilkan section yang dipilih
    if (sectionToShow === 'home') {
        homeSection.classList.add('active-section');
    } else if (sectionToShow === 'about') {
        aboutSection.classList.add('active-section');
    } else if (sectionToShow === 'contact') {
        contactSection.classList.add('active-section');
    }
    
    // Hapus class active dari semua tombol
    homeBtn.classList.remove('active');
    aboutBtn.classList.remove('active');
    contactBtn.classList.remove('active');
    
    // Tambahkan class active ke tombol yang sesuai
    if (sectionToShow === 'home') {
        homeBtn.classList.add('active');
    } else if (sectionToShow === 'about') {
        aboutBtn.classList.add('active');
    } else if (sectionToShow === 'contact') {
        contactBtn.classList.add('active');
    }
}

// Event listener untuk tombol navigasi
homeBtn.addEventListener('click', () => {
    showSection('home');
    scrollToTop();
});

aboutBtn.addEventListener('click', () => {
    showSection('about');
    scrollToTop();
});

contactBtn.addEventListener('click', () => {
    showSection('contact');
    scrollToTop();
});

// Fungsi scroll ke atas
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Inisialisasi saat halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
    // Set tombol home aktif
    if (homeSection.classList.contains('active-section')) {
        homeBtn.classList.add('active');
    } else {
        showSection('home');
    }
    
    // Efek hover pada kartu
    const cards = document.querySelectorAll('.about-card, .contact-item, .card-pastel');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (!card.classList.contains('contact-item')) {
                card.style.transform = 'translateY(-3px)';
            }
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0px)';
        });
    });
});

// Efek bounce saat tombol diklik
const allNavBtns = document.querySelectorAll('.nav-btn');
allNavBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        this.style.transform = 'scale(0.96)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Alert untuk sosial media (demo)
const socialIcons = document.querySelectorAll('.social-circle');
socialIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Terima kasih sudah menghubungi \nHubungi aku langsung ya lewat contact!');
    });
});

// Animasi floating heart berganti icon
const floating = document.querySelector('.floating-heart');
if (floating) {
    setInterval(() => {
        const icons = ['🧸✨', '🍰💖', '🐻‍❄️🌸', '🎀🐣', '☁️🧁'];
        const newIcon = icons[Math.floor(Math.random() * icons.length)];
        floating.innerText = newIcon;
    }, 4000);
}

contactBtn.addEventListener('click', () => {
    showSection('contact');
    scrollToTop();
});