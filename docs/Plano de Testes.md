# ESCOPO DO PLANO DE TESTES --- Projeto LumeBank {#escopo-do-plano-de-testes-projeto-lumebank}

## Objetivo do Plano de Testes

Garantir que as funcionalidades críticas do LumeBank funcionem corretamente, respeitando as regras de negócio, com foco em qualidade, previsibilidade e redução de riscos, dentro de um escopo controlado e viável.

# Funcionalidades incluídas no escopo

Essas funcionalidades foram escolhidas considerando valor de negócio, risco e potencial de automação.

## Login

- Autenticação com credenciais válidas

- Validações de campos obrigatórios

- Mensagens de erro

- Acesso autorizado e não autorizado

Motivo:  
Funcionalidade crítica, ponto de entrada do sistema.

## Dashboard

- Exibição do nome do usuário

- Exibição de saldo total

- Exibição de saldo por conta (corrente e poupança)

- Navegação via menu lateral

Motivo:  
Tela principal após login, concentração de informações sensíveis.

## Transferências

- Transferência entre contas válidas

- Validação de saldo suficiente

- Validação de valores inválidos

- Atualização de saldo após transferência

Motivo:  
Fluxo crítico de negócio, alto impacto em caso de falha.

## Extrato

- Exibição de transações realizadas

- Consistência entre transferências e extrato

- Ordem cronológica das movimentações

Motivo:  
Confirmação de ações passadas e confiabilidade dos dados.

# Funcionalidades fora do escopo

Essas funcionalidades foram deliberadamente excluídas para manter o projeto enxuto.

- Loja

- Snake Game

- Ajustes puramente visuais (UI/UX)

- Testes de performance avançados

- Testes de segurança (pentest)

Essas funcionalidades podem ser testadas em fases futuras.

# Premissas

- O ambiente de testes estará disponível e estável

- Usuários de teste fornecidos pela aplicação serão utilizados

- Não haverá alteração significativa de requisitos durante o ciclo de testes

# Riscos

- Falta de documentação formal de requisitos

- Mudanças de comportamento sem aviso

- Dependência de dados fixos no ambiente

Esses riscos serão mitigados com testes exploratórios e comunicação clara via bug report.

# Estratégia geral

- Testes manuais no início

- Uso de técnicas de projeto de testes

- Casos de teste derivados do plano

- Preparação para automação com Cypress

- Automação focada em fluxos críticos

# Tipos de teste aplicados

Os seguintes tipos de testes serão aplicados durante o ciclo de testes.

## Testes Funcionais

Validação do comportamento esperado das funcionalidades.

## Testes de Integração

Validação da consistência entre funcionalidades (exemplo: transferência refletida no extrato).

## Testes Exploratórios

Execução de testes sem roteiro pré-definido para identificar comportamentos inesperados.

## Smoke Tests

Execução rápida de cenários críticos após deploy para validar funcionamento do sistema.

# Critérios de Entrada

Para iniciar a execução dos testes, os seguintes critérios devem ser atendidos:

- Ambiente de testes disponível

- Build da aplicação estável

- Acesso a usuários de teste

- Funcionalidades básicas acessíveis

# Critérios de Saída

Os testes serão considerados concluídos quando:

- Todos os casos de teste do escopo forem executados

- Bugs críticos forem resolvidos ou documentados

- Fluxos principais do sistema estiverem estáveis

# Ambiente de Teste

Aplicação: LumeBank  
Tipo de aplicação: Web

Ferramentas utilizadas:

- Cypress

- JavaScript

- Node.js

- GitHub Actions

Navegadores suportados:

- Google Chrome
