# Introdução ao Full-Stack

## notas de desenvolvimento:
    - tema claro e escuro (não obrigatório):
        []criar 3 arrays armazenando cada um o "document.getElementById()" para cada cor da paleta
        []criar 3 funções map, uma para cada array, sendo que cada uma troca sua cor para o oposto
        []criar 3 classes de tema claro e 3 de tema escuro (por padrão fica como escuro)
        []criar um botão personalizado do tipo checkbox
        []armazenar o tema escuro em cookie
        []ao clicar no botão, executa a função que usa as 3 funções map, que utilizam o toogle
        []alterar o cookie
    
    - introdução ao sequelize
        [x]criar uma tabela para o banco de dados local
        [x]introduzir ao front end

    - estilização
        []página inicial
        [x]sobre nós
        []jogos(total)
        []jogos(individual)
# Maneira de instalação
- digite ```npm install```, tanto na pasta raiz quanto na pasta **client**
- crie na pasta raiz o seu arquivo ```.env```, contendo a sua chave de api da [Rawg.io](https://rawg.io), senha de servidor postgre e chave para permissão de alteração de dados
- crie usuários dentro da tabela ```user```
- para inicialização digite em um terminal ```npm run sever```, e em outro digite ```npm run client```. Se conseguir usar **concurrently**, apenas digite ```npm start```
- acessando a área de cliente pelo navegador acesse o __path__: ```/admin```, digite o usuário e senha, e adicione a avaliação de jogo que desejar