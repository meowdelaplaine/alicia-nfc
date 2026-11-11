function checkAnswer(correct) {
 
const result = document.getElementById("quiz-result");
 
if (correct) {
result.innerHTML = "✅ Bonne réponse ! Resilient = Résilient.";
result.style.color = "#2ca66f";
} else {
result.innerHTML = "❌ Presque ! Essaie encore.";
result.style.color = "#e05252";
}
}
