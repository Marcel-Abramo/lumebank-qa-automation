# Análise de Risco --- Projeto LumeBank {#análise-de-risco-projeto-lumebank}

## Objetivo

Este documento apresenta a análise de risco realizada para o projeto LumeBank, com o objetivo de identificar quais funcionalidades possuem maior impacto para o usuário e para o negócio.

A partir dessa análise foi possível priorizar os cenários mais críticos do sistema, orientar a criação dos casos de teste e definir quais fluxos deveriam ser automatizados inicialmente.

O foco desta análise é garantir que os fluxos mais importantes do sistema sejam protegidos contra falhas, reduzindo riscos para o usuário final e aumentando a confiabilidade da aplicação.

# Abordagem de Análise de Risco

A priorização dos testes foi baseada em três fatores principais:

- Impacto para o usuário

- Probabilidade de falha

- Impacto para o negócio

Com base nesses critérios foi possível identificar quais funcionalidades representam maior risco caso apresentem falhas.

Essa análise permitiu direcionar o esforço de testes para os fluxos que realmente podem comprometer a experiência do usuário ou a integridade do sistema.

# Funcionalidades avaliadas

As funcionalidades principais do sistema foram analisadas considerando risco e impacto.

| **Funcionalidade**     | **Nível de risco** | **Impacto**                    |
|------------------------|--------------------|--------------------------------|
| Login                  | Muito alto         | Bloqueia acesso ao sistema     |
| Transferência válida   | Crítico            | Impacto financeiro             |
| Transferência inválida | Crítico            | Prevenção de erros de operação |
| Extrato                | Alto               | Confiabilidade das informações |
| Login inválido         | Alto               | Segurança e controle de acesso |

Caso qualquer uma dessas funcionalidades apresente falhas, o produto deixa de atender corretamente às necessidades do usuário.

Por esse motivo, esses fluxos foram considerados prioritários dentro da estratégia de testes.

# Estratégia de priorização dos testes

A definição dos casos de teste não foi baseada em quantidade, mas sim em critério.

Em projetos de portfólio, assim como em projetos reais com prazos limitados, o objetivo não é listar todos os testes possíveis, mas sim demonstrar:

- Capacidade de análise

- Critério de priorização

- Redução de risco

- Preparação para automação

A escolha de um conjunto enxuto de testes permite manter clareza estratégica e foco nas funcionalidades mais importantes do sistema.

# Casos de teste priorizados

Foram definidos cinco casos de teste principais, cobrindo os fluxos de maior risco da aplicação.

Esses casos são responsáveis por validar os comportamentos essenciais do sistema.

Os cenários priorizados incluem:

- Login com credenciais válidas

- Login com credenciais inválidas

- Transferência válida entre contas

- Tentativa de transferência inválida (exemplo: saldo insuficiente)

- Verificação do extrato após movimentações

Esses cenários garantem a validação das funcionalidades essenciais que sustentam a operação do sistema.

# 

# Aplicação de técnicas de projeto de testes

A definição dos casos de teste foi baseada na técnica de **Partição de Equivalência**.

Essa técnica permite representar múltiplos cenários através de um único caso de teste representativo.

Por exemplo:

- O caso de teste de transferência válida representa toda a partição de valores válidos.

- O caso de teste de transferência inválida representa a partição de erros críticos relacionados à operação.

Isso significa que um único caso de teste pode validar uma classe inteira de comportamentos semelhantes.

Essa abordagem torna o conjunto de testes mais eficiente e evita redundância.

# Relação com a estratégia de automação

Os casos de teste selecionados também foram escolhidos considerando sua viabilidade para automação.

Cada um desses cenários possui características ideais para automação, como:

- Fluxo estável

- Execução repetitiva

- Resultados previsíveis

- Alto valor quando executado frequentemente

Essas características tornam esses testes ideais para compor um conjunto de **Smoke Tests automatizados**.

# Papel dos testes automatizados

Os cenários automatizados têm como objetivo validar rapidamente se o fluxo principal do sistema continua funcionando após alterações no código ou novos deploys.

Esses testes funcionam como uma primeira camada de proteção do sistema.

Caso os testes de smoke falhem, isso indica rapidamente que uma funcionalidade crítica foi impactada.

Se os testes forem aprovados, o processo de qualidade pode avançar para outros níveis de validação, como:

- Testes de integração

- Testes exploratórios

- Testes de regressão

# Benefícios da abordagem adotada

A análise de risco aplicada neste projeto traz alguns benefícios importantes:

- Redução do risco de falhas em funcionalidades críticas

- Foco nos fluxos mais importantes do sistema

- Uso eficiente do esforço de testes

- Base sólida para automação

- Clareza na priorização de cenários

Essa abordagem reflete práticas utilizadas em equipes de engenharia de software que adotam estratégias de qualidade baseadas em risco.
