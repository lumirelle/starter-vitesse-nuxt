<p align="center">
<img src="https://user-images.githubusercontent.com/11247099/140462375-7b7ac4db-35b7-453c-8a05-13d8d20282c4.png" width="600"/>
</p>

<h2 align="center">
<a href="https://github.com/antfu/vitesse">Vitesse</a> Starter for Nuxt 4
</h2><br>

<p align="center">
<a href="https://stackblitz.com/github/lumirelle/starter-vitesse-nuxt"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt=""></a>
</p>

> [!Note]
>
> This is a personal fork of [antfu/vitesse-nuxt](https://github.com/antfu/vitesse-nuxt) with some customizations.

## Features

- 💚 [Nuxt 4](https://nuxt.com/) - SSR, ESR, File-based routing, components auto importing, modules, etc.

- ⚡️ Vite - Instant HMR.

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - The instant on-demand atomic CSS engine.

- 😃 Use icons from any icon sets in Pure CSS, powered by [UnoCSS](https://github.com/unocss/unocss).

- 🔥 The `<script setup>` syntax.

- 🍍 [State Management via Pinia](https://github.com/vuejs/pinia), see [./app/composables/user.ts](./app/composables/user.ts).

- 📑 [Layout system](./app/layouts).

- 📥 APIs auto importing - for Composition API, VueUse and custom composables.

- 🏎 Zero-config cloud functions and deploy.

- 🦾 TypeScript, of course.

- ⚙️ Variant of modules with variant business features.

## Plugins

### Nuxt Modules

- [VueUse](https://github.com/vueuse/vueuse) - collection of useful composition APIs.
- [ColorMode](https://github.com/nuxt-modules/color-mode) - dark and Light mode with auto detection made easy with Nuxt.
- [UnoCSS](https://github.com/unocss/unocss) - the instant on-demand atomic CSS engine.
- [Pinia](https://github.com/vuejs/pinia) - intuitive, type safe, light and flexible Store for Vue.
- [VitePWA](https://github.com/vite-pwa/nuxt) - zero-config PWA Plugin for Nuxt 4.
- [DevTools](https://github.com/nuxt/devtools) - unleash Nuxt Developer Experience.
- [Image](https://github.com/nuxt/image) - Plug-and-play image optimization for Nuxt apps.
- [I18n](https://github.com/nuxt-modules/i18n) - Internationalization (i18n) for Nuxt apps.
- [Device](https://github.com/nuxt-modules/device) - Detect the type of device in your Nuxt applications.
- [Svgo](https://github.com/cpsoinos/nuxt-svgo) - Load optimized SVG files as Vue components.
- [Dayjs](https://github.com/fumeapp/dayjs) - Natively integrate Day.js into Nuxt.
- [Typed Router](https://github.com/victorgarciaesgi/nuxt-typed-router) - Type safe routing for Nuxt.
- [Qrcode](https://github.com/sandros94/nuxt-qrcode) - Provide easy support in reading and creating QR Codes.

## IDE

We recommend using [VS Code](https://code.visualstudio.com/) with [Volar](https://github.com/johnsoncodehk/volar) to get the best experience (You might want to disable [Vetur](https://vuejs.github.io/vetur/) if you have it).

## Variations

- [vitesse](https://github.com/antfu/vitesse) - Opinionated Vite Starter Template
- [vitesse-lite](https://github.com/antfu/vitesse-lite) - Lightweight version of Vitesse
- [vitesse-nuxt-bridge](https://github.com/antfu/vitesse-nuxt-bridge) - Vitesse for Nuxt 2 with Bridge
- [vitesse-webext](https://github.com/antfu/vitesse-webext) - WebExtension Vite starter template

## Try it now!

### Online

<a href="https://stackblitz.com/github/lumirelle/starter-vitesse-nuxt"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt=""></a>

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/lumirelle/starter-vitesse-nuxt/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit lumirelle/starter-vitesse-nuxt my-nuxt-app
cd my-nuxt-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```
