# 🚀 Instruções para Executar o Projeto MoniqueBot

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior) - [Download aqui](https://nodejs.org/)
- **npm** (vem com o Node.js) ou **yarn**

## 🛠️ Passos para Executar

### 1. Instalar Dependências

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

### 2. Executar o Projeto

```bash
npm run dev
```

### 3. Acessar o Site

O projeto estará disponível em: **http://localhost:3000**

## 📁 Estrutura Criada

O projeto foi estruturado com:

```
monique-bot-site/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/         # Páginas da aplicação
│   ├── assets/        # Imagens e recursos
│   ├── App.jsx        # Componente principal
│   └── main.jsx       # Ponto de entrada
├── public/            # Arquivos públicos
├── package.json       # Dependências do projeto
├── tailwind.config.js # Configuração do Tailwind
└── vite.config.js     # Configuração do Vite
```

## 🎨 Páginas Disponíveis

- **Home** (`/`) - Página inicial
- **Sobre** (`/sobre`) - Informações sobre a empresa
- **Funcionalidades** (`/funcionalidades`) - Recursos da MoniqueBot
- **Contato** (`/contato`) - Formulário de contato
- **Planos** (`/planos`) - Planos e preços
- **Blog** (`/blog`) - Artigos e conteúdo

## 🖼️ Adicionando Imagens

Para adicionar as imagens originais:

1. Copie `person_fr.png` para `src/assets/person_fr.png`
2. Copie `fr_logo.png` para `src/assets/fr_logo.png`

Ou substitua por suas próprias imagens com os mesmos nomes.

## 🎯 Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint
```

## 🚀 Deploy

Para fazer deploy do projeto:

1. **Vercel**: Conecte o repositório GitHub
2. **Netlify**: Arraste a pasta `dist` após o build
3. **GitHub Pages**: Use GitHub Actions

## 🔧 Personalização

### Cores
Edite `tailwind.config.js` para alterar as cores principais.

### Conteúdo
Modifique os arquivos em `src/pages/` para alterar o conteúdo das páginas.

### Componentes
Edite os arquivos em `src/components/` para modificar componentes.

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- 📱 Mobile
- 📱 Tablet  
- 💻 Desktop
- 🖥️ Telas grandes

## 🆘 Problemas Comuns

### Erro de dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

### Porta ocupada
O Vite tentará usar uma porta diferente automaticamente.

### Imagens não carregam
Verifique se as imagens estão na pasta `src/assets/` com os nomes corretos.

## 📞 Suporte

Se tiver dúvidas ou problemas:
1. Verifique se todas as dependências foram instaladas
2. Certifique-se de estar usando Node.js 16+
3. Execute `npm run dev` na pasta correta

---

**Desenvolvido com 💙 pela FR Desenvolvimento**

