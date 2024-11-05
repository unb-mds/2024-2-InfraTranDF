# Padronização dos commits

O [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) é uma convenção simples de mensagens de commit, que segue um conjunto de regras e que ajuda os projetos a terem um histórico de commit explícito e bem estruturado.

Um padrão de commits ajuda a equipe a entender quais alterações foram realizadas no projeto e desestimula a mudança desordenada. No começo pode haver uma perda de tempo na padronização, entretando isso mantem a organização e salva tempo no longo prazo.

## Como utilizar

As regras são muito simples, como demonstrado abaixo temos um:
- **type** - Tipo do commit
- **scope** - escopo/contexto do commit
- **subject** - assunto/menssagem do commit

`!type(?scope): !subject`

Dessa maneira,`!` indica os atributos obrigatórios e `?` indica os atributos não obrigatórios.

## Subject

É um boa prática escrever manter a **menssagem do commit no imperativo.**

**Exemplo:**
````bash
git commit -m "feat: criou uma nova rota /users"
git commit -m "feat: cria uma nova rota /users"
````

## Tipos de commits

O **type** é o principal responsável por nos mostrar qual o de alteração que está sendo feita. Das regras de convenção, temos:

- `test`: indica qualquer tipo de criação ou alteração de códigos de teste.
    - **Exemplo:** Criação de testes unitários.
- `feat`: indica o desenvolvimento de uma nova feature ao projeto. 
    - **Exemplo:** Acréscimo de um serviço, funcionalidade, endpoint, etc.
- `refactor`: usado quando houver uma refatoração de código que não tenha qualquer tipo de impacto na lógica/regras de negócio do sistema. 
    - **Exemplo:** Mudanças de código após um code review
- `style`: empregado quando há mudanças de formatação e estilo do código que não alteram o sistema de nenhuma forma.
    - **Exemplo:** Mudar o style-guide, mudar de convenção lint, arrumar indentações, remover espaços em brancos, remover comentários, etc..
- `fix`: utilizado quando há correção de erros que estão gerando bugs no sistema.
    - **Exemplo:** Aplicar tratativa para uma função que não está tendo o comportamento esperado e retornando erro.
- `chore`: indica mudanças no projeto que não afetem o sistema ou arquivos de testes. São mudanças de desenvolvimento.
    - **Exemplo:** Mudar regras do eslint, adicionar prettier, adicionar mais extensões de arquivos ao .gitignore
- `docs`: usado quando há mudanças na documentação do projeto.
    - **Exemplo:** adicionar informações na documentação da API, mudar o README, etc.
- `build`: utilizada para indicar mudanças que afetam o processo de build do projeto ou dependências externas.
    - **Exemplo:** Gulp, adicionar/remover dependências do npm, etc.
- `perf`: indica uma alteração que melhorou a performance do sistema.
    - **Exemplo:** alterar ForEach por while, melhorar a query ao banco, etc.
- `ci`: utilizada para mudanças nos arquivos de configuração de CI.
    - **Exemplo:** Circle, Travis, BrowserStack, etc.
- `revert`: indica a reverão de um commit anterior.
- `study`: indica a alteração ou criação de um estudo.

## Importante

- Só pode haver um type por commit;
- O type é obrigatório;
- Caso esteja indeciso sobre qual o *type* usar, provalvelmente trata-se de uma grande mudança e é possível separar esse *commit* em dois ou mais.

## Scopo

Quando o repositório é grande ou têm várias *features* fica difícil entender onde a mudança que irá chegar pode mudar. Para isso utilizamos o escopo do *commit*.

````bash
git commit -m "feat(userService): cria o endpoint /getAppointments"
````

Além disso, no caso do scope é possível adicionarmos **múltiplos valores**, como por exemplo: Caso houvesse uma refatoração de código em um repositório com versões mobile, web e desktop. A qual afeta o contexto mobile e web, poderíamos escrever o commit da seguinte maneira:

````bash
git commit -m "refactor(web/mobile): muda os logs do createUser()"
````