# Neutrino preset to integrate Prettier and ESLint in a friendly way

`neutrino-preset-prettier-eslint` is a [Neutrino](https://neutrino.js.org/) preset that integrates the [Prettier](https://github.com/prettier/prettier) formatter with [neutrino-preset-airbnb-base](https://neutrino.js.org/presets/neutrino-preset-airbnb-base).

## Features

- Zero upfront configuration necessary to start making your code prettier 💅
- Turns off all ESLint rules that are unnecessary or might conflict with prettier (using [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier))
- Runs Prettier as an ESLint rule, allowing keep the consistency across the team and the CI (using [eslint-plugin-prettier](https://github.com/not-an-aardvark/eslint-plugin-prettier))
- Format the code from the command line like `npm run format` (using [prettier-eslint](https://github.com/prettier/prettier-eslint))

## Requirements

- Node.js v6.9+
- Yarn or NPM client
- Neutrino v5, Neutrino build preset
- `neutrino-preset-airbnb-base`

## Installation

`neutrino-preset-prettier-eslint` can be installed via the Yarn or NPM clients.

Inside your project, make sure `neutrino`, `neutrino-preset-airbnb-base` and `neutrino-preset-prettier-eslint` are development dependencies.

You will also be using another Neutrino preset for building your application source code.

#### Yarn

```bash
❯ yarn add --dev neutrino-preset-prettier-eslint
```

#### NPM

```bash
❯ npm install --save-dev neutrino-preset-prettier-eslint
```

## Quickstart

After adding the preset to your Neutrino-built project, edit your project's package.json to add the preset for prettier **after** `neutrino-preset-airbnb-base` and **before** your build preset.

We recommend setup Neutrino with `neutrino.use` in your package.json.

For example, if you are building your project using `neutrino-preset-web`:

```json
{
  "neutrino": {
    "use": [
      "neutrino-preset-airbnb-base",
      "neutrino-preset-prettier-eslint",
      "neutrino-preset-web"
    ]
  }
}
```

Also, create the `format` script in your package.json scripts section:

```json
"scripts": {
  "start": "neutrino start",
  "build": "neutrino build",
  "lint": "eslint \"src/**/*.js\"",
  "format": "prettier-eslint --write \"src/**/*.js\""
}
```

Now you can format all your JS code inside src folder with:

#### Yarn

```bash
❯ yarn run format
```
#### NPM

```bash
❯ npm run format
```

You can also lint your code, and it will use prettier for format rules, and ESLint for any other rules that you have configured:

#### Yarn

```bash
❯ yarn run lint
```
#### NPM

```bash
❯ npm run lint
```

This can be very useful to ensure on a Continuous Integration environment that the code is consistent with prettier format.

## Editor integration

You don't need to use the command line during your development process. Prettier and ESLint have great support on most popular editors.

#### Atom integration

[Prettier for Atom](https://github.com/prettier/prettier-atom) is the official package to integrate Prettier on Atom. Make sure you enable the prettier-eslint on the package settings and you must be good to go.

Sometimes it would be necessary to restart the editor after changing settings, so if something is not working as expected, maybe this would solve the issue.

During my setup I came across an issue with Atom and `neutrino-preset-airbnb-base` that was breaking the integration.

I had to do an ugly workaround to make it work. In simple terms, you will probably need to install this fork of `nodejs-depd` on your project:

https://github.com/fnmunhoz/nodejs-depd

#### Yarn

```bash
❯ yarn add --dev github:fnmunhoz/nodejs-depd
```
#### NPM

```bash
❯ npm install --save-dev github:fnmunhoz/nodejs-depd
```

The fork just removes an eval call, and I believe it will not break anything. I will try to solve this in a more elegant way in the near future.

## Contributing

This is still a work in progress. It simplifies my setup and I hope it simplifies others people setup as well.

I would love to receive contributions, feel free to open a Pull Request or create an Issue.

Any feedback is welcome ♥️.
