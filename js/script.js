//get access to DOM Elements
const foods = document.getElementById('foods');
const songs = document.getElementById('songs');
const movies = document.getElementById('movies');
const books = document.getElementById('books');


const brownbutton = document.getElementById('color-button-brown');
const greenbutton = document.getElementById('color-button-green');
const bluebutton = document.getElementById('color-button-blue');
const nonebutton = document.getElementById('color-button-none');

// DOM ELEMENT REFERENCES
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const submitButton = document.getElementById('submit-button');
const sidebar = document.getElementById('sidebar');

//input types 
const hobbiesResult = document.getElementById('hobbies-result');
const transportResult = document.getElementById('transport-result');
const musicResult = document.getElementById('music-result');

//password elements validation
//const passwordInput = document.getElementById('password-input');
//const submitButton = document.getElementById('submit-button');


greenbutton.addEventListener('click', () => {
    books.classList.remove('blue-background','text-white');
    songs.classList.remove('brown-background', 'text-white');
    movies.classList.remove('black-background', 'text-white');
    foods.classList.add('green-background', 'text-white');
});
brownbutton.addEventListener('click', () => {
    books.classList.remove('blue-background', 'text-white');
    foods.classList.remove('green-background', 'text-white');
    movies.classList.remove('black-background', 'text-white');
    songs.classList.add('brown-background', 'text-white');
});
bluebutton.addEventListener('click', () => {
    foods.classList.remove('green-background', 'text-white');
    songs.classList.remove('brown-background', 'text-white');
    movies.classList.remove('black-background', 'text-white');
    books.classList.add('blue-background', 'text-white');
});
nonebutton.addEventListener('click', () => {
    foods.classList.remove('green-background', 'text-white');
    songs.classList.remove('brown-background', 'text-white');
    books.classList.remove('blue-background', 'text-white');
    movies.classList.add('black-background', 'text-white');
    
});

submitButton.addEventListener('click', ($event) => {
    $event.preventDefault();
    sidebar.textContent = 'Hi there, ' + firstNameInput.value + ' ' + lastNameInput.value;
});








