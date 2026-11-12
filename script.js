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
    "Quelqu’un de moins compétent que toi est probablement très sûr de lui aujourd’hui. Fais-en ce que tu veux.",
    "Tu n’as pas besoin d’être parfaite pour être impressionnante, intéressante et mériter l'amour.",
    "Tu as le droit d’être fiere de toi sans attendre que quelqu’un te donne la permission.",
    "Tu es beaucoup trop intéressante pour passer ta journée à te demander ce que les autres pensent de toi.",
    "Ce n’est pas parce que tu doutes de toi que tu as raison (t'as sûrement tord bb).",
    "Tu n’as pas besoin d’avoir confiance avant de commencer ou essayer. Commence, la confiance suivra.",
    "Tu as déjà réussi des choses que tu pensais ne pas pouvoir faire. La mini Alicia serait folle!!",
    "Tout le monde improvise un peu. Certains le font simplement avec beaucoup d’assurance.",
    "Tu n’es pas obligé d’être productive aujourd’hui pour avoir de la valeur.",
    "Si tu attends que tout le monde soit d’accord avec toi, tu vas attendre longtemps (et mourir).",
    "Tu peux être gentille sans accepter n’importe quoi. Y'a toujours mieux.",
    "Demander de l'aide n’a jamais transformé quelqu’un en un maxi clodo.",
    "Arrête de minimiser tes qualités pour mettre les autres à l’aise.",
    "Tu n’es pas difficile. Tu as des standards. Nuance. Et c'est pour ça que je t'ai fait un putain de code",
    "Une journée compliquée ne veut pas dire que ta vie va mal. Respire.",
    "Tu as le droit de ne pas savoir ce que tu fais. C’est souvent comme ça qu’on apprend.",
    "Si ça ne fonctionne pas, tu changeras de plan. Tu l’as déjà fait avant.",
    "Tu ne peux pas contrôler ce que les gens pensent de toi. Mais ils pourront jamais dire que t'es moche",
    "Ne transforme pas cinq minutes gênantes en une semaine de remise en question.",
    "Tu n’as pas besoin de mériter le repos en étant épuisée.",
    "Tu peux vouloir mieux sans être ingrate pour ce que tu as déjà. C'est juste des rageux",
    "Aujourd’hui, parle-toi comme tu parlerais à quelqu’un que tu veux voir réussir. (Maureen)",
    "Si tu te trouves trop ambitieuse pour un projet, vérifie que tu ne t’es pas simplement habitué à te sous-estimer.",
    "Certaines personnes ne vont pas t’aimer. Heureusement, on s'en fout parce que Maureen t'aime.",
    "Une erreur ne remet pas soudainement en question toutes tes compétences.",
    "Tu n’as pas besoin d’être la meilleure. Tu as juste besoin d’oser commencer. (Regarde ce site magnifique ehehe)",
    "La confiance n’est pas de penser que tu vas forcément réussir. C’est de savoir que tu sauras gérer si ça rate.",
    "Tu peux être stressé et quand même très bien t’en sortir. Les deux sont compatibles.",
    "Ne baisse pas tes attentes juste parce que quelqu’un d’autre n’arrive pas à les atteindre.",
    "Tu as passé beaucoup trop de temps à devenir cette version de toi pour commencer à la sous-estimer maintenant wsh."
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
const englishWords = [
    // POP, QUEER ET STAN CULTURE
    {
        word: "Gagged",
        correctAnswer: "Très impressionné",
        wrongAnswers: ["Complètement épuisé", "Plutôt contrarié", "Un peu perdu"]
    },
    {
        word: "Slay",
        correctAnswer: "Faire sensation",
        wrongAnswers: ["Créer une polémique", "Changer d’avis", "Partir discrètement"]
    },
    {
        word: "Shade",
        correctAnswer: "Une remarque piquante",
        wrongAnswers: ["Un grand compliment", "Une fausse excuse", "Une rumeur étrange"]
    },
    {
        word: "Petty",
        correctAnswer: "Mesquin",
        wrongAnswers: ["Audacieux", "Touchant", "Mal à l’aise"]
    },
    {
        word: "Snatched",
        correctAnswer: "Absolument impeccable",
        wrongAnswers: ["Complètement dépassé", "Assez chaotique", "Très controversé"]
    },
    {
        word: "Sassy",
        correctAnswer: "Impertinent et assuré",
        wrongAnswers: ["Discret et réservé", "Calme et prudent", "Naïf et sensible"]
    },
    {
        word: "Messy",
        correctAnswer: "Plein de drama",
        wrongAnswers: ["Très sophistiqué", "Assez prévisible", "Parfaitement organisé"]
    },
    {
        word: "Serving",
        correctAnswer: "Faire forte impression",
        wrongAnswers: ["Chercher une excuse", "Suivre une tendance", "Jouer un personnage"]
    },
    {
        word: "Read",
        correctAnswer: "Remettre quelqu’un à sa place",
        wrongAnswers: ["Comprendre une référence", "Défendre publiquement quelqu’un", "Changer rapidement de sujet"]
    },
    {
        word: "Clocked",
        correctAnswer: "Avoir remarqué quelque chose",
        wrongAnswers: ["Avoir complètement oublié", "Avoir beaucoup exagéré", "Avoir longuement hésité"]
    },
    {
        word: "Tea",
        correctAnswer: "Les potins",
        wrongAnswers: ["Les compliments", "Les excuses", "Les projets"]
    },
    {
        word: "Spill",
        correctAnswer: "Tout raconter",
        wrongAnswers: ["Tout gâcher", "Tout organiser", "Tout oublier"]
    },
    {
        word: "Receipts",
        correctAnswer: "Des preuves",
        wrongAnswers: ["Des excuses", "Des critiques", "Des souvenirs"]
    },
    {
        word: "Shook",
        correctAnswer: "Sous le choc",
        wrongAnswers: ["Très motivé", "Un peu jaloux", "Plutôt soulagé"]
    },
    {
        word: "Pressed",
        correctAnswer: "Très contrarié",
        wrongAnswers: ["Très élégant", "Très confiant", "Très occupé"]
    },
    {
        word: "Salty",
        correctAnswer: "Amer et vexé",
        wrongAnswers: ["Calme et posé", "Drôle et léger", "Naïf et gentil"]
    },
    {
        word: "Thirsty",
        correctAnswer: "En quête d’attention",
        wrongAnswers: ["Sans inspiration", "Facile à convaincre", "Très en colère"]
    },
    {
        word: "Low-key",
        correctAnswer: "De manière discrète",
        wrongAnswers: ["De manière excessive", "De manière immédiate", "De manière certaine"]
    },
    {
        word: "High-key",
        correctAnswer: "De manière très assumée",
        wrongAnswers: ["De manière secrète", "De manière hésitante", "De manière occasionnelle"]
    },
    {
        word: "Bop",
        correctAnswer: "Un morceau entraînant",
        wrongAnswers: ["Un album décevant", "Une chanson ancienne", "Un concert improvisé"]
    },
    {
        word: "Banger",
        correctAnswer: "Un excellent morceau",
        wrongAnswers: ["Une chanson oubliée", "Un mauvais remix", "Une ballade mélancolique"]
    },
    {
        word: "Flop",
        correctAnswer: "Un gros échec",
        wrongAnswers: ["Un retour réussi", "Un projet secret", "Un succès inattendu"]
    },
    {
        word: "Stan",
        correctAnswer: "Un fan extrêmement dévoué",
        wrongAnswers: ["Un critique très sévère", "Un artiste débutant", "Un ancien admirateur"]
    },
    {
        word: "Unhinged",
        correctAnswer: "Complètement déjanté",
        wrongAnswers: ["Très sentimental", "Parfaitement raisonnable", "Un peu prétentieux"]
    },
    {
        word: "Cringe",
        correctAnswer: "Très gênant",
        wrongAnswers: ["Très touchant", "Très subtil", "Très captivant"]
    },
    {
        word: "Corny",
        correctAnswer: "Un peu ringard",
        wrongAnswers: ["Très élégant", "Plutôt agressif", "Vraiment mystérieux"]
    },
    {
        word: "Wholesome",
        correctAnswer: "Réconfortant et positif",
        wrongAnswers: ["Embarrassant et maladroit", "Prétentieux et calculé", "Imprévisible et risqué"]
    },
    {
        word: "Smug",
        correctAnswer: "Trop satisfait de soi",
        wrongAnswers: ["Très généreux", "Plein de regrets", "Facile à vivre"]
    },
    {
        word: "Outdid",
        correctAnswer: "A surpassé les autres",
        wrongAnswers: ["A imité les autres", "A déçu les autres", "A abandonné les autres"]
    },
    {
        word: "Ate",
        correctAnswer: "A totalement assuré",
        wrongAnswers: ["A beaucoup exagéré", "A complètement échoué", "A volontairement menti"]
    },
    // VIE COURANTE ET CONTEXTE PROFESSIONNEL
    {
        word: "Backlog",
        correctAnswer: "Une liste de travail en attente",
        wrongAnswers: ["Un compte rendu de réunion", "Une demande prioritaire", "Un planning déjà terminé"]
    },
    {
        word: "Deadline",
        correctAnswer: "La date limite",
        wrongAnswers: ["La date de lancement", "La durée estimée", "La date de réunion"]
    },
    {
        word: "Workload",
        correctAnswer: "La charge de travail",
        wrongAnswers: ["La méthode de travail", "Le lieu de travail", "Le contrat de travail"]
    },
    {
        word: "Feedback",
        correctAnswer: "Un retour sur le travail",
        wrongAnswers: ["Une demande de congé", "Une nouvelle procédure", "Une décision définitive"]
    },
    {
        word: "Follow-up",
        correctAnswer: "Une action de suivi",
        wrongAnswers: ["Une réunion annulée", "Une demande urgente", "Une présentation finale"]
    },
    {
        word: "Handover",
        correctAnswer: "Une transmission de responsabilités",
        wrongAnswers: ["Une augmentation de salaire", "Une évaluation annuelle", "Une réunion informelle"]
    }
];
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const randomIndex =
            Math.floor(Math.random() * (i + 1));
        const temporaryValue =
            shuffled[i];
        shuffled[i] =
            shuffled[randomIndex];
        shuffled[randomIndex] =
            temporaryValue;
    }
    return shuffled;
}
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
function getYesterday() {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const year = yesterday.getFullYear();
    const month = String(
        yesterday.getMonth() + 1
    ).padStart(2, "0");
    const day = String(
        yesterday.getDate()
    ).padStart(2, "0");

    return year + "-" + month + "-" + day;
}

