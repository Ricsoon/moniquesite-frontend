import { Link } from 'react-router-dom'
import frLogo from '../assets/fr_logo.jpg'

const Sobre = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">Sobre a MoniqueBot</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Conheça a história por trás da assistente pessoal inteligente que está revolucionando 
            a forma como as pessoas organizam suas vidas e aumentam sua produtividade.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="section-padding overflow-visible">
        <div className="container-custom overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-visible">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-dark">Nossa História</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A MoniqueBot nasceu da necessidade de criar uma assistente virtual que fosse 
                verdadeiramente útil no dia a dia das pessoas. Nossa equipe de desenvolvedores 
                e especialistas em IA trabalharam incansavelmente para criar uma solução que 
                combina tecnologia de ponta com simplicidade de uso.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Desde o início, nosso objetivo foi claro: desenvolver uma assistente que não 
                apenas respondesse perguntas, mas que realmente entendesse as necessidades 
                dos usuários e os ajudasse a ser mais produtivos e organizados.
              </p>
            </div>
            <div>
              <img 
                src={frLogo} 
                alt="Equipe da FR Desenvolvimento" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="section-padding bg-white/50 overflow-visible">
        <div className="container-custom overflow-visible">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Nossos Pilares</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Os valores que guiam nosso trabalho e desenvolvimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-visible">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-bullseye text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-dark mb-4">Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Simplificar a vida das pessoas através de tecnologia inteligente, 
                oferecendo uma assistente virtual que realmente entende e atende 
                às necessidades individuais.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-eye text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-dark mb-4">Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser a assistente pessoal inteligente mais confiável e eficiente 
                do mercado, reconhecida pela qualidade de suas respostas e pela 
                capacidade de adaptação aos usuários.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-heart text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-dark mb-4">Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Inovação, simplicidade, confiabilidade e foco no usuário são os 
                pilares que sustentam cada decisão e cada linha de código da 
                MoniqueBot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="section-padding overflow-visible">
        <div className="container-custom overflow-visible">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Nossa Equipe</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça os profissionais por trás da MoniqueBot
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-visible">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-user text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Desenvolvedores</h3>
              <p className="text-gray-600">
                Especialistas em IA, machine learning e desenvolvimento de software
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-24 h-24 bg-gradient-to-r from-accent to-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-palette text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Designers</h3>
              <p className="text-gray-600">
                Criadores de interfaces intuitivas e experiências de usuário excepcionais
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-24 h-24 bg-gradient-to-r from-secondary to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Especialistas</h3>
              <p className="text-gray-600">
                Profissionais em UX, marketing e atendimento ao cliente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Quer Fazer Parte da Nossa História?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Junte-se a nós e experimente o futuro da assistência pessoal inteligente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato" className="btn-accent">
              Começar Agora
            </Link>
            <Link to="/funcionalidades" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-dark transition-all duration-300 font-semibold text-lg">
              Ver Funcionalidades
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sobre
