const result = document.getElementById("result");

// Ajouter un caractère au champ de saisie
function append(value) {
    result.value += value;
}

// Effacer tout le champ de saisie
function clearScreen() {
    result.value = "";
}

// Supprimer le dernier caractère
function deleteLast() {
    result.value = result.value.slice(0, -1);
}

// Effectuer le calcul
function calculate() {
    try {
        result.value = eval(result.value); // Attention : `eval` doit être utilisé avec précaution
    } catch (error) {
        result.value = "Erreur";
    }
}
