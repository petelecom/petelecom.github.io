!function () {

    let petianos = [
        {
            nome: 'Amanda',
            sobrenome: 'Lopes Gonçalves',
            status: 'Petiano',
            descricao: 'Possui ensino-medio-segundo-graupelo Colégio Einstein(2016). Tem experiência na área de Engenharia Elétrica, com ênfase em Telecomunicações.'
        },
        {
            nome: 'Ana Júlia',
            sobrenome: 'Costa Santana',
            status: 'Petiano',
            descricao: 'Graduanda em Engenharia Eletrônica e de Telecomunicações.'
        },
        {nome: 'Arthur', sobrenome: 'Nunes Garcia', status: 'Petiano', descricao: ''},
        {nome: 'Giovana', sobrenome: 'Rodrigues', status: 'Ex-petiano', descricao: ''},
        {nome: 'Guilherme', sobrenome: 'Ferreira de Jesus', status: 'Petiano', descricao: ''},
        {nome: 'Heloise', sobrenome: 'Marimoto Prausio da Silva', status: 'Petiano', descricao: ''},
        {
            nome: 'Henrique',
            sobrenome: 'Santos de Lima',
            status: 'Petiano',
            descricao: 'Graduando em Engenharia Eletrônica e telecomunicações desde 2018-1. Monitor da disciplina de Métodos e Técnicas de Programação no período 2019-1. Monitor da disciplina de Física II no período 2019-2. Desenvolvimento de projeto iniciação cientifica PIVIC no período 2019-1 ~ 2019-2. Integrante do PET Engenharia Eletrônica e de Telecomunicações desde 2020-1. Desenvolvimento de pesquisa em Redes neurais desde 2020-2. Curso de Inglês A1.a CLIN 2021-2.'
        },
        {nome: 'Jhonatha', sobrenome: 'Wyllerson Rodrigues Medeiros', status: 'Ex-petiano', descricao: ''},
        {nome: 'Júlia', sobrenome: 'Gabriele Marques da Silva', status: 'Petiano', descricao: ''},
        {nome: 'Mateus', sobrenome: 'da Silva Fernandes', status: 'Petiano', descricao: ''},
        {nome: 'Mateus', sobrenome: 'Flausino de Araújo', status: 'Ex-petiano', descricao: ''},
        {nome: 'Murilo', sobrenome: 'Gabriel Leal Vieira', status: 'Petiano', descricao: ''},
        {nome: 'Olavo', sobrenome: 'Caetano Inácio', status: 'Petiano', descricao: ''},
        {nome: 'Rafael', sobrenome: 'Albergaria Barbosa Segnorini', status: 'Petiano', descricao: ''},
        {nome: 'Samuel', sobrenome: 'Alves Tavares', status: 'Ex-petiano', descricao: ''},
    ];


    let pet = [], expet = [];
    for (let i in petianos) {
        if (petianos[i].status === 'Ex-petiano') {
            expet[expet.length] = petianos[i];
        } else {
            pet[pet.length] = petianos[i];
        }
    }
    petianos = pet.concat(expet);

    let div_petianos = document.getElementById('div_petianos');
    let body = '';

    for (const i in petianos) {
        let petiano = petianos[i];
        let status = petiano.status;
        let classe = 'status-petiano'
        if (status === 'Ex-petiano') {
            status = 'Ex-petiano - '
            classe = 'status-expetiano'
        } else {
            status = '';
        }
        body = body + `\n
            <div class="membro detailsHide" onmouseover="showDetailsPetiano(this)" onmouseleave="closeDetailsPetiano(this)">
                <img src="./img/petianos/${petiano.nome}%20${petiano.sobrenome}.png" class="${classe}">
                <p class="nome-pet">${status}${petiano.nome}</p>
                <div class="details">
                    ${petiano.nome} ${petiano.sobrenome}
                    <br>
                    ${petiano.descricao}
                </div>
            </div>
        `;
    }
    div_petianos.insertAdjacentHTML('beforeend', body);
}();







