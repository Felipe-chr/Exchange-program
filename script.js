/** @type {HTMLButtonElement} */
const button = document.getElementById("buttonCadastro");
/** @type {HTMLInputElement} */
const inputNome = document.getElementById("nomeInput");
/** @type {HTMLInputElement} */
const inputEmail = document.getElementById("emailInput");
/** @type {HTMLInputElement} */
const inputTelefone = document.getElementById("teleInput");
/** @type {HTMLElement} */
const erroNome = document.getElementById("erroNome");
/** @type {HTMLElement} */
const erroEmail = document.getElementById("erroEmail");
/** @type {HTMLElement} */
const erroTele = document.getElementById("erroTele");

button.addEventListener('click', () => {
    const nomeCliente = inputNome.value.trim();
    const emailCliente = inputEmail.value.trim();
    const telefoneCliente = inputTelefone.value.trim();

    if (nomeCliente === "") {
        inputNome.classList.add("erro-input");
        erroNome.classList.add("visivel");
    } else {
        inputNome.classList.remove("erro-input");
        erroNome.classList.remove("visivel");
    }

    if (emailCliente === "" || !emailCliente.includes("@")) {
        inputEmail.classList.add("erro-input");
        erroEmail.classList.add("visivel");
    } else {
        inputEmail.classList.remove("erro-input");
        erroEmail.classList.remove("visivel");
    }

    if (telefoneCliente === "") {
        inputTelefone.classList.add("erro-input");
        erroTele.classList.add("visivel");
    } else {
        inputTelefone.classList.remove("erro-input");
        erroTele.classList.remove("visivel");
    }
});
