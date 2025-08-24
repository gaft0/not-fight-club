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

const fightAvatar = document.getElementById('fight-avatar-player');
fightAvatar.src = savedAvatar;

const showFightNamePlayer = document.getElementById('fight-name-player');
const showFightHPPlayer = document.getElementById('fight-hp-player');
const showFightDamagePlayer = document.getElementById('fight-damage-player');
showFightNamePlayer.textContent = 'Name: ' + savedName;
let playerHP = 100;
const playerDamage = 25;
showFightHPPlayer.textContent = 'HP: ' + playerHP;
showFightDamagePlayer.textContent = 'Damage: ' + playerDamage;

const enemyArray = [
    {
        enemyName: 'Bot Pavel',
        HP: 160,
        Damage: 25,
        attackZone: 1,
        defenseZone: 0,
        enemyAvatar: 'assets/enemy-avatar/enemy-avatar-1.png'
    },
    {
        enemyName: 'Bot Fedor',
        HP: 100,
        Damage: 25,
        attackZone: 1,
        defenseZone: 2,
        enemyAvatar: 'assets/enemy-avatar/enemy-avatar-2.png'
    },
    {
        enemyName: 'Bot Boris',
        HP: 130,
        Damage: 40,
        attackZone: 1,
        defenseZone: 2,
        enemyAvatar: 'assets/enemy-avatar/enemy-avatar-3.png'
    },
    {
        enemyName: 'Bot Roman',
        HP: 80,
        Damage: 25,
        attackZone: 1,
        defenseZone: 2,
        enemyAvatar: 'assets/enemy-avatar/enemy-avatar-4.png'
    },
    {
        enemyName: 'Bot Gleb',
        HP: 90,
        Damage: 35,
        attackZone: 1,
        defenseZone: 1,
        enemyAvatar: 'assets/enemy-avatar/enemy-avatar-5.png'
    }
];

const showFightAvatarEnemy = document.getElementById('fight-avatar-enemy');
const showFightNameEnemy = document.getElementById('fight-name-enemy');
const showFightHPEnemy = document.getElementById('fight-hp-enemy');
const showFightDamageEnemy = document.getElementById('fight-damage-enemy');

let randomEnemySelection = Math.floor(Math.random() * enemyArray.length);
let selectEnemy = randomEnemySelection;

showFightAvatarEnemy.src = enemyArray[selectEnemy].enemyAvatar;
showFightNameEnemy.textContent = 'Name: ' + enemyArray[selectEnemy].enemyName;
showFightHPEnemy.textContent = 'HP: ' + enemyArray[selectEnemy].HP;
showFightDamageEnemy.textContent = 'Damage: ' + enemyArray[selectEnemy].Damage;


