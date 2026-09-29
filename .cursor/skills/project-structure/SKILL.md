---
name: project-structure
description: Conventions de structure des répertoires et fichiers d'un projet React TypeScript (organisation par feature, nommage, imports, barrels). À utiliser quand on crée un nouveau fichier, composant, hook, feature, ou quand on réorganise le code.
---

# Structure du projet

## Arborescence cible
```
src/
├── components/          # Composants UI partagés, sans logique métier
│   └── Button/
│       ├── Button.tsx
│       ├── Button.test.tsx
│       ├── Button.stories.tsx
│       └── index.ts
├── hooks/               # Hooks génériques réutilisables
├── lib/                 # Utilitaires, clients (axios, dayjs…), config
├── types/               # Types globaux partagés
├── styles/              # Styles globaux, tokens
└── test/                # setup.ts, utils.tsx, mocks MSW
e2e/                     # Tests Playwright
```

## Règles
1. **Organisation par feature**, pas par type technique : tout ce qui concerne « panier » vit dans `features/cart/`.
2. Une feature n'importe **jamais** les fichiers internes d'une autre feature : uniquement via son `index.ts`.
3. Sens des dépendances : `app` → `features` → `components` / `hooks` / `lib`. Jamais l'inverse. `components/` ne dépend pas de `features/`.
4. Un composant = un dossier contenant `.tsx`, `.test.tsx`, `.stories.tsx` (si UI partagée) et `index.ts`.
5. Colocaliser : tests, stories et styles à côté du fichier concerné.
6. Ne créer un dossier `hooks/`, `api/` ou `types.ts` dans une feature que s'il est nécessaire.

## Nommage
| Élément | Convention | Exemple |
|---|---|---|
| Composant | PascalCase | `UserCard.tsx` |
| Hook | camelCase, préfixe `use` | `useCart.ts` |
| Utilitaire | camelCase | `formatPrice.ts` |
| Dossier | kebab-case (features) / PascalCase (composants) | `user-profile/`, `Button/` |
| Type / Interface | PascalCase, sans préfixe `I` | `CartItem` |
| Constante | UPPER_SNAKE_CASE | `MAX_ITEMS` |

## Imports
- Alias `@/` vers `src/` (configurés dans `tsconfig.json` **et** `vite.config.ts`).
- Ordre : externes → alias `@/` → relatifs → styles.
- Pas de barrel `index.ts` géant à la racine de `components/` (casse le tree-shaking et ralentit les tests) : un `index.ts` par composant ou feature seulement.

## Avant de créer un fichier
1. Vérifier qu'un équivalent n'existe pas déjà.
2. Choisir : feature ou UI partagée ?
3. Créer le fichier au bon endroit avec son test associé.
