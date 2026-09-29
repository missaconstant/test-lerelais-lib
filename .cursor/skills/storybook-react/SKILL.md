---
name: storybook-react
description: Installer, configurer et écrire des stories Storybook (CSF3) pour les composants React TypeScript, avec tests d'interaction et addon a11y. À utiliser quand on crée ou modifie un composant UI partagé, ou quand on demande d'ajouter/corriger Storybook.
---

# Storybook pour React

## Installation (si absent)
```bash
npx storybook@latest init
```
Addons à garder/ajouter : `@storybook/addon-essentials`, `@storybook/addon-a11y`, `@storybook/addon-interactions`.

Scripts :
```json
"storybook": "storybook dev -p 6006",
"build-storybook": "storybook build"
```

## Configuration
- `.storybook/main.ts` : `stories: ['../src/**/*.stories.@(ts|tsx)']`, alias `@/` identique à Vite, `docs: { autodocs: 'tag' }`.
- `.storybook/preview.ts` : importer les styles globaux, ajouter les décorateurs de providers (thème, router, i18n…), `parameters.controls` pour les matchers `color` et `date`.

## Écrire une story (format CSF3, typé)
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { children: 'Valider' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { variant: 'primary' } };
export const Disabled: Story = { args: { disabled: true } };
```

## Règles
1. Fichier `Composant.stories.tsx` **colocalisé** avec le composant.
2. `title` = chemin hiérarchique (`Components/…`, `Features/<feature>/…`).
3. Une story par **état significatif** : défaut, variantes, désactivé, chargement, erreur, vide, contenu long.
4. Utiliser `args` et `argTypes` pour les contrôles ; pas de données en dur dans le JSX.
5. Composants avec interactions : ajouter une fonction `play` (`@storybook/test` : `userEvent`, `expect`, `within`).
6. Composants dépendant de l'API : mocker avec MSW (`msw-storybook-addon`), pas de vrais appels.
7. Vérifier l'onglet **Accessibility** : aucune violation avant de valider.
8. Ne pas dupliquer les tests unitaires : la story documente et vérifie le rendu, Vitest vérifie la logique.

## Option : réutiliser les stories comme tests
Avec `@storybook/experimental-addon-test` ou `composeStories`, on peut exécuter les stories dans Vitest pour éviter d'écrire deux fois les mêmes cas.

## Checklist
- [ ] Toutes les variantes visibles dans `npm run storybook`
- [ ] `npm run build-storybook` passe sans erreur
- [ ] Addon a11y sans violation
- [ ] Props documentées (JSDoc dans le type, visibles en autodocs)
