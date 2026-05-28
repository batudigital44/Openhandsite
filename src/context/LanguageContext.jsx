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
    // Press Corner
    press: {
      title: 'Basın Köşesi',
      subtitle: 'Medyada yer alan çalışmalarım ve haberler',
      readMore: 'Devamını Oku',
      externalLink: 'Dış Bağlantı'
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
      certificatesDesc: 'Aldığım eğitimler ve sertifikalar'
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
    press: {
      title: 'Press Corner',
      subtitle: 'My work in the media and news',
      readMore: 'Read More',
      externalLink: 'External Link'
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
      certificatesDesc: 'Trainings and certificates I have obtained'
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
    press: {
      title: 'Pressewinkel',
      subtitle: 'Meine Arbeit in den Medien und Nachrichten',
      readMore: 'Weiterlesen',
      externalLink: 'Externer Link'
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
      certificatesDesc: 'Schulungen und Zertifikate, die ich erworben habe'
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