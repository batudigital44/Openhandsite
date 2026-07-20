import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import aboutImage from '../assets/images/about-hero.png'
import figmaImg from '../assets/images/figma.png'
import photoshopImg from '../assets/images/photoshop.png'
import illustratorImg from '../assets/images/illustrator.png'
import midjourneyImg from '../assets/images/midjourney.png'
import gallery1 from '../assets/images/gallery-1.jpg'
import gallery2 from '../assets/images/gallery-2.jpg'
import portfolio1 from '../assets/images/portfolio-1.png'
import portfolio2 from '../assets/images/portfolio-2.png'
import portfolio3 from '../assets/images/portfolio-3.png'
import portfolio4 from '../assets/images/portfolio-4.png'
import diplomaticMeeting from '../assets/images/diplomatic-meeting.jpg'
import whiteHouse from '../assets/images/white-house.jpg'
import hotelResort from '../assets/images/hotel-resort.png'
import dubaiSkyline from '../assets/images/dubai-skyline.png'

const About = () => {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showWhyBatuhan, setShowWhyBatuhan] = useState(false)

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

  const languages = [
    { code: 'tr', name: 'Türkçe' },
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'ru', name: 'Русский' },
    { code: 'kg', name: 'Кыргызча' },
    { code: 'kk', name: 'Қазақша' },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-dark-900 relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900 to-dark-800" />
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
                {t('about.heroTitle')}<br />
                <span className="gradient-text">{t('about.heroSubtitle')}</span>
              </h1>
              <img src={aboutImage} alt="Batuhan Ateş" className="max-w-md rounded-2xl shadow-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">{t('about.aboutMe')}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('about.bio1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('about.bio2')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('about.bio3')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('about.bio4')}
              </p>
              
              {/* Neden Batuhan Ateş Button */}
              <button
                onClick={() => setShowWhyBatuhan(!showWhyBatuhan)}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-full transition-all duration-300 font-semibold group"
              >
                <span>Neden Batuhan Ateş?</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 ${showWhyBatuhan ? 'rotate-180' : ''}`} 
                />
              </button>

              {/* Hidden Content */}
              <motion.div
                initial={false}
                animate={{ height: showWhyBatuhan ? 'auto' : 0, opacity: showWhyBatuhan ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-6 space-y-6">
                  
                  {/* 1 */}
                  <div className="p-6 glass-card rounded-xl">
                    <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-primary">01</span>
                      "Gazeteci Refleksini" Pazarlamaya Entegre Etmesi
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Birçok dijital pazarlamacı sadece metriklere ve bütçelere odaklanırken, onun en büyük gücü ajans haberciliği ve foto-muhabirliği (IFJ Akreditasyonlu) geçmişidir.
                    </p>
                    <p className="text-sm text-secondary italic">
                      <strong>Perde Arkası:</strong> Geçmiş kariyerinde uluslararası protokoller, mitingler ve doğal afet alanları gibi yüksek stresli sahalarda canlı yayın ve drone operasyonları yönetmiştir. Bu durum ona, CONTI veya DNA Hotels gibi dev yapılarda aniden gelişebilecek küresel PR krizlerinde, paniklemeden ve saniyeler içinde "kriz manevrası" yapabilme yeteneği kazandırmıştır.
                    </p>
                  </div>

                  {/* 2 */}
                  <div className="p-6 glass-card rounded-xl">
                    <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-primary">02</span>
                      Yapay Zekayı "Araç" Değil "Ekip Arkadaşı" Olarak Görmesi
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Generative AI (Üretken Yapay Zeka) dünyasında herkes hazır şablonlar veya basit komutlar kullanırken, onun farkı yapay zekayı bir insan gibi eğitebilmesidir.
                    </p>
                    <p className="text-sm text-secondary italic">
                      <strong>Perde Arkası:</strong> PMA Partner bünyesindeki Gravity projesinde ve diğer AI-native SaaS platformlarında, yapay zekanın "kültürel nüansları ve lüks segment dilini" anlayabilmesi için çok katmanlı, özel Prompt Mimarileri kurgulamıştır. Yapay zekaya sadece metin yazdırmaz; onun hedef kitle analitiği yapmasını ve tüketici davranışlarını modellemesini sağlayan arka plan algoritmalarını kodlar. Teknolojideki lakabı bu yüzden bir nevi "AI fısıldayıcısı"dır.
                    </p>
                  </div>

                  {/* 3 */}
                  <div className="p-6 glass-card rounded-xl">
                    <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-primary">03</span>
                      Sahne Arkasında Kalma Tercihi
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Münih, Dubai, Stockholm ve Lizbon hattında, milyon dolarlık küresel turizm ve teknoloji projelerinin dijital komuta merkezini yönetmesine rağmen, kendi kişisel markasını son derece minimalist tutar.
                    </p>
                    <p className="text-sm text-secondary italic">
                      <strong>Perde Arkası:</strong> Portfolyosunda 25'ten fazla büyük ölçekli küresel marka yönetimi ve milyonlarca reklam etkileşimi bulunmasına rağmen, sahnede kendi adının bağırmasını istemez. O, yönettiği markaların büyüme grafiklerinin (ROI) konuşmasını tercih eden, uluslararası iş dünyasının tam güvenini kazanmış tipik bir "gölge stratejist" profilidir.
                    </p>
                  </div>

                  {/* 4 */}
                  <div className="p-6 glass-card rounded-xl">
                    <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-primary">04</span>
                      Multidisipliner "Köprü" Olma Yeteneği
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Şirketlerin en büyük problemi, farklı departmanların (yazılımcılar, kreatifler ve CEO'lar) birbirini anlamamasıdır. Batuhan'ın iş ortamlarında fark yaratan yönü, bu üç dünyanın da dilini çok iyi konuşmasıdır.
                    </p>
                    <p className="text-sm text-secondary italic">
                      <strong>Perde Arkası:</strong> Geçmişte Almanya merkezli Mediawirt gibi şirketlerin B2B e-ticaret dönüşümlerini yönetirken; sistemleri birbirine bağlayan teknik entegrasyonları (HubSpot, Mautic, Zapier) bizzat kurgulamıştır. Teknik SEO mimarisini bir yazılımcı gibi tartışabilir, görsel estetiği bir sanat yönetmeni gibi eleştirebilir ve günün sonunda işin finansal getirisini bir CEO gibi raporlayabilir.
                    </p>
                  </div>

                  {/* 5 */}
                  <div className="p-6 glass-card rounded-xl">
                    <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-primary">05</span>
                      Coğrafi ve Kültürel Adaptasyon Hızı
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Kırgızistan Manas Üniversitesi'nde aldığı gazetecilik eğitimi, ona sadece bir diploma değil, Avrasya ve Rus dilli pazarların sosyolojik kodlarını kazandırdı.
                    </p>
                    <p className="text-sm text-secondary italic">
                      <strong>Perde Arkası:</strong> Eğitim yıllarında T.C. Bişkek Büyükelçiliği TTEÖMER bünyesinde ilk kurumsal dijital medya stratejisini ve multimedya prodüksiyonlarını hayata geçirerek genç yaşta diplomatik iletişim kaslarını geliştirmiştir. Bu çok kültürlü geçmiş (Orta Asya, Avrupa, Orta Doğu), bugün farklı ülkelerdeki yerel turist profillerini ve iş yapış şekillerini anında çözmesini sağlamaktadır.
                    </p>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-sm font-semibold text-primary mb-2">{t('about.expertiseTitle')}</h2>
            <h3 className="text-3xl font-display font-bold">{t('about.expertiseSubtitle')}</h3>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎯', title: t('about.expertise1Title'), desc: t('about.expertise1Desc') },
              { icon: '📊', title: t('about.expertise2Title'), desc: t('about.expertise2Desc') },
              { icon: '🌍', title: t('about.expertise3Title'), desc: t('about.expertise3Desc') },
              { icon: '📱', title: t('about.expertise4Title'), desc: t('about.expertise4Desc') },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-dark-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-sm font-semibold text-primary mb-2">{t('about.skills')}</h2>
            <h3 className="text-3xl font-display font-bold">{t('about.tools')}</h3>
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
            <h4 className="text-xl font-semibold mb-4">{t('about.languages')}</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {languages.map((lang, index) => (
                <span key={index} className="px-4 py-2 bg-dark-700 rounded-full text-sm">
                  {lang.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-gradient-to-r from-dark-800 via-dark-900 to-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-sm font-semibold text-primary mb-2">{t('about.gallery')}</h2>
            <h3 className="text-3xl font-display font-bold">{t('about.photos')}</h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="col-span-2 row-span-2 overflow-hidden rounded-2xl"
            >
              <img
                src={gallery1}
                alt="Galeri 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={gallery2}
                alt="Galeri 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={whiteHouse}
                alt="Beyaz Saray"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={diplomaticMeeting}
                alt="Diplomatik Görüşme"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={dubaiSkyline}
                alt="Dubai"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-2 overflow-hidden rounded-2xl"
            >
              <img
                src={portfolio1}
                alt="Portfolyo 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={portfolio2}
                alt="Portfolyo 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={portfolio3}
                alt="Portfolyo 3"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={hotelResort}
                alt="Hotel Resort"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={portfolio4}
                alt="Portfolyo 4"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About