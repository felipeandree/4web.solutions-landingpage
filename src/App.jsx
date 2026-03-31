import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import SobrePage from './pages/SobrePage'
import ServicosPage from './pages/ServicosPage'
import TrabalhosPage from './pages/TrabalhosPage'
import ContatoPage from './pages/ContatoPage'

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main className="site-main">
        <section id="home" className="section-anchor">
          <HomePage />
        </section>
        <section id="sobre" className="section-anchor">
          <SobrePage />
        </section>
        <section id="servicos" className="section-anchor">
          <ServicosPage />
        </section>
        <section id="trabalhos" className="section-anchor">
          <TrabalhosPage />
        </section>
        <section id="contato" className="section-anchor">
          <ContatoPage />
        </section>
      </main>
    </div>
  )
}

export default App
