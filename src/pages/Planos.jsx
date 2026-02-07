import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import LoginModal from '../components/LoginModal'
import { useTranslation } from 'react-i18next'

const Planos = () => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [showLoginPrompt, setShowLoginPrompt] = useState(false)
  const { t } = useTranslation()

  const plans = [
    {
      name: t('Gratuito'),
      price: t('R$ 0'),
      period: t('/mês'),
      description: t('Perfeito para começar e experimentar a MoniqueBot'),
      features: [
        t('Até 50 interações por mês'),
        t('Funcionalidades básicas'),
        t('Pesquisas simples'),
        t('Suporte por email'),
        t('1 usuário')
      ],
      buttonText: t('Começar Grátis'),
      buttonStyle: 'btn-secondary',
      popular: false,
      comingSoon: false
    },
    {
      name: t('Pro'),
      price: t('R$ 50'),
      period: t('/mês'),
      description: t('Ideal para profissionais e pequenas empresas'),
      features: [
        t('Mais de 50 interações por mês'),
        t('Todas as funcionalidades do Google'),
        t('Pesquisa avançada'),
        t('Suporte prioritário'),
        t('1 único usuários'),
        t('Integrações básicas'),
        t('Memória ampliada')
      ],
      buttonText: t('Assinar Pro'),
      buttonStyle: 'btn-primary',
      popular: true,
      comingSoon: false
    },
    {
      name: t('Ilimitado'),
      price: t('R$ 200'),
      period: t('/mês'),
      description: t('Para empresas que precisam de recursos avançados'),
      features: [
        t('Interações Ilimitadas'),
        t('Análise de dados avançada'),
        t('Relatórios personalizados'),
        t('Suporte 24/7'),
        t('Todas as integrações'),
        t('Memória ilimitado'),
        t('Treinamento personalizado')
      ],
      buttonText: t('Assinar Ilimitado'),
      buttonStyle: 'btn-accent',
      popular: false,
      comingSoon: false
    }
  ]

  const features = [
    {
      icon: 'fas fa-shield-alt',
      title: t('Segurança Garantida'),
      description: t('Seus dados são protegidos com criptografia de nível bancário')
    },
    {
      icon: 'fas fa-sync-alt',
      title: t('Sincronização em Tempo Real'),
      description: t('Todas as suas informações são sincronizadas instantaneamente')
    },
    {
      icon: 'fas fa-mobile-alt',
      title: t('Multiplataforma'),
      description: t('Acesse a MoniqueBot de qualquer dispositivo, a qualquer hora')
    },
    {
      icon: 'fas fa-headset',
      title: t('Suporte Especializado'),
      description: t('Nossa equipe está sempre pronta para ajudar você')
    }
  ]

  const comparisonRows = [
    { feature: t('Interações por mês'), basic: '50', intermediate: '200', advanced: t('Ilimitado') },
    { feature: t('Usuários'), basic: '1', intermediate: '1', advanced: '1' },
    { feature: t('Gestão de Agenda'), basic: t('Básica'), intermediate: t('Completa'), advanced: t('Completa') },
    { feature: t('Criação de Documentos'), basic: t('Básica'), intermediate: t('Completa'), advanced: t('Completa') },
    { feature: t('Análise de Dados'), basic: t('Não'), intermediate: t('Básica'), advanced: t('Avançada') },
    { feature: t('API'), basic: t('Básica'), intermediate: t('Básica'), advanced: t('Completa') },
    { feature: t('Suporte'), basic: t('Email'), intermediate: t('Prioritário'), advanced: t('24/7') },
    { feature: t('Integrações'), basic: t('Básicas'), intermediate: t('Completas'), advanced: t('Completas') },
    { feature: t('Armazenamento'), basic: t('Básico'), intermediate: t('Ampliado'), advanced: t('Ilimitado') }
  ]

  const handlePlanClick = () => {
    if (isAuthenticated) {
      navigate('/perfil')
    } else {
      setShowLoginPrompt(true)
      setIsLoginModalOpen(true)
    }
  }

  const handleCloseLogin = () => {
    setIsLoginModalOpen(false)
    setShowLoginPrompt(false)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">{t('Escolha seu Plano')}</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {t('Encontre o plano perfeito para suas necessidades. Todos os planos incluem acesso completo à MoniqueBot com diferentes níveis de recursos e suporte.')}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding overflow-visible">
        <div className="container-custom overflow-visible">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto overflow-visible">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-2xl shadow-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_25px_60px_-25px_rgba(0,0,0,0.25)] ${
                  plan.popular ? 'md:ring-2 ring-primary md:transform md:scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold">
                      {t('Recomendado')}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-dark mb-2">{plan.name}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">{plan.description}</p>
                  <div className="mb-4 md:mb-6">
                    <span className="text-4xl md:text-5xl font-bold text-dark">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 text-lg md:text-xl">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <i className="fas fa-check text-accent mt-1 flex-shrink-0"></i>
                      <span className="text-sm md:text-base text-gray-700 break-words">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={handlePlanClick}
                  className={`w-full ${plan.buttonStyle} text-center block`}
                >
                  {isAuthenticated ? t('Ver meu perfil') : plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white/50 overflow-visible">
        <div className="container-custom overflow-visible">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">{t('Por que Escolher a MoniqueBot?')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('Recursos e benefícios que fazem a diferença no seu dia a dia')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-visible">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">{t('Compare os Planos')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('Veja em detalhes o que cada plano oferece')}
            </p>
          </div>

          {/* Tabela para telas médias e grandes */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-visible hidden md:block">
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">{t('Recursos')}</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                      {t('Gratuito')}
                      <div className="text-xs text-primary font-normal mt-1">{t('R$ 0')}/mês</div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                      {t('Pro')}
                      <div className="text-xs text-primary font-normal mt-1">{t('R$ 50')}/mês</div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                      {t('Ilimitado')}
                      <div className="text-xs text-primary font-normal mt-1">{t('R$ 200')}/mês</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonRows.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">{row.feature}</td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700 font-medium">{row.basic}</td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700 font-medium">{row.intermediate}</td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700 font-medium">{row.advanced}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cards empilhados para mobile */}
          <div className="space-y-4 md:hidden">
            {comparisonRows.map((row, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-5">
                <p className="text-base font-semibold text-dark mb-3">{row.feature}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{t('Gratuito')}</span>
                    <span className="text-dark font-semibold text-sm">{row.basic}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{t('Pro')}</span>
                    <span className="text-dark font-semibold text-sm">{row.intermediate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{t('Ilimitado')}</span>
                    <span className="text-dark font-semibold text-sm">{row.advanced}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white/50 overflow-visible">
        <div className="container-custom overflow-visible">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">{t('Perguntas sobre Planos')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('Tire suas dúvidas sobre nossos planos e escolha o ideal para você')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 overflow-visible">
            {[
              {
                question: t('Qual plano é o mais adequado para mim?'),
                answer: t('O plano Gratuito é perfeito para experimentar a MoniqueBot. O plano Pro (Recomendado) é ideal para profissionais e pequenas empresas que precisam de recursos completos. O plano Ilimitado é para empresas que necessitam de recursos avançados e suporte dedicado.')
              },
              {
                question: t('Qual a diferença entre os planos?'),
                answer: t('O plano Gratuito oferece 50 interações por mês e funcionalidades básicas. O Pro oferece interações ilimitadas, recursos completos e até 5 usuários. O Ilimitado inclui tudo do Pro, mais API completa, usuários ilimitados, análises avançadas e suporte 24/7.')
              },
              {
                question: t('Posso mudar de plano a qualquer momento?'),
                answer: t('Sim, você pode fazer upgrade ou downgrade a qualquer momento. As alterações serão aplicadas imediatamente e os valores ajustados proporcionalmente. Ao fazer downgrade, você mantém acesso até o final do período pago.')
              },
              {
                question: t('Há período de teste?'),
                answer: t('Sim! Todos os planos pagos incluem um período de teste gratuito de 14 dias. Você poderá experimentar todas as funcionalidades do plano escolhido e cancelar a qualquer momento durante o período de teste sem custos.')
              },
              {
                question: t('O plano Gratuito tem limitações?'),
                answer: t('O plano Gratuito oferece 50 interações por mês, funcionalidades básicas de agenda, pesquisa simples e suporte por email. É uma ótima forma de conhecer a MoniqueBot antes de fazer upgrade para um plano pago.')
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">{t('Pronto para Começar?')}</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {t('Escolha o plano ideal e comece a usar a MoniqueBot hoje mesmo')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato" className="btn-accent">
              {t('Começar Agora')}
            </Link>
            <Link to="/funcionalidades" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-dark transition-all duration-300 font-semibold text-lg">
              {t('Ver Funcionalidades')}
            </Link>
          </div>
          <div className="mt-6">
            <p className="text-sm opacity-75">
              {t('')}
            </p>
          </div>
        </div>
      </section>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={handleCloseLogin}
        variant="modal"
      />

      {showLoginPrompt && !isAuthenticated && (
        <div className="fixed bottom-6 right-6 z-[70]">
          <div className="bg-yellow-100 border border-yellow-200 text-yellow-900 shadow-xl rounded-xl px-5 py-4 max-w-sm flex items-start gap-3">
            <i className="fas fa-info-circle mt-1"></i>
            <div className="space-y-2">
              <p className="text-sm sm:text-base">{t('Deve estar logado na plataforma para aderir a um plano.')}</p>
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="btn-primary px-4 py-2 text-sm sm:text-base"
              >
                {t('Fazer login')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Planos

