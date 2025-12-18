# Skypay – Account Service

## 📌 Description

Ce projet implémente un service de gestion de compte bancaire simple en **TypeScript**, permettant :

- Dépôt d’argent (`deposit`)
- Retrait d’argent (`withdraw`)
- Impression de relevé (`printStatement`)

Il inclut également une suite de tests unitaires avec **Jest** pour valider les comportements attendus.

## 🚀 Installation

1. Cloner le repo :
   git clone <repo-url>
   cd skypay

2. Installer les dépendances :
   npm install

## ▶️ Utilisation

Lancer le projet en mode développement :
npm run dev

Cela exécutera la classe `Account` et affichera un relevé de transactions en console.

## 🧪 Tests

Les tests sont écrits avec **Jest** et configurés pour TypeScript via **ts-jest**.

Exécuter les tests :
npm test

### Exemple de tests inclus :

- ✅ Retrait supérieur au solde → erreur `Insufficient funds for withdrawal.`
- ✅ Dépôt négatif → erreur `Amount must be greater than zero.`
- ✅ Historique des transactions → retour d’un tableau structuré avec date, montant et solde.

## 📂 Structure du projet

skypay/
├── Account.class.ts # Implémentation de la classe Account
├── Account.test.ts # Tests unitaires Jest
├── package.json # Dépendances et scripts
└── README.md # Documentation

## ⚙️ Technologies utilisées

- **TypeScript** – typage statique et robustesse
- **Node.js** – environnement d’exécution
- **Jest** – framework de tests
- **ts-jest** – intégration Jest + TypeScript

## ✨ Notes

- Les dates des transactions sont formatées en `DD/MM/YYYY` (locale `en-GB`).
- Les erreurs sont gérées via `try/catch` pour garantir la robustesse.
- Le relevé est affiché en console via `console.table` et retourné sous forme de tableau.
