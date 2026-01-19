import React, { useState } from 'react';
import { Camera, BookOpen, MessageSquare, User, Globe, Upload, CheckCircle, AlertCircle, Loader, Menu, X, ChevronRight, Sparkles } from 'lucide-react';

const DigitalApiaryDemo = () => {
  const [language, setLanguage] = useState('en');
  const [currentView, setCurrentView] = useState('home');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const t = translations[language];

  const analyzeHive = async (imageData) => {
    setIsAnalyzing(true);
    setAnalysisResult(null);

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
      const lines = analysisText.split('\n').filter(line => line.trim());
      let status = 'Monitor';
      if (analysisText.toLowerCase().includes('healthy') && !analysisText.toLowerCase().includes('concern')) {
        status = 'Healthy';
      } else if (analysisText.toLowerCase().includes('concern') || analysisText.toLowerCase().includes('problem')) {
        status = 'Concern';
      }

      setAnalysisResult({
        status,
        fullAnalysis: analysisText,
        timestamp: new Date().toLocaleString(language === 'ar' ? 'ar-EG' : 'en-US')
      });
    } catch (error) {
      setAnalysisResult({
        status: 'Error',
        fullAnalysis: language === 'ar' 
          ? 'حدث خطأ أثناء التحليل. يرجى المحاولة مرة أخرى.'
          : 'An error occurred during analysis. Please try again.',
        timestamp: new Date().toLocaleString(language === 'ar' ? 'ar-EG' : 'en-US')
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderHome = () => (
    <div className="space-y-12 animate-fadeIn">
      <div className="text-center space-y-6 py-12">
        <div className="inline-block">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center transform rotate-45 shadow-2xl">
            <Sparkles className="w-12 h-12 text-white transform -rotate-45" />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-amber-950" style={{fontFamily: 'Georgia, serif'}}>
          {t.home.welcome}
        </h2>
        <p className="text-lg md:text-xl text-amber-800 max-w-2xl mx-auto leading-relaxed">
          {t.home.description}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {t.home.features.map((feature, idx) => (
          <div 
            key={idx}
            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-amber-200 hover:border-amber-400 hover:-translate-y-1"
            style={{animationDelay: `${idx * 100}ms`}}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              {idx === 0 && <Camera className="w-7 h-7 text-white" />}
              {idx === 1 && <BookOpen className="w-7 h-7 text-white" />}
              {idx === 2 && <MessageSquare className="w-7 h-7 text-white" />}
            </div>
            <h3 className="text-xl font-bold text-amber-950 mb-3">{feature.title}</h3>
            <p className="text-amber-700 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center pt-6">
        <button
          onClick={() => setCurrentView('analyze')}
          className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
        >
          {t.home.cta} <ChevronRight className="inline w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );

  const renderAnalysis = () => (
    <div className="space-y-8 animate-fadeIn">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-4" style={{fontFamily: 'Georgia, serif'}}>
          {t.analysis.title}
        </h2>
        <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 inline-block">
          ⚠️ {t.analysis.disclaimer}
        </p>
      </div>

      {!uploadedImage && !analysisResult && (
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 text-center border-2 border-dashed border-amber-300 hover:border-amber-500 transition-colors">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="imageUpload"
          />
          <label htmlFor="imageUpload" className="cursor-pointer">
            <Upload className="w-20 h-20 mx-auto mb-6 text-amber-500" />
            <p className="text-xl font-semibold text-amber-950 mb-2">{t.analysis.upload}</p>
            <p className="text-amber-700">{t.analysis.uploadPrompt}</p>
          </label>
        </div>
      )}

      {uploadedImage && !analysisResult && !isAnalyzing && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-4 shadow-xl">
            <img src={uploadedImage} alt="Uploaded hive" className="w-full rounded-xl" />
          </div>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => analyzeHive(uploadedImage)}
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all shadow-lg"
            >
              {t.analysis.analyze}
            </button>
            <button
              onClick={() => setUploadedImage(null)}
              className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-all"
            >
              {language === 'ar' ? 'إلغاء' : 'Cancel'}
            </button>
          </div>
        </div>
      )}

      {isAnalyzing && (
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 text-center">
          <Loader className="w-16 h-16 mx-auto mb-6 text-amber-500 animate-spin" />
          <p className="text-xl font-semibold text-amber-950">{t.analysis.analyzing}</p>
        </div>
      )}

      {analysisResult && (
        <div className="space-y-6 animate-fadeIn">
          <div className={`bg-white rounded-2xl p-8 shadow-xl border-l-8 ${
            analysisResult.status === 'Healthy' ? 'border-green-500' :
            analysisResult.status === 'Monitor' ? 'border-yellow-500' :
            analysisResult.status === 'Concern' ? 'border-red-500' : 'border-gray-500'
          }`}>
            <div className="flex items-start gap-4 mb-6">
              {analysisResult.status === 'Healthy' && <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />}
              {analysisResult.status === 'Monitor' && <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0" />}
              {analysisResult.status === 'Concern' && <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0" />}
              <div>
                <h3 className="text-2xl font-bold text-amber-950 mb-2">
                  {language === 'ar' ? 'نتيجة التحليل' : 'Analysis Result'}
                </h3>
                <p className="text-sm text-gray-600">{analysisResult.timestamp}</p>
              </div>
            </div>

            <div className="prose max-w-none">
              <div className="text-amber-900 leading-relaxed whitespace-pre-wrap">
                {analysisResult.fullAnalysis}
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => {
                setUploadedImage(null);
                setAnalysisResult(null);
              }}
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all shadow-lg"
            >
              {t.analysis.newAnalysis}
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const renderKnowledge = () => (
    <div className="space-y-8 animate-fadeIn">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-4" style={{fontFamily: 'Georgia, serif'}}>
          {t.knowledge.title}
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {t.knowledge.categories.map((category, idx) => (
          <div key={idx} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-amber-200 hover:border-amber-400">
            <h3 className="text-xl font-bold text-amber-950 mb-4 pb-3 border-b-2 border-amber-200">
              {category.name}
            </h3>
            <ul className="space-y-3">
              {category.topics.map((topic, topicIdx) => (
                <li key={topicIdx} className="flex items-start gap-3 text-amber-800 hover:text-amber-950 cursor-pointer transition-colors group">
                  <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="max-w-2xl mx-auto space-y-8 animate-fadeIn">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-4" style={{fontFamily: 'Georgia, serif'}}>
          {t.profile.title}
        </h2>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-amber-200">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-amber-950 mb-2">{t.profile.role}</label>
            <select className="w-full px-4 py-3 rounded-xl border-2 border-amber-200 focus:border-amber-500 focus:ring focus:ring-amber-200 transition-all">
              <option>{t.profile.roles.small}</option>
              <option>{t.profile.roles.medium}</option>
              <option>{t.profile.roles.coop}</option>
              <option>{t.profile.roles.extension}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-amber-950 mb-2">{t.profile.location}</label>
            <select className="w-full px-4 py-3 rounded-xl border-2 border-amber-200 focus:border-amber-500 focus:ring focus:ring-amber-200 transition-all">
              <option>Cairo</option>
              <option>Alexandria</option>
              <option>Giza</option>
              <option>Qalyubia</option>
              <option>Dakahlia</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-amber-950 mb-2">{t.profile.hives}</label>
            <input 
              type="number" 
              placeholder="10"
              className="w-full px-4 py-3 rounded-xl border-2 border-amber-200 focus:border-amber-500 focus:ring focus:ring-amber-200 transition-all"
            />
          </div>

          <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all shadow-lg">
            {t.profile.save}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50" style={{fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'}}>
      {/* Decorative honeycomb background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='%23d97706' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }} />

      {/* Header */}
      <header className="relative bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold" style={{fontFamily: 'Georgia, serif'}}>
                {t.title}
              </h1>
              <p className="text-amber-100 text-sm md:text-base mt-1">{t.subtitle}</p>
              <p className="text-amber-200 text-xs mt-1">{t.tagline}</p>
            </div>
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-all"
            >
              <Globe className="w-5 h-5" />
              <span className="hidden md:inline">{language === 'en' ? 'عربي' : 'English'}</span>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white/10 backdrop-blur-sm border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="hidden md:flex gap-1">
              {['home', 'analyze', 'knowledge', 'profile'].map((view) => (
                <button
                  key={view}
                  onClick={() => setCurrentView(view)}
                  className={`px-6 py-4 font-semibold transition-all ${
                    currentView === view
                      ? 'bg-white text-amber-600 shadow-lg'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {t.nav[view]}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex justify-between items-center py-3">
              <span className="font-semibold">{t.nav[currentView]}</span>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-sm border-t border-white/20">
            {['home', 'analyze', 'knowledge', 'profile'].map((view) => (
              <button
                key={view}
                onClick={() => {
                  setCurrentView(view);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-6 py-4 font-semibold transition-all ${
                  currentView === view ? 'bg-white/20' : 'hover:bg-white/10'
                }`}
              >
                {t.nav[view]}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 py-12">
        {currentView === 'home' && renderHome()}
        {currentView === 'analyze' && renderAnalysis()}
        {currentView === 'knowledge' && renderKnowledge()}
        {currentView === 'profile' && renderProfile()}
      </main>

      {/* Footer */}
      <footer className="relative bg-amber-900 text-amber-100 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            {language === 'ar' 
              ? '© 2025 اليونيدو - منظمة الأمم المتحدة للتنمية الصناعية | مشروع TIGARA بتمويل من الاتحاد الأوروبي'
              : '© 2025 UNIDO - United Nations Industrial Development Organization | TIGARA Project funded by the EU'
            }
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default DigitalApiaryDemo;
