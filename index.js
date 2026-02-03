const form = document.getElementById('form-tarefa'); 
const input = document.getElementById('input-tarefa'); 
const listaProcess = document.getElementById('lista-processo'); 


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

    // juntar botão ao li
    novoListItem.appendChild(novoButton);

    // juntar li à lista(ul)
    listaProcess.appendChild(novoListItem);

    // limpar input
    input.value = '';
});

