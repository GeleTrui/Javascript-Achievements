nconst textElement = document.getElementById('text');

document.addEventListener('click', () => {
    textElement.innerHTML = 'doe s ff leuk scrollen! ';
});

document.addEventListener('wheel', () => {
    textElement.innerHTML = textElement.innerHTML + 'Hoi';
});
