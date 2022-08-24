const openButton = document.getElementsByClassName('open-button')[0];
const closeButton = document.getElementsByClassName('close-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

openButton.addEventListener('click', () => {
	navbarLinks.classList.add('active');
	openButton.classList.add('active');
	closeButton.classList.add('active');
});

closeButton.addEventListener('click', () => {
	navbarLinks.classList.remove('active');
	openButton.classList.remove('active');
	closeButton.classList.remove('active');
});