function getAttempts() {
    const today = getToday();
    const attemptsDate =
        localStorage.getItem("englishAttemptsDate");

    if (attemptsDate !== today) {
        localStorage.setItem("englishAttempts", "3");
        localStorage.setItem("englishAttemptsDate", today);
        return 3;
    }

    const savedAttempts =
        localStorage.getItem("englishAttempts");

    if (savedAttempts === null) {
        localStorage.setItem("englishAttempts", "3");
        return 3;
    }

    return Number(savedAttempts);
}

function setAttempts(attempts) {
    const safeAttempts = Math.max(0, attempts);

    localStorage.setItem(
        "englishAttempts",
        String(safeAttempts)
    );

    localStorage.setItem(
        "englishAttemptsDate",
        getToday()
    );
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
    const quest =
        document.getElementById("englishQuest");
    const today =
        getToday();
    const completed =
        localStorage.getItem("englishCompleted");
    if (completed === today) {
        quest.innerHTML =
            "<p>✅ Quête déjà terminée aujourd’hui !</p>" +
            "<p>🔥 Reviens demain pour continuer ton streak.</p>";
        return;
    }
    const attempts =
        getAttempts();
    if (attempts <= 0) {
        quest.innerHTML =
            "<p>💀 Tu n’as plus d’essais aujourd’hui.</p>" +
            "<p>Reviens demain pour une nouvelle quête !</p>";
        return;
    }
    const question =
        englishWords[getDailyWordIndex()];
    const options = [
        {
            text: question.correctAnswer,
            isCorrect: true
        },
        ...question.wrongAnswers.map(function(answer) {
            return {
                text: answer,
                isCorrect: false
            };
        })
    ];
    const shuffledOptions =
        shuffleArray(options);
    localStorage.setItem(
        "englishDailyOptions",
        JSON.stringify(shuffledOptions)
    );
    let html = "";
    html += "<h3>⚔️ Défi du jour ⚔️</h3>";
    html +=
        "<p>Que signifie <strong>" +
        question.word +
        "</strong> ?</p>";
    shuffledOptions.forEach(
        function(option, index) {
            html +=
                '<button type="button" ' +
                'onclick="checkEnglishAnswer(' +
                index +
                ')">' +
                option.text +
                "</button><br><br>";
        }
    );
    quest.innerHTML = html;
}
// ====================================
// VÉRIFICATION
// ====================================
function checkEnglishAnswer(answerIndex) {
    const quest =
        document.getElementById("englishQuest");
    const today =
        getToday();
    const question =
        englishWords[getDailyWordIndex()];
    if (
        localStorage.getItem("englishCompleted")
        === today
    ) {
        quest.innerHTML =
            "<p>✅ Tu as déjà terminé la quête aujourd’hui.</p>";
        return;
    }
    const savedOptions =
        localStorage.getItem("englishDailyOptions");
    if (!savedOptions) {
        lancerEnglishQuest();
        return;
    }
    const options =
        JSON.parse(savedOptions);
    const selectedOption =
        options[answerIndex];
    if (!selectedOption) {
        lancerEnglishQuest();
        return;
    }
    if (selectedOption.isCorrect) {
        englishXP += 20;
        localStorage.setItem(
            "englishXP",
            String(englishXP)
        );
        const lastSuccess =
            localStorage.getItem("englishLastSuccess");
        if (lastSuccess === getYesterday()) {
            englishStreak += 1;
        } else if (lastSuccess !== today) {
            englishStreak = 1;
        }
        localStorage.setItem(
            "englishStreak",
            String(englishStreak)
        );
        localStorage.setItem(
            "englishLastSuccess",
            today
        );
        localStorage.setItem(
            "englishCompleted",
            today
        );
        const level =
            Math.floor(englishXP / 100) + 1;
        quest.innerHTML =
            "<h3>✅ Good job!</h3>" +
            "<p><strong>" +
            question.word +
            "</strong></p>" +
            "<p>La bonne réponse était :</p>" +
            "<p><strong>" +
            question.correctAnswer +
            "</strong></p>" +
            "<p>⭐ +20 XP</p>" +
            "<p>🔥 Streak : " +
            englishStreak +
            " jour(s)</p>" +
            "<p>🏆 Niveau " +
            level +
            "</p>" +
            "<p>Reviens demain pour ta prochaine quête !</p>";
        updateEnglishStats();
    } else {
        let attempts =
            getAttempts() - 1;
        setAttempts(attempts);
        if (attempts <= 0) {
            quest.innerHTML =
                "<h3>💀 Plus d’essais</h3>" +
                "<p>La bonne réponse était :</p>" +
                "<p><strong>" +
                question.correctAnswer +
                "</strong></p>" +
                "<p>Reviens demain pour une nouvelle quête.</p>";
        } else {
            quest.innerHTML =
                "<p>❌ Mauvaise réponse !</p>" +
                "<p>❤️ Il te reste " +
                attempts +
                " essai(s).</p>" +
                '<button type="button" ' +
                'onclick="lancerEnglishQuest()">' +
                "Réessayer" +
                "</button>";
        }
        updateEnglishStats();
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
// Vérifie le streak et réinitialise les essais du jour
updateStreak();
getAttempts();
updateEnglishStats();

// RESET
function resetEnglishQuest() {
    localStorage.removeItem("englishXP");
    localStorage.removeItem("englishStreak");
    localStorage.removeItem("englishLives");
    localStorage.removeItem("englishLastSuccess");
    localStorage.removeItem("englishCompleted");
    localStorage.removeItem("englishDailyOptions");
    localStorage.removeItem("englishAttempts");
    localStorage.removeItem("englishAttemptsDate");

    location.reload();
}

const floatingPhotoList = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg",
    "images/photo7.jpg",
    "images/photo8.jpg",
    "images/photo9.jpg",
    "images/photo10.jpg",
    "images/photo11.jpg",
    "images/photo12.jpg",
    "images/photo13.jpg",
    "images/photo14.jpg",
    "images/photo15.jpg",
    "images/photo16.jpg",
    "images/photo17.jpg",
    "images/photo18.jpg",
    "images/photo19.jpg",
    "images/photo20.jpg",
    "images/photo21.jpg",
    "images/photo22.jpg",
];


// ====================================
// REND LES PHOTOS DEPLACABLES
// ====================================

function rendrePhotoDeplacable(photo) {

    let dragging = false;

    let startX = 0;
    let startY = 0;

    let originalLeft = 0;
    let originalTop = 0;


    photo.addEventListener(
        "pointerdown",
        function(event) {

            event.preventDefault();

            dragging = true;

            photo.setPointerCapture(
                event.pointerId
            );

            const rect =
                photo.getBoundingClientRect();

            const parentRect =
                photo.parentElement.getBoundingClientRect();


            originalLeft =
                rect.left - parentRect.left;

            originalTop =
                rect.top - parentRect.top;


            startX =
                event.clientX;

            startY =
                event.clientY;


            // On transforme la position actuelle
            // en position fixe gauche/haut

            photo.style.left =
                originalLeft + "px";

            photo.style.top =
                originalTop + "px";

            photo.style.right =
                "auto";


            // Pause du flottement
            photo.style.animation =
                "none";


            // La photo passe devant les autres
            photo.style.zIndex =
                "100";


            photo.style.cursor =
                "grabbing";
        }
    );


    photo.addEventListener(
        "pointermove",
        function(event) {

            if (!dragging) {
                return;
            }


            const deltaX =
                event.clientX - startX;

            const deltaY =
                event.clientY - startY;


            let newLeft =
                originalLeft + deltaX;

            let newTop =
                originalTop + deltaY;


            // Empêche de faire disparaître
            // complètement la photo

            const parent =
                photo.parentElement;

            const maxLeft =
                parent.clientWidth -
                photo.offsetWidth;

            const maxTop =
                parent.clientHeight -
                photo.offsetHeight;


            newLeft =
                Math.max(
                    0,
                    Math.min(newLeft, maxLeft)
                );

            newTop =
                Math.max(
                    0,
                    Math.min(newTop, maxTop)
                );


            photo.style.left =
                newLeft + "px";

            photo.style.top =
                newTop + "px";
        }
    );


    function stopDrag(event) {

        if (!dragging) {
            return;
        }

        dragging = false;


        photo.style.zIndex =
            "";

        photo.style.cursor =
            "grab";


        try {

            photo.releasePointerCapture(
                event.pointerId
            );

        } catch (error) {

            // Rien à faire

        }


        // Le flottement reprend

        photo.style.animation =
            "flotter 3s ease-in-out infinite";
    }


    photo.addEventListener(
        "pointerup",
        stopDrag
    );


    photo.addEventListener(
        "pointercancel",
        stopDrag
    );
}


// ====================================
// AFFICHE 4 PHOTOS ALEATOIRES
// ====================================

function afficherPhotosAleatoires() {

    const container =
        document.getElementById(
            "floatingPhotos"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    // Mélange les photos
    // puis en sélectionne 4

    const photos =
        shuffleArray(
            floatingPhotoList
        ).slice(0, 4);


    // Emplacements de départ

    const positions = [

        {
            top: "18%",
            left: "1%"
        },

        {
            top: "35%",
            right: "1%"
        },

        {
            top: "55%",
            left: "1%"
        },

        {
            top: "72%",
            right: "1%"
        }

    ];


    photos.forEach(
        function(photo, index) {

            const img =
                document.createElement(
                    "img"
                );


            img.src =
                photo;

            img.className =
                "floating-photo";

            img.alt =
                "Souvenir";


            // Position initiale

            Object.assign(
                img.style,
                positions[index]
            );


            // Rotation aléatoire

            const rotation =
                Math.floor(
                    Math.random() * 21
                ) - 10;


            img.style.setProperty(
                "--rotation",
                rotation + "deg"
            );


            // Les photos ne flottent
            // pas exactement ensemble

            img.style.animationDelay =
                (index * 0.4) + "s";


            // Rend la photo déplaçable

            rendrePhotoDeplacable(
                img
            );


            // Ajoute la photo

            container.appendChild(
                img
            );
        }
    );
}


// ====================================
// LANCEMENT
// ====================================

afficherPhotosAleatoires();
