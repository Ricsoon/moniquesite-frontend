// URL base do backend - ajuste conforme necessário
// Em produção Docker, usa '/api' (proxy reverso nginx)
// Em desenvolvimento, usa 'http://localhost:3000/api'
// Configure via variável de ambiente VITE_API_URL
const API_BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '/api' : 'http://localhost:3000/api')

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL
  }

  // Obter token do localStorage
  getToken() {
    return localStorage.getItem('token')
  }

  // Função auxiliar para fazer requisições
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    const token = this.getToken()

    const config = {
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    }

    if (options.body && typeof options.body === 'object') {
      config.body = JSON.stringify(options.body)
    }

    // Debug: log da requisição
    console.log(`[API] ${config.method} ${url}`, {
      hasToken: !!token,
      headers: config.headers,
      body: config.body ? JSON.parse(config.body) : null
    })

    try {
      const response = await fetch(url, config)
      const data = await response.json()

      console.log(`[API] Response status: ${response.status}`, data)

      if (!response.ok) {
        throw new Error(data.message || `Erro: ${response.statusText}`)
      }

      return data
    } catch (error) {
      console.error(`[API] Error on ${config.method} ${url}:`, error)
      throw error
    }
  }

  // Login com Google - redireciona para o endpoint do backend que iniciará o fluxo OAuth
  getGoogleLoginUrl() {
    // Retorna a URL completa para iniciar o login com Google
    // O backend fará o redirect para o Google OAuth
    return `${this.baseURL}/auth/google`
  }

  // Obter perfil do usuário
  async getUserProfile() {
    return this.request('/auth/me')
  }

  // Atualizar perfil do usuário
  async updateUserProfile(userData) {
    // Primeiro obter o ID do usuário
    const profile = await this.getUserProfile()
    const userId = profile.data?.user?.id
    if (!userId) {
      throw new Error('Usuário não encontrado')
    }
    return this.request(`/users/${userId}`, {
      method: 'PUT',
      body: userData,
    })
  }

  // Adicionar créditos
  async addCredits(amount) {
    return this.request('/credits/add', {
      method: 'POST',
      body: { amount },
    })
  }

  // Enviar código de verificação do WhatsApp
  async sendWhatsAppCode(phone) {
    return this.request('/users/whatsapp/send-code', {
      method: 'POST',
      body: { phone },
    })
  }

  // Verificar código e vincular WhatsApp
  async verifyWhatsAppCode(code, phone) {
    return this.request('/users/whatsapp/verify-code', {
      method: 'POST',
      body: { code, phone },
    })
  }
}

export const apiService = new ApiService()

