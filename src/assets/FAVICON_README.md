# Favicon do MoniqueBot

## Arquivo Criado
- `src/assets/favicon.svg` - Ícone SVG personalizado da assistente MoniqueBot

## Características do Ícone
- **Design**: Representa uma assistente de IA amigável
- **Cores**: Gradientes roxo/azul com toques rosa/vermelho
- **Elementos**: 
  - Cabeça circular branca com expressão amigável
  - Olhos com gradiente colorido
  - Boca sorridente
  - Elementos tecnológicos (linhas de circuito) na base
  - Brilho nos olhos para dar vida

## Implementação
O favicon foi configurado no `index.html` para aparecer na aba do navegador.

## Para Compatibilidade Adicional
Se precisar de versões PNG ou ICO para navegadores mais antigos:

1. Use um conversor online como:
   - https://favicon.io/favicon-converter/
   - https://www.favicon-generator.org/

2. Converta o arquivo `favicon.svg` para:
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `favicon.ico`

3. Adicione ao `index.html`:
```html
<link rel="icon" type="image/png" sizes="32x32" href="/src/assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/src/assets/favicon-16x16.png">
<link rel="shortcut icon" href="/src/assets/favicon.ico">
```