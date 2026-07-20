import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { useRef } from 'react'
import { Target, Users, TrendingUp, Award, Award as Certificate, ExternalLink, Globe, MapPin, Building, MessageSquare } from 'lucide-react'
import portfolioBanner from '../assets/images/portfolio-banner.png'
import dubaiSkyline from '../assets/images/dubai-skyline.png'
import hotelPool from '../assets/images/hotel-pool.png'
import hotelResort from '../assets/images/hotel-resort.png'
import germanyBerlin from '../assets/images/germany-berlin.jpg'
import whiteHouse from '../assets/images/white-house.jpg'
import opticStore from '../assets/images/optic-store.jpg'
import centralAsia from '../assets/images/central-asia.png'
import diplomaticMeeting from '../assets/images/diplomatic-meeting.jpg'

const Portfolio = () => {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    {
      image: whiteHouse,
      title: t('portfolio.whitehouse.title'),
      description: t('portfolio.whitehouse.description'),
      tag: t('portfolio.whitehouse.tag'),
      metrics: [t('portfolio.whitehouse.metric1'), t('portfolio.whitehouse.metric2'), t('portfolio.whitehouse.metric3')]
    },
    {
      image: dubaiSkyline,
      title: t('portfolio.dubai.title'),
      description: t('portfolio.dubai.description'),
      tag: t('portfolio.dubai.tag'),
      metrics: [t('portfolio.dubai.metric1'), t('portfolio.dubai.metric2'), t('portfolio.dubai.metric3')]
    },
    // Software Project 1: Yunexia SaaS
    {
      image: centralAsia,
      title: t('portfolio.yunexia.title'),
      description: t('portfolio.yunexia.description'),
      tag: t('portfolio.yunexia.tag'),
      metrics: [t('portfolio.yunexia.metric1'), t('portfolio.yunexia.metric2'), t('portfolio.yunexia.metric3')]
    },
    // Software Project 2: PPG Tourism Panel
    {
      image: hotelPool,
      title: t('portfolio.ppg.title'),
      description: t('portfolio.ppg.description'),
      tag: t('portfolio.ppg.tag'),
      metrics: [t('portfolio.ppg.metric1'), t('portfolio.ppg.metric2'), t('portfolio.ppg.metric3')]
    },
    {
      image: diplomaticMeeting,
      title: t('portfolio.kyrgyz.title'),
      description: t('portfolio.kyrgyz.description'),
      tag: t('portfolio.kyrgyz.tag'),
      metrics: [t('portfolio.kyrgyz.metric1'), t('portfolio.kyrgyz.metric2'), t('portfolio.kyrgyz.metric3')],
      links: [{ name: 'Video', url: 'https://www.facebook.com/BiskekTTEOMER/videos/1323158961190017/' }]
    },
    {
      image: hotelResort,
      title: t('portfolio.teus.title'),
      description: t('portfolio.teus.description'),
      tag: t('portfolio.teus.tag'),
      metrics: [t('portfolio.teus.metric1'), t('portfolio.teus.metric2'), t('portfolio.teus.metric3')],
      links: [
        { name: 'Desire Antalya', url: 'https://www.desire-antalya.com/tr/#gallery' },
        { name: 'Tourism Today', url: 'https://www.instagram.com/tourismtoday_official/p/DGz0SUbI7fv/' }
      ]
    },
    {
      image: germanyBerlin,
      title: t('portfolio.energy.title'),
      description: t('portfolio.energy.description'),
      tag: t('portfolio.energy.tag'),
      metrics: [t('portfolio.energy.metric1'), t('portfolio.energy.metric2'), t('portfolio.energy.metric3')]
    },
    {
      image: opticStore,
      title: t('portfolio.emo.title'),
      description: t('portfolio.emo.description'),
      tag: t('portfolio.emo.tag'),
      metrics: [t('portfolio.emo.metric1'), t('portfolio.emo.metric2'), t('portfolio.emo.metric3')]
    },
    {
      image: hotelPool,
      title: t('portfolio.hotel.title'),
      description: t('portfolio.hotel.description'),
      tag: t('portfolio.hotel.tag'),
      metrics: [t('portfolio.hotel.metric1'), t('portfolio.hotel.metric2'), t('portfolio.hotel.metric3')],
      links: [{ name: t('portfolio.hotel.photoLink'), url: 'https://www.orangecounty.com.tr/kemer/tr/foto-galeri' }]
    },
    {
      image: centralAsia,
      title: t('portfolio.asman.title'),
      description: t('portfolio.asman.description'),
      tag: t('portfolio.asman.tag'),
      metrics: [t('portfolio.asman.metric1'), t('portfolio.asman.metric2'), t('portfolio.asman.metric3')]
    }
  ]

  const certificates = [
    // Google & LinkedIn
    { name: 'Google Dijital Pazarlama Sertifikası', issuer: 'Google', year: '2021' },
    { name: 'Google Marketing Expert (SEO, E-Ticaret, Sosyal Medya)', issuer: 'Google', year: '2024' },
    { name: 'Dijital Pazarlamanın Esasları', issuer: 'LinkedIn Learning', year: '2023' },
    { name: 'Sosyal Medya Pazarlama Sertifikası', issuer: 'LinkedIn Learning', year: '2023' },
    { name: 'Hotel & Turizm Dijital Pazarlama', issuer: 'LinkedIn Learning', year: '2026' },
    // BTK & MEB
    { name: 'BTK SEO Sertifikası', issuer: 'BTK Akademi', year: '2021' },
    { name: 'BTK E-Ticaret Sertifikası', issuer: 'BTK Akademi', year: '2021' },
    { name: 'BTK Sosyal Medya Uzmanlığı', issuer: 'BTK Akademi', year: '2023' },
    { name: 'MEB Emlak Danışmanlığı Dijital Eğitimi', issuer: 'MEB', year: '2026' },
    { name: 'MEB İş Yaşamında Sosyal Medya', issuer: 'MEB', year: '2026' },
    // ODTÜ & Boğaziçi
    { name: 'Adobe After Effects Temel Eğitimi', issuer: 'Boğaziçi Enstitüsü', year: '2021' },
    { name: 'Etkili İletişim Teknikleri', issuer: 'Boğaziçi Enstitüsü', year: '2021' },
    { name: 'Adobe Lightroom CC Temel', issuer: 'ODTÜ', year: '2021' },
    { name: 'Kurumsal Sosyal Medya Kullanımı', issuer: 'ODTÜ', year: '2022' },
    { name: 'İşiniz İçin Sosyal Medya', issuer: 'ODTÜ', year: '2022' },
    // Udemy & Özel
    { name: '360° Dijital Pazarlama Sertifikası', issuer: 'Udemy', year: '2022' },
    { name: 'Grafik Tasarım Sertifikası', issuer: 'Udemy', year: '2022' },
    { name: 'SEO 2025 Eğitimi', issuer: 'Udemy', year: '2025' },
    { name: 'AI Prompt Mühendisliği', issuer: 'Udemy', year: '2025' },
    { name: 'Dijital Pazarlama Ahmet Balat', issuer: 'Özel Eğitim', year: '2022' },
    // Yazılım & AI
    { name: 'HTML5 ile Web Geliştirme', issuer: 'Udemy', year: '2025' },
    { name: 'CSS Temelleri', issuer: 'Udemy', year: '2025' },
    { name: 'Databricks AI Fundamentals', issuer: 'Databricks', year: '2026' },
    { name: 'Yapay Zeka Mühendisliği 2026', issuer: 'Özel Eğitim', year: '2026' },
    // Medya & Gazetecilik
    { name: 'Reuters Meta Gazetecilik Sertifikası', issuer: 'Reuters - Meta', year: '2022' },
    { name: 'Sosyal Medya Gazeteciliği', issuer: 'Al Jazeera', year: '2024' },
    { name: 'Diplomasi Haberciliği', issuer: 'Türkiye Gazeteciler Cemiyeti', year: '2021' },
    { name: 'TGC İngiltere Medya Okuryazarlığı', issuer: 'İngiltere Ankara Büyükelçiliği', year: '2024' },
    { name: 'Habitat Facebook Gazetecilik', issuer: 'Habitat Derneği', year: '2021' },
    { name: 'Habitat Siber Zorbalık Eğitmenliği', issuer: 'Habitat Derneği', year: '2023' },
    // Uluslararası
    { name: 'REUTERS Meta Journalist Certificate', issuer: 'Reuters - Meta', year: '2022' },
    { name: 'Uluslararası Basın Kartı (IFJ)', issuer: 'IFJ - European Union', year: '2024' },
    { name: 'ASMAN Medya Sosyal Medya Sertifikası', issuer: 'ASMAN Medya Grubu', year: '2024' },
    { name: 'Youthpass Sertifikası', issuer: 'ESC Avrupa Birliği', year: '2021' },
    { name: 'RE Code Freelancer Sertifikası', issuer: 'RE Code', year: '2023' },
    { name: 'Genç Liderler Eğitimi', issuer: 'Rusya Ankara Büyükelçiliği', year: '2021' },
    { name: 'B1 Seviye İngilizce Sertifikası', issuer: 'Dil Eğitimi', year: '2025' },
    { name: 'SEO Eğitimi 2025', issuer: 'Udemy', year: '2025' },
    { name: 'Ambassador Program Sertifikası 2026', issuer: 'Özel Program', year: '2026' },
    { name: 'AI Engineering Certificate', issuer: 'Özel Eğitim', year: '2026' },
  ]

  const awards = [
    {
      name: 'Avrupa\'nın En İyi Otel İnşaat ve Tasarım Ödülü',
      project: 'Teus Group - Desire Antalya',
      year: '2024',
      description: 'Ulusal ve uluslararası basın PR çalışmalarıyla desteklenen iletişim stratejisi'
    },
    {
      name: 'Beyaz Saray İletişim Stratejileri Danışmanlığı',
      project: 'Trump Medya Danışmanı Melih Göğeban',
      year: '2024',
      description: 'Uluslararası medya koordinasyonu ve stratejik iletişim danışmanlığı'
    },
    {
      name: '800.000$+ Dubai Gayrimenkul Satış Dönüşümü',
      project: 'Dubai Emlak Firması',
      year: '2024',
      description: '14 günde, 5.000 TL reklam harcamasıyla 800.000$+ satış konversiyonu'
    }
  ]

  const associations = [
    {
      name: 'IFJ - Uluslararası Gazeteciler Federasyonu',
      role: 'Akredite Gazeteci',
      country: '130+ Ülke',
      description: 'Uluslararası geçerliliğe sahip IFJ Basın Kartı ile diplomasi haberciliği'
    },
    {
      name: 'TGC - Türkiye Gazeteciler Cemiyeti',
      role: 'Üye Gazeteci',
      country: 'Türkiye',
      description: 'Diplomasi haberciliği ve medya alanında profesyonel üyelik'
    },
    {
      name: 'ASMAN Medya Grubu',
      role: 'Kurucu & Genel Koordinatör',
      country: 'Türkiye - Orta Asya',
      description: '130 ülkede geçerli IFJ akreditasyonuyla çok dilli gençlik medya ağı'
    },
    {
      name: 'Avrupa Gazeteciler Federasyonu',
      role: 'Partner Üye',
      country: 'Avrupa',
      description: 'Avrupa genelinde medya işbirliği ve networking'
    },
    {
      name: 'Reuters - Meta Journalist Program',
      role: 'Sertifikalı Gazeteci',
      country: 'Küresel',
      description: 'Dijital gazetecilik ve içerik üretimi sertifikası'
    }
  ]

  const conferences = [
    {
      name: 'Dijital Pazarlama Zirvesi 2024',
      location: 'İstanbul, Türkiye',
      year: '2024',
      type: 'Konferans'
    },
    {
      name: 'Uluslararası Medya ve İletişim Forumu',
      location: 'Bişkek, Kırgızistan',
      year: '2023',
      type: 'Forum'
    },
    {
      name: 'Dijital Dönüşüm ve Diplomasi Semineri',
      location: 'Ankara, Türkiye',
      year: '2022',
      type: 'Seminer'
    },
    {
      name: 'Avrupa Gençlik Değişim Programı',
      location: 'Brüksel, Belçika',
      year: '2021',
      type: 'Eğitim Programı'
    },
    {
      name: 'Turizm Teknolojileri Konferansı',
      location: 'Antalya, Türkiye',
      year: '2024',
      type: 'Konferans'
    }
  ]

  const references = [
    {
      name: 'Dç. Dr. Erdoğan Akman',
      title: 'Akademisyen & Danışman',
      company: 'Bişkek Manas Üniversitesi',
      type: 'Akademik Referans'
    },
    {
      name: 'Melih Göğeban',
      title: 'Trump Medya Danışmanı',
      company: 'Donald Trump Medya Ekibi',
      type: 'Uluslararası Referans'
    },
    {
      name: 'Pelin Aktaş',
      title: 'Medya Profesyoneli',
      company: 'Uluslararası Medya',
      type: 'Profesyonel Referans'
    },
    {
      name: 'Rasim Gündüz',
      title: 'Kurumsal Yönetici',
      company: 'Turizm Sektörü',
      type: 'Sektörel Referans'
    }
  ]

  const partners = [
    { 
      name: 'Antalya Belek Üniversitesi', 
      icon: '🏛️',
      category: 'Eğitim & Dijital Dönüşüm'
    },
    { 
      name: 'ASMAN Medya Grubu', 
      icon: '🌏',
      category: 'Uluslararası Medya & Diplomasi'
    },
    { 
      name: 'Teus Group', 
      icon: '🏢',
      category: 'Gayrimenkul & Turizm'
    },
    { 
      name: 'Orange County Otel', 
      icon: '🏨',
      category: 'Otel & Turizm'
    },
    { 
      name: 'TTEÖMER - Bişkek', 
      icon: '🎓',
      category: 'Diplomasi & Eğitim'
    },
    { 
      name: 'Mediawirt (Almanya)', 
      icon: '⚡',
      category: 'Enerji & B2B'
    },
    { 
      name: 'EMO Optik', 
      icon: '👓',
      category: 'Optik & E-Ticaret'
    },
    { 
      name: 'Reuters', 
      icon: '📰',
      category: 'Haber Ajansı & Medya'
    },
    { 
      name: 'Al Jazeera', 
      icon: '🗺️',
      category: 'Uluslararası Medya'
    },
    { 
      name: 'IFJ - Uluslararası Gazeteciler', 
      icon: '🎖️',
      category: 'Gazetecilik Federasyonu'
    },
    { 
      name: 'Manas Üniversitesi', 
      icon: '🎓',
      category: 'Eğitim & Akademi'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-900" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Başarı <span className="gradient-text">Hikayeleri</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">Portfolyo</p>
            <img src={portfolioBanner} alt="" className="mx-auto max-w-md mt-8" />
          </motion.div>
        </div>
      </section>

      {/* KPI Stats Section */}
      <section className="py-12 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Target, number: '800K$+', label: 'Satış Dönüşümü', sublabel: 'Dubai Gayrimenkul' },
              { icon: TrendingUp, number: '160x', label: 'ROAS Ortalaması', sublabel: 'Performans Kampanyaları' },
              { icon: Users, number: '25+', label: 'Marka & Kurum', sublabel: 'Uluslararası Projeler' },
              { icon: Award, number: '1M+', label: 'İçerik Etkileşimi', sublabel: 'Organik Erişim' },
              { icon: Award, number: '130+', label: 'Ülke Ağı', sublabel: 'IFJ Akreditasyonu' },
              { icon: Target, number: '95%', label: 'Başarı Oranı', sublabel: 'Tamamlanan Projeler' },
              { icon: TrendingUp, number: '14 gün', label: 'Hızlı Sonuç', sublabel: 'En Hızlı Dönüşüm' },
              { icon: Award, number: '40+', label: 'Sertifika', sublabel: 'Profesyonel Eğitim' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 glass-card hover:border-primary/30 transition-all"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.number}</div>
                <div className="text-sm font-medium text-white mt-1">{stat.label}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-semibold text-primary mb-2">Başarılar ve Ödüller</h2>
            <h3 className="text-3xl font-display font-bold">Tüm Çalışmalarım</h3>
          </motion.div>

          <div className="space-y-16">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="glass-card overflow-hidden"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-800 lg:block hidden" />
                    {/* Tag overlay */}
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-primary/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                    <p className="text-gray-300 leading-relaxed mb-6">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.metrics.map((metric, i) => (
                        <span key={i} className="px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary text-sm rounded-full">
                          {metric}
                        </span>
                      ))}
                    </div>
                    {/* Additional gallery images for hotel section */}
                    {item.gallery && (
                      <div className="flex gap-3 mt-4">
                        {item.gallery.map((img, i) => (
                          <img key={i} src={img} alt="" className="w-24 h-16 object-cover rounded-lg" />
                        ))}
                      </div>
                    )}
                    {/* Project links */}
                    {item.links && item.links.length > 0 && (
                      <div className="flex flex-wrap gap-3 mt-4">
                        {item.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary text-sm rounded-full transition-colors"
                          >
                            <ExternalLink size={14} />
                            {link.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Referanslar ve Ortaklar */}
      <section className="section-padding bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-display font-bold mb-4">
              Referanslar ve <span className="gradient-text">Ortaklar</span>
            </h3>
            <p className="text-gray-400">Birlikte çalıştığım kurumlar ve markalar</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 hover:border-primary/30 transition-all text-center"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">{partner.icon}</span>
                </div>
                <h4 className="font-semibold mb-2">{partner.name}</h4>
                <p className="text-gray-400 text-sm">{partner.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ödüller ve Başarılar */}
      <section className="section-padding bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-display font-bold mb-4">
              🏆 Ödüller ve <span className="gradient-text">KPI Başarıları</span>
            </h3>
            <p className="text-gray-400">Ölçülebilir sonuçlar ve uluslararası başarılar</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 hover:border-primary/30 transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-bl-full" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                      {award.year}
                    </span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{award.name}</h4>
                  <p className="text-secondary text-sm mb-2">{award.project}</p>
                  <p className="text-gray-400 text-sm">{award.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sertifikalar */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-display font-bold mb-4">
              {t('portfolio.certificates')}
            </h3>
            <p className="text-gray-400">{t('portfolio.certificatesDesc')}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="glass-card p-4 hover:border-primary/30 transition-all flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Certificate className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-xs mb-1 line-clamp-2">{cert.name}</h4>
                  <p className="text-gray-400 text-xs">{cert.issuer} • {cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dernek Üyelikleri */}
      <section className="section-padding bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-display font-bold mb-4">
              🏛️ Dernek Üyelikleri ve <span className="gradient-text">Profesyonel Ağlar</span>
            </h3>
            <p className="text-gray-400">Uluslararası nitelikteki profesyonel üyeliklerim ve ağlarım</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {associations.map((assoc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-1">{assoc.name}</h4>
                    <p className="text-secondary text-sm mb-2">{assoc.role}</p>
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                      <MapPin size={12} />
                      <span>{assoc.country}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{assoc.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Konferanslar ve Etkinlikler */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-display font-bold mb-4">
              🎤 Konferanslar ve <span className="gradient-text">Etkinlikler</span>
            </h3>
            <p className="text-gray-400">Katıldığım uluslararası ve yerel etkinlikler</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {conferences.map((conf, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-5 hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-semibold rounded-full">
                    {conf.type}
                  </span>
                  <span className="text-gray-500 text-xs">{conf.year}</span>
                </div>
                <h4 className="font-bold mb-2">{conf.name}</h4>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin size={14} />
                  <span>{conf.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Referanslar ve Tavsiyeler */}
      <section className="section-padding bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-display font-bold mb-4">
              💬 Referanslar ve <span className="gradient-text">Tavsiyeler</span>
            </h3>
            <p className="text-gray-400">İş dünyasından ve akademik çevrelerden aldığım referanslar</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {references.map((ref, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {ref.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="flex-1">
                    <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs font-semibold rounded-full">
                      {ref.type}
                    </span>
                    <h4 className="font-bold mt-2 mb-1">{ref.name}</h4>
                    <p className="text-gray-400 text-sm mb-1">{ref.title}</p>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <Building size={12} />
                      <span>{ref.company}</span>
                    </div>
                  </div>
                  <MessageSquare className="w-5 h-5 text-gray-600 flex-shrink-0" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA removed - using Footer CTA instead */}
    </div>
  )
}

export default Portfolio