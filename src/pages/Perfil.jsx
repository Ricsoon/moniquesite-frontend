import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { apiService } from '../services/api'
import WhatsAppLinkModal from '../components/WhatsAppLinkModal'

const Perfil = () => {
  const { user, isAuthenticated, logout, refreshUserData } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('perfil')
  const [creditsAmount, setCreditsAmount] = useState('')
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

  const handleAddCredits = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      const amount = parseFloat(creditsAmount)

      if (isNaN(amount) || amount <= 0) {
        setMessage({ type: 'error', text: 'Por favor, insira um valor válido.' })
        setLoading(false)
        return
      }

      // Chamada para a API para adicionar créditos
      await apiService.addCredits(amount)
      
      setMessage({ 
        type: 'success', 
        text: `Créditos adicionados com sucesso! Valor: R$ ${amount.toFixed(2)}` 
      })
      setCreditsAmount('')
      
      // Atualizar dados do usuário após adicionar créditos
      await refreshUserData()
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error.message || 'Erro ao adicionar créditos. Tente novamente.' 
      })
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
                        {user.plan || 'Não informado'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'credits' && (
                <div className="max-w-2xl mx-auto">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-accent to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-coins text-white text-3xl"></i>
                    </div>
                    <h2 className="text-3xl font-bold text-dark mb-2">
                      Adicionar Créditos
                    </h2>
                    <p className="text-gray-600">
                      Adicione créditos para aproveitar ainda mais da Monique!
                    </p>
                  </div>

                  {message.text && (
                    <div
                      className={`mb-6 p-4 rounded-xl ${
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

                  <form onSubmit={handleAddCredits} className="space-y-6">
                    <div>
                      <label htmlFor="credits" className="block text-sm font-medium text-dark mb-2">
                        Valor (R$)
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
                          R$
                        </span>
                        <input
                          id="credits"
                          type="number"
                          step="0.01"
                          min="0.01"
                          value={creditsAmount}
                          onChange={(e) => setCreditsAmount(e.target.value)}
                          required
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg font-semibold"
                          placeholder="0,00"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full btn-accent disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center">
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                          Processando...
                        </span>
                      ) : (
                        <>
                          <i className="fas fa-plus-circle mr-2"></i>
                          Adicionar Créditos
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-8 bg-primary/5 rounded-xl p-6">
                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                      <i className="fas fa-info-circle text-primary mr-2"></i>
                      Informações
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Os créditos serão adicionados imediatamente após a confirmação do pagamento</li>
                      <li>• Você receberá um e-mail de confirmação</li>
                      <li>• Em caso de dúvidas, entre em contato com nosso suporte</li>
                    </ul>
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

