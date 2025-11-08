# PRD Updated - Coworking Café Dashboard & Blog Management

**Version:** 2.0 (Updated)
**Date de création:** 2025-11-07
**Dernière mise à jour:** 2025-11-07
**Statut:** En cours (65% complété)

---

## 🎯 ÉTAT ACTUEL DU PROJET

### Avancement Global: **65%** ✅

**Phase 1 (Infrastructure & Auth):** ████████████████████░ **95% COMPLÉTÉ**
**Phase 2 (Blog CRUD):** █████░░░░░░░░░░░░░░░░ **25% EN COURS**
**Phase 3 (Media & Permissions):** ░░░░░░░░░░░░░░░░░░░░░ **0% NON COMMENCÉ**
**Phase 4 (Features Avancées):** ░░░░░░░░░░░░░░░░░░░░░ **0% NON COMMENCÉ**

### 📊 Résumé Exécutif

Le projet a fait d'**énormes progrès**. Les fondations sont **solides** avec une architecture professionnelle. L'authentification est complète, les modèles MongoDB sont excellents, et les dashboards ont des UI magnifiques.

**Ce qui manque:** Connexion des UI aux données réelles, sécurisation des routes, et implémentation du CRUD blog.

---

## ✅ CE QUI EST FAIT

### Phase 1: Infrastructure & Auth (95% ✅)

#### 1.1 MongoDB Setup ✅ COMPLÉTÉ
- [x] Architecture modulaire (document/hooks/methods/virtuals)
- [x] 10 modèles créés: User, Role, Permission, Session, Article, Category, Tag, Comment, Media, ArticleRevision
- [x] Indexes définis
- [x] TypeScript strict
- [x] lib/mongodb.ts avec connection pooling
- [x] Hot reload safe

**Fichiers:**
- `src/models/*` (10 dossiers avec architecture complète)
- `src/lib/mongodb.ts`

---

#### 1.2 Authentication System ✅ COMPLÉTÉ
- [x] Redux Toolkit + RTK Query configuré
- [x] AuthSlice avec localStorage persistence
- [x] 6 API routes auth complètes:
  - [x] POST /api/auth/login
  - [x] POST /api/auth/register
  - [x] POST /api/auth/logout
  - [x] GET /api/auth/me
  - [x] POST /api/auth/refresh
  - [x] POST /api/auth/forgot-password
- [x] JWT tokens (access + refresh)
- [x] Session tracking en DB
- [x] Password hashing (bcrypt)
- [x] Device tracking (userAgent, IP)

**Fichiers:**
- `src/lib/redux/*`
- `src/app/api/auth/*`
- `src/lib/jwt.ts`

---

#### 1.3 Auth Pages ✅ COMPLÉTÉ
- [x] Page Login avec gradient blue/cyan
- [x] Page Register avec gradient purple/pink
- [x] Page Forgot Password avec gradient orange/yellow
- [x] Responsive mobile-first
- [x] Loading states
- [x] Error handling
- [x] Form validation

**Fichiers:**
- `src/app/(site)/(auth)/login/page.tsx`
- `src/app/(site)/register/page.tsx`
- `src/app/(site)/forgot-password/page.tsx`

---

#### 1.4 Auth Components ✅ COMPLÉTÉ
- [x] FormInput (avec icon et erreurs)
- [x] FormButton (avec loading state)
- [x] FormCheckbox (stylisé)
- [x] FormAlert (success/error/warning/info)
- [x] AuthGuard (protection de routes)
- [x] TokenRefreshHandler (auto-refresh tokens)

**Fichiers:**
- `src/components/forms/*`
- `src/components/auth/*`

---

#### 1.5 Dashboard Layouts ✅ COMPLÉTÉ (UI seulement)

**Admin Layout:**
- [x] Sidebar responsive avec navigation
- [x] Mobile menu (hamburger)
- [x] Active state highlighting
- [x] Icons Lucide React
- [x] User section en bas
- [x] Logout button (UI seulement)

