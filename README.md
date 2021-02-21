# All Things Weather
O All Things Weather é um projeto desenvolvido durante o processo seletivo de Tech Leads da EJCM. 
Consiste em um app simples para informação sobre o clima em diferentes cidades.
## Tecnologias usadas
### NPM
O NPM (Node Package Manager) é um gerenciador de pacotes para o Javascript. Gerenciadores de pacotes são coleções de ferramentas de software que automatizam o processo de instalação, atualização, configuração e remoção de programas em um computador. No contexto aqui tratado, o NPM oferece uma interface de comando que pode acessada através do terminal e usada para instalar módulos e bibliotecas que a aplicação precisa.
### Git, Github e Git Bash
O Git é um sistema de controle de versão, isto é, uma tecnologia que permite a desenvolvedores criar e gerenciar diferentes versões de seu código ao longo de seus projetos. Geralmente interagimos com o Git através da CLI de um interpretador de comandos conhecido como Git Bash. 
### Angular
O Angular é uma plataforma e framework para construção de interfaces de aplicações baseado em Typescript. Usamos o Angular em conjunto com o Ionic no desenvolvimento do fron-end.  
### Ionic
É um framework que oferece um conjunto de ferramentas para desenvolvimento de interfaces gráficas que visa facilitar a construção de aplicações mobile e desktop com tecnologias web (HTML, CSS e Javascript). Geralmente usamos o Ionic em conjunto com o Angular.  
### VSCode
É um editor de código fonte desenvolvido pela Microsoft. É com ele que construímos o código de aplicações.  
## Instalação
### NPM
O NPM vem em conjunto com o Node.js, que é um ambiente de execução de Javascript.  
Portando é necessário instalar o Node. Para isso baixe e execute seu instalador no [site do Node.js](https://nodejs.org/en/download/).  
### Git Bash
Pala instalar o Git Bash, baixe e execute o seu instalador a partir [daqui](https://gitforwindows.org/).  
### VSCode  
O [site do VSCode](https://code.visualstudio.com/) também oferece um instalador para ser usado.  
Dica: você pode desejar ativar o mecanismo de *word wrap* no VSCode ao iniciá-lo, para isso siga até *File->Preferences->Settings*, selecione a tag *Commonly Used*, role para baixo até ativar a opção  *Word Wrap* e mude-a de *off* para *on*.  
### Angular e Ionic  
A instalação de ambos é feita através do NPM. Para fazer isso execute o seguinte comando em uma interface de linha de comando (Git Bash, cmd, Git Bash, etc.):  
`npm instal -g @angular/cli`  
`npm instal -g ionic`  
Para verificar que ambos foram instalados corretamente e informações como a versão de ambos, use os próximos comandos:  
`ionic -v`  
`ng --version`  
## Execução
Para rodar o projeto, clone-o em sua máqina com o seguinte comando no Git Bash: 
`git clone https://github.com/rafaelMartins1922/all-things-weather.git`  
entre na pasta *all-things-weather* e rode o seguinte comando:  
`npm install`  
Isso irá instalar as dependências necessárias. O projeto consome a API *Current Weather Data* do site Open Weather Map. Para gerar uma API Key para ela, é necessário cadastrar-se no site, navegar até a seção de APIs, clicar em seu nome de usuário e selecionar *My API Keys*. Após isso, procure pelo campo *Create Key*, preencha-o com um apelido para sua Key e clique em *generate*.  
Copie a Key gerada para o aquivo *src/environments/environment.ts* no capo *appid*.  
Para rodar o projeto use o seguinte comando em uma CLI e espere a aplicação abrir no navegador:
`ionic serve`.  
### Usando a aplicação
Após servir o projeto, o seu uso é bastante simples. Ele inicialmente pede a sua localização para carregar informações meteorológicas de cidades próximas. Use o campo de pesquisa para pesquisar cidades por nome. Clique no ícone de estrela ao lado do nome de cada cidade para adicioná-la aos favoritos e use a tab "Favorites" para navegar entre a seção de favoritos e a home page.
