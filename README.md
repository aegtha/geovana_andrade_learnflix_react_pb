
Created with CodeSandbox
# 🎓 LearnFlix - Plataforma Educacional

Projeto desenvolvido como parte do **TP3 da disciplina de Desenvolvimento Front-end com Frameworks**. O LearnFlix é uma aplicação Single-Page (SPA) focada em resolver desafios na gestão acadêmica, unificando as necessidades de professores, alunos e gestores.

---

## 🚀 Tecnologias e Práticas Utilizadas

* **React (JSX):** Construção de interface em componentes dinâmicos e reutilizáveis.
* **React Router Dom:** Navegação fluida entre páginas (Home e Painel) sem recarregar o navegador.
* **Mobile-First & CSS Responsivo:** Layout adaptável para smartphones, tablets e desktops.
* **Fetch API:** Consumo de dados dinâmicos utilizando a API pública JSONPlaceholder.
* **React Hooks:** Gerenciamento de estado e ciclo de vida (`useState`, `useEffect`).

---

## 📖 Histórias de Usuário (Revisadas)

1. **Professor:** Como professor, quero organizar meus conteúdos por módulos e competências para facilitar meu planejamento didático e acompanhar o desempenho individualizado dos alunos.
2. **Aluno:** Como aluno, quero visualizar facilmente meus materiais didáticos, a lista dinâmica do corpo docente, prazos de entrega e progresso acadêmico em uma única tela.
3. **Gestor Acadêmico:** Como gestor acadêmico, quero acessar um painel com dados unificados e relatórios de indicadores institucionais para tomar decisões pedagógicas embasadas.

---

## ⚙️ Funcionalidades Implementadas nesta Etapa (TP3)

* Estrutura Single-Page Application com rotas navegáveis.
* Componentes genéricos (`Card`, `Header`, `Hero`) que se adaptam ao contexto e aos dados passados por *props*.
* Tela de "Painel" que consome uma API externa e renderiza uma lista de usuários de forma reativa.
* Barra de pesquisa com filtro em tempo real (atualização de interface imediata à interação do usuário).
* Tratamento de erros de rede e visualização de estado de carregamento.

---

## 📋 Backlog do Produto (Próximas Sprints)

* **[Nova Funcionalidade]** Implementar sistema de Autenticação (Login/Senha) diferenciando perfis (via Firebase ou JWT).
* **[Nova Funcionalidade]** Criar o CRUD completo para a gestão de disciplinas e módulos.
* **[Refactoring]** Implementar gerenciador de estado global (Context API ou Redux).
* **[Testes]** Desenvolver testes unitários para os componentes reutilizáveis base utilizando Jest e React Testing Library.
* **[Refactoring]** Isolar a lógica de chamadas de API em serviços personalizados (Custom Hooks).

---

## 👩‍💻 Autora

**Geovana Andrade Trigueiro**
