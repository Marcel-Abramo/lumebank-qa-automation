# Pirâmide de Testes --- Estratégia de Testes {#pirâmide-de-testes-estratégia-de-testes}

## Introdução

Este projeto segue os princípios da **Test Pyramid**, um modelo amplamente utilizado na engenharia de software para organizar a estratégia de testes de acordo com seu nível de custo, velocidade de execução e cobertura do sistema.

A pirâmide de testes foi popularizada por Mike Cohn e propõe uma distribuição equilibrada entre diferentes tipos de testes.

A estrutura da pirâmide é composta por três níveis principais:

- Testes Unitários

- Testes de Integração

- Testes End-to-End

Cada camada possui objetivos e características específicas.

## Estrutura da Pirâmide de Testes

### Testes Unitários

Testes unitários validam pequenas partes da aplicação de forma isolada, como funções, métodos ou regras de negócio específicas.

Esses testes possuem as seguintes características:

- Execução extremamente rápida

- Baixo custo de manutenção

- Alta cobertura de código

- Execução frequente durante o desenvolvimento

Normalmente são implementados pelos desenvolvedores e executados durante o processo de desenvolvimento da aplicação.

### Testes de Integração

Testes de integração validam a comunicação entre diferentes partes do sistema.

Eles garantem que módulos, serviços ou componentes funcionem corretamente quando combinados.

Exemplos de validação nesse nível incluem:

- Comunicação entre serviços

- Integração entre API e banco de dados

- Consistência entre funcionalidades relacionadas

Esses testes são importantes para garantir que diferentes partes da aplicação funcionem corretamente em conjunto.

### Testes End-to-End

Testes End-to-End validam o comportamento completo do sistema a partir da perspectiva do usuário final.

Eles simulam interações reais com a aplicação, como navegação, preenchimento de formulários e execução de operações do sistema.

Esses testes possuem as seguintes características:

- Validação completa do fluxo do usuário

- Maior custo de execução

- Execução mais lenta

- Maior sensibilidade a mudanças na interface

Por esse motivo, recomenda-se que a quantidade de testes End-to-End seja menor em comparação com outras camadas da pirâmide.

## Aplicação da Pirâmide neste Projeto

Este projeto foca principalmente na camada de **Testes End-to-End**, utilizando Cypress para validar os fluxos críticos da aplicação.

Os cenários automatizados simulam operações reais do usuário, incluindo:

- Autenticação no sistema

- Execução de transferências

- Verificação de movimentações no extrato

Esses testes garantem que as funcionalidades principais do sistema estejam operando corretamente após alterações no código ou novos deploys.

## Validação indireta de integração

Embora o foco principal esteja na camada de testes End-to-End, alguns cenários também validam indiretamente integrações entre funcionalidades.

Um exemplo disso ocorre quando uma transferência realizada é posteriormente validada no extrato da aplicação.

Esse tipo de verificação confirma que diferentes partes do sistema estão funcionando corretamente em conjunto.

## Limitações do projeto

Como este projeto tem como objetivo demonstrar a aplicação de automação de testes no nível de interface, não foram implementados testes unitários ou testes de integração diretamente no código da aplicação.

Entretanto, a estratégia adotada segue os princípios da pirâmide de testes e demonstra como os testes End-to-End podem ser utilizados para proteger os fluxos críticos do sistema.
