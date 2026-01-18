document.addEventListener('DOMContentLoaded', () => {
    // Loader
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1500);

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Animate hamburger
        const bars = mobileToggle.querySelectorAll('.bar');
        // Simple toggle logic can be expanded for animation
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                navMenu.classList.remove('active');
            }
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    document.querySelectorAll('.service-card, .feature-box').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // CSS class handling for animations
    const style = document.createElement('style');
    style.innerHTML = `
        .animate-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // --- MODAL & BOOKING LOGIC ---

    const modal = document.getElementById('bookingModal');
    const softwareModal = document.getElementById('softwareModal');

    const closeBtn = document.querySelector('.close-modal');
    const closeSwBtn = document.querySelector('.close-software');

    // Open Hardware Modal
    const hardwareBtn = document.querySelector('.btn-primary');
    if (hardwareBtn) {
        hardwareBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('show');
        });
    }

    // Open Software Modal
    const softwareBtn = document.querySelector('.btn-secondary');
    if (softwareBtn) {
        softwareBtn.addEventListener('click', (e) => {
            e.preventDefault();
            softwareModal.classList.add('show');
        });
    }

    // Close Modals
    closeBtn.addEventListener('click', () => modal.classList.remove('show'));
    if (closeSwBtn) closeSwBtn.addEventListener('click', () => softwareModal.classList.remove('show'));

    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('show');
        if (e.target === softwareModal) softwareModal.classList.remove('show');
    });

    // Cost Calculation Logic
    const transportMap = {
        'Jakarta': 10000,
        'Depok': 25000,
        'Bogor': 35000,
        'Tangerang': 25000, // Updated to match HTML
        'Bekasi': 30000,
        'Lainnya': 0,
        'GPS': 0 // Dynamic
    };

    // BSD Serpong Coordinates (Base Station)
    const BASE_COORDS = { lat: -6.3090, lng: 106.6713 }; // Example: Around BSD

    function getDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // Distance in km
        return d;
    }

    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }

    // Dummy Technician Data
    const techMap = {
        'Jakarta': { name: 'Rudi', rating: '4.9', dist: '5 KM' },
        'Depok': { name: 'Ahmad', rating: '4.8', dist: '8 KM' },
        'Bogor': { name: 'Dedi', rating: '4.7', dist: '12 KM' },
        'Tangerang': { name: 'Budi', rating: '4.9', dist: '7 KM' },
        'Bekasi': { name: 'Siti', rating: '5.0', dist: '6 KM' },
        'GPS': { name: 'System', rating: '5.0', dist: 'Calculating...' }
    };

    const citySelect = document.getElementById('city');
    const serviceSelect = document.getElementById('serviceType');
    const transportDisplay = document.getElementById('transportCost');
    const totalDisplay = document.getElementById('totalCost');
    const gpsGroup = document.getElementById('gps-group');
    const btnLocation = document.getElementById('btn-location');
    const locStatus = document.getElementById('location-status');
    const userLatInput = document.getElementById('user-lat');
    const userLongInput = document.getElementById('user-long');
    const calcDistInput = document.getElementById('calc-distance');

    // Handle City Change (Show/Hide GPS Button)
    citySelect.addEventListener('change', () => {
        if (citySelect.value === 'GPS') {
            gpsGroup.style.display = 'block';
            updateCost(); // Reset
        } else {
            gpsGroup.style.display = 'none';
            updateCost();
        }
    });

    // Handle GPS Button Click
    if (btnLocation) {
        btnLocation.addEventListener('click', () => {
            if ("geolocation" in navigator) {
                locStatus.textContent = "Sedang mengambil lokasi...";
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const lat = position.coords.latitude;
                        const long = position.coords.longitude;

                        userLatInput.value = lat;
                        userLongInput.value = long;

                        const dist = getDistance(BASE_COORDS.lat, BASE_COORDS.lng, lat, long);
                        calcDistInput.value = dist.toFixed(2);

                        locStatus.innerHTML = `<span style="color: #00f2ff;">Lokasi Ditemukan! Jarak dari Base (BSD): <b>${dist.toFixed(1)} KM</b></span>`;

                        updateCost();
                    },
                    (error) => {
                        console.error("Error GPS:", error);
                        locStatus.textContent = "Gagal mengambil lokasi. Pastikan GPS aktif.";
                    }
                );
            } else {
                locStatus.textContent = "Browser tidak mendukung Geolocation.";
            }
        });
    }

    // Create Tech Info & Error Elements
    let techInfoDiv = document.createElement('div');
    techInfoDiv.className = 'est-row tech-info';
    techInfoDiv.style.marginTop = '10px';
    techInfoDiv.style.fontSize = '0.8rem';
    techInfoDiv.style.display = 'none';

    const estBox = document.querySelector('.estimation-box');
    if (estBox) estBox.appendChild(techInfoDiv);

    function updateCost() {
        const city = citySelect.value;
        const service = serviceSelect.value;

        // Validation: Out of Area (Manual)
        if (city === 'Lainnya') {
            transportDisplay.textContent = '-';
            totalDisplay.textContent = '-';
            techInfoDiv.innerHTML = `<span style="color: #ff4757;"><i class="fas fa-times-circle"></i> Maaf, kami belum melayani area ini.</span>`;
            techInfoDiv.style.display = 'block';
            return;
        }

        let transport = transportMap[city] || 0;

        // GPS Dynamic Pricing Logic
        if (city === 'GPS') {
            const distance = parseFloat(calcDistInput.value);
            if (!isNaN(distance)) {
                // Formula: Base 15k + (2.5k per KM)
                transport = 15000 + (distance * 2500);
                // Round to hundreds
                transport = Math.ceil(transport / 100) * 100;
            } else {
                transport = 0; // Waiting for GPS
            }
        }

        let baseService = 150000;
        let serviceText = "Rp 150.000";

        // Logic: Seikhlasnya for "Install Ulang"
        if (service.includes('Install Ulang')) {
            baseService = 0; // Seikhlasnya logic
            serviceText = "Seikhlasnya";

            const serviceCostSpan = document.querySelector('.estimation-box .est-row:first-child span:last-child');
            if (serviceCostSpan) serviceCostSpan.textContent = serviceText;
        } else {
            const serviceCostSpan = document.querySelector('.estimation-box .est-row:first-child span:last-child');
            if (serviceCostSpan) serviceCostSpan.textContent = "Rp 150.000";
        }

        if (city === 'GPS' && transport === 0) {
            transportDisplay.textContent = "Menunggu GPS...";
        } else {
            transportDisplay.textContent = `Rp ${transport.toLocaleString('id-ID')}`;
        }

        if (baseService === 0) {
            totalDisplay.textContent = `Rp ${transport.toLocaleString('id-ID')} + Jasa Seikhlasnya`;
        } else {
            totalDisplay.textContent = `Rp ${(baseService + transport).toLocaleString('id-ID')}`;
        }

        // Update Tech Info for Manual Cities
        if (city !== 'GPS' && techMap[city]) {
            const tech = techMap[city];
            techInfoDiv.innerHTML = `<span style="color: #00f2ff;"><i class="fas fa-user-astronaut"></i> Teknisi Terdekat: <b>${tech.name}</b> (${tech.dist}) ⭐${tech.rating}</span>`;
            techInfoDiv.style.display = 'block';
        } else if (city === 'GPS' && parseFloat(calcDistInput.value) > 0) {
            techInfoDiv.innerHTML = `<span style="color: #00f2ff;"><i class="fas fa-satellite"></i> Akurasi GPS Tinggi. Biaya Transport Real-time.</span>`;
            techInfoDiv.style.display = 'block';
        } else {
            techInfoDiv.style.display = 'none';
        }
    }

    // citySelect.addEventListener('change', updateCost); // Already added logic above for GPS toggle
    serviceSelect.addEventListener('change', updateCost); // Also update when service changes

    // Initial cost calculation on load
    updateCost();

    // Form Submission -> WhatsApp (Hardware)
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const serviceType = document.getElementById('serviceType').value;
        const deviceType = document.getElementById('deviceType').value;
        const city = document.getElementById('city').value;
        let address = document.getElementById('address').value; // let, cause we might append MAP link
        const time = document.getElementById('bookingTime').value;
        const payment = document.querySelector('input[name="paymentMethod"]:checked').value;

        // Grab values for logic
        let transport = transportMap[city] || 0;

        // Dynamic GPS values for submission
        if (city === 'GPS') {
            const dist = parseFloat(calcDistInput.value);
            const lat = userLatInput.value;
            const long = userLongInput.value;

            if (lat && long) {
                // Append Map Link to Address
                address += `\n📍 *Peta Lokasi:* https://www.google.com/maps?q=${lat},${long}`;
            }

            if (!isNaN(dist)) {
                transport = 15000 + (dist * 2500);
                transport = Math.ceil(transport / 100) * 100;
            }
        }

        // Use global baseService logic re-calculation or assume default 150k / 0 for Seikhlasnya
        // For simplicity reusing the check:
        let currentBase = 150000;
        if (serviceType.includes('Install Ulang')) currentBase = 0;

        const total = currentBase + transport;

        // Tracking Link (Mockup)
        const trackingLink = `https://satujalan-demo.com/tracking?id=HW-${Math.floor(Math.random() * 1000)}`;

        const waNumber = '6282138004443';
        const message = `Halo SatuJalan, saya ingin booking service:
        
📋 *FORM BOOKING HARDWARE*
--------------------------------
🔧 *Layanan:* ${serviceType}
💻 *Device/Masalah:* ${deviceType}
🏙️ *Kota/Mode:* ${city}
📍 *Alamat:* ${address}
⏰ *Waktu:* ${time}
💳 *Pembayaran:* ${payment}
--------------------------------
💰 *Estimasi Total:* Rp ${total.toLocaleString('id-ID')}
🔗 *Ref Tracking:* ${trackingLink}

Mohon konfirmasi jadwal & teknisi.`;

        window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');
        modal.classList.remove('show');
    });

    // Form Submission -> WhatsApp (Software)
    const softwareForm = document.getElementById('softwareForm');
    if (softwareForm) {
        softwareForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const type = document.getElementById('swServiceType').value;
            const desc = document.getElementById('projectDesc').value;
            const budget = document.getElementById('budget').value;
            const timeline = document.getElementById('timeline').value;
            const onsite = document.querySelector('input[name="onsite"]:checked').value;

            const waNumber = '6282138004443';
            const message = `Halo SatuJalan, saya tertarik project software:
            
💻 *REQUEST PROJECT*
--------------------------------
🌐 *Tipe:* ${type}
📝 *Deskripsi:* ${desc}
💰 *Budget:* ${budget}
⏱️ *Timeline:* ${timeline}
🤝 *Meeting:* ${onsite}

Mohon info proposal & penawaran.`;

            window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');
            softwareModal.classList.remove('show');
        });
    }
    // --- ENVATO DOWNLOAD LOGIC ---

    // 1. Sliding Text Animation
    const subtitleText = document.getElementById('subtitle-text');
    const messages = [
        "Instal ulang Windows dengan biaya Seiklasnya. Didukung solusi teknis menyeluruh dari hardware hingga software, tanpa ribet—kami datang ke lokasi Anda.",
        "Harga mulai 10k untuk download di Envato. Dapatkan aset premium dengan harga terjangkau!"
    ];
    let msgIndex = 0;

    if (subtitleText) {
        setInterval(() => {
            // Slide Out
            subtitleText.classList.add('text-slide-out');

            setTimeout(() => {
                // Change Text
                msgIndex = (msgIndex + 1) % messages.length;
                subtitleText.textContent = messages[msgIndex];

                // Prepare for Slide In (Move to start position)
                subtitleText.classList.remove('text-slide-out');
                subtitleText.classList.add('text-slide-in');

                // Trigger Reflow to restart animation
                void subtitleText.offsetWidth;

                // Slide In (Move to natural position)
                subtitleText.classList.remove('text-slide-in');
            }, 500); // Wait for slide-out transition
        }, 5000); // Every 5 seconds
    }

    // 2. Download Modal
    const downloadModal = document.getElementById('downloadModal');
    const downloadBtn = document.getElementById('btn-download');
    const closeDownBtn = document.querySelector('.close-download');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            downloadModal.classList.add('show');
        });
    }

    if (closeDownBtn) {
        closeDownBtn.addEventListener('click', () => {
            downloadModal.classList.remove('show');
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === downloadModal) downloadModal.classList.remove('show');
    });

    // 3. Download Form Submission
    const downloadForm = document.getElementById('downloadForm');
    if (downloadForm) {
        downloadForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const link = document.getElementById('envatoLink').value;
            const payment = document.querySelector('input[name="dlPayment"]:checked').value;

            const waNumber = '6282138004443';
            const message = `Halo SatuJalan, saya mau Request Download File Envato:
            
📥 *REQUEST DOWNLOAD ENVATO*
--------------------------------
🔗 *Link:* ${link}
💳 *Metode Bayar:* ${payment}
💰 *Harga:* Mulai Rp 10.000 / File

Mohon diproses, terima kasih.`;

            window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');
            downloadModal.classList.remove('show');
        });
    }

});
