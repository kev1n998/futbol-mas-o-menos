/* =========================================================
   MÁS O MENOS - FÚTBOL
   Juego de comparación de valores de mercado

   Base de jugadores:
   - 100 jugadores de la lista 2026/27 basada en Transfermarkt
   - + Jokin Ezkieta como guiño al Cádiz CF

   Objetivo:
   - 20 aciertos consecutivos
   - Un fallo reinicia la partida
   - La secuencia se baraja de nuevo en cada partida
   - Contraseña: suburbio
   ========================================================= */


// =========================================================
// CONFIGURACIÓN
// =========================================================

const TARGET_STREAK = 20;
const PASSWORD = "suburbio";


// =========================================================
// JUGADORES
// =========================================================

const players = [

    // TOP DEL MUNDO

    { name: "Erling Haaland", club: "Manchester City", value: 220 },
    { name: "Lamine Yamal", club: "FC Barcelona", value: 220 },
    { name: "Kylian Mbappé", club: "Real Madrid", value: 200 },
    { name: "Michael Olise", club: "Bayern Munich", value: 170 },
    { name: "Jude Bellingham", club: "Real Madrid", value: 160 },
    { name: "Pedri", club: "FC Barcelona", value: 150 },

    { name: "Vinícius Júnior", club: "Real Madrid", value: 140 },
    { name: "Vitinha", club: "Paris Saint-Germain", value: 140 },
    { name: "Khvicha Kvaratskhelia", club: "Paris Saint-Germain", value: 140 },
    { name: "João Neves", club: "Paris Saint-Germain", value: 140 },

    { name: "Declan Rice", club: "Arsenal", value: 120 },
    { name: "Julián Álvarez", club: "Atlético de Madrid", value: 120 },
    { name: "Désiré Doué", club: "Paris Saint-Germain", value: 120 },

    { name: "Bukayo Saka", club: "Arsenal", value: 110 },
    { name: "Morgan Rogers", club: "Chelsea", value: 110 },
    { name: "Elliot Anderson", club: "Manchester City", value: 110 },

    { name: "Ousmane Dembélé", club: "Paris Saint-Germain", value: 100 },
    { name: "Dominik Szoboszlai", club: "Liverpool", value: 100 },
    { name: "William Saliba", club: "Arsenal", value: 100 },
    { name: "Cole Palmer", club: "Chelsea", value: 100 },
    { name: "Jamal Musiala", club: "Bayern Munich", value: 100 },
    { name: "Florian Wirtz", club: "Liverpool", value: 100 },
    { name: "Fermín López", club: "FC Barcelona", value: 100 },
    { name: "Enzo Fernández", club: "Manchester City", value: 100 },
    { name: "Moisés Caicedo", club: "Chelsea", value: 100 },
    { name: "Pau Cubarsí", club: "FC Barcelona", value: 100 },

    // 90M

    { name: "Federico Valverde", club: "Real Madrid", value: 90 },
    { name: "Rayan Cherki", club: "Manchester City", value: 90 },
    { name: "Bradley Barcola", club: "Liverpool", value: 90 },
    { name: "Aleksandar Pavlović", club: "Bayern Munich", value: 90 },
    { name: "Arda Güler", club: "Real Madrid", value: 90 },
    { name: "Yan Diomande", club: "Real Madrid", value: 90 },

    // 85M

    { name: "Alexander Isak", club: "Liverpool", value: 85 },
    { name: "Lautaro Martínez", club: "Inter Milan", value: 85 },

    // 80M

    { name: "Sandro Tonali", club: "Tottenham Hotspur", value: 80 },
    { name: "Achraf Hakimi", club: "Paris Saint-Germain", value: 80 },
    { name: "Ryan Gravenberch", club: "Liverpool", value: 80 },
    { name: "Anthony Gordon", club: "FC Barcelona", value: 80 },
    { name: "Antoine Semenyo", club: "Manchester City", value: 80 },
    { name: "Nuno Mendes", club: "Paris Saint-Germain", value: 80 },
    { name: "João Pedro", club: "Chelsea", value: 80 },
    { name: "Willian Pacho", club: "Paris Saint-Germain", value: 80 },
    { name: "Hugo Ekitiké", club: "Liverpool", value: 80 },
    { name: "Warren Zaïre-Emery", club: "Paris Saint-Germain", value: 80 },
    { name: "Nico Paz", club: "Como", value: 80 },
    { name: "Estêvão", club: "Chelsea", value: 80 },
    { name: "Ayyoub Bouaddi", club: "Manchester City", value: 80 },

    // 75M

    { name: "Dayot Upamecano", club: "Bayern Munich", value: 75 },
    { name: "Victor Osimhen", club: "Galatasaray", value: 75 },
    { name: "Bryan Mbeumo", club: "Manchester United", value: 75 },
    { name: "Martín Zubimendi", club: "Arsenal", value: 75 },
    { name: "Gabriel", club: "Arsenal", value: 75 },
    { name: "Jérémy Doku", club: "Manchester City", value: 75 },
    { name: "Matheus Cunha", club: "Manchester United", value: 75 },
    { name: "Benjamin Šeško", club: "Manchester United", value: 75 },
    { name: "Kenan Yıldız", club: "Juventus", value: 75 },

    // 70M

    { name: "Martin Ødegaard", club: "Arsenal", value: 70 },
    { name: "Marc Guéhi", club: "Manchester City", value: 70 },
    { name: "Phil Foden", club: "Manchester City", value: 70 },
    { name: "Raphinha", club: "FC Barcelona", value: 70 },
    { name: "Aurélien Tchouaméni", club: "Real Madrid", value: 70 },
    { name: "Jurriën Timber", club: "Arsenal", value: 70 },
    { name: "Morgan Gibbs-White", club: "Nottingham Forest", value: 70 },
    { name: "Joško Gvardiol", club: "Manchester City", value: 70 },
    { name: "Luis Díaz", club: "Bayern Munich", value: 70 },
    { name: "Bruno Guimarães", club: "Arsenal", value: 70 },
    { name: "Alexis Mac Allister", club: "Liverpool", value: 70 },
    { name: "Nico O'Reilly", club: "Manchester City", value: 70 },
    { name: "Adam Wharton", club: "Crystal Palace", value: 70 },
    { name: "Kobbie Mainoo", club: "Manchester United", value: 70 },
    { name: "Eli Junior Kroupi", club: "AFC Bournemouth", value: 70 },

    // 65M

    { name: "Alessandro Bastoni", club: "Inter Milan", value: 65 },
    { name: "Viktor Gyökeres", club: "Arsenal", value: 65 },
    { name: "Eberechi Eze", club: "Arsenal", value: 65 },
    { name: "Igor Thiago", club: "Brentford", value: 65 },
    { name: "Johan Manzambi", club: "Aston Villa", value: 65 },

    // 60M

    { name: "Harry Kane", club: "Bayern Munich", value: 60 },
    { name: "Marc Cucurella", club: "Real Madrid", value: 60 },
    { name: "Dani Olmo", club: "FC Barcelona", value: 60 },
    { name: "Trent Alexander-Arnold", club: "Real Madrid", value: 60 },
    { name: "Jules Koundé", club: "FC Barcelona", value: 60 },
    { name: "Cody Gakpo", club: "Liverpool", value: 60 },
    { name: "Reece James", club: "Chelsea", value: 60 },
    { name: "Pedro Neto", club: "Chelsea", value: 60 },
    { name: "Jan Paul van Hecke", club: "Tottenham Hotspur", value: 60 },
    { name: "Rasmus Højlund", club: "Napoli", value: 60 },
    { name: "Dean Huijsen", club: "Real Madrid", value: 60 },
    { name: "Luka Vušković", club: "Brighton", value: 60 },
    { name: "Rayan", club: "AFC Bournemouth", value: 60 },
    { name: "Lennart Karl", club: "Bayern Munich", value: 60 },

    // 55M

    { name: "Rúben Dias", club: "Manchester City", value: 55 },
    { name: "Kai Havertz", club: "Arsenal", value: 55 },
    { name: "Rodri", club: "FC Barcelona", value: 55 },
    { name: "Nico Schlotterbeck", club: "Borussia Dortmund", value: 55 },
    { name: "Ferran Torres", club: "Paris Saint-Germain", value: 55 },
    { name: "Felix Nmecha", club: "Borussia Dortmund", value: 55 },
    { name: "Nick Woltemade", club: "Juventus", value: 55 },
    { name: "Riccardo Calafiori", club: "Arsenal", value: 55 },
    { name: "Mason Greenwood", club: "Fenerbahçe", value: 55 },
    { name: "Iliman Ndiaye", club: "Manchester City", value: 55 },


    // =====================================================
    // GUIÑO AL CÁDIZ CF 💛💙
    // =====================================================

    {
        name: "Jokin Ezkieta",
        club: "Cádiz CF",
        value: 2.5
    }

];


