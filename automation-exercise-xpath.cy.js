/// <reference types="cypress" />



describe('Automation Exercise', () => {
  it('Cadastrar e deletar um usuário com sucesso', () => {
    cy.visit('https://automationexercise.com/');
    //verificar se a página inicial foi carregada com sucesso
    //cy.get('body').should('be.visible');
    //cy.screenshot();
    //cy.get() -> elemento baseado em seletor css ou xpath
    //cy.contains() -> elemento baseado em texto

    //clicar no botão de login e iniciar o cadastro de um novo usuário
    cy.xpath("//a[contains(@href, 'login')]").click();
    
    cy.url().should('include', 'login'); //valida url atual e se contem a palavra login
   
    //Cadastrar um usuário com sucesso
    const timestamp = Date.now();
    const email = `pgats-aut-test${timestamp}@test.com`;

    cy.xpath('//input[@data-qa="signup-name"]').type('Aut-PGATS');
    cy.xpath('//input[@data-qa="signup-email"]').type(email);
    cy.xpath('//button[@data-qa="signup-button"]').click();

    

    //Preencher o formulário de cadastro
    cy.xpath('//input[@id="id_gender1"]').check();
    cy.xpath('//input[@data-qa="password"]').type('123456');
    cy.xpath('//select[@data-qa="days"]').select('25');
    cy.xpath('//select[@data-qa="months"]').select('July');
    cy.xpath('//select[@data-qa="years"]').select('1981');
    cy.xpath('//input[@id="newsletter"]').check();
    cy.xpath('//input[@id="optin"]').check();
    cy.xpath('//input[@data-qa="first_name"]').type('Aut-PGATS');
    cy.xpath('//input[@data-qa="last_name"]').type('Test');
    cy.xpath('//input[@data-qa="address"]').type('Rua Teste, 123');
    cy.xpath('//select[@data-qa="country"]').select('United States');
    cy.xpath('//input[@data-qa="state"]').type('California');
    cy.xpath('//input[@data-qa="city"]').type('Los Angeles');
    cy.xpath('//input[@data-qa="zipcode"]').type('90001');
    cy.xpath('//input[@data-qa="mobile_number"]').type('+1 123 456 7890');
    cy.xpath('//button[@data-qa="create-account"]').click();

    //Verificar se o cadastro foi realizado com sucesso
    //Verificar se o cadastro foi realizado com sucesso
    cy.xpath('//h2[@data-qa="account-created"]').should('be.visible');
    cy.xpath('//a[@data-qa="continue-button"]').click();
    //cy.screenshot();

    //Verificar se o usuário está logado
    cy.xpath('//a[.//b[contains(., "Aut-PGATS")]]').should('contain', 'Aut-PGATS');
    //cy.screenshot();

  //Deletar usuário cadastrado
    //Deletar usuário
    cy.xpath('//a[@href="/delete_account"]').click();

    //Verificar se o usuário foi deletado com sucesso
    cy.xpath('//h2[@data-qa="account-deleted"]').should('be.visible');
    cy.xpath('//a[@data-qa="continue-button"]').click();
    
    cy.xpath("//a[contains(@href, 'login')]").should('be.visible');

  });
  it('efetuar o login e deletar usuário com sucesso', () => {
    cy.visit('https://automationexercise.com/');
    //verificar se a página inicial foi carregada com sucesso
    //cy.get('body').should('be.visible');
    //cy.screenshot();
    //clicar no botão de login
    cy.xpath("//a[contains(@href, 'login')]").click();


    //cy.get() -> elemento baseado em seletor css ou xpath
    //cy.contains() -> elemento baseado em texto

    //verificar se mensagem 'New User Signup!' apareceu na tela
    cy.xpath('//h2[contains(., "New User Signup!")]').should('be.visible');
    //Cadastrar um usuário com sucesso
    const timestamp = Date.now();
    let email = `pgats-aut-test${timestamp}@test.com`;

    cy.xpath('//input[@data-qa="signup-name"]').type('Aut-PGATS');
    cy.xpath('//input[@data-qa="signup-email"]').type(email);
    cy.xpath('//button[@data-qa="signup-button"]').click();

    //Preencher o formulário de cadastro
    cy.xpath('//input[@id="id_gender1"]').check();
    cy.xpath('//input[@data-qa="password"]').type('123456');
    cy.xpath('//select[@data-qa="days"]').select('25');
    cy.xpath('//select[@data-qa="months"]').select('July');
    cy.xpath('//select[@data-qa="years"]').select('1981');
    cy.xpath('//input[@id="newsletter"]').check();
    cy.xpath('//input[@id="optin"]').check();
    cy.xpath('//input[@data-qa="first_name"]').type('Aut-PGATS');
    cy.xpath('//input[@data-qa="last_name"]').type('Test');
    cy.xpath('//input[@data-qa="address"]').type('Rua Teste, 123');
    cy.xpath('//select[@data-qa="country"]').select('United States');
    cy.xpath('//input[@data-qa="state"]').type('California');
    cy.xpath('//input[@data-qa="city"]').type('Los Angeles');
    cy.xpath('//input[@data-qa="zipcode"]').type('90001');
    cy.xpath('//input[@data-qa="mobile_number"]').type('+1 123 456 7890');
    cy.xpath('//button[@data-qa="create-account"]').click();

    //Verificar se o cadastro foi realizado com sucesso
    
    cy.xpath('//h2[@data-qa="account-created"]').should('be.visible');
    cy.xpath('//a[@data-qa="continue-button"]').click();
    //cy.screenshot();

    //Verificar se o usuário está logado
   
    cy.xpath('//a[.//b[contains(., "Aut-PGATS")]]').should('contain', 'Aut-PGATS');
    cy.xpath("//a[contains(@href, 'logout')]").click();

    //verificar se o botão de login está visível
    cy.xpath("//a[contains(@href, 'login')]").should('be.visible');
    
    //efetuar login
    
    cy.xpath('//input[@data-qa="login-email"]').should('be.visible');
    cy.xpath('//input[@data-qa="login-email"]').type(email);
    cy.xpath('//input[@data-qa="login-password"]').type('123456');
    cy.xpath('//button[@data-qa="login-button"]').click();

    //Verificar se o usuário está logado
    cy.xpath('//a[contains(., "Aut-PGATS")]').should('be.visible');
    //Deletar usuário
    cy.xpath('//a[@href="/delete_account"]').click();
    //Verificar se o usuário foi deletado com sucesso
    cy.xpath('//h2[@data-qa="account-deleted"]').should('be.visible');
    cy.xpath('//a[@data-qa="continue-button"]').click();
  });
  it('Validar mensagem de erro ao tentar login com credenciais inválidas', () => {
    
    cy.visit('https://automationexercise.com/');
    //verificar se a página inicial foi carregada com sucesso
    

    //cy.screenshot();
    //clicar no botão de login
    cy.xpath("//a[contains(@href, 'login')]").click();
    cy.url().should('include', 'login'); //valida url atual e se contem a palavra login
    //informando credenciais inválidas
    const timestamp = Date.now();

    cy.xpath('//input[@data-qa="login-email"]').should('be.visible');
    cy.xpath('//input[@data-qa="login-email"]').type(`pgats-aut-test${timestamp}@test.com`);
    cy.xpath('//input[@data-qa="login-password"]').type('123456');
    cy.xpath('//button[@data-qa="login-button"]').click();
    //Verificar se a mensagem de erro foi exibida
    cy.xpath('//div[contains(@class, "login-form")]//form/p[contains(., "Your email or password is incorrect!")]').should('be.visible');
  });
  it('efetuar o logout e retorno para página inicial', () => {
    cy.visit('https://automationexercise.com/');
    //verificar se a página inicial foi carregada com sucesso
    //cy.screenshot();
    //clicar no botão de login
    cy.xpath("//a[contains(@href, 'login')]").click();
    cy.url().should('include', 'login'); //valida url atual e se contem a palavra login

    //cy.get() -> elemento baseado em seletor css ou xpath
    //cy.contains() -> elemento baseado em texto

    //verificar se mensagem 'New User Signup!' apareceu na tela
    cy.xpath('//h2[contains(., "New User Signup!")]').should('be.visible');
    //Cadastrar um usuário com sucesso
    const timestamp = Date.now();
    let email = `pgats-aut-test${timestamp}@test.com`;

    cy.xpath('//input[@data-qa="signup-name"]').type('Aut-PGATS');
    cy.xpath('//input[@data-qa="signup-email"]').type(email);
    cy.xpath('//button[@data-qa="signup-button"]').click();

    //Preencher o formulário de cadastro
    cy.xpath('//input[@id="id_gender1"]').check();
    cy.xpath('//input[@data-qa="password"]').type('123456');
    cy.xpath('//select[@data-qa="days"]').select('25');
    cy.xpath('//select[@data-qa="months"]').select('July');
    cy.xpath('//select[@data-qa="years"]').select('1981');
    cy.xpath('//input[@id="newsletter"]').check();
    cy.xpath('//input[@id="optin"]').check();
    cy.xpath('//input[@data-qa="first_name"]').type('Aut-PGATS');
    cy.xpath('//input[@data-qa="last_name"]').type('Test');
    cy.xpath('//input[@data-qa="address"]').type('Rua Teste, 123');
    cy.xpath('//select[@data-qa="country"]').select('United States');
    cy.xpath('//input[@data-qa="state"]').type('California');
    cy.xpath('//input[@data-qa="city"]').type('Los Angeles');
    cy.xpath('//input[@data-qa="zipcode"]').type('90001');
    cy.xpath('//input[@data-qa="mobile_number"]').type('+1 123 456 7890');
    cy.xpath('//button[@data-qa="create-account"]').click();

    //Verificar se o cadastro foi realizado com sucesso
    
    cy.xpath('//h2[@data-qa="account-created"]').should('be.visible');
    cy.xpath('//a[@data-qa="continue-button"]').click();
    //cy.screenshot();

    //Verificar se o usuário está logado
    cy.xpath('//a[.//b[contains(., "Aut-PGATS")]]').should('contain', 'Aut-PGATS');

    //efetuar o logout e verificar se a página inicial foi carregada com sucesso
    cy.xpath("//a[contains(@href, 'logout')]").click();
    cy.xpath('//div[contains(@class, "login-form")]/h2').should('be.visible');
    cy.xpath("//a[contains(@href, 'logout')]").should('not.exist');
    cy.url().should('include', 'login'); //valida url atual e se contem a palavra login
  });
  it('Registrar usuário já cadastrado', () => {
    cy.visit('https://automationexercise.com/');
    //verificar se a página inicial foi carregada com sucesso
    
    //cy.screenshot();
    //clicar no botão de login
    cy.xpath("//a[contains(@href, 'login')]").click();
    cy.url().should('include', 'login'); //valida url atual e se contem a palavra login


    //cy.get() -> elemento baseado em seletor css ou xpath
    //cy.contains() -> elemento baseado em texto

    //verificar se mensagem 'New User Signup!' apareceu na tela
    cy.xpath('//h2[contains(., "New User Signup!")]').should('be.visible');
    //Cadastrar um usuário com sucesso
    const timestamp = Date.now();
    let email = `pgats-aut-test${timestamp}@test.com`;

    cy.xpath('//input[@data-qa="signup-name"]').type('Aut-PGATS');
    cy.xpath('//input[@data-qa="signup-email"]').type(email);
    cy.xpath('//button[@data-qa="signup-button"]').click();

    //Preencher o formulário de cadastro
    cy.xpath('//input[@id="id_gender1"]').check();
    cy.xpath('//input[@data-qa="password"]').type('123456');
    cy.xpath('//select[@data-qa="days"]').select('25');
    cy.xpath('//select[@data-qa="months"]').select('July');
    cy.xpath('//select[@data-qa="years"]').select('1981');
    cy.xpath('//input[@id="newsletter"]').check();
    cy.xpath('//input[@id="optin"]').check();
    cy.xpath('//input[@data-qa="first_name"]').type('Aut-PGATS');
    cy.xpath('//input[@data-qa="last_name"]').type('Test');
    cy.xpath('//input[@data-qa="address"]').type('Rua Teste, 123');
    cy.xpath('//select[@data-qa="country"]').select('United States');
    cy.xpath('//input[@data-qa="state"]').type('California');
    cy.xpath('//input[@data-qa="city"]').type('Los Angeles');
    cy.xpath('//input[@data-qa="zipcode"]').type('90001');
    cy.xpath('//input[@data-qa="mobile_number"]').type('+1 123 456 7890');
    cy.xpath('//button[@data-qa="create-account"]').click();

    //Verificar se o cadastro foi realizado com sucesso
    
    cy.xpath('//h2[@data-qa="account-created"]').should('be.visible');
    cy.xpath('//a[@data-qa="continue-button"]').click();
    
    //efetuar o logout e verificar se a página inicial foi carregada com sucesso
    cy.xpath("//a[contains(@href, 'logout')]").click();
    cy.url().should('include', 'login'); //valida url atual e se contem a palavra login


    //Tentar cadastrar o mesmo usuário novamente
    
    cy.xpath('//input[@data-qa="signup-name"]').type('Aut-PGATS');
    cy.xpath('//input[@data-qa="signup-email"]').type(email);
    cy.xpath('//button[@data-qa="signup-button"]').click();

    //Verificar se a mensagem de erro foi exibida
    cy.xpath('//div[contains(@class, "signup-form")]//form/p[contains(., "Email Address already exist!")]').should('be.visible');
  });
});