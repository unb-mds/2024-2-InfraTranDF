# React

## O que é?
React é uma biblioteca JavaScript de código aberto para a construção de interfaces de usuário, especialmente para aplicações de página única (SPA). Ele permite criar componentes reutilizáveis e gerenciar eficientemente a interface por meio de um conceito chamado de Virtual DOM.

**Lista de Coelhos:**
- Leonardo Henrique Sobral Sauma Junior

### Principais Características:
- **Componentização**: Facilita a criação de componentes modulares e reutilizáveis.
- **Virtual DOM**: Atualiza apenas partes específicas da interface, tornando as atualizações rápidas e eficientes.
- **JSX**: Uma extensão de sintaxe para JavaScript que permite escrever elementos HTML diretamente no código JS.
- **Unidirectional Data Flow**: Simplifica o gerenciamento do estado e a forma como os dados são passados pelos componentes.

## Por que usar React?
React é amplamente adotado por sua capacidade de criar UIs rápidas e interativas com uma abordagem baseada em componentes. Sua curva de aprendizado é amigável para iniciantes e oferece poderosas ferramentas para desenvolvimento em escala.

## Principais Conceitos Aprendidos
1. **Componentes**: Unidades fundamentais de um aplicativo React que podem ser funções ou classes.
2. **Props e State**: Mecanismos para passar dados e gerenciar o estado interno de um componente.
3. **Ciclo de Vida**: Métodos especiais de componentes de classe para controlar a renderização e comportamento do componente.
4. **Hooks**: Introduzidos no React 16.8, permitem o uso de estado e outros recursos de React em componentes funcionais.

## Exemplos Práticos
### Criando um Componente Simples
```javascript
import React from 'react';

function MeuComponente() {
  return <h1>Olá, Mundo!</h1>;
}

export default MeuComponente;
