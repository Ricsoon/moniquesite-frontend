# MoniqueBot - Site React

Site institucional da MoniqueBot, uma assistente pessoal inteligente desenvolvida pela FR Desenvolvimento.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca para interfaces de usuário
- **Vite** - Build tool e servidor de desenvolvimento
- **React Router DOM** - Roteamento para aplicações React
- **Tailwind CSS** - Framework CSS utilitário
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia (Inter)

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Layout.jsx      # Layout principal com Header e Footer
│   ├── Header.jsx      # Cabeçalho com navegação
│   ├── Footer.jsx      # Rodapé
│   ├── HeroSection.jsx # Seção hero da home
│   ├── BenefitsSection.jsx # Seção de benefícios
│   ├── FeaturesSection.jsx # Seção de funcionalidades
│   ├── InteractiveDemo.jsx # Demo interativo
│   ├── AboutSection.jsx # Seção sobre a empresa
│   └── CTASection.jsx  # Seção de call-to-action
├── pages/              # Páginas da aplicação
│   ├── Home.jsx        # Página inicial
│   ├── Sobre.jsx       # Página sobre
│   ├── Funcionalidades.jsx # Página de funcionalidades
│   ├── Contato.jsx     # Página de contato
│   ├── Planos.jsx      # Página de planos
│   └── Blog.jsx        # Página do blog
├── assets/             # Recursos estáticos
│   ├── person_fr.png   # Imagem da pessoa/interface
│   ├── fr_logo.png     # Logo da FR Desenvolvimento
│   └── README.md       # Instruções sobre assets
├── App.jsx             # Componente principal
├── main.jsx            # Ponto de entrada
└── index.css           # Estilos globais
```

## 🎨 Páginas Disponíveis

1. **Home** (`/`) - Página inicial com apresentação da MoniqueBot
2. **Sobre** (`/sobre`) - Informações sobre a empresa e equipe
3. **Funcionalidades** (`/funcionalidades`) - Detalhes das funcionalidades
4. **Contato** (`/contato`) - Formulário de contato e informações
5. **Planos** (`/planos`) - Planos e preços disponíveis
6. **Blog** (`/blog`) - Artigos e conteúdo sobre produtividade

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd monique-bot-site
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse o projeto em: `http://localhost:3000`

### Build para Produção

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

## 🎯 Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Navegação fluida entre páginas
- ✅ Componentes reutilizáveis
- ✅ Formulário de contato funcional
- ✅ Demo interativo da MoniqueBot
- ✅ Seção de planos com comparação
- ✅ Blog com artigos
- ✅ Animações e transições suaves
- ✅ Otimização para SEO

## 🎨 Customização

### Cores
As cores principais podem ser alteradas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: "#4F46E5",    // Azul principal
  secondary: "#7C3AED",  // Roxo secundário
  accent: "#06D6A0",     // Verde de destaque
  // ...
}
```

### Componentes
Todos os componentes estão organizados na pasta `src/components/` e podem ser facilmente modificados ou reutilizados.

### Páginas
As páginas estão na pasta `src/pages/` e seguem a mesma estrutura, facilitando a criação de novas páginas.

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- 📱 Dispositivos móveis
- 📱 Tablets
- 💻 Desktops
- 🖥️ Telas grandes

## 🚀 Deploy

O projeto pode ser facilmente deployado em qualquer plataforma que suporte aplicações React:

- **Vercel**: `vercel --prod`
- **Netlify**: Conecte o repositório e configure o build
- **GitHub Pages**: Use o GitHub Actions
- **Heroku**: Configure o buildpack do Node.js

## 📄 Licença

Este projeto foi desenvolvido pela FR Desenvolvimento. Todos os direitos reservados.

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou suporte, entre em contato:
- Email: padrao@dev-music.com
- Website: [moniquebot.com.br](https://moniquebot.com.br)

---

Desenvolvido com 💙 pela **FR Desenvolvimento**

