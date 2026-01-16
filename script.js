document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const detailView = document.getElementById('detail-view');
    const defaultContent = document.querySelector('.default-message'); // The Summary Glimpse

    // === CUSTOM CURSOR LOGIC ===
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    if (cursorDot && cursorOutline) {
        window.addEventListener('mousemove', function (e) {
            const posX = e.clientX;
            const posY = e.clientY;
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });
    }

    // === CONTENT MAP ===
    const contentMap = {};
    const contentIds = ['identity', 'title', 'summary', 'experience', 'education', 'skills', 'achievements', 'portfolio', 'photo'];

    contentIds.forEach(id => {
        const contentDiv = document.getElementById(`content-${id}`);
        if (contentDiv) {
            contentMap[id] = contentDiv.innerHTML;
        }
    });

    // === COLOR MAP ===
    const colorMap = {
        'identity': { primary: '#ff0055', secondary: '#aa0033' },
        'title': { primary: '#00ccff', secondary: '#006688' },
        'summary': { primary: '#ffcc00', secondary: '#cc9900' },
        'experience': { primary: '#00ff88', secondary: '#009955' },
        'education': { primary: '#cc00ff', secondary: '#770099' },
        'skills': { primary: '#ff6600', secondary: '#cc4400' },
        'achievements': { primary: '#00ffcc', secondary: '#009977' },
        'portfolio': { primary: '#ff00cc', secondary: '#990077' },
        'photo': { primary: '#66ff33', secondary: '#33cc00' }
    };

    const root = document.documentElement;

    // Store the initial default HTML (The summary glimpse)
    let summaryHTML = defaultContent ? defaultContent.innerHTML : '';
    const defaultPrimary = getComputedStyle(root).getPropertyValue('--primary-color');
    const defaultSecondary = getComputedStyle(root).getPropertyValue('--secondary-color');

    // === TRANSLATION STATE ===
    let currentLanguage = 'id'; // Prevents reset on navigation

    function activateSection(target, itemElement) {
        // Remove active class from all menu items
        menuItems.forEach(i => i.classList.remove('active-menu'));

        // Add active class if itemElement provided
        if (itemElement) itemElement.classList.add('active-menu');

        // Apply Dynamic Background Colors
        if (colorMap[target]) {
            root.style.setProperty('--primary-color', colorMap[target].primary);
            root.style.setProperty('--secondary-color', colorMap[target].secondary);
        }

        // Clear current view
        detailView.innerHTML = '';

        const newContent = document.createElement('div');
        newContent.classList.add('detail-content', 'active');

        if (contentMap[target]) {
            newContent.innerHTML = contentMap[target];
        } else {
            // If target not found or resetting, show default/summary
            newContent.innerHTML = summaryHTML;
            newContent.classList.add('default-message');
        }

        detailView.appendChild(newContent);
        detailView.scrollTop = 0;

        // CRITICAL: Re-apply translations because we just injected raw HTML
        if (typeof applyTranslations === 'function') {
            applyTranslations(currentLanguage);
        }
    }

    function resetToDefault() {
        menuItems.forEach(i => i.classList.remove('active-menu'));

        // Reset Colors
        root.style.setProperty('--primary-color', defaultPrimary);
        root.style.setProperty('--secondary-color', defaultSecondary);

        detailView.innerHTML = '';
        const defaultDiv = document.createElement('div');
        defaultDiv.classList.add('detail-content', 'default-message', 'active');
        defaultDiv.innerHTML = summaryHTML;
        detailView.appendChild(defaultDiv);

        // CRITICAL: Re-apply translations here too
        if (typeof applyTranslations === 'function') {
            applyTranslations(currentLanguage);
        }
    }

    // === SOUND & HAPTIC FEEDBACK ===
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    function playHoverSound() {
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime); // High pitch futuristic blip
        oscillator.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.1);

        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.1);
    }

    function triggerVibe() {
        if (navigator.vibrate) {
            navigator.vibrate(50); // Short 50ms vibration
        }
    }

    menuItems.forEach(item => {
        // Desktop Hover Behavior
        item.addEventListener('mouseenter', () => {
            const target = item.getAttribute('data-target');
            activateSection(target, item);
        });

        // Mouse Leave Behavior - Reset to Summary (Desktop Only)
        item.addEventListener('mouseleave', () => {
            if (window.innerWidth > 800) {
                resetToDefault();
            }
        });

        // Click Behavior (Mobile/Touch)
        item.addEventListener('click', (e) => {
            // Updated Request: Sound + Vibe on Click
            playHoverSound();
            triggerVibe();

            // Simple 1x Click Logic: Always show info. No reset toggle.
            const target = item.getAttribute('data-target');
            activateSection(target, item);
        });
    });


    // === TRANSLATIONS ===
    const translations = {
        'id': {
            'header_role': 'Kepala Media & Produser Multimedia | Web Developer',
            'summary_title': 'Ringkasan Profil',
            'summary_desc': 'Profesional multimedia dengan pengalaman lebih dari 10 tahun dalam produksi konten digital, pengelolaan media, dan pengembangan visual branding.',
            'hover_prompt': 'Arahkan kursor ke menu untuk detail spesifik.',

            // Labels
            'label_name': 'Nama:',
            'label_born': 'Lahir:',
            'label_address': 'Alamat:',
            'label_status': 'Status:',
            'label_sim': 'SIM:',
            'val_born': 'Probolinggo, 24 Mei 1993',
            'val_address': 'Cipete Selatan, Jakarta Selatan',
            'val_status': 'Menikah',

            // Headers & Menus
            'menu_identity': 'Identitas',
            'menu_position': 'Posisi',
            'menu_about': 'Tentang Saya',
            'menu_experience': 'Pengalaman',
            'menu_education': 'Pendidikan',
            'menu_skills': 'Keahlian',
            'menu_achievement': 'Prestasi',
            'menu_contact': 'Kontak',
            'menu_photo': 'Foto',

            'about_header': 'Tentang Saya',
            'exp_header': 'Pengalaman Kerja',
            'edu_header': 'Pendidikan',
            'contact_header': 'Media Sosial & Kontak',
            'photo_header': 'Foto Profesional',

            // Experience
            'exp_date_1': '2023 - Sekarang',
            'exp_role_1': 'Kepala Media',
            'exp_desc_1': 'Bertanggung jawab atas perencanaan, produksi, dan distribusi konten digital, pengelolaan tim media, serta peningkatan engagement dan branding institusi.',
            'exp_date_2': '2017 - 2023',
            'exp_role_2': 'Produser & Manajer Produksi',
            'exp_desc_2': 'Memimpin produksi program TV & digital, manajemen kru, serta quality control konten.',
            'exp_date_3': '2015 - 2017',
            'exp_role_3': 'Kameramen & Editor',
            'exp_desc_3': 'Operasional kamera dan editing video untuk konten yayasan.',

            // Education
            'edu_major': 'S1 Teknik Informatika',
            'edu_school': 'Universitas Pamulang',
            'edu_date': '2022 - Sekarang',

            // Skills
            'skill_cat_1': 'Teknis Multimedia',
            'skill_cat_2': 'Teknis IT',
            'skill_cat_3': 'Sistem & Tools',

            'job_title_1': 'Kepala Media & Produser Multimedia',
            'job_title_2': 'Ahli Desain & Pengembang Web',
            'job_tagline': 'Branding posisi yang menggabungkan kepemimpinan kreatif dan kompetensi teknis.',
            'about_lead': 'Profesional Multimedia dengan pengalaman <span class="neon-cyan">10+ Tahun</span> dalam produksi konten digital, pengelolaan media, dan visual branding.',
            'key_skills': 'Keahlian Utama:',
            'skill_point_1': '<span class="neon-purple">Media Management</span>: Memimpin tim media & strategi konten.',
            'skill_point_2': '<span class="neon-green">YouTube Growth</span>: Mengelola channel hingga tahap <span class="highlight-text">Monetisasi</span>.',
            'skill_point_3': '<span class="neon-blue">Produksi</span>: Mengarahkan konten Televisi & Digital berkualitas tinggi.',
            'skill_point_4': '<span class="neon-pink">Technical Creative</span>: Desain, Video Editing, & Pengembangan Web.',

            'ach_1': 'Membawa channel YouTube dari nol hingga Monetisasi.',
            'ach_2': 'Memimpin tim media produksi konten TV & Digital High Quality.',
            'ach_3': 'Mengembangkan standar produksi kreatif dan teknis tim.',
            'btn_certificates': 'Lihat Sertifikat & Penghargaan',
            'btn_portfolio': 'Buka Portofolio Project'
        },
        'en': {
            'header_role': 'Head of Media & Multimedia Producer | Web Developer',
            'summary_title': 'Profile Summary',
            'summary_desc': 'Multimedia professional with over 10 years of experience in digital content production, media management, and visual branding.',

            // Labels
            'label_name': 'Name:',
            'label_born': 'Born:',
            'label_address': 'Address:',
            'label_status': 'Status:',
            'label_sim': 'License:',
            'val_born': 'Probolinggo, May 24, 1993',
            'val_address': 'South Jakarta, Indonesia',
            'val_status': 'Married',

            // Headers & Menus
            'menu_identity': 'Identity',
            'menu_position': 'Position',
            'menu_about': 'About Me',
            'menu_experience': 'Experience',
            'menu_education': 'Education',
            'menu_skills': 'Skills',
            'menu_achievement': 'Awards',
            'menu_contact': 'Contact',
            'menu_photo': 'Photo',

            'about_header': 'About Me',
            'exp_header': 'Work Experience',
            'edu_header': 'Education',
            'contact_header': 'Social Media & Contact',
            'photo_header': 'Professional Photo',

            // Experience
            'exp_date_1': '2023 - Present',
            'exp_role_1': 'Head of Media',
            'exp_desc_1': 'Responsible for planning, producing, and distributing digital content, managing media teams, and increasing institution engagement and branding.',
            'exp_date_2': '2017 - 2023',
            'exp_role_2': 'Producer & Production Manager',
            'exp_desc_2': 'Led TV & digital program production, crew management, and content quality control.',
            'exp_date_3': '2015 - 2017',
            'exp_role_3': 'Cameraman & Editor',
            'exp_desc_3': 'Camera operation and video editing for foundation content.',

            // Education
            'edu_major': 'Bachelor of Informatics Engineering',
            'edu_school': 'Pamulang University',
            'edu_date': '2022 - Present',

            // Skills
            'skill_cat_1': 'Multimedia Technical',
            'skill_cat_2': 'IT Technical',
            'skill_cat_3': 'Systems & Tools',

            'job_title_1': 'Head of Media & Multimedia Producer',
            'job_title_2': 'Design Expert & Web Developer',
            'job_tagline': 'Position branding combining creative leadership and technical competence.',
            'about_lead': 'Multimedia Professional with <span class="neon-cyan">10+ Years</span> experience in digital content production, media management, and visual branding.',
            'key_skills': 'Key Competencies:',
            'skill_point_1': '<span class="neon-purple">Media Management</span>: Leading media teams & content strategy.',
            'skill_point_2': '<span class="neon-green">YouTube Growth</span>: Managing channels up to <span class="highlight-text">Monetization</span> stage.',
            'skill_point_3': '<span class="neon-blue">Production</span>: Directing high-quality Television & Digital content.',
            'skill_point_4': '<span class="neon-pink">Technical Creative</span>: Design, Video Editing, & Web Development.',

            'ach_1': 'Grew YouTube channels from zero to Monetization.',
            'ach_2': 'Led media teams producing high-quality TV & Digital content.',
            'ach_3': 'Developed creative and technical production standards.',
            'btn_certificates': 'View Certificates & Awards',
            'btn_portfolio': 'Open Project Portfolio'
        }
    };

    window.setLanguage = function (lang) {
        // Update Text
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key]; // innerHTML to preserve spans
            }
        });

        // Update Buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.innerText.toLowerCase() === lang) {
                btn.classList.add('active');
            }
        });

        // Update Summary HTML stored variable if we are in initial state
        const defaultMsg = document.querySelector('.default-message');
        if (defaultMsg) {
            summaryHTML = defaultMsg.innerHTML;
        }
    };
});
