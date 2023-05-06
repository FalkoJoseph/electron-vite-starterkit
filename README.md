# electron-starterkit

## Features

- Hot module reloading
- Tailwind 3
- Vue 3
- Prettier

## Usage

Run development server

```sh
npm run dev
```

Build production files

```sh
npm run build
```

## Directory

```diff
+ ├─┬ electron
+ │ ├─┬ main
+ │ │ └── index.ts    entry of Electron-Main
+ │ └─┬ preload
+ │   └── index.ts    entry of Preload-Scripts
  ├─┬ src
  │ └── main.ts       entry of Electron-Renderer
  ├── index.html
  ├── package.json
  └── vite.config.ts
```

## Credits

- [electron-vite](https://github.com/electron-vite/electron-vite-vue)

Copyright Falko Joseph (c) 2023
