import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Award, Users, Target, TrendingUp } from 'lucide-react'
import aboutImage from '../assets/images/about-hero.png'
import figmaImg from '../assets/images/figma.png'
import photoshopImg from '../assets/images/photoshop.png'
import illustratorImg from '../assets/images/illustrator.png'
import midjourneyImg from '../assets/images/midjourney.png'
import gallery1 from '../assets/images/gallery-1.jpg'
import gallery2 from '../assets/images/gallery-2.jpg'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { number: '25+', label: 'Marka ve kurum yönetimi', icon: Target },
    { number: '10+', label: 'Uluslararası işbirliği', icon: Users },
    { number: '95%', label: 'Başarı ve satış oranı', icon: TrendingUp },
    { number: '1M+', label: 'İçerik etkileşimi', icon: Award },
  ]

  const tools = [
    { name: 'Google & Meta Ads', image: null },
    { name: 'Adobe Premiere Pro', image: null },
    { name: 'VN, CapCut', image: null },
    { name: 'CRM Tools', image: null },
    { name: 'Mail Marketing', image: null },
    { name: 'SEO Tools', image: null },
    { name: 'Figma', image: figmaImg },
    { name: 'Adobe Photoshop', image: photoshopImg },
    { name: 'Adobe Illustrator', image: illustratorImg },
    { name: 'Midjourney', image: midjourneyImg },
  ]

  const languages = ['Türkçe', 'İngilizce', 'Almanca', 'Rusça', 'Kırgızca', 'Kazakça']

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-900" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Dijital Dünyayı<br />
                <span className="gradient-text">Benimle Keşfet</span>
              </h1>
              <img src={aboutImage} alt="Batuhan Ateş" className="max-w-md rounded-2xl shadow-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">Batuhan Ateş Kimdir?</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Batuhan Ateş, uluslararası saha deneyimine sahip, seçkin bir stratejik iletişim profesyonelidir. Dijital medya ekosistemini sınır ötesi etki oluşturmanın güçlü bir aracı olarak konumlandıran Ateş, veri odaklı dijital pazarlama teknolojilerini gelişmiş bir küresel temsil kabiliyetiyle birleştirerek kariyerini yüksek profilli markaların ve büyük ölçekli projelerin uluslararası itibarını inşa etmeye ve sürdürülebilir kılmaya adamıştır.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Küresel operasyonel ağı; Portekiz, Hollanda, Belçika, Katar ve Birleşik Arap Emirlikleri gibi stratejik öneme sahip pazarlarda aktif saha deneyimine dayanmaktadır. Bu bölgelerde yerel pazar dinamiklerini ve karmaşık iletişim protokollerini doğrudan deneyimleyerek uzmanlaşmıştır.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Türkçe, İngilizce, Almanca, Rusça, Kırgızca ve Kazakça dillerine hâkim olan Batuhan Ateş, Avrupa ile Avrasya coğrafyaları arasında güçlü bir çok dilli köprü görevi görmekte; dijital pazarlama ve medyayı modern çağın en etkili stratejik araçları olarak yeniden tanımlamaya devam etmektedir.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-dark-800" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-sm font-semibold text-primary mb-2">İş Referanslarım</h2>
            <h3 className="text-3xl font-display font-bold">Başarı Ölçütlerim</h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-sm font-semibold text-primary mb-2">Yeteneklerim</h2>
            <h3 className="text-3xl font-display font-bold">Kullandığım Araçlar</h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card p-4 flex items-center justify-center min-h-[80px]"
              >
                {tool.image ? (
                  <img src={tool.image} alt={tool.name} className="max-h-10" />
                ) : (
                  <span className="text-sm text-center">{tool.name}</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <h4 className="text-xl font-semibold mb-4">Diller</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {languages.map((lang, index) => (
                <span key={index} className="px-4 py-2 bg-dark-700 rounded-full text-sm">
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-sm font-semibold text-primary mb-2">Galeri</h2>
            <h3 className="text-3xl font-display font-bold">Fotoğraflarım</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.img
              src={gallery1}
              alt="Galeri 1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="rounded-2xl w-full"
            />
            <motion.img
              src={gallery2}
              alt="Galeri 2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA removed - using Footer CTA */}
    </div>
  )
}

export default About