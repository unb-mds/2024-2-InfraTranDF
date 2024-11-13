Aqui está uma versão diferenciada em markdown:

---

# [InfraTranDF](https://github.com/unb-mds/2024-2-InfraTranDF)

O [InfraTranDF](https://github.com/unb-mds/2024-2-InfraTranDF) é uma iniciativa da disciplina **Métodos de Desenvolvimento de Software** com o propósito de criar uma plataforma intuitiva, onde cidadãos possam ter acesso e reportar informações sobre infrações e multas de trânsito no Distrito Federal. A ideia central é facilitar o acesso e a transparência, permitindo que usuários possam:

- **Acessar Informações sobre Infrações:** Consultar facilmente registros de infrações de trânsito, com detalhes como o tipo e descrição de cada ocorrência.
- **Reportar Incidentes:** Usuários podem relatar infrações observadas, anexando título, descrição e imagem, contribuindo ativamente para a segurança no trânsito.

Este projeto é distribuído como software livre, sob a licença [MIT](./LICENSE).

## 📑 Índice

- [InfraTranDF](#infratrandf)
  - [📑 Índice](#-índice)
  - [👤 Equipe](#-equipe)
  - [🚀 Primeiros Passos](#-primeiros-passos)
    - [🛠 Pré-requisitos](#-pré-requisitos)
    - [⚙️ Configuração do Ambiente](#️-configuração-do-ambiente)
    - [📦 Instalação das Dependências](#-instalação-das-dependências)
    - [▶️ Execução do Projeto](#️-execução-do-projeto)
      - [Sobre o Docker](#sobre-o-docker)
  - [📖 Documentação](#-documentação)
  - [🔗 Links Úteis](#-links-úteis)
    - [Diagrama de Arquitetura](#diagrama-de-arquitetura)
    - [Protótipo Visual](#protótipo-visual)

## 👤 Equipe

| Nome                           |                           GitHub                           |
| :----------------------------- | :--------------------------------------------------------: |
| Artur Handow Krauspenhar         |        [Arturhk05](https://github.com/Arturhk05)          |
| Diassis Bezerra Nascimento      |        [Diaxiz](https://github.com/Diaxiz)        |
| Eduardo de Almeida Morais    |      [Edumorais08](https://github.com/Edumorais08)      |
| Filipe Bressanelli Azevedo Filho | [fbressa](https://github.com/fbressa)    |
| Gustavo Gontijo Lima        |        [Guga301104](https://github.com/Guga301104)        |
| Leonardo Henrique Sobral Sauma Junior   |         [leohssjr](https://github.com/leohssjr)          |

## 🚀 Primeiros Passos

Para clonar este repositório, execute:

```bash
git clone https://github.com/unb-mds/2024-2-InfraTranDF.git
```

### 🛠 Pré-requisitos

Antes de rodar o projeto, instale as seguintes ferramentas:

- GNU Make 4.4 ou superior
- Python 3.10.12 e Pip 22.0.2 ou superior

### ⚙️ Configuração do Ambiente

Para configurar o ambiente de desenvolvimento, execute:

```bash
make config
```

### 📦 Instalação das Dependências

Execute os seguintes comandos para instalar as dependências:

```bash
# Crie o ambiente virtual do Python
python3 -m venv api/env

# Ative o ambiente virtual
source api/env/bin/activate

# Instale as bibliotecas para Python e Node
make install
```

### ▶️ Execução do Projeto

Para iniciar o projeto, rode:

```bash
docker compose up
```

#### Sobre o Docker

Para usos específicos do Docker, veja abaixo:

```bash
# Executar em segundo plano
docker compose up -d

# Reconstruir imagens após mudanças no Dockerfile
docker compose up --build

# Remover volumes, se necessário
docker compose down -v
```

```bash
# Atualizar a base de dados para os períodos desejados
make updatedb-all

# Comando alternativo
docker exec django-api python3 ./manage.py updatedb -a
```

## 📖 Documentação

Acesse a documentação completa do projeto [aqui](https://unb-mds.github.io/2024-2-InfraTranDF/).

## 🔗 Links Úteis

### Diagrama de Arquitetura

- Visualize o diagrama de arquitetura do projeto [aqui](https://www.figma.com/).

### Protótipo Visual

- Para visualizar o protótipo do projeto, clique [aqui](https://www.figma.com/).