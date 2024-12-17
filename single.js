function submitValue(){
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
