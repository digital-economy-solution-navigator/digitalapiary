// State Management
const state = {
    language: 'en',
    currentView: 'home',
    uploadedImage: null,
    isAnalyzing: false,
    analysisResult: null,
    userProfile: null,
    mobileMenuOpen: false
};

// Translations
const translations = {
    en: {
        title: "Digital Apiary",
        subtitle: "AI-Powered Support for Egyptian Beekeepers",
        tagline: "TIGARA Project - UNIDO & EU Partnership",
        nav: {
            home: "Home",
            analyze: "Hive Analysis",
            knowledge: "Knowledge Base",
            profile: "Profile"
        },
        home: {
            welcome: "Welcome to Digital Apiary",
            description: "Your intelligent companion for modern beekeeping. Upload hive photos for AI-assisted health analysis, access expert knowledge, and connect with best practices.",
            features: [
                {
                    title: "AI Hive Analysis",
                    description: "Upload photos of your hives for instant health assessment and recommendations"
                },
                {
                    title: "Expert Knowledge",
                    description: "Access curated guidance on pest management, seasonal practices, and hive care"
                },
                {
                    title: "Community Learning",
                    description: "Share feedback and learn from collective beekeeping experience"
                }
            ],
            cta: "Get Started"
        },
        analysis: {
            title: "Hive Health Analysis",
            upload: "Upload Hive Photo",
            analyzing: "Analyzing your hive...",
            disclaimer: "Advisory outputs are for guidance only and not a substitute for professional diagnosis",
            uploadPrompt: "Take or upload a clear photo of your hive or brood frame",
            analyze: "Analyze Hive",
            newAnalysis: "New Analysis"
        },
        knowledge: {
            title: "Knowledge Library",
            categories: [
                {
                    name: "Hive Management",
                    topics: ["Queen bee care", "Brood inspection", "Hive ventilation", "Feeding practices"]
                },
                {
                    name: "Pest & Disease Control",
                    topics: ["Varroa mites", "Wax moths", "American foulbrood", "Nosema"]
                },
                {
                    name: "Seasonal Practices",
                    topics: ["Spring management", "Summer preparation", "Winter care", "Harvest timing"]
                }
            ]
        },
        profile: {
            title: "Beekeeper Profile",
            role: "Role",
            location: "Governorate",
            hives: "Number of Hives",
            roles: {
                small: "Small-scale Beekeeper",
                medium: "Medium-scale Beekeeper",
                coop: "Cooperative Member",
                extension: "Extension Agent"
            },
            save: "Save Profile",
            logout: "Logout"
        }
    },
    ar: {
        title: "المنحل الرقمي",
        subtitle: "دعم مدعوم بالذكاء الاصطناعي لمربي النحل المصريين",
        tagline: "مشروع TIGARA - شراكة اليونيدو والاتحاد الأوروبي",
        nav: {
            home: "الرئيسية",
            analyze: "تحليل الخلية",
            knowledge: "قاعدة المعرفة",
            profile: "الملف الشخصي"
        },
        home: {
            welcome: "مرحباً بك في المنحل الرقمي",
            description: "رفيقك الذكي لتربية النحل الحديثة. قم بتحميل صور الخلايا للحصول على تحليل صحي بمساعدة الذكاء الاصطناعي، والوصول إلى المعرفة المتخصصة، والتواصل مع أفضل الممارسات.",
            features: [
                {
                    title: "تحليل الخلية بالذكاء الاصطناعي",
                    description: "قم بتحميل صور خلاياك للحصول على تقييم فوري للصحة والتوصيات"
                },
                {
                    title: "المعرفة المتخصصة",
                    description: "الوصول إلى إرشادات منسقة حول إدارة الآفات والممارسات الموسمية ورعاية الخلايا"
                },
                {
                    title: "التعلم المجتمعي",
                    description: "شارك ملاحظاتك وتعلم من الخبرة الجماعية في تربية النحل"
                }
            ],
            cta: "ابدأ الآن"
        },
        analysis: {
            title: "تحليل صحة الخلية",
            upload: "تحميل صورة الخلية",
            analyzing: "جاري تحليل خليتك...",
            disclaimer: "النتائج الاستشارية هي للإرشاد فقط وليست بديلاً عن التشخيص المهني",
            uploadPrompt: "التقط أو حمّل صورة واضحة لخليتك أو إطار الحضنة",
            analyze: "تحليل الخلية",
            newAnalysis: "تحليل جديد"
        },
        knowledge: {
            title: "مكتبة المعرفة",
            categories: [
                {
                    name: "إدارة الخلية",
                    topics: ["رعاية ملكة النحل", "فحص الحضنة", "تهوية الخلية", "ممارسات التغذية"]
                },
                {
                    name: "مكافحة الآفات والأمراض",
                    topics: ["سوس الفاروا", "عث الشمع", "تعفن الحضنة الأمريكي", "النوزيما"]
                },
                {
                    name: "الممارسات الموسمية",
                    topics: ["إدارة الربيع", "تحضير الصيف", "العناية الشتوية", "توقيت الحصاد"]
                }
            ]
        },
        profile: {
            title: "ملف مربي النحل",
            role: "الدور",
            location: "المحافظة",
            hives: "عدد الخلايا",
            roles: {
                small: "مربي نحل صغير الحجم",
                medium: "مربي نحل متوسط الحجم",
                coop: "عضو تعاوني",
                extension: "وكيل إرشاد"
            },
            save: "حفظ الملف",
            logout: "تسجيل الخروج"
        }
    }
};

