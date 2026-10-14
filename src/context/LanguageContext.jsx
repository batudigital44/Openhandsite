import { createContext, useContext, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { parsePath, localizedPath, DEFAULT_LANG } from '../i18n/routes'

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
      ctaDesc: 'Dijital pazarlama eğitimi, marka konumlandırma ya da iş birliği için bana yazın, birlikte planlayalım.',
      copyright: 'Batuhan Ateş. Tüm hakları saklıdır.',
      subtitle: 'Dijital Pazarlama & Yapay Zekâ Uzmanı | Uluslararası Medya Danışmanı | Gazeteci',
      quickLinks: 'Hızlı Linkler',
      contactTitle: 'İletişim'
    },
    // AboutPreview Component
    aboutPreview: {
      title: 'Beni Tanıyın',
      subtitle: 'Dijitalin sınırı yok,',
      subtitleHighlight: 'benim çalışma alanım da',
      subtitleSuffix: '',
      description1: "Dijital pazarlama ve yapay zekâ pazarlama uzmanı, uluslararası medya danışmanı ve gazeteciyim. Kırgızistan, Almanya, İsveç, BAE ve Türkiye'de turizm, teknoloji ve medya markalarıyla çalıştım. Dubai gayrimenkul projesinde 14 günde 800.000$+ satış dönüşümü sağladım.",
      description2: "PMA Partner'da turizm teknolojileri ve pazarlama otomasyonu alanında dijital dönüşüm projelerini yönetiyorum. Münih merkezli bir TravelTech şirketinin İstanbul ve Stockholm ekipleriyle birlikte uluslararası projelerde çalışıyorum.",
      stats: {
        brands: 'Marka ve kurum yönetimi',
        international: 'Uluslararası işbirliği',
        success: 'Çalışma dili',
        engagement: 'Toplam içerik görüntülenmesi'
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
        subtitle: 'Dijital Pazarlama & Yapay Zekâ Uzmanı | Uluslararası Medya Danışmanı | Gazeteci',
        badge: 'Antalya · Stockholm · Uzaktan',
        summary: 'Antalya merkezli dijital pazarlama ve yapay zekâ pazarlama uzmanıyım. Turizm teknolojileri, performans pazarlaması, SEO ve uluslararası PR alanlarında 25+ markayla çalıştım; Dubai gayrimenkul projesinde 14 günde 800.000$+ satış dönüşümü sağladım.',
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
      formSubmitted: 'Mesajınız alındı, en kısa sürede dönüş yapacağım.',
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
        subject: 'Lütfen bir konu seçin',
        sendFailed: 'Mesaj gönderilemedi. Lütfen digital@batuhanates.com adresine doğrudan yazın.'
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
      socialMedia: 'Sosyal Medya',
      summary: 'Dijital pazarlama, eğitim veya iş birliği için iletişime geçin. Formu doldurun ya da digital@batuhanates.com adresine doğrudan yazın.'
    },
    // Portfolio
    portfolio: {
      certificates: 'Sertifikalar ve Başarılar',
      certificatesDesc: 'Aldığım eğitimler ve sertifikalar',
      summary: 'PMA Partner, TEUS Group, Conti Group ve Dubai emlak projelerinde ölçülebilir sonuçlar ürettim: satış dönüşümü, SEO büyümesi ve reklam performansı.',
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
        description: 'Conti Group için yürüttüğüm kampanyalarda şirketin en yüksek satış hacmine ve içerik izlenmesine ulaşıldı. SEO trafiği, Meta reklam performansı ve organik görünürlükte ölçülebilir artış sağladım.',
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
        description: 'Dubai gayrimenkul pazarı için hazırladığım içerik ve satış stratejisiyle 14 günde 800.000$+ atfedilen satış dönüşümü sağladım. Toplam reklam harcaması 5.000 TL oldu.',
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
      },
      // 14. Belconti Resort Hotel
      belconti: {
        title: 'Belconti Resort Hotel — 90 Bin İzlenme Rekoru',
        description: 'Belconti Resort Hotel için ürettiğim mobil içerik 90.000 izlenmeye ulaşarak son 2 yılın en çok izlenen içeriği oldu. İçerik, otelin en yüksek takipçi kazanımını sağladı ve dijital görünürlüğünü zirveye taşıdı.',
        tag: 'Otel & Viral İçerik',
        metric1: '90.000+ İzlenme',
        metric2: 'Son 2 Yılın Rekoru',
        metric3: 'En Yüksek Takipçi Kazanımı',
        articleLink: 'LinkedIn Makalesi',
        videoLink: 'Instagram Videosu'
      },
      // 15. Belek Üniversitesi × Türk Hava Yolları
      belekUni: {
        title: 'Belek Üniversitesi × Türk Hava Yolları — Rekor Marka İşbirliği',
        description: 'Belek Üniversitesi için hazırladığım Türk Hava Yolları temalı içerik, üniversitenin açılışından bu yana en çok izlenen video oldu ve ilk büyük marka işbirliğini temsil etti. Başarı, Antalya Vali Yardımcısı tarafından bizzat tebrik ve teşekkürle taçlandırıldı.',
        tag: 'Üniversite & Havacılık',
        metric1: 'Tüm Zamanların Rekoru',
        metric2: 'THY Marka İşbirliği',
        metric3: 'Vali Yardımcısı Teşekkürü',
        videoLink: 'Instagram Videosu'
      }
    },
    portfolioPreview: {
      subtitle: 'Seçili Projeler',
      title: 'Öne Çıkan Çalışmalarım',
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
      partnerTypeHotel: 'Otel Grubu',
      summary: 'Gazetecilikten dijital pazarlamaya uzanan bir kariyer: Kırgızistan, Almanya, İsveç ve Türkiye\'de medya, turizm ve teknoloji markalarıyla çalıştım. PMA Partner\'da TravelTech ve pazarlama otomasyonu projelerini yönetiyorum.',
      experienceTitle: 'Deneyim',
      experienceSubtitle: 'Profesyonel geçmişim',
      experience: [
        { period: '2026', role: 'Dijital Pazarlama ve Yapay Zekâ Uzmanı', org: 'PMA Partner', desc: 'Stockholm (uzaktan). MarTech/TravelTech, büyüme pazarlaması, pazarlamada yapay zekâ entegrasyonları (analitik, raporlama, içerik), PR ve marka iletişimi.' },
        { period: '2024–2026', role: 'Türkiye Bölge PR/Pazarlama Danışmanı', org: 'TEUS Group', desc: 'Kurumsal web siteleri, sosyal medya ve dijital pazarlama, CRM lead yönetimi, içerik ve metin yazarlığı, kurumsal iletişim.' },
        { period: '2023–2024', role: 'Kurumsal İletişim Müdür Yardımcısı', org: 'Antalya Belek Üniversitesi', desc: 'Web sitesi, sosyal medya, protokol, basın ve medya ilişkileri.' },
        { period: '2023', role: 'DACH Bölgesi Sosyal Medya ve Dijital Pazarlama Sorumlusu', org: 'Mediawirt Consulting (Almanya)', desc: '' },
        { period: '2022', role: 'Cluster Dijital Medya Sorumlusu', org: 'Orange County Hotels', desc: '' },
        { period: '2021', role: 'Cluster Sosyal Medya Asistanı', org: 'Sueno Hotels', desc: 'Video prodüksiyon: Premiere Pro, After Effects.' },
        { period: '2020–2021', role: 'Avrasya Bölge Muhabiri / Haber Editörü', org: 'Qırım Haber Ajansı (QHA)', desc: '' },
        { period: '2019–2020', role: 'Kurucu Ortak', org: 'Asman Digital Media Agency', desc: 'Orta Asya ve Türkiye\'de dijital pazarlama ve gazetecilik hizmetleri.' },
        { period: '2016–2019', role: 'Gazetecilik ve basın stajları', org: 'Manavgat Medya Grubu ve Manas Üniversitesi', desc: '' }
      ],
      certificatesTitle: 'Sertifikalar',
      certificatesSubtitle: 'Eğitimler ve sertifikalar',
      certificatesList: [
        { name: 'Generative AI Fundamentals', issuer: 'Databricks', year: '2026' },
        { name: 'Konaklamada Yapay Zekâ Uygulamaları / RecepAI', issuer: 'Hotel Linkage', year: '2026' },
        { name: 'ChatGPT 2026: Prompt Mühendisliği, İçerik ve Görsel Üretme', issuer: 'Udemy', year: '2026' },
        { name: 'Uluslararası Basın Akreditasyonu', issuer: 'CamerapixoPress', year: '2025' },
        { name: 'HTML CSS', issuer: 'BTK Akademi', year: '2025' },
        { name: 'SEO Eğitimi 2025: Sıfırdan Uzmanlığa', issuer: 'Udemy', year: '2025' }
      ],
      languagesTitle: 'Diller',
      languagesValue: 'Türkçe, İngilizce, Rusça, Kırgızca, Kazakça',
      educationTitle: 'Eğitim',
      educationValue: 'Kırgızistan-Türkiye Manas Üniversitesi',
      faqTitle: 'SSS',
      faqSubtitle: 'Sıkça Sorulan Sorular',
      faq: [
        { q: 'Batuhan Ateş kimdir?', a: 'Antalya merkezli dijital pazarlama ve yapay zekâ pazarlama uzmanı, uluslararası medya danışmanı ve gazeteci. Türkiye, Almanya, İsveç, Kırgızistan ve BAE\'de medya, turizm ve teknoloji markalarıyla çalıştı.' },
        { q: 'Hangi hizmetleri veriyor?', a: 'Performans pazarlaması (Meta, Google, Yandex Ads), SEO, pazarlama otomasyonu ve CRM (HubSpot, Mautic, Zapier), yapay zekâ ile içerik üretimi, PR ve kurumsal iletişim, eğitim ve danışmanlık.' },
        { q: 'Eğitimlere nasıl başvurulur?', a: 'Eğitimler sayfasındaki "Başvuru Yap" formunu doldurarak ya da digital@batuhanates.com adresine e-posta göndererek.' },
        { q: 'Hangi dillerde çalışıyor?', a: 'Türkçe, İngilizce, Rusça, Kırgızca ve Kazakça.' }
      ]
    },
    education: {
      summary: 'Emlak danışmanları, otelciler ve markalar için uygulamalı dijital pazarlama ve yapay zekâ eğitimleri veriyorum. İçerik üretimi, Meta reklamları, CRM ve otomasyon konularında butik atölyeler düzenliyorum.',
      pastEventsTitle: 'Geçmiş Etkinlikler',
      pastEventsSubtitle: 'Gerçekleştirdiğim atölyeler',
      pastEvents: [
        {
          title: 'Emlak Danışmanları için Yüz Yüze Dijital Dönüşüm Atölyesi',
          location: 'Teus Group ofisi, Muratpaşa · Antalya',
          topics: [
            'Yapay zekâ ile profesyonel içerik üretimi',
            'Mobil içerik üretimi',
            'Meta reklam stratejileri',
            'CRM ve otomatik müşteri yönetimi'
          ],
          quota: 'Kontenjan: 8 kişilik butik atölye'
        }
      ]
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
      open: 'Aç',
      summary: 'Uluslararası basın akreditasyonlu gazeteci olarak haber, röportaj ve analizlerim ulusal ve uluslararası medyada yayımlandı.'
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
      ctaDesc: "Write to me about digital marketing training, brand positioning, or a partnership, and let's plan it together.",
      copyright: "Batuhan Ateş. All rights reserved.",
      subtitle: 'Digital Marketing & AI Expert | International Media Consultant | Journalist',
      quickLinks: 'Quick Links',
      contactTitle: 'Contact'
    },
    // AboutPreview Component
    aboutPreview: {
      title: 'Get to Know Me',
      subtitle: 'Digital has no limits,',
      subtitleHighlight: 'and neither does my field of work',
      subtitleSuffix: '',
      description1: 'I am a digital marketing and AI marketing expert, international media consultant, and journalist. I have worked with tourism, technology, and media brands in Kyrgyzstan, Germany, Sweden, the UAE, and Türkiye. I achieved $800,000+ in sales conversion in 14 days on a Dubai real estate project.',
      description2: 'At PMA Partner I manage digital transformation projects in tourism technology and marketing automation. I work on international projects together with the Istanbul and Stockholm teams of a Munich-based TravelTech company.',
      stats: {
        brands: 'Brand and institution management',
        international: 'International collaboration',
        success: 'Working languages',
        engagement: 'Total content views'
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
        subtitle: 'Digital Marketing & AI Expert | International Media Consultant | Journalist',
        badge: 'Antalya · Stockholm · Remote',
        summary: 'I am a digital marketing and AI marketing expert based in Antalya. I have worked with 25+ brands in tourism technology, performance marketing, SEO, and international PR, and achieved $800,000+ in sales conversion in 14 days on a Dubai real estate project.',
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
      formSubmitted: 'Your message has been received. I will get back to you as soon as possible.',
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
        subject: 'Please select a subject',
        sendFailed: 'The message could not be sent. Please write directly to digital@batuhanates.com.'
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
      socialMedia: 'Social Media',
      summary: 'Get in touch for digital marketing, training, or a partnership. Fill in the form or write directly to digital@batuhanates.com.'
    },
    portfolio: {
      certificates: 'Certificates and Achievements',
      certificatesDesc: 'Trainings and certificates I have obtained',
      summary: 'I have produced measurable results for PMA Partner, TEUS Group, Conti Group, and Dubai real estate projects: sales conversion, SEO growth, and ad performance.',
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
        description: 'In the campaigns I ran for Conti Group, the company reached its highest sales volume and content views. I delivered measurable growth in SEO traffic, Meta ad performance, and organic visibility.',
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
        description: 'With the content and sales strategy I prepared for the Dubai real estate market, I achieved $800,000+ in attributed sales conversion in 14 days. Total ad spend was 5,000 TL.',
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
      },
      // 14. Belconti Resort Hotel
      belconti: {
        title: 'Belconti Resort Hotel — 90K Views Record',
        description: 'The mobile content I produced for Belconti Resort Hotel reached 90,000 views, becoming the most-viewed content of the last 2 years. It delivered the hotel\'s highest follower gain and took its digital visibility to the top.',
        tag: 'Hotel & Viral Content',
        metric1: '90,000+ Views',
        metric2: 'Last 2 Years Record',
        metric3: 'Highest Follower Gain',
        articleLink: 'LinkedIn Article',
        videoLink: 'Instagram Video'
      },
      // 15. Belek University × Turkish Airlines
      belekUni: {
        title: 'Belek University × Turkish Airlines — Record Brand Collaboration',
        description: 'The Turkish Airlines-themed content I created for Belek University became the most-viewed video since the university\'s opening and represented its first major brand collaboration. The achievement was crowned with personal congratulations and thanks from the Antalya Deputy Governor.',
        tag: 'University & Aviation',
        metric1: 'All-Time Record',
        metric2: 'Turkish Airlines Collaboration',
        metric3: 'Deputy Governor\'s Thanks',
        videoLink: 'Instagram Video'
      }
    },
    portfolioPreview: {
      subtitle: 'Selected Projects',
      title: 'My Featured Work',
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
      partnerTypeHotel: 'Hotel Group',
      summary: 'A career that runs from journalism to digital marketing: I have worked with media, tourism, and technology brands in Kyrgyzstan, Germany, Sweden, and Türkiye. At PMA Partner I manage TravelTech and marketing automation projects.',
      experienceTitle: 'Experience',
      experienceSubtitle: 'My professional background',
      experience: [
        { period: '2026', role: 'Digital Marketing and AI Expert', org: 'PMA Partner', desc: 'Stockholm (remote). MarTech/TravelTech, growth marketing, AI integrations in marketing (analytics, reporting, content), PR and brand communication.' },
        { period: '2024–2026', role: 'Türkiye Regional PR/Marketing Consultant', org: 'TEUS Group', desc: 'Corporate websites, social media and digital marketing, CRM lead management, content and copywriting, corporate communication.' },
        { period: '2023–2024', role: 'Assistant Corporate Communication Manager', org: 'Antalya Belek University', desc: 'Website, social media, protocol, press and media relations.' },
        { period: '2023', role: 'DACH Region Social Media and Digital Marketing Lead', org: 'Mediawirt Consulting (Germany)', desc: '' },
        { period: '2022', role: 'Cluster Digital Media Lead', org: 'Orange County Hotels', desc: '' },
        { period: '2021', role: 'Cluster Social Media Assistant', org: 'Sueno Hotels', desc: 'Video production: Premiere Pro, After Effects.' },
        { period: '2020–2021', role: 'Eurasia Regional Reporter / News Editor', org: 'Qırım News Agency (QHA)', desc: '' },
        { period: '2019–2020', role: 'Co-Founder', org: 'Asman Digital Media Agency', desc: 'Digital marketing and journalism services across Central Asia and Türkiye.' },
        { period: '2016–2019', role: 'Journalism and press internships', org: 'Manavgat Media Group and Manas University', desc: '' }
      ],
      certificatesTitle: 'Certificates',
      certificatesSubtitle: 'Trainings and certificates',
      certificatesList: [
        { name: 'Generative AI Fundamentals', issuer: 'Databricks', year: '2026' },
        { name: 'AI Applications in Hospitality / RecepAI', issuer: 'Hotel Linkage', year: '2026' },
        { name: 'ChatGPT 2026: Prompt Engineering, Content and Image Generation', issuer: 'Udemy', year: '2026' },
        { name: 'International Press Accreditation', issuer: 'CamerapixoPress', year: '2025' },
        { name: 'HTML CSS', issuer: 'BTK Akademi', year: '2025' },
        { name: 'SEO Training 2025: From Beginner to Expert', issuer: 'Udemy', year: '2025' }
      ],
      languagesTitle: 'Languages',
      languagesValue: 'Turkish, English, Russian, Kyrgyz, Kazakh',
      educationTitle: 'Education',
      educationValue: 'Kyrgyzstan-Türkiye Manas University',
      faqTitle: 'FAQ',
      faqSubtitle: 'Frequently Asked Questions',
      faq: [
        { q: 'Who is Batuhan Ateş?', a: 'A digital marketing and AI marketing expert, international media consultant, and journalist based in Antalya. He has worked with media, tourism, and technology brands in Türkiye, Germany, Sweden, Kyrgyzstan, and the UAE.' },
        { q: 'What services does he provide?', a: 'Performance marketing (Meta, Google, Yandex Ads), SEO, marketing automation and CRM (HubSpot, Mautic, Zapier), AI content production, PR and corporate communication, training and consulting.' },
        { q: 'How can I apply for the trainings?', a: 'By filling in the "Apply" form on the Trainings page or by sending an email to digital@batuhanates.com.' },
        { q: 'Which languages does he work in?', a: 'Turkish, English, Russian, Kyrgyz, and Kazakh.' }
      ]
    },
    education: {
      summary: 'I deliver hands-on digital marketing and AI training for real estate agents, hoteliers, and brands. I run boutique workshops on content production, Meta ads, CRM, and automation.',
      pastEventsTitle: 'Past Events',
      pastEventsSubtitle: 'Workshops I have delivered',
      pastEvents: [
        {
          title: 'In-Person Digital Transformation Workshop for Real Estate Agents',
          location: 'Teus Group office, Muratpaşa · Antalya',
          topics: [
            'Professional content production with AI',
            'Mobile content production',
            'Meta ad strategies',
            'CRM and automated customer management'
          ],
          quota: 'Capacity: boutique workshop for 8 people'
        }
      ]
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
      open: 'Open',
      summary: 'As an internationally press-accredited journalist, my news, interviews, and analyses have been published in national and international media.'
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
      ctaDesc: 'Schreiben Sie mir zu Digitalmarketing-Schulungen, Markenpositionierung oder einer Partnerschaft, und wir planen es gemeinsam.',
      copyright: 'Batuhan Ateş. Alle Rechte vorbehalten.',
      subtitle: 'Digitalmarketing- & KI-Experte | Internationaler Medienberater | Journalist',
      quickLinks: 'Schnelle Links',
      contactTitle: 'Kontakt'
    },
    // AboutPreview Component
    aboutPreview: {
      title: 'Lernen Sie mich kennen',
      subtitle: 'Das Digitale kennt keine Grenzen,',
      subtitleHighlight: 'mein Arbeitsfeld ebenso wenig',
      subtitleSuffix: '',
      description1: 'Ich bin Experte für Digitalmarketing und KI-Marketing, internationaler Medienberater und Journalist. Ich habe mit Tourismus-, Technologie- und Medienmarken in Kirgisistan, Deutschland, Schweden, den VAE und der Türkei gearbeitet. Bei einem Dubai-Immobilienprojekt erzielte ich in 14 Tagen über 800.000$ Verkaufskonversion.',
      description2: 'Bei PMA Partner leite ich digitale Transformationsprojekte in Tourismustechnologie und Marketing-Automatisierung. Gemeinsam mit den Istanbuler und Stockholmer Teams eines Münchner TravelTech-Unternehmens arbeite ich an internationalen Projekten.',
      stats: {
        brands: 'Marken- und Institutionsmanagement',
        international: 'Internationale Zusammenarbeit',
        success: 'Arbeitssprachen',
        engagement: 'Gesamte Content-Aufrufe'
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
        subtitle: 'Digitalmarketing- & KI-Experte | Internationaler Medienberater | Journalist',
        badge: 'Antalya · Stockholm · Remote',
        summary: 'Ich bin Experte für Digitalmarketing und KI-Marketing mit Sitz in Antalya. Ich habe mit über 25 Marken in Tourismustechnologie, Performance-Marketing, SEO und internationaler PR gearbeitet und bei einem Dubai-Immobilienprojekt in 14 Tagen über 800.000$ Verkaufskonversion erzielt.',
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
      formSubmitted: 'Ihre Nachricht ist eingegangen. Ich melde mich so schnell wie möglich bei Ihnen.',
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
        subject: 'Bitte wählen Sie einen Betreff',
        sendFailed: 'Die Nachricht konnte nicht gesendet werden. Bitte schreiben Sie direkt an digital@batuhanates.com.'
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
      socialMedia: 'Soziale Medien',
      summary: 'Kontaktieren Sie mich für Digitalmarketing, Schulungen oder eine Partnerschaft. Füllen Sie das Formular aus oder schreiben Sie direkt an digital@batuhanates.com.'
    },
    portfolio: {
      certificates: 'Zertifikate und Erfolge',
      certificatesDesc: 'Schulungen und Zertifikate, die ich erworben habe',
      summary: 'Für PMA Partner, TEUS Group, Conti Group und Dubai-Immobilienprojekte habe ich messbare Ergebnisse erzielt: Verkaufskonversion, SEO-Wachstum und Anzeigenleistung.',
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
        description: 'In den Kampagnen, die ich für Conti Group durchführte, erreichte das Unternehmen sein höchstes Verkaufsvolumen und die höchsten Content-Aufrufe. Ich erzielte messbares Wachstum bei SEO-Traffic, Meta-Anzeigenleistung und organischer Sichtbarkeit.',
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
        description: 'Mit dem Content und der Verkaufsstrategie, die ich für den Dubai-Immobilienmarkt erstellte, erzielte ich in 14 Tagen über 800.000$ an zugeschriebenem Verkaufsumsatz. Die gesamten Werbeausgaben betrugen 5.000 TL.',
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
      },
      // 14. Belconti Resort Hotel
      belconti: {
        title: 'Belconti Resort Hotel — Rekord mit 90.000 Aufrufen',
        description: 'Der mobile Content, den ich für das Belconti Resort Hotel produzierte, erreichte 90.000 Aufrufe und wurde damit zum meistgesehenen Inhalt der letzten 2 Jahre. Er sorgte für das höchste Follower-Wachstum des Hotels und brachte dessen digitale Sichtbarkeit auf ein neues Niveau.',
        tag: 'Hotel & Viraler Content',
        metric1: '90.000+ Aufrufe',
        metric2: 'Rekord der letzten 2 Jahre',
        metric3: 'Höchstes Follower-Wachstum',
        articleLink: 'LinkedIn-Artikel',
        videoLink: 'Instagram-Video'
      },
      // 15. Belek Universität × Turkish Airlines
      belekUni: {
        title: 'Belek Universität × Turkish Airlines — Rekord-Markenkooperation',
        description: 'Der Turkish-Airlines-Content, den ich für die Belek Universität erstellte, wurde zum meistgesehenen Video seit der Eröffnung der Universität und stellte ihre erste große Markenkooperation dar. Der Erfolg wurde mit persönlichen Glückwünschen und Dank des Vize-Gouverneurs von Antalya gekrönt.',
        tag: 'Universität & Luftfahrt',
        metric1: 'Allzeitrekord',
        metric2: 'Turkish Airlines Kooperation',
        metric3: 'Dank des Vize-Gouverneurs',
        videoLink: 'Instagram-Video'
      }
    },
    portfolioPreview: {
      subtitle: 'Ausgewählte Projekte',
      title: 'Meine ausgewählten Arbeiten',
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
      partnerTypeHotel: 'Hotelgruppe',
      summary: 'Eine Karriere vom Journalismus zum Digitalmarketing: Ich habe mit Medien-, Tourismus- und Technologiemarken in Kirgisistan, Deutschland, Schweden und der Türkei gearbeitet. Bei PMA Partner leite ich TravelTech- und Marketing-Automatisierungsprojekte.',
      experienceTitle: 'Erfahrung',
      experienceSubtitle: 'Mein beruflicher Werdegang',
      experience: [
        { period: '2026', role: 'Experte für Digitalmarketing und KI', org: 'PMA Partner', desc: 'Stockholm (remote). MarTech/TravelTech, Growth-Marketing, KI-Integrationen im Marketing (Analytik, Reporting, Content), PR und Markenkommunikation.' },
        { period: '2024–2026', role: 'PR-/Marketingberater Region Türkei', org: 'TEUS Group', desc: 'Unternehmenswebsites, Social Media und Digitalmarketing, CRM-Lead-Management, Content und Texten, Unternehmenskommunikation.' },
        { period: '2023–2024', role: 'Stellvertretender Leiter der Unternehmenskommunikation', org: 'Antalya Belek Universität', desc: 'Website, Social Media, Protokoll, Presse- und Medienbeziehungen.' },
        { period: '2023', role: 'Leiter Social Media und Digitalmarketing Region DACH', org: 'Mediawirt Consulting (Deutschland)', desc: '' },
        { period: '2022', role: 'Cluster-Leiter Digitale Medien', org: 'Orange County Hotels', desc: '' },
        { period: '2021', role: 'Cluster-Assistent Social Media', org: 'Sueno Hotels', desc: 'Videoproduktion: Premiere Pro, After Effects.' },
        { period: '2020–2021', role: 'Reporter / Nachrichtenredakteur Region Eurasien', org: 'Qırım Nachrichtenagentur (QHA)', desc: '' },
        { period: '2019–2020', role: 'Mitgründer', org: 'Asman Digital Media Agency', desc: 'Digitalmarketing- und Journalismus-Dienstleistungen in Zentralasien und der Türkei.' },
        { period: '2016–2019', role: 'Journalismus- und Pressepraktika', org: 'Manavgat Mediengruppe und Manas Universität', desc: '' }
      ],
      certificatesTitle: 'Zertifikate',
      certificatesSubtitle: 'Schulungen und Zertifikate',
      certificatesList: [
        { name: 'Generative AI Fundamentals', issuer: 'Databricks', year: '2026' },
        { name: 'KI-Anwendungen im Gastgewerbe / RecepAI', issuer: 'Hotel Linkage', year: '2026' },
        { name: 'ChatGPT 2026: Prompt Engineering, Content und Bildgenerierung', issuer: 'Udemy', year: '2026' },
        { name: 'Internationale Presseakkreditierung', issuer: 'CamerapixoPress', year: '2025' },
        { name: 'HTML CSS', issuer: 'BTK Akademi', year: '2025' },
        { name: 'SEO-Schulung 2025: Vom Anfänger zum Experten', issuer: 'Udemy', year: '2025' }
      ],
      languagesTitle: 'Sprachen',
      languagesValue: 'Türkisch, Englisch, Russisch, Kirgisisch, Kasachisch',
      educationTitle: 'Ausbildung',
      educationValue: 'Kirgisistan-Türkei Manas Universität',
      faqTitle: 'FAQ',
      faqSubtitle: 'Häufig gestellte Fragen',
      faq: [
        { q: 'Wer ist Batuhan Ateş?', a: 'Ein Experte für Digitalmarketing und KI-Marketing, internationaler Medienberater und Journalist mit Sitz in Antalya. Er hat mit Medien-, Tourismus- und Technologiemarken in der Türkei, Deutschland, Schweden, Kirgisistan und den VAE gearbeitet.' },
        { q: 'Welche Leistungen bietet er an?', a: 'Performance-Marketing (Meta, Google, Yandex Ads), SEO, Marketing-Automatisierung und CRM (HubSpot, Mautic, Zapier), KI-Content-Produktion, PR und Unternehmenskommunikation, Schulung und Beratung.' },
        { q: 'Wie kann man sich für die Schulungen bewerben?', a: 'Indem man das Formular "Jetzt bewerben" auf der Schulungsseite ausfüllt oder eine E-Mail an digital@batuhanates.com sendet.' },
        { q: 'In welchen Sprachen arbeitet er?', a: 'Türkisch, Englisch, Russisch, Kirgisisch und Kasachisch.' }
      ]
    },
    education: {
      summary: 'Ich biete praxisnahe Digitalmarketing- und KI-Schulungen für Immobilienmakler, Hoteliers und Marken an. Ich veranstalte Boutique-Workshops zu Content-Produktion, Meta-Anzeigen, CRM und Automatisierung.',
      pastEventsTitle: 'Vergangene Veranstaltungen',
      pastEventsSubtitle: 'Workshops, die ich durchgeführt habe',
      pastEvents: [
        {
          title: 'Präsenz-Workshop zur digitalen Transformation für Immobilienmakler',
          location: 'Teus Group Büro, Muratpaşa · Antalya',
          topics: [
            'Professionelle Content-Produktion mit KI',
            'Mobile Content-Produktion',
            'Meta-Anzeigenstrategien',
            'CRM und automatisiertes Kundenmanagement'
          ],
          quota: 'Kapazität: Boutique-Workshop für 8 Personen'
        }
      ]
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
      open: 'Öffnen',
      summary: 'Als international presseakkreditierter Journalist wurden meine Nachrichten, Interviews und Analysen in nationalen und internationalen Medien veröffentlicht.'
    }
  }
}

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const { lang: urlLang, pageKey } = parsePath(location.pathname)
  const [language, setLanguage] = useState(urlLang)
  const [isOpen, setIsOpen] = useState(false)

  // URL'deki dil öneki kaynağı belirler; böylece /en ve /de ayrı sayfalardır.
  useEffect(() => {
    setLanguage(urlLang)
    localStorage.setItem('language', urlLang)
  }, [urlLang])

  // Varsayılan dilde doğrudan ziyaret edilen (veya köke düşen) bilinmeyen yollar
  // önceki tercihe göre yerelleştirilmiş karşılığına yönlendirilir.
  useEffect(() => {
    if (urlLang !== DEFAULT_LANG) return
    if (pageKey === null) return
    const saved = localStorage.getItem('language')
    if (!saved || saved === DEFAULT_LANG) return
    navigate(localizedPath(pageKey, saved), { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  const changeLanguage = (lang) => {
    if (!lang || lang === language) {
      setIsOpen(false)
      return
    }
    localStorage.setItem('language', lang)
    setLanguage(lang)
    setIsOpen(false)
    if (pageKey) {
      navigate(localizedPath(pageKey, lang))
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