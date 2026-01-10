import React from 'react';

const Termos = () => (
  <section className="section-padding bg-white min-h-screen fade-in">
    <div className="container-custom max-w-2xl mx-auto py-16">
      <h1 className="text-5xl font-extrabold text-center text-primary mb-8 font-thunder">Termos de Uso</h1>
      <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 mb-8 shadow-sm text-base font-medium text-dark text-center max-w-lg mx-auto">
        <span className="inline-block text-primary font-bold">Resumo Rápido:</span><br/>
        Ao utilizar o Monique Bot, você concorda com os termos estabelecidos pela FR Tecnologia e Desenvolvimento de Software LTDA para uso responsável e seguro do assistente virtual.
      </div>
      <p className="text-xs text-gray-500 mb-10 text-center">Atualizado em: 04 de outubro de 2025</p>
      <div className="space-y-12">
        <section>
          <h2 className="font-bold text-2xl text-primary mb-3 mt-6">1. Aceitação dos Termos</h2>
          <p className="text-gray-700">Ao utilizar o Monique Bot, você concorda integralmente com estes Termos de Uso. Caso não concorde, deve interromper o uso imediatamente.<br/>Estes termos constituem um acordo legal entre você e a FR Tecnologia e Desenvolvimento de Software LTDA.</p>
        </section>
        <section>
          <h2 className="font-bold text-2xl text-primary mb-3">2. Descrição do Serviço</h2>
          <p className="text-gray-700">O Monique Bot é uma assistente virtual desenvolvida pela FR Tecnologia que utiliza inteligência artificial e integrações com APIs de terceiros (como OpenAI e Google) para:</p>
          <ul className="list-disc pl-6 mb-3 text-gray-700">
            <li><strong>Responder mensagens:</strong> de forma natural e contextual</li>
            <li><strong>Automatizar tarefas:</strong> como leitura de e-mails, respostas automáticas e agendamento de eventos</li>
            <li><strong>Gerenciar fluxos e dados:</strong> em tempo real via n8n e outros microserviços</li>
            <li><strong>Integrar serviços:</strong> conectando diferentes plataformas de forma inteligente</li>
          </ul>
        </section>
        <section>
          <h2 className="font-bold text-2xl text-primary mb-3">3. Requisitos de Uso</h2>
          <p className="text-gray-700">Para utilizar o Monique Bot, o usuário deve:</p>
          <ul className="list-disc pl-6 mb-3 text-gray-700">
            <li><strong>Possuir conta válida:</strong> nos serviços integrados (Google, WhatsApp, etc.)</li>
            <li><strong>Uso responsável:</strong> é proibido utilizar o sistema para fins ilícitos, spam ou automações abusivas</li>
            <li><strong>Consentimento:</strong> o Monique Bot não deve ser usado para coleta de dados de terceiros sem consentimento</li>
            <li><strong>Conformidade legal:</strong> respeitar todas as leis e regulamentos aplicáveis</li>
          </ul>
          <p className="mb-1 text-sm text-purple-600 font-medium text-accent"><strong>Importante:</strong> O descumprimento destes itens pode resultar na suspensão imediata do acesso.</p>
        </section>
        <section>
          <h2 className="font-bold text-2xl text-primary mb-3">4. Integrações com Terceiros</h2>
          <p className="text-gray-700">Ao conectar o Monique Bot a outros serviços (ex.: Gmail), o usuário:</p>
          <ul className="list-disc pl-6 mb-3 text-gray-700">
            <li><strong>Concede autorização explícita:</strong> para leitura e execução de ações apenas dentro do escopo solicitado</li>
            <li><strong>Entende que o acesso é limitado:</strong> o Monique Bot não acessa, lê ou modifica dados além do necessário para a funcionalidade pedida</li>
            <li><strong>Pode revogar permissões:</strong> a qualquer momento através das configurações de sua conta Google</li>
            <li><strong>Está ciente dos escopos:</strong> gmail.readonly, gmail.send e calendar.events são os únicos utilizados</li>
          </ul>
        </section>
        <section>
          <h2 className="font-bold text-2xl text-primary mb-3">5. Responsabilidades</h2>
          <p className="text-gray-700">As responsabilidades são divididas da seguinte forma:</p>
          <h3 className="font-semibold text-lg mt-3 mb-2 text-primary">FR Tecnologia:</h3>
          <ul className="list-disc pl-6 mb-3 text-gray-700">
            <li><strong>Não se responsabiliza:</strong> por falhas externas, indisponibilidade de APIs ou ações indevidas de terceiros</li>
            <li><strong>Pode auditar:</strong> logs e registros internamente para prevenção de abusos</li>
            <li><strong>Mantém:</strong> os direitos de propriedade intelectual sobre o software e marca</li>
          </ul>
          <h3 className="font-semibold text-lg mt-3 mb-2 text-primary">Usuário:</h3>
          <ul className="list-disc pl-6 mb-3 text-gray-700">
            <li><strong>É responsável:</strong> por garantir o uso ético e legal da plataforma</li>
            <li><strong>Mantém:</strong> os direitos sobre seus dados pessoais e conteúdo original</li>
            <li><strong>Deve garantir:</strong> que possui autorização para conectar contas de terceiros</li>
          </ul>
        </section>
        <section>
          <h2 className="font-bold text-2xl text-primary mb-3">6. Limitação de Responsabilidade</h2>
          <p className="text-gray-700">O Monique Bot é fornecido "no estado em que se encontra". Não garantimos:</p>
          <ul className="list-disc pl-6 mb-3 text-gray-700">
            <li><strong>Disponibilidade ininterrupta:</strong> ou continuidade sem falhas</li>
            <li><strong>Ausência de erros:</strong> ou vírus no sistema</li>
            <li><strong>Resultados específicos:</strong> do uso das automações</li>
            <li><strong>Compatibilidade:</strong> com todos os sistemas ou dispositivos</li>
          </ul>
          <p className="mb-1 text-sm text-purple-600 font-medium text-accent"><strong>Importante:</strong> A FR Tecnologia não se responsabiliza por perdas indiretas, lucros cessantes ou danos decorrentes do uso indevido do serviço.</p>
        </section>
        <section>
          <h2 className="font-bold text-2xl text-primary mb-3">7. Encerramento de Conta e Exclusão de Dados</h2>
          <p className="text-gray-700">Sobre o encerramento do serviço:</p>
          <ul className="list-disc pl-6 mb-3 text-gray-700">
            <li><strong>Solicitação de exclusão:</strong> o usuário pode solicitar exclusão de seus dados e desconexão de suas contas a qualquer momento pelo e-mail <a className="text-primary underline" href="mailto:padrao@dev-music.com">padrao@dev-music.com</a></li>
            <li><strong>Processo definitivo:</strong> o processo de exclusão é definitivo e remove todas as interações registradas</li>
            <li><strong>Suspensão por violação:</strong> a FR Tecnologia pode suspender ou limitar o acesso de contas que violem estes termos</li>
            <li><strong>Modificações no serviço:</strong> podemos modificar estes termos a qualquer momento</li>
          </ul>
        </section>
        <section>
          <h2 className="font-bold text-2xl text-primary mb-3">8. Alterações nos Termos</h2>
          <p className="text-gray-700">Estes termos podem ser atualizados periodicamente. A versão vigente estará sempre disponível em <a className="text-primary underline" href="https://www.dev-music.com/termos-de-servico" target="_blank">https://www.dev-music.com/termos-de-servico</a>.<br/>O uso continuado do serviço após alterações constitui aceitação dos novos termos.</p>
        </section>
        <section>
          <h2 className="font-bold text-2xl text-primary mb-3">9. Foro</h2>
          <p className="text-gray-700">Em caso de litígio, fica eleito o foro da Comarca de Recife/PE, com renúncia a qualquer outro, por mais privilegiado que seja.<br/>Estes termos são regidos pelas leis brasileiras, incluindo a LGPD, Marco Civil da Internet e Código de Defesa do Consumidor.</p>
        </section>
        <section>
          <h2 className="font-bold text-2xl text-primary mb-3">10. Contato</h2>
          <p className="text-gray-700 mb-2">Para questões sobre estes termos ou suporte técnico:</p>
          <ul className="list-disc pl-6 mb-3 text-gray-700">
            <li><strong>E-mail:</strong> <a className="text-primary underline" href="mailto:padrao@dev-music.com">padrao@dev-music.com</a></li>
            <li><strong>Telefone:</strong> <a className="text-primary underline" href="tel:+558198620456">+55 81 9862-0456</a></li>
            <li><strong>Website:</strong> <a className="text-primary underline" href="https://www.moniquebot.com.br" target="_blank">www.moniquebot.com.br</a></li>
          </ul>
          <p className="text-xs mt-4 text-gray-500">Comprometemo-nos a responder às suas solicitações no menor tempo possível.</p>
        </section>
      </div>
      <div className="flex justify-center mt-12 mb-4">
        <button className="btn-secondary" onClick={() => window.print()}>
          <span className="mr-2">📄</span> Imprimir página
        </button>
      </div>
      <style>{`.fade-in { animation: fadeIn 0.7s;} @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>
    </div>
  </section>
);
export default Termos;
