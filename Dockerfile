# Multi-stage build para Frontend
# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Argumentos de build
ARG VITE_BASE_PATH=/
ARG VITE_API_URL=/api

# Variáveis de ambiente para build
ENV VITE_BASE_PATH=${VITE_BASE_PATH}
ENV VITE_API_URL=${VITE_API_URL}
ENV NODE_ENV=development

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar todas as dependências (incluindo devDependencies para build)
RUN npm ci

# Copiar código fonte
COPY . .

# Definir NODE_ENV para produção antes do build
ENV NODE_ENV=production

# Build da aplicação
RUN npm run build

# Stage 2: Production
FROM nginx:alpine

# Instalar wget para healthcheck
RUN apk add --no-cache wget

# Copiar arquivos buildados do stage anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuração customizada do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor porta
EXPOSE 80

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]