**Pages Admin Créées:**
- [x] `/admin` - Dashboard home (stats hardcodées)
- [x] `/admin/blog` - Overview blog
- [x] `/admin/blog/articles` - Placeholder
- [x] `/admin/blog/categories` - Placeholder
- [x] `/admin/blog/tags` - Placeholder
- [x] `/admin/comments` - Placeholder
- [x] `/admin/media` - Placeholder
- [x] `/admin/users` - Placeholder
- [x] `/admin/analytics` - Placeholder
- [x] `/admin/settings` - Placeholder

**Client Layout:**
- [x] `/dashboard` - Basic page
- [x] `/dashboard/profile` - Placeholder
- [x] `/dashboard/settings` - Placeholder

**Fichiers:**
- `src/app/(admin)/layout.tsx`
- `src/app/(admin)/**/*.tsx`
- `src/app/(site)/layout.tsx`
- `src/app/(site)/dashboard/**/*.tsx`

---

#### 1.6 Seed Scripts ✅ COMPLÉTÉ
- [x] seedDatabase.ts avec CLI
- [x] 50+ permissions définies
- [x] 4 rôles (dev, admin, staff, client)
- [x] Script npm: `npm run seed`

**Fichiers:**
- `src/lib/seed/seedDatabase.ts`
- `src/lib/seed/permissions.ts`

---

#### 1.7 Documentation ✅ COMPLÉTÉ
- [x] REDUX_AUTH_SETUP.md (285 lignes)
- [x] USAGE_EXAMPLES.md (363 lignes)
- [x] .env.example avec tous les variables

**Fichiers:**
- `REDUX_AUTH_SETUP.md`
- `USAGE_EXAMPLES.md`
- `.env.example`

---

#### 1.8 Package Dependencies ✅ COMPLÉTÉ
- [x] @reduxjs/toolkit ^2.10.1
- [x] react-redux ^9.2.0
- [x] mongoose ^8.19.3
- [x] bcryptjs ^3.0.3
- [x] jsonwebtoken ^9.0.2
- [x] zod ^4.1.12
- [x] slugify ^1.6.6
- [x] date-fns ^4.1.0
- [x] @casl/ability ^6.7.3
- [x] @casl/react ^5.0.0
- [x] next-auth ^4.24.13

---

## ❌ CE QUI MANQUE (Priorités)

### 🔴 PRIORITÉ 1 - CRITIQUE (À faire IMMÉDIATEMENT)

#### Configuration & Sécurité

**Task 1.1: Configuration Environnement** ⏱️ 15 min
- [ ] Copier `.env.example` vers `.env.local`
- [ ] Ajouter MongoDB Atlas URI
- [ ] Générer JWT secrets avec `openssl rand -base64 32`
- [ ] Configurer APP_URL

**Task 1.2: Seed Database** ⏱️ 5 min
- [ ] Lancer `npm run seed`
- [ ] Vérifier création des rôles
- [ ] Vérifier création des permissions
- [ ] Créer un compte admin de test

**Task 1.3: Middleware Protection** ⏱️ 2 heures
- [ ] Créer `src/middleware.ts`
- [ ] Protéger routes `/admin/*`
- [ ] Protéger routes `/dashboard/*`
- [ ] Vérifier JWT token
- [ ] Redirect vers `/login` si non authentifié

```typescript
// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyAccessToken } from '@/lib/jwt';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value ||
                request.headers.get('authorization')?.replace('Bearer ', '');

  const payload = verifyAccessToken(token);

  if (!payload) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Check roles for admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const allowedRoles = ['admin', 'dev', 'staff'];
    if (!allowedRoles.includes(payload.role)) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*'],
};
```

**Task 1.4: AuthGuard Integration** ⏱️ 1 heure
- [ ] Wrapper admin layout avec AuthGuard
- [ ] Wrapper client dashboard avec AuthGuard
- [ ] Tester redirection si non auth
- [ ] Tester restriction par rôle

```typescript
// src/app/(admin)/layout.tsx
import { AuthGuard } from "@/components/auth";

export default function AdminLayout({ children }) {
  return (
    <AuthGuard requireAuth allowedRoles={["admin", "dev", "staff"]}>
      {/* existing layout code */}
    </AuthGuard>
  );
}
```

**Task 1.5: Logout Functionality** ⏱️ 30 min
- [ ] Intégrer `useLogoutMutation` dans sidebar
- [ ] Clear localStorage on logout
- [ ] Redirect vers `/login`
- [ ] Invalider session en DB

```typescript
// Dans AdminLayout
import { useLogoutMutation } from "@/lib/redux/services/authApi";
import { useRouter } from "next/navigation";

const [logout, { isLoading }] = useLogoutMutation();
const router = useRouter();

const handleLogout = async () => {
  await logout().unwrap();
  router.push('/login');
};
```

**Task 1.6: Token Refresh Integration** ⏱️ 30 min
- [ ] Ajouter TokenRefreshHandler dans root layout
- [ ] Test auto-refresh quand token expire

---

### 🟡 PRIORITÉ 2 - HAUTE (Semaine 1-2)

#### Blog API Routes

**Task 2.1: API Articles** ⏱️ 3 jours
- [ ] Create `src/app/api/blog/route.ts`
  - [ ] GET - List articles avec pagination
  - [ ] POST - Create article
  - [ ] Query params: page, limit, status, category, search
  - [ ] Validation Zod
  - [ ] Permission check (blog.create)
  - [ ] Slug auto-generation

- [ ] Create `src/app/api/blog/[id]/route.ts`
  - [ ] GET - Get single article
  - [ ] PUT - Update article
  - [ ] DELETE - Delete article (soft delete)
  - [ ] Permission checks (blog.edit-own, blog.edit-all, blog.delete-own, blog.delete-all)
  - [ ] Populate author, category, tags

**Task 2.2: API Categories** ⏱️ 1 jour
- [ ] Create `src/app/api/categories/route.ts`
  - [ ] GET - List categories
  - [ ] POST - Create category
  - [ ] Permission check (categories.create)

- [ ] Create `src/app/api/categories/[id]/route.ts`
  - [ ] GET, PUT, DELETE
  - [ ] Cascade handling (articles count)

**Task 2.3: API Tags** ⏱️ 1 jour
- [ ] Create `src/app/api/tags/route.ts`
- [ ] Create `src/app/api/tags/[id]/route.ts`
- [ ] Similar structure to categories

**Task 2.4: Validation Schemas** ⏱️ 2 heures
- [ ] Create `src/utils/validation/blog.ts`
- [ ] Article schema (title, content, excerpt, category, tags, status)
- [ ] Category schema (name, slug, description, color)
- [ ] Tag schema (name, slug, color)

---

#### Blog UI Management

**Task 2.5: Install shadcn/ui Components** ⏱️ 1 heure
```bash
npx shadcn@latest add table
npx shadcn@latest add dialog
npx shadcn@latest add form
npx shadcn@latest add select
npx shadcn@latest add textarea
npx shadcn@latest add badge
npx shadcn@latest add toast
npx shadcn@latest add dropdown-menu
npx shadcn@latest add tabs
npx shadcn@latest add switch
npx shadcn@latest add calendar
```

**Task 2.6: Articles List Page** ⏱️ 2 jours
- [ ] Create `src/app/(admin)/admin/blog/articles/page.tsx`
- [ ] Fetch articles from API
- [ ] Data table avec shadcn/ui table
- [ ] Columns: Title, Author, Category, Status, Date, Actions
- [ ] Search input
- [ ] Status filter (draft/published)
- [ ] Pagination
- [ ] Row actions: Edit, Delete, View
- [ ] Delete confirmation dialog
- [ ] "New Article" button

**Task 2.7: Rich Text Editor (Tiptap)** ⏱️ 3 jours
```bash
npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-image @tiptap/extension-link
```

- [ ] Create `src/components/blog/editor/blog-editor.tsx`
- [ ] Create `src/components/blog/editor/menu-bar.tsx`
- [ ] Features:
  - [ ] Bold, Italic, Underline, Strike
  - [ ] Headings (H1-H6)
  - [ ] Lists (bullet, numbered)
  - [ ] Links
  - [ ] Images (with upload)
  - [ ] Code blocks
  - [ ] Blockquotes
- [ ] Toolbar styling
- [ ] Preview mode

