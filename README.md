# Voll
Voll Test

Para rodar o projeto é necessário que você tenha instalado em sua máquina :

npm e bower - para baixar as dependências

node  - para subir o servidor 

mongo - para subir o banco de dados 
___________________________________________________________________________________________________________________________
Passo a Passo : 

1º Baixando o projeto :
  Para fazer o download : git clone https://github.com/OctavioDuart/Voll.git

___________________________________________________________________________________________________________________________


2º Instalando as dependências:
  Antes de baixar as dependências é recomendável que seja desvinculados os diretórios Voll-Client e Voll-Server da pasta Voll (para um melhor manuseio do projeto) , feito isso siga os seguintes passos :  
  
  Baixando as depêndencias do servidor :
  
  Com o terminal vá até o nível do arquivo package.json e digite o comando npm i , aguarde o término da instalação . depois
  inicie o servidor do mongo . 

  Iniciando o Servidor : 

  Com as dependências ja instaladas e o banco iniciado digite: node start.js um log com as mensagens:
    
    'Servidor inciado com sucesso na porta  8000'
    'Conexão com o banco de dados estabelecida com suecesso'

  será exibido.
  
  ___________________________________________________________________________________________________________________________
  
  
  Baixando as depêndencias do cliente :
  
  Com o terminal vá até o nível do arquivo bower.json e digite o comando bower install , aguarde o término da instalação .

  Iniciando o Cliente : 
  
  Com as dependências ja instaladas a aplicação está pronta para ser iniciada o arquivo a ser aberto é index.html, mas se preferir pode iniciar o cliente com um Live-Server como o do VS Code , (independente da porta ou do host a API esta configurada para aceitar requisições de qualquer lugar) . 

___________________________________________________________________________________________________________________________

3º Testando as requisições:
  Para testar as requições basta preencher os campos solicitados e clicar no botão 'Registrar' . Alguns pontos importantes :
  
    1 - Por conta de uma regra de validação nenhum campo poderá estar vazio ao enviar os dados .
    2 - No campo "URL da Capa" cole o endereço fisico da imagem .
    
  Assim que um novo filme é inserido os dados serão imediatamente renderizados na tela . A aplicação esta 100% responsiva então podera ser testada no modo responsive do navegador . 

 
