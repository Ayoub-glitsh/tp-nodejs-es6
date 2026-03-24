// ===============================
// TP Node.js - ES6 (VERSION CORRIGÉE)
// ===============================

// Solution universelle pour fetch
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// ===============================
// 1️⃣ Affichage simple
// ===============================

console.log("===== TP Node.js =====");
console.log("Bonjour");

// ===============================
// 2️⃣ Manipulation de tableau
// ===============================

const materials = ['Ordinateur HP', 'Ecran Tactile', 'SmartTV', 'Imprimante'];

console.log("\n--- Longueur des éléments (forEach) ---");
materials.forEach(item => {
    console.log(item + " => " + item.length);
});

console.log("\n--- Longueur avec map ---");
const lengths = materials.map(item => item.length);
console.log(lengths);

// ===============================
// 3️⃣ Fonction fléchée
// ===============================

const afficherMessage = () => {
    console.log("\nFonction fléchée exécutée !");
};

afficherMessage();

// ===============================
// 4️⃣ Asynchrone (non bloquant)
// ===============================

console.log("\n--- Test Asynchrone ---");

console.log("Début");

setTimeout(() => {
    console.log("Traitement asynchrone...");
}, 2000);

console.log("Fin");

// ===============================
// 5️⃣ API REST avec fetch
// ===============================

async function afficherPays() {
    try {
        console.log("\n--- Récupération des pays ---");

        const reponse = await fetch("https://restcountries.com/v3.1/all");
        const pays = await reponse.json();

        console.log("\nNombre de pays :", pays.length);

        console.log("\n--- Liste des pays ---");
        pays.slice(0, 10).forEach(p => {
            console.log(p.name.common);
        });

    } catch (error) {
        console.log("Erreur :", error);
    }
}

afficherPays();

// ===============================
// 6️⃣ Version avancée (bonus)
// ===============================

async function afficherPaysAfricains() {
    try {
        console.log("\n--- Pays Africains ---");

        const reponse = await fetch("https://restcountries.com/v3.1/region/africa");
        const pays = await reponse.json();

        pays.forEach(p => {
            console.log(p.name.common + " - Capitale: " + (p.capital ? p.capital[0] : "N/A"));
        });

    } catch (error) {
        console.log("Erreur :", error);
    }
}

afficherPaysAfricains();