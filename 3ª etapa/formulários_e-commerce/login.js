// criar um objeto que receba as informações vindas do formulário
var login = { email: "maria@maria.com.br", password: "maria" }
console.log(login)

// trocar ou adicionar conteúdo da tag LABEL usando o innerHTML do JavaScript
document.getElementsByTagName("label")[0].innerHTML = "E-mail"
console.log(login)

// colocar os placeholders necessários pelo JavaScript
document.getElementById("username").placeholder = "Seu usuário..."
document.getElementById("password").placeholder = "Sua senha..."
console.log(login)

// formatar a input de um dos seus formulários utilizando o JavaScript
document.getElementById("username").style.boxShadow = "1px 1px 6px #0000001c"
document.getElementById("password").style.boxShadow = "1px 1px 6px #0000001c"
document.getElementById("username").style.borderRadius = "5px"
document.getElementById("password").style.borderRadius = "5px"
document.getElementById("username").style.height = "1.5rem"
document.getElementById("password").style.height = "1.5rem"
console.log(login)

// criar máscaras de preenchimento para os campos onde for necessário. (TELEFONE, CPF, EMAIL,CEP...)

function emailMask(){
    
}