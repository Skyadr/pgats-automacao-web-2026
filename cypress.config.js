const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 1, // Adicionando a configuração global de retries para os testes
  reporter: 'cypress-mochawesome-reporter',
  //retries: {
    //runMode: 2, // Número de tentativas de reexecução em modo de execução ci (cypress run)
    //openMode: 1, // Número de tentativas de reexecução em modo interativo (cypress open)
    
  e2e: {
    baseUrl: 'https://automationexercise.com',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
