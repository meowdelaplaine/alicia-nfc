// Messages aléatoires
const messages = [
    "Aujourd'hui va être une bonne journée ✨",
    "Tu as gagné +10 en charisme 😎",
    "Une quête secondaire t'attend aujourd'hui ⚔️",
    "N'oublie pas : tu es le personnage principal 👑",
    "Achievement unlocked : une journée de plus 🎉"
];
function nouveauMessage() {
    const index = Math.floor(Math.random() * messages.length);
    document.getElementById("motDuJour").textContent = messages[index];
}
// Mini-jeu (temporaire)
function lancerJeu() {
    document.getElementById("jeu").textContent =
        "🎮 Mini-jeu débloqué ! Le vrai jeu arrive bientôt...";
}
// Quête secrète
function queteSecrete() {
    document.getElementById("secret").textContent =
        "🔓 Quête secrète débloquée ! Tu as gagné +100 XP.";
}
