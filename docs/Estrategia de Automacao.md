# Estratégia de Automação --- Projeto LumeBank {#estratégia-de-automação-projeto-lumebank}

## Objetivo

Este documento descreve a estratégia de automação de testes adotada para o projeto LumeBank.

O objetivo da automação é validar rapidamente os fluxos mais críticos da aplicação, garantindo que funcionalidades essenciais continuem funcionando após alterações no sistema ou novos deploys.

A automação foi definida com base na análise de risco do sistema, priorizando cenários de maior impacto para o usuário e para o negócio.

# Abordagem de Automação

A estratégia adotada neste projeto segue uma abordagem baseada em **priorização de risco**.

Em vez de automatizar um grande número de cenários, a automação foi direcionada para os fluxos mais críticos do sistema.

Essa abordagem permite:

- Reduzir riscos em funcionalidades essenciais

- Garantir feedback rápido após alterações no sistema

- Manter um conjunto de testes automatizados estável e de fácil manutenção

Os testes automatizados são utilizados principalmente como **Smoke Tests**, sendo executados após cada alteração no código através da pipeline de Integração Contínua.

# Critérios para seleção de testes automatizados

Antes de definir quais cenários seriam automatizados, foram considerados os seguintes critérios:

- Repetição frequente durante ciclos de teste ou regressão

- Alto impacto para o usuário caso ocorra falha

- Estabilidade do fluxo da aplicação

- Resultado previsível e verificável

- Bom custo-benefício em termos de manutenção

Esses critérios ajudam a garantir que a automação seja aplicada de forma estratégica, evitando a criação de testes frágeis ou de baixo valor.

# Priorização dos cenários para automação

A definição da ordem de automação dos testes seguiu a criticidade das funcionalidades dentro do sistema.

## 1. CT-LOGIN-01 --- Login com credenciais válidas {#ct-login-01-login-com-credenciais-válidas}

Motivos para priorização:

- Porta de entrada do sistema

- Executado em praticamente todos os ciclos de teste

- Pré-requisito para execução de outros fluxos

- Fluxo estável e previsível

## 2. CT-TRANSF-01 --- Transferência com saldo suficiente {#ct-transf-01-transferência-com-saldo-suficiente}

Motivos para priorização:

- Fluxo crítico de negócio

- Impacto financeiro direto em caso de falha

- Alto risco para o produto

- Excelente retorno quando automatizado

## 3. CT-EXTRATO-01 --- Exibição de transações {#ct-extrato-01-exibição-de-transações}

Motivos para priorização:

- Valida a consequência de uma transferência realizada

- Garante a integridade das informações apresentadas ao usuário

- Confirma a consistência dos dados no sistema

## 4. CT-LOGIN-02 --- Login com credenciais inválidas {#ct-login-02-login-com-credenciais-inválidas}

Motivos para automação posterior:

- Importante para validação de segurança

- Menor impacto direto no fluxo principal do negócio

- Pode ser automatizado após estabilização dos cenários principais

## 5. CT-TRANSF-02 --- Transferência sem saldo suficiente {#ct-transf-02-transferência-sem-saldo-suficiente}

Motivos para priorização posterior:

- Cenário negativo

- Pode gerar inconsistências em ambientes de teste dependendo do estado dos dados

- Mais adequado para fases posteriores da automação

# Papel dos testes automatizados no projeto

Os testes automatizados deste projeto possuem como principal função validar rapidamente se o fluxo principal da aplicação continua funcionando após alterações no sistema.

Os testes automatizados deste projeto podem ser executados de três formas:

1.  Execução local em modo interativo através do Cypress.

2.  Execução via terminal em modo headless.

3.  Execução automática através da pipeline de Integração Contínua no GitHub Actions.

A execução automática garante que os fluxos críticos do sistema sejam validados sempre que novas alterações forem realizadas no repositório.

# Ferramentas utilizadas na automação

A automação foi desenvolvida utilizando as seguintes tecnologias:

- Cypress

- JavaScript

- Node.js

- GitHub Actions para execução em Integração Contínua

- Mochawesome para geração de relatórios de execução

# Benefícios da estratégia adotada

A estratégia de automação aplicada neste projeto proporciona diversos benefícios:

- Validação rápida de funcionalidades críticas

- Redução do risco de falhas em produção

- Feedback rápido após alterações no código

- Base sólida para expansão futura da automação

- Melhor manutenção do conjunto de testes

Essa abordagem permite manter um conjunto de testes automatizados enxuto, confiável e alinhado com os objetivos de qualidade do produto.
