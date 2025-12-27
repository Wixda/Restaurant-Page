const menuSection = document.createElement('div');
menuSection.id = "menu-section"

const menuHeading = document.createElement('h2');
menuHeading.textContent = "A few highlights from our menu"
menuSection.appendChild(menuHeading);

const menuParagraph = document.createElement('p');
menuParagraph.textContent = "We cater for all dietary requirements, but here's a glimpse at some of our diner's favourites. our menu is revamped every season";
menuSection.appendChild(menuParagraph);

const menuList = document.createElement('div');
menuList.id = "menu-list";

const menuOne = document.createElement('div');
menuOne.classList.add("menu");

const menuOneName = document.createElement('h3');
menuOneName.textContent = "Seared Salmon Fillet";
menuOne.appendChild(menuOneName);

const menuOneDescription = document.createElement('p');
menuOneDescription.textContent = "Our local sourced salmon served with a refreshing buckwheat summer salad"
menuOne.appendChild(menuOneDescription);

menuList.appendChild(menuOne);

const menuTwo = document.createElement('div');
menuTwo.classList.add("menu");

const menuTwoName = document.createElement('h3');
menuTwoName.textContent = "Rosemary Filet Mignon";
menuTwo.appendChild(menuTwoName);

const menuTwoDescription = document.createElement('p');
menuTwoDescription.textContent = "Our prime beef served to your taste with a delicious choice of seasonal sides."
menuTwo.appendChild(menuTwoDescription);

menuList.appendChild(menuTwo);

const menuThree = document.createElement('div');
menuThree.classList.add("menu");

const menuThreeName = document.createElement('h3');
menuThreeName.textContent = "Summer Fruit Chocolate";
menuThree.appendChild(menuThreeName);

const menuThreeDescription = document.createElement('p');
menuThreeDescription.textContent = "Creamy mouse combined with Summer Fruits and dark chocolate shavings"
menuThree.appendChild(menuThreeDescription);

menuList.appendChild(menuThree);

const menuFour = document.createElement('div');
menuFour.classList.add("menu");

const menuFourName = document.createElement('h3');
menuFourName.textContent = "Seared Salmon Fillet";
menuFour.appendChild(menuFourName);

const menuFourDescription = document.createElement('p');
menuFourDescription.textContent = "Our local sourced salmon served with a refreshing buckwheat summer salad"
menuFour.appendChild(menuFourDescription);

menuList.appendChild(menuFour);

const menuFive = document.createElement('div');
menuFive.classList.add("menu");

const menuFiveName = document.createElement('h3');
menuFiveName.textContent = "Seared Salmon Fillet";
menuFive.appendChild(menuFiveName);

const menuFiveDescription = document.createElement('p');
menuFiveDescription.textContent = "Our local sourced salmon served with a refreshing buckwheat summer salad"
menuFive.appendChild(menuFiveDescription);

menuList.appendChild(menuFive);

const menuSix = document.createElement('div');
menuSix.classList.add("menu");

const menuSixName = document.createElement('h3');
menuSixName.textContent = "Seared Salmon Fillet";
menuSix.appendChild(menuSixName);

const menuSixDescription = document.createElement('p');
menuSixDescription.textContent = "Our local sourced salmon served with a refreshing buckwheat summer salad"
menuSix.appendChild(menuSixDescription);

menuList.appendChild(menuSix);
menuSection.appendChild(menuList);

export default menuSection;