import { useState, useEffect, useRef } from 'react'
import { apiService } from '../services/api'
import { useTranslation } from 'react-i18next'

const WhatsAppLinkModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1) // 1: número, 2: código
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const containerRef = useRef(null)
  const { t } = useTranslation()

  // Resetar estado quando o modal abrir
  useEffect(() => {
    if (isOpen) {
      setStep(1)
      setPhone('')
      setCode('')
      setError('')
    }
  }, [isOpen])

  // Fechar ao clicar fora
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        // Não permitir fechar clicando fora - é obrigatório vincular
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Formatar número de telefone
  const formatPhone = (value) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '')
    
    // Limita a 11 dígitos (formato brasileiro)
    const limited = numbers.slice(0, 11)
    
    // Aplica máscara: (XX) XXXXX-XXXX
    if (limited.length <= 10) {
      return limited.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').trim()
    } else {
      return limited.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').trim()
    }
  }

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value)
    setPhone(formatted)
    setError('')
  }

  const handleCodeChange = (e) => {
    // Aceita apenas números e limita a 6 dígitos
    const value = e.target.value.replace(/\D/g, '').slice(0, 6)
    setCode(value)
    setError('')
  }

  const handleSendCode = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Remove formatação do telefone para enviar apenas números
      const phoneNumbers = phone.replace(/\D/g, '')
      
      if (phoneNumbers.length < 10 || phoneNumbers.length > 11) {
        setError(t('Por favor, insira um número de telefone válido.'))
        setLoading(false)
        return
      }

      await apiService.sendWhatsAppCode(phoneNumbers)
      setStep(2)
    } catch (error) {
      setError(error.message || t('Erro ao enviar código. Tente novamente.'))
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyCode = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (code.length !== 6) {
        setError(t('Por favor, insira o código completo de 6 dígitos.'))
        setLoading(false)
        return
      }

      // enviar código + telefone (sem formatação)
      const phoneNumbers = phone.replace(/\D/g, '')
      await apiService.verifyWhatsAppCode(code, phoneNumbers)
      
      // Fechar modal (o onClose já atualiza os dados do usuário)
      onClose()
    } catch (error) {
      setError(error.message || t('Código inválido. Tente novamente.'))
    } finally {
      setLoading(false)
    }
  }

  const handleBackToPhone = () => {
    setStep(1)
    setCode('')
    setError('')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black/70 via-black/60 to-black/40 backdrop-blur-sm p-4">
      <div
        ref={containerRef}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-xl mx-auto p-8 sm:p-10 relative"
      >
        {/* Header com ícone */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-5">
            <i className="fab fa-whatsapp text-white text-2xl"></i>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-2">
            {step === 1 ? t('Vincule seu WhatsApp') : t('Verifique seu número')}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            {step === 1 
              ? t('Para continuar, você precisa vincular seu número do WhatsApp')
              : t('Digite o código de 6 dígitos enviado para seu WhatsApp')
            }
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            <i className="fas fa-exclamation-circle mr-2"></i>
            {error}
          </div>
        )}

        {step === 1 ? (
          <form onSubmit={handleSendCode} className="space-y-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
                {t('Número do WhatsApp')}
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <i className="fab fa-whatsapp text-xl"></i>
                </div>
                <input
                  id="phone"
                  type="text"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder={t('(00) 00000-0000')}
                  required
                  className="w-full pl-14 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                  disabled={loading}
                />
              </div>
              <p className="mt-2 text-xs text-gray-500">
                {t('Digite seu número com DDD (ex: (11) 98765-4321)')}
              </p>
            </div>

            <button
              type="button"
              onClick={handleSendCode}
              disabled={loading}
              className="w-full min-h-[56px] flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  <span>{t('Enviando código...')}</span>
                </>
              ) : (
                <>
                  <i className="fab fa-whatsapp mr-2"></i>
                  <span>{t('Enviar código de verificação')}</span>
                </>
              )}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyCode} className="space-y-6">
            <div>
              <label htmlFor="code" className="block text-sm font-medium text-dark mb-2">
                {t('Código de verificação')}
              </label>
              <div className="relative">
                <input
                  id="code"
                  type="text"
                  value={code}
                  onChange={handleCodeChange}
                  placeholder={t('000000')}
                  required
                  maxLength={6}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-center text-2xl font-bold tracking-widest"
                  disabled={loading}
                />
              </div>
              <p className="mt-2 text-xs text-gray-500 text-center">
                {t('Verifique seu WhatsApp e digite o código de 6 dígitos recebido')}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={handleBackToPhone}
                className="w-full px-4 py-3 text-gray-600 hover:text-gray-800 font-medium text-sm transition-colors"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                {t('Voltar e alterar número')}
              </button>

              <button
                type="submit"
                disabled={loading || code.length !== 6}
                className="w-full min-h-[56px] flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  <span>{t('Verificando...')}</span>
                </>
              ) : (
                <>
                  <i className="fas fa-check mr-2"></i>
                  <span>{t('Verificar e vincular')}</span>
                </>
              )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default WhatsAppLinkModal