**Task 2.8: Create Article Form** ⏱️ 3 jours
- [ ] Create `src/app/(admin)/admin/blog/new/page.tsx`
- [ ] Create `src/components/blog/article-form.tsx`
- [ ] Form fields:
  - [ ] Title (input)
  - [ ] Slug (auto-generated, editable)
  - [ ] Excerpt (textarea)
  - [ ] Content (Tiptap editor)
  - [ ] Featured Image (upload)
  - [ ] Category (select)
  - [ ] Tags (multi-select)
  - [ ] Meta Title (input)
  - [ ] Meta Description (textarea)
  - [ ] Status (select: draft/published)
- [ ] Buttons:
  - [ ] Save Draft
  - [ ] Publish
  - [ ] Preview
- [ ] Form validation avec Zod
- [ ] API integration

**Task 2.9: Edit Article Page** ⏱️ 1 jour
- [ ] Create `src/app/(admin)/admin/blog/[id]/edit/page.tsx`
- [ ] Fetch article data
- [ ] Reuse ArticleForm component
- [ ] Pre-fill form with existing data
- [ ] Update API call

**Task 2.10: Categories Management** ⏱️ 2 jours
- [ ] Create `src/app/(admin)/admin/blog/categories/page.tsx`
- [ ] Table list
- [ ] Create dialog (modal form)
- [ ] Edit dialog
- [ ] Delete confirmation
- [ ] Color picker

**Task 2.11: Tags Management** ⏱️ 1 jour
- [ ] Similar to categories
- [ ] Create `src/app/(admin)/admin/blog/tags/page.tsx`

---

#### Public Blog Integration

**Task 2.12: Dynamic Blog List** ⏱️ 1 jour
- [ ] Update `src/app/(site)/blog/page.tsx`
- [ ] Fetch from API instead of static data
- [ ] Pagination
- [ ] Filter by category
- [ ] Search

**Task 2.13: Dynamic Blog Detail** ⏱️ 2 jours
- [ ] Create `src/app/(site)/blog/[slug]/page.tsx`
- [ ] Fetch article by slug
- [ ] Render rich text content
- [ ] Display metadata
- [ ] Social share buttons
- [ ] Related articles
- [ ] generateStaticParams for SSG
- [ ] generateMetadata for SEO

---

### 🟢 PRIORITÉ 3 - MOYENNE (Semaine 3-4)

#### Media Library

**Task 3.1: Choose Storage Provider** ⏱️ 1 heure
- [ ] Decision: Uploadthing vs Cloudinary
- [ ] Setup account
- [ ] Get API keys
- [ ] Add to .env.local

**Task 3.2: Media Upload API** ⏱️ 2 jours
```bash
# Option A
npm install uploadthing @uploadthing/react

# Option B
npm install cloudinary next-cloudinary
```

- [ ] Create `src/app/api/media/upload/route.ts`
- [ ] Image upload logic
- [ ] Image optimization
- [ ] Thumbnail generation
- [ ] Store metadata in Media model

**Task 3.3: Media Library UI** ⏱️ 3 jours
- [ ] Create `src/app/(admin)/admin/media/page.tsx`
- [ ] Create `src/components/media/media-library.tsx`
- [ ] Create `src/components/media/media-upload.tsx`
- [ ] Drag & drop upload
- [ ] Grid view
- [ ] Search/filter
- [ ] Delete media
- [ ] Media details modal

**Task 3.4: Media Picker Component** ⏱️ 2 jours
- [ ] Create `src/components/media/media-picker.tsx`
- [ ] Dialog with media library
- [ ] Select image
- [ ] Integrate in Article Form (featured image)
- [ ] Integrate in Tiptap Editor (insert image)

---

#### Permissions System

**Task 3.5: Permissions Helper** ⏱️ 2 jours
- [ ] Create `src/lib/permissions.ts`
- [ ] Implement CASL ability
- [ ] `can(user, action, resource)` helper
- [ ] Permission checker hooks

**Task 3.6: API Permission Checks** ⏱️ 2 jours
- [ ] Add permission middleware
- [ ] Check in all API routes
- [ ] Error responses (403 Forbidden)

**Task 3.7: UI Permission Checks** ⏱️ 1 jour
- [ ] Hide/show UI elements based on permissions
- [ ] Disable buttons if no permission
- [ ] Role-based navigation items

---

#### Client Dashboard

**Task 3.8: Client Blog Management** ⏱️ 2 jours
- [ ] Filter articles to show only user's articles
- [ ] Create article (save as draft only)
- [ ] Edit own articles
- [ ] Request review status
- [ ] Can't publish (need staff approval)

---

### 🔵 PRIORITÉ 4 - BASSE (Semaine 5+)

#### Comments System
- Comments CRUD
- Moderation (approve/reject/spam)
- Display on public blog
- Nested replies

#### Article Revisions
- Track changes
- View history
- Restore previous version

#### Analytics
- View count tracking
- Popular articles
- User activity
- Charts (recharts)

#### User Management
- List users
- Edit roles
- Activate/deactivate
- Activity log

---

## 📅 PLANNING RÉVISÉ

### Semaine 1: Sécurité & Configuration
```
Lundi    : Configuration .env + Seed + Middleware (Priorité 1)
Mardi    : AuthGuard + Logout + Tests (Priorité 1)
Mercredi : Blog API - Articles (Task 2.1 start)
Jeudi    : Blog API - Articles (Task 2.1 finish)
Vendredi : Blog API - Categories & Tags (Task 2.2, 2.3)
```

### Semaine 2: Blog UI
```
Lundi    : shadcn/ui install + Articles List (Task 2.5, 2.6)
Mardi    : Articles List finish + Start Tiptap (Task 2.7)
Mercredi : Tiptap Editor (Task 2.7)
Jeudi    : Create Article Form (Task 2.8)
Vendredi : Edit + Categories/Tags UI (Task 2.9, 2.10, 2.11)
```

### Semaine 3: Public Blog & Media
```
Lundi    : Dynamic Blog List (Task 2.12)
Mardi    : Dynamic Blog Detail + SEO (Task 2.13)
Mercredi : Media Upload API (Task 3.1, 3.2)
Jeudi    : Media Library UI (Task 3.3)
Vendredi : Media Picker (Task 3.4)
```

### Semaine 4: Permissions & Polish
```
Lundi    : Permissions System (Task 3.5, 3.6, 3.7)
Mardi    : Client Dashboard (Task 3.8)
Mercredi : Testing & Bug Fixes
Jeudi    : Polish UI/UX
Vendredi : Documentation & Deployment
```

---

## 📋 CHECKLIST DE LANCEMENT

### Avant de coder
- [ ] MongoDB Atlas configuré
- [ ] .env.local créé et rempli
- [ ] Database seedée
- [ ] Compte admin de test créé
- [ ] Git branch créée

### Avant de déployer
- [ ] Tests end-to-end
- [ ] Middleware protection active
- [ ] AuthGuard appliqué partout
- [ ] Toutes les API routes testées
- [ ] UI/UX validée
- [ ] SEO metadata configurée
- [ ] Error handling en place
- [ ] Loading states partout
- [ ] Toast notifications
- [ ] Responsive testé (mobile, tablet, desktop)
- [ ] Lighthouse score > 85
- [ ] Variables d'environnement production
- [ ] Documentation à jour

---

## 🎯 OBJECTIFS SMART

### Sprint 1 (Semaine 1)
**Objectif:** Sécuriser l'application et créer les API blog
**Mesurable:**
- Middleware actif et testé
- 3 API routes blog fonctionnelles
- 100% des routes protégées
**Réalisable:** Oui (5 jours)
**Pertinent:** Critique pour la sécurité
**Temporel:** Vendredi soir

### Sprint 2 (Semaine 2)
**Objectif:** Interface complète de gestion du blog
**Mesurable:**
- Créer/Éditer/Supprimer des articles
- Éditeur Tiptap fonctionnel
- Gestion catégories/tags
**Réalisable:** Oui (5 jours)
**Pertinent:** Core feature
**Temporel:** Vendredi soir

### Sprint 3 (Semaine 3)
**Objectif:** Blog public dynamique + Media library
**Mesurable:**
- Pages blog utilisent l'API
- Upload images fonctionnel
- SEO optimisé
**Réalisable:** Oui (5 jours)
**Pertinent:** User-facing features
**Temporel:** Vendredi soir

