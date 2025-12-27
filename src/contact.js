const contactSection = document.createElement('div');
contactSection.id = "contact-section";

const contactHeading = document.createElement('h2');
contactHeading.textContent = "Contact us here";
contactSection.appendChild(contactHeading);

const contactParagraph1 = document.createElement('p');
contactParagraph1.textContent = "Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse."
contactSection.appendChild(contactParagraph1);

const contactButton = document.createElement('button');
contactButton.textContent = "Book a Table";
contactSection.appendChild(contactButton);

export {contactSection as default};