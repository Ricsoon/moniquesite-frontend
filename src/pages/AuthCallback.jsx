import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { apiService } from '../services/api'

const AuthCallback = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { refreshUserData } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Obter tokens da URL
        const token = searchParams.get('token')
        const refreshToken = searchParams.get('refreshToken')
        const errorParam = searchParams.get('error')

        // Verificar se há erro na URL
        if (errorParam) {
          setError('Erro ao fazer login. Tente novamente.')
          setLoading(false)
          setTimeout(() => {
            navigate('/')
          }, 3000)
          return
        }

        // Verificar se há token
        if (!token) {
          setError('Token não recebido. Tente fazer login novamente.')
          setLoading(false)
          setTimeout(() => {
            navigate('/')
          }, 3000)
          return
        }

        // Salvar token no localStorage
        localStorage.setItem('token', token)
        
        // Salvar refresh token se disponível
        if (refreshToken) {
          localStorage.setItem('refreshToken', refreshToken)
        }

        // Buscar dados do usuário diretamente da API
        try {
          const response = await apiService.getUserProfile()
          const userData = response.data?.user || response.user || response.data
          
          if (userData) {
            // Atualizar contexto de autenticação
            const result = await refreshUserData()
            
            if (result.success) {
              // Redirecionar para o perfil após login bem-sucedido
              navigate('/perfil')
              return
            }
          }
          
          throw new Error('Erro ao carregar dados do usuário')
        } catch (apiError) {
          // Se falhar, tentar usar refreshUserData como fallback
          const result = await refreshUserData()
          
          if (result.success) {
            navigate('/perfil')
          } else {
            setError(result.error || 'Erro ao carregar dados do usuário.')
            setLoading(false)
            setTimeout(() => {
              navigate('/')
            }, 3000)
          }
        }
      } catch (err) {
        console.error('Erro no callback de autenticação:', err)
        setError('Erro ao processar autenticação. Tente novamente.')
        setLoading(false)
        setTimeout(() => {
          navigate('/')
        }, 3000)
      }
    }

    handleCallback()
  }, [searchParams, navigate, refreshUserData])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
        <div className="text-center text-white">
          <i className="fas fa-spinner fa-spin text-5xl mb-4"></i>
          <h2 className="text-2xl font-bold mb-2">Processando login...</h2>
          <p className="text-lg opacity-90">Aguarde enquanto configuramos sua conta</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 to-red-600">
        <div className="text-center text-white max-w-md mx-auto px-4">
          <i className="fas fa-exclamation-circle text-5xl mb-4"></i>
          <h2 className="text-2xl font-bold mb-2">Erro ao fazer login</h2>
          <p className="text-lg opacity-90 mb-6">{error}</p>
          <button
            onClick={() => navigate('/')}
            className="bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Voltar ao início
          </button>
        </div>
      </div>
    )
  }

  return null
}

export default AuthCallback

