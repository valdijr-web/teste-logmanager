# LOGMANAGER - Teste Técnico -  Dev.Valdi Geraldo

Este projeto é um teste técnico para a LOGMANAGER desenvolvido em Laravel. Ele implementa uma aplicação de gerenciamento de motoristas e pedidos, com foco em criação de dados fictícios, filtro de pedidos entregues e pendentes, filtro por perído de datas, e exibição de pedidos por motorista com opção de edição dos dados.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/valdijr-web/teste-logmanager.git
   cd teste-logmanager
   ```

2. Instale as dependências (recomendado via Docker)

      Para evitar conflitos de versões do PHP, Composer e Node.js vamos utilizar o docker.

      - Instale dependências PHP com um container temporário do Composer:
         ```bash
         docker run --rm -u "$(id -u):$(id -g)" -v "$PWD":/var/www/html -w /var/www/html composer:2 install --ignore-platform-reqs
         ```

      Após executar os comandos acima você terá a pasta `vendor/` e poderá usar `./vendor/bin/sail` normalmente.

      - Suba os containers (em background):
         ```bash
         ./vendor/bin/sail up -d
         ```

      - Instale dependências Node dentro do container:
         ```bash
         ./vendor/bin/sail npm install
         ```

      - Crie o arquivo de ambiente a partir do exemplo e gere a chave da aplicação:
         ```bash
         cp .env.example .env
         ./vendor/bin/sail artisan key:generate
         ```

      - Rode migrations/seeders dentro do container:
         ```bash
         ./vendor/bin/sail artisan migrate:fresh --seed
         ```

      - Compile os assets (modo desenvolvimento):
         ```bash
         ./vendor/bin/sail npm run dev
         ```

3. Alternativa (sem Docker/Sail)

      Caso não use Docker/Sail, instale localmente as dependências (atenção a versões do PHP/Composer/Node):

      ```bash
      composer install
      npm install
      cp .env.example .env
      php artisan key:generate
      php artisan migrate:fresh --seed
      npm run dev
      ```

## Execução

### Com Docker / Sail

1. Inicie os containers:
   ```bash
   ./vendor/bin/sail up -d
   ```

2. Execute as migrations e seeders:
   ```bash
   ./vendor/bin/sail artisan migrate:fresh --seed
   ```

3. Execute o build de assets se necessário:
   ```bash
   ./vendor/bin/sail npm run dev
   ```

4. Acesse a aplicação:
   ```text
   http://localhost
   ou
   http://127.0.0.1:80
   ```
   A aplicação roda na porta `80` por padrão.

### Sem Docker

1. Inicie o servidor local do PHP:
   ```bash
   php artisan serve
   ```

2. Acesse a aplicação no navegador:
   ```text
   http://localhost
   http://127.0.0.1:80
   ```
   A aplicação roda na porta `80` por padrão.

## URL de acesso à funcionalidade desenvolvida

A funcionalidade principal está disponível na rota raiz do projeto:

```text
http://localhost/
```

## Observações

- O projeto utiliza PHP 7.4.3
- O projeto utiliza Laravel 8.83.29 e Laravel Sail para execução em container.
- Versão do NODE v18
- Banco de dados Mysql
- A funcionalidade desenvolvida exibe pedidos por motorista e permite filtrar pedidos entregues.
- O seed de dados popula pedidos com timestamps consistentes para permitir testes de filtro por data.
