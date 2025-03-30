function adicionarTarefa() {


     //Recebe a informação do elemento inputTarefa da nossa página do usuário
     const inputTarefa = document.getElementById("inputTarefa")
     const mensagem = document.getElementById("mensagem")
     let tarefa = inputTarefa.value.trim()
     

    if (tarefa == ""){

        let errorMensagem = "Tarefa em branco, por favor adicionar uma tarefa válida!"
        mensagem.textContent = errorMensagem;
        document.getElementById("mensagem").style.color = "#A34743"
        
    }
    
    else{

        const listaTarefas = document.getElementById("listaTarefas");

        let novaTarefa = document.createElement("li");

        novaTarefa.textContent = tarefa;

        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("btn-remover");

        botaoRemover.onclick = function() {
            listaTarefas.removeChild(novaTarefa);
        }
        //appendChild(): cria um elemento filho para um elemento pai
        listaTarefas.appendChild(novaTarefa);
        novaTarefa.appendChild(botaoRemover);

        let mensagemSucess = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucess;
        document.getElementById("mensagem").style.color = "#28A745"
        
    }

    //Faz o campo ficar vazio onde inputTarefa está direcionado 
    inputTarefa.value = ""

}


function removeAll(){
    let deleteAll = document.getElementById("listaTarefas");
    deleteAll.innerHTML = '';
}


