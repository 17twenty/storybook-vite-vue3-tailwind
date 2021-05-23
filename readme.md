# Vue3 + Storybook + Tailwind

## Creating this package

```bash
npm init vite-app
npm install
npm run dev
```

## Adding storybook

```bash
npx sb init
```

## Adding Tailwind 2.1 with JIT support

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npm install @tailwindcss/forms
npx tailwindcss init -p
```

Edit the postcss.config as follows:

```js
module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
    plugins: [
        require('@tailwindcss/forms'),
  ],
};

```

## TODO

1. Move SB bundler to use Vite ideally
