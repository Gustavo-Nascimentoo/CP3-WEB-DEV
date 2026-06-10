IAS UTILIZADAS: CHATGPT, CLAUDE.AI e V0.APP

Prompt utilizado:

# Proposta Você vai criar uma aplicação web com o tema Contas em jogos online, eles sendo: 
Valorant, Fortnite, Minecraft, Resident evil 4 remake e Roblox, que simula um sistema simples de cadastro de itens. 
A aplicação deve ter uma tela de login e, após autenticação, exibir a lista com as operações de CRUD. 
coloque os preços assim: R$ 50,00, R$ 200,00, R$ 100,00, R$ 160,00 e R$80,00 respectivamente.
 A aplicação deve ter uma tela de login e, após autenticação, exibir a lista com as operações de CRUD. 

## O que a aplicação deve ter ## Tela de login A aplicação começa com o formulário de login visível e a lista oculta. 
As credenciais corretas são: 
- **Usuário:** aluno - **Senha:** fiap2025 
Se as credenciais estiverem corretas, O usuário será redirecionado para a tela de itens onde podera escolher qual irá comprar,
Se estiverem erradas, uma mensagem de erro deve aparecer na tela — não apenas no console. 

### Lista com CRUD completo Após o login, o usuário pode:
- **Adicionar** um item ao final da lista - **Adicionar** um item ao início da lista - **Ver** todos os itens exibidos dinamicamente na tela 
- **Editar** qualquer item individualmente - **Remover** qualquer item individualmente Toda vez que a lista muda, 
a tela deve ser atualizada automaticamente para refletir o estado atual dos dados. A lista deve conter pelo menos **3 itens iniciais**, 
que serão exibidos ao carregar a primeira vez a página ## Requisitos obrigatórios - A aplicação deve ser desenvolvida com 
HTML, CSS e JavaScript puro — sem frameworks ou bibliotecas externas - Os dados devem ser armazenados em um array de strings 
— sem uso de objetos dentro do array - A lógica deve ser organizada em funções nomeadas — sem código solto fora de funções, 
exceto a declaração de variáveis e a chamada inicial de renderização - Você poderá usar: funções, inputs, alerts, variáveis, loops, 
do while, while, for, concatenação, typeof, Number(), parseInt(), parseFloat(), - if, else, else if (operadores lógicos padrões), Nan, null,
undefined, booleando, strings, números, camelCaseI ## Validações obrigatórias - Os campos de login não podem ser enviados vazios 
- Nenhum item pode ser salvo com o campo vazio — a mensagem de erro deve aparecer na tela - Ao editar um item, se o usuário cancelar 
ou confirmar com o campo vazio, o item original deve permanecer sem alteração - A remoção de um item deve considerar sua posição na lista, 
não o seu valor — para evitar que itens com o mesmo texto sejam removidos ao mesmo tempo
Contendo index.html, script.js e style.css

### PROBLEMAS ENCONTRADOS EM CADA RESPOSTA
CHATGPT: Me mandou uma resposta prática de forma simples de compreender e visualizar, sendo o código mais simples dos 3.
CLAUDE.AI: Me foi entregue um código mais profissional, nitidamente superior às outras 2 IAS, porem utilizando de muitas coisas que eu não sabia, portanto eu optei por descarta-lo.
V0.APP: Me enviou um repositório completo, tendo cada uma das partes do site criado e seus componentes, sendo um pouco mais bonito do que o site do CHATGPT, porem ainda sim utilizando de alguns recursos que não abordamos em aula.


### Motivo da escolha da IA chatgpt: 

Ao gerar todas as respostas, abri uma a uma a fim de comparar e analisar as mesmas, então cheguei a conclusão após analisa-las de que apenas o chatgpt cumpriu com tudo que pedi para
ele, e me entregou o código mais simples e otimizado de forma com que eu poderia realiza-lo muito em breve, podendo ja entender e no futuro próximo aperfeiçoa-lo se necessário.