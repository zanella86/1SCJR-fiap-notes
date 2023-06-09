# 1SCJR-fiap-notes

## ENUNCIADO

Implemente novas funcionalidades no fiap-notes:

1. O usuário pode editar uma nota.
2. O usuário pode filtrar notas pelo texto.
3. O usuário pode classificar notas por prioridade.

Você é livre para escolher as formas e meios para desenvolver as funcionalidades. Exemplo: Editar a nota através do formulário de inclusão, ou editar a nota diretamente no card da própria nota. Use a criatividade.
Você pode escolher no repositório https://github.com/rafanleme/1SCJR-fiap-notes.git uma das branchs abaixo para implementar a funcionalidade.
Branchs
- with-auth
- with-formik
- with-redux

## GRUPO

- RM346315: Lais Kagawa ([lakagawa](https://github.com/lakagawa))
- RM346511: Jônatha Lacerda Gonzaga ([jhowlacerda](https://github.com/jhowlacerda))
- RM346958: Thiago de Souza Zanella ([zanella86](https://github.com/zanella86))

## FERRAMENTAS / TECNOLOGIAS
- Git / Github
- Visual Studio Code
    - Plugin `GoLive`: Para rápida atualização das alterações no navegador.
    - Plugin `vscode-styled-components`: Para formatação do CSS dentro do `Template String` (intellisense).
- ReactJS
- Vite (com Typescript)
- NodeJS

## CONSTRUÇÃO / DESENVOLVIMENTO

**Branch escolhida:** `with-auth`

Configuração inicial do projeto (no repositório de origem):

`npm create vite@latest`

> Opções: y / React / TypeScript

Comando(s) utilizado(s) para configuração do ambiente:

- `npm install`

Comando para geração de pacote: `npm run build`

## PARA TESTAR

Inicie o ambiente utilizando o comando: `npm run dev`

Para efetuar login na aplicação, será necessário consultar os dados de acesso do usuário padrão na [API](https://github.com/rafanleme/fiap-notes-api).

### Funcionalidade de classificação das notas:

![Test-PrioritizeNotes](/images/test_prioritize_notes_01.PNG)

1. Cadastre aleatoriamente algumas notas com e sem urgência;
2. Clique no botão com o símbolo "!";
3. Verifique que as notas urgentes (vermelhas) assumiram posições prioritárias em relação as notas comuns.

![Test-PrioritizeNotesResult](/images/test_prioritize_notes_02.PNG)

### Funcionalidade de filtro das notas:

![Test-PrioritizeNotesResult](/images/test_filter_notes_01.PNG)

1. Digite o texto que deseja procurar;
2. Clique no botão pesquisar;
3. Para listar todos os itens novamente, apague o que foi digitado na pesquisa e clique no botão pesquisar.

### Funcionalidade de edição das notas

1. Adicionado na nota um novo botão para chamada da interface de edição:

![Test-EditNote](/images/test_edit_note_01.PNG)

2. Após clicar no botão será exibida uma tela com a possibilidade de alterar o texto da nota e alterar a opção urgente.

![Test-EditNote](/images/test_edit_note_02.PNG)

3.  Depois de realizar a alteração que deseja, basta clicar em salvar e a alteração será concluida.

![Test-EditNote](/images/test_edit_note_03.PNG)


## REFERÊNCIAS

- [FIAP - Profº Rafael N. Leme (Projeto base: 1SCJR-fiap-notes)](https://github.com/rafanleme/1SCJR-fiap-notes.git)
- [FIAP - Profº Rafael N. Leme (Projeto API: fiap-notes-api)](https://github.com/rafanleme/fiap-notes-api)
- [Conteúdo/Tutorial](https://regular-diver-ad6.notion.site/ReactJS-1cc9a8c21e434804b97f03d034a37c14)
- [Git rebase squash: Melhorando o historico](https://medium.com/cwi-software/utilizando-rebase-e-squash-para-melhorar-o-hist%C3%B3rico-do-git-fdb2d952c09c)
- [Styled Icons: Search](https://styled-icons.dev/?s=)
- [JavaScript - Find and replace in array](https://inspiredwebdev.com/find-replace-in-array/)
- [JavaScrit - Array Find Index Object Property](https://bobbyhadz.com/blog/javascript-array-find-index-of-object-by-property)
- [JavaScript - Splice](https://www.javascripttutorial.net/javascript-array-splice/)