/*

image: endereço da arte do minicurso (recomendado imagem 350x224)
link: link para redirecionar quando clicar
type: 'gdrive' (link do google drive), 'web' (link da web), 'local' (armazenado na pasta img/minicursos), 'raw' (não fazer nada com o link)
alt: nome do item
*/
!function () {
    minicursos = [
        {
            'alt': 'Minicurso Octave',
            'type': 'local',
            'image': 'octave.jpeg',
            'link': 'https://pet-telecom.coursify.me/courses/minicurso-octave',
            'background': '#ffffff',
            'textButton': 'Inscreva-se'
        }, {
            'alt': 'Minicurso Processing',
            'type': 'local',
            'image': 'processing.png',
            'link': 'https://pet-telecom.coursify.me/courses/minicurso-de-processing',
            'background': '#000000',
            'textButton': 'Inscreva-se'

        }, {
            'alt': 'Minicurso Satelites',
            'type': 'local',
            'image': 'satelites.png',
            'link': 'https://youtube.com/playlist?list=PLOZhhIZ8qMxbgAIY1EIqbpQyS5yOKQ-ks',
            'background': '#00415D',
            'textButton': 'Assistir'

        }, {
            'alt': 'Minicurso Desenvolvimento de Jogos',
            'type': 'local',
            'image': 'desenvimentoDeJogos.png',
            'link': 'https://youtube.com/playlist?list=PLOZhhIZ8qMxYLAqebt5yA0xExIAbYwfX4',
            'background': '#99DAE8',
            'textButton': 'Assistir'

        },
    ];

    let div_minicursos = document.getElementById("div_minicursos");
    let body = '<div class="row justify-content-center" >\n';

    for (const i in minicursos) {
        let minicurso = minicursos[i];
        let img_link = minicurso.image;
        if (minicurso.type === 'gdrive') {
            img_link = img_link.replace('https://drive.google.com/file/d/', '')
            img_link = img_link.replace('/view?usp=sharing', '')
            img_link = `https://drive.google.com/uc?export=view&id=${img_link}`
        } else if (minicurso.type === 'web' || minicurso.type === 'raw') {
            // não fazer nada
        } else if (minicurso.type === 'local') {
            img_link = `./img/minicursos/${img_link}`
        } else {
            console.error('Tipo inválido');
            img_link = "";
        }

        body = body + `\n
    <div class="col-md-4">
        <div class="card" style="background:${minicurso.background};">
            <div class="card-body text-center">
                <img src="${img_link}" alt="${minicurso.alt}" width="100%" height="100%" >
                <a class="btn btn-dark btn-block" target="_blank" href = "${minicurso.link}" style="border:none;">${minicurso.textButton}</a>
            </div>
        </div>
    </div>`;
    }
    body = body + '</div>';
    div_minicursos.insertAdjacentHTML('beforeend', body);
}();

