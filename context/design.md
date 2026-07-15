# Website Design

## Purpose

This is Jarryd Adaens' personal GitHub Pages website. It has three closely
related jobs:

1. Provide the public support, contact, and privacy pages required when Jarryd
   publishes apps through software stores.
2. Advertise Jarryd and the software he creates.
3. Act as a lightweight portfolio of apps, open-source projects, games,
   technical writing published on Medium, and earlier game-development work.

The site should make it easy for an app user or store reviewer to find support
and privacy information, while also giving prospective users, collaborators,
and employers a quick, credible overview of Jarryd's work.

## Design Intent

The site must remain simple, clean, and easy to maintain. Content and direct
navigation are more important than visual novelty.

Design decisions should favour:

- Clear page titles, concise summaries, and obvious links.
- Fast-loading pages with very few moving parts.
- A consistent visual language across every section.
- Responsive layouts that work on desktop and mobile screens.
- Readable typography, good contrast, semantic HTML, and keyboard-friendly
  controls.
- Stable public URLs for store listings, support information, and privacy
  policies.
- Honest, current information instead of placeholders or unnecessary marketing
  language.
- Low maintenance and graceful operation without JavaScript.

Light and dark colour schemes are supported, including an automatic mode that
follows the visitor's system preference. The restrained palette, system fonts,
modest spacing, cards, and limited animation are consistent with the intended
clean presentation.

## Technology

The website is a dependency-free static site hosted by GitHub Pages.

- **Markup:** Hand-authored HTML5 files. Pages use semantic elements such as
  `header`, `nav`, `main`, `section`, `article`, and `footer`.
- **Styling:** A shared vanilla CSS stylesheet at `assets/css/site.css`. It uses
  CSS custom properties, responsive media queries, CSS Grid and Flexbox, system
  fonts, and light/dark theme variables.
- **Behaviour:** Small, framework-free JavaScript files in `assets/js/` provide
  progressive enhancements:
  - `theme-boot.js` restores a saved theme early to avoid an incorrect initial
    colour scheme.
  - `theme-toggle.js` cycles between automatic, light, and dark modes and saves
    the choice in browser `localStorage`.
  - `nav.js` marks the current navigation section and closes an open dropdown
    when the visitor clicks away.
- **Hosting:** GitHub Pages serves the repository's static files directly.
- **Build and runtime:** There is no site generator, package manager, bundler,
  framework, compilation step, server-side application, API, database, or
  contact-form backend.
- **External dependencies:** The site does not load a web-font package or a
  third-party JavaScript or CSS library.

Root-relative URLs such as `/assets/css/site.css` and `/apps/kung-fu.html`
assume the site is published at the root of its GitHub Pages domain, which
matches a GitHub user site repository.

## Information Architecture

The current site is organised as a small collection of standalone pages:

- **Home (`index.html`):** Introduces Jarryd's software and points visitors to
  the main sections.
- **Apps:** The navigation links directly to the ROG Ally Battery Indicator
  product page. There is no intermediate Apps overview.
- **AI Engineering:** The navigation links directly to Kung Fu and the Agentic
  Rails overview at `open-source/agentic-rails.html`. It will also link directly
  to the four Agentic Rails Git repositories once their names and URLs are
  supplied.
- **Games:** The navigation links directly to Soup Tycoon, block-game-2, and the
  compact Indie page for earlier game-development work. There is no intermediate
  Games overview.
- **Blog:** Links visitors to Jarryd's writing on Medium at
  `https://medium.com/@jarryd.adaens`; blog posts are not hosted in this
  repository.
- **Privacy (`privacy.html`):** A public general privacy policy, with room for
  app-specific privacy details on product pages.
- **Support (`support.html`):** Public support guidance and contact routes for
  users, privacy enquiries, and store review requirements.

The same header markup is used on every content page. Apps, AI Engineering, and
Games are direct dropdown menus. The shared footer keeps privacy, support, Kung
Fu, and blog links available throughout the site. At present, this shared
structure is repeated in each HTML file rather than generated from templates.

## Content Principles

- Support and privacy content is operational content, not decoration. It must
  remain easy to locate and accurate for the apps being published.
- Each project page should quickly explain what the product is, who it is for,
  its current status, and where to learn more or get help.
- Portfolio content should demonstrate real work and link to live products,
  repositories, writing, or other evidence wherever possible.
- App-specific behaviour takes precedence over generic claims. If an app's data
  handling differs from the general privacy policy, its page must say so
  explicitly.
- Navigation and page structure should stay understandable as new apps and
  projects are added.

## Constraints and Non-Goals

The current site is intentionally not a web application. It does not need user
accounts, dynamic content, a CMS, analytics, a database, or a custom backend.
Those capabilities should only be introduced when a concrete requirement
justifies the additional privacy, maintenance, and deployment cost.

Likewise, visual complexity should not be added merely to make the site feel
more elaborate. The desired impression is straightforward, professional, and
personal.
