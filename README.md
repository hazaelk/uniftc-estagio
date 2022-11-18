# UniFTC - Estágio Supervisionado

Este repositório contem apenas o front-end da aplicação cuja API é rodada separadamente (modelo headless).

### Stack:
NextJS 13 - Server rendering habilitado por padrão

TailwindCSS + PostCSS

Gerenciador de pacotes recomendado: Yarn ou PNPM


### Execução:
Instale as dependências do repositório
```bash
// com npm
npm i

// com yarn
yarn
```

Executar em modo desenvolvedor (Auto-refresh, Typescript no emit, Unoptmized)
```bash
// com npm
npm run dev

// com yarn
yarn dev
```

Compilando & executando em modo de produção.
```bash
// com npm
npm run build && npm run start

// com yarn
yarn build && yarn start
```

Deploy:
- Compile o código para produção ao menos uma vez.
- Aponte o reverse proxy para 3000 utilizando o domínio desejado
- Instale [PM2](https://pm2.keymetrics.io) para daemonização.
```bash
pm2 start npm run start
```
- Instale os certificados SSL no servidor http.

### Requisitos:

- NodeJS LTS 14.x ou superior
- Yarn ou NPM
