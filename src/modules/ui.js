const container = document.querySelector('[data-container]');
const divCard = document.createElement('div');
divCard.classList.add('card vertical-center');
container.appendChild(divCard);
const divHeader = document.createElement('div');
divHeader.classList.add('card-header');
divCard.appendChild(divHeader);
const ulHeader = document.createElement('ul');
ulHeader.classList.add('list-group list-group-flush');
divHeader.appendChild(ulHeader);
const liHeader1 = document.createElement()