const merge = require('deepmerge');

module.exports = neutrino => {
  neutrino.config.module.rule('lint').use('eslint').tap(options =>
    merge(options, {
      baseConfig: {
        extends: ['prettier'],
      },
      plugins: ['prettier'],
      rules: {
        'prettier/prettier': [
          'error',
          { singleQuote: true },
        ],
      },
    })
  );
};
