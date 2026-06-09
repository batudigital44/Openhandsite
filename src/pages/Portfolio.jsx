import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { useRef } from 'react'
import { Target, Users, TrendingUp, Award, Award as Certificate, ExternalLink } from 'lucide-react'
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
      image: diplomaticMeeting,
      title: 'Türkiye - Kırgızistan Diplomatik Dijital Dönüşüm',
      description: 'T.C. Bişkek Büyükelçiliği Eğitim Müşavirliği bünyesindeki TTEÖMER için ilk kurumsal dijital medya stratejisi tasarlandı. Multimedya ve prodüksiyon çalışmalarıyla kurumun marka değeri ve dijital görünürlüğü stabilize edildi.',
      tag: 'Diplomasi & Eğitim',
      metrics: ['Kurumsal Dijital Strateji', 'Multimedya Prodüksiyon', 'Uluslararası Kurum'],
      links: [{ name: 'Video', url: 'https://www.facebook.com/BiskekTTEOMER/videos/1323158961190017/' }]
    },
    {
      image: hotelResort,
      title: 'Teus Group - Ulusal ve Uluslararası Medya Görünürlüğü',
      description: 'Teus Group\'un Antalya (Desire), Bali ve Maldivler projeleri için ulusal ve uluslararası basında stratejik medya görünürlüğü sağlandı. Markanın "Avrupa\'nın En İyi Otel İnşaat ve Tasarım Ödülü" kazanma sürecindeki iletişim ve PR faaliyetleri koordine edildi.',
      tag: 'Turizm & Gayrimenkul',
      metrics: ['Desire Antalya Projesi', 'Avrupa Ödülü', 'Ulusal Basın PR'],
      links: [
        { name: 'Desire Antalya', url: 'https://www.desire-antalya.com/tr/#gallery' },
        { name: 'Tourism Today', url: 'https://www.instagram.com/tourismtoday_official/p/DGz0SUbI7fv/' }
      ]
    },
    {
      image: germanyBerlin,
      title: 'Uluslararası Enerji Firması Dijital Dönüşümü',
      description: 'Almanya merkezli enerji firması Mediawirt\'in tüm dijital ekosistemi (Web, Sosyal Medya, B2B Lead) modern standartlara göre revize edildi. E-ticaret uyumlu sistemler ve içerik stratejileriyle marka etkileşimi maksimize edildi.',
      tag: 'Enerji & B2B',
      metrics: ['Mediawirt (Almanya)', 'B2B Lead Generation', 'E-Ticaret']
    },
    {
      image: whiteHouse,
      title: 'Uluslararası Medya Danışmanlığı',
      description: 'Beyaz Saray için iletişim stratejileri geliştirildi. Melih Göğeban\'a (Donald Trump\'ın medya danışmanı) danışmanlık yapıldı ve uluslararası medya koordinasyonu sağlandı.',
      tag: 'Uluslararası İletişim',
      metrics: ['Beyaz Saray İletişim Stratejileri', 'Trump Medya Danışmanlığı', 'Uluslararası Koordinasyon']
    },
    {
      image: opticStore,
      title: 'EMO Optik - Türkiye Pazarına Giriş Stratejisi',
      description: 'Uluslararası 7 büyük optik markasının (Trussardi, Ana Hickmann vb.) Türkiye dijital pazarına giriş ve konumlandırma süreçleri yönetildi. Meta Business Suite ve e-ticaret altyapı kurulumları ile kurumsal satış kanalları optimize edildi.',
      tag: 'E-Ticaret & Moda',
      metrics: ['7 Uluslararası Marka', 'Meta Business Suite', 'E-Ticaret Altyapısı']
    },
    {
      image: dubaiSkyline,
      title: 'Yüksek Dönüşümlü (High-Conversion) İçerik Stratejileri',
      description: 'Performans pazarlamasında sıradışı metinler ve satış stratejileriyle doğrudan satışa odaklanıyorum. Dubai gayrimenkul pazarı için tasarladığım tek bir içerik stratejisiyle sadece 14 günde 837.000$ değerinde satış konversiyonu sağladım.',
      tag: 'Gayrimenkul',
      metrics: ['14 günde 837.000$ satış', 'High-Conversion strateji', 'Gayrimenkul uzmanlığı']
    },
    {
      image: hotelPool,
      title: 'Veri Odaklı Dijital Pazarlama ile Pazar Liderliği',
      description: 'Orange County Otel Grubu\'nda kısıtlı kaynaklarla yürüttüğüm strateji sayesinde, Türkiye genelinde otel kategorisinde en güçlü sosyal medya hesaplarından birini inşa ettim. Foto galeri sayfası en çok ziyaret edilen sayfa yapısı oluşturuldu. Kemer otelimizde SEO ve içerik çalışmalarıyla Instagram 3., Facebook 6. sırada yer aldı.',
      tag: 'Otel & Turizm',
      metrics: ['En Çok Ziyaret Edilen Sayfa', 'Instagram 3. sıra', 'Facebook 6. sıra'],
      links: [{ name: 'Foto Galeri', url: 'https://www.orangecounty.com.tr/kemer/tr/foto-galeri' }]
    },
    {
      image: centralAsia,
      title: 'Uluslararası Medya Ekosistemi ve Diplomasi',
      description: 'Orta Asya ve Türkiye arasında köprü kuran, çok dilli ve çok uluslu bir gençlik medya ağı olan ASMAN Medya Grubu\'nu hayata geçirdim. 130 ülkede geçerli IFJ (Uluslararası Gazeteciler Federasyonu) basın akreditasyonuyla uluslararası düzeyde teknoloji ve diplomasi haberciliği yürütmekteyim.',
      tag: 'Medya & Diplomasi',
      metrics: ['130 ülke IFJ akreditasyonu', 'ASMAN Medya Grubu', 'Diplomasi haberciliği']
    }
  ]

  const certificates = [
    { name: 'Dijital Pazarlama Temelleri', issuer: 'Google' },
    { name: 'Marketing Expert (SEO, E-Ticaret, Sosyal Medya)', issuer: 'Google' },
    { name: 'HTML & CSS', issuer: 'BTK Akademi' },
    { name: 'Adobe After Effects Temel', issuer: 'Boğaziçi Enstitüsü' },
    { name: 'Diplomasi Haberciliği', issuer: 'Türkiye Gazeteciler Cemiyeti' },
    { name: 'Adobe Lightroom CC Temel', issuer: 'ODTÜ' },
    { name: 'Dijital Gazetecilik', issuer: 'Reuters - Meta' },
    { name: '360° Dijital Pazarlama, Adobe InDesign, SEO 2025, AI Prompt', issuer: 'Udemy' },
    { name: 'Kurumsal Sosyal Medya Kullanımı', issuer: 'ODTÜ' },
    { name: 'Sosyal Medya Pazarlama', issuer: 'LinkedIn' },
    { name: 'Medya Okuryazarlığı', issuer: 'İngiltere Ankara Büyükelçiliği' },
    { name: 'Genç Liderler Eğitimi', issuer: 'Rusya Ankara Büyükelçiliği' },
    { name: 'Youthpass Sertifikası', issuer: 'ESC Avrupa Birliği' },
    { name: 'Sosyal Medya Gazeteciliği', issuer: 'Al Jazeera' },
    { name: 'International Press Card', issuer: 'IFJ - European Union' },
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

      {/* Stats Section */}
      <section className="py-12 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Target, number: '25+', label: 'Marka ve kurum' },
              { icon: Users, number: '10+', label: 'Uluslararası işbirliği' },
              { icon: TrendingUp, number: '95%', label: 'Başarı oranı' },
              { icon: Award, number: '1M+', label: 'İçerik etkileşimi' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card p-4 hover:border-primary/30 transition-all flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Certificate className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm mb-1 line-clamp-2">{cert.name}</h4>
                  <p className="text-gray-400 text-xs">{cert.issuer}</p>
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