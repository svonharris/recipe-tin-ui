<p align="center">
  <img src="public/the-recipe-tin-showcase.png" alt="The Recipe Tin" />
</p>

<h1 align="center">Recipe Tin UI Design System</h1>

Recipe Tin UI Design System provides reusable UI components, design tokens, and foundations that help build a consistent, accessible, and scalable digital recipe box. Inspired by the classic kitchen tin filled with handwritten recipe cards, it keeps all the building blocks for discovering, saving, and sharing recipes in one place.

This guide walks you through installing and using the design system in your project.

<hr size="4" color="#ededed">

What this includes:

- Reusable React components (buttons, cards, forms, navigation, ratings, and more)
- Design foundations (color, typography, spacing, layout, and border radius)
- Accessibility-first patterns and implementation guidance
- Storybook documentation with examples and usage notes

Using shared standards helps teams:

- Build faster with less duplication
- Maintain visual and behavioral consistency
- Improve onboarding for designers and developers
- Deliver predictable, confidence-inspiring product experiences

The system is built on:

- Design tokens
- Accessibility standards
- Interaction principles
- Responsive layout rules

## Get Started

Install the latest version:

```
npm install github:svonharris/recipe-tin-ui
```

To install a specific release, append the version tag:

```
npm install github:svonharris/recipe-tin-ui#v1.0.1
```

Tags follow [semantic versioning](https://semver.org) and map to GitHub releases. Pinning to a tag is recommended for production use to ensure reproducible installs.

### Peer Dependencies

<hr width="50%" align="left">

Make sure your project includes the required peer dependencies:

```
npm install react react-dom
```

If you're using TypeScript:

```
npm install -D typescript @types/react @types/react-dom
```

### Using Components

<hr width="50%" align="left">

Import components directly:

```
import { Button } from 'recipe-tin-ui';

export function Example() {
    return <Button variant="primary">Browse Recipes</Button>;
}
```

### Using Icons

<hr width="50%" align="left">

Icons are available as a separate entry point to keep them tree-shakeable from the main bundle:

```
import { Heart, Search01, Star } from 'recipe-tin-ui/icons';

export function Example() {
    return <Heart aria-hidden="true" />;
}
```

All icons are React SVG components and accept standard SVG props (`className`, `width`, `height`, `aria-hidden`, etc.).

### Regenerate icons

SVG icons are generated from source files in `design/icons/`:

```
npm run icons:export
```

### Using Design Tokens

<hr width="50%" align="left">

Design tokens are available for direct use in CSS.

```
.my-card {
  background: var(--color-surface-primary);
  border-radius: var(--border-radius-md);
}
```

<hr size="4" color="#ededed">
 
## Documentation

Interactive documentation and live examples are published via [GitHub](https://svonharris.github.io/recipe-tin-ui/?path=/docs/docs-introduction--docs) . There you can:

- Explore components
- View accessibility notes
- Inspect props and variants
- Review usage guidelines

### Run Storybook locally

```
npm install
npm run storybook
```

Opens at [http://localhost:6006](http://localhost:6006).

## Credits

#### Icons:

- Restaurant by <a href="https://iconscout.com/contributors/yulidor" class="text-underline font-size-sm">YuliDor</a> on IconScout.

- Pancake by <a href="https://iconscout.com/contributors/faishal-lathief" class="text-underline font-size-sm">Faishal Lathief</a> on IconScout.

- Cupcake by <a href="https://iconscout.com/contributors/aomam" class="text-underline font-size-sm">Aomam .</a> on IconScout.

- Sandwich by <a href="https://iconscout.com/contributors/kerismaker" class="text-underline font-size-sm" target="_blank">Kerismaker Studio</a> on IconScout.

- Veg Food by <a href="https://iconscout.com/contributors/iconscout" class="text-underline font-size-sm" target="_blank">IconScout Store</a> on IconScout.
