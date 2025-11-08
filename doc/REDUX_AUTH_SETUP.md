# Redux Toolkit & RTK Query - Configuration Authentification

## 📦 Installation

```bash
npm install @reduxjs/toolkit react-redux jsonwebtoken
npm install --save-dev @types/jsonwebtoken
```

## 🏗️ Structure

### Redux Store

```
src/lib/redux/
├── store.ts                 # Configuration du store Redux
├── hooks.ts                 # Hooks typés (useAppDispatch, useAppSelector)
├── provider.tsx             # Provider Redux pour Next.js
├── features/
│   └── auth/
│       └── authSlice.ts     # Slice d'état pour l'authentification
└── services/
    └── authApi.ts           # API slice avec RTK Query
```

### Composants Réutilisables

```
src/components/forms/
├── FormInput.tsx            # Input avec label, icon et gestion d'erreurs
├── FormCheckbox.tsx         # Checkbox avec label personnalisable
├── FormButton.tsx           # Bouton avec loading state et variants
├── FormAlert.tsx            # Alertes (success, error, warning, info)
└── index.ts                 # Exports
```

### Routes API

```
src/app/api/auth/
├── login/route.ts           # POST /api/auth/login
├── register/route.ts        # POST /api/auth/register
├── logout/route.ts          # POST /api/auth/logout
└── forgot-password/route.ts # POST /api/auth/forgot-password
```

### Pages d'Authentification

```
src/app/(site)/
├── login/page.tsx           # Page de connexion
├── register/page.tsx        # Page d'inscription
└── forgot-password/page.tsx # Page mot de passe oublié
```

## 🔑 Fonctionnalités

### AuthAPI (RTK Query)

- **Login** : Authentifie l'utilisateur et génère les tokens
- **Register** : Crée un nouveau compte client
- **Logout** : Déconnecte l'utilisateur et invalide la session
- **Forgot Password** : Génère un lien de réinitialisation
- **Get Current User** : Récupère les informations de l'utilisateur connecté
- **Refresh Token** : Renouvelle les tokens d'authentification

### AuthSlice (State Management)

- Gestion de l'état utilisateur (user, token, refreshToken)
- Persistance dans localStorage
- Sélecteurs typés :
  - `selectCurrentUser`
  - `selectIsAuthenticated`
  - `selectAuthToken`

### Composants Formulaires

#### FormInput
```tsx
<FormInput
  label="Email"
  name="email"
  type="email"
  value={email}
  onChange={handleChange}
  error={errors.email}
  icon={<EmailIcon />}
  required
/>
```

#### FormButton
```tsx
<FormButton
  type="submit"
  isLoading={isLoading}
  variant="primary" // "primary" | "secondary" | "danger"
  fullWidth
>
  Se connecter
</FormButton>
```

#### FormAlert
```tsx
<FormAlert
  type="error" // "success" | "error" | "warning" | "info"
  message="Email ou mot de passe incorrect"
  onClose={() => setError(null)}
/>
```

## 🔐 Sécurité

### JWT Configuration

Variables d'environnement dans `.env.local` :

```env
JWT_SECRET=your-super-secret-jwt-key
JWT_REFRESH_SECRET=your-super-secret-refresh-key
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
```

### Session Management

- Stockage des sessions en base de données (MongoDB)
- Tokens associés aux sessions
- Détection de l'appareil (desktop, mobile, tablet)
- Tracking de l'IP et User-Agent
- Expiration automatique des sessions (TTL index)

### Middleware de Protection

```typescript
// À implémenter
import { verifyAccessToken } from "@/lib/jwt";

export function withAuth(handler) {
  return async (req) => {
    const token = req.headers.get("authorization")?.replace("Bearer ", "");
    const payload = verifyAccessToken(token);

    if (!payload) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    req.user = payload;
    return handler(req);
  };
}
```

## 📝 Usage

### Dans une page

```tsx
"use client";

import { useLoginMutation } from "@/lib/redux/services/authApi";
import { useAppSelector } from "@/lib/redux/hooks";
import { selectCurrentUser } from "@/lib/redux/features/auth/authSlice";

export default function MyPage() {
  const [login, { isLoading }] = useLoginMutation();
  const user = useAppSelector(selectCurrentUser);

  const handleLogin = async () => {
    try {
      await login({ email, password }).unwrap();
      // Success - user is now in Redux state
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      {user ? `Welcome ${user.email}` : "Not logged in"}
    </div>
  );
}
```

### Récupération de l'utilisateur au chargement

```tsx
// Dans un composant layout ou provider
import { useGetCurrentUserQuery } from "@/lib/redux/services/authApi";

export function AuthProvider({ children }) {
  const { data, isLoading } = useGetCurrentUserQuery();

  if (isLoading) return <Loading />;

  return <>{children}</>;
}
```

## 🎨 Design System

### Couleurs des Gradients

- **Login** : `from-blue-600 to-cyan-500`
- **Register** : `from-purple-600 to-pink-500`
- **Forgot Password** : `from-orange-600 to-yellow-500`

### Responsive

- Mobile-first design
- Grid responsive pour les champs (password / confirm password)
- Padding adaptatif sur mobile

## ✅ Validation

### Côté Client (React)

- Validation en temps réel
- Messages d'erreur par champ
- Gestion des états (loading, error, success)

### Côté Serveur (API Routes)

- Validation des données entrantes
- Vérification de l'existence des utilisateurs
- Hashing des mots de passe (bcryptjs via hook Mongoose)
- Messages d'erreur détaillés

## 🔄 Flux d'Authentification

1. **Utilisateur soumet le formulaire**
2. **RTK Query appelle l'API** (`/api/auth/login`)
3. **API vérifie les credentials** en base de données
4. **Génération des tokens JWT** (access + refresh)
5. **Création d'une session** en base de données
6. **Retour des données** à RTK Query
7. **AuthSlice met à jour l'état** Redux
8. **Persistance dans localStorage**
9. **Redirection** selon le rôle utilisateur

## 📊 Modèles MongoDB

### User
- email, password (hashé), givenName
- role (référence à Role)
- emailVerifiedAt, lastLoginAt
- deletedAt (soft delete)

### Role
- name, slug (dev | admin | staff | client)
- level (100, 80, 50, 10)
- permissions (tableau d'ObjectId)
- isSystem (empêche la suppression)

### Session
- userId, token, refreshToken
- userAgent, ipAddress, deviceType
- expiresAt, refreshExpiresAt
- isActive, lastActivityAt

### Permission
- name, slug
- resource, action
- description

## 🚀 Prochaines Étapes

1. Implémenter le système de reset password complet
2. Ajouter l'envoi d'emails (nodemailer ou service externe)
3. Créer un middleware de protection des routes
4. Implémenter la vérification d'email
5. Ajouter OAuth (Google, GitHub)
6. Créer des guards pour les rôles
7. Implémenter le refresh automatique des tokens
8. Ajouter des tests unitaires et d'intégration

## 📚 Documentation

- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Mongoose](https://mongoosejs.com/)
