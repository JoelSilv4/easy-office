// var nome_usuario = '';
// var sobrenome_usuario = '' ;
// var email_confirmacao = '';
// var senha_confirmacao = '';
function tela_cadastro(){
        box_0.style.display = 'none';
        box_1.style.display = 'block';
        btn_cadastro.style.display = 'none';
        btn_login.style.display = 'none';
        btn_oficial.style.display = 'none';
        }

function tela_login(){
        box_0.style.display = 'none';
        box_2.style.display = 'block';
        btn_cadastro.style.display = 'none';
        btn_login.style.display = 'none';
        btn_oficial.style.display = 'none';  
        }

function tela_site(){
    window.location.href= 'https://thewitcher.com/pt-br/'; 
}

// function cadastro() {
//         if(nome.value == '' || sobrenome.value == ''){
//             nome.style.borderColor = 'red';
//             sobrenome.style.borderColor = 'red';
//         }else{
//             confirmar_email()
//             nome.style.borderColor = 'black';
//             sobrenome.style.borderColor = 'black';
//         }
// }

// function confirmar_email(){
//         if(email_box1.value != '' && confiremail_box1.value != ''){
//         if(email_box1.value == confiremail_box1.value){
//                 email_box1.style.borderColor = 'black';
//                 confiremail_box1.style.borderColor = 'black';
//                 confirmar_senha()
//         }else{
//             email_box1.style.borderColor = 'red';
//             confiremail_box1.style.borderColor = 'red';
//         }   
//         }   else{ 
//             email_box1.style.borderColor = 'red';
//             confiremail_box1.style.borderColor = 'red';
//         }
// }

// function confirmar_senha() {
//         if(senha_box1.value != '' && confirsenha_box1.value != ''){
//         if(senha_box1.value == confirsenha_box1.value){
//             email_confirmacao += email_box1.value;
//             nome_usuario += nome.value;
//             sobrenome_usuario += sobrenome.value;
//             senha_confirmacao += senha_box1.value;
//             senha_box1.style.borderColor = 'black';
//             confirsenha_box1.style.borderColor = 'black';
//             alert(`Cadastro Concluido!!`);
//             box_1.style.display = 'none';
//             box_2.style.display= 'block';
//         }else{
//             senha_box1.style.borderColor = 'red'
//             confirsenha_box1.style.borderColor = 'red';
//         }
//         }else{
//             senha_box1.style.borderColor = 'red'
//             confirsenha_box1.style.borderColor = 'red';
//         }
// }

// function login() {
//         if(email_box2.value != '' && senha_box2.value != ''){
//         if(email_box2.value == email_confirmacao && senha_box2.value == senha_confirmacao){
//             location.href= 'Home.html';
//             email.box2.style.borderColor = 'black'
//             senha_box2.style.borderColor = 'black'
//         }else{
//             email_box2.style.borderColor = 'red'
//             senha_box2.style.borderColor = 'red'
//         }
//         }else{
//             email_box2.style.borderColor = 'red'
//             senha_box2.style.borderColor = 'red'
//         }
// }

// Tela de Perfil 

function alterar_foto(){
    box_1.style.display = 'none';
    box_1_steam.style.display = 'none';
    box_1_email.style.display = 'none';
    box_1_senha.style.display = 'none';
    box_2.style.display = 'block';
}

function mudar_steam(){
    box_1.style.display = 'none';
    box_1_steam.style.display = 'block';
    box_1_email.style.display = 'none';
    box_1_senha.style.display = 'none';
    box_2.style.display = 'none';
}

function mudar_email(){
    box_1.style.display = 'none';
    box_1_steam.style.display = 'none';
    box_1_email.style.display = 'block';
    box_1_senha.style.display = 'none';
    box_2.style.display = 'none';
}

function mudar_senha(){
    box_1.style.display = 'none';
    box_1_steam.style.display = 'none';
    box_1_email.style.display = 'none';
    box_1_senha.style.display = 'block';
    box_2.style.display = 'none'; 
}

function perfil(){
    box_1.style.display = 'block';
    box_1_steam.style.display = 'none';
    box_1_email.style.display = 'none';
    box_1_senha.style.display = 'none';
    box_2.style.display = 'none'; 
}

//foto de perfil
function foto1(){
    icone_perfil.src = 'img/foto_perfil.png';
    box_1.style.display = 'block';
    box_1_steam.style.display = 'none';
    box_1_email.style.display = 'none';
    box_1_senha.style.display = 'none';
    box_2.style.display = 'none'; 
}

function foto2(){
    icone_perfil.src = 'img/foto_perfil2.png';
    box_1.style.display = 'block';
    box_1_steam.style.display = 'none';
    box_1_email.style.display = 'none';
    box_1_senha.style.display = 'none';
    box_2.style.display = 'none'; 
}

function foto3(){
    icone_perfil.src = '';
    icone_perfil.src = 'img/foto_perfil3.png';
    box_1.style.display = 'block';
    box_1_steam.style.display = 'none';
    box_1_email.style.display = 'none';
    box_1_senha.style.display = 'none';
    box_2.style.display = 'none'; 
}

function foto4(){
    icone_perfil.src = 'img/foto_perfil4.png';
    box_1.style.display = 'block';
    box_1_steam.style.display = 'none';
    box_1_email.style.display = 'none';
    box_1_senha.style.display = 'none';
    box_2.style.display = 'none'; 
}

function tela_perfil(){
    location.href= 'perfil.html';
}