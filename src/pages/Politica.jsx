import React from 'react';

const Politica = () => (
  <section className="section-padding bg-white min-h-screen fade-in">
    <div className="container-custom max-w-2xl mx-auto py-16">
      <h1 className="text-5xl font-extrabold text-center text-primary mb-8 font-thunder">Política de Privacidade</h1>
      <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 mb-8 shadow-sm text-base font-medium text-dark text-center max-w-lg mx-auto">
        <span className="inline-block text-primary font-bold">Resumo Rápido:</span> <br/>
        A FR Tecnologia e Desenvolvimento de Software LTDA respeita sua privacidade e está comprometida em proteger seus dados pessoais. O Monique Bot coleta e processa apenas as informações necessárias para oferecer respostas, automações e integrações com serviços como Gmail e Google Calendar.
      </div>
      <p className="text-xs text-gray-500 mb-10 text-center">Atualizado em: 04 de outubro de 2025</p>
      <div className="space-y-12">
        <section>
          <h2 className="font-bold text-2xl text-primary mb-3 mt-6">1. Introdução</h2>
          <p className="text-gray-700">A FR Tecnologia e Desenvolvimento de Software LTDA valoriza a privacidade e a segurança dos dados de todos os usuários do Monique Bot, assistente virtual desenvolvido para integração com sistemas de mensagens, e-mails e automações inteligentes baseadas em IA.<br/>Esta Política descreve como coletamos, utilizamos e protegemos seus dados pessoais durante o uso de nossos serviços.</p>
        </section>
        <section>
          <h2 className="font-bold text-2xl text-primary mb-3">2. Dados que Coletamos</h2>
          <p className="text-gray-700">O Monique Bot coleta apenas informações necessárias para o funcionamento do sistema e para melhorar a experiência do usuário. Entre os dados processados, podem estar:</p>
          <ul className="list-disc pl-6 mb-3 text-gray-700">
            <li><strong>Identificação básica:</strong> nome, e-mail e ID do chat</li>
            <li><strong>Mensagens de interação:</strong> conteúdo enviado pelo usuário para que a IA possa responder e gerar contexto</li>
            <li><strong>Dados de integração:</strong> permissões concedidas pelo usuário ao conectar contas de terceiros (ex.: Gmail, Google Calendar)</li>
            <li><strong>Logs técnicos:</strong> IP, data/hora, status de requisições e eventuais erros de execução</li>
          </ul>
          <p className="mb-1 text-sm text-purple-600 font-medium text-accent"><strong>Importante:</strong> Nenhum dado sensível é coletado sem consentimento explícito.</p>
        </section>
        <section>
          <h2 className="font-bold text-2xl text-primary mb-3">3. Uso das Informações</h2>
          <p className="text-gray-700">As informações coletadas são utilizadas para:</p>
          <ul className="list-disc pl-6 mb-3 text-gray-700">
            <li><strong>Responder mensagens:</strong> gerar interações personalizadas com base no contexto do usuário</li>
            <li><strong>Permitir integrações:</strong> com serviços como Gmail e Google Calendar, sempre mediante autorização</li>
            <li><strong>Garantir funcionamento:</strong> correto das automações criadas dentro do ambiente do Monique Bot</li>
            <li><strong>Analisar logs e métricas:</strong> internas para melhoria contínua do sistema</li>
          </ul>
          <p className="mb-1 text-sm text-purple-600 font-medium text-accent"><strong>Importante:</strong> Os dados não são compartilhados com terceiros, exceto quando estritamente necessário para o funcionamento das APIs (como a API da OpenAI e Google).</p>
        </section>
        <section>
          <h2 className="font-bold text-2xl text-primary mb-3">4. Armazenamento e Segurança</h2>
          <p className="text-gray-700">Implementamos medidas robustas de segurança para proteger seus dados:</p>
          <ul className="list-disc pl-6 mb-3 text-gray-700">
            <li><strong>Armazenamento seguro:</strong> dados são armazenados em banco de dados seguro, criptografado e com controle de acesso</li>
            <li><strong>Retenção limitada:</strong> logs e mensagens são mantidos apenas pelo tempo necessário para análise e manutenção</li>
            <li><strong>Exclusão sob demanda:</strong> o usuário pode solicitar a exclusão total dos dados a qualquer momento</li>
            <li><strong>Conexões criptografadas:</strong> todos os dados trafegam por conexões seguras (HTTPS)</li>
          </ul>
        </section>
        <section>
          <h2 className="font-bold text-2xl text-primary mb-3">5. Compartilhamento de Dados</h2>
          <p className="text-gray-700">Podemos compartilhar dados apenas com:</p>
          <ul className="list-disc pl-6 mb-3 text-gray-700">
            <li><strong>OpenAI:</strong> para processamento de linguagem natural e geração de respostas</li>
            <li><strong>Google Cloud APIs:</strong> para autenticação e execução de automações autorizadas</li>
            <li><strong>Serviços internos de logging:</strong> (ex.: Grafana, ELK) para análise técnica e auditoria</li>
          </ul>
          <p className="mb-1 text-sm text-purple-600 font-semibold"><strong>Garantia:</strong> Nenhum dado é vendido ou utilizado para publicidade.</p>
        </section>
        <section>
          <h2 className="font-bold text-2xl text-primary mb-3">6. Direitos do Usuário</h2>
          <p className="text-gray-700">Você tem direito a:</p>
          <ul className="list-disc pl-6 mb-3 text-gray-700">
            <li><strong>Solicitar cópia, correção ou exclusão:</strong> dos seus dados</li>
            <li><strong>Revogar autorizações concedidas:</strong> (como o acesso ao Gmail) diretamente na sua conta Google</li>
            <li><strong>Ser informado:</strong> sobre mudanças na política de privacidade</li>
            <li><strong>Acesso aos dados:</strong> receber informações sobre como seus dados são processados</li>
          </ul>
          <p className="text-sm">Para exercer qualquer desses direitos, entre em contato via <a className="text-primary underline" href="mailto:padrao@dev-music.com">padrao@dev-music.com</a>.</p>
        </section>
        <section>
          <h2 className="font-bold text-2xl text-primary mb-3">7. Escopos de Acesso ao Google</h2>
          <p className="text-gray-700">O Monique Bot solicita apenas os escopos mínimos necessários para funcionar:</p>
          <b></b>
          <p className="text-gray-700">Google Drive API:</p>
          <ul className="list-disc pl-6 mb-3 text-gray-700">
            <li> Criar, listar e excluir arquivos no Google Drive do usuário.</li>
            <li> Necessário para gerenciamento de documentos e planilhas via comandos WhatsApp.</li>
          </ul>
          <b></b>
          <p className="text-gray-700">Google Calendar API:</p>
          <ul className="list-disc pl-6 mb-3 text-gray-700">
            <li> Criar, reagendar, cancelar e listar eventos.</li>
            <li> Enviar lembretes de compromissos via WhatsApp.</li>
          </ul>
          <b></b>
          <p className="text-gray-700">Google Docs API:</p>
          <ul className="list-disc pl-6 mb-3 text-gray-700">
            <li> Criar documentos a partir de comandos via WhatsApp.</li>
            <li> Utilizado em conjunto com Google Drive para gestão de arquivos.</li>
          </ul>
          <b></b>
          <p className="text-gray-700">Google Sheets API:</p>
          <ul className="list-disc pl-6 mb-3 text-gray-700">
            <li> Criar planilhas a partir de comandos via WhatsApp.</li>
            <li> Utilizado em conjunto com Google Drive para gestão de arquivos.</li>
          </ul>
          <b></b>
          <p className="text-gray-700">Importante sobre o tratamento de dados:</p>
          <ul className="list-disc pl-6 mb-3 text-gray-700">
            <li> NÃO armazenamos, copiamos ou fazemos backup de nenhum conteúdo de arquivos, documentos, planilhas ou eventos.</li>
            <li> Todos os dados são processados em tempo real (runtime) e não persistem em nossos servidores.</li>
            <li> Atuamos apenas como ponte de integração entre WhatsApp e os serviços Google.</li>
            <li> O acesso é revogável a qualquer momento via https://myaccount.google.com/permissions.</li>
          </ul>
          <p className="text-sm">O acesso é limitado e revogável a qualquer momento via painel do Google Account do usuário.</p>
        </section>
        <section>
          <h2 className="font-bold text-2xl text-primary mb-3">8. Alterações nesta Política</h2>
          <p className="text-gray-700">A FR Tecnologia reserva-se o direito de atualizar esta política a qualquer momento. A nova versão será publicada neste mesmo endereço.<br/>Recomendamos revisar esta política regularmente para se manter informado sobre como protegemos suas informações.</p>
        </section>
        <section>
          <h2 className="font-bold text-2xl text-primary mb-3">9. Contato</h2>
          <p className="text-gray-700 mb-2">Dúvidas sobre esta Política podem ser enviadas para:</p>
          <ul className="list-disc pl-6 mb-3 text-gray-700">
            <li><strong>E-mail:</strong> <a className="text-primary underline" href="mailto:padrao@dev-music.com">padrao@dev-music.com</a></li>
            <li><strong>Telefone:</strong> <a className="text-primary underline" href="tel:+55819862-0456">+55 81 9862-0456</a></li>
            <li><strong>Website:</strong> <a className="text-primary underline" href="https://www.moniquebot.com.br" target="_blank">www.moniquebot.com.br</a></li>
          </ul>
          <p className="text-xs mt-4 text-gray-500">Responderemos às suas solicitações dentro do prazo legal estabelecido.</p>
        </section>
        <section>
          <h2 className="font-bold text-2xl text-primary mb-3">10. Conformidade com a Política de Dados do Google</h2>
          <p className="text-gray-700 mb-2">O uso e transferência de informações recebidas das APIs do Google pelo Monique Bot está em conformidade com a Política de Dados de Usuário dos Serviços de API do Google (Google API Services User Data Policy), incluindo os requisitos de Uso Limitado (Limited Use).</p>
          <b></b>
          <p className="text-gray-700">Especificamente:</p>
          <ul className="list-disc pl-6 mb-3 text-gray-700">
            <li> Utilizamos dados do Google apenas para os propósitos descritos nesta política.</li>
            <li> NÃO transferimos dados do Google para terceiros, exceto quando necessário para fornecer o serviço.</li>
            <li> NÃO utilizamos dados do Google para fins de publicidade.</li>
            <li> NÃO armazenamos dados do Google além das necessidades imediatas de processamento.</li>
            <li> Os usuários podem revogar o acesso a qualquer momento através das configurações de sua Conta Google.</li>
          </ul>
          <p className="text-xs mt-4 text-gray-500">Para mais informações, consulte:</p>
          <li><a className="text-primary underline" href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank">https://developers.google.com/terms/api-services-user-data-policy</a></li>
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
export default Politica;
