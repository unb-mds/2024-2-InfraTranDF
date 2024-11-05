# Arquitetura de Software

Este estudo visa abordar os principais conceitos de Arquitetura de software e pode ser modificado.

## Arquitetura 

Noção definida dos aspectos mais importantes do design interno de um sistema de software. Uma boa arquitetura minmiza o tempo e o custo para implementar novos recursos no futuro.

## O que é?

A melhor maneira de definir e a melhor visão é **o entendimento compartilhado de que os desenvolvedores especialistas têm do design do sistema**. Também é definido como **as decisões que você gostaria de poder acertar cedo em um projeto**. Pensar arqutetonicamente sobre software é decidir o que é importante e depois, gastar energia em manter os elementos arquitetônicos em bom estado. Para um desenvolvedor se tornar um arquiteto, ele precisa ser capaz de reconhecer os elementos mais importantes, percebendo quais elementos podem resultar em problemas sérios se não forem controlados.

## Importância da arquitetura

A arquitetura é algo que os clientes não percebem imediatamente, mas a aquitetura pobre é um dos principais contribuintes para o crescimento de elementos cruft no software. Software com muitos crufts é mais fácil de ser modificado levando a recursos mais lentos e com mais defeitos.
Estamos acostumados a algo que é "high quality" como algo que custa mais. Para alguns aspectos como a experiência do usuário, isso pode ser verdade. Mas quando se trata da arquitetura a outros aspectos da qualidade interna, essa relação é invertida. **Alta qualidade interna leva a entrega mais rápida de novos recursos**.
Embora seja verdade que podemos sacrificar a qualidade para uma entrega mais rápida em curto prazo, antes que os crufts tenham impacto, as pessoas subestimam a rapidez com que o cruft leva a uma entrega mais lenta. Por mais que isso não possa ser medido de maneira objetiva, desenvolvedores experientes reconhecem que **atenção à qualidade interna compensa em semanas não em meses.**

