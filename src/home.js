const homeSection = document.createElement('div');
homeSection.id = "home-section";

const heroHeading = document.createElement('h2');
heroHeading.textContent = "Exquisite dining since 1989";
homeSection.appendChild(heroHeading);

const heroParagraph1 = document.createElement('p');
heroParagraph1.textContent = "Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse."
homeSection.appendChild(heroParagraph1);

const heroParagraph2 = document.createElement('p');
heroParagraph2.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sed repellendus esse maiores animi quas placeat, perferendis odit quibusdam ipsam nam quos nihil nesciunt, aperiam ratione soluta voluptate voluptatem obcaecati eius facere. Officia laboriosam repudiandae debitis animi perspiciatis repellat esse."
homeSection.appendChild(heroParagraph2);

const heroButton = document.createElement('button');
heroButton.textContent = "Book a Table";
homeSection.appendChild(heroButton);

export default homeSection;