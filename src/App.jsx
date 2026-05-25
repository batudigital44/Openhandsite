import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Education from './pages/Education'
import Contact from './pages/Contact'
import Press from './pages/Press'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-dark-900">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hakkimda" element={<About />} />
              <Route path="/portfolyo" element={<Portfolio />} />
              <Route path="/egitimler" element={<Education />} />
              <Route path="/iletisim" element={<Contact />} />
              <Route path="/basin" element={<Press />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App