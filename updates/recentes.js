/***
 Destaque, caroucel com as novidades do PET\n
 banner : endereço do arquivo do banner (recomendado 1080x1080)\n
 link: link para redirecionar quando clicar\n
 type: 'gdrive' (link do google drive), 'web' (link da web), 'local' (armazenado na pasta img/destaques),'raw' (não fazer alteração)\n

 id: nome do item
 */

!function () {
    let recentes = [
        /*
        {
            'link': 'https://forms.gle/6sYHDuQRVp2BhMB86',
            'id': '2ª Edição Semana de Engenharia Eletrônica de Telecomunicações',
            'banner': 'https://drive.google.com/file/d/1B0ROAJe75Jft0pHS2JDgDrIh3HzqCHD-/view?usp=sharing',
            'type': 'gdrive'
        },
        {
            'type': 'local',
            'link': 'https://docs.google.com/forms/d/e/1FAIpQLSeifCzmjWitFYEWVVsEa19-LEX4b-aebuQBGR-nPWbScmvg3Q/viewform',
            'id': 'Conversação em Inglês',
            'banner': 'conversacaoIngles.jpg'
        }
        {
            'type': 'local',
            'link': '#',
            'id': 'PET Informa: Modulação AM e FM',
            'banner': 'PETinforma.png'
        },
        {
            'type': 'local',
            'link': 'https://docs.google.com/forms/d/e/1FAIpQLSdCe-ET68WpiqI8K7gPczqh_UDxLV8UBofTY7GVyGnZsTubTA/viewform',
            'id': 'Conversação Francês',
            'banner': 'conversacaoFrances.jpg'
        },
        {
            'type': 'local',
            'link': 'https://docs.google.com/forms/d/18gxIL6_nQYCB2ds49OGeUIrp1DsgZpdqHb3NFsYwyYM/viewform?edit_requested=true',
            'id': 'Inscrições SEET',
            'banner': 'SEET.png'
        },
        {
            'type': 'local',
            'link': 'https://ceel2024.sciencesconf.org/',
            'id': 'Submissões abertas para a CEEL XXII',
            'banner': 'CEELXXII.jpg',
        },
        {
            'type': 'local',
            'banner': 'PS.png',
            'link': 'https://forms.gle/sF9T5F1CxfFQViTXA',
            'id': 'Processo Seletivo Aberto 24/02',
        },*/
        {
            'type': 'local',
            'link': 'https://www.instagram.com/jeel_ufu/',
            'id': 'Jornada da Engenharia Elétrica',
            'banner': 'JEEL.jpg',
        },
        {
            'type': 'local',
            'link': 'https://youtube.com/playlist?list=PLOZhhIZ8qMxa5ciJcBW2YOfZTmkUnjFdq',
            'id': 'Minicurso Processing',
            'banner': 'processing.webp',
        },
        {
            'type': 'local',
            'link': 'https://www.canva.com/design/DAEcn5ZTAT0/Sk5RQF3BboWzHsaNmog5IA/view?utm_content=DAEcn5ZTAT0&utm_campaign=designshare&utm_medium=link&utm_source=editor#1',
            'id': 'Manual de Como Utilizar as Normas ABNT',
            'banner': 'NormasABNT.png'
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
