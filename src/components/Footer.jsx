import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react'
import Logo from '../assets/images/logo.png'

const Footer = () => {
  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="section-padding bg-gradient-to-r from-dark-800 via-dark-900 to-dark-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Hadi beraber çalışalım
          </h2>
          <p className="text-gray-400 mb-8">
            Dijitali öğrenmek, markanı konumlandırmak veya iş ortağı olmak için şimdi bana mail gönder görüşelim
          </p>
          <a
            href="mailto:digital@batuhanates.com"
            className="inline-flex items-center gap-2 text-2xl md:text-3xl font-bold gradient-text hover:scale-105 transition-transform"
          >
            <Mail size={28} />
            digital@batuhanates.com
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={Logo} alt="Batuhan Ateş" className="h-10 mb-4" />
            <p className="text-gray-400 text-sm">
              Uluslararası Medya ve Pazarlama Uzmanı
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.instagram.com/ba2digital/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-700 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/batuhan-ate%C5%9F/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-700 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Ana Sayfa</Link></li>
              <li><Link to="/hakkimda" className="text-gray-400 hover:text-white transition-colors">Hakkımda</Link></li>
              <li><Link to="/portfolyo" className="text-gray-400 hover:text-white transition-colors">Portfolyo</Link></li>
              <li><Link to="/iletisim" className="text-gray-400 hover:text-white transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-primary" />
                <span>Antalya, Türkiye</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <a href="mailto:digital@batuhanates.com" className="hover:text-white transition-colors">
                  digital@batuhanates.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BATUHAN ATEŞ Portfolio Web Site
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer