<img src="http://i.imgur.com/OqurdD1.jpg" width="530">

[![GitHub release](https://img.shields.io/github/release/PolymerX/expenses-manager.svg?style=flat-square)](https://github.com/PolymerX/expenses-manager)
[![Build Status](https://travis-ci.org/PolymerX/expenses-manager.svg?style=flat-square&branch=master)](https://travis-ci.org/PolymerX/expenses-manager)
[![GitHub issues](https://img.shields.io/github/issues/PolymerX/expenses-manager.svg?style=flat-square)](https://github.com/PolymerX/expenses-manager/issues)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)
[![Polymer Skeleton](https://img.shields.io/badge/polymerX-SKELETON-435877.svg?style=flat-square)](https://github.com/PolymerX/expenses-manager)

# expenses-manager - Built using the Polymer Skeleton

> Example on how to use Redux with Polymer and specifically with Polymer 3.

This a dead simple example on how to use Redux with Polymer 3. We re-adapt the awesome [PolymerRedux]() for working with Polymer 3 (but it is really one line of code) and using as base project the [Polymer Skeleton]().


## Usage

Clone this repository:

```bash
git clone https://github.com/PolymerX/expenses-manager [your-app-name]
```

Remove the `.git` folder and change details within:

* `package.json`
* `src/manifest.json`

Then start building your application!

```bash
yarn
```

#### Developing

Start the `webpack-dev-server` on localhost `http://localhost:3000` with hot-reload and watch on `.postcss` files.

For "oldie" browsers, transpiling also Javascript `class`. Works on `Firefox`:

```bash
yarn dev
```

For modern browsers with `class` support. Wokrs on `Chrome` and `Safari`:

```bash
yarn dev:module
```

#### Test

XO for code style, Stylelint for PostCSS linting, and WCT for components tests:

```bash
yarn test
```

Run [Lighthouse](https://github.com/GoogleChrome/lighthouse) for testing the PWA capabilities:

```bash
yarn test:lighthouse
```

#### Build

(Almost) production-ready (`webpack --optimize-minimze` and copy statics) to `dist` folder. Also generating Service Workers. The command will also create the `module` version of the `bundle` ready to be loaded as `type=module`.

```bash
yarn build
```


## Styling components with PostCSS and CSSNext

During development `.postcss` files will be watched, compiled and injected to the relative `<style>` tag within the component template. The CSS is scoped to the component so don't worry about CSS specificity, you can also use `:host`, `:host-context` and `:root` selectors. Read more about [styling web components](https://www.polymer-project.org/2.0/docs/devguide/style-shadow-dom) and [custom CSS properties](https://www.polymer-project.org/2.0/docs/devguide/custom-css-properties).

[Cssnext](http://cssnext.io/) also include Autoprefixer plugin, if you don't know how it work (...and you should), it allow you to write CSS without worry about vendor prefixes. Just write your css properties prefix-free and let autoprefixer do the work for you when compiling.

**How about commons styles?**
You can simply `import` any other `.postcss` file within your main component `.js` file and print it inside the `template()`.


## How Polymer 3 is imported

We are currently used a modified version of the `@polymer/polymer` official NPM version. The `flat` property within the `package.json` is causing some problem with the load dependency system of `webpack`.


## [**@webcomponents/webcomponentsjs**](https://github.com/webcomponents/webcomponentsjs)

We are getting the `webpcomponents-lite.js` polyfill from GitHub using NPM/Yarn and copy it into a `vendor` folder with a `Node` script. Currently, the `webcomponents-loader.js` has a bug for Firefox and we can't use it.


## custom-element-es5-adpater.js

Loading the `custom-element-es5-adapter.js` is necessary because the `custom elements` [known(1)](https://stackoverflow.com/questions/43520535/class-constructor-polymerelement-cannot-be-invoked-without-new/45097891#45097891) [issue(2)](https://github.com/webcomponents/custom-elements#es5-vs-es2015) (the lovely `Uncaught TypeError: Class constructor PolymerElement cannot be invoked without 'new'`) about ES6 `classes`, but just on **old browsers**.


## License

PolymerX © MIT

