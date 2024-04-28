const wahrheitButton = document.getElementById('wahrheit');
const pflichtButton = document.getElementById('pflicht');
const ergebnisElement = document.getElementById('ergebnis');

const wahrheiten = [
    "Was ist dein peinlichstes Geheimnis?",
    "Wen hast du zuletzt heimlich angeschwärmt?",
    "Singst du beim Duschen?",
    "Hast du jemals etwas gestohlen?",
    "Verrate uns deinen größten Traum.",
];

const pflichten = [
    "Rufe eine zufällige Person aus deinem Kontaktbuch an.",
    "Erzähle uns einen peinlichen Witz.",
    "Tanze zu deinem Lieblingslied.",
    "Zeige uns dein bestes Imitations-Talent.",
    "Versuche, deine Zunge zu biegen.",
];

wahrheitButton.addEventListener('click', () => {
    const wahrheit = wahrheiten[Math.floor(Math.random() * wahrheiten.length)];
    ergebnisElement.textContent = `Wahrheit: ${wahrheit}`;
    ergebnisElement.classList.remove('hidden');
});

pflichtButton.addEventListener('click', () => {
    const pflicht = pflichten[Math.floor(Math.random() * pflichten.length)];
    ergebnisElement.textContent = `Pflicht: ${pflicht}`;
    ergebnisElement.classList.remove('hidden');
});
