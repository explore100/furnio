function submitValue(){
    const input = document.getElementById("name-input")
    const namePlace = input.value
    console.log("hello", namePlace);

    const email = document.getElementById("email-input")
    const emailPlace = email.value
    console.log("hello", emailPlace);

    const subject = document.getElementById("subject-input")
    const subjectPlace = subject.value
    console.log("hello", subjectPlace);

    const message = document.getElementById("Message-input")
    const messagePlace = message.value
    console.log("hello", messagePlace);


    const nameValue = document.getElementById("name-value")
        nameValue.innerText = namePlace
    const emailValue = document.getElementById("email-value")
    emailValue.innerText = emailPlace
    const subjectValue = document.getElementById("subject-value")
    subjectValue.innerText = subjectPlace
    const messageValue = document.getElementById("Message-value")
    messageValue.innerText = messagePlace

        const popup = document.getElementById("contact-popup")
        console.log(popup.classList)
        popup.setAttribute("class", "bg-[#00000050] fixed w-full h-full left-0 top-0")
        console.log(popup.classList)

        console.log(popup.attributes)
    
}
function closePopUP(){
    const popup = document.getElementById("contact-popup")
    popup.setAttribute("class", "bg-[#00000050]  hidden")
}




const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});