// Get current translation
function getTranslation() {
    return translations[state.language];
}

// DOM Elements
const elements = {
    // Header
    headerTitle: document.getElementById('headerTitle'),
    headerSubtitle: document.getElementById('headerSubtitle'),
    headerTagline: document.getElementById('headerTagline'),
    languageToggle: document.getElementById('languageToggle'),
    languageText: document.getElementById('languageText'),
    
    // Navigation
    navHome: document.getElementById('navHome'),
    navAnalyze: document.getElementById('navAnalyze'),
    navKnowledge: document.getElementById('navKnowledge'),
    navProfile: document.getElementById('navProfile'),
    navMobileCurrent: document.getElementById('navMobileCurrent'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileMenu: document.getElementById('mobileMenu'),
    
    // Views
    viewHome: document.getElementById('viewHome'),
    viewAnalyze: document.getElementById('viewAnalyze'),
    viewKnowledge: document.getElementById('viewKnowledge'),
    viewProfile: document.getElementById('viewProfile'),
    
    // Home
    homeWelcome: document.getElementById('homeWelcome'),
    homeDescription: document.getElementById('homeDescription'),
    featuresGrid: document.getElementById('featuresGrid'),
    homeCtaBtn: document.getElementById('homeCtaBtn'),
    homeCtaText: document.getElementById('homeCtaText'),
    
    // Analysis
    analysisTitle: document.getElementById('analysisTitle'),
    analysisDisclaimer: document.getElementById('analysisDisclaimer'),
    uploadArea: document.getElementById('uploadArea'),
    uploadTitle: document.getElementById('uploadTitle'),
    uploadPrompt: document.getElementById('uploadPrompt'),
    imageUpload: document.getElementById('imageUpload'),
    imagePreview: document.getElementById('imagePreview'),
    previewImage: document.getElementById('previewImage'),
    analyzeBtn: document.getElementById('analyzeBtn'),
    analyzeBtnText: document.getElementById('analyzeBtnText'),
    cancelBtn: document.getElementById('cancelBtn'),
    cancelBtnText: document.getElementById('cancelBtnText'),
    analyzingState: document.getElementById('analyzingState'),
    analyzingText: document.getElementById('analyzingText'),
    analysisResult: document.getElementById('analysisResult'),
    resultCard: document.getElementById('resultCard'),
    resultIcon: document.getElementById('resultIcon'),
    resultTitle: document.getElementById('resultTitle'),
    resultTimestamp: document.getElementById('resultTimestamp'),
    resultText: document.getElementById('resultText'),
    newAnalysisBtn: document.getElementById('newAnalysisBtn'),
    newAnalysisBtnText: document.getElementById('newAnalysisBtnText'),
    
    // Knowledge
    knowledgeTitle: document.getElementById('knowledgeTitle'),
    knowledgeGrid: document.getElementById('knowledgeGrid'),
    
    // Profile
    profileTitle: document.getElementById('profileTitle'),
    profileRoleLabel: document.getElementById('profileRoleLabel'),
    profileRole: document.getElementById('profileRole'),
    roleSmall: document.getElementById('roleSmall'),
    roleMedium: document.getElementById('roleMedium'),
    roleCoop: document.getElementById('roleCoop'),
    roleExtension: document.getElementById('roleExtension'),
    profileLocationLabel: document.getElementById('profileLocationLabel'),
    profileHivesLabel: document.getElementById('profileHivesLabel'),
    saveProfileBtn: document.getElementById('saveProfileBtn'),
    saveProfileBtnText: document.getElementById('saveProfileBtnText'),
    
    // Footer
    footerText: document.getElementById('footerText')
};

// Icon SVGs
const icons = {
    camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`,
    bookOpen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
    messageSquare: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
    checkCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
    alertCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`,
    chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>`
};

// Update UI with translations
function updateUI() {
    const t = getTranslation();
    const isRTL = state.language === 'ar';
    
    // Set RTL
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = state.language;
    
    // Header
    elements.headerTitle.textContent = t.title;
    elements.headerSubtitle.textContent = t.subtitle;
    elements.headerTagline.textContent = t.tagline;
    elements.languageText.textContent = state.language === 'en' ? 'عربي' : 'English';
    
    // Navigation
    elements.navHome.textContent = t.nav.home;
    elements.navAnalyze.textContent = t.nav.analyze;
    elements.navKnowledge.textContent = t.nav.knowledge;
    elements.navProfile.textContent = t.nav.profile;
    elements.navMobileCurrent.textContent = t.nav[state.currentView];
    
    // Footer
    elements.footerText.textContent = state.language === 'ar'
        ? '© 2025 اليونيدو - منظمة الأمم المتحدة للتنمية الصناعية | مشروع TIGARA بتمويل من الاتحاد الأوروبي'
        : '© 2025 UNIDO - United Nations Industrial Development Organization | TIGARA Project funded by the EU';
    
    // Update views
    renderHome();
    renderAnalysis();
    renderKnowledge();
    renderProfile();
}

// Render Home View
function renderHome() {
    const t = getTranslation();
    
    elements.homeWelcome.textContent = t.home.welcome;
    elements.homeDescription.textContent = t.home.description;
    elements.homeCtaText.textContent = t.home.cta;
    
    // Render features
    elements.featuresGrid.innerHTML = t.home.features.map((feature, idx) => {
        let iconSvg = '';
        if (idx === 0) iconSvg = icons.camera;
        else if (idx === 1) iconSvg = icons.bookOpen;
        else if (idx === 2) iconSvg = icons.messageSquare;
        
        return `
            <div class="feature-card" style="animation-delay: ${idx * 100}ms">
                <div class="feature-icon">${iconSvg}</div>
                <h3 class="feature-title">${feature.title}</h3>
                <p class="feature-description">${feature.description}</p>
            </div>
        `;
    }).join('');
}

// Render Analysis View
function renderAnalysis() {
    const t = getTranslation();
    
    elements.analysisTitle.textContent = t.analysis.title;
    elements.analysisDisclaimer.textContent = `⚠️ ${t.analysis.disclaimer}`;
    elements.uploadTitle.textContent = t.analysis.upload;
    elements.uploadPrompt.textContent = t.analysis.uploadPrompt;
    elements.analyzeBtnText.textContent = t.analysis.analyze;
    elements.analyzingText.textContent = t.analysis.analyzing;
    elements.newAnalysisBtnText.textContent = t.analysis.newAnalysis;
    elements.cancelBtnText.textContent = state.language === 'ar' ? 'إلغاء' : 'Cancel';
    
    // Update result title
    elements.resultTitle.textContent = state.language === 'ar' ? 'نتيجة التحليل' : 'Analysis Result';
    
    // Show/hide elements based on state
    if (!state.uploadedImage && !state.analysisResult) {
        elements.uploadArea.classList.remove('hidden');
        elements.imagePreview.classList.add('hidden');
        elements.analyzingState.classList.add('hidden');
        elements.analysisResult.classList.add('hidden');
    } else if (state.uploadedImage && !state.analysisResult && !state.isAnalyzing) {
        elements.uploadArea.classList.add('hidden');
        elements.imagePreview.classList.remove('hidden');
        elements.analyzingState.classList.add('hidden');
        elements.analysisResult.classList.add('hidden');
    } else if (state.isAnalyzing) {
        elements.uploadArea.classList.add('hidden');
        elements.imagePreview.classList.add('hidden');
        elements.analyzingState.classList.remove('hidden');
        elements.analysisResult.classList.add('hidden');
    } else if (state.analysisResult) {
        elements.uploadArea.classList.add('hidden');
        elements.imagePreview.classList.add('hidden');
        elements.analyzingState.classList.add('hidden');
        elements.analysisResult.classList.remove('hidden');
    }
}

// Render Knowledge View
function renderKnowledge() {
    const t = getTranslation();
    
    elements.knowledgeTitle.textContent = t.knowledge.title;
    
    elements.knowledgeGrid.innerHTML = t.knowledge.categories.map((category, idx) => {
        return `
            <div class="knowledge-card">
                <h3 class="knowledge-category-title">${category.name}</h3>
                <ul class="knowledge-topics">
                    ${category.topics.map(topic => `
                        <li class="knowledge-topic">
                            <svg class="knowledge-topic-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                            <span>${topic}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }).join('');
}

// Render Profile View
function renderProfile() {
    const t = getTranslation();
    
    elements.profileTitle.textContent = t.profile.title;
    elements.profileRoleLabel.textContent = t.profile.role;
    elements.profileLocationLabel.textContent = t.profile.location;
    elements.profileHivesLabel.textContent = t.profile.hives;
    elements.saveProfileBtnText.textContent = t.profile.save;
    
    elements.roleSmall.textContent = t.profile.roles.small;
    elements.roleMedium.textContent = t.profile.roles.medium;
    elements.roleCoop.textContent = t.profile.roles.coop;
    elements.roleExtension.textContent = t.profile.roles.extension;
}

// Switch View
function switchView(view) {
    state.currentView = view;
    state.mobileMenuOpen = false;
    
    // Hide all views
    elements.viewHome.classList.add('hidden');
    elements.viewAnalyze.classList.add('hidden');
    elements.viewKnowledge.classList.add('hidden');
    elements.viewProfile.classList.add('hidden');
    
    // Show selected view
    elements[`view${view.charAt(0).toUpperCase() + view.slice(1)}`].classList.remove('hidden');
    
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.view === view) {
            btn.classList.add('active');
        }
    });
    
    // Update mobile menu
    elements.mobileMenu.classList.remove('show');
    elements.navMobileCurrent.textContent = getTranslation().nav[view];
    
    // Re-render current view
    if (view === 'home') renderHome();
    else if (view === 'analyze') renderAnalysis();
    else if (view === 'knowledge') renderKnowledge();
    else if (view === 'profile') renderProfile();
}

// Toggle Language
function toggleLanguage() {
    state.language = state.language === 'en' ? 'ar' : 'en';
    updateUI();
}

// Handle Image Upload
function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            state.uploadedImage = e.target.result;
            elements.previewImage.src = state.uploadedImage;
            renderAnalysis();
        };
        reader.readAsDataURL(file);
    }
}

// Analyze Hive
async function analyzeHive(imageData) {
    state.isAnalyzing = true;
    state.analysisResult = null;
    renderAnalysis();
    
    try {
        const response = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "claude-sonnet-4-20250514",
                max_tokens: 1000,
                messages: [
                    {
                        role: "user",
                        content: [
                            {
                                type: "image",
                                source: {
                                    type: "base64",
                                    media_type: imageData.split(';')[0].split(':')[1],
                                    data: imageData.split(',')[1]
                                }
                            },
                            {
                                type: "text",
                                text: "You are an AI assistant for beekeepers in Egypt. Analyze this hive or brood frame image and provide: 1) Overall health status (Healthy/Monitor/Concern), 2) Key observations (2-3 bullet points), 3) Recommended actions (2-3 bullet points). Be practical, supportive, and emphasize this is advisory guidance. Keep response concise and actionable for small-scale beekeepers."
                            }
                        ]
                    }
                ]
            })
        });
        
        const data = await response.json();
        const analysisText = data.content.find(c => c.type === 'text')?.text || 'Analysis complete. Please consult with local beekeeping experts for detailed guidance.';
        
        // Parse the response to extract structured data
        let status = 'Monitor';
        if (analysisText.toLowerCase().includes('healthy') && !analysisText.toLowerCase().includes('concern')) {
            status = 'Healthy';
        } else if (analysisText.toLowerCase().includes('concern') || analysisText.toLowerCase().includes('problem')) {
            status = 'Concern';
        }
        
        state.analysisResult = {
            status,
            fullAnalysis: analysisText,
            timestamp: new Date().toLocaleString(state.language === 'ar' ? 'ar-EG' : 'en-US')
        };
        
        // Update result display
        elements.resultCard.className = `result-card ${status.toLowerCase()}`;
        elements.resultIcon.className = `result-icon ${status.toLowerCase()}`;
        elements.resultIcon.innerHTML = status === 'Healthy' ? icons.checkCircle : icons.alertCircle;
        elements.resultTimestamp.textContent = state.analysisResult.timestamp;
        elements.resultText.textContent = state.analysisResult.fullAnalysis;
        
    } catch (error) {
        state.analysisResult = {
            status: 'Error',
            fullAnalysis: state.language === 'ar'
                ? 'حدث خطأ أثناء التحليل. يرجى المحاولة مرة أخرى.'
                : 'An error occurred during analysis. Please try again.',
            timestamp: new Date().toLocaleString(state.language === 'ar' ? 'ar-EG' : 'en-US')
        };
        
        elements.resultCard.className = 'result-card';
        elements.resultIcon.className = 'result-icon';
        elements.resultIcon.innerHTML = icons.alertCircle;
        elements.resultTimestamp.textContent = state.analysisResult.timestamp;
        elements.resultText.textContent = state.analysisResult.fullAnalysis;
    } finally {
        state.isAnalyzing = false;
        renderAnalysis();
    }
}

// New Analysis
function newAnalysis() {
    state.uploadedImage = null;
    state.analysisResult = null;
    elements.imageUpload.value = '';
    renderAnalysis();
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    if (state.mobileMenuOpen) {
        elements.mobileMenu.classList.add('show');
    } else {
        elements.mobileMenu.classList.remove('show');
    }
}

// Event Listeners
elements.languageToggle.addEventListener('click', toggleLanguage);

// Navigation buttons
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchView(btn.dataset.view));
});

// Mobile menu items
document.querySelectorAll('.mobile-menu-item').forEach(btn => {
    btn.addEventListener('click', () => switchView(btn.dataset.view));
});

elements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// Home CTA
elements.homeCtaBtn.addEventListener('click', () => switchView('analyze'));

// Image upload
elements.imageUpload.addEventListener('change', handleImageUpload);

// Analyze button
elements.analyzeBtn.addEventListener('click', () => analyzeHive(state.uploadedImage));

// Cancel button
elements.cancelBtn.addEventListener('click', newAnalysis);

// New analysis button
elements.newAnalysisBtn.addEventListener('click', newAnalysis);

// Save profile button
elements.saveProfileBtn.addEventListener('click', () => {
    // Profile save functionality can be added here
    alert(getTranslation().profile.save + ' - ' + (state.language === 'ar' ? 'تم الحفظ' : 'Saved'));
});

// Initialize
updateUI();
switchView('home');
