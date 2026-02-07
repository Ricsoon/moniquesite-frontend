import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Contato = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulário enviado:', formData)
    alert('Formulário enviado com sucesso!')
  }

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: t('Endereço'),
      details: [t('Bairro do Recife, 123'), t('Recife - PE'), t('01234-567')]
    },
    {
      icon: 'fas fa-phone',
      title: t('Telefone'),
      details: [t('(81) 9862-0456')]
    },
    {
      icon: 'fas fa-envelope',
      title: t('Email'),
      details: [t('padrao@dev-music.com')]
    },
    {
      icon: 'fas fa-clock',
      title: t('Horário de Atendimento'),
      details: [t('Segunda a Sexta: 8h às 18h'), t('Sábado: 9h às 13h')]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">{t('Entre em Contato')}</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {t('Estamos aqui para ajudar! Entre em contato conosco para tirar dúvidas, solicitar demonstrações ou conhecer nossos planos.')}
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding overflow-visible">
        <div className="container-custom overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 overflow-visible">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 overflow-visible">
              <h2 className="text-3xl font-bold text-dark mb-6">{t('Envie sua Mensagem')}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('Nome Completo *')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder={t('Seu nome completo')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('Email *')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder={t('seu@email.com')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('Telefone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder={t('(11) 99999-9999')}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('Assunto *')}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">{t('Selecione um assunto')}</option>
                      <option value="demo">{t('Solicitar Demonstração')}</option>
                      <option value="planos">{t('Informações sobre Planos')}</option>
                      <option value="suporte">{t('Suporte Técnico')}</option>
                      <option value="parceria">{t('Parceria Comercial')}</option>
                      <option value="outro">{t('Outro')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('Mensagem *')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder={t('Descreva sua necessidade ou dúvida...')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  {t('Enviar Mensagem')}
                  <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 overflow-visible">
              <div>
                <h2 className="text-3xl font-bold text-dark mb-6">{t('Informações de Contato')}</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {t('Nossa equipe está pronta para atender você. Entre em contato através dos canais abaixo ou preencha o formulário ao lado.')}
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg overflow-visible">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <i className={`${info.icon} text-white`}></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-dark mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl p-6 shadow-lg overflow-visible">
                <h3 className="text-xl font-semibold text-dark mb-4">{t('Siga-nos nas Redes Sociais')}</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <i className="fab fa-facebook-f text-white"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                    <i className="fab fa-twitter text-white"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                    <i className="fab fa-linkedin-in text-white"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                    <i className="fab fa-instagram text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white/50 overflow-visible">
        <div className="container-custom overflow-visible">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">{t('Perguntas Frequentes')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('Encontre respostas para as dúvidas mais comuns sobre a MoniqueBot')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 overflow-visible">
            {[
              {
                question: t('Como funciona a MoniqueBot?'),
                answer: t('A MoniqueBot é uma assistente pessoal inteligente que utiliza IA avançada para entender suas necessidades e ajudá-lo com tarefas do dia a dia, desde agendamentos até criação de documentos.')
              },
              {
                question: t('Quais são os planos disponíveis?'),
                answer: t('Oferecemos três planos: Básico, Intermediário e Avançado. Todos os planos estarão disponíveis em breve com diferentes níveis de funcionalidades e recursos para atender suas necessidades específicas.')
              },
              {
                question: t('Meus dados estão seguros?'),
                answer: t('Sim, levamos a segurança muito a sério. Todos os dados são criptografados e armazenados seguindo as melhores práticas de segurança e privacidade.')
              },
              {
                question: t('Posso cancelar minha assinatura a qualquer momento?'),
                answer: t('Sim, você pode cancelar sua assinatura a qualquer momento sem taxas adicionais. Seu acesso permanecerá ativo até o final do período pago.')
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-dark mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contato
