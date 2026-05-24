import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import portfolioImage from '../assets/images/portfolio-banner.png'
import portfolio1 from '../assets/images/portfolio-1.png'
import portfolio2 from '../assets/images/portfolio-2.png'
import portfolio3 from '../assets/images/portfolio-3.png'
import portfolio4 from '../assets/images/portfolio-4.png'

const PortfolioPreview = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    {
      image: portfolio1,
      title: 'Sosyal Medyada Rekor Etkileşim ve Viral Başarılar',
      description: 'Antalya Belek Üniversitesi\'nin dijital kimliğini modern bir vizyona taşıyarak üniversite tarihinin en yüksek etkileşim oranlarına ulaştım'
    },
    {
      image: portfolio3,
      title: 'Yüksek Dönüşümlü İçerik Stratejileri',
      description: 'Dubai gayrimenkul pazarı için tasarladığım tek bir içerik stratejisiyle sadece 14 günde 837.000$ değerinde satış konversiyonu sağladım'
    },
    {
      image: portfolio2,
      title: 'Veri Odaklı Dijital Pazarlama ile Pazar Liderliği',
      description: 'Orange County Otel Grubu\'nda kısıtlı kaynaklarla yürüttüğüm strateji sayesinde, Türkiye genelinde otel kategorisinde en güçlü sosyal medya hesaplarından birini inşa ettim'
    },
    {
      image: portfolio4,
      title: 'Uluslararası Medya Ekosistemi ve Diplomasi',
      description: 'Orta Asya ve Türkiye arasında köprü kuran ASMAN Medya Grubu\'nu hayata geçirdim. 130 ülkede geçerli IFJ basın akreditasyonuyla çalışmaktayım'
    }
  ]

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-dark-900" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary mb-2">Başarılar ve Ödüller</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Tüm <span className="gradient-text">Çalışmalarım</span>
          </h3>
          <img src={portfolioImage} alt="" className="mx-auto mt-8 max-w-md" />
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioPreview