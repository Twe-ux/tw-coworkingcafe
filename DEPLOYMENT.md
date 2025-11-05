# Déploiement sur Northflank

Ce document explique comment déployer l'application Next.js sur Northflank.

## 🐋 Configuration Docker

Le projet inclut un `Dockerfile` optimisé pour Next.js 14 avec les fonctionnalités suivantes :

- **Multi-stage build** pour une image optimisée
- **Résolution du problème Git safe.directory** (erreur courante sur Northflank)
- **Output standalone** pour un déploiement léger
- **Node.js 20 Alpine** pour une image minimale
- **Sécurité** : utilisateur non-root (nextjs)

## 🚀 Déploiement sur Northflank

### Étape 1 : Configuration du projet

1. Connectez-vous à [Northflank](https://northflank.com)
2. Créez un nouveau service :
   - Type : **Combined Service** (Build + Deployment)
   - Source : Votre repository Git
   - Branche : `claude/analyze-bootstrap-project-011CUpbknMoTF3R2irJT9WKu` (ou `main` après merge)

### Étape 2 : Configuration Build

Dans les paramètres de build :

- **Build Method** : Dockerfile
- **Dockerfile Path** : `Dockerfile` (racine du projet)
- **Context** : `.` (racine)
- **Build Arguments** : Aucun requis

### Étape 3 : Configuration Runtime

- **Port** : `3000`
- **Health Check Path** : `/` (optionnel)
- **Resources** :
  - CPU : 0.2 vCPU minimum
  - RAM : 512 MB minimum (1GB recommandé)

### Étape 4 : Variables d'environnement (si nécessaire)

Si vous avez des variables d'environnement, ajoutez-les dans Northflank :

```bash
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
# Ajoutez vos propres variables ici
```

### Étape 5 : Déploiement

1. Cliquez sur **Deploy**
2. Northflank va :
   - Cloner le repository
   - Construire l'image Docker
   - Déployer le container
   - Exposer l'application sur une URL

## 🔧 Résolution des problèmes

### Erreur "fatal: detected dubious ownership in repository"

✅ **Résolu** : Le Dockerfile inclut la configuration Git safe.directory :

```dockerfile
RUN git config --global --add safe.directory /app
RUN git config --global --add safe.directory /workspace
RUN git config --global --add safe.directory '*'
```

### Build échoue

1. Vérifiez que `package-lock.json` est bien commité
2. Vérifiez que `next.config.mjs` contient `output: 'standalone'`
3. Vérifiez les logs de build dans Northflank

### Application ne démarre pas

1. Vérifiez que le port 3000 est bien configuré
2. Vérifiez les logs du container
3. Assurez-vous que les resources (CPU/RAM) sont suffisantes

## 📊 Performance

L'application est optimisée pour un déploiement léger :

- **Taille de l'image** : ~150-200 MB (Alpine + standalone)
- **Temps de démarrage** : < 5 secondes
- **Routes** : 13 pages statiques pré-rendues
- **Bundle JS** : ~87 KB partagé

## 🔄 CI/CD

Pour automatiser les déploiements :

1. Connectez Northflank à votre repository Git
2. Activez **Auto Deploy** sur la branche souhaitée
3. Chaque push déclenchera automatiquement un redéploiement

## 📝 Notes importantes

- ✅ TypeScript compilé pendant le build
- ✅ Tailwind CSS optimisé et purgé
- ✅ Images Next.js optimisées
- ✅ Pas de dépendances Bootstrap/SCSS
- ✅ Build de production testé et validé

## 🆘 Support

Si vous rencontrez des problèmes :

1. Consultez les logs Northflank
2. Vérifiez la [documentation Northflank](https://northflank.com/docs)
3. Testez le build localement avec Docker :

```bash
# Build l'image
docker build -t digiv-app .

# Run le container
docker run -p 3000:3000 digiv-app

# Testez sur http://localhost:3000
```

---

**Dernière mise à jour** : 2025-11-05
**Version Next.js** : 14.2.17
**Version Node.js** : 20 (Alpine)
