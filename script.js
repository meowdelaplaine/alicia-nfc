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
// ====================================
// 🇬🇧 DAILY ENGLISH QUEST
// ====================================
const englishWords = [
    {
        word: "Awkward",
        answers: ["Courageux", "Gênant / maladroit", "Affamé", "Brillant"],
        correct: 1
    },
    {
        word: "Stubborn",
        answers: ["Têtu", "Fatigué", "Chanceux", "Silencieux"],
        correct: 0
    },
    {
        word: "Clumsy",
        answers: ["Calme", "Maladroit", "Drôle", "Rapide"],
        correct: 1
    },
    {
        word: "Whisper",
        answers: ["Chuchoter", "Crier", "Courir", "Dormir"],
        correct: 0
    },
    {
        word: "Wander",
        answers: ["Se cacher", "Errer / se promener", "Attendre", "Tomber"],
        correct: 1
    },
    {
        word: "Fearless",
        answers: ["Peureux", "Sans peur", "Fatigué", "Impatient"],
        correct: 1
    },
    {
        word: "Achievement",
        answers: ["Échec", "Accomplissement", "Souvenir", "Voyage"],
        correct: 1
    },
    {
        word: "Overwhelmed",
        answers: ["Submergé / dépassé", "Heureux", "Calme", "Ennuyé"],
        correct: 0
    },
    {
        word: "Worthwhile",
        answers: [
            "Qui en vaut la peine",
            "Dangereux",
            "Impossible",
            "Gratuit"
        ],
        correct: 0
    },
    {
        word: "Breathtaking",
        answers: [
            "Ennuyeux",
            "Époustouflant",
            "Silencieux",
            "Étrange"
        ],
        correct: 1
    },
    {
        word: "Reckless",
        answers: [
            "Prudent",
            "Imprudent / téméraire",
            "Paresseux",
            "Honnête"
        ],
        correct: 1
    },
    {
        word: "Reliable",
        answers: [
            "Fiable",
            "Dangereux",
            "Timide",
            "Égoïste"
        ],
        correct: 0
    },
    {
        word: "Grateful",
        answers: [
            "Reconnaissant",
            "Méfiant",
            "Jaloux",
            "Maladroit"
        ],
        correct: 0
    },
    {
        word: "Curious",
        answers: [
            "Curieux",
            "Fatigué",
            "Courageux",
            "Fâché"
        ],
        correct: 0
    },
    {
        word: "Confident",
        answers: [
            "Perdu",
            "Confiant",
            "Ennuyé",
            "Inquiet"
        ],
        correct: 1
    }
];
// ====================================
// PROGRESSION
// ====================================
let englishXP =
    Number(localStorage.getItem("englishXP")) || 0;
let englishStreak =
    Number(localStorage.getItem("englishStreak")) || 0;
let englishLives =
    Number(localStorage.getItem("englishLives")) || 3;
