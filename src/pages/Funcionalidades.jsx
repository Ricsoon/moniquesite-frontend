import { Link } from 'react-router-dom'
import personImage from '../assets/person_fr.png'

const Funcionalidades = () => {
  const features = [
    {
      icon: 'fas fa-calendar-check',
      title: 'Gestão de Agenda',
      description: 'Agende compromissos, defina lembretes e organize sua rotina de forma inteligente. MoniqueBot sugere horários ideais baseados em seus hábitos.',
      details: [
        'Agendamento automático de compromissos',
        'Lembretes inteligentes baseados em padrões',
        'Sincronização com calendários externos',
        'Sugestões de horários otimizados'
      ],
      color: 'bg-primary'
    },
    {
      icon: 'fas fa-search',
      title: 'Pesquisa Inteligente',
      description: 'Obtenha respostas precisas para suas dúvidas, desde informações simples até pesquisas complexas, com fontes confiáveis.',
      details: [
        'Busca em tempo real na web',
        'Análise de múltiplas fontes',
        'Respostas contextualizadas',
        'Histórico de pesquisas'
      ],
      color: 'bg-secondary'
    },
    {
      icon: 'fas fa-tasks',
      title: 'Gestão de Tarefas',
      description: 'Crie listas de afazeres, defina prioridades e receba notificações inteligentes para nunca mais esquecer uma tarefa importante.',
      details: [
        'Criação de listas personalizadas',
        'Sistema de prioridades',
        'Notificações inteligentes',
        'Acompanhamento de progresso'
      ],
      color: 'bg-accent'
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Criação de Documentos',
      description: 'Crie documentos profissionais, relatórios e textos com a ajuda da IA, mantendo sempre a qualidade e formatação adequadas.',
      details: [
        'Templates profissionais',
        'Formatação automática',
        'Correção gramatical',
        'Múltiplos formatos de exportação'
      ],
      color: 'bg-green-500'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Gestão de Emails',
      description: 'Organize sua caixa de entrada, redija emails profissionais e mantenha sua comunicação sempre em dia.',
      details: [
        'Redação automática de emails',
        'Organização inteligente da caixa',
        'Respostas sugeridas',
        'Agendamento de envios'
      ],
      color: 'bg-blue-500'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Análise de Dados',
      description: 'Transforme dados em insights valiosos com relatórios automáticos e análises inteligentes.',
      details: [
        'Relatórios automáticos',
        'Visualizações de dados',
        'Análises preditivas',
        'Exportação em múltiplos formatos'
      ],
      color: 'bg-purple-500'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">Funcionalidades da MoniqueBot</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Descubra todas as capacidades da sua assistente pessoal inteligente. 
            Cada funcionalidade foi desenvolvida para tornar sua vida mais organizada e produtiva.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding overflow-visible">
        <div className="container-custom overflow-visible">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-visible">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:transform hover:-translate-y-3">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-semibold text-dark mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <i className="fas fa-check text-accent"></i>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="section-padding bg-white/50 overflow-visible">
        <div className="container-custom overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-visible">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-dark">Veja a MoniqueBot em Ação</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa interface intuitiva torna todas essas funcionalidades acessíveis 
                através de conversas naturais. Simplesmente diga o que você precisa e 
                a MoniqueBot fará o resto.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                  <span className="text-gray-700">Interface conversacional intuitiva</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                  <span className="text-gray-700">Aprendizado contínuo e personalização</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                  <span className="text-gray-700">Integração com suas ferramentas favoritas</span>
                </div>
              </div>
              <div className="pt-6">
                <Link to="/contato" className="btn-primary">
                  Experimentar Agora
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={personImage} 
                alt="Interface da MoniqueBot mostrando funcionalidades" 
                className="rounded-2xl shadow-2xl w-3/4 mx-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="section-padding overflow-visible">
        <div className="container-custom overflow-visible">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Integrações Disponíveis</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              MoniqueBot se conecta com as ferramentas que você já usa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 overflow-visible">
            {[
              { name: 'Google Calendar', icon: 'fab fa-google' },
              { name: 'Google Drive', icon: 'fab fa-google-drive' },
              { name: 'Google Docs', icon: 'fas fa-file-alt' },
              { name: 'Google Sheets', icon: 'fas fa-table' },
              { name: 'WhatsApp', icon: 'fab fa-whatsapp' },
              { name: 'Gmail', icon: 'fas fa-envelope' }
            ].map((integration, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group hover:transform hover:-translate-y-2.5">
                <i className={`${integration.icon} text-4xl text-gray-600 group-hover:text-primary transition-colors duration-300 mb-4`}></i>
                <p className="text-sm font-medium text-gray-700">{integration.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Descobrir Todas as Funcionalidades?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Comece a usar a MoniqueBot hoje e experimente o poder de uma assistente pessoal inteligente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato" className="btn-accent">
              Quero ser Notificado
            </Link>
            <Link to="/planos" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-dark transition-all duration-300 font-semibold text-lg">
              Ver Planos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Funcionalidades
