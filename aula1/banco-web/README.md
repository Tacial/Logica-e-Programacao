
# Banco Web

## Descrição
Este é um projeto de aplicação web criado para fins educacionais, com o objetivo de ensinar conceitos de teste de software. Ele consome uma API REST (Banco API) e oferece funcionalidades como login, transferências entre contas e listagem de transferências.

## Dependências
Este projeto depende da API REST disponível no repositório [Banco API](https://github.com/juliodelimas/banco-api/).

Antes de executar o `Banco Web`, certifique-se de que a API esteja configurada e rodando.

## Tecnologias Utilizadas
- **Backend**: Node.js com Express
- **Mock Server**: Mockoon
- **Frontend**: HTML, CSS (Materialize CSS), e JavaScript
- **Bibliotecas**:
  - [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API): Para chamadas HTTP
  - [dotenv](https://github.com/motdotla/dotenv): Para configuração de variáveis de ambiente

## Instalação e Configuração

1. Clone este repositório:
   ```bash
   git clone https://github.com/juliodelimas/banco-web.git
   cd banco-web
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```env
   API_BASE_URL=http://localhost:3000 # URL base da API REST Banco API ou do Mock Server
   PORT=4000                         # Porta em que o servidor será executado
   ```

4. Execute o servidor:
   ```bash
   npm run server
   ```

5. Execute o servidor de Mock (Opcional):
   ```bash
   npm run mock-server
   ```

6. Abra o navegador e acesse:
   ```
   http://localhost:4000
   ```

## Funcionalidades

### Login
- Permite autenticar um usuário através da API Banco.
- Campos necessários:
  - **Usuário**
  - **Senha**

### Realizar Transferência
- Permite realizar transferências entre contas.
- Campos necessários:
  - **Conta Origem**
  - **Conta Destino**
  - **Valor**
  - **Token** (apenas para valores superiores a R$ 5.000,00, use 123456 como valor fixo).

### Listagem de Transferências
- Exibe transferências realizadas com paginação.
- Controles:
  - **Página Anterior**
  - **Página Atual**
  - **Próxima Página**

### Consulta de Contas
- Permite consultar contas cadastradas no sistema.

## Estrutura de Arquivos

```
├── public
│   ├── css
│   │   └── styles.css          # Estilos da aplicação
│   ├── js
│   │   ├── setup.js            # Configuração inicial
│   │   ├── login.js            # Lógica de login
│   │   ├── transferencia.js    # Lógica de transferências
│   │   └── contas.js           # Lógica de contas
│   └── index.html              # Interface principal
├── mocks
│   └── banco-api.json          # Mocks da banco-api criados no Mockoon
├── app.js                      # Servidor Express
├── .env                        # Configurações de ambiente
├── package.json                # Configuração do projeto
└── README.md                   # Documentação
```

## Melhorias Implementadas

### Código JavaScript
Os arquivos JavaScript foram revisados e melhorados com base nas boas práticas de programação. Aqui estão algumas das melhorias realizadas:

- **Tratamento de Erros:** Adicionado `try-catch` para gerenciar falhas nas requisições assíncronas.
- **Melhor Manipulação do DOM:** Substituído `innerHTML` por métodos como `createElement` para prevenir problemas de segurança.
- **Validação de Entradas:** Verificações adicionadas para garantir que todos os campos estejam preenchidos antes de enviar requisições.
- **Feedback ao Usuário:** Mensagens visuais aprimoradas para indicar progresso ou erros de maneira mais clara.

Os arquivos revisados estão disponíveis no diretório `public/js/`.

## Autor
Desenvolvido por **Júlio de Lima** para treinamentos de teste de software.

## Licença
Este projeto é licenciado sob a Licença ISC.
