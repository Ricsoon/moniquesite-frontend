# 🎨 Configuração da Thunder Font

## 📋 Passos para Ativar a Fonte

### 1. **Extrair o Arquivo**
- Extraia o arquivo `thunder-font.zip` que está na raiz do projeto
- Você deve obter arquivos como:
  - `Thunder-Regular.ttf`
  - `Thunder-Bold.ttf`
  - `Thunder-Regular.woff` (se disponível)
  - `Thunder-Bold.woff` (se disponível)
  - `Thunder-Regular.woff2` (se disponível)
  - `Thunder-Bold.woff2` (se disponível)

### 2. **Copiar para a Pasta Correta**
Copie os arquivos de fonte para: `src/assets/fonts/`

```
src/assets/fonts/
├── Thunder-Regular.ttf
├── Thunder-Bold.ttf
├── Thunder-Regular.woff (opcional)
├── Thunder-Bold.woff (opcional)
├── Thunder-Regular.woff2 (opcional)
└── Thunder-Bold.woff2 (opcional)
```

### 3. **Verificar os Nomes dos Arquivos**
Se os nomes dos arquivos forem diferentes, você precisa ajustar o CSS em `src/index.css`:

```css
@font-face {
  font-family: 'Thunder';
  src: url('./assets/fonts/NOME_DO_ARQUIVO_REGULAR.woff2') format('woff2'),
       url('./assets/fonts/NOME_DO_ARQUIVO_REGULAR.woff') format('woff'),
       url('./assets/fonts/NOME_DO_ARQUIVO_REGULAR.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

### 4. **Executar o Projeto**
```bash
npm run dev
```

## ✅ **O que Foi Configurado**

- ✅ **CSS configurado** para carregar a fonte Thunder
- ✅ **Tailwind configurado** com a classe `font-thunder`
- ✅ **Todos os títulos** (h1, h2, h3, h4, h5, h6) usarão a Thunder Font
- ✅ **Fallback** para Inter caso a fonte não carregue

## 🎯 **Resultado**

Após seguir os passos, todos os títulos do site usarão a fonte Thunder Font, criando um visual mais único e personalizado!

## 🔧 **Se Houver Problemas**

1. **Verifique** se os arquivos estão na pasta correta
2. **Confirme** os nomes dos arquivos no CSS
3. **Teste** com apenas o arquivo .ttf primeiro
4. **Verifique** o console do navegador para erros de carregamento

---

**A fonte Thunder será aplicada automaticamente a todos os títulos após a configuração!** 🚀




