document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const section = document.querySelector(link.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
});

function buscar() {
    var input = document.querySelector('.input-pesquisa').value;
    alert('Você pesquisou: ' + input);
}

let indice = 0;
        const imagens = document.querySelector('.imagens');
        const totalImagens = document.querySelectorAll('.imagem').length;

        function moverDireita() {
            indice = (indice + 1) % totalImagens;
            atualizarCarrossel();
        }

        function moverEsquerda() {
            indice = (indice - 1 + totalImagens) % totalImagens;
            atualizarCarrossel();
        }

        function atualizarCarrossel() {
            imagens.style.transform = `translateX(-${indice * 100}%)`;
        }
        
