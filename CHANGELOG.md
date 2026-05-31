# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

---

## [1.0.9] — 2026-05-31

- chore: expand Claude Code permissions and directory access in settings.local.json
- chore: add generate:index npm script for manual src/index.ts regeneration
- chore: add /commit-and-push Claude slash command for staged commits
- feat: add script to auto-generate src/index.ts from component exports
- ci: auto-regenerate src/index.ts in pre-commit hook when component files change
- refactor(Container): change padding props from string to number; regenerate src/index.ts
- ci: skip release on story, docs, and non-build file changes
- ci: scope deploy workflow to relevant source paths
- docs: replace semver description with direct link to version tags

---

## [1.0.8] — 2026-05-28

- Added Container component with stories and docs.
- Updated RecipeCard to wrap image in ImageContainer.
- Added settings.local.json to .gitignore.
- Set default objectFit to "cover" on Image component.
- Added objectFit prop to Image component.
- Added ImageContainer component with stories and docs.
- Updated docs usage examples to use typed Recipe state instead of any[].
- Live url does not open in new tab. Reverted back to original state with a title.
- Updated live url to open in new tab.
- Created a hook for the CHANGELOG to update every time the package version changes.
- Added a CHANGELOG.md with versioning entries history showing how the system evolved.
- Added storybook build and debug files.
- Removed unused file.

---

## [1.0.7] — 2026-05-05

### Added

- Live Storybook link to README
- `CalorieBar` added to component export list

### Changed

- Updated color token in README and `Introduction.mdx`

---

## [1.0.6] — 2026-03-28

### Changed

- Full color icons now use their original color values
- Updated full color icon build process and design asset path

---

## [1.0.5] — 2026-03-28

### Added

- 4 new icons added to the icon stack with contributor credits in README
- Shared `nutrition.ts` constants file for macro calorie-per-gram values, used by both `CalorieBar` and `NutrientBar`
- `CalorieBar`: macro colors now shown in equal proportions; calculates total calories from macros instead of accepting a `calories` prop
- `NutrientBar`: now represents each macro's percentage contribution to total calories
- `calculateMacroCalories` extracted as a standalone utility function

### Fixed

- Removed `xmlns:svgjs` attribute from icons (invalid SVG prop in React's type system)
- Fixed color value implementation

---

## [1.0.4] — 2026-03-28

### Added

- `maxValue` prop added to `ProgressBar` and `NutrientBar` with prop description
- Background color added to `Footer`

### Changed

- Image height handling adjusted for accurate Storybook rendering
- Storybook viewing styles updated

### Removed

- Chromatic uninstalled
- All references to `RecipeRecommend` removed from stories

---

## [1.0.3] — 2026-03-27

### Removed

- `RecipeRecommend` component — responsibility moved to the consuming app
- `useEdamamSearch` hook — responsibility moved to the consuming app
- `Page` component — no longer needed for testing

---

## [1.0.2] — 2026-03-27

### Changed

- `NavBar` is now router-agnostic: provides nav link appearance and lets the consumer pass their own link component

### Fixed

- Resolved `picomatch` dependency issue

### Documentation

- Updated README with instructions for exporting icons and retrieving the library version via git tags

---

## [1.0.1] — 2026-03-26

### Fixed

- Icons entry point now correctly builds JavaScript into `dist/icons/` — previously only `.d.ts` files were output with no JS
- Added `icons` entry in `vite.config.ts` and `./dist/icons` export mapping in `package.json`

### Added

- Storybook: custom logo, favicon, and icon credits
- Storybook documentation for components and design tokens
- GitHub Actions `deploy.yaml` for automated Storybook deployment
- Live Storybook URL updated in documentation

### Changed

- Updated Node.js version in CI actions (`actions/checkout`, `actions/setup-node`)
- Removed Chromatic references from documentation and config
- Updated `release.yml`

---

## [1.0.0] — 2026-03-24

Initial release of `recipe-tin-ui`, a React component library and design system for the Recipe Tin app.

### Components

- `Button` — primary, ghost, and disabled variants with optional icon
- `ButtonIcon` — icon-only button with filled and outline variants
- `CaloriesBar` — macro nutrient calorie visualization
- `Footer` — app footer
- `FormInput` — text input with label, error state, and disabled state
- `FormSearch` — recipe search form with Edamam API hook
- `Heading` — semantic heading with alignment support
- `Image` — image component with border radius prop
- `IngredientsItem` — ingredient list item
- `Inline` — horizontal flex layout primitive
- `NavBar` — navigation bar
- `NutrientBar` — macro nutrient progress bar
- `ProgressBar` — generic progress indicator
- `Ratings` — star rating display
- `ReadMore` — expandable text
- `RecipeCard` — recipe summary card with image, title, cook time, and ratings
- `RecipeDuration` — cook time display
- `RecipeGallery` — grid of recipe cards
- `Stack` — vertical flex layout primitive

### Design System

- Color, typography, spacing, and border design tokens
- Global CSS base styles and utility classes
- Font configuration

### Icons

- SVG icon set with SVGR pipeline — icons compiled to typed React components with `size`, `color`, and `title` props
- Barrel export at `dist/icons/`

### Infrastructure

- Vite library build outputting ESM and CJS with TypeScript declarations
- `tsconfig.build.json` for declaration-only emit
- `sideEffects: false` for consumer tree-shaking
- GitHub Actions release workflow
- Storybook for component documentation and visual testing
