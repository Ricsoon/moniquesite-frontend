import personImage from '../assets/person_fr.png'

const FeaturesSection = () => {
  const features = [
    {
      icon: 'fas fa-calendar-check',
      title: 'Gestão de Agenda',
      description: 'Agende compromissos, defina lembretes e organize sua rotina de forma inteligente. MoniqueBot sugere horários ideais baseados em seus hábitos.',
      color: 'bg-primary'
    },
    {
      icon: 'fas fa-search',
      title: 'Pesquisa Inteligente',
      description: 'Obtenha respostas precisas para suas dúvidas, desde informações simples até pesquisas complexas, com fontes confiáveis.',
      color: 'bg-secondary'
    },
    {
      icon: 'fas fa-tasks',
      title: 'Gestão de Tarefas',
      description: 'Crie listas de afazeres, defina prioridades e receba notificações inteligentes para nunca mais esquecer uma tarefa importante.',
      color: 'bg-accent'
    }
  ]

  return (
    <section className="section-padding overflow-visible">
      <div className="container-custom overflow-visible">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">Funcionalidades Principais</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra tudo que a MoniqueBot pode fazer por você
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-visible">
          <div className="space-y-8 overflow-visible">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${feature.icon} text-white`}></i>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-dark mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <img 
              src={personImage} 
              alt="Interface da MoniqueBot mostrando funcionalidades de gestão de tarefas" 
              className="rounded-2xl shadow-2xl w-3/4 mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
