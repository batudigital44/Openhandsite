import { createContext, useContext, useState, useEffect } from 'react'

const translations = {
  tr: {
    // Navigation
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      portfolio: 'Portfolyo',
      education: 'Eğitim',
      mediaPress: 'Medya & Basın',
      contact: 'İletişim',
      contactBtn: 'İletişime Geç'
    },
    // Footer
    footer: {
      ctaTitle: 'Hadi Beraber Çalışalım',
      ctaDesc: 'Dijitali öğrenmek, markanı konumlandırmak veya iş ortağı olmak için şimdi bana mail gönder görüşelim',
      subtitle: 'Uluslararası Medya Danışmanı | Dijital Pazarlama Uzmanı | Diplomasi Teknoloji Gazetecisi',
      quickLinks: 'Hızlı Linkler',
      contactTitle: 'İletişim'
    },
    // AboutPreview Component
    aboutPreview: {
      title: 'Beni Tanıyın',
      subtitle: 'Dijitalin sınırları',
      subtitleHighlight: 'olmadığını',
      subtitleSuffix: 'söyleyerek',
      description1: 'Uluslararası Medya Danışmanı, Dijital Pazarlama Uzmanı ve Diplomasi Teknoloji Gazetecisiyim. 800.000$+ Dubai emlak satış dönüşümü ve IFJ akreditasyonlu diplomasi haberciliği deneyimine sahibim.',
      description2: 'PMA Partner bünyesinde turizm teknolojileri ve otomasyon alanında stratejik dijital dönüşüm süreçlerini yönetiyorum. Münih merkezli TravelTech şirketinin İstanbul ve Stockholm ofisleriyle koordineli çalışarak uluslararası projelerde görev alıyorum.',
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
        subtitle: 'Uluslararası Medya Danışmanı | Dijital Pazarlama | Diplomasi Teknoloji Gazetecisi',
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
      // 1. PMA Partner
      pma: {
        title: 'PMA Partner — Uluslararası Pazarlama, Medya & Teknoloji',
        description: 'PMA Partner bünyesinde dört farklı ülkede turizm ve teknoloji markalarının dijital büyüme, pazarlama ve medya süreçlerinde aktif rol alıyorum. Dijital pazarlama stratejileri, SEO, Meta reklamları, içerik yönetimi, performans takibi, turizm teknolojileri, uluslararası ekiplerle koordinasyon ve yazılım/dijital ürün pazarlaması alanlarında çalışıyorum.',
        tag: 'Turizm & Teknoloji',
        metric1: '4 Farklı Ülke',
        metric2: 'Uluslararası Koordinasyon',
        metric3: 'Dijital Büyüme'
      },
      // 2. Conti Group
      conti: {
        title: 'Conti Group — Satış, SEO & Performans Pazarlaması',
        description: 'Conti Group\'ta yürüttüğüm kampanyalarda en yüksek satış hacmi ve içerik izlenmesi elde edildi. SEO\'da ulaşılan en yüksek hacim, Meta reklam performansı ve organik görünlük artışıyla ölçülebilir sonuçlar sağladım.',
        tag: 'Satış & SEO',
        metric1: 'En Yüksek Satış Hacmi',
        metric2: 'SEO Hacmi Artışı',
        metric3: 'Meta Reklam Performansı'
      },
      // 3. Istanbul Airlines
      istanbulAirlines: {
        title: 'Istanbul Airlines — Pazarlama & Dijital Büyüme',
        description: 'Istanbul Airlines\'ta pazarlama operasyonları, dijital medya, kampanya yönetimi, içerik stratejisi, marka görünürlüğü, SEO ve performans pazarlaması alanlarında aktif rol aldım. Satış, rezervasyon, lead, web trafiği, sosyal medya erişimi ve kampanya dönüşümü KPI\'larını takip ettim.',
        tag: 'Havacılık & Pazarlama',
        metric1: 'Dijital Medya',
        metric2: 'Kampanya Yönetimi',
        metric3: 'Marka Görünürlüğü'
      },
      // 4. DNA Hotels Egypt
      dna: {
        title: 'DNA Hotels — Mısır (Teknoloji × Pazarlama × Medya)',
        description: 'DNA Hotels Mısır\'da Technology × Marketing × Media üçlüsüyle çalıştım. Yazılım süreçleri, dijital sistemler, dijital pazarlama, SEO, performans, içerik stratejisi, medya stratejisi ve dijital görünürlük alanlarında kapsamlı hizmet verdim.',
        tag: 'Teknoloji × Pazarlama × Medya',
        metric1: 'Yazılım Süreçleri',
        metric2: 'Dijital Pazarlama',
        metric3: 'Medya Stratejisi'
      },
      // 5. Dubai Real Estate
      dubai: {
        title: 'Dubai Emlak — $800K+ Dönüşüm',
        description: 'Performans pazarlamasında sıradışı metinler ve satış stratejileriyle doğrudan satışa odaklandım. Dubai gayrimenkul pazarı için tasarladığım tek bir içerik stratejisiyle 14 günde 800.000$+ atfedilen satış dönüşümü sağladım. 5.000 TL reklam harcamasıyla yüksek ROAS elde edildi.',
        tag: 'Gayrimenkul & ROI',
        metric1: '$800K+ Atfedilen Satış',
        metric2: '5.000 TL Reklam Harcaması',
        metric3: 'Yüksek ROAS'
      },
      // 6. Yunexia SaaS
      yunexia: {
        title: 'Yunexia — SaaS & AI Otomasyonu',
        description: 'Yunexia\'nın bulut tabanlı muhasebe SaaS ürününün pazarlaması, AI otomasyonları, lead generation ve müşteri edinme süreçlerinde rol aldım. SaaS go-to-market, dijital pazarlama, AI otomasyonu, sales funnel ve customer acquisition alanlarında çalıştım.',
        tag: 'SaaS & AI',
        metric1: 'SaaS Pazarlama Stratejisi',
        metric2: 'AI Otomasyonu',
        metric3: 'Lead & Conversion'
      },
      // 7. PPG All in One
      ppg: {
        title: 'PPG All in One — Turizm Teknolojisi',
        description: 'PMA Partner tarafından geliştirilen turizm panelinde yazılım testleri, IT bağlantıları, kullanıcı deneyimi, pazarlama otomasyonları ve satış stratejilerinde rol aldım. Yazılım test kontrolü, kullanıcı deneyimi optimizasyonu ve turizm sektörüne özel çözümlerin tanıtımı alanlarında çalıştım.',
        tag: 'Turizm & Yazılım',
        metric1: 'Yazılım Testleri',
        metric2: 'Pazarlama Otomasyonu',
        metric3: 'Satış Stratejisi'
      },
      // 8. Orange County Hotels
      orangeCounty: {
        title: 'Orange County Hotels — Veri Odaklı Pazarlama',
        description: 'Orange County Hotels\'ta foto galeri sayfasını en çok ziyaret edilen sayfa haline getirdim. Instagram\'da Türkiye otel kategorisinde 3., Facebook\'ta 6. sıraya ulaştım. SEO, içerik stratejisi ve data-driven pazarlama ile ölçülebilir sonuçlar elde ettim.',
        tag: 'Otel & Turizm',
        metric1: 'Instagram 3. Sıra',
        metric2: 'Facebook 6. Sıra',
        metric3: 'En Çok Ziyaret Edilen Sayfa',
        photoLink: 'Foto Galeri'
      },
      // 9. Teus Group
      teus: {
        title: 'Teus Group — Uluslararası PR & Medya',
        description: 'Teus Group\'un Antalya (Desire), Bali ve Maldivler projeleri için ulusal ve uluslararası basında stratejik medya görünürlüğü sağladım. PR stratejisi, medya ilişkileri, uluslararası medya, içerik ve marka görünürlüğü alanlarında çalıştım. Desire Antalya\'nın "Avrupa\'nın En İyi Otel İnşaat ve Tasarım Ödülü" kazanma sürecinde iletişim koordinasyonu yürüttüm.',
        tag: 'PR & Medya',
        metric1: 'Ulusal Basın PR',
        metric2: 'Uluslararası Medya',
        metric3: 'Avrupa Ödülü'
      },
      // 10. Mediawirt Germany
      mediawirt: {
        title: 'Mediawirt — Almanya / Dijital Dönüşüm',
        description: 'Almanya merkezli enerji şirketinin web, sosyal medya, B2B lead generation ve e-ticaret uyumlu dijital ekosisteminin yeniden yapılandırılmasında rol aldım. Dijital ekosistem, website, sosyal medya, B2B lead generation, içerik stratejisi ve dijital konumlandırma alanlarında çalıştım.',
        tag: 'Dijital Dönüşüm',
        metric1: 'Dijital Ekosistem',
        metric2: 'B2B Lead Generation',
        metric3: 'E-Ticaret'
      },
      // 11. EMO Optik
      emo: {
        title: 'EMO Optik — Türkiye Pazar Girişi',
        description: '7 uluslararası optik markasının (Trussardi, Ana Hickmann vb.) Türkiye dijital pazarına giriş ve konumlandırma süreçlerini yönettim. Pazar girişi, dijital konumlandırma, Meta ekosistem, e-ticaret, marka yerelleştirme alanlarında çalıştım.',
        tag: 'E-Ticaret & Moda',
        metric1: '7 Uluslararası Marka',
        metric2: 'Pazar Girişi',
        metric3: 'E-Ticaret Altyapısı'
      },
      // 12. Kyrgyzstan
      kyrgyz: {
        title: 'Türkiye – Kırgızistan — Diplomatik Dijital Dönüşüm',
        description: 'T.C. Bişkek Büyükelçiliği bünyesindeki TTEÖMER için ilk kurumsal dijital medya stratejisini tasarladım. Dijital strateji, kurumsal iletişim, medya stratejisi, multimedya ve prodüksiyon alanlarında çalıştım. Dijital görünürlük, içerik erişimi ve kurumsal iletişim çıktıları elde ettim.',
        tag: 'Diplomasi & Eğitim',
        metric1: 'Kurumsal Dijital Strateji',
        metric2: 'Multimedya Prodüksiyon',
        metric3: 'Uluslararası Kurum'
      },
      // 13. ASMAN Media Group
      asman: {
        title: 'ASMAN Media Group — Kurucu / Uluslararası Medya',
        description: 'Kurucu olarak ASMAN Medya Grubu\'nu hayata geçirdim. Orta Asya ve Türkiye arasında köprü kuran çok dilli ve çok uluslu bir medya platformu geliştirdim. 130 ülkede geçerli IFJ basın akreditasyonuyla uluslararası düzeyde teknoloji ve diplomasi haberciliği yürütmekteyim.',
        tag: 'Kurucu & Medya',
        metric1: '130 Ülke IFJ Akreditasyonu',
        metric2: 'ASMAN Medya Grubu',
        metric3: 'Diplomasi Haberciliği'
      }
    },
    portfolioPreview: {
      subtitle: 'Başarılar ve Ödüller',
      title: 'Tüm Çalışmalarım',
      viewAll: 'Tümünü Gör'
    },
    about: {
      heroTitle: 'Dijital Dünyayı Keşfet',
      heroSubtitle: 'Benimle',
      aboutMe: 'Batuhan Ateş Kimdir?',
      bio1: 'Batuhan Ateş, uluslararası saha deneyimine sahip, seçkin bir stratejik iletişim profesyonelidir. Dijital medya ekosistemini sınır ötesi etki oluşturmanın güçlü bir aracı olarak konumlandıran Ateş, veri odaklı dijital pazarlama teknolojilerini gelişmiş bir küresel temsil kabiliyetiyle birleştirerek kariyerini yüksek profilli markaların ve büyük ölçekli projelerin uluslararası itibarını inşa etmeye ve sürdürülebilir kılmaya adamıştır.',
      bio2: 'Küresel operasyonel ağı; Portekiz, Hollanda, Belçika, Katar ve Birleşik Arap Emirlikleri gibi stratejik öneme sahip pazarlarda aktif saha deneyimine dayanmaktadır. Bu bölgelerde yerel pazar dinamiklerini ve karmaşık iletişim protokollerini doğrudan deneyimleyerek uzmanlaşmıştır.',
      bio3: 'Türkçe, İngilizce, Almanca, Rusça, Kırgızca ve Kazakça dillerine hâkim olan Batuhan Ateş, Avrupa ile Avrasya coğrafyaları arasında güçlü bir çok dilli köprü görevi görmekte; dijital pazarlama ve medyayı modern çağın en etkili stratejik araçları olarak yeniden tanımlamaya devam etmektedir.',
      bio4: 'Dubai gayrimenkul pazarlaması, uluslararası diplomasi haberciliği ve çok dilli medya koordinasyonu alanlarındaki uzmanlığıyla, markaların ve kurumların küresel görünürlüklerini artırmalarına yardımcı olmaktadır.',
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
      brandYarinigezDesc: 'Antalya\'da kurulan seyahat acentası ve gezi platformu.',
      partnersTitle: 'Referanslar ve Ortaklar',
      partnersSubtitle: 'Çalıştığım Firmalar ve İş Ortaklarım',
      partnersDesc: 'Uluslararası turizm teknolojileri, otomasyon ve dijital dönüşüm alanlarında küresel çapta faaliyet gösteren firmalarla işbirliği içindeyim.',
      partnersNote: 'Tüm referanslar ve ortaklarım ile gizlilik sözleşmesi kapsamında çalışmaktayım.',
      partnerPmaDesc: 'Münih merkezli TravelTech şirketi. Yapay zeka tabanlı turizm çözümleri, yazılımlar ve dijital stratejiler.',
      partnerDnaDesc: 'Avrupa\'da faaliyet gösteren premium otel zinciri. Turizm sektöründe lider konumda.',
      partnerContiDesc: 'Avrupa genelinde butik otel ve rezidans işletmeleri. Konukseverlik sektöründe yenilikçi yaklaşımlar.',
      partnerTypeTech: 'TravelTech',
      partnerTypeHotel: 'Otel Grubu'
    },
    press: {
      title: 'Medya & Basın',
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
      mediaPress: 'Media & Press',
      contact: 'Contact',
      contactBtn: 'Contact'
    },
    footer: {
      ctaTitle: "Let's Work Together",
      ctaDesc: "Let's get in touch to learn digital, position your brand, or become a partner",
      subtitle: 'International Media Consultant | Digital Marketing Expert | Diplomacy Technology Journalist',
      quickLinks: 'Quick Links',
      contactTitle: 'Contact'
    },
    // AboutPreview Component
    aboutPreview: {
      title: 'Get to Know Me',
      subtitle: 'By saying that the limits of',
      subtitleHighlight: 'digital have no bounds',
      subtitleSuffix: '',
      description1: 'I am an International Media Consultant, Digital Marketing Expert, and Diplomacy Technology Journalist. I have $800,000+ Dubai real estate sales conversion and IFJ-accredited diplomacy journalism experience.',
      description2: 'I manage strategic digital transformation processes at PMA Partner in tourism technology and automation. I work in coordination with the Munich-based TravelTech company\'s Istanbul and Stockholm offices on international projects.',
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
        subtitle: 'International Media Consultant | Digital Marketing | Diplomacy Technology Journalist',
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
      // 1. PMA Partner
      pma: {
        title: 'PMA Partner — International Marketing, Media & Technology',
        description: 'At PMA Partner, I actively take part in digital growth, marketing, and media processes of tourism and technology brands in four different countries. I work in areas such as digital marketing strategies, SEO, Meta ads, content management, performance tracking, tourism technologies, international team coordination, and software/digital product marketing.',
        tag: 'Tourism & Technology',
        metric1: '4 Different Countries',
        metric2: 'International Coordination',
        metric3: 'Digital Growth'
      },
      // 2. Conti Group
      conti: {
        title: 'Conti Group — Sales, SEO & Performance Marketing',
        description: 'In campaigns I managed at Conti Group, I achieved the highest sales volume and content views. I delivered measurable results with the highest SEO volume reached, Meta ad performance, and organic visibility increase.',
        tag: 'Sales & SEO',
        metric1: 'Highest Sales Volume',
        metric2: 'SEO Volume Increase',
        metric3: 'Meta Ad Performance'
      },
      // 3. Istanbul Airlines
      istanbulAirlines: {
        title: 'Istanbul Airlines — Marketing & Digital Growth',
        description: 'At Istanbul Airlines, I took an active role in marketing operations, digital media, campaign management, content strategy, brand visibility, SEO, and performance marketing. I tracked KPIs such as sales, reservations, leads, web traffic, social media reach, and campaign conversions.',
        tag: 'Aviation & Marketing',
        metric1: 'Digital Media',
        metric2: 'Campaign Management',
        metric3: 'Brand Visibility'
      },
      // 4. DNA Hotels Egypt
      dna: {
        title: 'DNA Hotels — Egypt (Technology × Marketing × Media)',
        description: 'At DNA Hotels Egypt, I worked with the Technology × Marketing × Media trio. I provided comprehensive services in software processes, digital systems, digital marketing, SEO, performance, content strategy, media strategy, and digital visibility.',
        tag: 'Technology × Marketing × Media',
        metric1: 'Software Processes',
        metric2: 'Digital Marketing',
        metric3: 'Media Strategy'
      },
      // 5. Dubai Real Estate
      dubai: {
        title: 'Dubai Real Estate — $800K+ Conversion',
        description: 'I focused on direct sales with extraordinary texts and sales strategies in performance marketing. With a single content strategy designed for the Dubai real estate market, I achieved $800,000+ in attributed sales conversion in just 14 days. High ROAS was achieved with 5,000 TL in ad spend.',
        tag: 'Real Estate & ROI',
        metric1: '$800K+ Attributed Sales',
        metric2: '5,000 TL Ad Spend',
        metric3: 'High ROAS'
      },
      // 6. Yunexia SaaS
      yunexia: {
        title: 'Yunexia — SaaS & AI Automation',
        description: 'I took a role in marketing Yunexia\'s cloud-based accounting SaaS product, AI automations, lead generation, and customer acquisition processes. I worked in areas such as SaaS go-to-market, digital marketing, AI automation, sales funnel, and customer acquisition.',
        tag: 'SaaS & AI',
        metric1: 'SaaS Marketing Strategy',
        metric2: 'AI Automation',
        metric3: 'Lead & Conversion'
      },
      // 7. PPG All in One
      ppg: {
        title: 'PPG All in One — Tourism Technology',
        description: 'At the tourism panel developed by PMA Partner, I played a role in software testing, IT connections, user experience, marketing automations, and sales strategies. I worked in software testing control, user experience optimization, and promotion of tourism-specific solutions.',
        tag: 'Tourism & Software',
        metric1: 'Software Testing',
        metric2: 'Marketing Automation',
        metric3: 'Sales Strategy'
      },
      // 8. Orange County Hotels
      orangeCounty: {
        title: 'Orange County Hotels — Data-Driven Marketing',
        description: 'At Orange County Hotels, I turned the photo gallery page into the most visited page. I reached 3rd place on Instagram and 6th place on Facebook in Turkey\'s hotel category. I achieved measurable results with SEO, content strategy, and data-driven marketing.',
        tag: 'Hotel & Tourism',
        metric1: 'Instagram 3rd Place',
        metric2: 'Facebook 6th Place',
        metric3: 'Most Visited Page',
        photoLink: 'Photo Gallery'
      },
      // 9. Teus Group
      teus: {
        title: 'Teus Group — International PR & Media',
        description: 'I provided strategic media visibility in national and international press for Teus Group\'s Antalya (Desire), Bali, and Maldives projects. I worked in PR strategy, media relations, international media, content, and brand visibility. I coordinated communication during Desire Antalya\'s process of winning the "Europe\'s Best Hotel Construction and Design Award".',
        tag: 'PR & Media',
        metric1: 'National Press PR',
        metric2: 'International Media',
        metric3: 'Europe Award'
      },
      // 10. Mediawirt Germany
      mediawirt: {
        title: 'Mediawirt — Germany / Digital Transformation',
        description: 'I played a role in restructuring the web, social media, B2B lead generation, and e-commerce-compatible digital ecosystem of a Germany-based energy company. I worked in digital ecosystem, website, social media, B2B lead generation, content strategy, and digital positioning.',
        tag: 'Digital Transformation',
        metric1: 'Digital Ecosystem',
        metric2: 'B2B Lead Generation',
        metric3: 'E-Commerce'
      },
      // 11. EMO Optik
      emo: {
        title: 'EMO Optic — Turkey Market Entry',
        description: 'I managed international market entry and positioning processes for 7 international optical brands (Trussardi, Ana Hickmann, etc.). I worked in market entry, digital positioning, Meta ecosystem, e-commerce, and brand localization.',
        tag: 'E-Commerce & Fashion',
        metric1: '7 International Brands',
        metric2: 'Market Entry',
        metric3: 'E-Commerce Infrastructure'
      },
      // 12. Kyrgyzstan
      kyrgyz: {
        title: 'Turkey – Kyrgyzstan — Diplomatic Digital Transformation',
        description: 'I designed the first institutional digital media strategy for TTEÖMER under the T.C. Embassy in Bishkek. I worked in digital strategy, institutional communication, media strategy, multimedia, and production. I achieved digital visibility, content reach, and institutional communication outputs.',
        tag: 'Diplomacy & Education',
        metric1: 'Institutional Digital Strategy',
        metric2: 'Multimedia Production',
        metric3: 'International Institution'
      },
      // 13. ASMAN Media Group
      asman: {
        title: 'ASMAN Media Group — Founder / International Media',
        description: 'As founder, I launched ASMAN Media Group. I developed a multilingual and multinational media platform bridging Central Asia and Turkey. With IFJ press accreditation valid in 130 countries, I conduct international technology and diplomacy journalism.',
        tag: 'Founder & Media',
        metric1: '130 Countries IFJ Accreditation',
        metric2: 'ASMAN Media Group',
        metric3: 'Diplomacy Journalism'
      }
    },
    portfolioPreview: {
      subtitle: 'Success Stories',
      title: 'All My Work',
      viewAll: 'View All'
    },
    about: {
      heroTitle: 'Explore the Digital World',
      heroSubtitle: 'With Me',
      aboutMe: 'Who is Batuhan Ateş?',
      bio1: 'Batuhan Ateş is an elite strategic communications professional with international field experience. Positioning the digital media ecosystem as a powerful tool for cross-border impact, Ateş combines data-driven digital marketing technologies with advanced global representation capabilities, dedicating his career to building and sustaining the international reputation of high-profile brands and large-scale projects.',
      bio2: 'His global operational network is based on active field experience in strategically important markets such as Portugal, Netherlands, Belgium, Qatar, and the United Arab Emirates. In these regions, he has developed expertise by directly experiencing local market dynamics and complex communication protocols.',
      bio3: 'Proficient in Turkish, English, German, Russian, Kyrgyz, and Kazakh, Batuhan Ateş serves as a powerful multilingual bridge between Europe and Eurasia geographies; continuing to redefine digital marketing and media as the most effective strategic tools of the modern era.',
      bio4: 'With expertise in Dubai real estate marketing, international diplomacy journalism, and multilingual media coordination, he helps brands and institutions increase their global visibility.',
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
      brandYarinigezDesc: 'Travel agency and travel platform established in Antalya.',
      partnersTitle: 'References & Partners',
      partnersSubtitle: 'Companies I Work With & Business Partners',
      partnersDesc: 'I collaborate with global firms in international tourism technology, automation and digital transformation.',
      partnersNote: 'All references and partners are covered under confidentiality agreements.',
      partnerPmaDesc: 'Munich-based TravelTech company. AI-powered tourism solutions, software and digital strategies.',
      partnerDnaDesc: 'Premium hotel chain operating in Europe. Leader in the tourism sector.',
      partnerContiDesc: 'Boutique hotels and residences across Europe. Innovative approaches in hospitality industry.',
      partnerTypeTech: 'TravelTech',
      partnerTypeHotel: 'Hotel Group'
    },
    press: {
      title: 'Media & Press',
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
      mediaPress: 'Medien & Presse',
      contact: 'Kontakt',
      contactBtn: 'Kontakt'
    },
    footer: {
      ctaTitle: 'Lassen Sie uns zusammenarbeiten',
      ctaDesc: 'Kontaktieren Sie mich, um Digitales zu lernen, Ihre Marke zu positionieren oder Partner zu werden',
      subtitle: 'Internationaler Medienberater | Digitalmarketing-Experte | Diplomatie-Technologie-Journalist',
      quickLinks: 'Schnelle Links',
      contactTitle: 'Kontakt'
    },
    // AboutPreview Component
    aboutPreview: {
      title: 'Lernen Sie mich kennen',
      subtitle: 'Indem ich sage, dass die Grenzen des',
      subtitleHighlight: 'Digitalen keine Grenzen haben',
      subtitleSuffix: '',
      description1: 'Ich bin Internationaler Medienberater, Digitalmarketing-Experte und Diplomatie-Technologie-Journalist. Ich habe 800.000$+ Dubai-Immobilienverkaufskonversion und IFJ-akkreditiertem Diplomatie-Journalismus Erfahrung.',
      description2: 'Ich leite strategische digitale Transformationsprozesse bei PMA Partner in Tourismustechnologie und -automatisierung. Ich arbeite in Koordination mit den Istanbul- und Stockholm-Büros des München basierten TravelTech-Unternehmens an internationalen Projekten.',
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
        subtitle: 'Internationaler Medienberater | Digitalmarketing | Diplomatie-Technologie-Journalist',
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
      // 1. PMA Partner
      pma: {
        title: 'PMA Partner — Internationales Marketing, Medien & Technologie',
        description: 'Bei PMA Partner bin ich aktiv an digitalem Wachstum, Marketing und Medienprozessen von Tourismus- und Technologiemarken in vier verschiedenen Ländern beteiligt. Ich arbeite in Bereichen wie digitale Marketingstrategien, SEO, Meta-Anzeigen, Content-Management, Performance-Tracking, Tourismustechnologien, internationaler Teamkoordination und Software-/Digitalproduktmarketing.',
        tag: 'Tourismus & Technologie',
        metric1: '4 Verschiedene Länder',
        metric2: 'Internationale Koordination',
        metric3: 'Digitales Wachstum'
      },
      // 2. Conti Group
      conti: {
        title: 'Conti Group — Vertrieb, SEO & Performance-Marketing',
        description: 'In Kampagnen, die ich bei Conti Group leitete, erzielte ich das höchste Verkaufsvolumen und die höchsten Content-Aufrufe. Ich lieferte messbare Ergebnisse mit dem höchsten erreichten SEO-Volumen, Meta-Anzeigenleistung und organischer Sichtbarkeitssteigerung.',
        tag: 'Vertrieb & SEO',
        metric1: 'Höchstes Verkaufsvolumen',
        metric2: 'SEO-Volumensteigerung',
        metric3: 'Meta-Anzeigenleistung'
      },
      // 3. Istanbul Airlines
      istanbulAirlines: {
        title: 'Istanbul Airlines — Marketing & Digitales Wachstum',
        description: 'Bei Istanbul Airlines war ich aktiv an Marketing-Operationen, digitalen Medien, Kampagnenmanagement, Content-Strategie, Markensichtbarkeit, SEO und Performance-Marketing beteiligt. Ich verfolgte KPIs wie Verkäufe, Reservierungen, Leads, Web-Traffic, Social-Media-Reichweite und Kampagnenkonversionen.',
        tag: 'Luftfahrt & Marketing',
        metric1: 'Digitale Medien',
        metric2: 'Kampagnenmanagement',
        metric3: 'Markensichtbarkeit'
      },
      // 4. DNA Hotels Egypt
      dna: {
        title: 'DNA Hotels — Ägypten (Technologie × Marketing × Medien)',
        description: 'Bei DNA Hotels Ägypten arbeitete ich mit dem Technologie × Marketing × Medien-Trio. Ich bot umfassende Dienstleistungen in Softwareprozessen, digitalen Systemen, digitalem Marketing, SEO, Performance, Content-Strategie, Medienstrategie und digitaler Sichtbarkeit an.',
        tag: 'Technologie × Marketing × Medien',
        metric1: 'Softwareprozesse',
        metric2: 'Digitales Marketing',
        metric3: 'Medienstrategie'
      },
      // 5. Dubai Real Estate
      dubai: {
        title: 'Dubai Immobilien — $800K+ Konversion',
        description: 'Ich konzentrierte mich auf Direktverkauf mit außergewöhnlichen Texten und Verkaufsstrategien im Performance-Marketing. Mit einer einzelnen Content-Strategie für den Dubai-Immobilienmarkt erzielte ich in nur 14 Tagen über 800.000$ an zugeschriebenem Verkaufsumsatz. Hohe ROAS wurde mit 5.000 TL Werbeausgaben erzielt.',
        tag: 'Immobilien & ROI',
        metric1: '$800K+ Zugeschriebener Umsatz',
        metric2: '5.000 TL Werbeausgaben',
        metric3: 'Hohe ROAS'
      },
      // 6. Yunexia SaaS
      yunexia: {
        title: 'Yunexia — SaaS & KI-Automatisierung',
        description: 'Ich war am Marketing von Yunexias Cloud-basiertem Buchhaltungs-SaaS-Produkt, KI-Automatisierungen, Lead-Generierung und Kundenakquisitionsprozessen beteiligt. Ich arbeitete in Bereichen wie SaaS Go-to-Market, digitalem Marketing, KI-Automatisierung, Sales-Funnel und Kundenakquisition.',
        tag: 'SaaS & KI',
        metric1: 'SaaS-Marketing-Strategie',
        metric2: 'KI-Automatisierung',
        metric3: 'Lead & Konversion'
      },
      // 7. PPG All in One
      ppg: {
        title: 'PPG All in One — Tourismustechnologie',
        description: 'Im von PMA Partner entwickelten Tourismus-Panel war ich an Softwaretests, IT-Verbindungen, Benutzererfahrung, Marketing-Automatisierungen und Vertriebsstrategien beteiligt. Ich arbeitete in Softwaretest-Kontrolle, Benutzererfahrungs-Optimierung und Promotion von tourismusspezifischen Lösungen.',
        tag: 'Tourismus & Software',
        metric1: 'Softwaretests',
        metric2: 'Marketing-Automatisierung',
        metric3: 'Vertriebsstrategie'
      },
      // 8. Orange County Hotels
      orangeCounty: {
        title: 'Orange County Hotels — Datengesteuertes Marketing',
        description: 'Bei Orange County Hotels habe ich die Fotogalerie-Seite zur meistbesuchten Seite gemacht. Ich erreichte den 3. Platz auf Instagram und den 6. Platz auf Facebook in der türkischen Hotelkategorie. Ich erzielte messbare Ergebnisse mit SEO, Content-Strategie und datengesteuertem Marketing.',
        tag: 'Hotel & Tourismus',
        metric1: 'Instagram 3. Platz',
        metric2: 'Facebook 6. Platz',
        metric3: 'Meistbesuchte Seite',
        photoLink: 'Fotogalerie'
      },
      // 9. Teus Group
      teus: {
        title: 'Teus Group — Internationales PR & Medien',
        description: 'Ich bot strategische Medienpräsenz in nationaler und internationaler Presse für Teus Groups Projekte in Antalya (Desire), Bali und Malediven. Ich arbeitete in PR-Strategie, Medienbeziehungen, internationalen Medien, Content und Markensichtbarkeit. Ich koordinierte die Kommunikation während Desire Antalyas Prozess zur Erlangung des "Europas besten Hotelbau- und Designpreises".',
        tag: 'PR & Medien',
        metric1: 'Nationale Pressearbeit',
        metric2: 'Internationale Medien',
        metric3: 'Europa Preis'
      },
      // 10. Mediawirt Germany
      mediawirt: {
        title: 'Mediawirt — Deutschland / Digitale Transformation',
        description: 'Ich war an der Neustrukturierung des Web-, Social-Media-, B2B-Lead-Generierungs- und E-Commerce-kompatiblen digitalen Ökosystems eines deutschen Energieunternehmens beteiligt. Ich arbeitete in digitalem Ökosystem, Website, Social Media, B2B-Lead-Generierung, Content-Strategie und digitaler Positionierung.',
        tag: 'Digitale Transformation',
        metric1: 'Digitales Ökosystem',
        metric2: 'B2B Lead Generation',
        metric3: 'E-Commerce'
      },
      // 11. EMO Optik
      emo: {
        title: 'EMO Optik — Türkei Markteintritt',
        description: 'Ich leitete internationale Markteintritts- und Positionierungsprozesse für 7 internationale Optikmarken (Trussardi, Ana Hickmann usw.). Ich arbeitete in Markteintritt, digitaler Positionierung, Meta-Ökosystem, E-Commerce und Markenlokalisierung.',
        tag: 'E-Commerce & Mode',
        metric1: '7 Internationale Marken',
        metric2: 'Markteintritt',
        metric3: 'E-Commerce Infrastruktur'
      },
      // 12. Kyrgyzstan
      kyrgyz: {
        title: 'Türkei – Kirgisistan — Diplomatische Digitale Transformation',
        description: 'Ich entwickelte die erste institutionelle digitale Medienstrategie für TTEÖMER unter der Botschaft der Republik Türkei in Bischkek. Ich arbeitete in digitaler Strategie, institutioneller Kommunikation, Medienstrategie, Multimedia und Produktion. Ich erzielte digitale Sichtbarkeit, Content-Reichweite und institutionelle Kommunikationsergebnisse.',
        tag: 'Diplomatie & Bildung',
        metric1: 'Institutionelle Digitale Strategie',
        metric2: 'Multimedia-Produktion',
        metric3: 'Internationale Institution'
      },
      // 13. ASMAN Media Group
      asman: {
        title: 'ASMAN Mediengruppe — Gründer / Internationale Medien',
        description: 'Als Gründer habe ich die ASMAN Mediengruppe gegründet. Ich entwickelte eine mehrsprachige und multinationale Medienplattform, die Zentralasien und Türkei verbindet. Mit IFJ-Pressakkreditierung, die in 130 Ländern gültig ist, betreibe ich internationalen Technologie- und Diplomatie-Journalismus.',
        tag: 'Gründer & Medien',
        metric1: '130 Länder IFJ Akkreditierung',
        metric2: 'ASMAN Mediengruppe',
        metric3: 'Diplomatie-Journalismus'
      }
    },
    portfolioPreview: {
      subtitle: 'Erfolgsgeschichten',
      title: 'Alle meine Arbeiten',
      viewAll: 'Alle ansehen'
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
      brandYarinigezDesc: 'Reisebüro und Reiseplattform in Antalya gegründet.',
      partnersTitle: 'Referenzen & Partner',
      partnersSubtitle: 'Firmen und Geschäftspartner',
      partnersDesc: 'Ich arbeite mit globalen Unternehmen in internationaler Tourismustechnologie, Automatisierung und digitaler Transformation zusammen.',
      partnersNote: 'Alle Referenzen und Partner unterliegen Vertraulichkeitsvereinbarungen.',
      partnerPmaDesc: 'München-basierte TravelTech-Unternehmen. KI-gestützte Tourismuslösungen, Software und digitale Strategien.',
      partnerDnaDesc: 'Premium-Hotelkette in Europa. Führend im Tourismussektor.',
      partnerContiDesc: 'Boutique-Hotels und Residenzen in ganz Europa. Innovative Ansätze in der Gastfreundschaft.',
      partnerTypeTech: 'TravelTech',
      partnerTypeHotel: 'Hotelgruppe'
    },
    press: {
      title: 'Medien & Presse',
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