![](https://martinfowler.com/articles/is-quality-worth-cost/both.png)


## Arquitetura de Aplicações

O primeiro problema com a definição da arquitetura de aplicativos é que não há uma definição clara do que é um aplicativo, mas pode ser razoavelmente expressado por "construção social":

- Um corpo de código feito pelos desenvolvedores como uma única unidade

- Um grupo de funcionalidades que os clientes vêem como uma única unidade

- Uma iniciativa que aqueles com dinheiro vêem como um único orçamento

Isso leva a muitos tamanhos potenciais de um aplicativo, variando de algumas pessoas a algumas centenas de pessoas na equipe de desenvolvimento.
A principal diferença para a Arquitetura Empresarial/Corporativa é que há um grau sigificativo de um propósito único em torno da "construção social".

A estrutura do design e da arquitetura de um software organiza e define como os componentes de um sistema trabalham juntos, com o objetivo de criar um produto escalável, eficiente e fácil de manter. Abaixo estão os principais elementos e camadas a serem considerados ao estruturar a arquitetura de um software.

### Camadas da Arquitetura

As camadas organizam a arquitetura para criar separação de responsabilidades e facilitar a manutenção. As camadas mais comuns são:

- Camada de Apresentação (Frontend): Responsável pela interface com o usuário. Exemplo de tecnologias incluem HTML, CSS, JavaScript, frameworks.

- Camada de Aplicação (Backend): Gerencia a lógica de negócio. Recebe as solicitações do frontend, processa e envia os dados. Pode ser implementada com frameworks.

- Camada de Persistência de Dados (Database): Gerencia o armazenamento e a recuperação de dados. Pode incluir bancos de dados relacionais (como MySQL, PostgreSQL) ou NoSQL (MongoDB, Redis).

- Camada de Serviço (Service Layer): Pode ser separada do backend para conter lógica específica que, por vezes, se integra com APIs externas ou microserviços.

Visando suprir a **camada de apresentação**, faz-se necessário a análise das vantagens e desvantagens em comparação entre os frameworks mais utilizados no Frontend:

| **Framework**               | **React**           | **Angular**        | **Vue**               | **Svelte**             | **Ember**            |
|----------------------------------|---------------------|--------------------|-----------------------|------------------------|----------------------|
| **Linguagem**                    | JavaScript          | TypeScript         | JavaScript            | JavaScript             | JavaScript           |
| **Renderização**                 | DOM Virtual         | DOM Real           | DOM Virtual           | DOM Virtual            | DOM Real             |
| **Vinculação de Dados Bidirecional** | Não                 | Sim                | Sim                   | Não                    | Sim                  |
| **Baseado em Componentes**       | Sim                 | Sim                | Sim                   | Sim                    | Sim                  |
| **Curva de Aprendizado**         | Moderada            | Íngreme            | Fácil                 | Fácil                  | Moderada             |
| **Comunidade**                   | Grande              | Grande             | Grande                | Crescente              | Média                |
| **Desempenho**                   | Alta                | Média a Alta       | Alta                  | Alta                   | Média a Alta         |
| **Tamanho do Framework**         | Leve                | Grande             | Leve                  | Muito Leve             | Média                |
| **CLI/Ferramentas Oficiais**     | Create React App    | Angular CLI        | Vue CLI               | Svelte CLI             | Ember CLI            |
| **Sistema de Reatividade**       | Props e Estado      | Vinculação de Dados Bidirecional | Vinculação de Dados Reativa | Declarações Reativas | Propriedades Computadas |

Nesse sentido, também é necessária a análise para escolha da linguagem e do framework a ser utilizado na **camada de aplicação(Backend)**:

| **Linguagem**  | **Características**                              | **Vantagens**                                       | **Limitações**                                                                  |
|----------------|--------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------------------------------|
| **JavaScript** | - Orientada a objetos                            | - Fácil de aprender                                 | - Sem suporte a multithreading ou multiprocessing                               |
|                | - Linguagem interpretada                         | - Usada tanto para backend quanto frontend          | - Sem funcionalidade de E/S para leitura ou escrita de arquivos                 |
|                | - Leve                                          | - Independente de plataforma                        | - Sem suporte a rede                                                            |
| **SQL**        | - Não requer compilação                          | - Comunidade de usuários extremamente grande        | - Dados normalizados para reduzir duplicação                                    |
|                | - Regras de sintaxe simples                      | - Linguagem de consulta padronizada                 | - Interfaces de usuário complexas                                               |
|                | - Rápida e eficiente                             | - Independente de plataforma                        | - Curva de aprendizado inicial íngreme                                          |
| **Python**     | - Orientada a objetos                            | - Ótima para desenvolvimento rápido de protótipos   | - Velocidade de execução mais lenta                                             |
|                | - Linguagem interpretada                         | - Grande suporte a bibliotecas padrão e externas    | - Fraco para computação móvel                                                   |
|                | - Menos verbosa                                  | - Independente de plataforma                        | - Usa muita memória                                                             |
| **Java**       | - Orientada a objetos                            | - Suporta multithreading                            | - Independência de plataforma é menos relevante para dependências modernas como contêineres e serviços em nuvem |
|                | - Compilada (javac) e interpretada (JVM)         | - Linguagem madura com ampla comunidade de suporte  | - Gerenciamento de memória ruim e JVM afetam o desempenho. Mais lenta que C, C++ e C# |
|                | - Linguagem segura                               | - Independente de plataforma                        | - Código verboso e complexo                                                     |
| **Bash/Shell** | - Acesso rápido e eficiente ao sistema operacional | - Ótima para automatizar tarefas repetitivas       | - Difícil escrever programas complexos em comparação com linguagens modernas    |
|                | - Interpretador de linha de comando              | - Excelente para rodar scripts de várias linguagens | - Sem suporte para programação orientada a objetos                              |
|                | - Scripts são simples de criar                   | - Pouco uso de recursos                             | - Dependente de plataforma (Linux e macOS)                                      |
| **C#**         | - Orientada a objetos                            | - Multithreading simples                            | - Mais lenta que C e C++ e requer compilação após alterações no código          |
|                | - Rápido desenvolvimento                         | - Grande comunidade de desenvolvedores              | - Não suporta programação de baixo nível                                        |
|                | - Integração com outras tecnologias .NET         | - Mais fácil de aprender que C e C++                | - Curva de aprendizado maior que outras linguagens orientadas a objetos como Python e PHP |
| **C++**        | - Orientada a objetos                            | - Linguagem de baixo nível                          | - Relativamente complexa e difícil de aprender                                  |
|                | - Linguagem geral de uso eficiente               | - Grande comunidade de desenvolvedores              | - Gerenciamento manual de memória, sem coleta de lixo                           |
|                | - Execução rápida e linguagem poderosa           | - Independente de plataforma                        | - Problemas de segurança devido ao uso de ponteiros                             |
| **PHP**        | - Orientada a objetos                            | - Curva de aprendizado baixa                        | - Desempenho relativamente ruim                                                |
|                | - Conexão de banco de dados embutida             | - Forte suporte a bibliotecas                       | - Não é ideal para aplicações de nível empresarial                              |
|                | - Menos verbosa                                  | - Independente de plataforma                        | - Questões de segurança                                                         |


| **Framework**     | **Características**                            | **Vantagens**                                                                 | **Limitações**                                                              |
|-------------------|-----------------------------------------------|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **Flask**         | - Microframework, leve e minimalista          | - Flexibilidade total para criar APIs e aplicações simples e complexas        | - Pode precisar de bibliotecas adicionais para funcionalidades avançadas    |
|                   | - Baseado em Python                           | - Curva de aprendizado suave, ideal para iniciantes                          | - Menos adequado para grandes aplicações empresariais sem extensões         |
|                   | - Suporte a extensões para aumentar a funcionalidade | - Comunidade ativa e vasta documentação disponível                           | - Necessita de um bom gerenciamento de dependências para grandes projetos   |
|                   | - Focado em desenvolvimento rápido e simples  | - Muito utilizado para prototipação rápida e MVPs                            | - Gerenciamento de usuários e autenticação requer integração com bibliotecas externas |
| **Django**        | - Full stack, baseado em Python               | - Inclui administração, autenticação e estrutura robusta                     | - Estrutura complexa, pode ter curva de aprendizado íngreme                 |
|                   | - Estrutura de ORM (Object-Relational Mapping) | - Convenções e configurações prontas, excelente para apps grandes            | - Exige seguir convenções rígidas, menos flexível que Flask                 |
|                   | - Escalável e adequado para projetos empresariais | - Grande comunidade e suporte de plugins                                     | - Framework completo pode adicionar complexidade desnecessária para projetos pequenos |
| **Express.js**    | - Minimalista, baseado em JavaScript (Node.js) | - Flexível, com suporte extensivo para middleware                            | - Necessita de pacotes externos para lidar com funcionalidades padrão       |
|                   | - Leve e rápido                               | - Excelente para microsserviços e APIs                                       | - Estrutura menos definida, exige configuração manual                       |
|                   | - Popular para desenvolvimento backend em JavaScript | - Ampla comunidade e recursos                                              | - Não inclui ORM próprio, depende de bibliotecas adicionais                 |
| **Laravel**       | - Full stack, baseado em PHP                  | - Suporte embutido para autenticação, mailing e armazenamento em cache       | - Curva de aprendizado moderada devido a muitos recursos                    |
|                   | - Estrutura MVC                               | - Ótima documentação e comunidade ativa                                     | - Pode ser lento com configurações inadequadas                              |
|                   | - Inclui Eloquent ORM para manipulação de banco de dados | - Excelente para aplicações PHP de médio a grande porte                      | - Específico para PHP, limita o uso com outras linguagens                  |
| **Spring Boot**   | - Full stack, baseado em Java                 | - Ideal para aplicações robustas e escaláveis em ambientes empresariais      | - Curva de aprendizado alta para iniciantes                                 |
|                   | - Configuração simplificada para aplicações Spring | - Suporte nativo a microsserviços e integração com ferramentas Java          | - Framework pesado, não indicado para aplicações pequenas                   |
|                   | - Suporte para segurança e autenticação avançada | - Comunidade extensa e excelente suporte para empresas                       | - Ciclo de desenvolvimento mais complexo                                    |
| **Ruby on Rails** | - Full stack, baseado em Ruby                 | - Convenções que facilitam o desenvolvimento rápido                          | - Menos adequado para aplicações de grande escala                           |
|                   | - Estrutura MVC                               | - Inclui ferramentas para CRUD, autenticação e validação                     | - Comunidade e recursos em declínio em comparação com outros frameworks     |
|                   | - Utilizado para desenvolvimento de MVPs      | - Alta produtividade com código menos verboso                                | - Framework menos popular para novos desenvolvimentos                       |
| **ASP.NET Core**  | - Full stack, baseado em C#                  | - Muito rápido, ideal para aplicações em grande escala                       | - Curva de aprendizado alta para quem não é do ecossistema Microsoft        |
|                   | - Suporte para multiplataforma (Windows, Linux) | - Excelente para integração com serviços Microsoft e em ambientes corporativos | - Comunidade menor e menos recursos gratuitos em comparação com outros      |
|                   | - Altamente escalável e bem documentado       | - Ideal para grandes equipes e ambientes empresariais                        | - Mais complexo para projetos menores                                       |
| **NestJS**        | - Full stack, baseado em TypeScript           | - Estrutura modular, facilita a manutenção de grandes projetos               | - Curva de aprendizado íngreme, especialmente para iniciantes no TypeScript |
|                   | - Inspirado em Angular, com estrutura similar | - Excelente suporte a microsserviços e APIs REST                             | - Comunidade ainda em crescimento, menos recursos que frameworks mais antigos |
|                   | - Suporte nativo para GraphQL e WebSockets    | - Muito usado em arquiteturas modernas de microsserviços                     | - Necessita de experiência com TypeScript e JavaScript avançado             |
| **Phoenix**       | - Full stack, baseado em Elixir               | - Extremamente rápido e altamente escalável                                  | - Curva de aprendizado íngreme para iniciantes no Elixir                    |
|                   | - Ideal para aplicações em tempo real         | - Excelente para aplicações com alta concorrência                            | - Menor comunidade e menos recursos disponíveis                             |
|                   | - Focado em concorrência e escalabilidade     | - Suporte a WebSockets e aplicações de chat e streaming                      | - Ecosistema em crescimento, mas menos popular que frameworks tradicionais   |


### Estilos Arquiteturais

Os estilos arquiteturais guiam a organização das camadas e dos componentes. Alguns dos mais comuns são:

- Monolítica: Toda a aplicação é executada como uma unidade. Funciona bem para sistemas menores, mas pode ser difícil de escalar conforme a aplicação cresce.

- Arquitetura em Microserviços: A aplicação é dividida em serviços menores, cada um com uma função específica. Isso facilita a escalabilidade e o desenvolvimento paralelo.

- Arquitetura Orientada a Serviços (SOA): Similar aos microserviços, mas com maior foco na reutilização de serviços, ideal para sistemas grandes que precisam de integração com outras aplicações.

- Serverless: Cada função ou serviço é hospedado e gerenciado por um provedor (como AWS Lambda ou Google Cloud Functions). É escalável e custo-efetivo para demandas irregulares.

### Padrões de Design de Software ###

Os padrões de design são soluções já testadas para problemas recorrentes, promovendo boas práticas. Alguns exemplos:

- MVC (Model-View-Controller): Organiza o código em três partes principais:
  - *Model*: Gerencia a lógica de dados e regras de negócio.
  - *View*: Interface que exibe os dados.
  - *Controller*: Lida com as solicitações do usuário e atualiza o modelo e a visão.

- MVVM (Model-View-ViewModel): Similar ao MVC, mas com uma camada de ViewModel que facilita a comunicação entre a interface e os dados.

- DAO (Data Access Object): Um padrão para abstrair o acesso a dados, isolando a camada de persistência do resto do sistema.

### Componentes Essenciais 

- Interface de Programação de Aplicações (API): Permite que diferentes sistemas se comuniquem entre si. Em arquitetura de microserviços, as APIs RESTful ou GraphQL são populares para integração.

- Mensageria e Filas: Componentes como RabbitMQ ou Kafka ajudam na comunicação assíncrona entre serviços, essencial para aplicações escaláveis.

- Autenticação e Autorização: Define a segurança do sistema. Pode incluir JWT, OAuth, OpenID Connect, entre outros mecanismos.

### Princípios de Design Arquitetural

- Separação de Responsabilidades: Cada componente deve ter uma responsabilidade única e específica, facilitando o desenvolvimento e manutenção.

- Baixo Acoplamento e Alta Coesão: Módulos devem ser pouco dependentes uns dos outros (baixo acoplamento) e conter funcionalidades relacionadas (alta coesão).

- Escalabilidade e Resiliência: A arquitetura deve ser capaz de lidar com um aumento na carga e continuar funcionando, mesmo em caso de falhas.

- Observabilidade: Ferramentas de monitoramento e logging para acompanhar o comportamento e a saúde da aplicação.

**Links do estudo:**
<br><https://martinfowler.com/architecture/>
<br><https://www.spaceotechnologies.com/blog/front-end-frameworks-comparison/>
<br><https://www.couchbase.com/blog/backend-languages/>
