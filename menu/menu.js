const mjp_ids_links = {
    // 'home_web': 'https://www.petelecom.github.io',
    "mjs_home": './index.html',
    "mjs_minicurso": './index.html#minicursos',
    "mjs_eventos": './index.html#eventos',
    "mjs_planejamentos": './planejamento.html',
    "mjs_relatorio_atividades": './atividades.html',
    "mjs_certificados": './certificados.html',
    "mjp_sobre": './sobre.html'
};

function menu_run() {
    const head = document.getElementsByTagName('head')[0];
    const pathname = window.location.pathname.split('/');

    var path = '.';
    var home = '';
    if (pathname[pathname.length - 2] !== 'menu') {
        path = './menu';
    } else {
        return;
    }
    if ('index.html' !== pathname[pathname.length - 1]) {
        home = './index.html'
    }
    head.insertAdjacentHTML('beforeend', `
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,500,900">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="${path}/menu.css">
    `);
    const menu_area = document.getElementById('menu_pet');
    var bkcolor = menu_area.getAttribute("data-pet_bk_color")
    if (bkcolor !== null) {
        document.documentElement.style.setProperty('--pet_bk_color', bkcolor);
    }
    menu_area.insertAdjacentHTML( "afterbegin", `
    <nav class="menu_pet mjp_navbar">
        <!-- LOGO -->
        <div class="mjp_logo"><img src="${path}/LogoEscrita.png" alt="logo pet telecom"></div>
        <!-- NAVIGATION MENU -->
        <ul class="mjp_nav-links">
            <!-- USING CHECKBOX HACK -->
            <input type="checkbox" id="checkbox_toggle"/>
            <label for="checkbox_toggle" class="mjp_hamburger">&#9776;</label>
            <!-- NAVIGATION MENUS -->
            <div class="mjp_menu" id="mjs_div_menu">
                <li><a id="mjs_home" href="#">Home</a></li>
                <li class="mjp_services">
                    <a>Atividades <i class="fa fa-caret-down"></i></a>
                    <!-- DROPDOWN MENU -->
                    <ul class="mjp_dropdown">
                        <li><a id="mjs_minicurso" href="#">Minicuros</a></li>
                        <li><a id="mjs_eventos" href="#">Eventos</a></li>
                    </ul>
                </li>
                <li class="mjp_services">
                    <a>Documentos <i class="fa fa-caret-down"></i></a>
                    <!-- DROPDOWN MENU -->
                    <ul class="mjp_dropdown">
                        <li><a id="mjs_planejamentos" href="#">Planejamentos</a></li>
                        <li><a id="mjs_relatorio_atividades" href="#">Relatório de Atividades</a></li>
                        <li><a id="mjs_certificados" href="#">Certificados</a></li>
                    </ul>
                </li>
                <li class="mjp_services">
                    <a >Inscrições <i class="fa fa-caret-down"></i></a>
                    <!-- DROPDOWN MENU -->
                    <ul class="mjp_dropdown">
                        <li><a href="#">Processo Seletivo</a></li>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScUraJTz8zMvr_NLo0PlX5aPjDTYsL9rPeQQ1kBqEtUPidgTg/viewform">Conversação em Francês</a></li>
                    </ul>
                </li>
                <li><a id="mjp_sobre" href="#">Sobre</a></li>
            </div>
        </ul>
    </nav>
`);

    for (const id in mjp_ids_links) {
        let ref = mjp_ids_links[id];
        let element = document.getElementById(id);
        element.href = `${ref}`;
        // console.log(home,id,ref,element.href)
    }
    window.onclick = function (event) {
        //Target the click event on the menu bar to allow the webpage body to track it:
        if (!event.target.matches('#toggle-container')) {
            var dropdowns = document.getElementsByClassName("toggle-content");
            //Hide the navigations by looping through each of them:
            for (var i = 0; i < dropdowns.length; i++) {
                var dropped = dropdowns[i];
                if (dropped.classList.contains('display')) {
                    dropped.classList.remove('display');
                }
            }
        }
    }
}

menu_run();

