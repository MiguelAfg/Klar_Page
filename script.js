const Ancla_soport = document.querySelector('.Ancla_soport');
const down = document.querySelector('.down');
const card_container = document.querySelector('.card_container');

const imagenes = ['img/debito.jpeg', 'img/img1.jpeg', 'img/img2.jpeg', 'img/img3.jpeg'];

document.addEventListener('DOMContentLoaded', () => {
    let Index = 0;


    function render(){
        card_container.innerHTML = "";

        const contenido_img = document.createElement('img');
        contenido_img.classList.add('contenido_img')
        contenido_img.setAttribute('src', imagenes[Index]);
        Index = (Index + 1) % imagenes.length;




        const contenido_content = document.createElement('div');
        contenido_content.classList.add('contenido_content');

        const titulo_contenido_content = document.createElement('h1');
        titulo_contenido_content.classList.add('titulo_contenido_content');
        titulo_contenido_content.innerText = 'Targeta de crédito con garantía, el acceso fácil al crédito'


        const card_input = document.createElement('div');
        card_input.classList.add('card_input');

    
        const input = document.createElement('input');
        input.placeholder = "Introduce tu correo electrónico";
        input.classList.add('input');

        const btn_input = document.createElement('input');
        btn_input.type = 'button';
        btn_input.classList.add('btn_input');
        btn_input.value = 'Registrarte'


        const App_store = document.createElement('a');
        App_store.classList.add('google_play');

        App_store.innerText = 'App Store'


        card_container.appendChild(contenido_content);
        contenido_content.appendChild(titulo_contenido_content);
        contenido_content.appendChild(card_input);
        card_input.appendChild(input);
        card_input.appendChild(btn_input);
        card_container.appendChild(contenido_img);
    };

    render();
    setInterval(render, 4500);
});

Ancla_soport.addEventListener('mouseenter', () => {
    down.style.rotate = '-181deg'
});

Ancla_soport.addEventListener('mouseleave', () => {
    down.style.rotate = '0deg'
})