// =========================================================
// ESTADO DEL JUEGO
// =========================================================

let deck = [];
let currentPlayer = null;
let nextPlayer = null;

let streak = 0;
let round = 1;

let answering = false;


// =========================================================
// ELEMENTOS DEL DOM
// =========================================================

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const loseScreen = document.getElementById("lose-screen");
const winScreen = document.getElementById("win-screen");

const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");

const higherButton = document.getElementById("higher-button");
const lowerButton = document.getElementById("lower-button");

const roundElement = document.getElementById("round");
const streakElement = document.getElementById("streak");

const currentName = document.getElementById("current-name");
const currentClub = document.getElementById("current-club");
const currentValue = document.getElementById("current-value");
const currentImage = document.getElementById("current-image");

const nextName = document.getElementById("next-name");
const nextClub = document.getElementById("next-club");
const nextValue = document.getElementById("next-value");
const nextImage = document.getElementById("next-image");

const feedback = document.getElementById("feedback");

const lostStreak = document.getElementById("lost-streak");

const passwordElement = document.getElementById("password");


// =========================================================
// FORMATEAR VALORES
// =========================================================

function formatValue(value) {

    if (value < 1) {
        return `€${value.toLocaleString("es-ES")} M`;
    }

    return `€${value.toLocaleString("es-ES")} M`;
}


