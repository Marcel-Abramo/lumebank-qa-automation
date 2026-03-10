# Matriz de Rastreabilidade --- Projeto LumeBank {#matriz-de-rastreabilidade-projeto-lumebank}

## Introdução

A Matriz de Rastreabilidade de Testes (Test Traceability Matrix --- RTM) é um artefato utilizado em processos de Quality Assurance para estabelecer a relação entre riscos do sistema, funcionalidades, casos de teste e automação.

O objetivo da matriz é garantir que os riscos mais relevantes do sistema estejam cobertos por testes adequados, permitindo rastrear quais funcionalidades foram validadas e quais cenários foram automatizados.

Essa prática ajuda a demonstrar que a estratégia de testes foi definida de forma estruturada e baseada em análise de risco.

## Objetivo da Matriz de Rastreabilidade

A matriz de rastreabilidade tem como principais objetivos:

- Garantir cobertura adequada dos riscos identificados no sistema

- Demonstrar a relação entre funcionalidades críticas e casos de teste

- Facilitar a identificação de lacunas de teste

- Apoiar a priorização da automação de cenários críticos

- Aumentar a transparência do processo de qualidade

## Estrutura da Matriz

A matriz conecta os seguintes elementos:

- **Risco identificado** --- Possível falha que pode impactar o sistema ou o usuário.

- **Funcionalidade** --- Parte da aplicação relacionada ao risco.

- **Caso de Teste** --- Cenário criado para validar o comportamento esperado.

- **Automação** --- Indicação se o caso foi automatizado ou planejado para automação.

## 

## 

## 

## 

## Matriz de Rastreabilidade

| **Risco Identificado**                                  | **Funcionalidade** | **Caso de Teste**                                   | **Tipo de Teste** | **Automação** |
|---------------------------------------------------------|--------------------|-----------------------------------------------------|-------------------|---------------|
| Usuário não conseguir acessar o sistema                 | Login              | CT-LOGIN-01 --- Login com credenciais válidas       | Funcional         | Sim           |
| Sistema permitir acesso com credenciais inválidas       | Login              | CT-LOGIN-02 --- Login com credenciais inválidas     | Negativo          | Sim           |
| Transferência de valores não ser executada corretamente | Transferência      | CT-TRANSF-01 --- Transferência com saldo suficiente | End-to-End        | Sim           |
| Sistema permitir transferência sem saldo                | Transferência      | CT-TRANSF-02 --- Transferência sem saldo suficiente | Negativo          | Planejado     |
| Transações não aparecerem no histórico do usuário       | Extrato            | CT-EXTRATO-01 --- Exibição de transações no extrato | Integração        | Sim           |

## Cobertura de Riscos

A matriz demonstra que os principais riscos do sistema foram considerados durante o planejamento de testes.

Os cenários selecionados focam principalmente em:

- Fluxos críticos de negócio

- Segurança de acesso ao sistema

- Integridade de operações financeiras

- Consistência das informações apresentadas ao usuário

A priorização dos testes considerou o impacto que uma falha poderia causar na experiência do usuário e na confiabilidade do sistema.

## Relação com a Estratégia de Automação

Os cenários automatizados neste projeto foram selecionados com base em critérios como:

- Criticidade da funcionalidade

- Frequência de execução dos testes

- Estabilidade do fluxo

- Retorno sobre investimento em automação

Essa abordagem permite que os testes automatizados atuem como **Smoke Tests**, garantindo rapidamente que os fluxos principais do sistema continuem funcionando após alterações no código ou novos deploys.

## Benefícios para o Processo de Qualidade

A utilização da matriz de rastreabilidade traz diversos benefícios para o processo de qualidade, incluindo:

- Visibilidade clara da cobertura de testes

- Melhor gestão de riscos

- Facilidade na priorização de testes

- Apoio à estratégia de automação

Além disso, essa prática demonstra uma abordagem estruturada de Quality Assurance, alinhada com práticas utilizadas em projetos reais de engenharia de software.
