
 btCadastro = document.querySelector('#cadastraniver')
 btBuscarP = document.querySelector('#buscarP')

    

 btCadastro.addEventListener('click', salvarDados)
 window.addEventListener('DOMContentLoaded', mostrarDados);


 function salvarDados(){
    const data = document.querySelector('#data').value;
    const nome = document.querySelector('#inserirnome').value;

    const pessoa = {
        nome: nome,
        data: data
    };

    let dadosPessoa = JSON.parse(localStorage.getItem('dadosPessoa')) || [];

    dadosPessoa.push(pessoa);


    localStorage.setItem('dadosPessoa', JSON.stringify(dadosPessoa));

    document.querySelector('#data').value = '';
    document.querySelector('#inserirnome').value = '';

    console.log(dadosPessoa);
}

function mostrarDados(){
    const lista = document.querySelector('#listaPessoas');
    const pessoas = JSON.parse(localStorage.getItem('dadosPessoa')) || [];

    pessoas.forEach(pessoa => {
        const li = document.createElement('li');
        li.textContent = `${pessoa.nome} - ${pessoa.data}`;
        lista.appendChild(li);
    });
}










