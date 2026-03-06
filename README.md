# 🧪 LumeBank QA Automation
![Cypress Tests](https://github.com/Marcel-Abramo/lumebank-qa-automation/actions/workflows/cypress.yml/badge.svg)

Projeto de automação de testes end-to-end utilizando **Cypress**, com integração contínua via **GitHub Actions**.

O objetivo deste repositório é demonstrar como estruturar um projeto de **Qualidade de Software desde o início**, aplicando práticas reais utilizadas em times de engenharia.<br>


---

# 🎯 Objetivo do projeto

Este projeto foi desenvolvido simulando um **Projeto real de QA**, iniciando desde a **Análise de Risco do Produto** até a implementação da automação.
demonstrando uma abordagem completa de Qualidade de Software, incluindo: 
* **Análise de risco**
* **Planejamento de testes**
* **Definição de cenários críticos e**
* **Automação focada na proteção das funcionalidades mais importantes para o usuário.**

Antes de iniciar a automação foi realizada uma análise para identificar:

* Quais funcionalidades são **críticas para o usuário**
* Quais fluxos **não podem falhar em produção**
* Quais cenários devem ser validados rapidamente após um deploy

A partir dessa análise foi definido um **fluxo crítico do sistema**, que foi automatizado para servir como **Smoke Test**.<br>
Smoke Tests são testes rápidos executados após um deploy para garantir que as funcionalidades essenciais do sistema continuam operando.


Esse conjunto de testes permite validar rapidamente se as funcionalidades essenciais continuam funcionando após um **novo deploy**.

Caso os testes de smoke passem com sucesso, o processo de qualidade pode seguir para:

* Testes de integração
* Testes exploratórios
* Testes de regressão

---

# 🧠 Estratégia de testes aplicada

A automação deste projeto segue uma abordagem baseada em **Análise de Risco**.

Fluxos críticos automatizados incluem validações como:

* Acesso ao sistema
* Navegação entre funcionalidades principais
* Execução de operações essenciais
* Validações de dados apresentados ao usuário
* Verificação de comportamentos esperados da aplicação

Esses cenários garantem que **o fluxo principal do usuário continue funcionando**, mesmo após alterações no sistema.

---

# 🚀 Tecnologias utilizadas

* **JavaScript**
* **Cypress**
* **Node.js**
* **Mochawesome** (relatórios de testes)
* **GitHub Actions** (CI/CD)
* **Git**

---

# 📄 Documentação

Durante o desenvolvimento deste projeto também foram produzidos documentos comuns ao processo de Quality Assurance em projetos reais.

Esses documentos incluem:

* **Plano de Testes**
* **Casos de Teste**
* **Análise de Risco**
* **Estratégia de Automação**
  
---

# 📂 Estrutura do projeto

```text
lumebank-qa-automation
│
├── .github
│   └── workflows
│       └── cypress.yml
│
├── cypress
│   ├── e2e
│   │   ├── extrato
│   │       └── extrato.spec.cy.js
│   │   ├── login
│   │       └── login.spec.cy.js
│   │   ├── transferencia
│   │       └── transferencia.spec.cy.js
│   │
│   ├── pages
│   │   ├── loginPage.js
│   │   ├── transferenciaPage.js
│   │   └── extratoPage.js
│   │
│   ├── fixtures
│   └── support
│
├── docs
│   ├── plano-de-testes.md
│   ├── analise-de-risco.md
│   ├── casos-de-teste.md
│   └── estrategia-de-automacao.md
│  
├── cypress.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

### Descrição das principais pastas

**cypress/e2e**

Contém os cenários de testes automatizados organizados por domínio funcional do sistema.

Exemplo:

* Login
* Transferências
* Extrato

---

**cypress/pages**

Contém as Page Objects, responsáveis por encapsular interações com a interface da aplicação.

Isso traz vantagens como:

* Reutilização de código
* Melhor manutenção dos testes
* Separação entre lógica de teste e interação com UI

---

**cypress/fixtures**

Arquivos utilizados para armazenar **dados de teste**.

---

**cypress/support**

Contém **configurações e comandos customizados** utilizados para reutilização nos testes.

---

**.github/workflows**

Contém a pipeline de **Integração Contínua (CI)** responsável por executar automaticamente os testes no GitHub.

Sempre que ocorre:

* um **push**
* um **Pull Request**

os testes são executados automaticamente.

---

# ▶️ Como executar os testes

Os testes podem ser executados de três formas diferentes.

---

## 1️⃣ Execução em modo interativo (interface do Cypress)

Permite visualizar os testes sendo executados.

```bash
npx cypress open
```

---

## 2️⃣ Execução via terminal (modo headless)

Executa os testes diretamente no terminal.

```bash
npx cypress run
```

Esse modo é normalmente utilizado em **pipelines de CI**.

---

## 3️⃣ Execução automática via CI (GitHub Actions)

Os testes também são executados automaticamente pelo **GitHub Actions** através da pipeline configurada em:

```
.github/workflows/cypress.yml
```

Sempre que um **Pull Request é aberto ou um push é realizado**, o pipeline executa os testes para validar se o sistema continua funcionando corretamente.

---

# 📊 Relatórios de teste

O projeto utiliza o **Mochawesome** para geração de relatórios de execução.

Após rodar os testes:

```bash
npx cypress run
```

Os relatórios são gerados na pasta:

```
cypress/reports
```

Esses relatórios permitem visualizar:

* Cenários executados
* Cenários que passaram
* Cenários que falharam
* Tempo de execução

---

# 🔁 Qualidade contínua

Este projeto demonstra algumas práticas importantes utilizadas em times de desenvolvimento:

* Análise de risco para priorização de cenários críticos
* Automação focada em Smoke Tests
* Estrutura de testes baseada em Page Object Model (POM)
* Execução automática via CI (GitHub Actions)
* Geração de relatórios de execução

Essas práticas ajudam a garantir que **alterações no sistema não quebrem funcionalidades essenciais para o usuário final**.

---

# 👨‍💻 Autor

**Marcel Abramo**

QA Engineer | Test Automation | Quality Assurance

