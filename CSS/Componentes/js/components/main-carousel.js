//1 acessar o browser  --> window
//2 pegar todo o HTML  --> document
//3 pegar o botão Direito  --> querySelector('.button-arrow.-right')

//4 identificar click no botão direito
            // criar variável --> const
            // btn = button

// Acessar janela            
// Pegar HTML todo
// Pegar Elements
// Mover Elements para direita            

const btnRight = window.document.querySelector('.button-arrow.-right');
const btnLeft = window.document.querySelector('.button-arrow.-left');
const elements = window.document.querySelector('.elements');
let pixels = 50

btnRight.addEventListener('click',function() {
    pixels = pixels + 50;
    elements.style = `transform: translateX(${pixels}px)`;
});
btnLeft.addEventListener('click', function() {
    pixels = pixels -100;
    elements.style = `transform: translateX(${pixels}px)`;
})
// console.log(btnRight) mostra o botão, via inspect / console
// evento = interação do usuário
