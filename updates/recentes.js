/***
 Destaque, caroucel com as novidades do PET\n
 banner : endereço do arquivo do banner (recomendado 1080x1080)\n
 link: link para redirecionar quando clicar\n
 type: 'gdrive' (link do google drive), 'web' (link da web), 'local' (armazenado na pasta img/destaques),'raw' (não fazer alteração)\n

 id: nome do item
 */

!function () {
    let recentes = [
        /*{
            'link': 'https://forms.gle/6sYHDuQRVp2BhMB86',
            'id': '2ª Edição Semana de Engenharia Eletrônica de Telecomunicações',
            'banner': 'https://drive.google.com/file/d/1B0ROAJe75Jft0pHS2JDgDrIh3HzqCHD-/view?usp=sharing',
            'type': 'gdrive'
        },
        {
            'type': 'local',
            'link': 'http://www.peteletricaufu.com.br/ceel/evento/inicio/',
            'id': 'XXI CEEL',
            'banner': 'CEELXXI.jpg'
        },
        {
            'type': 'local',
            'link': 'https://forms.gle/mwd1L7EYtw9ja5XP6',
            'id': 'Processo Seletivo PETelecom 2023-2',
            'banner': 'PS.png'
        },*/
        {
            'type': 'local',
            'link': 'https://youtube.com/playlist?list=PLOZhhIZ8qMxa5ciJcBW2YOfZTmkUnjFdq',
            'id': 'Minicurso Processing',
            'banner': 'processing.webp'
        },
        {
            'type': 'local',
            'link': 'https://docs.google.com/forms/d/e/1FAIpQLScUraJTz8zMvr_NLo0PlX5aPjDTYsL9rPeQQ1kBqEtUPidgTg/viewform',
            'id': 'Conversação Francês',
            'banner': 'conversacaoFrances.png'
        }
        ];


    let caroucel = document.getElementById('carouselExampleIndicators');
    let indicator = '\n\t\t<ol class="carousel-indicators">';
    let inner = '\n\t\t<div class="carousel-inner">'

    for (let i in recentes) {
        let rc = recentes[i];
        let img_link = rc.banner;
        // transformar link da imagem
        if (rc.type === 'gdrive') {
            img_link = img_link.replace('https://drive.google.com/file/d/', '')
            img_link = img_link.replace('/view?usp=sharing', '')
            img_link = `https://drive.google.com/uc?export=view&id=${img_link}`
        } else if (rc.type === 'web' || rc.type === 'raw') {
            // não fazer nada
        } else if (rc.type === 'local') {
            img_link = `./img/destaques/${img_link}`
        } else {
            console.error('Tipo inválido');
            img_link = "";
        }
        let ative = '';
        if (i == 0) {
            ative = 'class="active"';
        }
        indicator = indicator + `\n\t\t\t<li data-target="#carouselExampleIndicators" data-slide-to="${i}" ${ative}></li>`;
        ative = '';
        if (i == 0) {
            ative = 'active';
        }
        inner = inner +
            `\n\t\t<div class="carousel-item ${ative}">
            <img  style = "cursor: pointer;" onclick="location.href = '${rc.link}'" 
            class="d-block w-100" src="${img_link}" alt="${rc.id}"></div>`
    }
    indicator = indicator + '\n\t\t</ol>'
    inner = inner + '\n\t\t</div>'
    caroucel.insertAdjacentHTML("beforeend", indicator + inner + "<a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n" +
        "                    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n" +
        "                    <span class=\"sr-only\">Previous</span>\n" +
        "                </a>\n" +
        "                <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n" +
        "                    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n" +
        "                    <span class=\"sr-only\">Next</span>\n" +
        "                </a>"
    )
}();