### Sprint 4 (Semaine 4)
**Objectif:** Permissions + Polish + Launch
**Mesurable:**
- Permissions fines-grained actives
- 0 bugs critiques
- Prêt pour production
**Réalisable:** Oui (5 jours)
**Pertinent:** Production-ready
**Temporel:** Vendredi soir

---

## 📊 MÉTRIQUES DE SUCCÈS

### Techniques
- ✅ Lighthouse Score: > 85
- ✅ First Contentful Paint: < 1.5s
- ✅ Time to Interactive: < 3s
- ✅ Bundle Size: < 300KB (gzipped)
- ✅ API Response Time: < 200ms
- ✅ TypeScript errors: 0
- ✅ ESLint errors: 0

### Utilisateur
- ✅ Temps pour créer un article: < 5 minutes
- ✅ Dashboard load time: < 2s
- ✅ Taux de succès publication: > 95%
- ✅ Satisfaction utilisateur: > 4/5

### Business
- ✅ Articles publiés par semaine: mesurable
- ✅ Utilisateurs actifs: mesurable
- ✅ Temps moyen dans dashboard: mesurable

---

## 🚨 RISQUES & MITIGATION

### Risque 1: MongoDB Atlas Connection
**Impact:** HIGH
**Probabilité:** LOW
**Mitigation:**
- Connection pooling implémenté
- Retry logic
- Monitoring
- Fallback DB URL

### Risque 2: Tiptap Editor Complexity
**Impact:** MEDIUM
**Probabilité:** MEDIUM
**Mitigation:**
- Start simple (starter-kit)
- Add features incrementally
- Test sur différents browsers
- Fallback à textarea si problème

### Risque 3: Middleware Breaking Auth
**Impact:** HIGH
**Probabilité:** LOW
**Mitigation:**
- Tests exhaustifs
- Staging environment
- Rollback plan
- Feature flag

---

## 📚 RESSOURCES

### Documentation
- [Next.js 14 Docs](https://nextjs.org/docs)
- [Mongoose Docs](https://mongoosejs.com/docs/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tiptap Editor](https://tiptap.dev/)
- [shadcn/ui](https://ui.shadcn.com/)
- [CASL Permissions](https://casl.js.org/)

### Internal Docs
- `REDUX_AUTH_SETUP.md` - Setup auth complet
- `USAGE_EXAMPLES.md` - Exemples d'utilisation
- `CODE_REVIEW_ANALYSIS.md` - Analyse du code existant
- `.env.example` - Variables d'environnement

---

## 🔄 CHANGELOG

### Version 2.0 - 2025-11-07
- Updated PRD basé sur l'analyse du code existant
- Phase 1 marquée à 95% (infrastructure complète)
- Ajout des tâches manquantes prioritaires
- Planning révisé sur 4 semaines
- Ajout checklist de lancement
- Métriques de succès définies

### Version 1.0 - 2025-11-07
- Initial PRD creation
- Vision et architecture définies

---

## 👥 TEAM & ROLES

**Project Lead:** TBD
**Backend Developer:** TBD
**Frontend Developer:** TBD
**QA Engineer:** TBD

---

## 📝 NOTES IMPORTANTES

1. **Ne pas oublier:** Le middleware est CRITIQUE. Sans lui, les routes admin sont publiques.

2. **shadcn/ui:** Installer les composants au fur et à mesure des besoins, pas tous d'un coup.

3. **Tiptap:** Commencer simple avec starter-kit, ajouter extensions progressivement.

4. **Tests:** Écrire les tests au fur et à mesure, pas à la fin.

5. **Documentation:** Mettre à jour les docs à chaque feature majeure.

6. **Git:** Commits fréquents, messages descriptifs, feature branches.

7. **Performance:** Lazy load les components lourds (Tiptap, Media Library).

8. **SEO:** Ne pas oublier les metadata sur les pages publiques.

---

**Last Updated:** 2025-11-07
**Next Review:** Fin Sprint 1 (après sécurisation)
**Contact:** Pour questions, voir les docs ou créer une issue GitHub
