// form
const form = document.querySelector("form");

// inputs
const first = document.querySelector("#first");
const last = document.querySelector("#last");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");

// error msgs
const fmsg = document.querySelector("#f-msg");
const lmsg = document.querySelector("#l-msg");
const emsg1 = document.querySelector("#e-msg1");
const emsg2 = document.querySelector("#e-msg2");
const pmsg = document.querySelector("#p-msg");

// event handler
const validateForm = (event) => {

    // prevents from submitting the form to the local server and refreshing the page
    event.preventDefault();

    // first name required validation
    if (event.target.first.value === "") {
        first.classList.add("error-input");
        fmsg.classList.remove("d-none");
    } else {
        first.classList.remove("error-input");
        fmsg.classList.add("d-none");
    }

    // last name required validation
    if (event.target.last.value === "") {
        last.classList.add("error-input");
        lmsg.classList.remove("d-none");
    } else {
        last.classList.remove("error-input");
        lmsg.classList.add("d-none");
    }

    // email validation
    // required
    if (event.target.email.value === "") {
        emsg2.classList.add("d-none");
        email.setAttribute("placeholder", "Email Address");
        email.classList.add("error-input");
        emsg1.classList.remove("d-none");
    } else {
        // pattern
        emsg1.classList.add("d-none");
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!event.target.email.value.match(validRegex)) {
            email.setAttribute("placeholder", "email@example/com");
            email.classList.add("error-input");
            emsg2.classList.remove("d-none");
        } else {
            email.classList.remove("error-input");
            email.setAttribute("placeholder", "Email Address");
            emsg1.classList.add("d-none");
            emsg2.classList.add("d-none");
        }
    }

    // password required validation
    if (event.target.pass.value === "") {
        pass.classList.add("error-input");
        pmsg.classList.remove("d-none");
    } else {
        pass.classList.remove("error-input");
        pmsg.classList.add("d-none");
    }
}

// event listener
form.addEventListener("submit", validateForm);