---
name: testing-react
description: Mettre en place et écrire les tests unitaires (Vitest + React Testing Library) et fonctionnels/E2E (Playwright) dans un projet React TypeScript. À utiliser quand on crée un composant, un hook, une fonction utilitaire, une feature, ou quand on demande d'ajouter/corriger des tests.
---

# Tests React : unitaires, intégration, fonctionnels

## Stack
- **Unitaires / intégration** : Vitest + @testing-library/react + @testing-library/user-event + @testing-library/jest-dom
- **Mock réseau** : MSW (Mock Service Worker)
- **Fonctionnels / E2E** : Playwright

## Installation (si absente)
```bash
npm i -D vitest jsdom @testing-library/react @testing-library/user-event @testing-library/jest-dom msw @playwright/test
npx playwright install
```

## Configuration
`vitest.config.ts` : environnement `jsdom`, `globals: true`, `setupFiles: ['./src/test/setup.ts']`, coverage `v8`.
`src/test/setup.ts` : importer `@testing-library/jest-dom/vitest` et démarrer/arrêter le serveur MSW (`beforeAll`, `afterEach` reset, `afterAll`).
`playwright.config.ts` : `testDir: './e2e'`, `webServer` qui lance l'app, projet Chromium au minimum.

Scripts `package.json` :
```json
"test": "vitest",
"test:run": "vitest run",
"test:coverage": "vitest run --coverage",
"e2e": "playwright test"
```

## Règles d'écriture
1. Fichier de test **colocalisé** : `Button.tsx` → `Button.test.tsx`.
2. Nommage : `describe('<Composant>')` puis `it('should <comportement observable>')`.
3. Structure **Arrange / Act / Assert**, un comportement par test.
4. Requêtes RTL par ordre de priorité : `getByRole` > `getByLabelText` > `getByText` > `getByTestId` (dernier recours).
5. Toujours `userEvent` (pas `fireEvent`) ; `await` sur les interactions.
6. Tester le **comportement visible par l'utilisateur**, pas l'implémentation (pas de test sur l'état interne ou les noms de fonctions privées).
7. Mocker uniquement les frontières (réseau via MSW, horloge, stockage) ; ne pas mocker ce qu'on teste.
8. Hooks : `renderHook` ; composants dépendant de providers : utiliser un `renderWithProviders` dans `src/test/utils.tsx`.
9. Pas de `setTimeout` dans les tests : utiliser `findBy*` ou `waitFor`.

## Ce qu'il faut tester
- **Unitaire** : fonctions pures, hooks, composants UI isolés (états : défaut, chargement, erreur, vide).
- **Intégration** : une feature complète avec ses providers et MSW.
- **E2E (Playwright)** : parcours critiques uniquement (auth, création, paiement…), dans `e2e/`. Sélecteurs par `getByRole`/`getByLabel`, jamais par classe CSS.

## Checklist avant de terminer
- [ ] Le test échoue si on casse le comportement (vérifier qu'il n'est pas faux-positif)
- [ ] `npm run test:run` passe
- [ ] Aucun `.only` / `.skip` oublié
- [ ] Nouveau composant = au minimum un test de rendu + un test d'interaction
