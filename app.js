const contactsContainer = document.querySelector('.contacts');
const form = document.querySelector('form');
const displayContainer = document.querySelector('.display-contact');
const hiddenData = document.querySelector('.hidden-content');
const toggleContact = document.querySelector('.contact')
const displayContact = document.querySelector(".contact-container");
const closeBtn = document.querySelector('.close')


form.addEventListener('submit',(e) =>{
    e.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    const phone = form.phone.value;

    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.innerHTML = `
    <div class="name">${name}</div>
    <div class="hidden-content">
        <div class="address">${address}</div>
        <div class="email">${email}</div>
                <span>${phone}</span>
    </div>
    `;

    contactsContainer.appendChild(contact);
})
contactsContainer.addEventListener('click',(e) =>{
    const contact = e.target.parentElement;
    displayContainer.style.display = 'flex';
    const dName = contact.children[0].innerHTML;
    const contents = contact.children[1].children;
    const dAddress = contents[0].innerHTML;
    const dEmail = contents[1].innerHTML;
    const dPhone = contents[2].innerHTML;
    displayContact.innerHTML = `
    <div><span>Names</span> <span>${dName}</span> </div>
    <div><span>Email</span> <span>${dAddress}</span> </div>
    <div><span>Address</span> <span>${dEmail}</span> </div>
    <div><span></span> <span>${dPhone}</span> </div>
    `;
});

closeBtn.addEventListener('click',() =>{
    displayContainer.style.display = 'none';
})