let totalWins = 0;
let totalDefeats = 0;
let stopGame = 0;
const buttonStart = document.querySelector('.button-start');
buttonStart.addEventListener('click', () => {
    let blockAttack = 0;
    const totalZone = 4;
    let counter = 0;

    const attackHead = document.getElementById('head-attack').checked;
    const attackBody = document.getElementById('body-attack').checked;
    const attackLegs = document.getElementById('legs-attack').checked;
    const attackHands = document.getElementById('hands-attack').checked;
    const attackZoneArray = [attackHead, attackBody, attackLegs, attackHands];

    for (let i = 0; i < totalZone; i++) {
        if(attackZoneArray[i] === true) {
            counter++;
        }
    }
    const totalAttackZone = 1;
    if (counter !== totalAttackZone) {
        blockAttack++;
    }

    const defenseHead = document.getElementById('head-defense').checked;
    const defenseBody = document.getElementById('body-defense').checked;
    const defenseLegs = document.getElementById('legs-defense').checked;
    const defenseHands = document.getElementById('hands-defense').checked;
    const defenseZoneArray = [defenseHead, defenseBody, defenseLegs, defenseHands];
    let blockDefense = 0;
    counter = 0;
    for (let i = 0; i < totalZone; i++) {
        if(defenseZoneArray[i] === true) {
            counter++;
        }
    }
    const totalDefenseZone = 2;
    if (counter !== totalDefenseZone) {
        blockDefense++;
    }

    const enemyAttack = [
        {
            nameZone: 'Head',
            enemyAttack: false
        },
        {
            nameZone: 'Body',
            enemyAttack: false
        },
        {
            nameZone: 'Legs',
            enemyAttack: false
        },
        {
            nameZone: 'Hands',
            enemyAttack: false
        }
    ];

    const enemyDefense = [
        {
            nameZone: 'Head',
            enemyDefense: false
        },
        {
            nameZone: 'Body',
            enemyDefense: false
        },
        {
            nameZone: 'Legs',
            enemyDefense: false
        },
        {
            nameZone: 'Hands',
            enemyDefense: false
        }
    ];
    if (blockAttack === 0 && blockDefense === 0 && stopGame === 0) {
        const showPlayerLogs = document.querySelector('.log-sheet-player');
        const showEnemyLogs = document.querySelector('.log-sheet-enemy');
        for (let i = 0; i < enemyArray[selectEnemy].attackZone; i++) {
            let randomZone = Math.floor(Math.random() * enemyAttack.length);
            enemyAttack[randomZone].enemyAttack = true;
        }
        for (let i = 0; i < enemyArray[selectEnemy].attackZone; i++) {
            let randomZone = Math.floor(Math.random() * enemyDefense.length);
            enemyDefense[randomZone].enemyDefense = true;
        }

        for (let i = 0; i < totalZone; i++) {
            if(attackZoneArray[i] === true) {
                if (attackZoneArray[i] !== enemyDefense[i].enemyDefense) {
                    enemyArray[selectEnemy].HP -= playerDamage;
                    showFightHPEnemy.textContent = 'HP: ' + enemyArray[selectEnemy].HP;
                    showPlayerLogs.innerHTML = `<span style="color: #BA0D80;">${savedName}</span> hit <span style="color: #BA0D80;">${enemyArray[selectEnemy].enemyName}</span> on the <span style="color: #BA0D80;">${enemyDefense[i].nameZone}</span> and dealt <span style="color: #BA0D80;">${playerDamage} damage.`
                }
                else {
                    showPlayerLogs.innerHTML = `<span style="color: #BA0D80;">${savedName}</span> hit <span style="color: #BA0D80;">${enemyArray[selectEnemy].enemyName}</span> on the <span style="color: #BA0D80;">${enemyAttack[i].nameZone}</span>, but he dodged.`
                }
            }
        }
        for (let i = 0; i < totalZone; i++) {
            if(enemyAttack[i].enemyAttack === true) {
                if (enemyAttack[i].enemyAttack !== defenseZoneArray[i]) {
                    playerHP -= enemyArray[selectEnemy].Damage;
                    showFightHPPlayer.textContent = 'HP: ' + playerHP;
                    showEnemyLogs.innerHTML = `<span style="color: #BA0D80;">${enemyArray[selectEnemy].enemyName}</span> hit <span style="color: #BA0D80;">${savedName}</span> on the <span style="color: #BA0D80;">${enemyAttack[selectEnemy].nameZone}</span> and dealt <span style="color: #BA0D80;">${enemyArray[selectEnemy].Damage} damage.`
                }
                else {
                    showEnemyLogs.innerHTML = `<span style="color: #BA0D80;">${enemyArray[selectEnemy].enemyName}</span> hit <span style="color: #BA0D80;">${savedName}</span> on the <span style="color: #BA0D80;">${enemyDefense[i].nameZone}</span>, but he dodged.`
                }
            }
        }
        if (enemyArray[selectEnemy].HP <= 0) {
            showPlayerLogs.textContent = 'You won! Press the exit button.';
            showEnemyLogs.textContent = '';
            stopGame++;
            totalWins++;
            localStorage.setItem('totalWins', totalWins);
        }
        if (playerHP <= 0) {
            showPlayerLogs.textContent = 'You lost! Press the exit button.';
            showEnemyLogs.textContent = '';
            stopGame++;
            totalDefeats++;
            localStorage.setItem('totalDefeats', totalDefeats);
        }
        if (playerHP <= 0 && enemyArray[selectEnemy].HP <= 0) {
            showPlayerLogs.textContent = 'Draw! Press the exit button.';
            showEnemyLogs.textContent = '';
            stopGame++;
        }
    }

})

const buttonExit = document.querySelector('.button-exit');
buttonExit.addEventListener('click', () => {
    location.reload();
})

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

const mainBackground = document.querySelector('.menu-image');
const fightPage = document.querySelector('.fight-container');
buttonIntoFight.addEventListener('click', () => {
    if (buttonIntoFight.src.includes('assets/button/into-fight.png')) {
        buttonIntoFight.src = 'assets/button/into-fight-unavailable.jpg';
        buttonSettings.src = 'assets/button/settings-unavailable.png';
        buttonCharacterInfo.src = 'assets/button/character-info-unavailable.png';
        mainBackground.src = 'assets/background/fight.png';
            footerText.forEach(text => {
            text.style.color = '#064f62';
        });
        fightPage.style.display = 'block';
        windowCharacterInfo.style.display = 'none';
        windowSettings.style.display = 'none'
        showCharacterSelection.style.display = 'none';
    }
});

const windowCharacterInfo = document.querySelector('.window-character-info');
const showAvatar = document.getElementById('actual-avatar-settings');
const showNameCharacter = document.querySelector('.text-character-info-name');
const showWins = document.querySelector('.text-character-info-wins');
const showDefeats = document.querySelector('.text-character-info-defeats');


const savedWins = localStorage.getItem('totalWins');
const savedDefeats = localStorage.getItem('totalDefeats');
buttonCharacterInfo.addEventListener('click', () => {
    if (windowSettings.style.display == 'block') {
        windowSettings.style.display = 'none'
    }
    if (buttonCharacterInfo.src.includes('assets/button/character-info.png')) {
        windowCharacterInfo.style.display = 'block';
        showAvatar.src = savedAvatar;
        showNameCharacter.textContent = 'Name: ' + savedName;
        showWins.textContent = 'Wins: ' + savedWins;
        showDefeats.textContent = 'Defeats: ' + savedDefeats;
    }
})

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