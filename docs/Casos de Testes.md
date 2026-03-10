<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-LOGIN-01</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td><strong>Login com credenciais válidas</strong></td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Validar que o usuário consegue acessar o sistema ao informar credenciais válidas</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>Usuário cadastrado no sistema</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><ol type="1">
<li><p>Acessar a página de login<br />
https://lumebank-414408088991.us-west1.run.app/</p></li>
<li><p>Informar e-mail válido<br />
bob@lume.com</p></li>
<li><p>Informar senha válida<br />
password123</p></li>
<li><blockquote>
<p>Clicar em “Entrar”</p>
</blockquote></li>
</ol></td>
</tr>
<tr class="odd">
<td>Resultado esperado</td>
<td>Usuário autenticado e redirecionado para o dashboard</td>
</tr>
<tr class="even">
<td>Cenário de teste</td>
<td>Login válido (fluxo positivo)</td>
</tr>
<tr class="odd">
<td>Ambiente de teste</td>
<td>Web | Chrome</td>
</tr>
<tr class="even">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado</td>
</tr>
<tr class="odd">
<td>Status</td>
<td><strong>Passou</strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-LOGIN-02</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td><strong>Login com credenciais inválidas</strong></td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Validar mensagem de erro ao tentar login com credenciais inválidas</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>Usuário cadastrado no sistema</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><ol type="1">
<li><p>Acessar a página de login<br />
https://lumebank-414408088991.us-west1.run.app/</p></li>
<li><p>Informar e-mail inválido<br />
teste@teste.com</p></li>
<li><p>Informar senha inválida<br />
123456</p></li>
<li><p>Clicar em “Entrar”</p></li>
</ol></td>
</tr>
<tr class="odd">
<td>Resultado esperado</td>
<td>Mensagem de erro “Credenciais inválidas” é exibida e acesso é negado.</td>
</tr>
<tr class="even">
<td>Cenário de teste</td>
<td>Login inválido (fluxo negativo)</td>
</tr>
<tr class="odd">
<td>Ambiente de teste</td>
<td>Web | Chrome</td>
</tr>
<tr class="even">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado</td>
</tr>
<tr class="odd">
<td>Status</td>
<td><strong>Passou</strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-TRANSF-01</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td><strong>Transferência com saldo suficiente</strong></td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Validar transferência entre contas com saldo suficiente</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>Usuário autenticado<br />
Conta origem com saldo disponível</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><ol type="1">
<li><blockquote>
<p>Acessar a área de transferências</p>
</blockquote></li>
<li><blockquote>
<p>Selecionar a opção “Para Outro Usuário”</p>
</blockquote></li>
<li><blockquote>
<p>Selecionar conta de origem – “Conta Corrente”</p>
</blockquote></li>
<li><p>Informar conta de destino válida – “alice@lume.com”</p></li>
<li><blockquote>
<p>Informar valor dentro do limite – “ 50”</p>
</blockquote></li>
<li><blockquote>
<p>Confirmar transferência</p>
</blockquote></li>
</ol></td>
</tr>
<tr class="odd">
<td>Resultado esperado</td>
<td>Mensagem de “Transferência realizada com sucesso!” aparece na tela e o saldo é atualizado confirmando a transação.</td>
</tr>
<tr class="even">
<td>Cenário de teste</td>
<td>Transferência válida</td>
</tr>
<tr class="odd">
<td>Ambiente de teste</td>
<td>Web | Chrome</td>
</tr>
<tr class="even">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado</td>
</tr>
<tr class="odd">
<td>Status</td>
<td><strong>Passou</strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-TRANSF-02</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td><strong>Transferência sem saldo suficiente</strong></td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Validar bloqueio de transferência quando o saldo é insuficiente</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>Usuário autenticado<br />
Saldo insuficiente na conta origem</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><ol type="1">
<li><p>Acessar a área de transferências</p></li>
<li><p>Selecionar a opção “Para Outro Usuário”</p></li>
<li><p>Selecionar conta de origem – “Conta Corrente”</p></li>
<li><p>Informar conta de destino válida – “alice@lume.com”</p></li>
<li><p>Informar valor acima do limite – “999999”</p></li>
<li><p>Confirmar transferência</p></li>
</ol></td>
</tr>
<tr class="odd">
<td>Resultado esperado</td>
<td>Mensagem de “Saldo insuficiente” é mostrada informando saldo insuficiente e a transação não prossegue.</td>
</tr>
<tr class="even">
<td>Cenário de teste</td>
<td>Transferência inválida</td>
</tr>
<tr class="odd">
<td>Ambiente de teste</td>
<td>Web | Chrome</td>
</tr>
<tr class="even">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado</td>
</tr>
<tr class="odd">
<td>Status</td>
<td><strong>Passou</strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-EXTRATO-01</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td><strong>Exibição de transações realizadas</strong></td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Validar que as transferências realizadas aparecem no extrato</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>Usuário autenticado<br />
Transferência realizada com sucesso</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><ol type="1">
<li><blockquote>
<p>Acessar a área de Extrato</p>
</blockquote></li>
<li><blockquote>
<p>Visualizar lista de transações</p>
</blockquote></li>
</ol></td>
</tr>
<tr class="odd">
<td>Resultado esperado</td>
<td>Transação exibida corretamente no extrato</td>
</tr>
<tr class="even">
<td>Cenário de teste</td>
<td>Consulta de extrato</td>
</tr>
<tr class="odd">
<td>Ambiente de teste</td>
<td>Web | Chrome</td>
</tr>
<tr class="even">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado</td>
</tr>
<tr class="odd">
<td>Status</td>
<td><strong>Passou</strong></td>
</tr>
</tbody>
</table>
