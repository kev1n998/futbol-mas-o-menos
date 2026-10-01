/* =========================================================
   MAS O MENOS (UN SULO)
   Juego de comparación de valores de mercado
   ========================================================= */


// =========================================================
// CONFIGURACIÓN
// =========================================================

const TARGET_STREAK = 20;

const PASSWORD = "suburbio";

const PASSWORD_CODE = "03 =PQKL";


// =========================================================
// JUGADORES
//
// value = millones de euros
//
// wiki = nombre que utilizaremos para buscar
// automáticamente la fotografía en Wikipedia.
// =========================================================

const players = [

    { name: "Erling Haaland", club: "Manchester City", value: 220, wiki: "Erling Haaland" },
    { name: "Lamine Yamal", club: "FC Barcelona", value: 220, wiki: "Lamine Yamal" },
    { name: "Kylian Mbappé", club: "Real Madrid", value: 200, wiki: "Kylian Mbappé" },
    { name: "Michael Olise", club: "Bayern Munich", value: 170, wiki: "Michael Olise" },
    { name: "Jude Bellingham", club: "Real Madrid", value: 160, wiki: "Jude Bellingham" },
    { name: "Pedri", club: "FC Barcelona", value: 150, wiki: "Pedri" },

    { name: "Vinícius Júnior", club: "Real Madrid", value: 140, wiki: "Vinicius Junior" },
    { name: "Vitinha", club: "Paris Saint-Germain", value: 140, wiki: "Vitinha" },
    { name: "Khvicha Kvaratskhelia", club: "Paris Saint-Germain", value: 140, wiki: "Khvicha Kvaratskhelia" },
    { name: "João Neves", club: "Paris Saint-Germain", value: 140, wiki: "João Neves" },

    { name: "Declan Rice", club: "Arsenal", value: 120, wiki: "Declan Rice" },
    { name: "Julián Álvarez", club: "Atlético de Madrid", value: 120, wiki: "Julián Álvarez" },
    { name: "Désiré Doué", club: "Paris Saint-Germain", value: 120, wiki: "Désiré Doué" },

    { name: "Bukayo Saka", club: "Arsenal", value: 110, wiki: "Bukayo Saka" },
    { name: "Morgan Rogers", club: "Chelsea", value: 110, wiki: "Morgan Rogers" },
    { name: "Elliot Anderson", club: "Manchester City", value: 110, wiki: "Elliot Anderson" },

    { name: "Ousmane Dembélé", club: "Paris Saint-Germain", value: 100, wiki: "Ousmane Dembélé" },
    { name: "Dominik Szoboszlai", club: "Liverpool", value: 100, wiki: "Dominik Szoboszlai" },
    { name: "William Saliba", club: "Arsenal", value: 100, wiki: "William Saliba" },
    { name: "Cole Palmer", club: "Chelsea", value: 100, wiki: "Cole Palmer" },
    { name: "Jamal Musiala", club: "Bayern Munich", value: 100, wiki: "Jamal Musiala" },
    { name: "Florian Wirtz", club: "Liverpool", value: 100, wiki: "Florian Wirtz" },
    { name: "Fermín López", club: "FC Barcelona", value: 100, wiki: "Fermín López" },
    { name: "Enzo Fernández", club: "Manchester City", value: 100, wiki: "Enzo Fernández" },
    { name: "Moisés Caicedo", club: "Chelsea", value: 100, wiki: "Moisés Caicedo" },
    { name: "Pau Cubarsí", club: "FC Barcelona", value: 100, wiki: "Pau Cubarsí" },

    { name: "Federico Valverde", club: "Real Madrid", value: 90, wiki: "Federico Valverde" },
    { name: "Rayan Cherki", club: "Manchester City", value: 90, wiki: "Rayan Cherki" },
    { name: "Bradley Barcola", club: "Paris Saint-Germain", value: 90, wiki: "Bradley Barcola" },
    { name: "Aleksandar Pavlović", club: "Bayern Munich", value: 90, wiki: "Aleksandar Pavlović" },
    { name: "Arda Güler", club: "Real Madrid", value: 90, wiki: "Arda Güler" },
    { name: "Yan Diomande", club: "Real Madrid", value: 90, wiki: "Yan Diomande" },

    { name: "Alexander Isak", club: "Liverpool", value: 85, wiki: "Alexander Isak" },
    { name: "Lautaro Martínez", club: "Inter Milan", value: 85, wiki: "Lautaro Martínez" },

    { name: "Sandro Tonali", club: "Tottenham Hotspur", value: 80, wiki: "Sandro Tonali" },
    { name: "Achraf Hakimi", club: "Paris Saint-Germain", value: 80, wiki: "Achraf Hakimi" },
    { name: "Ryan Gravenberch", club: "Liverpool", value: 80, wiki: "Ryan Gravenberch" },
    { name: "Anthony Gordon", club: "FC Barcelona", value: 80, wiki: "Anthony Gordon" },
    { name: "Antoine Semenyo", club: "Manchester City", value: 80, wiki: "Antoine Semenyo" },
    { name: "Nuno Mendes", club: "Paris Saint-Germain", value: 80, wiki: "Nuno Mendes" },
    { name: "João Pedro", club: "Chelsea", value: 80, wiki: "João Pedro" },
    { name: "Willian Pacho", club: "Paris Saint-Germain", value: 80, wiki: "Willian Pacho" },
    { name: "Hugo Ekitiké", club: "Liverpool", value: 80, wiki: "Hugo Ekitike" },
    { name: "Warren Zaïre-Emery", club: "Paris Saint-Germain", value: 80, wiki: "Warren Zaïre-Emery" },
    { name: "Nico Paz", club: "Como", value: 80, wiki: "Nico Paz" },
    { name: "Estêvão", club: "Chelsea", value: 80, wiki: "Estêvão" },
    { name: "Ayyoub Bouaddi", club: "Manchester City", value: 80, wiki: "Ayyoub Bouaddi" },

    { name: "Dayot Upamecano", club: "Bayern Munich", value: 75, wiki: "Dayot Upamecano" },
    { name: "Victor Osimhen", club: "Galatasaray", value: 75, wiki: "Victor Osimhen" },
    { name: "Bryan Mbeumo", club: "Manchester United", value: 75, wiki: "Bryan Mbeumo" },
    { name: "Martín Zubimendi", club: "Arsenal", value: 75, wiki: "Martín Zubimendi" },
    { name: "Gabriel Magalhães", club: "Arsenal", value: 75, wiki: "Gabriel Magalhães" },
    { name: "Jérémy Doku", club: "Manchester City", value: 75, wiki: "Jérémy Doku" },
    { name: "Matheus Cunha", club: "Manchester United", value: 75, wiki: "Matheus Cunha" },
    { name: "Benjamin Šeško", club: "Manchester United", value: 75, wiki: "Benjamin Šeško" },
    { name: "Kenan Yıldız", club: "Juventus", value: 75, wiki: "Kenan Yıldız" },

    { name: "Martin Ødegaard", club: "Arsenal", value: 70, wiki: "Martin Ødegaard" },
    { name: "Marc Guéhi", club: "Manchester City", value: 70, wiki: "Marc Guéhi" },
    { name: "Phil Foden", club: "Manchester City", value: 70, wiki: "Phil Foden" },
    { name: "Raphinha", club: "FC Barcelona", value: 70, wiki: "Raphinha" },
    { name: "Aurélien Tchouaméni", club: "Real Madrid", value: 70, wiki: "Aurélien Tchouaméni" },
    { name: "Jurriën Timber", club: "Arsenal", value: 70, wiki: "Jurriën Timber" },
    { name: "Morgan Gibbs-White", club: "Nottingham Forest", value: 70, wiki: "Morgan Gibbs-White" },
    { name: "Joško Gvardiol", club: "Manchester City", value: 70, wiki: "Joško Gvardiol" },
    { name: "Luis Díaz", club: "Bayern Munich", value: 70, wiki: "Luis Díaz" },
    { name: "Bruno Guimarães", club: "Arsenal", value: 70, wiki: "Bruno Guimarães" },
    { name: "Alexis Mac Allister", club: "Liverpool", value: 70, wiki: "Alexis Mac Allister" },
    { name: "Nico O'Reilly", club: "Manchester City", value: 70, wiki: "Nico O'Reilly" },
    { name: "Adam Wharton", club: "Crystal Palace", value: 70, wiki: "Adam Wharton" },
    { name: "Kobbie Mainoo", club: "Manchester United", value: 70, wiki: "Kobbie Mainoo" },
    { name: "Eli Junior Kroupi", club: "AFC Bournemouth", value: 70, wiki: "Eli Junior Kroupi" },

    { name: "Alessandro Bastoni", club: "Inter Milan", value: 65, wiki: "Alessandro Bastoni" },
    { name: "Viktor Gyökeres", club: "Arsenal", value: 65, wiki: "Viktor Gyökeres" },
    { name: "Eberechi Eze", club: "Arsenal", value: 65, wiki: "Eberechi Eze" },
    { name: "Igor Thiago", club: "Brentford", value: 65, wiki: "Igor Thiago" },
    { name: "Johan Manzambi", club: "Aston Villa", value: 65, wiki: "Johan Manzambi" },

    { name: "Harry Kane", club: "Bayern Munich", value: 60, wiki: "Harry Kane" },
    { name: "Marc Cucurella", club: "Chelsea", value: 60, wiki: "Marc Cucurella" },
    { name: "Dani Olmo", club: "FC Barcelona", value: 60, wiki: "Dani Olmo" },
    { name: "Trent Alexander-Arnold", club: "Real Madrid", value: 60, wiki: "Trent Alexander-Arnold" },
    { name: "Jules Koundé", club: "FC Barcelona", value: 60, wiki: "Jules Koundé" },
    { name: "Cody Gakpo", club: "Liverpool", value: 60, wiki: "Cody Gakpo" },
    { name: "Reece James", club: "Chelsea", value: 60, wiki: "Reece James" },
    { name: "Pedro Neto", club: "Chelsea", value: 60, wiki: "Pedro Neto" },
    { name: "Jan Paul van Hecke", club: "Brighton & Hove Albion", value: 60, wiki: "Jan Paul van Hecke" },
    { name: "Rasmus Højlund", club: "Napoli", value: 60, wiki: "Rasmus Højlund" },
    { name: "Dean Huijsen", club: "Real Madrid", value: 60, wiki: "Dean Huijsen" },
    { name: "Luka Vušković", club: "Tottenham Hotspur", value: 60, wiki: "Luka Vušković" },
    { name: "Lennart Karl", club: "Bayern Munich", value: 60, wiki: "Lennart Karl" },

    { name: "Rúben Dias", club: "Manchester City", value: 55, wiki: "Rúben Dias" },
    { name: "Kai Havertz", club: "Arsenal", value: 55, wiki: "Kai Havertz" },
    { name: "Rodri", club: "Manchester City", value: 55, wiki: "Rodri" },
    { name: "Nico Schlotterbeck", club: "Borussia Dortmund", value: 55, wiki: "Nico Schlotterbeck" },
    { name: "Ferran Torres", club: "FC Barcelona", value: 55, wiki: "Ferran Torres" },
    { name: "Felix Nmecha", club: "Borussia Dortmund", value: 55, wiki: "Felix Nmecha" },
    { name: "Nick Woltemade", club: "Juventus", value: 55, wiki: "Nick Woltemade" },
    { name: "Riccardo Calafiori", club: "Arsenal", value: 55, wiki: "Riccardo Calafiori" },
    { name: "Mason Greenwood", club: "Fenerbahçe", value: 40, wiki: "Mason Greenwood" },
    { name: "Iliman Ndiaye", club: "Everton", value: 55, wiki: "Iliman Ndiaye" },


    // =====================================================
    // CÁDIZ CF 💛💙
    // =====================================================

    {
        name: "Jokin Ezkieta",
        club: "Cádiz CF",
        value: 2.5,
        wiki: "Jokin Ezkieta"
    }

];


