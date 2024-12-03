Aqui está uma versão diferenciada em markdown:

---

# [ChamaControl](https://github.com/unb-mds/2024-2-ChamaControl)

O [ChamaControl](https://github.com/unb-mds/2024-2-ChamaControl) é uma iniciativa da disciplina **Métodos de Desenvolvimento de Software** com o propósito de criar uma plataforma intuitiva, onde cidadãos possam ter acesso e monitorar informações sobre queimadas que possam estar acontecendo pelo território brasileiro. A ideia central é facilitar o acesso e a transparência, permitindo que usuários possam:

- **Visualizar Informações sobre Queimadas:** Consultar facilmente registros, condições climáticas alarmantes e alertas de possíveis ocorrências de queimadas.
- **Receber alertas personalizados:** Usuários podem filtrar determinada área do território para receber alertas.

Este projeto é distribuído como software livre, sob a licença [MIT](https://github.com/unb-mds/2024-2-ChamaControl/blob/main/LICENSE).

## 📑 Índice

- [ChamaControl](#chamacontrol)
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

| <img src="https://github.com/Arturhk05.png" width="150">  <br> [**Artur Handow Krauspenhar**](https://github.com/Arturhk05) | <img src="https://github.com/Diaxiz.png" width="150">  <br> [**Diassis Bezerra Nascimento**](https://github.com/Diaxiz) | <img src="https://github.com/Edumorais08.png" width="150">  <br> [**Eduardo de Almeida Morais**](https://github.com/Edumorais08) |
| :---------: | :---------: | :---------: |
| <img src="https://github.com/fbressa.png" width="150">  <br> [**Filipe Bressanelli Azevedo Filho**](https://github.com/fbressa) | <img src="https://github.com/Guga301104.png" width="150">  <br> [**Gustavo Gontijo Lima**](https://github.com/Guga301104) | <img src="https://github.com/leohssjr.png" width="150">  <br> [**Leonardo Henrique Sobral Sauma Junior**](https://github.com/leohssjr) |

## 🚀 Primeiros Passos

Para clonar este repositório, execute:

```bash
git clone https://github.com/unb-mds/2024-2-ChamaControl.git
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

Acesse a documentação completa do projeto [aqui](https://unb-mds.github.io/2024-2-ChamaControl/).

## 🔗 Links Úteis

### Story Map

- Para acessar o Story Map, clique [aqui](https://miro.com/app/board/uXjVL-P6Y-c=/?share_link_id=434250135699).

### Arquitetura

- Visualize o diagrama de arquitetura do projeto, clique [aqui](https://www.figma.com/).

### Protótipo Visual

- Para visualizar o protótipo do projeto, clique [aqui](https://www.figma.com/design/mPqnz5g1fNN7PVtIgwt0ln/Queimadas-UnB?node-id=0-1&node-type=canvas&t=oHqySMJ71eFv4Tow-0).