// =========================================================
// GENERAR AVATAR
//
// De momento utilizamos iniciales generadas localmente.
// Así no dependemos de imágenes externas.
// =========================================================

function getInitials(name) {

    const words = name
        .replace(/[^\p{L}\s]/gu, "")
        .trim()
        .split(/\s+/);

    if (words.length === 1) {
        return words[0].substring(0, 2).toUpperCase();
    }

    return (
        words[0][0] +
        words[words.length - 1][0]
    ).toUpperCase();
}


function createAvatar(name, color) {

    const initials = getInitials(name);

    const svg = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="400"
            viewBox="0 0 400 400"
        >
            <defs>
                <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop
                        offset="0%"
                        stop-color="${color}"
                    />

                    <stop
                        offset="100%"
                        stop-color="#07111f"
                    />
                </linearGradient>
            </defs>

            <circle
                cx="200"
                cy="200"
                r="200"
                fill="url(#gradient)"
            />

            <text
                x="200"
                y="220"
                text-anchor="middle"
                dominant-baseline="middle"
                font-family="Arial, sans-serif"
                font-size="125"
                font-weight="900"
                fill="white"
            >
                ${initials}
            </text>
        </svg>
    `;

    return "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg);
}


function setPlayerImage(element, player, color) {

    element.src = createAvatar(
        player.name,
        color
    );

    element.alt = player.name;
}


// =========================================================
// BARAJAR
// =========================================================

function shuffle(array) {

    const copy = [...array];

    for (
        let i = copy.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            copy[i],
            copy[j]
        ] = [
            copy[j],
            copy[i]
        ];
    }

    return copy;
}


// =========================================================
// CREAR NUEVA PARTIDA
// =========================================================

function startGame() {

    streak = 0;
    round = 1;
    answering = false;

    // Barajamos TODOS los jugadores.
    deck = shuffle(players);

    currentPlayer = deck.shift();
    nextPlayer = deck.shift();

    updateScore();
    displayPlayers();

    showScreen(gameScreen);

    feedback.classList.add("hidden");
    feedback.textContent = "";

    enableButtons();
}


// =========================================================
// MOSTRAR JUGADORES
// =========================================================

function displayPlayers() {

    currentName.textContent =
        currentPlayer.name;

    currentClub.textContent =
        currentPlayer.club;

    currentValue.textContent =
        formatValue(currentPlayer.value);


    nextName.textContent =
        nextPlayer.name;

    nextClub.textContent =
        nextPlayer.club;

    nextValue.textContent = "¿?";

    nextValue.classList.add(
        "hidden-value"
    );


    setPlayerImage(
        currentImage,
        currentPlayer,
        "#20d47a"
    );

    setPlayerImage(
        nextImage,
        nextPlayer,
        "#ffc857"
    );
}


// =========================================================
// ACTUALIZAR CONTADOR
// =========================================================

function updateScore() {

    streakElement.textContent =
        streak;

    roundElement.textContent =
        round;
}


// =========================================================
// RESPONDER
// =========================================================

function answer(choice) {

    if (answering) {
        return;
    }

    answering = true;

    disableButtons();


    const currentValueNumber =
        currentPlayer.value;

    const nextValueNumber =
        nextPlayer.value;


    let correct = false;


    if (choice === "higher") {

        correct =
            nextValueNumber >
            currentValueNumber;

    } else {

        correct =
            nextValueNumber <
            currentValueNumber;
    }


    /*
       Si tienen exactamente el mismo valor,
       ninguna de las dos respuestas es correcta.

       Esto evita situaciones ambiguas.
    */

    if (
        nextValueNumber ===
        currentValueNumber
    ) {

        correct = false;
    }


    // Mostrar el valor real
    nextValue.textContent =
        formatValue(nextPlayer.value);

    nextValue.classList.remove(
        "hidden-value"
    );


    if (correct) {

        handleCorrect();

    } else {

        handleWrong();
    }
}


// =========================================================
// ACIERTO
// =========================================================

function handleCorrect() {

    streak++;

    updateScore();

    feedback.classList.remove(
        "hidden",
        "wrong"
    );

    feedback.classList.add(
        "correct"
    );

    feedback.innerHTML =
        `✓ ¡Correcto! ${nextPlayer.name} vale ${formatValue(nextPlayer.value)}.`;


    /*
       Si llega a 20, gana.
    */

    if (streak >= TARGET_STREAK) {

        setTimeout(
            showWin,
            900
        );

        return;
    }


    /*
       El jugador anterior pasa a ser
       el jugador actual.
    */

    setTimeout(() => {

        currentPlayer =
            nextPlayer;

        nextPlayer =
            deck.shift();

        round++;

        feedback.classList.add(
            "hidden"
        );

        updateScore();

        displayPlayers();

        enableButtons();

        answering = false;

    }, 1000);
}


// =========================================================
// FALLO
// =========================================================

function handleWrong() {

    feedback.classList.remove(
        "hidden",
        "correct"
    );

    feedback.classList.add(
        "wrong"
    );

    feedback.innerHTML =
        `✕ Incorrecto. ${nextPlayer.name} vale ${formatValue(nextPlayer.value)}.`;


    lostStreak.textContent =
        streak;


    setTimeout(() => {

        showScreen(loseScreen);

        answering = false;

    }, 1200);
}


// =========================================================
// BOTONES
// =========================================================

function disableButtons() {

    higherButton.disabled = true;
    lowerButton.disabled = true;
}


function enableButtons() {

    higherButton.disabled = false;
    lowerButton.disabled = false;
}


// =========================================================
// CAMBIAR DE PANTALLA
// =========================================================

function showScreen(screen) {

    startScreen.classList.add(
        "hidden"
    );

    gameScreen.classList.add(
        "hidden"
    );

    loseScreen.classList.add(
        "hidden"
    );

    winScreen.classList.add(
        "hidden"
    );


    screen.classList.remove(
        "hidden"
    );
}


// =========================================================
// VICTORIA
// =========================================================

function showWin() {

    passwordElement.textContent =
        PASSWORD;

    showScreen(winScreen);
}


// =========================================================
// EVENTOS
// =========================================================

startButton.addEventListener(
    "click",
    startGame
);


restartButton.addEventListener(
    "click",
    startGame
);


higherButton.addEventListener(
    "click",
    () => answer("higher")
);


lowerButton.addEventListener(
    "click",
    () => answer("lower")
);


// =========================================================
// TECLADO
//
// También puedes jugar con:
// ↑ = MÁS
// ↓ = MENOS
// =========================================================

document.addEventListener(
    "keydown",
    (event) => {

        if (
            gameScreen.classList.contains(
                "hidden"
            )
        ) {
            return;
        }

        if (answering) {
            return;
        }

        if (event.key === "ArrowUp") {

            answer("higher");

        } else if (
            event.key === "ArrowDown"
        ) {

            answer("lower");
        }
    }
);
