# Neutrino preset to use Prettier with ESLint in a friendly way

`neutrino-preset-prettier-eslint` is a [Neutrino](https://neutrino.js.org/) preset to use [Prettier](https://github.com/prettier/prettier) in a way it doesn't conflict with [ESLint](http://eslint.org/).

## Features

- Almost zero configuration to start making your code prettier 💅
- Turns off all ESLint rules that are unnecessary or might conflict with prettier (using [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier))
- Runs Prettier as an ESLint rule, allowing keep the consistency across the team and format validation on CI (using [`eslint-plugin-prettier`](https://github.com/not-an-aardvark/eslint-plugin-prettier))
- Format the code from command line like `npm run format` (using [`prettier-eslint`](https://github.com/prettier/prettier-eslint))

## ESLint preset

This preset supports integration with ESLint through the use of any preset based on [`neutrino-middleware-eslint`](https://neutrino.js.org/middleware/neutrino-middleware-eslint/), as for example [`neutrino-preset-airbnb-base`](https://neutrino.js.org/presets/neutrino-preset-airbnb-base/).

Just follow the Neutrino's documentation instructions for the chosen preset and after that, the instructions bellow.

## Requirements

- Node.js v6.9+
- NPM or Yarn client
- Neutrino v5
- Neutrino ESLint preset based on `neutrino-middleware-eslint`

## Installation

`neutrino-preset-prettier-eslint` can be installed via the Yarn or NPM clients.

Inside your project, make sure `neutrino`, and `neutrino-preset-prettier-eslint` are development dependencies.

As mentioned above you will need an ESLint preset of your choice.

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

We recommend setup Neutrino with `neutrino.use` in your package.json.

Be aware that the order of the presets are important.

For example, if you are using [`neutrino-preset-airbnb-base`](https://neutrino.js.org/presets/neutrino-preset-airbnb-base/) and [`neutrino-preset-web`](https://github.com/mozilla-neutrino/neutrino-dev/tree/master/packages/neutrino-preset-web):

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

Then, create the `format` and `lint` scripts in your package.json scripts section:

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

ps: [yarn users](https://github.com/yarnpkg/yarn/issues/760) will also need to install [`prettier-eslint-cli`](https://github.com/prettier/prettier-eslint-cli) to use the format CLI:

```bash
❯ yarn add --dev prettier-eslint-cli
```

```bash
❯ yarn run format
```
#### NPM

```bash
❯ npm run format
```

You can also lint your code. It will use Prettier for format rules, and ESLint for any other rules that you have configured:

#### Yarn

```bash
❯ yarn run lint
```
#### NPM

```bash
❯ npm run lint
```

This can be very useful to ensure, on a Continuous Integration environment, that the code is consistent with prettier format.

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
