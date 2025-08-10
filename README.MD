# Data On Demand POC

Este projeto é uma prova de conceito (POC) para consumo de dados em tempo real via streaming NDJSON usando JavaScript puro e APIs modernas do navegador.

## Funcionalidades

- Consome dados de uma API que retorna NDJSON via streaming.
- Exibe os dados dinamicamente no HTML conforme chegam.
- Permite iniciar e parar o consumo dos dados via botões.

## Como executar

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/data-on-demand-poc.git
   cd data-on-demand-poc

2. **Instale as dependências do backend (se houver):**

- **Inicie o backend:**
   - Certifique-se de que a API está rodando em `http://127.0.0.1:4000`.
- **Abra o arquivo `index.html` no navegador.**

### Estrutura
- `index.js`: Script principal do frontend.
- `index.html`: Página principal.
- `server`: Backend (se aplicável).

### Requisitos
- **Node.js** (para backend)
- **Navegador moderno** (Chrome, Edge, Firefox)

### Observações
- O projeto utiliza APIs modernas como `TransformStream`, `TextDecoderStream` e `WritableStream`.
- Para ambientes que não suportam essas APIs, recomenda-se usar navegadores atualizados.

### Licença
- **MIT**

