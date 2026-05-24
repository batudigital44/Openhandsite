import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Award, TrendingUp, Users, Target } from 'lucide-react'
import portfolioBanner from '../assets/images/portfolio-banner.png'
import portfolio1 from '../assets/images/portfolio-1.png'
import portfolio3 from '../assets/images/portfolio-3.png'
import portfolio4 from '../assets/images/portfolio-4.png'
import dubaiSkyline from '../assets/images/dubai-skyline.png'
import hotelResort from '../assets/images/hotel-resort.png'
import centralAsia from '../assets/images/central-asia.png'
import logo from '../assets/images/logo.png'

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    {
      image: portfolio1,
      title: 'Sosyal Medyada Rekor Etkileşim ve Viral Başarılar',
      description: 'Antalya Belek Üniversitesi\'nin dijital kimliğini modern bir vizyona taşıyarak üniversite tarihinin en yüksek etkileşim oranlarına ulaştım. Kurumsal sosyal medya stratejileri ve viral içerik üretimi konusundaki uzmanlığımı kanıtlayan başarılı bir proje.',
      metrics: ['Rekor etkileşim oranı', 'Viral içerik başarısı', 'Dijital dönüşüm'],
      tag: 'Eğitim & Üniversite'
    },
    {
      image: dubaiSkyline,
      title: 'Yüksek Dönüşümlü (High-Conversion) İçerik Stratejileri',
      description: 'Performans pazarlamasında sıradışı metinler ve satış stratejileriyle doğrudan satışa odaklanıyorum. Dubai gayrimenkul pazarı için tasarladığım tek bir içerik stratejisiyle sadece 14 günde 837.000$ değerinde satış konversiyonu sağlayarak içerik pazarlamasının gücünü kanıtladım.',
      metrics: ['14 günde 837.000$ satış', 'High-Conversion strateji', 'Gayrimenkul uzmanlığı'],
      tag: 'Gayrimenkul'
    },
    {
      image: hotelResort,
      title: 'Veri Odaklı Dijital Pazarlama ile Pazar Liderliği',
      description: 'Orange County Otel Grubu\'nda kısıtlı kaynaklarla yürüttüğüm strateji sayesinde, Türkiye genelinde otel kategorisinde en güçlü sosyal medya hesaplarından birini inşa ettim (Instagram 3., Facebook 6. sıra). Web sitesi trafik analizleri ve SEO çalışmalarıyla son 5 yılın en yüksek ziyaretçi etkileşim oranlarını elde ettim.',
      metrics: ['Instagram 3. sıra', 'Facebook 6. sıra', 'SEO liderliği', '5 Yıl Rekoru'],
      tag: 'Otel & Turizm'
    },
    {
      image: centralAsia,
      title: 'Uluslararası Medya Ekosistemi ve Diplomasi',
      description: 'Orta Asya ve Türkiye arasında köprü kuran, çok dilli ve çok uluslu bir gençlik medya ağı olan ASMAN Medya Grubu\'nu hayata geçirdim. 130 ülkede geçerli IFJ (Uluslararası Gazeteciler Federasyonu) basın akreditasyonuyla uluslararası düzeyde teknoloji ve diplomasi haberciliği yürütmekteyim.',
      metrics: ['130 ülke IFJ akreditasyonu', 'ASMAN Medya Grubu', 'Diplomasi haberciliği'],
      tag: 'Medya & Diplomasi'
    }
  ]

  const partners = [
    { name: 'Antalya Belek Üniversitesi', logo: logo },
    { name: 'ASMAN Medya Grubu', logo: logo },
    { name: 'Orange County Otel', logo: logo },
    { name: 'Teus Group', logo: logo }
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 flex flex-col items-center justify-center hover:border-primary/30 transition-all"
              >
                <img src={partner.logo} alt={partner.name} className="h-12 w-auto mb-3 opacity-70 hover:opacity-100 transition-opacity" />
                <span className="text-sm text-gray-400 text-center">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-dark-800 via-dark-900 to-dark-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Hadi Beraber Çalışalım
            </h2>
            <p className="text-gray-400 mb-8">
              Dijitali öğrenmek, markanı konumlandırmak veya iş ortağı olmak için şimdi bana mail gönder görüşelim
            </p>
            <a
              href="mailto:digital@batuhanates.com"
              className="inline-flex items-center gap-2 text-2xl font-bold gradient-text hover:scale-105 transition-transform"
            >
              <Mail size={28} />
              digital@batuhanates.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio