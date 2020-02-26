var allTestFiles = []
var TEST_REGEXP = /(spec|test)\.js$/i
var BASE_URL = 'base';
var BASE_URL_REGEXP = /^\/base\/js\/|\.js$/g;


Object.keys(window.__karma__.files).forEach(function (file) {
  if (TEST_REGEXP.test(file)) {
    var normalizedTestModule = file.replace(BASE_URL_REGEXP, '')
    allTestFiles.push(normalizedTestModule)
  }
})

require.config({
  baseUrl: BASE_URL,
  deps: allTestFiles,
  callback: window.__karma__.start
})
