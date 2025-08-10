# Data On Demand POC

Este projeto é uma prova de conceito (POC) para consumo de dados em tempo real via streaming NDJSON usando JavaScript puro e APIs modernas do navegador.

## Funcionalidades

- Consome dados de uma API que retorna NDJSON via streaming.
- Exibe os dados dinamicamente no HTML conforme chegam.
- Permite iniciar e parar o consumo dos dados via botões.

## Como executar

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/thorxenon/data-on-demand-poc.git
   cd data-on-demand-poc

2. **Instale as dependências do backend:**
   ```sh
   cd server
   npm install

3. **Instale as dependências do frontend:**
   ```sh
   cd app
   npm install

4. **Inicie o backend:**
   ```sh
   npm run dev

   - Certifique-se de que a API está rodando em `http://127.0.0.1:4000`.

5. **Inicie o frontend:**
   ```sh
   npm start

   - Certifique-se de que o frontend está rodando em `http://127.0.0.1:8080`.

### Estrutura
- `index.js`: Script principal do frontend.
- `index.html`: Página principal.
- `server`: Backend (index.ts).

### Requisitos
- **Node.js** 24 ou superior
- **Navegador moderno** (Chrome, Edge, Firefox)

### Observações
- O projeto utiliza APIs modernas como `TransformStream`, `TextDecoderStream` e `WritableStream`.
- Para ambientes que não suportam essas APIs, recomenda-se usar navegadores atualizados.

### Licença
- **MIT**

