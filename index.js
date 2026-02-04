const form = document.getElementById('form-tarefa'); 
const input = document.getElementById('input-tarefa'); 
const listaProcess = document.getElementById('lista-processo'); 
const listaFinal = document.getElementById('lista-finalizadas')


form.addEventListener('submit', function (event) {
    event.preventDefault(); // impede reload

    const texto = input.value;

    if (texto === '') return;

    // criar li
    const novoListItem = document.createElement('li');
    novoListItem.textContent = texto;

    
    // criar botão eliminar
    const novoButton = document.createElement('button');
    novoButton.textContent = 'Eliminar';
    // ação do botão
    novoButton.addEventListener('click', function () {
        novoListItem.remove();
    });


    // criar botão finalizar
    const novoButFinalizado = document.createElement('button');
    novoButFinalizado.textContent = 'Finalizar';
    // ação do botão
    novoButFinalizado.addEventListener('click', function () {
    listaFinal.appendChild(novoListItem);
    });

    // juntar botão ao li
    novoListItem.appendChild(novoButton);
    novoListItem.appendChild(novoButFinalizado);

    // juntar li à lista(ul)
    listaProcess.appendChild(novoListItem);
    

    // limpar input
    input.value = '';
});
