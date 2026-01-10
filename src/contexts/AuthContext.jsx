import { createContext, useContext, useState, useEffect } from 'react'
import { apiService } from '../services/api'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Verificar se há token salvo ao carregar a aplicação
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      // Validar token e buscar dados do usuário
      validateToken(token)
    } else {
      setLoading(false)
    }
  }, [])

  const validateToken = async (token) => {
    try {
      const userData = await apiService.getUserProfile()
      setUser(userData)
      setIsAuthenticated(true)
    } catch (error) {
      // Token inválido ou expirado
      localStorage.removeItem('token')
      setUser(null)
      setIsAuthenticated(false)
    } finally {
      setLoading(false)
    }
  }

  const loginGoogle = () => {
    try {
      // Redireciona para o endpoint do backend que iniciará o fluxo OAuth do Google
      const googleUrl = apiService.getGoogleLoginUrl()
      window.location.href = googleUrl
      return { success: true, redirecting: true }
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Erro ao fazer login com Google. Tente novamente.' 
      }
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    setIsAuthenticated(false)
  }

  const refreshUserData = async () => {
    try {
      const userData = await apiService.getUserProfile()
      setUser(userData)
      return { success: true }
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Erro ao atualizar dados do usuário.' 
      }
    }
  }

  const value = {
    user,
    loading,
    isAuthenticated,
    loginGoogle,
    logout,
    refreshUserData
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

