# LeRelais Front Library

Bibliothèque de composants UI React et tokens de design pour l'écosystème **LeRelais**.

---

## 📦 Installation

Dans le projet client (qui doit avoir `react` et `react-dom` en version >= 18 ou 19) :

```bash
npm install lerelais-front-library
```

ou avec Yarn / pnpm :

```bash
yarn add lerelais-front-library
# ou
pnpm add lerelais-front-library
```

---

## 🎨 Importation des styles

Pour appliquer les variables de style (tokens) et le CSS des composants, importez la feuille de style globale dans le point d'entrée de votre application (ex: `main.tsx`, `index.tsx` ou `_app.tsx`) :

```tsx
import 'lerelais-front-library/dist/style.css';
```

---

## 🚀 Utilisation

Les composants et utilitaires peuvent être importés directement :

```tsx
import { Button, Alert, Badge, TrackingCard } from 'lerelais-front-library';

export function Example() {
  return (
    <div>
      <Alert type="info">Bienvenue sur la plateforme LeRelais</Alert>

      <Button variant="primary" onClick={() => console.log('Action')}>
        Continuer
      </Button>

      <Badge status="en_transit" />
    </div>
  );
}
```

### TypeScript

Le package inclut l'intégralité des définitions TypeScript (`.d.ts`). Les types de props et énumérations sont également exportés :

```tsx
import type { ButtonProps, ButtonVariant, AlertType } from 'lerelais-front-library';
```

---

## 🛠️ Développement local

- **Démarrer le catalogue de démonstration :**
  ```bash
  npm run dev
  ```
- **Lancer les tests :**
  ```bash
  npm run test:run
  ```
- **Construire la librairie pour publication :**
  ```bash
  npm run build
  ```

---

## 🚢 Publication sur npm

1. **Vérifier la version dans `package.json` :**
   ```bash
   npm version patch # ou minor / major
   ```

2. **Se connecter au registre npm :**
   ```bash
   npm login
   ```

3. **Publier :**
   ```bash
   npm publish --access public
   ```

*(Le script `prepublishOnly` exécutera automatiquement les tests et le build avant publication).*