// =========================================================
// ESTADO
// =========================================================

let deck = [];
let currentPlayer = null;
let nextPlayer = null;

let streak = 0;
let round = 1;

let answering = false;


// =========================================================
// ELEMENTOS
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

const passwordElement =
    document.getElementById("password");

const passwordCodeElement =
    document.getElementById("password-code");


// =========================================================
// FORMATEAR VALOR
// =========================================================

function formatValue(value) {

    return `€${value.toLocaleString("es-ES")} M`;
}


// =========================================================
// INICIALES
// =========================================================

function getInitials(name) {

    const words = name
        .replace(/[^\p{L}\s]/gu, "")
        .trim()
        .split(/\s+/);

    if (words.length === 1) {
        return words[0]
            .substring(0, 2)
            .toUpperCase();
    }

    return (
        words[0][0] +
        words[words.length - 1][0]
    ).toUpperCase();
}


// =========================================================
// AVATAR DE RESPALDO
// =========================================================

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

    return (
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg)
    );
}


// =========================================================
// CARGAR FOTO DE WIKIPEDIA
// =========================================================

async function loadWikipediaPhoto(player, element, color) {

    const fallback =
        createAvatar(player.name, color);

    element.src = fallback;

    try {

        const url =
            "https://en.wikipedia.org/w/api.php" +
            "?action=query" +
            "&format=json" +
            "&prop=pageimages" +
            "&piprop=thumbnail" +
            "&pithumbsize=500" +
            "&titles=" +
            encodeURIComponent(player.wiki) +
            "&origin=*";

        const response =
            await fetch(url);

        if (!response.ok) {
            return;
        }

        const data =
            await response.json();

        const pages =
            data?.query?.pages;

        if (!pages) {
            return;
        }

        const page =
            Object.values(pages)[0];

        if (
            page &&
            page.thumbnail &&
            page.thumbnail.source
        ) {

            element.src =
                page.thumbnail.source;
        }

    } catch (error) {

        // Si Wikipedia falla, dejamos
        // el avatar de iniciales.
        element.src = fallback;
    }
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
// INICIAR PARTIDA
// =========================================================

function startGame() {

    streak = 0;
    round = 1;
    answering = false;

    deck = shuffle(players);

    currentPlayer =
        deck.shift();

    nextPlayer =
        deck.shift();

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
        formatValue(
            currentPlayer.value
        );


    nextName.textContent =
        nextPlayer.name;

    nextClub.textContent =
        nextPlayer.club;

    nextValue.textContent = "¿?";

    nextValue.classList.add(
        "hidden-value"
    );


    // Avatar inmediato
    currentImage.src =
        createAvatar(
            currentPlayer.name,
            "#20d47a"
        );

    nextImage.src =
        createAvatar(
            nextPlayer.name,
            "#ffc857"
        );


    currentImage.alt =
        currentPlayer.name;

    nextImage.alt =
        nextPlayer.name;


    // Intentamos cargar las fotos reales.
    loadWikipediaPhoto(
        currentPlayer,
        currentImage,
        "#20d47a"
    );

    loadWikipediaPhoto(
        nextPlayer,
        nextImage,
        "#ffc857"
    );
}


// =========================================================
// MARCADOR
// =========================================================

function updateScore() {

    streakElement.textContent =
        streak;

    roundElement.textContent =
        round;
}


// =========================================================
// RESPUESTA
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


    let correct;


    // =============================================
    // EMPATE
    //
    // Si valen exactamente lo mismo:
    // MÁS y MENOS son correctos.
    // =============================================

    if (
        nextValueNumber ===
        currentValueNumber
    ) {

        correct = true;

    } else if (
        choice === "higher"
    ) {

        correct =
            nextValueNumber >
            currentValueNumber;

    } else {

        correct =
            nextValueNumber <
            currentValueNumber;
    }


    // Revelamos el precio
    nextValue.textContent =
        formatValue(
            nextPlayer.value
        );

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


    if (
        currentPlayer.value ===
        nextPlayer.value
    ) {

        feedback.innerHTML =
            `✓ ¡Correcto! Los dos valen ${formatValue(nextPlayer.value)}.`;

    } else {

        feedback.innerHTML =
            `✓ ¡Correcto! ${nextPlayer.name} vale ${formatValue(nextPlayer.value)}.`;
    }


    // Victoria
    if (
        streak >= TARGET_STREAK
    ) {

        setTimeout(
            showWin,
            900
        );

        return;
    }


    // Siguiente ronda
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

        showScreen(
            loseScreen
        );

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
// CAMBIAR PANTALLA
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

    passwordCodeElement.textContent =
        PASSWORD_CODE;

    showScreen(
        winScreen
    );
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

        if (
            event.key === "ArrowUp"
        ) {

            answer("higher");

        } else if (
            event.key === "ArrowDown"
        ) {

            answer("lower");
        }
    }
);
