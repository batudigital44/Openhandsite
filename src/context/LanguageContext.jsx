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
      projectsEyebrow: 'Portfolyo',
      projectsTitle: 'Öne Çıkan Projeler',
      resultsLabel: 'Sonuçlar',
      expertiseLabel: 'Uzmanlık',
      kpi: {
        stat1Number: '25+',
        stat1Label: 'Marka ve Kurum',
        stat2Number: '10+',
        stat2Label: 'Uluslararası Proje ve İş Birliği',
        stat3Number: '$800K+',
        stat3Label: 'Ölçülen Satış Dönüşümü',
        stat4Number: '1M+',
        stat4Label: 'İçerik Etkileşimi',
        stat5Number: '14 Gün',
        stat5Label: '$800K+ Dönüşüm Süresi'
      },
      kpiAchievementsTitle: 'KPI Başarıları',
      kpiAchievementsDesc: 'Gerçek, ölçülebilir ve açıklanabilir sonuçlar',
      tech: {
        title: 'Teknoloji ve Uzmanlık Alanları',
        item1Title: 'Performance Marketing',
        item1Desc: 'Meta Ads · Google Ads · Yandex Ads · Conversion Strategy',
        item2Title: 'MarTech & Automation',
        item2Desc: 'HubSpot · Mautic · Zapier · CRM · Marketing Automation',
        item3Title: 'AI & Generative AI',
        item3Desc: 'Prompt Engineering · AI Workflows · Content Automation',
        item4Title: 'Digital Product & SaaS',
        item4Desc: 'SaaS Marketing · Product Launch · Lead Generation · Customer Acquisition',
        item5Title: 'Web & SEO',
        item5Desc: 'WordPress · HTML/CSS · Technical SEO · Content Strategy',
        item6Title: 'International Communication',
        item6Desc: 'PR · Media Relations · International Partnerships · Crisis Communication'
      },
      // 1. Dubai Gayrimenkul
      dubai: {
        title: 'Dubai Gayrimenkul — Performans Pazarlaması ve $800K+ Satış Dönüşümü',
        description: 'Dubai gayrimenkul pazarına yönelik satış odaklı dijital pazarlama stratejisi geliştirdim.',
        description2: 'İçerik stratejisi, performans reklamları ve dönüşüm odaklı iletişim yaklaşımını bir araya getirerek potansiyel müşterilerin satış sürecine taşınmasına odaklandım.',
        tag: 'Gayrimenkul & Performans',
        metric1: '14 günde $800.000+ satış dönüşümü',
        metric2: '5.000 TL reklam bütçesi',
        metric3: 'Performans odaklı içerik stratejisi',
        metric4: 'Satış dönüşümüne yönelik reklam optimizasyonu',
        expertise: 'Performance Marketing · Conversion Strategy · Content Strategy · Digital Advertising'
      },
      // 2. Yunexia
      yunexia: {
        title: 'Yunexia — SaaS Ürün Pazarlaması ve AI Otomasyonları',
        description: 'Bulut tabanlı muhasebe SaaS ürününün pazarlama ve müşteri edinme süreçlerinde görev aldım.',
        description2: 'Ürün lansmanı kapsamında dijital pazarlama stratejisi, lead generation, içerik üretimi ve müşteri edinme süreçlerinin geliştirilmesine katkı sağladım.',
        description3: 'Ayrıca yapay zekâ destekli otomasyonlarla satış ve pazarlama süreçlerinin daha verimli ve ölçeklenebilir hale getirilmesine yönelik çalışmalar gerçekleştirdim.',
        tag: 'SaaS & AI',
        metric1: 'SaaS Pazarlama',
        metric2: 'Ürün Lansmanı',
        metric3: 'Lead Generation',
        metric4: 'AI Otomasyonları'
      },
      // 3. PPG All In One
      ppg: {
        title: 'PPG All In One — TravelTech ve Dijital Ürün',
        description: 'PMA Partner tarafından geliştirilen PPG All In One turizm teknolojileri platformunun pazarlama ve dijital dönüşüm süreçlerinde görev aldım.',
        description2: 'Yazılım testleri, IT bağlantıları, kullanıcı deneyimi ve pazarlama otomasyonları üzerinde çalışarak ürünün pazara sunulmasına yönelik süreçlere katkı sağladım.',
        tag: 'TravelTech & Dijital Ürün',
        metric1: 'Yazılım Testleri',
        metric2: 'Kullanıcı Deneyimi',
        metric3: 'Pazarlama Otomasyonları'
      },
      // 4. Türkiye–Kırgızistan
      kyrgyz: {
        title: 'Türkiye–Kırgızistan — Kurumsal Dijital Dönüşüm',
        description: 'T.C. Bişkek Büyükelçiliği Eğitim Müşavirliği bünyesindeki TTEÖMER için kurumsal dijital medya stratejisinin oluşturulmasına katkı sağladım.',
        description2: 'Kurumsal sosyal medya, multimedya içerik üretimi ve dijital iletişim süreçlerinin geliştirilmesine yönelik çalışmalar gerçekleştirdim.',
        description3: 'Çok kültürlü ve uluslararası bir kurumun dijital iletişim ihtiyaçlarına yönelik sürdürülebilir bir iletişim yapısının oluşturulmasına katkı sağladım.',
        tag: 'Kamu & Diplomasi',
        metric1: 'Kurumsal Dijital Strateji',
        metric2: 'Multimedya İçerik',
        metric3: 'Uluslararası Kurum'
      },
      // 5. Teus Group
      teus: {
        title: 'Teus Group — Uluslararası PR ve Marka İletişimi',
        description: 'Teus Group\'un Türkiye ve uluslararası pazarlardaki gayrimenkul ve turizm projeleri için marka iletişimi, PR ve medya görünürlüğü çalışmalarını yönettim. Proje, Avrupa\'nın En İyi Tasarım Ödülü\'nü kazandı ve kısa sürede yerli ve ulusal basının dikkatini çekti.',
        description2: 'Ulusal ve uluslararası medya ilişkileri, içerik planlaması, proje iletişimi ve sektörel paydaşlarla koordinasyon süreçlerinde görev aldım.',
        description3: 'DESIRE Antalya başta olmak üzere farklı pazarlardaki projelerin iletişim süreçlerinde şirket, medya, ajans ve sektörel partnerler arasında koordinasyon sağladım.',
        tag: 'PR & Marka İletişimi',
        metric1: 'Avrupa Tasarım Ödülü',
        metric2: 'Ulusal & Uluslararası Basın',
        metric3: 'Medya İlişkileri'
      },
      // 6. Mediawirt
      mediawirt: {
        title: 'Mediawirt — Almanya | B2B Dijital Dönüşüm',
        description: 'Almanya merkezli Mediawirt\'in dijital ekosisteminin geliştirilmesi ve B2B müşteri edinme süreçlerinin iyileştirilmesi üzerine çalıştım.',
        description2: '4 farklı sektörde web, sosyal medya, içerik, B2B lead generation ve dijital satış süreçlerini bütünleşik bir dijital strateji içerisinde ele aldım.',
        description3: 'CRM ve pazarlama otomasyonlarının dijital kanallarla entegrasyonuna yönelik çalışmalar gerçekleştirdim.',
        tag: 'B2B & Dijital Dönüşüm',
        metric1: 'B2B Lead Generation',
        metric2: 'CRM Entegrasyonu',
        metric3: 'Pazarlama Otomasyonu'
      },
      // 7. EMO Optik
      emo: {
        title: 'EMO Optik — 7 Uluslararası Markanın Türkiye Dijital Pazarı',
        description: 'Uluslararası optik markalarının Türkiye dijital pazarına giriş ve konumlandırma süreçlerinde görev aldım.',
        description2: 'Trussardi ve Ana Hickmann gibi markalar dahil olmak üzere 7 uluslararası optik markasının dijital pazarlama ve e-ticaret süreçlerine katkı sağladım.',
        description3: 'Meta Business Suite ve e-ticaret altyapılarının kullanımıyla dijital satış ve iletişim kanallarının geliştirilmesine yönelik çalışmalar gerçekleştirdim.',
        tag: 'E-Ticaret & Optik',
        metric1: '7 Uluslararası Marka',
        metric2: 'Pazar Girişi',
        metric3: 'E-Ticaret'
      },
      // 8. Orange County
      orangeCounty: {
        title: 'Orange County Hotels — Veri Odaklı Dijital Pazarlama',
        description: 'Orange County Hotels bünyesinde sosyal medya ve dijital pazarlama stratejisinin oluşturulması, performans takibi ve içerik süreçlerinin yönetilmesinde görev aldım.',
        description2: 'SEO, içerik ve sosyal medya çalışmalarını birlikte kullanarak markanın dijital görünürlüğünü geliştirmeye odaklandım.',
        description3: 'Web intro videosu, sitenin en çok ziyaret alan sayfalarından biri haline getirildi; kullanıcı deneyimi ve oturum sayısı belirgin şekilde arttı. Trend içerikler ve kültürel akımlar markaya uyarlanarak takipçi artışı sağlandı.',
        tag: 'Otel & Turizm',
        resultsLabel: 'Ölçülebilir sonuçlar',
        metric1: 'BoomSocial Instagram: Türkiye 3. sıra',
        metric2: 'Facebook: 6. sıra',
        metric3: 'En çok ziyaret edilen sayfalar',
        photoLink: 'Foto Galeri'
      },
      // 9. ASMAN
      asman: {
        title: 'ASMAN Medya — Uluslararası Medya ve Diplomasi',
        description: 'Türkiye ile Orta Asya arasında medya ve iletişim alanında çalışmalar yürüten ASMAN Medya\'nın kuruluş ve yönetim süreçlerinde görev aldım.',
        description2: 'Bişkek merkezli medya girişimi kapsamında haber, röportaj, dijital içerik, fotoğraf ve multimedya çalışmalarına katkı sağladım.',
        description3: 'Uluslararası medya ve diplomasi alanındaki çalışmalarımı Orta Asya deneyimimle birleştirerek çok kültürlü bir medya ağı geliştirmeye odaklandım. Girişim, kısa sürede büyükelçiliklerin ve basın platformlarının desteğini kazandı.',
        tag: 'Medya & Diplomasi',
        metric1: 'Kurucu & Yönetim',
        metric2: 'Çok Kültürlü Medya Ağı',
        metric3: 'Diplomasi Haberciliği'
      }
    },
    portfolioPreview: {
      subtitle: 'Portfolyo',
      title: 'Öne Çıkan Projeler',
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
      projectsEyebrow: 'Portfolio',
      projectsTitle: 'Featured Projects',
      resultsLabel: 'Results',
      expertiseLabel: 'Expertise',
      kpi: {
        stat1Number: '25+',
        stat1Label: 'Brands & Institutions',
        stat2Number: '10+',
        stat2Label: 'International Projects & Collaborations',
        stat3Number: '$800K+',
        stat3Label: 'Measured Sales Conversion',
        stat4Number: '1M+',
        stat4Label: 'Content Engagement',
        stat5Number: '14 Days',
        stat5Label: '$800K+ Conversion Time'
      },
      kpiAchievementsTitle: 'KPI Achievements',
      kpiAchievementsDesc: 'Real, measurable, and explainable results',
      tech: {
        title: 'Technologies & Areas of Expertise',
        item1Title: 'Performance Marketing',
        item1Desc: 'Meta Ads · Google Ads · Yandex Ads · Conversion Strategy',
        item2Title: 'MarTech & Automation',
        item2Desc: 'HubSpot · Mautic · Zapier · CRM · Marketing Automation',
        item3Title: 'AI & Generative AI',
        item3Desc: 'Prompt Engineering · AI Workflows · Content Automation',
        item4Title: 'Digital Product & SaaS',
        item4Desc: 'SaaS Marketing · Product Launch · Lead Generation · Customer Acquisition',
        item5Title: 'Web & SEO',
        item5Desc: 'WordPress · HTML/CSS · Technical SEO · Content Strategy',
        item6Title: 'International Communication',
        item6Desc: 'PR · Media Relations · International Partnerships · Crisis Communication'
      },
      // 1. Dubai Real Estate
      dubai: {
        title: 'Dubai Real Estate — Performance Marketing & $800K+ Sales Conversion',
        description: 'I developed a sales-driven digital marketing strategy for the Dubai real estate market.',
        description2: 'By combining content strategy, performance ads, and a conversion-oriented communication approach, I focused on moving potential buyers into the sales process.',
        tag: 'Real Estate & Performance',
        metric1: '$800,000+ sales conversion in 14 days',
        metric2: '5,000 TL ad budget',
        metric3: 'Performance-driven content strategy',
        metric4: 'Ad optimization for sales conversion',
        expertise: 'Performance Marketing · Conversion Strategy · Content Strategy · Digital Advertising'
      },
      // 2. Yunexia
      yunexia: {
        title: 'Yunexia — SaaS Product Marketing & AI Automations',
        description: 'I took part in the marketing and customer acquisition processes of a cloud-based accounting SaaS product.',
        description2: 'As part of the product launch, I contributed to the digital marketing strategy, lead generation, content production, and the development of customer acquisition processes.',
        description3: 'I also worked on making sales and marketing processes more efficient and scalable through AI-powered automations.',
        tag: 'SaaS & AI',
        metric1: 'SaaS Marketing',
        metric2: 'Product Launch',
        metric3: 'Lead Generation',
        metric4: 'AI Automations'
      },
      // 3. PPG All In One
      ppg: {
        title: 'PPG All In One — TravelTech & Digital Product',
        description: 'I took part in the marketing and digital transformation processes of PPG All In One, a tourism technology platform developed by PMA Partner.',
        description2: 'By working on software testing, IT integrations, user experience, and marketing automations, I contributed to the product\'s go-to-market processes.',
        tag: 'TravelTech & Digital Product',
        metric1: 'Software Testing',
        metric2: 'User Experience',
        metric3: 'Marketing Automations'
      },
      // 4. Türkiye–Kyrgyzstan
      kyrgyz: {
        title: 'Türkiye–Kyrgyzstan — Institutional Digital Transformation',
        description: 'I contributed to building the institutional digital media strategy for TTEÖMER, under the Education Counsellorship of the Embassy of the Republic of Türkiye in Bishkek.',
        description2: 'I carried out work on institutional social media, multimedia content production, and the development of digital communication processes.',
        description3: 'I contributed to building a sustainable communication structure for the digital communication needs of a multicultural, international institution.',
        tag: 'Public Sector & Diplomacy',
        metric1: 'Institutional Digital Strategy',
        metric2: 'Multimedia Content',
        metric3: 'International Institution'
      },
      // 5. Teus Group
      teus: {
        title: 'Teus Group — International PR & Brand Communications',
        description: 'I managed brand communications, PR, and media visibility for Teus Group\'s real estate and tourism projects in Türkiye and international markets. The project won Europe\'s Best Design Award and quickly drew the attention of local and national press.',
        description2: 'I took part in national and international media relations, content planning, project communications, and coordination with industry stakeholders.',
        description3: 'I coordinated between the company, media, agencies, and industry partners across communication processes for projects in different markets, led by DESIRE Antalya.',
        tag: 'PR & Brand Communications',
        metric1: 'Europe Design Award',
        metric2: 'National & International Press',
        metric3: 'Media Relations'
      },
      // 6. Mediawirt
      mediawirt: {
        title: 'Mediawirt — Germany | B2B Digital Transformation',
        description: 'I worked on developing the digital ecosystem of Germany-based Mediawirt and improving its B2B customer acquisition processes.',
        description2: 'Across 4 different industries, I handled web, social media, content, B2B lead generation, and digital sales processes within an integrated digital strategy.',
        description3: 'I carried out work on integrating CRM and marketing automations with digital channels.',
        tag: 'B2B & Digital Transformation',
        metric1: 'B2B Lead Generation',
        metric2: 'CRM Integration',
        metric3: 'Marketing Automation'
      },
      // 7. EMO Optik
      emo: {
        title: 'EMO Optik — Turkey Digital Market for 7 International Brands',
        description: 'I took part in the market entry and positioning processes of international eyewear brands into Türkiye\'s digital market.',
        description2: 'I contributed to the digital marketing and e-commerce processes of 7 international eyewear brands, including Trussardi and Ana Hickmann.',
        description3: 'I carried out work on developing digital sales and communication channels using Meta Business Suite and e-commerce infrastructures.',
        tag: 'E-Commerce & Eyewear',
        metric1: '7 International Brands',
        metric2: 'Market Entry',
        metric3: 'E-Commerce'
      },
      // 8. Orange County
      orangeCounty: {
        title: 'Orange County Hotels — Data-Driven Digital Marketing',
        description: 'At Orange County Hotels, I took part in building the social media and digital marketing strategy, performance tracking, and managing content processes.',
        description2: 'I focused on improving the brand\'s digital visibility by combining SEO, content, and social media efforts.',
        description3: 'The website intro video became one of the most visited pages, significantly improving user experience and session numbers. Trending content and cultural movements were adapted to the brand, driving follower growth.',
        tag: 'Hotel & Tourism',
        resultsLabel: 'Measurable results',
        metric1: 'BoomSocial Instagram: #3 in Türkiye',
        metric2: 'Facebook: #6',
        metric3: 'Among most visited pages',
        photoLink: 'Photo Gallery'
      },
      // 9. ASMAN
      asman: {
        title: 'ASMAN Media — International Media & Diplomacy',
        description: 'I took part in the founding and management of ASMAN Media, which carries out media and communication work between Türkiye and Central Asia.',
        description2: 'Within the Bishkek-based media venture, I contributed to news, interviews, digital content, photography, and multimedia work.',
        description3: 'I focused on developing a multicultural media network by combining my work in international media and diplomacy with my Central Asia experience. The venture quickly gained the support of embassies and press platforms.',
        tag: 'Media & Diplomacy',
        metric1: 'Founder & Management',
        metric2: 'Multicultural Media Network',
        metric3: 'Diplomacy Journalism'
      }
    },
    portfolioPreview: {
      subtitle: 'Portfolio',
      title: 'Featured Projects',
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
      projectsEyebrow: 'Portfolio',
      projectsTitle: 'Ausgewählte Projekte',
      resultsLabel: 'Ergebnisse',
      expertiseLabel: 'Fachgebiete',
      kpi: {
        stat1Number: '25+',
        stat1Label: 'Marken & Institutionen',
        stat2Number: '10+',
        stat2Label: 'Internationale Projekte & Kooperationen',
        stat3Number: '$800K+',
        stat3Label: 'Gemessene Verkaufskonversion',
        stat4Number: '1M+',
        stat4Label: 'Content-Engagement',
        stat5Number: '14 Tage',
        stat5Label: '$800K+ Konversionszeit'
      },
      kpiAchievementsTitle: 'KPI-Erfolge',
      kpiAchievementsDesc: 'Echte, messbare und nachvollziehbare Ergebnisse',
      tech: {
        title: 'Technologien & Fachgebiete',
        item1Title: 'Performance Marketing',
        item1Desc: 'Meta Ads · Google Ads · Yandex Ads · Conversion Strategy',
        item2Title: 'MarTech & Automation',
        item2Desc: 'HubSpot · Mautic · Zapier · CRM · Marketing Automation',
        item3Title: 'AI & Generative AI',
        item3Desc: 'Prompt Engineering · AI Workflows · Content Automation',
        item4Title: 'Digital Product & SaaS',
        item4Desc: 'SaaS Marketing · Product Launch · Lead Generation · Customer Acquisition',
        item5Title: 'Web & SEO',
        item5Desc: 'WordPress · HTML/CSS · Technical SEO · Content Strategy',
        item6Title: 'International Communication',
        item6Desc: 'PR · Media Relations · International Partnerships · Crisis Communication'
      },
      // 1. Dubai Immobilien
      dubai: {
        title: 'Dubai Immobilien — Performance-Marketing & $800K+ Verkaufskonversion',
        description: 'Ich entwickelte eine verkaufsorientierte digitale Marketingstrategie für den Dubai-Immobilienmarkt.',
        description2: 'Durch die Kombination von Content-Strategie, Performance-Anzeigen und einem konversionsorientierten Kommunikationsansatz konzentrierte ich mich darauf, potenzielle Käufer in den Verkaufsprozess zu führen.',
        tag: 'Immobilien & Performance',
        metric1: '$800.000+ Verkaufskonversion in 14 Tagen',
        metric2: '5.000 TL Werbebudget',
        metric3: 'Performance-orientierte Content-Strategie',
        metric4: 'Anzeigenoptimierung für Verkaufskonversion',
        expertise: 'Performance Marketing · Conversion Strategy · Content Strategy · Digital Advertising'
      },
      // 2. Yunexia
      yunexia: {
        title: 'Yunexia — SaaS-Produktmarketing & KI-Automatisierungen',
        description: 'Ich war an den Marketing- und Kundenakquisitionsprozessen eines Cloud-basierten Buchhaltungs-SaaS-Produkts beteiligt.',
        description2: 'Im Rahmen des Produktlaunches trug ich zur digitalen Marketingstrategie, Lead-Generierung, Content-Produktion und zur Weiterentwicklung der Kundenakquisitionsprozesse bei.',
        description3: 'Außerdem arbeitete ich daran, Vertriebs- und Marketingprozesse durch KI-gestützte Automatisierungen effizienter und skalierbarer zu gestalten.',
        tag: 'SaaS & KI',
        metric1: 'SaaS-Marketing',
        metric2: 'Produktlaunch',
        metric3: 'Lead-Generierung',
        metric4: 'KI-Automatisierungen'
      },
      // 3. PPG All In One
      ppg: {
        title: 'PPG All In One — TravelTech & Digitales Produkt',
        description: 'Ich war an den Marketing- und digitalen Transformationsprozessen von PPG All In One beteiligt, einer von PMA Partner entwickelten Tourismus-Technologieplattform.',
        description2: 'Durch die Arbeit an Softwaretests, IT-Anbindungen, Benutzererfahrung und Marketing-Automatisierungen trug ich zur Markteinführung des Produkts bei.',
        tag: 'TravelTech & Digitales Produkt',
        metric1: 'Softwaretests',
        metric2: 'Benutzererfahrung',
        metric3: 'Marketing-Automatisierungen'
      },
      // 4. Türkei–Kirgisistan
      kyrgyz: {
        title: 'Türkei–Kirgisistan — Institutionelle Digitale Transformation',
        description: 'Ich trug zum Aufbau der institutionellen digitalen Medienstrategie für TTEÖMER bei, unter der Bildungsberatung der Botschaft der Republik Türkei in Bischkek.',
        description2: 'Ich führte Arbeiten zu institutionellen sozialen Medien, Multimedia-Content-Produktion und der Weiterentwicklung digitaler Kommunikationsprozesse durch.',
        description3: 'Ich trug zum Aufbau einer nachhaltigen Kommunikationsstruktur für die digitalen Kommunikationsbedürfnisse einer multikulturellen, internationalen Institution bei.',
        tag: 'Öffentlicher Sektor & Diplomatie',
        metric1: 'Institutionelle Digitale Strategie',
        metric2: 'Multimedia-Content',
        metric3: 'Internationale Institution'
      },
      // 5. Teus Group
      teus: {
        title: 'Teus Group — Internationale PR & Markenkommunikation',
        description: 'Ich leitete Markenkommunikation, PR und Medienpräsenz für die Immobilien- und Tourismusprojekte der Teus Group in der Türkei und auf internationalen Märkten. Das Projekt gewann Europas besten Designpreis und erregte schnell die Aufmerksamkeit lokaler und nationaler Presse.',
        description2: 'Ich war an nationalen und internationalen Medienbeziehungen, Content-Planung, Projektkommunikation und Koordination mit Branchenakteuren beteiligt.',
        description3: 'Ich koordinierte zwischen Unternehmen, Medien, Agenturen und Branchenpartnern in den Kommunikationsprozessen für Projekte auf verschiedenen Märkten, angeführt von DESIRE Antalya.',
        tag: 'PR & Markenkommunikation',
        metric1: 'Europa Designpreis',
        metric2: 'Nationale & Internationale Presse',
        metric3: 'Medienbeziehungen'
      },
      // 6. Mediawirt
      mediawirt: {
        title: 'Mediawirt — Deutschland | B2B Digitale Transformation',
        description: 'Ich arbeitete an der Weiterentwicklung des digitalen Ökosystems des deutschen Unternehmens Mediawirt und an der Verbesserung seiner B2B-Kundenakquisitionsprozesse.',
        description2: 'In 4 verschiedenen Branchen behandelte ich Web, Social Media, Content, B2B-Lead-Generierung und digitale Vertriebsprozesse innerhalb einer integrierten digitalen Strategie.',
        description3: 'Ich führte Arbeiten zur Integration von CRM und Marketing-Automatisierungen mit digitalen Kanälen durch.',
        tag: 'B2B & Digitale Transformation',
        metric1: 'B2B Lead Generation',
        metric2: 'CRM-Integration',
        metric3: 'Marketing-Automatisierung'
      },
      // 7. EMO Optik
      emo: {
        title: 'EMO Optik — Türkei Digitalmarkt für 7 Internationale Marken',
        description: 'Ich war an den Markteintritts- und Positionierungsprozessen internationaler Optikmarken auf dem türkischen Digitalmarkt beteiligt.',
        description2: 'Ich trug zu den digitalen Marketing- und E-Commerce-Prozessen von 7 internationalen Optikmarken bei, darunter Trussardi und Ana Hickmann.',
        description3: 'Ich führte Arbeiten zur Entwicklung digitaler Vertriebs- und Kommunikationskanäle unter Verwendung von Meta Business Suite und E-Commerce-Infrastrukturen durch.',
        tag: 'E-Commerce & Optik',
        metric1: '7 Internationale Marken',
        metric2: 'Markteintritt',
        metric3: 'E-Commerce'
      },
      // 8. Orange County
      orangeCounty: {
        title: 'Orange County Hotels — Datengesteuertes Digitales Marketing',
        description: 'Bei Orange County Hotels war ich am Aufbau der Social-Media- und Digital-Marketing-Strategie, am Performance-Tracking und an der Steuerung der Content-Prozesse beteiligt.',
        description2: 'Ich konzentrierte mich darauf, die digitale Sichtbarkeit der Marke durch die Kombination von SEO, Content und Social Media zu verbessern.',
        description3: 'Das Intro-Video der Website wurde zu einer der meistbesuchten Seiten und steigerte Benutzererfahrung und Sitzungszahlen deutlich. Trendinhalte und kulturelle Strömungen wurden auf die Marke übertragen und steigerten die Followerzahlen.',
        tag: 'Hotel & Tourismus',
        resultsLabel: 'Messbare Ergebnisse',
        metric1: 'BoomSocial Instagram: Platz 3 in der Türkei',
        metric2: 'Facebook: Platz 6',
        metric3: 'Unter den meistbesuchten Seiten',
        photoLink: 'Fotogalerie'
      },
      // 9. ASMAN
      asman: {
        title: 'ASMAN Medya — Internationale Medien & Diplomatie',
        description: 'Ich war an der Gründung und Leitung von ASMAN Medya beteiligt, das Medien- und Kommunikationsarbeit zwischen der Türkei und Zentralasien durchführt.',
        description2: 'Im Rahmen des in Bischkek ansässigen Medienvorhabens trug ich zu Nachrichten, Interviews, digitalem Content, Fotografie und Multimedia-Arbeiten bei.',
        description3: 'Ich konzentrierte mich darauf, ein multikulturelles Mediennetzwerk aufzubauen, indem ich meine Arbeit in internationalen Medien und Diplomatie mit meiner Zentralasien-Erfahrung verband. Das Vorhaben gewann schnell die Unterstützung von Botschaften und Presseplattformen.',
        tag: 'Medien & Diplomatie',
        metric1: 'Gründer & Leitung',
        metric2: 'Multikulturelles Mediennetzwerk',
        metric3: 'Diplomatie-Journalismus'
      }
    },
    portfolioPreview: {
      subtitle: 'Portfolio',
      title: 'Ausgewählte Projekte',
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