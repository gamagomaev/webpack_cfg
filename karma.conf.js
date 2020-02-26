
module.exports = function (config) {
  process.env.BABEL_ENV = 'karma';
  const patternPath = 'src/tests/**/*.spec.js';
  config.set({
    client: {
      clearContext: false,
    },
    basePath: './',
    frameworks: ['jasmine', 'requirejs'],
    files: [
      'test-main.js',
      { pattern: patternPath, included: false }
    ],
    exclude: [
    ],
    preprocessors: {
      '**/*.+(spec|test).+(js|jsx|mjs)': ['webpack']
    },
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
    },
    webpackMiddleware: {
      stats: 'errors-only'
    },
    reporters: ['kjhtml', 'progress'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
      reporters: [{ type: 'html' }, { type: 'lcov' }],
    },
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-jasmine-html-reporter',
      'karma-phantomjs-launcher',
      'karma-requirejs',
      'karma-sourcemap-loader',
      'karma-webpack',
      'requirejs',
      'karma-promise'
    ],
    jasmineHtmlReporter: {
      suppressFailed: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
