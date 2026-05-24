import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Send, Zap, Smartphone, TrendingUp, Target, Check, Calendar, Users, Award, Globe, MessageCircle, DollarSign } from 'lucide-react'

const Education = () => {
  const scrollRef = useRef(null)
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'egitim',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  const validateForm = () => {
    if (!formData.name.trim()) return 'Lütfen adınızı girin'
    if (!formData.phone.trim()) return 'Lütfen telefon numaranızı girin'
    if (!formData.email.trim()) return 'Lütfen e-posta adresinizi girin'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Geçerli bir e-posta adresi girin'
    return null
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }
    
    setIsSubmitting(true)
    setError('')

    // Simulate successful submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', phone: '', email: '', subject: 'egitim', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  const trainings = [
    {
      id: 1,
      title: 'Emlak Dijital Pazarlama Atölyesi',
      description: 'Gayrimenkul sektöründe dijital pazarlama stratejileri, emlak sosyal medya yönetimi, Meta & Google Ads ve CRM entegrasyonu.',
      icon: Target,
      color: 'from-orange-500/20 to-red-500/20',
      topics: ['Emlak sosyal medya stratejisi', 'Gayrimenkul reklamcılığı', 'CRM ve müşteri yönetimi', 'Satış dönüşüm optimizasyonu']
    },
    {
      id: 2,
      title: 'Growth Marketing (Büyüme) Atölyesi',
      description: 'Veri odaklı büyüme stratejileri, performans pazarlaması, A/B testleri ve yüksek dönüşümlü kampanya yönetimi.',
      icon: TrendingUp,
      color: 'from-green-500/20 to-emerald-500/20',
      topics: ['Veri analizi ve metrikler', 'Performans pazarlaması', 'A/B test stratejileri', 'Dönüşüm optimizasyonu']
    },
    {
      id: 3,
      title: 'Medya ve İçerik Üretimi Atölyesi',
      description: 'Yapay zeka destekli içerik üretimi, video prodüksiyon, mobil içerik stratejileri ve viral içerik formülleri.',
      icon: Smartphone,
      color: 'from-blue-500/20 to-cyan-500/20',
      topics: ['AI ile içerik üretimi', 'Video prodüksiyon', 'Mobil odaklı stratejiler', 'Viral içerik formülleri']
    },
    {
      id: 4,
      title: 'Uluslararası PR & İletişim',
      description: 'Global marka yönetimi, kriz iletişimi, uluslararası medya ilişkileri ve IFJ akreditasyon süreçleri.',
      icon: Globe,
      color: 'from-purple-500/20 to-pink-500/20',
      topics: ['Küresel marka stratejisi', 'Kriz iletişimi yönetimi', 'Uluslararası medya ilişkileri', 'Basın ve PR']
    },
    {
      id: 5,
      title: 'Yeni Nesil Dijital Medya ve Gazetecilik',
      description: 'Dijital gazetecilik, çok dilli içerik üretimi, diplomasi haberciliği ve uluslararası medya ekosistemi.',
      icon: MessageCircle,
      color: 'from-yellow-500/20 to-amber-500/20',
      topics: ['Dijital gazetecilik', 'Çok dilli içerik', 'Diplomasi haberciliği', 'Medya ekosistemi']
    }
  ]

  const stats = [
    { number: '800.000$+', label: 'Dijital Satış Dönüşümü' },
    { number: '20+', label: 'Stratejik Danışmanlık' },
    { number: '1M+', label: 'İçerik Etkileşimi' },
    { number: '5M TL+', label: 'Reklam Yönetimi' }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-900" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
                Eğitim & Mentörlük
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                <span className="gradient-text">Dijital Kazançlar</span><br />
                Akıllı Sistemlerle İnşa Edilir
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Küresel deneyim, veri odaklı yaklaşım. Manuel iş yükünden kurtulun, yapay zeka ve otomasyonun gücüyle markanızı büyütün.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#egitimler" className="btn-primary">
                  Eğitimlere Göz At
                </a>
                <a href="#basvuru-formu" className="btn-secondary">
                  Ücretsiz Ön Görüşme
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-8"
            >
              <div className="text-center mb-6">
                <span className="text-6xl font-bold gradient-text">1.429.716$</span>
                <p className="text-gray-400 mt-2">Toplam Kazanç</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-dark-700/50 rounded-xl">
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-sm font-semibold text-primary mb-2">Başarı Hikayeleri</h2>
            <h3 className="text-3xl font-display font-bold">Sonuçlar Konuşuyor</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-6"
            >
              <div className="text-3xl font-bold gradient-text mb-2">800.000$+</div>
              <h4 className="font-semibold mb-2">Dubai Emlak Firması</h4>
              <p className="text-gray-400 text-sm">Dijital satış dönüşümü</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6"
            >
              <div className="text-3xl font-bold gradient-text mb-2">21x ROAS</div>
              <h4 className="font-semibold mb-2">Pink Aksesuar Firması</h4>
              <p className="text-gray-400 text-sm">27 TL reklam → 583 TL satış</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6"
            >
              <div className="text-3xl font-bold gradient-text mb-2">#3 Instagram</div>
              <h4 className="font-semibold mb-2">Orange County Otelleri</h4>
              <p className="text-gray-400 text-sm">Kısıtlı bütçeyle Türkiye lideri</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trainings List */}
      <section id="egitimler" className="section-padding" ref={scrollRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-semibold text-primary mb-2">Eğitim Konuları</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold">
              Küresel Deneyim, <span className="gradient-text">Veri Odaklı Yaklaşım</span>
            </h3>
          </motion.div>

          <div className="space-y-6">
            {trainings.map((training, index) => (
              <motion.div
                key={training.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`glass-card p-8 bg-gradient-to-r ${training.color} border border-transparent hover:border-primary/30 transition-all`}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-dark-800 rounded-xl flex items-center justify-center">
                        <training.icon size={28} className="text-primary" />
                      </div>
                      <div>
                        <span className="text-sm text-primary">Eğitim {String(training.id).padStart(2, '0')}</span>
                        <h3 className="text-xl font-bold">{training.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-300">{training.description}</p>
                  </div>
                  <div className="lg:w-2/3">
                    <h4 className="text-sm font-semibold text-gray-400 mb-4">Öğrenecekleriniz:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {training.topics.map((topic, i) => (
                        <div key={i} className="flex items-center gap-3 bg-dark-800/50 p-3 rounded-lg">
                          <Check size={18} className="text-primary flex-shrink-0" />
                          <span className="text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding bg-gradient-to-r from-primary/20 via-dark-900 to-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <DollarSign size={48} className="mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Bir ürünü veya hizmeti pazarlayarak<br />
              bir satıştan <span className="gradient-text">en az $5000 komisyon</span> kazanmaya hazır mısın?
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#basvuru-formu" className="btn-primary">
                Hemen Başvur
              </a>
              <a href="mailto:digital@batuhanates.com" className="btn-secondary">
                Emin değilim
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="basvuru-formu" className="section-padding bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-2">Başvuru Formu</h3>
                <p className="text-gray-400 mb-8">
                  Eğitim ve danışmanlık başvurusu için formu doldurun. En kısa sürede size dönüş yapacağım.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Başvurunuz Alındı!</h4>
                    <p className="text-gray-400">En kısa sürede {formData.email || 'e-posta adresinize'} dönüş yapacağım.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-sm">
                        {error}
                      </div>
                    )}
                    <div>
                      <label className="block text-sm font-medium mb-2">İsim *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl focus:border-primary focus:outline-none transition-colors"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Telefon *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl focus:border-primary focus:outline-none transition-colors"
                        placeholder="+90 5XX XXX XX XX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">E-posta *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl focus:border-primary focus:outline-none transition-colors"
                        placeholder="ornek@mail.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mesajınız</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Eğitim veya danışmanlık hakkında detayları yazabilirsiniz..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Başvuru Yap
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass-card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">E-posta</h4>
                    <a href="mailto:digital@batuhanates.com" className="text-primary hover:underline">
                      digital@batuhanates.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Konum</h4>
                    <p className="text-gray-400">Antalya, Türkiye</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30">
                <div className="flex items-center gap-4 mb-4">
                  <Award size={24} className="text-primary" />
                  <h4 className="font-semibold">Neden Eğitimlerim?</h4>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> 10+ yıllık sektör deneyimi
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Uluslararası akreditasyon
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Uygulamalı ve güncel içerik
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Kişiye özel mentörlük
                  </li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h4 className="font-semibold mb-4">Sosyal Medya</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/batu.digital/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-700 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <span className="text-xl">📷</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/batuhan-ate%C5%9F/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-700 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <span className="text-xl">💼</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-sm font-semibold text-primary mb-2">SSS</h2>
            <h3 className="text-3xl font-display font-bold">Sıkça Sorulan Sorular</h3>
          </motion.div>

          <div className="space-y-4">
            {[
              'Atölyelerde sadece teorik bilgi mi anlatılıyor?',
              'Eğitimler hangi sektörler için uygun?',
              'Sosyal medya yönetiminde bütçe kısıtlıysa ne öğrenebilirim?',
              'Yapay Zeka (AI) ve yeni nesil araçlar müfredata dahil mi?',
              'Teknik bilgi seviyem düşük olsa da atölyelere katılabilir miyim?'
            ].map((question, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <h4 className="font-semibold flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary text-sm">
                    {i + 1}
                  </span>
                  {question}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Education