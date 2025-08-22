// Ввод имени
let name = '';
let avatar = '';
const inputName = document.querySelector('.register-name');
const buttonConfirm = document.querySelector('.register-confirm');

buttonConfirm.addEventListener('click', () => {
    name = inputName.value.trim();
    avatar = actualAvatar.src;
    if (name !== '') {
        localStorage.setItem('avatar', avatar);
        localStorage.setItem('name', name);
        hideRegister.style.display = 'none';
        showCharacterSelection.style.display = 'none';
        buttonIntoFight.src = 'assets/button/into-fight.png';
        buttonSettings.src = 'assets/button/settings.png';
        buttonCharacterInfo.src = 'assets/button/character-info.png';
        footerText.forEach(text => {
            text.style.color = '#BA0D80';
        });
        showAvatar.src = avatar;
        location.reload();
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
const buttonIntoFight = document.querySelector('.fight');
const buttonSettings = document.querySelector('.settings');
const buttonCharacterInfo = document.querySelector('.character-info');
const footerText = document.querySelectorAll('.rs-link');

const savedName = localStorage.getItem('name');
const savedAvatar = localStorage.getItem('avatar');
if (savedName) {
    hideRegister.style.display = 'none';
    showCharacterSelection.style.display = 'none';
    buttonIntoFight.src = 'assets/button/into-fight.png';
    buttonSettings.src = 'assets/button/settings.png';
    buttonCharacterInfo.src = 'assets/button/character-info.png';
    footerText.forEach(text => {
        text.style.color = '#BA0D80';
    });
}

// Кнопки настроеек и персонажа
const showNameSettings = document.querySelector('.text-settings');
const windowSettings = document.querySelector('.window-settings');
buttonSettings.addEventListener('click', () => {
    if (windowCharacterInfo.style.display == 'block') {
        windowCharacterInfo.style.display = 'none'
        showCharacterSelection.style.display = 'none';
    }
    if (buttonSettings.src.includes('assets/button/settings.png')) {
        windowSettings.style.display = 'block';
        showNameSettings.textContent = 'Name: ' + savedName;
    }
})

const windowCharacterInfo = document.querySelector('.window-character-info');
const showAvatar = document.getElementById('actual-avatar-settings');
const showNameCharacter = document.querySelector('.text-character-info-name');
const showWins = document.querySelector('.text-character-info-wins');
const showDefeats = document.querySelector('.text-character-info-defeats');

buttonCharacterInfo.addEventListener('click', () => {
    if (windowSettings.style.display == 'block') {
        windowSettings.style.display = 'none'
    }
    if (buttonCharacterInfo.src.includes('assets/button/character-info.png')) {
        windowCharacterInfo.style.display = 'block';
        showAvatar.src = savedAvatar;
        showNameCharacter.textContent = 'Name: ' + savedName;
        showWins.textContent = 'Wins: ';
        showDefeats.textContent = 'Defeats: ';
    }
})

// Изменение имени
const buttonChangeName = document.getElementById('button-window-settings-change');
const showInputNewName = document.querySelector('.hide-input-new-name');
buttonChangeName.addEventListener('click', () => {
    showNameSettings.style.display = 'none';
    showInputNewName.style.display = 'block';
})

const buttonCloseChangeName = document.getElementById('button-window-settings-close');
const hideInputNewName = document.querySelector('.window-settings');
buttonCloseChangeName.addEventListener('click', () => {
    showNameSettings.style.display = 'block';
    showInputNewName.style.display = 'none';
    hideInputNewName.style.display = 'none';
})

const buttonConfirmChangeName = document.getElementById('button-window-settings-confirm');
const inputNewName = document.querySelector('.new-name');
buttonConfirmChangeName.addEventListener('click', () => {
    showNameSettings.style.display = 'block';
    showInputNewName.style.display = 'none';
    name = inputNewName.value.trim();
    localStorage.setItem('name', name);
    location.reload();
})

// Изменение аватарки

const buttonChangeAvatar = document.getElementById('button-window-character-change');
buttonChangeAvatar.addEventListener('click', () => {
    showCharacterSelection.style.display = 'block';
})

const buttonCloseChangeAvatar = document.getElementById('button-window-character-close');
buttonCloseChangeAvatar.addEventListener('click', () => {
    showCharacterSelection.style.display = 'none';
    windowCharacterInfo.style.display = 'none';
})

const avatar1Menu = document.getElementById('button-confirm-1-menu');
const avatar2Menu = document.getElementById('button-confirm-2-menu');
const avatar3Menu = document.getElementById('button-confirm-3-menu');
const avatar4Menu = document.getElementById('button-confirm-4-menu');
const avatar5Menu = document.getElementById('button-confirm-5-menu');
const actualAvatarMenu = document.getElementById('actual-avatar');

const buttonConfirmChangeAvatar = document.getElementById('button-window-character-confirm');
buttonConfirmChangeAvatar.addEventListener('click', () => {
    showCharacterSelection.style.display = 'none';
    avatar = actualAvatarMenu.src;
    localStorage.setItem('avatar', avatar);
    showAvatar.src = avatar;
    location.reload();
})

avatar1Menu.addEventListener('click', () => {
    actualAvatarMenu.src = 'assets/player-avatar/player-avatar-1.png';
})

avatar2Menu.addEventListener('click', () => {
    actualAvatarMenu.src = 'assets/player-avatar/player-avatar-2.png';
})

avatar3Menu.addEventListener('click', () => {
    actualAvatarMenu.src = 'assets/player-avatar/player-avatar-3.png';
})

avatar4Menu.addEventListener('click', () => {
    actualAvatarMenu.src = 'assets/player-avatar/player-avatar-4.png';
})

avatar5Menu.addEventListener('click', () => {
    actualAvatarMenu.src = 'assets/player-avatar/player-avatar-5.png';
})

