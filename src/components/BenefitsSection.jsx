const BenefitsSection = () => {
  const benefits = [
    {
      icon: 'fas fa-brain',
      title: 'Inteligência Adaptativa',
      description: 'MoniqueBot aprende com suas preferências e se adapta ao seu estilo de vida, oferecendo respostas e sugestões cada vez mais personalizadas.',
      gradient: 'from-primary to-secondary'
    },
    {
      icon: 'fas fa-clock',
      title: 'Otimização de Tempo',
      description: 'Automatize tarefas repetitivas, agende compromissos e gerencie sua rotina de forma eficiente, ganhando horas preciosas no seu dia.',
      gradient: 'from-accent to-green-400'
    },
    {
      icon: 'fas fa-comments',
      title: 'Conversação Natural',
      description: 'Interface conversacional intuitiva que entende contexto e mantém diálogos fluidos, tornando a interação natural e agradável.',
      gradient: 'from-secondary to-purple-500'
    }
  ]

  return (
    <section className="section-padding bg-white/50 overflow-visible">
      <div className="container-custom overflow-visible">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">Por que Escolher a MoniqueBot?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra os benefícios de ter uma assistente pessoal inteligente ao seu lado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-visible">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:-translate-y-3">
              <div className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${benefit.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-semibold text-dark mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
