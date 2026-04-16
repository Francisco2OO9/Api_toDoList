Descrição do projeto
Este sistema funciona como uma lista de tarefas digital. Ele permite que o usuário crie novas tarefas, visualize a lista completa, veja detalhes de um item específico, altere informações ou apague o que não for mais necessário. Tudo é gerenciado através de requisições que chegam ao servidor e são respondidas conforme o que foi solicitado.

Tecnologias utilizadas
O projeto foi construído utilizando JavaScript para a lógica e Node.js para rodar o código no computador. Usei o que o próprio Node oferece para criar a comunicação com a rede e receber os dados.

Instalação
Como não foram utilizadas ferramentas ou pacotes de terceiros, basta ter o ambiente do Node.js instalado na máquina. É só baixar os arquivos do projeto para uma pasta local.

Execução
Para colocar o sistema no ar, abra o terminal na pasta onde os arquivos estão e digite:
node src/app.js
Depois disso, o servidor passa a escutar os pedidos que chegarem pelo endereço local do computador na porta 3000.

Explicação da solução
A ideia foi separar o código em partes diferentes para não misturar tudo. Um arquivo cuida apenas de como a tarefa se parece. Outro arquivo funciona como um estoque, onde as tarefas ficam guardadas em uma lista e podem ser manipuladas. Há também uma parte que serve para transformar as informações que chegam da internet em dados que o sistema entende e, por fim, uma parte que decide para onde enviar cada pedido com base no que o usuário quer fazer. Isso garante que, se eu precisar mudar a forma de salvar uma tarefa, não preciso mexer na parte que recebe os dados da internet.tes

Link do video
https://youtu.be/JE73J9ljGi8?si=BCctzBXcvBJ0S0Ix
Perdão professor, estava sem microfone