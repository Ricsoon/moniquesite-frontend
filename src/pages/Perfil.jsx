import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { apiService } from '../services/api'
import WhatsAppLinkModal from '../components/WhatsAppLinkModal'

const Perfil = () => {
  const { user, isAuthenticated, logout, refreshUserData } = useAuth()
  const location = useLocation()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('perfil')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  // Verificar se precisa mostrar o modal de vinculação do WhatsApp
  useEffect(() => {
    if (isAuthenticated && user) {
      // Verifica se o usuário não tem WhatsApp vinculado (phone vazio ou não informado)
      const hasWhatsAppLinked = user.phone && user.phone.trim() !== '' && user.phone !== 'Não informado'
      if (!hasWhatsAppLinked) {
        setShowWhatsAppModal(true)
      }
    }
  }, [isAuthenticated, user])

  // If user has no plan info, default to Gratuito
  useEffect(() => {
    if (user && (!user.activePlan || !user.activePlan.name) && !user.plan) {
      // Keep UI showing 'Gratuito' via i18n fallback
    }
  }, [user])

  const handleWhatsAppModalClose = async () => {
    // Atualizar dados do usuário antes de fechar
    await refreshUserData()
    setShowWhatsAppModal(false)
  }

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-primary text-4xl mb-4"></i>
          <p className="text-dark">Carregando...</p>
        </div>
      </div>
    )
  }

  const handlePlanClick = async (plan, index) => {
    // Free plan -> just refresh profile
    if (plan.price === t('R$ 0') || plan.name === t('Gratuito')) {
      await refreshUserData()
      return
    }

    // For paid plans, create transaction and redirect to payment
    try {
      setLoading(true)
      setMessage({ type: '', text: '' })
      
      // Buscar planos da API para obter o ID real do plano
      let planId = null
      try {
        const plansResponse = await apiService.request('/plans')
        const plans = plansResponse.data?.plans || []
        
        // Mapear nomes dos planos para IDs
        const planNameMap = {
          [t('Gratuito')]: 'Gratuito',
          [t('Pro')]: 'Pro',
          [t('Ilimitado')]: 'Ilimitado'
        }
        
        const planName = planNameMap[plan.name] || plan.name
        const foundPlan = plans.find(p => p.name === planName)
        
        if (foundPlan && foundPlan.id) {
          planId = foundPlan.id
        } else {
          // Fallback: usar index + 1 se não encontrar pelo nome
          planId = index + 1
          console.warn(`Plano "${planName}" não encontrado na API, usando índice ${planId}`)
        }
      } catch (err) {
        // Se falhar ao buscar planos, usar índice como fallback
        planId = index + 1
        console.warn('Erro ao buscar planos da API, usando índice:', err)
      }
      
      if (!planId) {
        throw new Error('Não foi possível identificar o plano')
      }
      
      // Criar transação com o planId correto
      const resp = await apiService.createTransaction(planId, 'PIX')
      
      // Validar se o valor da transação corresponde ao plano
      const transactionAmount = resp.data?.transaction?.amount
      const expectedPrice = parseFloat(plan.price.replace('R$ ', '').replace(',', '.').trim())
      
      if (transactionAmount !== undefined && Math.abs(transactionAmount - expectedPrice) > 0.01) {
        console.warn(`Aviso: Valor da transação (R$ ${transactionAmount}) não corresponde ao plano (R$ ${expectedPrice})`)
      }
      
      // If response contains payment invoice or bankSlipUrl, open it
      const paymentUrl = resp.data?.payment?.invoiceUrl || resp.data?.payment?.bankSlipUrl
      if (paymentUrl) {
        window.open(paymentUrl, '_blank')
      }
      
      // refresh user data and notify
      await refreshUserData()
      setMessage({ type: 'success', text: t('Transação criada. Verifique o pagamento.') })
    } catch (err) {
      setMessage({ type: 'error', text: err.message || t('Erro ao criar transação.') })
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <>
      <WhatsAppLinkModal 
        isOpen={showWhatsAppModal} 
        onClose={handleWhatsAppModalClose}
      />
      <div className="min-h-screen bg-light py-12">
        <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-2">Minha Conta</h1>
                <p className="text-sm sm:text-base text-gray-600">Gerencie suas informações e créditos</p>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-red-500 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300 font-semibold text-sm sm:text-base whitespace-nowrap w-full sm:w-auto"
              >
                <i className="fas fa-sign-out-alt mr-2"></i>
                Sair
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-2xl shadow-lg overflow-visible">
            <div className="border-b border-gray-200">
              <div className="flex flex-col sm:flex-row">
                <button
                  onClick={() => setActiveTab('perfil')}
                  className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 font-semibold transition-colors duration-300 text-sm sm:text-base ${
                    activeTab === 'perfil'
                      ? 'text-primary border-b-2 sm:border-b-2 border-primary bg-primary/5'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  <i className="fas fa-user mr-2"></i>
                  <span className="hidden sm:inline">Meu Perfil</span>
                  <span className="sm:hidden">Perfil</span>
                </button>
                <button
                  onClick={() => setActiveTab('credits')}
                  className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 font-semibold transition-colors duration-300 text-sm sm:text-base ${
                    activeTab === 'credits'
                      ? 'text-primary border-b-2 sm:border-b-2 border-primary bg-primary/5'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  <i className="fas fa-coins mr-2"></i>
                  <span className="hidden lg:inline">Quero aproveitar mais da monique!!</span>
                  <span className="lg:hidden">Créditos</span>
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-4 sm:p-6 md:p-8">
              {activeTab === 'perfil' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <i className="fas fa-user text-white text-4xl"></i>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-light rounded-xl p-4 md:p-6">
                      <div className="flex items-center mb-2">
                        <i className="fas fa-user text-primary text-lg md:text-xl mr-3 flex-shrink-0"></i>
                        <label className="text-xs sm:text-sm font-medium text-gray-600">Nome</label>
                      </div>
                      <p className="text-lg md:text-xl font-semibold text-dark break-words">
                        {user.name || 'Não informado'}
                      </p>
                    </div>

                    <div className="bg-light rounded-xl p-4 md:p-6">
                      <div className="flex items-center mb-2">
                        <i className="fas fa-envelope text-primary text-lg md:text-xl mr-3 flex-shrink-0"></i>
                        <label className="text-xs sm:text-sm font-medium text-gray-600">E-mail</label>
                      </div>
                      <p className="text-lg md:text-xl font-semibold text-dark break-words">
                        {user.email || 'Não informado'}
                      </p>
                    </div>

                    <div className="bg-light rounded-xl p-4 md:p-6">
                      <div className="flex items-center mb-2">
                        <i className="fas fa-phone text-primary text-lg md:text-xl mr-3 flex-shrink-0"></i>
                        <label className="text-xs sm:text-sm font-medium text-gray-600">Número de telefone</label>
                      </div>
                      <p className="text-lg md:text-xl font-semibold text-dark break-words">
                        {user.phone || 'Não informado'}
                      </p>
                    </div>

                    <div className="bg-light rounded-xl p-4 md:p-6">
                      <div className="flex items-center mb-2">
                        <i className="fas fa-crown text-accent text-lg md:text-xl mr-3 flex-shrink-0"></i>
                        <label className="text-xs sm:text-sm font-medium text-gray-600">Plano Atual</label>
                      </div>
                      <p className="text-lg md:text-xl font-semibold text-dark break-words">
                        {user.activePlan?.name || user.plan || t('Gratuito')}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* If profile was opened with plan query params, show quick purchase CTA in credits tab */}
              {activeTab === 'credits' && (() => {
                const params = new URLSearchParams(location.search)
                const planName = params.get('planName')
                const planIndex = params.get('planIndex')
                if (planName) {
                  return (
                    <div className="mb-6">
                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-dark">{t('Continuar compra')}</div>
                          <div className="text-sm text-gray-600">{t('Você iniciou a compra do plano')} {planName}. {t('Clique para finalizar o pagamento.')}</div>
                        </div>
                        <div>
                          <button
                            onClick={async () => {
                              try {
                                setLoading(true)
                                // Try to create a transaction with default billingType PIX
                                const planId = planIndex ? parseInt(planIndex) + 1 : undefined
                                const resp = await apiService.createTransaction(planId || 1, 'PIX')
                                // If response contains payment invoice or bankSlipUrl, open it
                                const paymentUrl = resp.data?.payment?.invoiceUrl || resp.data?.payment?.bankSlipUrl
                                if (paymentUrl) {
                                  window.open(paymentUrl, '_blank')
                                }
                                // refresh user data and notify
                                await refreshUserData()
                                setMessage({ type: 'success', text: t('Transação criada. Verifique o pagamento.') })
                              } catch (err) {
                                setMessage({ type: 'error', text: err.message || t('Erro ao criar transação.') })
                              } finally {
                                setLoading(false)
                              }
                            }}
                            className="btn-accent"
                          >
                            {t('Ir para pagamento')}
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                }
                return null
              })()}

              {activeTab === 'credits' && (
                <div className="max-w-5xl mx-auto">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-dark mb-1">
                      {t('Upgrade seu Plano')}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {t('Escolha o plano ideal para você')}
                    </p>
                  </div>

                  {message.text && (
                    <div
                      className={`mb-4 p-3 rounded-lg text-sm ${
                        message.type === 'success'
                          ? 'bg-green-50 border border-green-200 text-green-700'
                          : 'bg-red-50 border border-red-200 text-red-700'
                      }`}
                    >
                      <i
                        className={`fas ${
                          message.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'
                        } mr-2`}
                      ></i>
                      {message.text}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        name: t('Gratuito'),
                        price: t('R$ 0'),
                        period: t('/mês'),
                        features: [
                          t('50 interações/mês'),
                          t('Funcionalidades básicas'),
                          t('Suporte por email')
                        ],
                        buttonText: t('Plano Atual'),
                        buttonStyle: 'btn-secondary',
                        popular: false
                      },
                      {
                        name: t('Pro'),
                        price: t('R$ 50'),
                        period: t('/mês'),
                        features: [
                          t('200 interações/mês'),
                          t('Funcionalidades completas'),
                          t('Suporte prioritário')
                        ],
                        buttonText: t('Assinar Pro'),
                        buttonStyle: 'btn-primary',
                        popular: true
                      },
                      {
                        name: t('Ilimitado'),
                        price: t('R$ 200'),
                        period: t('/mês'),
                        features: [
                          t('Interações ilimitadas'),
                          t('Todos os recursos'),
                          t('Suporte 24/7')
                        ],
                        buttonText: t('Assinar Ilimitado'),
                        buttonStyle: 'btn-accent',
                        popular: false
                      }
                    ].map((plan, index) => {
                      // Obter nome do plano atual - suporta activePlan como objeto com 'name' ou como ID string
                      const getActivePlanName = () => {
                        if (user.activePlan) {
                          // activePlan pode ser objeto {id, name, ...} ou string/number com ID
                          if (typeof user.activePlan === 'object' && user.activePlan.name) {
                            return user.activePlan.name
                          }
                        }
                        if (user.plan) {
                          return user.plan
                        }
                        return t('Gratuito')
                      }
                      
                      const currentPlanName = getActivePlanName()
                      const isCurrentPlan = plan.name === currentPlanName || 
                        (plan.name === t('Gratuito') && !user.activePlan && !user.plan)
                      const buttonText = isCurrentPlan ? t('Plano Atual') : plan.buttonText
                      const isDisabled = isCurrentPlan || loading
                      
                      return (
                        <div 
                          key={index} 
                          className={`relative bg-white rounded-xl shadow-lg border-2 p-4 transition-all duration-200 hover:shadow-xl ${
                            isCurrentPlan ? 'border-accent bg-accent/5' : 'border-gray-200'
                          }`}
                        >
                          {isCurrentPlan && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                              <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                                {t('Atual')}
                              </span>
                            </div>
                          )}
                          
                          {isCurrentPlan && (
                            <div className="absolute -top-2 right-2">
                              <span className="bg-accent text-white px-2 py-1 rounded-full text-xs font-semibold">
                                {t('Atual')}
                              </span>
                            </div>
                          )}
                          
                          <div className="text-center mb-4">
                            <h3 className="text-lg font-bold text-dark mb-1">{plan.name}</h3>
                            <div className="mb-3">
                              <span className="text-3xl font-bold text-dark">
                                {plan.price}
                              </span>
                              <span className="text-gray-600 text-sm ml-1">{plan.period}</span>
                            </div>
                          </div>

                          <ul className="space-y-2 mb-4 min-h-[80px]">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                                <i className="fas fa-check text-accent text-xs flex-shrink-0"></i>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <button 
                            onClick={() => handlePlanClick(plan, index)}
                            disabled={isDisabled}
                            className={`w-full ${plan.buttonStyle} py-2 text-sm font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all`}
                          >
                            {loading && !isCurrentPlan ? (
                              <span className="flex items-center justify-center">
                                <i className="fas fa-spinner fa-spin mr-2"></i>
                                {t('Processando...')}
                              </span>
                            ) : (
                              buttonText
                            )}
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Perfil

