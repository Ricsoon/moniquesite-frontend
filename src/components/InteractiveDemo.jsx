import { useState, useEffect, useRef } from 'react'

const InteractiveDemo = () => {
  const chatContainerRef = useRef(null)
  
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Olá! Eu sou a MoniqueBot. Como posso te ajudar hoje? Posso criar documentos, planilhas, enviar emails e muito mais!',
      time: '10:30'
    },
    {
      id: 2,
      type: 'user',
      text: 'Preciso de ajuda com algumas tarefas',
      time: '10:31'
    },
    {
      id: 3,
      type: 'bot',
      text: 'Perfeito! Escolha uma das opções abaixo para começarmos:',
      time: '10:31'
    }
  ])

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const whatsappResponses = {
    "Criar Documento": "Perfeito! Vou criar um novo documento para você. Qual será o título do documento e qual tipo de conteúdo você gostaria de incluir?",
    "Criar Planilha": "Excelente! Vamos criar uma planilha. Você precisa de uma planilha para controle financeiro, estoque, ou outro propósito específico?",
    "Enviar Email": "Ótimo! Para enviar um email, preciso saber: para quem será enviado, qual o assunto e o conteúdo da mensagem. Pode me informar esses detalhes?",
    "Agende uma reunião": "Claro! Vou te ajudar a agendar uma reunião. Qual seria a melhor data e horário para você? Também preciso saber com quem será a reunião e qual o assunto principal."
  }

  const addMessage = (action) => {
    const newUserMessage = {
      id: messages.length + 1,
      type: 'user',
      text: action,
      time: getCurrentTime()
    }

    setMessages(prev => [...prev, newUserMessage])

    setTimeout(() => {
      const newBotMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: whatsappResponses[action],
        time: getCurrentTime()
      }
      setMessages(prev => [...prev, newBotMessage])
    }, 1000)
  }

  const getCurrentTime = () => {
    const now = new Date()
    return now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0")
  }

  return (
    <section id="interactive-demo" className="section-padding bg-gradient-to-r from-primary to-secondary overflow-visible">
      <div className="container-custom overflow-visible">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-bold mb-4">Experimente a MoniqueBot</h2>
          <p className="text-xl opacity-90">Interaja com nossa demonstração e veja como ela pode te ajudar</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-visible">
          {/* WhatsApp-style header */}
          <div className="bg-whatsapp-dark p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <i className="fas fa-robot text-white"></i>
              </div>
              <div>
                <h3 className="text-white font-semibold">MoniqueBot</h3>
                <p className="text-whatsapp-green text-xs">Online</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <i className="fas fa-video cursor-pointer hover:text-gray-300 transition-colors"></i>
              <i className="fas fa-phone-alt cursor-pointer hover:text-gray-300 transition-colors"></i>
              <i className="fas fa-ellipsis-v cursor-pointer hover:text-gray-300 transition-colors"></i>
            </div>
          </div>
          
          {/* Chat area */}
          <div ref={chatContainerRef} className="bg-whatsapp-light p-4 h-96 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex items-start space-x-2 ${message.type === 'user' ? 'justify-end' : ''}`}>
                  {message.type === 'bot' && (
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-robot text-white text-xs"></i>
                    </div>
                  )}
                  
                  <div className={`rounded-2xl p-3 max-w-xs shadow-sm ${
                    message.type === 'user' 
                      ? 'bg-whatsapp-green text-white rounded-tr-none' 
                      : 'bg-white text-gray-700 rounded-tl-none'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.type === 'user' 
                        ? 'text-whatsapp-light opacity-70' 
                        : 'text-gray-400'
                    }`}>
                      {message.time}
                    </p>
                  </div>
                  
                  {message.type === 'user' && (
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-user text-white text-xs"></i>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick action buttons */}
          <div className="bg-white p-4 border-t border-gray-200">
            <div className="flex flex-wrap gap-3 justify-center">
              <button 
                onClick={() => addMessage('Criar Documento')} 
                className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-all duration-300 text-sm font-medium flex items-center space-x-2"
              >
                <i className="fas fa-file-alt"></i>
                <span>Criar Documento</span>
              </button>
              <button 
                onClick={() => addMessage('Criar Planilha')} 
                className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-all duration-300 text-sm font-medium flex items-center space-x-2"
              >
                <i className="fas fa-table"></i>
                <span>Criar Planilha</span>
              </button>
              <button 
                onClick={() => addMessage('Enviar Email')} 
                className="bg-accent text-white px-4 py-2 rounded-full hover:bg-green-400 transition-all duration-300 text-sm font-medium flex items-center space-x-2"
              >
                <i className="fas fa-envelope"></i>
                <span>Enviar Email</span>
              </button>
              <button 
                onClick={() => addMessage('Agende uma reunião')} 
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 text-sm font-medium flex items-center space-x-2"
              >
                <i className="fas fa-calendar-plus"></i>
                <span>Agende uma reunião</span>
              </button>
            </div>
            
            {/* Input area */}
            <div className="mt-4 flex items-center space-x-2">
              <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <i className="fas fa-paperclip text-gray-600"></i>
              </button>
              <input type="text" placeholder="Digite uma mensagem" className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              <button className="w-10 h-10 bg-whatsapp-green rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                <i className="fas fa-paper-plane text-white"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveDemo
