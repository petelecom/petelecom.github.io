function rjs_rodape_run() {
    const head = document.getElementsByTagName("head")[0];
    const rodape = document.getElementById("rodape_pet");
    let local = './rodape';
    let link_css = `
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
    <link rel="stylesheet" href="${local}/rodape.css">
`;

    let html =
        `
        <div class="rjs_rodape">
        <div class="rjs_item-rodape">
            <i onclick=" window.open('https://goo.gl/maps/Lgv8ugSKPBS1HCKn8','_blank')" class="fas fa-map-marker-alt"
               style="cursor: pointer;"></i>
            <p onclick=" window.open('https://goo.gl/maps/Lgv8ugSKPBS1HCKn8','_blank')" class="info-width text-white"
               style="font-size: 12pt;cursor: pointer;">Av.João Naves de Ávila, 2121 - Santa Mônica, Uberlândia - MG -
                Sala 1N04</p>
        </div>

        <div class="rjs_item-rodape">
            <i onclick=" window.open('https://www.instagram.com/petelecom_ufu/','_blank')" class="fab fa-instagram "
               style="cursor: pointer;"></i>
            <p onclick=" window.open('https://www.instagram.com/petelecom_ufu/','_blank')"
               class="info-width text-white " style="font-size: 12pt;cursor: pointer;">@petelecom_ufu</p>
        </div>

        <div class="rjs_item-rodape">
            <i onclick=" window.open('mailto:petelecomufu@gmail.com','_blank')" class="fab fa fa-envelope-open"
               style="cursor: pointer;"></i>
            <p onclick=" window.open('mailto:petelecomufu@gmail.com','_blank')" class="info-width text-white "
               style="font-size: 12pt;cursor: pointer; ">petelecomufu@gmail.com</p>
        </div>

        <div class="rjs_item-rodape">
            <i onclick=" window.open('https://www.youtube.com/pettelecomufu','_blank')" class="fab fa-youtube"
               style="cursor: pointer;"></i>
            <p onclick=" window.open('https://www.youtube.com/pettelecomufu','_blank')" class="info-width text-white "
               style="font-size: 12pt;cursor: pointer; ">Pet Telecom - UFU</p>
        </div>
    </div>
    `;

    head.insertAdjacentHTML('beforeend', link_css);
    rodape.insertAdjacentHTML('beforeend', html);
    if (!rodape.classList.contains("rjs_footer")) {
        rodape.classList.add("rjs_footer");
    }

}

rjs_rodape_run();