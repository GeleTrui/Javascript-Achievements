const textElement = document.getElementById('text');

document.addEventListener('click', () => {
    textElement.innerHTML = 'Niet scrollen! klik! ';
});

document.addEventListener('wheel', () => {
    textElement.innerHTML = textElement.innerHTML + 'Hoi';
});