// Ввод имени
const inputName = document.querySelector('.register-name');
const buttonConfirm = document.querySelector('.register-confirm');

buttonConfirm.addEventListener('click', () => {
    const name = inputName.value.trim();
    if (name !== '') {
        localStorage.setItem('name', name);
        hideRegister.style.display = 'none';
        showCharacterSelection.style.display = 'none';
    }
});


// Выбор аватарки
const buttonChoiceAvatar = document.querySelector('.register-change');
const showCharacterSelection = document.querySelector('.hide-choice-avatar-container');

buttonChoiceAvatar.addEventListener('click', () => {
    showCharacterSelection.style.display = 'block';
})

const avatar1 = document.getElementById('button-confirm-1');
const avatar2 = document.getElementById('button-confirm-2');
const avatar3 = document.getElementById('button-confirm-3');
const avatar4 = document.getElementById('button-confirm-4');
const avatar5 = document.getElementById('button-confirm-5');
const actualAvatar = document.getElementById('actual-avatar');

avatar1.addEventListener('click', () => {
    actualAvatar.src = 'assets/player-avatar/player-avatar-1.png';
})

avatar2.addEventListener('click', () => {
    actualAvatar.src = 'assets/player-avatar/player-avatar-2.png';
})

avatar3.addEventListener('click', () => {
    actualAvatar.src = 'assets/player-avatar/player-avatar-3.png';
})

avatar4.addEventListener('click', () => {
    actualAvatar.src = 'assets/player-avatar/player-avatar-4.png';
})

avatar5.addEventListener('click', () => {
    actualAvatar.src = 'assets/player-avatar/player-avatar-5.png';
})

// Проверка регистрации
const hideRegister = document.querySelector('.register-container');

const savedName = localStorage.getItem('name');
if (savedName) {
    hideRegister.style.display = 'none';
    showCharacterSelection.style.display = 'none';
}