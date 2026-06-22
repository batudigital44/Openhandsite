import { createContext, useContext, useState, useEffect } from 'react'

const translations = {
  tr: {
    // Navigation
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      portfolio: 'Portfolyo',
      education: 'Eğitimler',
      contact: 'İletişim',
      contactBtn: 'İletişime Geç',
      pressCorner: 'Basın Köşesi'
    },
    // Footer
    footer: {
      ctaTitle: 'Hadi Beraber Çalışalım',
      ctaDesc: 'Dijitali öğrenmek, markanı konumlandırmak veya iş ortağı olmak için şimdi bana mail gönder görüşelim',
      subtitle: 'Uluslararası Medya ve Pazarlama Uzmanı',
      quickLinks: 'Hızlı Linkler',
      contactTitle: 'İletişim'
    },
    // AboutPreview Component
    aboutPreview: {
      title: 'Beni Tanıyın',
      subtitle: 'Dijitalin sınırları',
      subtitleHighlight: 'olmadığını',
      subtitleSuffix: 'söyleyerek',
      description1: 'Hem profesyonel hem de akademik olarak yeni medya alanında çalışmalarıma devam ediyorum.',
      description2: 'Batuhan Ateş, 1996 yılında Ankara\'da doğdu. Malatya doğumlu olan Ateş, ilkokul, ortaokul ve lise eğitimini Antalya\'nın Manavgat ilçesinde tamamladı. 2020 yılında Kırgızistan\'daki Manas Üniversitesi İletişim Fakültesi Gazetecilik bölümünden mezun oldu.',
      stats: {
        brands: 'Marka ve kurum yönetimi',
        international: 'Uluslararası işbirliği',
        success: 'Başarı ve satış oranı',
        engagement: 'İçerik etkileşimi'
      },
      cta: 'Hakkımda Sayfası'
    },
    // Services Component
    services: {
      title: 'Hizmetlerim',
      subtitle: 'Kreatif ve',
      subtitleHighlight: 'Performans',
      description: 'Güçlü mesleki alanlarım',
      items: {
        martech: {
          title: 'Pazarlama Teknolojileri (MarTech) & Otomasyon',
          desc: 'HubSpot ve Mautic ile omnichannel otomasyon kurulumları, Zapier ile sistem entegrasyonları ve CRM tabanlı satış hunisi (Sales Funnel) optimizasyonu.'
        },
        webdev: {
          title: 'Web Geliştirme & Teknik SEO',
          desc: 'HTML/CSS tabanlı web geliştirme, WordPress yönetimi ve arama motoru görünürlüğünü artıran teknik/içerik odaklı SEO stratejileri.'
        },
        ai: {
          title: 'Üretken Yapay Zeka (Generative AI)',
          desc: 'İleri düzey Prompt Mühendisliği, yapay zeka destekli içerik/tasarım iş akışları ve AI otomasyonları ile operasyonel verimlilik artışı.'
        },
        performance: {
          title: 'Performans Pazarlaması',
          desc: 'Meta, Google ve Yandex Ads platformlarında veri odaklı reklam yönetimi, A/B testleri ve yüksek dönüşümlü (High-Conversion) kampanya stratejileri.'
        },
        pr: {
          title: 'Dijital Görünürlük & PR',
          desc: 'Marka konumlandırma, kriz iletişimi yönetimi ve uluslararası medya akreditasyonu (IFJ) ile stratejik basın ilişkileri yönetimi.'
        },
        training: {
          title: 'Eğitim & Danışmanlık',
          desc: 'Profesyonel ve kurumsal dijital pazarlama eğitimleri, stratejik danışmanlık ve mentörlük programları.'
        }
      }
    },
    // Home
    home: {
      hero: {
        title: 'Dijital Dünyayı Dönüştürüyorum',
        subtitle: 'Uluslararası Medya ve Pazarlama Uzmanı',
        cta: 'Projelerimi İncele',
        ctaSecondary: 'İletişime Geç'
      },
      services: {
        title: 'Hizmetlerim',
        subtitle: 'Marka ve işletmeler için dijital çözümler',
        digitalMarketing: {
          title: 'Dijital Pazarlama',
          desc: 'Veri odaklı pazarlama stratejileri ile markanızı büyütün'
        },
        socialMedia: {
          title: 'Sosyal Medya Yönetimi',
          desc: 'Etkili sosyal medya stratejileri ile hedef kitlenize ulaşın'
        },
        content: {
          title: 'İçerik Üretimi',
          desc: 'Yaratıcı ve viral içeriklerle dijital varlığınızı güçlendirin'
        },
        media: {
          title: 'Medya Prodüksiyonu',
          desc: 'Profesyonel video ve fotoğraf içerikleri'
        }
      }
    },
    // Common
    common: {
      loading: 'Yükleniyor...',
      error: 'Bir hata oluştu',
      close: 'Kapat',
      scrollDown: 'Aşağı kaydır'
    },
    // Contact
    contact: {
      heroTitle: 'Hadi ', heroTitleSpan: 'Formu Doldur',
      heroSubtitle: 'Eğitimlere Başlayalım',
      formDescription: 'Aklınızda bir proje mi var? Fikirlerinizi dinlemek ve birlikte anlamlı bir şey yaratmak isterim.',
      formSubmitted: 'Başvurunuz Alındı!',
      formSubmittedDesc: 'En kısa sürede dönüş yapacağım.',
      formNote: 'Eğitimlerim ve danışmanlıklarım için lütfen ön başvuru formunu doldurunuz.',
      submitting: 'Gönderiliyor...',
      submit: 'Gönder',
      sending: 'Gönderiliyor...',
      emailSubject: 'Yeni Form Başvurusu',
      form: {
        name: 'İsim', namePlaceholder: 'Adınız Soyadınız',
        phone: 'Numara', email: 'Mail', emailPlaceholder: 'ornek@mail.com',
        subjectLabel: 'Konu', message: 'Mesaj', messagePlaceholder: 'Mesajınızı yazın...'
      },
      errors: {
        name: 'Lütfen adınızı girin',
        phone: 'Lütfen telefon numaranızı girin',
        email: 'Lütfen e-posta adresinizi girin',
        emailInvalid: 'Geçerli bir e-posta adresi girin',
        subject: 'Lütfen bir konu seçin'
      },
      feature1: 'Yapay zeka ile profesyonel içerik üretimi',
      feature2: 'Mobil içerik üretimi',
      feature3: 'Nokta atışı Meta reklam stratejileri',
      feature4: 'CRM ve otomatik müşteri yönetimi',
      upcomingTraining: 'Gelecek Eğitimler',
      trainingTitle: 'Emlak Danışmanları için Dijital Dönüşüm Atölyesi',
      trainingDesc: 'Neler Kazanacaksınız?',
      limitedSlots: 'Kontenjan Kısıtlı: Sadece 10 kişi kabul edilecektir.',
      contactNote: 'Formu doldur ya da DM\'den mesaj gönder',
      location: 'Teus Group Ofisi, Muratpaşa/Antalya',
      contactInfo: 'İletişim Bilgileri',
      emailLabel: 'E-posta',
      locationLabel: 'Konum',
      locationValue: 'Antalya, Türkiye',
      socialMedia: 'Sosyal Medya'
    },
    // Portfolio
    portfolio: {
      certificates: 'Sertifikalar ve Başarılar',
      certificatesDesc: 'Aldığım eğitimler ve sertifikalar',
      // White House
      whitehouse: {
        title: 'Uluslararası Medya Danışmanlığı',
        description: 'Beyaz Saray için iletişim stratejileri geliştirildi. Melih Göğeban\'a (Donald Trump\'ın medya danışmanı) danışmanlık yapıldı ve uluslararası medya koordinasyonu sağlandı.',
        tag: 'Uluslararası İletişim',
        metric1: 'Beyaz Saray İletişim Stratejileri',
        metric2: 'Trump Medya Danışmanlığı',
        metric3: 'Uluslararası Koordinasyon'
      },
      // Dubai Real Estate
      dubai: {
        title: 'Dubai Emlak Firması - 800.000$+ Satış Dönüşümü',
        description: 'Performans pazarlamasında sıradışı metinler ve satış stratejileriyle doğrudan satışa odaklanıyorum. Dubai gayrimenkul pazarı için tasarladığım tek bir içerik stratejisiyle sadece 14 günde 800.000$+ değerinde satış konversiyonu sağladım. 5.000 TL reklam harcamasiyla yüksek ROAS elde edildi.',
        tag: 'Gayrimenkul & ROI',
        metric1: '14 günde 800.000$+ satış',
        metric2: 'Yüksek ROAS / ROI',
        metric3: 'Performans Pazarlaması'
      },
      // Yunexia SaaS - Muhasebe Yazılımı
      yunexia: {
        title: 'Yunexia Muhasebe SaaS - Yazılım Projesi',
        description: 'Yunexia tarafından geliştirilen bulut tabanlı muhasebe yazılımının pazarlaması ve AI otomasyonları kurulumu. SAAS ürün lansmanı için dijital pazarlama stratejileri, lead generation kampanyaları ve müşteri edinme süreçleri yönetildi. Yapay zeka destekli otomasyonlar ile satış ve pazarlama süreçleri optimize edildi.',
        tag: 'Yazılım & SAAS',
        metric1: 'SAAS Pazarlama Stratejisi',
        metric2: 'AI Otomasyonları',
        metric3: 'Lead Generation'
      },
      // PPG Tourism Panel - Turizm Yazılımı
      ppg: {
        title: 'PPG All In One Turizm Panel - Yazılım Projesi',
        description: 'PMA Partner tarafından geliştirilen PPG All In One turizm panel sisteminin pazarlama süreçlerinde yer aldım. Yazılım test kontrolü, IT bağlantıları, kullanıcı deneyimi optimizasyonu ve pazarlama otomasyonları kurulumları gerçekleştirdim. Turizm sektörüne özel çözümlerin tanıtımı ve satış stratejileri geliştirildi.',
        tag: 'Turizm & Yazılım',
        metric1: 'Turizm Panel Sistemi',
        metric2: 'Test & Kontrol',
        metric3: 'Pazarlama Otomasyonu'
      },
      // Kyrgyzstan
      kyrgyz: {
        title: 'Türkiye - Kırgızistan Diplomatik Dijital Dönüşüm',
        description: 'T.C. Bişkek Büyükelçiliği Eğitim Müşavirliği bünyesindeki TTEÖMER için ilk kurumsal dijital medya stratejisi tasarlandı. Multimedya ve prodüksiyon çalışmalarıyla kurumun marka değeri ve dijital görünürlüğü stabilize edildi.',
        tag: 'Diplomasi & Eğitim',
        metric1: 'Kurumsal Dijital Strateji',
        metric2: 'Multimedya Prodüksiyon',
        metric3: 'Uluslararası Kurum'
      },
      // Teus Group
      teus: {
        title: 'Teus Group - Ulusal ve Uluslararası Medya Görünürlüğü',
        description: 'Teus Group\'un Antalya (Desire), Bali ve Maldivler projeleri için ulusal ve uluslararası basında stratejik medya görünürlüğü sağlandı. Markanın "Avrupa\'nın En İyi Otel İnşaat ve Tasarım Ödülü" kazanma sürecindeki iletişim ve PR faaliyetleri koordine edildi.',
        tag: 'Turizm & Gayrimenkul',
        metric1: 'Desire Antalya Projesi',
        metric2: 'Avrupa Ödülü',
        metric3: 'Ulusal Basın PR'
      },
      // Energy
      energy: {
        title: 'Uluslararası Enerji Firması Dijital Dönüşümü',
        description: 'Almanya merkezli enerji firması Mediawirt\'in tüm dijital ekosistemi (Web, Sosyal Medya, B2B Lead) modern standartlara göre revize edildi. E-ticaret uyumlu sistemler ve içerik stratejileriyle marka etkileşimi maksimize edildi.',
        tag: 'Enerji & B2B',
        metric1: 'Mediawirt (Almanya)',
        metric2: 'B2B Lead Generation',
        metric3: 'E-Ticaret'
      },
      // EMO Optic
      emo: {
        title: 'EMO Optik - Türkiye Pazarına Giriş Stratejisi',
        description: 'Uluslararası 7 büyük optik markasının (Trussardi, Ana Hickmann vb.) Türkiye dijital pazarına giriş ve konumlandırma süreçleri yönetildi. Meta Business Suite ve e-ticaret altyapı kurulumları ile kurumsal satış kanalları optimize edildi.',
        tag: 'E-Ticaret & Moda',
        metric1: '7 Uluslararası Marka',
        metric2: 'Meta Business Suite',
        metric3: 'E-Ticaret Altyapısı'
      },
      // Hotel
      hotel: {
        title: 'Veri Odaklı Dijital Pazarlama ile Pazar Liderliği',
        description: 'Orange County Otel Grubu\'nda kısıtlı kaynaklarla yürüttüğüm strateji sayesinde, Türkiye genelinde otel kategorisinde en güçlü sosyal medya hesaplarından birini inşa ettim. Foto galeri sayfası en çok ziyaret edilen sayfa yapısı oluşturuldu. Kemer otelimizde SEO ve içerik çalışmalarıyla Instagram 3., Facebook 6. sırada yer aldı.',
        tag: 'Otel & Turizm',
        metric1: 'En Çok Ziyaret Edilen Sayfa',
        metric2: 'Instagram 3. sıra',
        metric3: 'Facebook 6. sıra',
        photoLink: 'Foto Galeri'
      },
      // ASMAN
      asman: {
        title: 'Uluslararası Medya Ekosistemi ve Diplomasi',
        description: 'Orta Asya ve Türkiye arasında köprü kuran, çok dilli ve çok uluslu bir gençlik medya ağı olan ASMAN Medya Grubu\'nu hayata geçirdim. 130 ülkede geçerli IFJ (Uluslararası Gazeteciler Federasyonu) basın akreditasyonuyla uluslararası düzeyde teknoloji ve diplomasi haberciliği yürütmekteyim.',
        tag: 'Medya & Diplomasi',
        metric1: '130 ülke IFJ akreditasyonu',
        metric2: 'ASMAN Medya Grubu',
        metric3: 'Diplomasi haberciliği'
      }
    },
    portfolioPreview: {
      subtitle: 'Başarılar ve Ödüller',
      title: 'Tüm Çalışmalarım'
    },
    about: {
      heroTitle: 'Dijital Dünyayı Keşfet',
      heroSubtitle: 'Benimle',
      aboutMe: 'Batuhan Ateş Kimdir?',
      bio1: 'Batuhan Ateş, uluslararası saha deneyimine sahip, seçkin bir stratejik iletişim profesyonelidir. Dijital medya ekosistemini sınır ötesi etki oluşturmanın güçlü bir aracı olarak konumlandıran Ateş, veri odaklı dijital pazarlama teknolojilerini gelişmiş bir küresel temsil kabiliyetiyle birleştirerek kariyerini yüksek profilli markaların ve büyük ölçekli projelerin uluslararası itibarını inşa etmeye ve sürdürülebilir kılmaya adamıştır.',
      bio2: 'Küresel operasyonel ağı; Portekiz, Hollanda, Belçika, Katar ve Birleşik Arap Emirlikleri gibi stratejik öneme sahip pazarlarda aktif saha deneyimine dayanmaktadır. Bu bölgelerde yerel pazar dinamiklerini ve karmaşık iletişim protokollerini doğrudan deneyimleyerek uzmanlaşmıştır.',
      bio3: 'Türkçe, İngilizce, Almanca, Rusça, Kırgızca ve Kazakça dillerine hâkim olan Batuhan Ateş, Avrupa ile Avrasya coğrafyaları arasında güçlü bir çok dilli köprü görevi görmekte; dijital pazarlama ve medyayı modern çağın en etkili stratejik araçları olarak yeniden tanımlamaya devam etmektedir.',
      bio4: 'Beyaz Saray iletişim stratejileri, Dubai gayrimenkul pazarlaması, uluslararası diplomasi haberciliği ve çok dilli medya koordinasyonu alanlarındaki uzmanlığıyla, markaların ve kurumların küresel görünürlüklerini artırmalarına yardımcı olmaktadır.',
      expertiseTitle: 'Uzmanlık Alanlarım',
      expertiseSubtitle: 'Neler Yapıyorum?',
      expertise1Title: 'Dijital Strateji',
      expertise1Desc: 'Veri odaklı pazarlama stratejileri ile markanızı büyütüyorum',
      expertise2Title: 'İçerik Üretimi',
      expertise2Desc: 'Yaratıcı ve viral içeriklerle dijital varlığınızı güçlendirin',
      expertise3Title: 'Uluslararası İletişim',
      expertise3Desc: 'Küresel pazarlarda etkili iletişim stratejileri',
      expertise4Title: 'Mobil Prodüksiyon',
      expertise4Desc: 'Profesyonel video ve fotoğraf içerikleri üretiyorum',
      jobRefs: 'İş Referanslarım',
      successMetrics: 'Başarı Ölçütlerim',
      skills: 'Yeteneklerim',
      tools: 'Kullandığım Araçlar',
      languages: 'Diller',
      gallery: 'Galeri',
      photos: 'Fotoğraflarım',
      brandsTitle: 'Kurucu Olduğum Markalar',
      brandsSubtitle: 'Girişimlerim ve Projelerim',
      brandAsmanDesc: 'Orta Asya ve Türkiye arasında köprü kuran çok dilli medya ağı. IFJ akreditasyonu ile diplomasi haberciliği.',
      brandItronyDesc: 'Antalya merkezli dijital pazarlama ve sosyal medya ajansı.',
      brandYarinigezDesc: 'Antalya\'da kurulan seyahat acentası ve gezi platformu.'
    },
    press: {
      title: 'Basın Köşesi',
      subtitle: 'Medyada Yer Alan Çalışmalarım ve Yazılarım',
      mediaContent: 'Medya İçeriklerim',
      mediaPlatforms: 'Basında ve Dijital Platformlarda',
      publications: 'Yayınlarım ve Makalelerim',
      publicationsDesc: 'Dijital pazarlama, medya ve uluslararası ilişkiler üzerine yazılar',
      newsArticles: 'Haber & Makale',
      platforms: 'Farklı Platform',
      reach: 'Erişim',
      open: 'Aç'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      education: 'Education',
      contact: 'Contact',
      contactBtn: 'Contact',
      pressCorner: 'Press Corner'
    },
    footer: {
      ctaTitle: "Let's Work Together",
      ctaDesc: "Let's get in touch to learn digital, position your brand, or become a partner",
      subtitle: 'International Media & Marketing Expert',
      quickLinks: 'Quick Links',
      contactTitle: 'Contact'
    },
    // AboutPreview Component
    aboutPreview: {
      title: 'Get to Know Me',
      subtitle: 'By saying that the limits of',
      subtitleHighlight: 'digital have no bounds',
      subtitleSuffix: '',
      description1: 'I continue my work in the new media field both professionally and academically.',
      description2: 'Batuhan Ateş was born in 1996 in Ankara. Born in Malatya, Ateş completed primary, secondary and high school education in the Manavgat district of Antalya. In 2020, he graduated from the Journalism department of the Faculty of Communication at Manas University in Kyrgyzstan.',
      stats: {
        brands: 'Brand and institution management',
        international: 'International collaboration',
        success: 'Success and sales rate',
        engagement: 'Content engagement'
      },
      cta: 'About Page'
    },
    // Services Component
    services: {
      title: 'My Services',
      subtitle: 'Creative and',
      subtitleHighlight: 'Performance',
      description: 'My strong professional areas',
      items: {
        martech: {
          title: 'Marketing Technology (MarTech) & Automation',
          desc: 'Omnichannel automation setups with HubSpot and Mautic, system integrations with Zapier, and CRM-based sales funnel optimization.'
        },
        webdev: {
          title: 'Web Development & Technical SEO',
          desc: 'HTML/CSS-based web development, WordPress management, and technical/content-focused SEO strategies that increase search engine visibility.'
        },
        ai: {
          title: 'Generative AI',
          desc: 'Advanced Prompt Engineering, AI-powered content/design workflows, and AI automation for operational efficiency improvements.'
        },
        performance: {
          title: 'Performance Marketing',
          desc: 'Data-driven ad management on Meta, Google, and Yandex Ads platforms, A/B testing, and high-conversion campaign strategies.'
        },
        pr: {
          title: 'Digital Visibility & PR',
          desc: 'Brand positioning, crisis communication management, and strategic press relations with international media accreditation (IFJ).'
        },
        training: {
          title: 'Training & Consulting',
          desc: 'Professional and corporate digital marketing training, strategic consulting, and mentorship programs.'
        }
      }
    },
    home: {
      hero: {
        title: 'Transforming the Digital World',
        subtitle: 'International Media & Marketing Expert',
        cta: 'View Projects',
        ctaSecondary: 'Contact'
      },
      services: {
        title: 'My Services',
        subtitle: 'Digital solutions for brands and businesses',
        digitalMarketing: {
          title: 'Digital Marketing',
          desc: 'Grow your brand with data-driven marketing strategies'
        },
        socialMedia: {
          title: 'Social Media Management',
          desc: 'Reach your target audience with effective social media strategies'
        },
        content: {
          title: 'Content Production',
          desc: 'Strengthen your digital presence with creative and viral content'
        },
        media: {
          title: 'Media Production',
          desc: 'Professional video and photo content'
        }
      }
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      close: 'Close',
      scrollDown: 'Scroll Down'
    },
    contact: {
      heroTitle: 'Fill Out ', heroTitleSpan: 'The Form',
      heroSubtitle: "Let's Start With Training",
      formDescription: 'Do you have a project in mind? I would love to listen to your ideas and create something meaningful together.',
      formSubmitted: 'Application Received!',
      formSubmittedDesc: 'I will get back to you as soon as possible.',
      formNote: 'Please fill out the pre-application form for my trainings and consultations.',
      submitting: 'Sending...',
      submit: 'Send',
      sending: 'Sending...',
      emailSubject: 'New Form Application',
      form: {
        name: 'Name', namePlaceholder: 'Your Full Name',
        phone: 'Phone', email: 'Email', emailPlaceholder: 'example@mail.com',
        subjectLabel: 'Subject', message: 'Message', messagePlaceholder: 'Write your message...'
      },
      errors: {
        name: 'Please enter your name',
        phone: 'Please enter your phone number',
        email: 'Please enter your email address',
        emailInvalid: 'Please enter a valid email address',
        subject: 'Please select a subject'
      },
      feature1: 'Professional content production with AI',
      feature2: 'Mobile content production',
      feature3: 'Precision Meta advertising strategies',
      feature4: 'CRM and automatic customer management',
      upcomingTraining: 'Upcoming Training',
      trainingTitle: 'Digital Transformation Workshop for Real Estate Consultants',
      trainingDesc: 'What Will You Gain?',
      limitedSlots: 'Limited Slots: Only 10 people will be accepted.',
      contactNote: 'Fill out the form or send me a DM',
      location: 'Teus Group Office, Muratpaşa/Antalya',
      contactInfo: 'Contact Information',
      emailLabel: 'Email',
      locationLabel: 'Location',
      locationValue: 'Antalya, Turkey',
      socialMedia: 'Social Media'
    },
    portfolio: {
      certificates: 'Certificates and Achievements',
      certificatesDesc: 'Trainings and certificates I have obtained',
      // White House
      whitehouse: {
        title: 'International Media Consulting',
        description: 'Communication strategies were developed for the White House. Consulting was provided to Melih Göğeban (Donald Trump\'s media advisor) and international media coordination was ensured.',
        tag: 'International Communication',
        metric1: 'White House Communication Strategies',
        metric2: 'Trump Media Consulting',
        metric3: 'International Coordination'
      },
      // Dubai Real Estate
      dubai: {
        title: 'Dubai Real Estate Company - 800.000$+ Sales Conversion',
        description: 'I focus on direct sales with extraordinary texts and sales strategies in performance marketing. With a single content strategy designed for the Dubai real estate market, I achieved $800,000+ in sales conversion in just 14 days. High ROAS was achieved with 5,000 TL in ad spend.',
        tag: 'Real Estate & ROI',
        metric1: '$800,000+ sales in 14 days',
        metric2: 'High ROAS / ROI',
        metric3: 'Performance Marketing'
      },
      // Yunexia SaaS - Accounting Software
      yunexia: {
        title: 'Yunexia Accounting SaaS - Software Project',
        description: 'Marketing and AI automation setup for cloud-based accounting software developed by Yunexia. Digital marketing strategies, lead generation campaigns, and customer acquisition processes were managed for SAAS product launch. Sales and marketing processes were optimized with AI-powered automations.',
        tag: 'Software & SAAS',
        metric1: 'SAAS Marketing Strategy',
        metric2: 'AI Automations',
        metric3: 'Lead Generation'
      },
      // PPG Tourism Panel - Tourism Software
      ppg: {
        title: 'PPG All In One Tourism Panel - Software Project',
        description: 'Participated in marketing processes for PPG All In One tourism panel system developed by PMA Partner. Performed software testing, IT integrations, UX optimization, and marketing automation setup. Developed promotional strategies and sales strategies for tourism-specific solutions.',
        tag: 'Tourism & Software',
        metric1: 'Tourism Panel System',
        metric2: 'Testing & Control',
        metric3: 'Marketing Automation'
      },
      // Kyrgyzstan
      kyrgyz: {
        title: 'Turkey - Kyrgyzstan Diplomatic Digital Transformation',
        description: 'The first institutional digital media strategy was designed for TTEÖMER under the Training Consultancy of the T.C. Embassy in Bishkek. With multimedia and production work, the institution\'s brand value and digital visibility were stabilized.',
        tag: 'Diplomacy & Education',
        metric1: 'Institutional Digital Strategy',
        metric2: 'Multimedia Production',
        metric3: 'International Institution'
      },
      // Teus Group
      teus: {
        title: 'Teus Group - National and International Media Visibility',
        description: 'Strategic media visibility was provided in national and international press for Teus Group\'s Antalya (Desire), Bali and Maldives projects. Communication and PR activities during the brand\'s process of winning the "Europe\'s Best Hotel Construction and Design Award" were coordinated.',
        tag: 'Tourism & Real Estate',
        metric1: 'Desire Antalya Project',
        metric2: 'Europe Award',
        metric3: 'National Press PR'
      },
      // Energy
      energy: {
        title: 'International Energy Company Digital Transformation',
        description: 'The entire digital ecosystem (Web, Social Media, B2B Lead) of Germany-based energy company Mediawirt was revised according to modern standards. Brand engagement was maximized with e-commerce compatible systems and content strategies.',
        tag: 'Energy & B2B',
        metric1: 'Mediawirt (Germany)',
        metric2: 'B2B Lead Generation',
        metric3: 'E-Commerce'
      },
      // EMO Optic
      emo: {
        title: 'EMO Optic - Turkey Market Entry Strategy',
        description: 'International market entry and positioning processes were managed for 7 major international optical brands (Trussardi, Ana Hickmann, etc.). Corporate sales channels were optimized with Meta Business Suite and e-commerce infrastructure installations.',
        tag: 'E-Commerce & Fashion',
        metric1: '7 International Brands',
        metric2: 'Meta Business Suite',
        metric3: 'E-Commerce Infrastructure'
      },
      // Hotel
      hotel: {
        title: 'Market Leadership with Data-Driven Digital Marketing',
        description: 'Thanks to the strategy I implemented at Orange County Hotel Group with limited resources, I built one of the strongest social media accounts in the hotel category across Turkey. A photo gallery page was created as the most visited page structure. At our Kemer hotel, we achieved 3rd place on Instagram and 6th place on Facebook through SEO and content work.',
        tag: 'Hotel & Tourism',
        metric1: 'Most Visited Page',
        metric2: 'Instagram 3rd Place',
        metric3: 'Facebook 6th Place',
        photoLink: 'Photo Gallery'
      },
      // ASMAN
      asman: {
        title: 'International Media Ecosystem and Diplomacy',
        description: 'I launched ASMAN Media Group, a multilingual and multinational youth media network that bridges Central Asia and Turkey. With IFJ (International Federation of Journalists) press accreditation valid in 130 countries, I conduct international technology and diplomacy journalism.',
        tag: 'Media & Diplomacy',
        metric1: '130 Countries IFJ Accreditation',
        metric2: 'ASMAN Media Group',
        metric3: 'Diplomacy Journalism'
      }
    },
    portfolioPreview: {
      subtitle: 'Success Stories',
      title: 'All My Work'
    },
    about: {
      heroTitle: 'Explore the Digital World',
      heroSubtitle: 'With Me',
      aboutMe: 'Who is Batuhan Ateş?',
      bio1: 'Batuhan Ateş is an elite strategic communications professional with international field experience. Positioning the digital media ecosystem as a powerful tool for cross-border impact, Ateş combines data-driven digital marketing technologies with advanced global representation capabilities, dedicating his career to building and sustaining the international reputation of high-profile brands and large-scale projects.',
      bio2: 'His global operational network is based on active field experience in strategically important markets such as Portugal, Netherlands, Belgium, Qatar, and the United Arab Emirates. In these regions, he has developed expertise by directly experiencing local market dynamics and complex communication protocols.',
      bio3: 'Proficient in Turkish, English, German, Russian, Kyrgyz, and Kazakh, Batuhan Ateş serves as a powerful multilingual bridge between Europe and Eurasia geographies; continuing to redefine digital marketing and media as the most effective strategic tools of the modern era.',
      bio4: 'With expertise in White House communication strategies, Dubai real estate marketing, international diplomacy journalism, and multilingual media coordination, he helps brands and institutions increase their global visibility.',
      expertiseTitle: 'My Expertise',
      expertiseSubtitle: 'What Do I Do?',
      expertise1Title: 'Digital Strategy',
      expertise1Desc: 'Growing your brand with data-driven marketing strategies',
      expertise2Title: 'Content Production',
      expertise2Desc: 'Strengthening your digital presence with creative content',
      expertise3Title: 'International Communication',
      expertise3Desc: 'Effective communication strategies in global markets',
      expertise4Title: 'Mobile Production',
      expertise4Desc: 'Producing professional video and photo content',
      jobRefs: 'Job References',
      successMetrics: 'Success Metrics',
      skills: 'My Skills',
      tools: 'Tools I Use',
      languages: 'Languages',
      gallery: 'Gallery',
      photos: 'My Photos',
      brandsTitle: 'Brands I Founded',
      brandsSubtitle: 'My Ventures and Projects',
      brandAsmanDesc: 'Multilingual media network bridging Central Asia and Turkey. Diplomacy journalism with IFJ accreditation.',
      brandItronyDesc: 'Antalya-based digital marketing and social media agency.',
      brandYarinigezDesc: 'Travel agency and travel platform established in Antalya.'
    },
    press: {
      title: 'Press Corner',
      subtitle: 'My Media Appearances and Writings',
      mediaContent: 'My Media Content',
      mediaPlatforms: 'In Media and Digital Platforms',
      publications: 'My Publications',
      publicationsDesc: 'Articles on digital marketing, media and international relations',
      newsArticles: 'News & Articles',
      platforms: 'Different Platforms',
      reach: 'Reach',
      open: 'Open'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über mich',
      portfolio: 'Portfolio',
      education: 'Bildung',
      contact: 'Kontakt',
      contactBtn: 'Kontakt',
      pressCorner: 'Pressewinkel'
    },
    footer: {
      ctaTitle: 'Lassen Sie uns zusammenarbeiten',
      ctaDesc: 'Kontaktieren Sie mich, um Digitales zu lernen, Ihre Marke zu positionieren oder Partner zu werden',
      subtitle: 'Internationaler Medien- & Marketingexperte',
      quickLinks: 'Schnelle Links',
      contactTitle: 'Kontakt'
    },
    // AboutPreview Component
    aboutPreview: {
      title: 'Lernen Sie mich kennen',
      subtitle: 'Indem ich sage, dass die Grenzen des',
      subtitleHighlight: 'Digitalen keine Grenzen haben',
      subtitleSuffix: '',
      description1: 'Ich setze meine Arbeit im Bereich der neuen Medien sowohl professionell als auch akademisch fort.',
      description2: 'Batuhan Ateş wurde 1996 in Ankara geboren. Der in Malatya geborene Ateş absolvierte seine Grund-, Mittel- und Oberschulbildung im Bezirk Manavgat in Antalya. Im Jahr 2020 schloss er das Journalismus-Studium an der Fakultät für Kommunikation der Manas Universität in Kirgisistan ab.',
      stats: {
        brands: 'Marken- und Institutionsmanagement',
        international: 'Internationale Zusammenarbeit',
        success: 'Erfolgs- und Verkaufsquote',
        engagement: 'Inhaltsinteraktion'
      },
      cta: 'Über-mich-Seite'
    },
    // Services Component
    services: {
      title: 'Meine Dienste',
      subtitle: 'Kreativ und',
      subtitleHighlight: 'Performance',
      description: 'Meine starken beruflichen Bereiche',
      items: {
        martech: {
          title: 'Marketing-Technologie (MarTech) & Automation',
          desc: 'Omnichannel-Automatisierung mit HubSpot und Mautic, Systemintegrationen mit Zapier und CRM-basierte Sales-Funnel-Optimierung.'
        },
        webdev: {
          title: 'Webentwicklung & Technisches SEO',
          desc: 'HTML/CSS-basierte Webentwicklung, WordPress-Management und technische/inhaltsbasierte SEO-Strategien zur Erhöhung der Suchmaschinensichtbarkeit.'
        },
        ai: {
          title: 'Generative KI',
          desc: 'Fortgeschrittenes Prompt Engineering, KI-gestützte Inhalts-/Design-Workflows und KI-Automatisierung zur operativen Effizienzsteigerung.'
        },
        performance: {
          title: 'Performance-Marketing',
          desc: 'Datengesteuertes Anzeigenmanagement auf Meta, Google und Yandex Ads Plattformen, A/B-Tests und High-Conversion-Kampagnenstrategien.'
        },
        pr: {
          title: 'Digitale Sichtbarkeit & PR',
          desc: 'Markenpositionierung, Krisenkommunikationsmanagement und strategische Pressebeziehungen mit internationaler Medienakkreditierung (IFJ).'
        },
        training: {
          title: 'Schulung & Beratung',
          desc: 'Professionelle und unternehmensbezogene Digitalmarketing-Schulungen, strategische Beratung und Mentoring-Programme.'
        }
      }
    },
    home: {
      hero: {
        title: 'Die digitale Welt transformieren',
        subtitle: 'Internationaler Medien- & Marketingexperte',
        cta: 'Projekte ansehen',
        ctaSecondary: 'Kontakt'
      },
      services: {
        title: 'Meine Dienste',
        subtitle: 'Digitale Lösungen für Marken und Unternehmen',
        digitalMarketing: {
          title: 'Digitales Marketing',
          desc: 'Wachsen Sie mit datengesteuerten Marketingstrategien'
        },
        socialMedia: {
          title: 'Social Media Management',
          desc: 'Erreichen Sie Ihre Zielgruppe mit effektiven Social-Media-Strategien'
        },
        content: {
          title: 'Inhaltsproduktion',
          desc: 'Stärken Sie Ihre digitale Präsenz mit kreativen Inhalten'
        },
        media: {
          title: 'Medienproduktion',
          desc: 'Professionelle Video- und Fotoinhalte'
        }
      }
    },
    common: {
      loading: 'Laden...',
      error: 'Ein Fehler ist aufgetreten',
      close: 'Schließen',
      scrollDown: 'Nach unten scrollen'
    },
    contact: {
      heroTitle: 'Füllen Sie das ', heroTitleSpan: 'Formular aus',
      heroSubtitle: 'Lassen Sie uns mit der Schulung beginnen',
      formDescription: 'Haben Sie ein Projekt im Sinn? Ich würde gerne Ihre Ideen hören und gemeinsam etwas Bedeutungsvolles schaffen.',
      formSubmitted: 'Anfrage erhalten!',
      formSubmittedDesc: 'Ich werde mich so schnell wie möglich bei Ihnen melden.',
      formNote: 'Bitte füllen Sie das Vorantragsformular für meine Schulungen und Beratungen aus.',
      submitting: 'Senden...',
      submit: 'Senden',
      sending: 'Senden...',
      emailSubject: 'Neue Formularbewerbung',
      form: {
        name: 'Name', namePlaceholder: 'Ihr vollständiger Name',
        phone: 'Telefon', email: 'E-Mail', emailPlaceholder: 'beispiel@mail.com',
        subjectLabel: 'Betreff', message: 'Nachricht', messagePlaceholder: 'Schreiben Sie Ihre Nachricht...'
      },
      errors: {
        name: 'Bitte geben Sie Ihren Namen ein',
        phone: 'Bitte geben Sie Ihre Telefonnummer ein',
        email: 'Bitte geben Sie Ihre E-Mail-Adresse ein',
        emailInvalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
        subject: 'Bitte wählen Sie einen Betreff'
      },
      feature1: 'Professionelle Inhaltsproduktion mit KI',
      feature2: 'Mobile Inhaltsproduktion',
      feature3: 'Präzise Meta-Werbestrategien',
      feature4: 'CRM und automatische Kundenverwaltung',
      upcomingTraining: 'Kommende Schulung',
      trainingTitle: 'Digitaler Transformations-Workshop für Immobilienberater',
      trainingDesc: 'Was werden Sie gewinnen?',
      limitedSlots: 'Begrenzte Plätze: Es werden nur 10 Personen akzeptiert.',
      contactNote: 'Formular ausfüllen oder DM senden',
      location: 'Teus Group Büro, Muratpaşa/Antalya',
      contactInfo: 'Kontaktinformationen',
      emailLabel: 'E-Mail',
      locationLabel: 'Standort',
      locationValue: 'Antalya, Türkei',
      socialMedia: 'Soziale Medien'
    },
    portfolio: {
      certificates: 'Zertifikate und Erfolge',
      certificatesDesc: 'Schulungen und Zertifikate, die ich erworben habe',
      // White House
      whitehouse: {
        title: 'Internationale Medienberatung',
        description: 'Kommunikationsstrategien wurden für das Weiße Haus entwickelt. Beratung wurde für Melih Göğeban (Donald Trumps Medienberater) durchgeführt und internationale Medienkoordination sichergestellt.',
        tag: 'Internationale Kommunikation',
        metric1: 'Weißes-Haus Kommunikationsstrategien',
        metric2: 'Trump Medienberatung',
        metric3: 'Internationale Koordination'
      },
      // Dubai Real Estate
      dubai: {
        title: 'Dubai Immobilienfirma - 800.000$+ Verkaufsumwandlung',
        description: 'Ich konzentriere mich auf Direktvertrieb mit außergewöhnlichen Texten und Verkaufsstrategien im Performance-Marketing. Mit einer einzelnen Content-Strategie für den Dubai-Immobilienmarkt erzielte ich in nur 14 Tagen über 800.000$ an Verkaufskonversion. Hohe ROAS wurde mit 5.000 TL Werbeausgaben erzielt.',
        tag: 'Immobilien & ROI',
        metric1: '800.000$+ Verkauf in 14 Tagen',
        metric2: 'Hohe ROAS / ROI',
        metric3: 'Performance-Marketing'
      },
      // Yunexia SaaS - Buchhaltungssoftware
      yunexia: {
        title: 'Yunexia Buchhaltungs-SaaS - Softwareprojekt',
        description: 'Marketing und KI-Automatisierung für Cloud-basierte Buchhaltungssoftware von Yunexia entwickelt. Digitale Marketingstrategien, Lead-Generierungskampagnen und Kundenakquisitionsprozesse für SaaS-Produkteinführung verwaltet. Vertriebs- und Marketingprozesse mit KI-gestützter Automatisierung optimiert.',
        tag: 'Software & SaaS',
        metric1: 'SaaS-Marketing-Strategie',
        metric2: 'KI-Automatisierung',
        metric3: 'Lead-Generierung'
      },
      // PPG Tourismus-Panel - Tourismus-Software
      ppg: {
        title: 'PPG All In One Tourismus-Panel - Softwareprojekt',
        description: 'Mitwirkung bei Marketingprozessen für das von PMA Partner entwickelte PPG All In One Tourismus-Panel-System. Softwaretests, IT-Integrationen, UX-Optimierung und Marketing-Automatisierung durchgeführt. Werbestrategien und Vertriebsstrategien für tourismusspezifische Lösungen entwickelt.',
        tag: 'Tourismus & Software',
        metric1: 'Tourismus-Panel-System',
        metric2: 'Tests & Kontrolle',
        metric3: 'Marketing-Automatisierung'
      },
      // Kyrgyzstan
      kyrgyz: {
        title: 'Türkei - Kirgisistan Diplomatische Digitale Transformation',
        description: 'Die erste institutionelle digitale Medienstrategie wurde für TTEÖMER unter der Ausbildungsberatung der Botschaft der Republik Türkei in Bischkek entwickelt. Mit Multimedia- und Produktionsarbeit wurden der Markenwert und die digitale Sichtbarkeit der Institution stabilisiert.',
        tag: 'Diplomatie & Bildung',
        metric1: 'Institutionelle Digitale Strategie',
        metric2: 'Multimedia-Produktion',
        metric3: 'Internationale Institution'
      },
      // Teus Group
      teus: {
        title: 'Teus Group - National und International Medienpräsenz',
        description: 'Strategische Medienpräsenz wurde für Teus Groups Projekte in Antalya (Desire), Bali und Malediven in der nationalen und internationalen Presse bereitgestellt. Kommunikations- und PR-Aktivitäten während des Prozesses der Marke zur Erlangung des "Europas besten Hotelbau- und Designpreises" wurden koordiniert.',
        tag: 'Tourismus & Immobilien',
        metric1: 'Desire Antalya Projekt',
        metric2: 'Europa Preis',
        metric3: 'Nationale Pressearbeit'
      },
      // Energy
      energy: {
        title: 'Internationale Energieunternehmen Digitale Transformation',
        description: 'Das gesamte digitale Ökosystem (Web, Social Media, B2B Lead) des deutschen Energieunternehmens Mediawirt wurde nach modernen Standards überarbeitet. Markenbindung wurde mit e-commerce-kompatiblen Systemen und Content-Strategien maximiert.',
        tag: 'Energie & B2B',
        metric1: 'Mediawirt (Deutschland)',
        metric2: 'B2B Lead Generation',
        metric3: 'E-Commerce'
      },
      // EMO Optic
      emo: {
        title: 'EMO Optik - Türkei Markteintritt Strategie',
        description: 'Internationale Markteintritts- und Positionierungsprozesse wurden für 7 große internationale Optikmarken (Trussardi, Ana Hickmann usw.) gemanagt. Unternehmensvertriebskanäle wurden mit Meta Business Suite und E-Commerce-Infrastrukturinstallationen optimiert.',
        tag: 'E-Commerce & Mode',
        metric1: '7 Internationale Marken',
        metric2: 'Meta Business Suite',
        metric3: 'E-Commerce Infrastruktur'
      },
      // Hotel
      hotel: {
        title: 'Marktführerschaft mit datengesteuertem digitalen Marketing',
        description: 'Dank der Strategie, die ich bei Orange County Hotel Group mit begrenzten Ressourcen umgesetzt habe, habe ich eines der stärksten Social-Media-Konten in der Hotelkategorie in ganz Türkei aufgebaut. Eine Fotogalerie-Seite wurde als meistbesuchte Seitenstruktur erstellt. In unserem Kemer-Hotel erreichten wir durch SEO- und Content-Arbeit den 3. Platz auf Instagram und den 6. Platz auf Facebook.',
        tag: 'Hotel & Tourismus',
        metric1: 'Meistbesuchte Seite',
        metric2: 'Instagram 3. Platz',
        metric3: 'Facebook 6. Platz',
        photoLink: 'Fotogalerie'
      },
      // ASMAN
      asman: {
        title: 'Internationales Medienökosystem und Diplomatie',
        description: 'Ich habe die ASMAN Mediengruppe gegründet, ein mehrsprachiges und multinationales Jugendmediennetzwerk, das Zentralasien und Türkei verbindet. Mit IFJ (Internationale Journalistenföderation) Pressakkreditierung, die in 130 Ländern gültig ist, betreibe ich internationale Technologie- und Diplomatie-Journalismus.',
        tag: 'Medien & Diplomatie',
        metric1: '130 Länder IFJ Akkreditierung',
        metric2: 'ASMAN Mediengruppe',
        metric3: 'Diplomatie-Journalismus'
      }
    },
    portfolioPreview: {
      subtitle: 'Erfolgsgeschichten',
      title: 'Alle meine Arbeiten'
    },
    about: {
      heroTitle: 'Entdecken Sie die digitale Welt',
      heroSubtitle: 'Mit mir',
      aboutMe: 'Wer ist Batuhan Ateş?',
      bio1: 'Batuhan Ateş ist ein erstklassiger Fachmann für strategische Kommunikation mit internationaler Felderfahrung. Ateş positioniert das digitale Medienökosystem als wirksames Instrument zur grenzüberschreitenden Einflussnahme und kombiniert datengesteuerte digitale Marketingtechnologien mit fortschrittlichen globalen Vertretungsfähigkeiten, um seine Karriere dem Aufbau und der Aufrechterhaltung des internationalen Rufs von hochkarätigen Marken und Großprojekten zu widmen.',
      bio2: 'Sein globales operatives Netzwerk basiert auf aktiver Felderfahrung in strategisch wichtigen Märkten wie Portugal, Niederlande, Belgien, Katar und den Vereinigten Arabischen Emiraten. In diesen Regionen hat er Expertise entwickelt, indem er lokale Marktdynamiken und komplexe Kommunikationsprotokolle direkt erlebt hat.',
      bio3: 'Batuhan Ateş beherrscht Türkisch, Englisch, Deutsch, Russisch, Kirgisisch und Kasachisch und fungiert als starke mehrsprachige Brücke zwischen Europa und Eurasien; und setzt die Neudefinition von digitalem Marketing und Medien als die effektivsten strategischen Werkzeuge der modernen Ära fort.',
      bio4: 'Mit Expertise in Weißem-Haus-Kommunikationsstrategien, Dubai-Immobilienmarketing, internationaler Diplomatie-Journalismus und mehrsprachiger Medienkoordination hilft er Marken und Institutionen, ihre globale Sichtbarkeit zu erhöhen.',
      expertiseTitle: 'Meine Expertise',
      expertiseSubtitle: 'Was ich mache?',
      expertise1Title: 'Digitale Strategie',
      expertise1Desc: 'Ihr Wachstum mit datengesteuerten Marketingstrategien',
      expertise2Title: 'Inhaltsproduktion',
      expertise2Desc: 'Ihre digitale Präsenz mit kreativen Inhalten stärken',
      expertise3Title: 'Internationale Kommunikation',
      expertise3Desc: 'Effektive Kommunikationsstrategien auf globalen Märkten',
      expertise4Title: 'Mobile Produktion',
      expertise4Desc: 'Professionelle Video- und Fotoinhalte produzieren',
      jobRefs: 'Arbeitsreferenzen',
      successMetrics: 'Erfolgsmetriken',
      skills: 'Meine Fähigkeiten',
      tools: 'Werkzeuge, die ich verwende',
      languages: 'Sprachen',
      gallery: 'Galerie',
      photos: 'Meine Fotos',
      brandsTitle: 'Von mir gegründete Marken',
      brandsSubtitle: 'Meine Unternehmungen und Projekte',
      brandAsmanDesc: 'Mehrsprachiges Mediennetzwerk, das Zentralasien und die Türkei verbindet. Diplomatie-Journalismus mit IFJ-Akkreditierung.',
      brandItronyDesc: 'Antalya-basierte Digitalmarketing- und Social-Media-Agentur.',
      brandYarinigezDesc: 'Reisebüro und Reiseplattform in Antalya gegründet.'
    },
    press: {
      title: 'Pressewinkel',
      subtitle: 'Meine Medienauftritte und Schriften',
      mediaContent: 'Meine Medieninhalte',
      mediaPlatforms: 'In Medien und digitalen Plattformen',
      publications: 'Meine Veröffentlichungen',
      publicationsDesc: 'Artikel über digitales Marketing, Medien und internationale Beziehungen',
      newsArticles: 'Nachrichten & Artikel',
      platforms: 'Verschiedene Plattformen',
      reach: 'Reichweite',
      open: 'Öffnen'
    }
  }
}

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('tr')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('language')
    if (saved && translations[saved]) {
      setLanguage(saved)
    }
  }, [])

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang)
      localStorage.setItem('language', lang)
      setIsOpen(false)
    }
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, isOpen, setIsOpen }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
export default translations