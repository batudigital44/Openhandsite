import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Seo from './components/Seo'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Education from './pages/Education'
import Contact from './pages/Contact'
import Press from './pages/Press'
import { allRoutes } from './i18n/routes'

const pages = {
  home: Home,
  about: About,
  portfolio: Portfolio,
  education: Education,
  press: Press,
  contact: Contact,
}

const NotFound = () => (
  <div className="pt-20 min-h-[70vh] flex items-center justify-center section-padding">
    <div className="text-center">
      <h1 className="text-6xl font-display font-bold gradient-text mb-4">404</h1>
      <p className="text-gray-400 mb-8">Aradığınız sayfa bulunamadı.</p>
      <Link to="/" className="btn-primary inline-flex items-center gap-2">
        Ana Sayfaya Dön
      </Link>
    </div>
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <Router>
        <LanguageProvider>
          <div className="min-h-screen bg-dark-900">
            <Seo />
            <Navbar />
            <main>
              <Routes>
                {allRoutes.map(({ path, pageKey }) => {
                  const Page = pages[pageKey]
                  return <Route key={path} path={path} element={<Page />} />
                })}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </Router>
    </HelmetProvider>
  )
}

export default App
