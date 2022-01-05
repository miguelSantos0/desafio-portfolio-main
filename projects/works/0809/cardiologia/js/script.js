/*
    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }

    window.onscroll = () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }
*/

document.querySelector('#btnRegister').addEventListener('click',schedule)
const fullname = document.querySelector('#fullname')
const phone = document.querySelector('#phone')
const cpf = document.querySelector('#cpf')
const date = document.querySelector('#date')
const time = document.querySelector('#time')
const now = new Date


function schedule() {
    if (fullname.value = 0 || phone.value == 0 || cpf.value == 0 || date.value == 0 || time.value == 0 ) {
        alert('[ERRO] Preencha os campos vazios!')
        fullname.focus()
        fullname.style.border = '.2rem solid red'
        phone.style.border = '.2rem solid red'
        cpf.style.border = '.2rem solid red'
        date.style.border = '.2rem solid red'
        time.style.border = '.2rem solid red'
    } else if (fullname.value < 3) {
        alert('[ERRO] Digite um nome valido!')
        fullname.focus()
        fullname.style.border = '.2rem solid red'
    } else if (phone.value.length != 11) {
        alert('[ERRO] Digite um telefone valido!')
        phone.focus()
        phone.style.border = '.2rem solid red'
    } else if (cpf.value.length != 11) {
        alert('[ERRO] Digite um CPF valido!')
    } else if (date.value < now.getDate()) {
        alert('[ERRO] Coloque uma data valida!')
    } else {
        alert("Agendamento concluído com sucesso")
    }
}
