# Product Requirements Document (PRD)
# Coworking Café - Dashboard & Blog Management System

**Version:** 1.0
**Date:** 2025-11-08
**Status:** 🚀 Ready to Implement
**Project:** Coworking Café Website + Admin Dashboard

---

## 📋 TABLE OF CONTENTS

1. [Executive Summary](#executive-summary)
2. [Current State Analysis](#current-state-analysis)
3. [Project Goals](#project-goals)
4. [Technical Architecture](#technical-architecture)
5. [Feature Requirements](#feature-requirements)
6. [Implementation Roadmap](#implementation-roadmap)
7. [Success Metrics](#success-metrics)

---

## 🎯 EXECUTIVE SUMMARY

### Project Overview

Transform the existing **Digiv** Next.js 14 template into a full-featured **Coworking Café** platform with:
- **Public-facing website** (existing pages + dynamic blog)
- **Client dashboard** (simple, site-design based)
- **Admin dashboard** (full-featured with shadcn/ui sidebar-08)
- **Blog management system** (create/edit/publish from admin to site)
- **Authentication & authorization** (JWT + Role-based access)

### Key Objectives

1. ✅ **Dual Dashboard System**: Client (simple) + Admin (advanced)
2. ✅ **Blog CMS**: Create, edit, publish articles from admin dashboard
3. ✅ **Authentication**: Secure login with role-based access (client, admin, dev)
4. ✅ **Modern Stack**: Redux Toolkit + RTK Query + MongoDB Atlas
5. ✅ **Clean Architecture**: app/(site) and app/(dashboard) separation

---

## 📊 CURRENT STATE ANALYSIS

### ✅ What We Have

#### 1. **Next.js 14 Template "Digiv"**
- App Router architecture
- Pages: Home, About, Services, Projects, Blog (static), Pricing, Contact, FAQ
- Components: Header, Footer, Testimonials, etc.
- Bootstrap 5.3.3 + SCSS + Tailwind CSS
- Framer Motion animations

#### 2. **MongoDB Models (Complete)**
Located in `src/models/`:
- ✅ **User** (email, password, givenName, role, emailVerifiedAt, lastLoginAt)
- ✅ **Role** (name, slug, description, level, permissions)
- ✅ **Permission** (name, slug, description, resource, action)
- ✅ **Session** (userId, token, refreshToken, deviceType, expiresAt)
- ✅ **Article** (title, slug, content, excerpt, author, status, publishedAt)
- ✅ **Category** (name, slug, description, parent, isActive)
- ✅ **Tag** (name, slug, description, color)
- ✅ **Media** (filename, url, mimetype, size, uploadedBy)
- ✅ **Comment** (article, author, content, status, parentComment)
- ✅ **ArticleRevision** (article, content, createdBy, revisionNumber)

**Architecture:** Modular (document/hooks/methods/virtuals)

#### 3. **Environment Configuration**
`.env.local` configured with:
- ✅ MongoDB Atlas connection
- ✅ JWT secrets (access + refresh)
- ✅ JWT expiration times (15m access, 7d refresh)

#### 4. **Dependencies Available**
- React 18
- Next.js 14.2.17
- Bootstrap 5.3.3
- Tailwind CSS 3.4.18
- Radix UI (Accordion)
- Lucide React (icons)
- Motion (animations)

### ❌ What We Need

1. **Authentication System**
   - API routes (login, register, logout, refresh)
   - Redux Toolkit + RTK Query setup
   - JWT token management
   - Protected routes middleware

2. **Site Architecture**
   - Restructure to `app/(site)/` group
   - Create `app/(site)/(auth)/` for login/register
   - Keep existing site layout

3. **Dashboard Architecture**
   - Create `app/(dashboard)/` group
   - Implement shadcn/ui sidebar-08 for admin
   - Create simple client dashboard
   - Role-based layout switching

4. **Blog System**
   - Admin UI for CRUD operations
   - Rich text editor (Tiptap recommended)
   - Image upload handling
   - Category/Tag management
   - Draft/Published workflow
   - Dynamic blog pages on site

5. **Database Integration**
   - MongoDB connection utility
   - Seed script for initial roles/permissions
   - Model exports and initialization

---

## 🏗️ TECHNICAL ARCHITECTURE

### Directory Structure

```
src/
├── app/
│   ├── (site)/                    # Public website group
│   │   ├── (auth)/                # Auth pages (shared layout)
│   │   │   ├── login/
│   │   │   │   └── page.tsx       # Login page
│   │   │   └── register/
│   │   │       └── page.tsx       # Register page
│   │   ├── layout.tsx             # Site layout (Header + Footer)
│   │   ├── page.tsx               # Homepage
│   │   ├── about/
│   │   ├── services/
│   │   ├── projects/
│   │   ├── pricing/
│   │   ├── contact/
│   │   ├── faq/
│   │   └── blog/
│   │       ├── page.tsx           # Blog list (dynamic from DB)
│   │       └── [slug]/
│   │           └── page.tsx       # Article detail (dynamic)
│   │
│   ├── (dashboard)/               # Dashboard group
│   │   ├── layout.tsx             # Dashboard wrapper
│   │   ├── client/                # Client dashboard
│   │   │   ├── layout.tsx         # Simple client layout
│   │   │   └── page.tsx           # Client dashboard home
│   │   └── admin/                 # Admin dashboard
│   │       ├── layout.tsx         # shadcn sidebar-08 layout
│   │       ├── page.tsx           # Admin dashboard home
│   │       ├── blog/
│   │       │   ├── page.tsx       # Article list
│   │       │   ├── new/
│   │       │   │   └── page.tsx   # Create article
│   │       │   └── [id]/
│   │       │       └── edit/
│   │       │           └── page.tsx # Edit article
│   │       ├── categories/
│   │       ├── tags/
│   │       ├── media/
│   │       └── settings/
│   │
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/route.ts
│   │   │   ├── register/route.ts
│   │   │   ├── logout/route.ts
│   │   │   ├── refresh/route.ts
│   │   │   └── me/route.ts
│   │   ├── blog/
│   │   │   ├── articles/route.ts      # GET, POST
│   │   │   ├── articles/[id]/route.ts # GET, PUT, DELETE
│   │   │   ├── categories/route.ts
│   │   │   └── tags/route.ts
│   │   └── upload/route.ts
│   │
│   └── globals.css
│
├── components/
│   ├── auth/
│   │   ├── AuthGuard.tsx          # Route protection
│   │   └── TokenRefreshHandler.tsx
│   ├── forms/
│   │   ├── FormInput.tsx
│   │   ├── FormButton.tsx
│   │   ├── FormCheckbox.tsx
│   │   └── FormAlert.tsx
│   ├── blog/
│   │   ├── ArticleCard.tsx
│   │   ├── ArticleEditor.tsx       # Tiptap editor
│   │   └── CategoryBadge.tsx
│   └── dashboard/
│       └── Sidebar.tsx             # shadcn sidebar-08
│
├── lib/
│   ├── mongodb.ts                  # MongoDB connection
│   ├── jwt.ts                      # JWT utilities
│   ├── redux/
│   │   ├── store.ts
│   │   ├── hooks.ts
│   │   ├── provider.tsx
│   │   ├── features/
│   │   │   └── auth/
│   │   │       └── authSlice.ts
│   │   └── services/
│   │       ├── authApi.ts          # RTK Query - Auth
│   │       └── blogApi.ts          # RTK Query - Blog
│   └── seed/
│       ├── seedDatabase.ts         # Seed roles/permissions/dev user
│       └── permissions.ts          # Permission definitions
│
└── models/                         # ✅ Already exist
    ├── user/
    ├── role/
    ├── permission/
    ├── session/
    ├── article/
    ├── category/
    ├── tag/
    ├── media/
    ├── comment/
    └── article-revision/
```

### Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | Next.js 14 (App Router) | Server-side rendering, API routes |
| **Frontend** | React 18 + TypeScript | UI components |
| **Styling** | Tailwind CSS + Bootstrap 5 + SCSS | Styling system |
| **State Management** | Redux Toolkit + RTK Query | Global state + API calls |
| **Database** | MongoDB Atlas + Mongoose | Data persistence |
| **Authentication** | JWT (access + refresh tokens) | Secure authentication |
| **UI Components** | shadcn/ui | Dashboard components |
| **Rich Text** | Tiptap | Blog content editor |
| **Icons** | Lucide React | Icon library |
| **Animations** | Framer Motion | Smooth transitions |

### Authentication Flow

```
┌─────────────┐
│   User      │
│  Visits     │
│  /login     │
└──────┬──────┘
       │
       ▼
┌─────────────────────┐
│  Login Page         │
│  - Email input      │
│  - Password input   │
│  - Submit button    │
└──────┬──────────────┘
       │ submit
       ▼
┌─────────────────────────────┐
│  RTK Query Mutation         │
│  POST /api/auth/login       │
│  { email, password }        │
└──────┬──────────────────────┘
       │
       ▼
┌─────────────────────────────┐
│  Backend Validation         │
│  1. Find user in MongoDB    │
│  2. Verify password (bcrypt)│
│  3. Generate JWT tokens     │
│  4. Create session in DB    │
└──────┬──────────────────────┘
       │
       ▼
┌─────────────────────────────┐
│  Response                   │
│  {                          │
│    user: { ... },           │
│    token: "...",            │
│    refreshToken: "..."      │
│  }                          │
└──────┬──────────────────────┘
       │
       ▼
┌─────────────────────────────┐
│  Redux State Update         │
│  - Store user data          │
│  - Store tokens             │
│  - Save to localStorage     │
└──────┬──────────────────────┘
       │
       ▼
┌─────────────────────────────┐
│  Redirect Based on Role     │
│  - Client → /client         │
│  - Admin → /admin           │
│  - Dev → /admin             │
└─────────────────────────────┘
```

### Role-Based Access Control

| Role | Level | Dashboard Access | Permissions |
|------|-------|-----------------|-------------|
| **dev** | 100 | `/admin` | All permissions (super admin) |
| **admin** | 80 | `/admin` | Manage blog, users, settings |
| **staff** | 50 | `/admin` | Create/edit blog articles |
| **client** | 10 | `/client` | View own profile, comment on blog |

---

## 📝 FEATURE REQUIREMENTS

### Phase 1: Foundation & Authentication (Week 1-2)

#### 1.1 MongoDB Setup

**Tasks:**
- [ ] Create `src/lib/mongodb.ts` connection utility
- [ ] Ensure all models properly export
- [ ] Create seed script `src/lib/seed/seedDatabase.ts`
- [ ] Define permissions in `src/lib/seed/permissions.ts`
- [ ] Run seed to create:
  - 4 roles (dev, admin, staff, client)
  - All permissions
  - Dev user account (dev@coworkingcafe.fr / Dev@12345)

**Acceptance Criteria:**
- ✅ MongoDB connects successfully
- ✅ Seed script runs without errors
- ✅ Can query roles and permissions from DB
- ✅ Dev user can be found in database

#### 1.2 Redux Toolkit Setup

**Tasks:**
- [ ] Install dependencies: `@reduxjs/toolkit`, `react-redux`
- [ ] Create Redux store in `src/lib/redux/store.ts`
- [ ] Create typed hooks in `src/lib/redux/hooks.ts`
- [ ] Create Redux provider in `src/lib/redux/provider.tsx`
- [ ] Wrap root layout with `ReduxProvider`

**Files to Create:**
```typescript
// src/lib/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import { authApi } from './services/authApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

#### 1.3 Authentication API Routes

**Tasks:**
- [ ] Create `src/lib/jwt.ts` (generate, verify, refresh tokens)
- [ ] Create `POST /api/auth/register`
- [ ] Create `POST /api/auth/login`
- [ ] Create `POST /api/auth/logout`
- [ ] Create `POST /api/auth/refresh`
- [ ] Create `GET /api/auth/me`

**API Specifications:**

**POST /api/auth/register**
```typescript
Request:
{
  email: string;
  password: string;
  passwordConfirm: string;
  givenName?: string;
  acceptTerms: boolean;
}

Response (201):
{
  success: true;
  message: "Inscription réussie !";
  user: {
    _id: string;
    email: string;
    givenName?: string;
    role: { name, slug, level };
  }
}
```

**POST /api/auth/login**
```typescript
Request:
{
  email: string;
  password: string;
  rememberMe?: boolean;
}

Response (200):
{
  success: true;
  user: User;
  token: string;        // JWT access token (15m)
  refreshToken: string; // JWT refresh token (7d or 30d)
}
```

#### 1.4 Redux Auth Slice & RTK Query

**Tasks:**
- [ ] Create `src/lib/redux/features/auth/authSlice.ts`
- [ ] Create `src/lib/redux/services/authApi.ts`
- [ ] Implement localStorage persistence
- [ ] Add auto-refresh token logic

**State Shape:**
```typescript
interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}
```

#### 1.5 Auth Pages

**Tasks:**
- [ ] Restructure existing pages to `app/(site)/`
- [ ] Create `app/(site)/(auth)/layout.tsx` (auth-specific layout)
- [ ] Create `app/(site)/(auth)/login/page.tsx`
- [ ] Create `app/(site)/(auth)/register/page.tsx`
- [ ] Create form components:
  - [ ] `src/components/forms/FormInput.tsx`
  - [ ] `src/components/forms/FormButton.tsx`
  - [ ] `src/components/forms/FormCheckbox.tsx`
  - [ ] `src/components/forms/FormAlert.tsx`

**Design Requirements:**
- Gradient backgrounds (login: blue/cyan, register: purple/pink)
- Responsive mobile-first
- Loading states
- Error handling
- Form validation

#### 1.6 Route Protection

**Tasks:**
- [ ] Create `src/middleware.ts` (Next.js middleware)
- [ ] Protect `/client/*` routes (require authentication)
- [ ] Protect `/admin/*` routes (require admin/dev role)
- [ ] Create `src/components/auth/AuthGuard.tsx`
- [ ] Create `src/components/auth/TokenRefreshHandler.tsx`

---

### Phase 2: Dashboard Layouts (Week 2-3)

#### 2.1 Install shadcn/ui

**Tasks:**
- [ ] Run `npx shadcn@latest init`
- [ ] Run `npx shadcn@latest add sidebar`
- [ ] Configure components.json
- [ ] Verify Tailwind CSS compatibility with Bootstrap

#### 2.2 Admin Dashboard Layout

**Tasks:**
- [ ] Create `app/(dashboard)/admin/layout.tsx`
- [ ] Implement shadcn/ui sidebar-08 pattern
- [ ] Add navigation items:
  - Dashboard
  - Blog (Articles, Categories, Tags)
  - Media
  - Users (admin/dev only)
  - Settings
- [ ] Add user menu (profile, logout)
- [ ] Make responsive (collapsible sidebar)

**Features:**
- ✅ Sidebar with icons (Lucide React)
- ✅ Active link highlighting
- ✅ User avatar with role badge
- ✅ Logout functionality
- ✅ Breadcrumbs
- ✅ Mobile hamburger menu

#### 2.3 Client Dashboard Layout

**Tasks:**
- [ ] Create `app/(dashboard)/client/layout.tsx`
- [ ] Use simplified version of site design
- [ ] Add simple navigation:
  - Mon Profil
  - Mes Commentaires
  - Paramètres
- [ ] Reuse Header/Footer from site

**Design:**
- Similar color scheme to main site
- Simpler navigation (no complex sidebar)
- Card-based layout

#### 2.4 Dashboard Home Pages

**Tasks:**
- [ ] Create `app/(dashboard)/admin/page.tsx`
  - Stats cards (total articles, categories, comments)
  - Recent articles table
  - Quick actions
- [ ] Create `app/(dashboard)/client/page.tsx`
  - Welcome message
  - Profile summary
  - Recent activity

---

### Phase 3: Blog Management System (Week 3-4)

#### 3.1 Article List Page

**Tasks:**
- [ ] Create `app/(dashboard)/admin/blog/page.tsx`
- [ ] Create RTK Query endpoint: `GET /api/blog/articles`
- [ ] Create API route: `GET /api/blog/articles`
- [ ] Display table with columns:
  - Title
  - Status (draft/published)
  - Author
  - Category
  - Published Date
  - Actions (Edit, Delete)
- [ ] Add filters (status, category, search)
- [ ] Add pagination
- [ ] Add "Create New Article" button

#### 3.2 Rich Text Editor Setup

**Tasks:**
- [ ] Install Tiptap: `npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-image @tiptap/extension-link`
- [ ] Create `src/components/blog/ArticleEditor.tsx`
- [ ] Add toolbar with formatting options:
  - Bold, Italic, Underline
  - Headings (H1-H6)
  - Lists (bullet, numbered)
  - Links
  - Images
  - Code blocks
  - Blockquotes

#### 3.3 Create Article Page

**Tasks:**
- [ ] Create `app/(dashboard)/admin/blog/new/page.tsx`
- [ ] Create form with fields:
  - Title (auto-generates slug)
  - Slug (editable)
  - Excerpt
  - Content (Tiptap editor)
  - Featured Image
  - Category (select)
  - Tags (multi-select)
  - Status (draft/published)
  - Publish Date
- [ ] Create RTK Query mutation: `POST /api/blog/articles`
- [ ] Create API route: `POST /api/blog/articles`
- [ ] Add validation (Zod recommended)

#### 3.4 Edit Article Page

**Tasks:**
- [ ] Create `app/(dashboard)/admin/blog/[id]/edit/page.tsx`
- [ ] Fetch article data on load
- [ ] Pre-fill form with existing data
- [ ] Create RTK Query mutation: `PUT /api/blog/articles/[id]`
- [ ] Create API route: `PUT /api/blog/articles/[id]`
- [ ] Save as draft or publish
- [ ] Create ArticleRevision on each save

#### 3.5 Delete Article

**Tasks:**
- [ ] Add delete confirmation modal
- [ ] Create RTK Query mutation: `DELETE /api/blog/articles/[id]`
- [ ] Create API route: `DELETE /api/blog/articles/[id]`
- [ ] Soft delete (set deletedAt) or hard delete
- [ ] Show success toast

#### 3.6 Category Management

**Tasks:**
- [ ] Create `app/(dashboard)/admin/blog/categories/page.tsx`
- [ ] CRUD operations for categories
- [ ] Create API routes:
  - `GET /api/blog/categories`
  - `POST /api/blog/categories`
  - `PUT /api/blog/categories/[id]`
  - `DELETE /api/blog/categories/[id]`
- [ ] Support hierarchical categories (parent/child)

#### 3.7 Tag Management

**Tasks:**
- [ ] Create `app/(dashboard)/admin/blog/tags/page.tsx`
- [ ] CRUD operations for tags
- [ ] Create API routes:
  - `GET /api/blog/tags`
  - `POST /api/blog/tags`
  - `PUT /api/blog/tags/[id]`
  - `DELETE /api/blog/tags/[id]`
- [ ] Color picker for tags

---

### Phase 4: Public Blog Pages (Week 4-5)

#### 4.1 Blog List Page (Dynamic)

**Tasks:**
- [ ] Update `app/(site)/blog/page.tsx` to fetch from DB
- [ ] Create API route: `GET /api/blog/articles/published`
- [ ] Display published articles only
- [ ] Show title, excerpt, featured image, category, date, author
- [ ] Add pagination
- [ ] Add category filter
- [ ] Add search functionality
- [ ] Create `src/components/blog/ArticleCard.tsx`

#### 4.2 Article Detail Page (Dynamic)

**Tasks:**
- [ ] Create `app/(site)/blog/[slug]/page.tsx`
- [ ] Fetch article by slug
- [ ] Render article content (HTML from Tiptap)
- [ ] Display metadata (author, date, category, tags)
- [ ] Add social share buttons
- [ ] Add "Related Articles" section
- [ ] Add comment section (future)
- [ ] Add breadcrumbs
- [ ] Implement SEO metadata (title, description, og:image)

**generateStaticParams:**
```typescript
export async function generateStaticParams() {
  // Fetch all published articles
  const articles = await Article.find({ status: 'published' }).select('slug');
  return articles.map((article) => ({
    slug: article.slug,
  }));
}
```

#### 4.3 Category Archive Page

**Tasks:**
- [ ] Create `app/(site)/blog/category/[slug]/page.tsx`
- [ ] Display articles filtered by category
- [ ] Show category name and description

---

### Phase 5: Media Management (Week 5-6)

#### 5.1 Image Upload

**Tasks:**
- [ ] Choose upload strategy:
  - **Option A:** Local storage (public/uploads/)
  - **Option B:** Cloudinary
  - **Option C:** UploadThing
- [ ] Create `POST /api/upload` route
- [ ] Handle file validation (type, size)
- [ ] Generate unique filenames
- [ ] Store Media record in MongoDB
- [ ] Return URL for use in editor

#### 5.2 Media Library

**Tasks:**
- [ ] Create `app/(dashboard)/admin/media/page.tsx`
- [ ] Display grid of uploaded images
- [ ] Show metadata (filename, size, date, uploader)
- [ ] Add search/filter
- [ ] Add delete functionality
- [ ] Add "Copy URL" button

---

### Phase 6: Polish & Optimization (Week 6-7)

#### 6.1 Error Handling

**Tasks:**
- [ ] Add global error boundary
- [ ] Create custom error pages (404, 500)
- [ ] Add toast notifications (react-hot-toast recommended)
- [ ] Standardize API error responses

#### 6.2 Loading States

**Tasks:**
- [ ] Add loading spinners to all data fetching
- [ ] Create skeleton components
- [ ] Use React Suspense where appropriate

#### 6.3 Form Validation

**Tasks:**
- [ ] Install Zod: `npm install zod`
- [ ] Create validation schemas for all forms
- [ ] Add client-side validation
- [ ] Add server-side validation in API routes

#### 6.4 Security

**Tasks:**
- [ ] Add rate limiting (express-rate-limit or middleware)
- [ ] Add CSRF protection
- [ ] Sanitize user inputs
- [ ] Add helmet.js headers
- [ ] Review all API routes for authorization checks

#### 6.5 Testing

**Tasks:**
- [ ] Test authentication flow
- [ ] Test blog CRUD operations
- [ ] Test role-based access
- [ ] Test image upload
- [ ] Cross-browser testing
- [ ] Mobile responsive testing

---

## 🗓️ IMPLEMENTATION ROADMAP

### Week 1-2: Foundation & Authentication
**Goal:** Working authentication system with login/register

**Deliverables:**
- ✅ MongoDB connected and seeded
- ✅ Redux Toolkit configured
- ✅ Auth API routes working
- ✅ Login/Register pages functional
- ✅ JWT token management
- ✅ Route protection with middleware

**Estimated Hours:** 40-50 hours

---

### Week 2-3: Dashboard Layouts
**Goal:** Admin and client dashboard layouts complete

**Deliverables:**
- ✅ shadcn/ui installed and configured
- ✅ Admin layout with sidebar-08
- ✅ Client layout (simple)
- ✅ Dashboard home pages
- ✅ Navigation working
- ✅ Logout functionality

**Estimated Hours:** 30-40 hours

---

### Week 3-4: Blog Management
**Goal:** Full CRUD blog system in admin dashboard

**Deliverables:**
- ✅ Article list page
- ✅ Create article page with Tiptap
- ✅ Edit article page
- ✅ Delete article
- ✅ Category management
- ✅ Tag management
- ✅ All blog API routes

**Estimated Hours:** 50-60 hours

---

### Week 4-5: Public Blog Pages
**Goal:** Dynamic blog on public site

**Deliverables:**
- ✅ Blog list page (dynamic)
- ✅ Article detail page (dynamic)
- ✅ Category archive pages
- ✅ SEO optimization
- ✅ Social sharing

**Estimated Hours:** 30-40 hours

---

### Week 5-6: Media Management
**Goal:** Upload and manage images

**Deliverables:**
- ✅ Image upload functionality
- ✅ Media library page
- ✅ Integration with article editor

**Estimated Hours:** 20-30 hours

---

### Week 6-7: Polish & Testing
**Goal:** Production-ready application

**Deliverables:**
- ✅ Error handling
- ✅ Loading states
- ✅ Form validation (Zod)
- ✅ Security hardening
- ✅ Testing complete
- ✅ Documentation

**Estimated Hours:** 30-40 hours

---

## ✅ SUCCESS METRICS

### Technical Metrics

- [ ] **Performance**: Lighthouse score > 90
- [ ] **SEO**: All blog pages indexed properly
- [ ] **Security**: No critical vulnerabilities (npm audit)
- [ ] **Type Safety**: 100% TypeScript coverage
- [ ] **Code Quality**: ESLint passes with no errors

### Functional Metrics

- [ ] **Authentication**: Users can register, login, logout
- [ ] **Authorization**: Role-based access working correctly
- [ ] **Blog CRUD**: Can create, edit, delete articles
- [ ] **Public Blog**: Articles display correctly on site
- [ ] **Media**: Can upload and use images
- [ ] **Responsive**: Works on mobile, tablet, desktop

### User Experience Metrics

- [ ] **Load Time**: Initial page load < 3 seconds
- [ ] **Editor UX**: Intuitive and easy to use
- [ ] **Error Messages**: Clear and helpful
- [ ] **Mobile UX**: Smooth on all devices

---

## 📦 DEPENDENCIES TO INSTALL

```bash
# State Management
npm install @reduxjs/toolkit react-redux

# Authentication
npm install jsonwebtoken bcryptjs
npm install --save-dev @types/jsonwebtoken @types/bcryptjs

# Database
npm install mongoose
npm install dotenv

# Rich Text Editor
npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-image @tiptap/extension-link

# UI Components (shadcn/ui will auto-install these)
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu
npm install @radix-ui/react-label @radix-ui/react-select
npm install @radix-ui/react-slot @radix-ui/react-toast

# Validation
npm install zod

# Utilities
npm install date-fns slugify

# Image Upload (choose one)
# Option A: Cloudinary
npm install cloudinary next-cloudinary
# Option B: UploadThing
npm install uploadthing @uploadthing/react

# Dev Tools
npm install --save-dev tsx
```

---

## 🚀 GETTING STARTED

### Step 1: Install Dependencies
```bash
npm install @reduxjs/toolkit react-redux jsonwebtoken bcryptjs mongoose dotenv
npm install --save-dev @types/jsonwebtoken @types/bcryptjs tsx
```

### Step 2: Initialize shadcn/ui
```bash
npx shadcn@latest init
npx shadcn@latest add sidebar
```

### Step 3: Set Up MongoDB
```bash
# Already configured in .env.local ✅
# Connection string present
```

### Step 4: Create Seed Script
```bash
npm run seed
```

### Step 5: Start Development
```bash
npm run dev
```

---

## 📚 REFERENCE DOCUMENTS

- **Models:** `src/models/*` (already created ✅)
- **Redux Setup Guide:** `doc/REDUX_AUTH_SETUP.md`
- **Previous PRD Reference:** `doc/PRD_UPDATED.md`
- **Environment:** `.env.local` (MongoDB + JWT configured ✅)

---

## 🎨 DESIGN GUIDELINES

### Color Palette
- **Primary:** Use existing Coworking Café brand colors
- **Admin Dashboard:** Professional (grays, blues)
- **Auth Pages:** Gradients (login: blue/cyan, register: purple/pink)

### Typography
- **Headings:** Existing site font
- **Body:** Clean, readable sans-serif
- **Code:** Monospace for code blocks in articles

### Components
- **Buttons:** Bootstrap classes + Tailwind utilities
- **Forms:** Consistent input styling
- **Cards:** Clean, minimal shadows
- **Sidebar:** shadcn/ui sidebar-08 pattern

---

## ⚠️ IMPORTANT NOTES

1. **Route Structure:** Keep existing site pages in `app/(site)/`, create new dashboard in `app/(dashboard)/`
2. **Bootstrap + Tailwind:** Be mindful of CSS conflicts - Tailwind takes precedence
3. **Client vs Server Components:** Mark components using hooks with `'use client'`
4. **MongoDB Connection:** Use singleton pattern to avoid connection pooling issues
5. **JWT Security:** Never expose secrets in client-side code
6. **Role Checks:** Always verify roles on both client AND server
7. **Slugs:** Always generate unique slugs for articles
8. **Image Optimization:** Use Next.js Image component for all images

---

## 📞 SUPPORT & QUESTIONS

For any questions during implementation, refer to:
- Next.js 14 docs: https://nextjs.org/docs
- Redux Toolkit docs: https://redux-toolkit.js.org/
- shadcn/ui docs: https://ui.shadcn.com/
- Tiptap docs: https://tiptap.dev/
- Mongoose docs: https://mongoosejs.com/

---

**Document Status:** ✅ Ready for Implementation
**Next Action:** Begin Week 1-2 (Foundation & Authentication)

