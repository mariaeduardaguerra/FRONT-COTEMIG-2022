function maskTel() {
    // pegar no HTML
    var $tel = document.getElementById("number").value;
    // modificar
    $tel = $tel.slice(0, 14);
    // devolver pro HTML
    document.getElementById("number").value = $tel;

    // máscara (essa variável deve ter um nome diferente da primeira)
    var tel = document.getElementById("number").value;

    if (tel[0] != "(") {
        if (tel[0] != undefined) {
            document.getElementById("number").value = "(" + tel[0];
        }
    }

    if (tel[3] != ")") {
        if (tel[3] != undefined) {
            document.getElementById("number").value = tel.slice(0, 3) + ")" + tel[3];
        }
    }

    if (tel[4] != " ") {
        if (tel[4] != undefined) {
            document.getElementById("number").value = tel.slice(0, 4) + " " + tel[4];
        }
    }

    if (tel[9] != "-") {
        if (tel[9] != undefined) {
            document.getElementById("number").value = tel.slice(0, 9) + "-" + tel[9];
        }
    }
}

// function maskEmail(email) {
//     var maskedEmail = email.replace(/([^@\.])/g, "*").split('');
//     var previous = "";
//     for (i = 0; i < maskedEmail.length; i++) {
//         if (i <= 1 || previous == "." || previous == "@") {
//             maskedEmail[i] = email[i];
//         }
//         previous = email[i];
//     }
//     return maskedEmail.join('');
// }

function validateEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(
        field.value.indexOf("@") + 1,
        field.value.length
    );

    if (
        usuario.length >= 1 &&
        dominio.length >= 3 &&
        usuario.search("@") == -1 &&
        dominio.search("@") == -1 &&
        usuario.search(" ") == -1 &&
        dominio.search(" ") == -1 &&
        dominio.search(".") != -1 &&
        dominio.indexOf(".") >= 1 &&
        dominio.lastIndexOf(".") < dominio.length - 1
    ) {
        document.getElementById("msgemail").innerHTML = "E-mail válido";
        alert("E-mail válido");
    } else {
        document.getElementById("msgemail").innerHTML =
            "<font color='red'>E-mail inválido! </font>";
        alert("E-mail inválido!");
    }
}