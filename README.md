# 📦 Gestion Produits - Cloud Native App

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

Une application complète de gestion de produits démontrant les principes de l'architecture cloud-native : conteneurisation, orchestration et séparation des préoccupations.

---

## 🚀 Fonctionnalités

- **Backend** : API REST performante avec Node.js et Express.
- **Frontend** : Interface utilisateur réactive et moderne avec React et Vite.
- **Base de données** : Stockage persistant NoSQL avec MongoDB.
- **Docker** : Conteneurisation complète pour un environnement de développement reproductible.
- **Orchestration** : Déploiement simplifié avec Docker Compose.

---

## 🛠️ Stack Technique

| Technologie | Usage |
| :--- | :--- |
| **Node.js** | Environnement d'exécution JavaScript côté serveur |
| **Express** | Framework web pour construire l'API |
| **MongoDB** | Base de données NoSQL pour la persistence |
| **React** | Bibliothèque frontend pour l'interface utilisateur |
| **Vite** | Outil de build ultra-rapide pour le frontend |
| **Docker** | Plateforme de conteneurisation |
| **Docker Compose** | Outil de définition et de lancement d'applications multi-conteneurs |

---

## 🏃 Lancement Rapide

Assurez-vous d'avoir [Docker](https://www.docker.com/) installé sur votre machine.

```bash
# Cloner le projet (si applicable)
# git clone <repository-url>

# Accéder au dossier
cd gestion-produits

# Lancer l'application complète
docker-compose up --build
```

- **Frontend** : [http://localhost:5173](http://localhost:5173)
- **API Backend** : [http://localhost:3000/produits](http://localhost:3000/produits)

---

## 📁 Structure du Projet

```text
gestion-produits/
├── backend/          # Serveur Node.js & Dockerfile
├── frontend/         # Application React & Dockerfile
└── docker-compose.yml # Orchestration des services
```

---

## 📝 Licence

Ce projet est réalisé dans le cadre d'un TP pédagogique.
