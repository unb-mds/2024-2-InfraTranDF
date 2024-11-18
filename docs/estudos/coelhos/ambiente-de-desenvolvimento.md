## O que é um ambiente de desenvolvimento?

O ambiente de desenvolvimento nada mais é do que a criação das pasta onde ficará o nosso código.

**Por exemplo:** Criar uma pasta `front-end`, `back-end` e `scraper` dentro da pasta principal projeto, pois lá que os desenvolvedores irão trabalhar criando as *features* do projeto.

A criação de pastas `front-end`, `back-end` e `scraper`  são feitas na mesma pasta, já que nosso projeto deve ser estar inteiro no mesmo repositório do github. Isso facilita na hora de rodar o código inteiro e realizar alterações rápidas.

Além disso, cada pasta deve ter suas dependências necessárias para rodar o código que ela possuí.

**Por exemplo:** Em nosso projeto iremos fazer nosso `back-end` e NodeJs, logo, precisamos criar a pasta `back-end` e dentro dela rodar o comando `npm init -y`. Isso inicia o *npm* na pasta e nos permite adicionar os plugins do Node que serão usados apenas no  `back-end`.

Isso é necessário ser feito, pois além de manter organização, as dependências do `back-end` são totalmente deferentes da do `front-end`.

### E onde o docker entra nessa história?

Basicamente o Docker resolve o problema do **"funciona na minha máquina, mas não no servidor"**. No Docker você define o ambiente (sistema operacional, dependências, bibliotecas, etc.), e ele é replicado em qualquer lugar que o contêiner seja executado. Facilitando, por exemplo, o deploy em algum servidor.

Com base em nosso projeto deveríamos criar um contêiner para cada parte do projeto.
- Um contêiner com Node.js para o back-end.
- Um contêiner com Nginx para servir o front-end.
- Um contêiner com PostgreSQL para o banco de dados.

Usando um **docker-compose.yml**, você pode orquestrar esses contêineres para trabalharem juntos com apenas um comando. `docker compose up`