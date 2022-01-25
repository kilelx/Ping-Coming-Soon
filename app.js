let inpMail = document.querySelector("#mail");
const rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const btnNotify = document.querySelector("#btn-notify");
let message = document.querySelector('#message')

btnNotify.addEventListener('click', (e) => {

    e.preventDefault();

    // Check if the mail is not empty, undefined, or if the regex is uncorrect
    if (inpMail.value == '' || inpMail.value == undefined || !rgx.test(inpMail.value) ) {

        message.innerText = 'Please provide a valid email adress';
        message.style.color = "hsl(354, 100%, 66%)";

    // Check if the regex is ok
    } else {
        message.innerText = 'Email submit successfully!';
        message.style.color = "hsl(223, 87%, 63%)";
    }
})

// let myForm = document.querySelector("form");

// myForm.addEventListener("submit", function(e) {

//     let myMail = document.querySelector("#mail");
//     let message = document.querySelector("#message");

//     if (myMail.value.trim() == "") {
//         message.innerText = "Erreur";
//         message.classList.toggle = "error";
//         // e.preventDefault();
//         console.log("erreur");
//     } else {
//         message.innerText = "Succès";
//         message.classList.toggle = "success";
//         // e.preventDefault();
//         console.log("succès");
//     }

// })