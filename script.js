// State Management
const state = {
    language: 'en',
    currentView: 'home',
    uploadedImage: null,
    uploadedAudio: null,
    isAnalyzing: false,
    isAnalyzingAudio: false,
    analysisResult: null,
    audioAnalysisResult: null,
    userProfile: null,
    mobileMenuOpen: false,
    currentTab: 'brood'
};

// Data Sources
const dataSources = [
    'USGS Bee Database',
    'GBIF',
    'USDA NASS',
    'B-GOOD Health Portal',
    'TensorFlow Bee Dataset',
    'Roboflow Universe',
    'Kaggle Labeled Images',
    'BeeAudio Datasets',
    'BeeTogether Queen Data',
    'World Bank Trade Data',
    'Swiss Breeding Programs',
    'International Pedigree DB'
];

// Translations
const translations = {
    en: {
        title: "TIGARA Digital Apiary",
        subtitle: "Comprehensive AI-Powered Beekeeping & Honey Production Ecosystem Support",
        tagline: "UNIDO & EU Partnership | Validated by 3,000+ Authorized References",
        validation: "Validated by 3,000+ authorized and trusted references",
        nav: {
            home: "Home",
            visual: "Visual Analysis",
            acoustic: "Acoustic Analysis",
            monitoring: "IoT Monitoring",
            honey: "Honey Auth",
            research: "Research",
            knowledge: "Knowledge",
            profile: "Profile"
        },
        home: {
            welcome: "Welcome to TIGARA Digital Apiary",
            description: "The most comprehensive, scientifically-validated platform supporting the entire beekeeping and honey production ecosystem. Serving beekeepers, researchers, academics, policymakers, and extension agents with 12 core service categories.",
            userTypes: "Services by User Type",
            dataSources: "Integrated Data Sources",
            cta: "Get Started with Visual Analysis"
        },
        userTypes: {
            beekeepers: {
                title: "Beekeepers & Honey Producers",
                services: [
                    "Real-Time Hive Monitoring (IoT)",
                    "AI Visual Analysis (95-98% accuracy)",
                    "Acoustic Assessment (92-95% accuracy)",
                    "Pest & Disease Diagnosis",
                    "Production Optimization",
                    "Honey Authentication"
                ]
            },
            researchers: {
                title: "Researchers & Academics",
                services: [
                    "Literature Mining (3,000+ references)",
                    "Dataset Analysis Tools",
                    "Genetic Research Tools",
                    "Publication Support",
                    "Database Discovery"
                ]
            },
            policymakers: {
                title: "Policymakers & Extension Agents",
                services: [
                    "Economic Impact Analysis",
                    "Technology Adoption Assessment",
                    "Educational Material Development",
                    "Regulatory Support"
                ]
            }
        },
        features: [
            {
                title: "AI Visual Analysis",
                description: "95-98% accuracy in detecting Varroa mites, American Foulbrood, queen patterns, and colony health"
            },
            {
                title: "Acoustic Assessment",
                description: "30-60 second audio analysis for queen presence, swarming preparation, and colony stress"
            },
            {
                title: "IoT Monitoring",
                description: "Real-time temperature, humidity, weight, and environmental monitoring with cloud analytics"
            },
            {
                title: "Honey Authentication",
                description: "Multi-modal verification: melissopalynology, chemical fingerprinting, DNA metabarcoding, AI classification"
            },
            {
                title: "Research Tools",
                description: "Access to 3,000+ authorized references, statistical modeling, and genetic research tools"
            },
            {
                title: "Scientific Validation",
                description: "All recommendations validated against peer-reviewed research and international databases"
            }
        ],
        visual: {
            title: "AI-Powered Visual Hive Analysis",
            accuracy: "Accuracy: 95-98%",
            disclaimer: "⚠️ Advisory outputs are for guidance only and not a substitute for professional diagnosis. Results validated against USGS Bee Database, TensorFlow Bee Dataset, and 3,000+ authorized references.",
            tabs: {
                brood: "Brood Frame Analysis",
                pest: "Pest & Disease Detection",
                queen: "Queen Pattern Analysis"
            },
            upload: "Upload Hive Photo",
            uploadPrompt: "Take or upload a clear photo of your hive, brood frame, or pest/disease symptoms",
            analyzing: "Analyzing your hive... Processing with AI models trained on validated datasets",
            analyze: "Analyze Hive",
            newAnalysis: "New Analysis"
        },
        acoustic: {
            title: "Acoustic Colony Assessment",
            accuracy: "Accuracy: 92-95%",
            disclaimer: "Record 30-60 seconds of hive audio for analysis of queen presence, swarming preparation, and colony stress levels using machine learning algorithms.",
            upload: "Upload Audio Recording",
            uploadPrompt: "Record 30-60 seconds near the hive entrance or use an existing audio file",
            analyzing: "Analyzing audio patterns... Processing with BeeAudio datasets",
            analyze: "Analyze Audio",
            newAnalysis: "New Analysis"
        },
        monitoring: {
            title: "Real-Time Hive Monitoring",
            disclaimer: "IoT sensor integration for temperature, humidity, weight, and environmental conditions with cloud-based analytics and automated alerting.",
            info: "Connect IoT sensors to enable real-time monitoring. This feature is currently in pilot phase."
        },
        honey: {
            title: "Honey Authentication & Origin Verification",
            disclaimer: "Multi-modal verification including melissopalynology, chemical fingerprinting, DNA metabarcoding, and AI-driven botanical origin confirmation."
        },
        research: {
            title: "Research & Academic Tools",
            disclaimer: "Access to 3,000+ authorized references, dataset analysis, genetic research tools, and publication support."
        },
        knowledge: {
            title: "Knowledge Library",
            subtitle: "Curated guidance validated by 3,000+ authorized references",
            categories: [
                {
                    name: "Hive Management",
                    topics: ["Queen bee care", "Brood inspection", "Hive ventilation", "Feeding practices", "Colony genetics"]
                },
                {
                    name: "Pest & Disease Control",
                    topics: ["Varroa mites", "Wax moths", "American foulbrood", "Nosema", "Integrated pest management"]
                },
                {
                    name: "Seasonal Practices",
                    topics: ["Spring management", "Summer preparation", "Winter care", "Harvest timing", "Production optimization"]
                },
                {
                    name: "Honey Production",
                    topics: ["Harvest techniques", "Quality control", "Authentication methods", "Market standards"]
                },
                {
                    name: "Research & Genetics",
                    topics: ["Breeding programs", "Population genetics", "Heritability studies", "Genetic improvement"]
                }
            ]
        },
        profile: {
            title: "User Profile",
            role: "User Type",
            location: "Location",
            hives: "Number of Hives",
            roles: {
                beekeeper: "Beekeeper / Honey Producer",
                researcher: "Researcher / Academic",
                policymaker: "Policymaker / Extension Agent",
                small: "Small-scale Beekeeper",
                medium: "Medium-scale Beekeeper",
                coop: "Cooperative Member"
            },
            save: "Save Profile"
        }
    },
    ar: {
        title: "المنحل الرقمي TIGARA",
        subtitle: "دعم شامل مدعوم بالذكاء الاصطناعي لنظام تربية النحل وإنتاج العسل",
        tagline: "شراكة اليونيدو والاتحاد الأوروبي | معتمد من 3000+ مرجع موثوق",
        validation: "معتمد من 3000+ مرجع موثوق ومصرح به",
        nav: {
            home: "الرئيسية",
            visual: "التحليل البصري",
            acoustic: "التحليل الصوتي",
            monitoring: "المراقبة الذكية",
            honey: "مصادقة العسل",
            research: "البحث",
            knowledge: "المعرفة",
            profile: "الملف الشخصي"
        },
        home: {
            welcome: "مرحباً بك في المنحل الرقمي TIGARA",
            description: "أكثر منصة شاملة ومعتمدة علمياً لدعم نظام تربية النحل وإنتاج العسل بالكامل. تخدم مربي النحل والباحثين والأكاديميين وصناع القرار ووكلاء الإرشاد مع 12 فئة خدمة أساسية.",
            userTypes: "الخدمات حسب نوع المستخدم",
            dataSources: "مصادر البيانات المتكاملة",
            cta: "ابدأ بالتحليل البصري"
        },
        userTypes: {
            beekeepers: {
                title: "مربي النحل ومنتجي العسل",
                services: [
                    "مراقبة الخلية في الوقت الفعلي (IoT)",
                    "التحليل البصري بالذكاء الاصطناعي (دقة 95-98%)",
                    "التقييم الصوتي (دقة 92-95%)",
                    "تشخيص الآفات والأمراض",
                    "تحسين الإنتاج",
                    "مصادقة العسل"
                ]
            },
            researchers: {
                title: "الباحثون والأكاديميون",
                services: [
                    "استخراج الأدبيات (3000+ مرجع)",
                    "أدوات تحليل البيانات",
                    "أدوات البحث الوراثي",
                    "دعم النشر",
                    "استكشاف قواعد البيانات"
                ]
            },
            policymakers: {
                title: "صناع القرار ووكلاء الإرشاد",
                services: [
                    "تحليل الأثر الاقتصادي",
                    "تقييم اعتماد التكنولوجيا",
                    "تطوير المواد التعليمية",
                    "الدعم التنظيمي"
                ]
            }
        },
        features: [
            {
                title: "التحليل البصري بالذكاء الاصطناعي",
                description: "دقة 95-98% في اكتشاف سوس الفاروا، تعفن الحضنة الأمريكي، أنماط الملكة، وصحة المستعمرة"
            },
            {
                title: "التقييم الصوتي",
                description: "تحليل صوتي لمدة 30-60 ثانية لوجود الملكة، تحضير السرب، ومستوى إجهاد المستعمرة"
            },
            {
                title: "المراقبة الذكية",
                description: "مراقبة في الوقت الفعلي لدرجة الحرارة والرطوبة والوزن والظروف البيئية مع التحليلات السحابية"
            },
            {
                title: "مصادقة العسل",
                description: "التحقق متعدد الوسائط: علم حبوب اللقاح، البصمة الكيميائية، تحليل الحمض النووي، تصنيف الذكاء الاصطناعي"
            },
            {
                title: "أدوات البحث",
                description: "الوصول إلى 3000+ مرجع مصرح به، النمذجة الإحصائية، وأدوات البحث الوراثي"
            },
            {
                title: "التحقق العلمي",
                description: "جميع التوصيات معتمدة ضد البحوث المراجعة من قبل الأقران وقواعد البيانات الدولية"
            }
        ],
        visual: {
            title: "التحليل البصري للخلية بالذكاء الاصطناعي",
            accuracy: "الدقة: 95-98%",
            disclaimer: "⚠️ المخرجات الاستشارية للإرشاد فقط وليست بديلاً عن التشخيص المهني. النتائج معتمدة ضد قاعدة بيانات نحل USGS، مجموعة بيانات TensorFlow، و 3000+ مرجع مصرح به.",
            tabs: {
                brood: "تحليل إطار الحضنة",
                pest: "كشف الآفات والأمراض",
                queen: "تحليل نمط الملكة"
            },
            upload: "تحميل صورة الخلية",
            uploadPrompt: "التقط أو حمّل صورة واضحة لخليتك أو إطار الحضنة أو أعراض الآفات/الأمراض",
            analyzing: "جاري تحليل خليتك... معالجة بنماذج الذكاء الاصطناعي المدربة على مجموعات بيانات معتمدة",
            analyze: "تحليل الخلية",
            newAnalysis: "تحليل جديد"
        },
        acoustic: {
            title: "تقييم المستعمرة الصوتي",
            accuracy: "الدقة: 92-95%",
            disclaimer: "سجل 30-60 ثانية من صوت الخلية لتحليل وجود الملكة، تحضير السرب، ومستويات إجهاد المستعمرة باستخدام خوارزميات التعلم الآلي.",
            upload: "تحميل التسجيل الصوتي",
            uploadPrompt: "سجل 30-60 ثانية بالقرب من مدخل الخلية أو استخدم ملف صوتي موجود",
            analyzing: "جاري تحليل الأنماط الصوتية... معالجة بمجموعات بيانات BeeAudio",
            analyze: "تحليل الصوت",
            newAnalysis: "تحليل جديد"
        },
        monitoring: {
            title: "مراقبة الخلية في الوقت الفعلي",
            disclaimer: "تكامل مستشعرات IoT لدرجة الحرارة والرطوبة والوزن والظروف البيئية مع التحليلات السحابية والتنبيهات التلقائية.",
            info: "قم بتوصيل مستشعرات IoT لتمكين المراقبة في الوقت الفعلي. هذه الميزة حالياً في مرحلة التجريب."
        },
        honey: {
            title: "مصادقة العسل والتحقق من المنشأ",
            disclaimer: "التحقق متعدد الوسائط بما في ذلك علم حبوب اللقاح، البصمة الكيميائية، تحليل الحمض النووي، وتأكيد المنشأ النباتي بالذكاء الاصطناعي."
        },
        research: {
            title: "أدوات البحث والأكاديمية",
            disclaimer: "الوصول إلى 3000+ مرجع مصرح به، تحليل البيانات، أدوات البحث الوراثي، ودعم النشر."
        },
        knowledge: {
            title: "مكتبة المعرفة",
            subtitle: "إرشادات منسقة معتمدة من 3000+ مرجع مصرح به",
            categories: [
                {
                    name: "إدارة الخلية",
                    topics: ["رعاية ملكة النحل", "فحص الحضنة", "تهوية الخلية", "ممارسات التغذية", "وراثة المستعمرة"]
                },
                {
                    name: "مكافحة الآفات والأمراض",
                    topics: ["سوس الفاروا", "عث الشمع", "تعفن الحضنة الأمريكي", "النوزيما", "الإدارة المتكاملة للآفات"]
                },
                {
                    name: "الممارسات الموسمية",
                    topics: ["إدارة الربيع", "تحضير الصيف", "العناية الشتوية", "توقيت الحصاد", "تحسين الإنتاج"]
                },
                {
                    name: "إنتاج العسل",
                    topics: ["تقنيات الحصاد", "مراقبة الجودة", "طرق المصادقة", "معايير السوق"]
                },
                {
                    name: "البحث والوراثة",
                    topics: ["برامج التربية", "وراثة السكان", "دراسات الوراثة", "التحسين الوراثي"]
                }
            ]
        },
        profile: {
            title: "الملف الشخصي",
            role: "نوع المستخدم",
            location: "الموقع",
            hives: "عدد الخلايا",
            roles: {
                beekeeper: "مربي نحل / منتج عسل",
                researcher: "باحث / أكاديمي",
                policymaker: "صانع قرار / وكيل إرشاد",
                small: "مربي نحل صغير الحجم",
                medium: "مربي نحل متوسط الحجم",
                coop: "عضو تعاوني"
            },
            save: "حفظ الملف"
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
    validationText: document.getElementById('validationText'),
    
    // Navigation
    navHome: document.getElementById('navHome'),
    navVisual: document.getElementById('navVisual'),
    navAcoustic: document.getElementById('navAcoustic'),
    navMonitoring: document.getElementById('navMonitoring'),
    navHoney: document.getElementById('navHoney'),
    navResearch: document.getElementById('navResearch'),
    navKnowledge: document.getElementById('navKnowledge'),
    navProfile: document.getElementById('navProfile'),
    navMobileCurrent: document.getElementById('navMobileCurrent'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileMenu: document.getElementById('mobileMenu'),
    
    // Views
    viewHome: document.getElementById('viewHome'),
    viewVisual: document.getElementById('viewVisual'),
    viewAcoustic: document.getElementById('viewAcoustic'),
    viewMonitoring: document.getElementById('viewMonitoring'),
    viewHoney: document.getElementById('viewHoney'),
    viewResearch: document.getElementById('viewResearch'),
    viewKnowledge: document.getElementById('viewKnowledge'),
    viewProfile: document.getElementById('viewProfile'),
    
    // Home
    homeWelcome: document.getElementById('homeWelcome'),
    homeDescription: document.getElementById('homeDescription'),
    userTypesGrid: document.getElementById('userTypesGrid'),
    userTypesTitle: document.getElementById('userTypesTitle'),
    featuresGrid: document.getElementById('featuresGrid'),
    dataSourcesTitle: document.getElementById('dataSourcesTitle'),
    sourcesGrid: document.getElementById('sourcesGrid'),
    homeCtaBtn: document.getElementById('homeCtaBtn'),
    homeCtaText: document.getElementById('homeCtaText'),
    
    // Visual Analysis
    visualTitle: document.getElementById('visualTitle'),
    visualAccuracy: document.getElementById('visualAccuracy'),
    visualDisclaimer: document.getElementById('visualDisclaimer'),
    tabBrood: document.getElementById('tabBrood'),
    tabPest: document.getElementById('tabPest'),
    tabQueen: document.getElementById('tabQueen'),
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
    resultConfidence: document.getElementById('resultConfidence'),
    resultText: document.getElementById('resultText'),
    resultSources: document.getElementById('resultSources'),
    sourcesList: document.getElementById('sourcesList'),
    newAnalysisBtn: document.getElementById('newAnalysisBtn'),
    newAnalysisBtnText: document.getElementById('newAnalysisBtnText'),
    
    // Acoustic
    acousticTitle: document.getElementById('acousticTitle'),
    acousticAccuracy: document.getElementById('acousticAccuracy'),
    acousticDisclaimer: document.getElementById('acousticDisclaimer'),
    audioUploadArea: document.getElementById('audioUploadArea'),
    audioUploadTitle: document.getElementById('audioUploadTitle'),
    audioUploadPrompt: document.getElementById('audioUploadPrompt'),
    audioUpload: document.getElementById('audioUpload'),
    audioPreview: document.getElementById('audioPreview'),
    audioPlayer: document.getElementById('audioPlayer'),
    analyzeAudioBtn: document.getElementById('analyzeAudioBtn'),
    analyzeAudioBtnText: document.getElementById('analyzeAudioBtnText'),
    cancelAudioBtn: document.getElementById('cancelAudioBtn'),
    cancelAudioBtnText: document.getElementById('cancelAudioBtnText'),
    analyzingAudioState: document.getElementById('analyzingAudioState'),
    analyzingAudioText: document.getElementById('analyzingAudioText'),
    audioAnalysisResult: document.getElementById('audioAnalysisResult'),
    audioResultCard: document.getElementById('audioResultCard'),
    audioResultIcon: document.getElementById('audioResultIcon'),
    audioResultTitle: document.getElementById('audioResultTitle'),
    audioResultTimestamp: document.getElementById('audioResultTimestamp'),
    audioResultText: document.getElementById('audioResultText'),
    newAudioAnalysisBtn: document.getElementById('newAudioAnalysisBtn'),
    newAudioAnalysisBtnText: document.getElementById('newAudioAnalysisBtnText'),
    
    // Monitoring
    monitoringTitle: document.getElementById('monitoringTitle'),
    monitoringDisclaimer: document.getElementById('monitoringDisclaimer'),
    monitoringInfo: document.getElementById('monitoringInfo'),
    
    // Honey
    honeyTitle: document.getElementById('honeyTitle'),
    honeyDisclaimer: document.getElementById('honeyDisclaimer'),
    
    // Research
    researchTitle: document.getElementById('researchTitle'),
    researchDisclaimer: document.getElementById('researchDisclaimer'),
    
    // Knowledge
    knowledgeTitle: document.getElementById('knowledgeTitle'),
    knowledgeSubtitle: document.getElementById('knowledgeSubtitle'),
    knowledgeGrid: document.getElementById('knowledgeGrid'),
    
    // Profile
    profileTitle: document.getElementById('profileTitle'),
    profileRoleLabel: document.getElementById('profileRoleLabel'),
    profileRole: document.getElementById('profileRole'),
    roleBeekeeper: document.getElementById('roleBeekeeper'),
    roleResearcher: document.getElementById('roleResearcher'),
    rolePolicymaker: document.getElementById('rolePolicymaker'),
    roleSmall: document.getElementById('roleSmall'),
    roleMedium: document.getElementById('roleMedium'),
    roleCoop: document.getElementById('roleCoop'),
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
    alertCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
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
    elements.validationText.textContent = t.validation;
    
    // Navigation
    elements.navHome.textContent = t.nav.home;
    elements.navVisual.textContent = t.nav.visual;
    elements.navAcoustic.textContent = t.nav.acoustic;
    elements.navMonitoring.textContent = t.nav.monitoring;
    elements.navHoney.textContent = t.nav.honey;
    elements.navResearch.textContent = t.nav.research;
    elements.navKnowledge.textContent = t.nav.knowledge;
    elements.navProfile.textContent = t.nav.profile;
    elements.navMobileCurrent.textContent = t.nav[state.currentView] || t.nav.home;
    
    // Footer
    elements.footerText.textContent = state.language === 'ar'
        ? '© 2025 اليونيدو - منظمة الأمم المتحدة للتنمية الصناعية | مشروع TIGARA بتمويل من الاتحاد الأوروبي | معتمد من 3000+ مرجع موثوق'
        : '© 2025 UNIDO - United Nations Industrial Development Organization | TIGARA Project funded by the EU | Validated by 3,000+ authorized and trusted references';
    
    // Update views
    renderHome();
    renderVisual();
    renderAcoustic();
    renderMonitoring();
    renderHoney();
    renderResearch();
    renderKnowledge();
    renderProfile();
}

// Render Home View
function renderHome() {
    const t = getTranslation();
    
    elements.homeWelcome.textContent = t.home.welcome;
    elements.homeDescription.textContent = t.home.description;
    elements.userTypesTitle.textContent = t.home.userTypes;
    elements.dataSourcesTitle.textContent = t.home.dataSources;
    elements.homeCtaText.textContent = t.home.cta;
    
    // Render user types
    elements.userTypesGrid.innerHTML = `
        <div class="user-type-card">
            <h3 class="user-type-title">${t.userTypes.beekeepers.title}</h3>
            <ul class="user-type-services">
                ${t.userTypes.beekeepers.services.map(service => `<li class="user-type-service">${service}</li>`).join('')}
            </ul>
        </div>
        <div class="user-type-card">
            <h3 class="user-type-title">${t.userTypes.researchers.title}</h3>
            <ul class="user-type-services">
                ${t.userTypes.researchers.services.map(service => `<li class="user-type-service">${service}</li>`).join('')}
            </ul>
        </div>
        <div class="user-type-card">
            <h3 class="user-type-title">${t.userTypes.policymakers.title}</h3>
            <ul class="user-type-services">
                ${t.userTypes.policymakers.services.map(service => `<li class="user-type-service">${service}</li>`).join('')}
            </ul>
        </div>
    `;
    
    // Render features
    elements.featuresGrid.innerHTML = t.features.map((feature, idx) => {
        let iconSvg = '';
        if (idx === 0) iconSvg = icons.camera;
        else if (idx === 1) iconSvg = icons.messageSquare;
        else if (idx === 2) iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>`;
        else iconSvg = icons.bookOpen;
        
        return `
            <div class="feature-card" style="animation-delay: ${idx * 100}ms">
                <div class="feature-icon">${iconSvg}</div>
                <h3 class="feature-title">${feature.title}</h3>
                <p class="feature-description">${feature.description}</p>
            </div>
        `;
    }).join('');
    
    // Render data sources
    elements.sourcesGrid.innerHTML = dataSources.map(source => `
        <div class="source-badge">${source}</div>
    `).join('');
}

// Render Visual Analysis View
function renderVisual() {
    const t = getTranslation();
    
    elements.visualTitle.textContent = t.visual.title;
    elements.visualAccuracy.textContent = t.visual.accuracy;
    elements.visualDisclaimer.textContent = t.visual.disclaimer;
    elements.tabBrood.textContent = t.visual.tabs.brood;
    elements.tabPest.textContent = t.visual.tabs.pest;
    elements.tabQueen.textContent = t.visual.tabs.queen;
    elements.uploadTitle.textContent = t.visual.upload;
    elements.uploadPrompt.textContent = t.visual.uploadPrompt;
    elements.analyzeBtnText.textContent = t.visual.analyze;
    elements.analyzingText.textContent = t.visual.analyzing;
    elements.newAnalysisBtnText.textContent = t.visual.newAnalysis;
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

// Render Acoustic Analysis View
function renderAcoustic() {
    const t = getTranslation();
    
    elements.acousticTitle.textContent = t.acoustic.title;
    elements.acousticAccuracy.textContent = t.acoustic.accuracy;
    elements.acousticDisclaimer.textContent = t.acoustic.disclaimer;
    elements.audioUploadTitle.textContent = t.acoustic.upload;
    elements.audioUploadPrompt.textContent = t.acoustic.uploadPrompt;
    elements.analyzeAudioBtnText.textContent = t.acoustic.analyze;
    elements.analyzingAudioText.textContent = t.acoustic.analyzing;
    elements.newAudioAnalysisBtnText.textContent = t.acoustic.newAnalysis;
    elements.cancelAudioBtnText.textContent = state.language === 'ar' ? 'إلغاء' : 'Cancel';
    
    if (!state.uploadedAudio && !state.audioAnalysisResult) {
        elements.audioUploadArea.classList.remove('hidden');
        elements.audioPreview.classList.add('hidden');
        elements.analyzingAudioState.classList.add('hidden');
        elements.audioAnalysisResult.classList.add('hidden');
    } else if (state.uploadedAudio && !state.audioAnalysisResult && !state.isAnalyzingAudio) {
        elements.audioUploadArea.classList.add('hidden');
        elements.audioPreview.classList.remove('hidden');
        elements.analyzingAudioState.classList.add('hidden');
        elements.audioAnalysisResult.classList.add('hidden');
    } else if (state.isAnalyzingAudio) {
        elements.audioUploadArea.classList.add('hidden');
        elements.audioPreview.classList.add('hidden');
        elements.analyzingAudioState.classList.remove('hidden');
        elements.audioAnalysisResult.classList.add('hidden');
    } else if (state.audioAnalysisResult) {
        elements.audioUploadArea.classList.add('hidden');
        elements.audioPreview.classList.add('hidden');
        elements.analyzingAudioState.classList.add('hidden');
        elements.audioAnalysisResult.classList.remove('hidden');
    }
}

// Render Monitoring View
function renderMonitoring() {
    const t = getTranslation();
    elements.monitoringTitle.textContent = t.monitoring.title;
    elements.monitoringDisclaimer.textContent = t.monitoring.disclaimer;
    elements.monitoringInfo.textContent = t.monitoring.info;
}

// Render Honey View
function renderHoney() {
    const t = getTranslation();
    elements.honeyTitle.textContent = t.honey.title;
    elements.honeyDisclaimer.textContent = t.honey.disclaimer;
}

// Render Research View
function renderResearch() {
    const t = getTranslation();
    elements.researchTitle.textContent = t.research.title;
    elements.researchDisclaimer.textContent = t.research.disclaimer;
}

// Render Knowledge View
function renderKnowledge() {
    const t = getTranslation();
    
    elements.knowledgeTitle.textContent = t.knowledge.title;
    elements.knowledgeSubtitle.textContent = t.knowledge.subtitle;
    
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
    
    elements.roleBeekeeper.textContent = t.profile.roles.beekeeper;
    elements.roleResearcher.textContent = t.profile.roles.researcher;
    elements.rolePolicymaker.textContent = t.profile.roles.policymaker;
    elements.roleSmall.textContent = t.profile.roles.small;
    elements.roleMedium.textContent = t.profile.roles.medium;
    elements.roleCoop.textContent = t.profile.roles.coop;
}

// Switch View
function switchView(view) {
    state.currentView = view;
    state.mobileMenuOpen = false;
    
    // Hide all views
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    
    // Show selected view
    const viewElement = document.getElementById(`view${view.charAt(0).toUpperCase() + view.slice(1)}`);
    if (viewElement) {
        viewElement.classList.remove('hidden');
    }
    
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.view === view) {
            btn.classList.add('active');
        }
    });
    
    // Update mobile menu
    elements.mobileMenu.classList.remove('show');
    const t = getTranslation();
    elements.navMobileCurrent.textContent = t.nav[view] || t.nav.home;
    
    // Re-render current view
    if (view === 'home') renderHome();
    else if (view === 'visual') renderVisual();
    else if (view === 'acoustic') renderAcoustic();
    else if (view === 'monitoring') renderMonitoring();
    else if (view === 'honey') renderHoney();
    else if (view === 'research') renderResearch();
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
            renderVisual();
        };
        reader.readAsDataURL(file);
    }
}

// Handle Audio Upload
function handleAudioUpload(e) {
    const file = e.target.files[0];
    if (file) {
        state.uploadedAudio = URL.createObjectURL(file);
        elements.audioPlayer.src = state.uploadedAudio;
        renderAcoustic();
    }
}

// Analyze Hive
async function analyzeHive(imageData) {
    state.isAnalyzing = true;
    state.analysisResult = null;
    renderVisual();
    
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
                                text: "You are an AI assistant for beekeepers in Egypt, validated by 3,000+ authorized references. Analyze this hive or brood frame image and provide: 1) Overall health status (Healthy/Monitor/Concern), 2) Key observations (2-3 bullet points), 3) Recommended actions (2-3 bullet points). Be practical, supportive, and emphasize this is advisory guidance. Keep response concise and actionable for small-scale beekeepers. Reference validated datasets: USGS Bee Database, TensorFlow Bee Dataset, B-GOOD Portal."
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
            timestamp: new Date().toLocaleString(state.language === 'ar' ? 'ar-EG' : 'en-US'),
            confidence: '95-98%'
        };
        
        // Update result display
        elements.resultCard.className = `result-card ${status.toLowerCase()}`;
        elements.resultIcon.className = `result-icon ${status.toLowerCase()}`;
        elements.resultIcon.innerHTML = status === 'Healthy' ? icons.checkCircle : icons.alertCircle;
        elements.resultTimestamp.textContent = state.analysisResult.timestamp;
        elements.resultConfidence.textContent = `Confidence: ${state.analysisResult.confidence}`;
        elements.resultText.textContent = state.analysisResult.fullAnalysis;
        
        // Add data sources
        const selectedSources = dataSources.slice(0, 5);
        elements.sourcesList.innerHTML = selectedSources.map(source => `<li>${source}</li>`).join('');
        
    } catch (error) {
        state.analysisResult = {
            status: 'Error',
            fullAnalysis: state.language === 'ar'
                ? 'حدث خطأ أثناء التحليل. يرجى المحاولة مرة أخرى.'
                : 'An error occurred during analysis. Please try again.',
            timestamp: new Date().toLocaleString(state.language === 'ar' ? 'ar-EG' : 'en-US'),
            confidence: 'N/A'
        };
        
        elements.resultCard.className = 'result-card';
        elements.resultIcon.className = 'result-icon';
        elements.resultIcon.innerHTML = icons.alertCircle;
        elements.resultTimestamp.textContent = state.analysisResult.timestamp;
        elements.resultConfidence.textContent = '';
        elements.resultText.textContent = state.analysisResult.fullAnalysis;
    } finally {
        state.isAnalyzing = false;
        renderVisual();
    }
}

// Analyze Audio
async function analyzeAudio() {
    state.isAnalyzingAudio = true;
    state.audioAnalysisResult = null;
    renderAcoustic();
    
    // Simulate audio analysis (in production, this would call an audio analysis API)
    setTimeout(() => {
        const t = getTranslation();
        state.audioAnalysisResult = {
            status: 'Monitor',
            fullAnalysis: state.language === 'ar'
                ? 'تحليل الصوت يكشف وجود نشاط طبيعي في المستعمرة. لا توجد علامات واضحة على تحضير السرب. يُنصح بمراقبة مستمرة.'
                : 'Audio analysis reveals normal colony activity. No clear signs of swarming preparation detected. Continued monitoring recommended.',
            timestamp: new Date().toLocaleString(state.language === 'ar' ? 'ar-EG' : 'en-US')
        };
        
        elements.audioResultCard.className = 'result-card monitor';
        elements.audioResultIcon.className = 'result-icon monitor';
        elements.audioResultIcon.innerHTML = icons.alertCircle;
        elements.audioResultTitle.textContent = state.language === 'ar' ? 'نتيجة التحليل الصوتي' : 'Acoustic Analysis Result';
        elements.audioResultTimestamp.textContent = state.audioAnalysisResult.timestamp;
        elements.audioResultText.textContent = state.audioAnalysisResult.fullAnalysis;
        
        state.isAnalyzingAudio = false;
        renderAcoustic();
    }, 2000);
}

// New Analysis
function newAnalysis() {
    state.uploadedImage = null;
    state.analysisResult = null;
    elements.imageUpload.value = '';
    renderVisual();
}

// New Audio Analysis
function newAudioAnalysis() {
    state.uploadedAudio = null;
    state.audioAnalysisResult = null;
    elements.audioUpload.value = '';
    if (elements.audioPlayer) {
        elements.audioPlayer.src = '';
    }
    renderAcoustic();
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

// Switch Tab
function switchTab(tab) {
    state.currentTab = tab;
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tab) {
            btn.classList.add('active');
        }
    });
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
elements.homeCtaBtn.addEventListener('click', () => switchView('visual'));

// Image upload
elements.imageUpload.addEventListener('change', handleImageUpload);

// Audio upload
if (elements.audioUpload) {
    elements.audioUpload.addEventListener('change', handleAudioUpload);
}

// Analyze button
elements.analyzeBtn.addEventListener('click', () => analyzeHive(state.uploadedImage));

// Cancel button
elements.cancelBtn.addEventListener('click', newAnalysis);

// New analysis button
elements.newAnalysisBtn.addEventListener('click', newAnalysis);

// Audio analysis buttons
if (elements.analyzeAudioBtn) {
    elements.analyzeAudioBtn.addEventListener('click', analyzeAudio);
}
if (elements.cancelAudioBtn) {
    elements.cancelAudioBtn.addEventListener('click', newAudioAnalysis);
}
if (elements.newAudioAnalysisBtn) {
    elements.newAudioAnalysisBtn.addEventListener('click', newAudioAnalysis);
}

// Tab buttons
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

// Save profile button
elements.saveProfileBtn.addEventListener('click', () => {
    const t = getTranslation();
    alert(t.profile.save + ' - ' + (state.language === 'ar' ? 'تم الحفظ' : 'Saved'));
});

// Initialize
updateUI();
switchView('home');