// ====================================
// DATE
// ====================================
function getToday() {
    const now = new Date();
    const year = now.getFullYear();
    const month =
        String(now.getMonth() + 1).padStart(2, "0");
    const day =
        String(now.getDate()).padStart(2, "0");
    return year + "-" + month + "-" + day;
}
// ====================================
// MOT DU JOUR
// ====================================
function getDailyWordIndex() {
    const today = getToday();
    let number = 0;
    for (let i = 0; i < today.length; i++) {
        number += today.charCodeAt(i);
    }
    return number % englishWords.length;
}
// ====================================
// AFFICHAGE DES STATS
// ====================================
function updateEnglishStats() {
    const level =
        Math.floor(englishXP / 100) + 1;
    const xpInLevel =
        englishXP % 100;
    document.getElementById("englishStats").innerHTML =
        "🔥 Streak : " + englishStreak + " jours<br>" +
        "⭐ XP : " + englishXP + "<br>" +
        "🏆 Niveau : " + level + "<br>" +
        "📈 Progression : " + xpInLevel + "/100 XP<br><br>";
}
// ====================================
// LANCEMENT DU QUIZ
// ====================================
function lancerEnglishQuest() {
    const today = getToday();
    const completed =
        localStorage.getItem("englishCompleted");
    updateStreak();
    if (completed === today) {
        document.getElementById("englishQuest").innerHTML =
            "✅ Quête terminée aujourd'hui !<br><br>" +
            "🔥 Reviens demain pour maintenir ton streak.";
        updateEnglishStats();
        return;
    }
    const index = getDailyWordIndex();
    const question = englishWords[index];
    let html = "";
    html += "<h3>⚔️ Défi du jour</h3>";
    html +=
        "<p>Que signifie <strong>" +
        question.word +
        "</strong> ?</p>";
    question.answers.forEach(
        function(answer, answerIndex) {
            html +=
                '<button onclick="checkEnglishAnswer(' +
                answerIndex +
                ')">' +
                answer +
                '</button><br><br>';
        }
    );
    document.getElementById("englishQuest").innerHTML =
        html;
    updateEnglishStats();
}
// ====================================
// VÉRIFICATION
// ====================================
function checkEnglishAnswer(answerIndex) {
    const today = getToday();
    const question =
        englishWords[getDailyWordIndex()];
    if (answerIndex === question.correct) {
        englishXP += 20;
        localStorage.setItem(
            "englishXP",
            englishXP
        );
        localStorage.setItem(
            "englishCompleted",
            today
        );
        updateStreakAfterSuccess();
        const level =
            Math.floor(englishXP / 100) + 1;
        document.getElementById("englishQuest").innerHTML =
            "✅ GOOD JOB!<br><br>" +
            "<strong>" +
            question.word +
            "</strong><br><br>" +
            "⭐ +20 XP<br>" +
            "🔥 Streak : " +
            englishStreak +
            " jours<br>" +
            "🏆 Niveau " +
            level +
            "<br><br>" +
            "Reviens demain pour ta prochaine quête ! ⚔️";
        updateEnglishStats();
    }
    else {
        englishLives--;
        localStorage.setItem(
            "englishLives",
            englishLives
        );
        if (englishLives <= 0) {
            document.getElementById("englishQuest").innerHTML =
                "💀 Plus de vies aujourd'hui !<br><br>" +
                "La bonne réponse était :<br>" +
                "<strong>" +
                question.answers[question.correct] +
                "</strong><br><br>" +
                "Reviens demain pour une nouvelle quête.";
        }
        else {
            document.getElementById("englishQuest").innerHTML =
                "❌ Mauvaise réponse !<br><br>" +
                "❤️ Vies restantes : " +
                englishLives +
                "<br><br>" +
                '<button onclick="lancerEnglishQuest()">' +
                "Réessayer" +
                "</button>";
        }
    }
}
// ====================================
// STREAK
// ====================================
function updateStreakAfterSuccess() {
    const today = getToday();
    const lastSuccess =
        localStorage.getItem("englishLastSuccess");
    if (lastSuccess === today) {
        return;
    }
    const yesterdayDate = new Date();
    yesterdayDate.setDate(
        yesterdayDate.getDate() - 1
    );
    const year =
        yesterdayDate.getFullYear();
    const month =
        String(
            yesterdayDate.getMonth() + 1
        ).padStart(2, "0");
    const day =
        String(
            yesterdayDate.getDate()
        ).padStart(2, "0");
    const yesterday =
        year + "-" +
        month + "-" +
        day;
    if (lastSuccess === yesterday) {
        englishStreak++;
    }
    else {
        englishStreak = 1;
    }
    localStorage.setItem(
        "englishStreak",
        englishStreak
    );
    localStorage.setItem(
        "englishLastSuccess",
        today
    );
    englishLives = 3;
    localStorage.setItem(
        "englishLives",
        englishLives
    );
}
// ====================================
// VÉRIFICATION DU STREAK
// ====================================
function updateStreak() {
    const today = getToday();
    const lastSuccess =
        localStorage.getItem("englishLastSuccess");
    if (!lastSuccess) {
        return;
    }
    if (lastSuccess === today) {
        return;
    }
    const yesterdayDate = new Date();
    yesterdayDate.setDate(
        yesterdayDate.getDate() - 1
    );
    const year =
        yesterdayDate.getFullYear();
    const month =
        String(
            yesterdayDate.getMonth() + 1
        ).padStart(2, "0");
    const day =
        String(
            yesterdayDate.getDate()
        ).padStart(2, "0");
    const yesterday =
        year + "-" +
        month + "-" +
        day;
    if (lastSuccess !== yesterday) {
        englishStreak = 0;
        localStorage.setItem(
            "englishStreak",
            0
        );
    }
}
// Affiche les stats dès l'ouverture
updateEnglishStats();
}
