// Messages aléatoires
const messages = [
    "Aujourd'hui tu vas faire de ton meiux, et c'est déjà trop bien! ✨",
    "Tu as tellement de talent et d'empathie, ne le gâche pas pour les mauvaises personnes!",
    "Une bonne journée t'attend!",
    "N'oublie pas : tu es le personnage principal de ta vie! 👑",
    "On est juste des bactéries sur un caillou, vis ta vie de bactérie!",
    "Tu es trop belle!!",
    "Dans les moments durs, pense à ta verrue, est-ce qu'elle pense à ce que tu ressens quand elle reste sur ton pied?",
    "Une femme moyenne c'est un homme incroyable, donc t'es déjà plus incroyable que 50% des gens!!",
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
