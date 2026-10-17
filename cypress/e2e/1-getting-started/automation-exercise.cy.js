/// <reference types="cypress" />



describe('Automation Exercise', () => {
  it('Cadastrar e deletar um usuário com sucesso', () => {
    cy.visit('/');
    //verificar se a página inicial foi carregada com sucesso
    cy.get('body').should('be.visible');
    //cy.screenshot();
    //cy.get() -> elemento baseado em seletor css ou xpath
    //cy.contains() -> elemento baseado em texto

    //clicar no botão de login e iniciar o cadastro de um novo usuário
    cy.get('a[href*=login]').click();
    cy.url().should('include', 'login'); //valida url atual e se contem a palavra login
   
    //Cadastrar um usuário com sucesso
    const timestamp = Date.now();
    const email = `pgats-aut-test${timestamp}@test.com`;

    cy.get('[data-qa="signup-name"]').type('Aut-PGATS');
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();

    

    //Preencher o formulário de cadastro
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').type('123456');
    cy.get('[data-qa="days"]').select('25');
    cy.get('[data-qa="months"]').select('July');
    cy.get('[data-qa="years"]').select('1981');
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').type('Aut-PGATS');
    cy.get('[data-qa="last_name"]').type('Test');
    cy.get('[data-qa="address"]').type('Rua Teste, 123');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').type('California');
    cy.get('[data-qa="city"]').type('Los Angeles');
    cy.get('[data-qa="zipcode"]').type('90001');
    cy.get('[data-qa="mobile_number"]').type('+1 123 456 7890');
    cy.get('[data-qa="create-account"]').click();

    //Verificar se o cadastro foi realizado com sucesso
    //Verificar se o cadastro foi realizado com sucesso
    cy.get('[data-qa="account-created"]').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
    //cy.screenshot();

    //Verificar se o usuário está logado
    cy.get('a > b').should('contain', 'Aut-PGATS');
    //cy.screenshot();

  //Deletar usuário cadastrado
    //Deletar usuário
    cy.get('a[href="/delete_account"]').click();

    //Verificar se o usuário foi deletado com sucesso
    cy.get('[data-qa="account-deleted"]').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();

  });
  it('efetuar o login e deletar usuário com sucesso', () => {
    cy.visit('/');
    //verificar se a página inicial foi carregada com sucesso
    cy.get('body').should('be.visible');
    //cy.screenshot();
    //clicar no botão de login
    cy.get('a[href*=login]').click();


    //cy.get() -> elemento baseado em seletor css ou xpath
    //cy.contains() -> elemento baseado em texto

    //verificar se mensagem 'New User Signup!' apareceu na tela
    cy.get('h2').contains('New User Signup!').should('be.visible');
    //Cadastrar um usuário com sucesso
    const timestamp = Date.now();
    let email = `pgats-aut-test${timestamp}@test.com`;

    cy.get('[data-qa="signup-name"]').type('Aut-PGATS');
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();

    //Preencher o formulário de cadastro
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').type('123456');
    cy.get('[data-qa="days"]').select('25');
    cy.get('[data-qa="months"]').select('July');
    cy.get('[data-qa="years"]').select('1981');
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').type('Aut-PGATS');
    cy.get('[data-qa="last_name"]').type('Test');
    cy.get('[data-qa="address"]').type('Rua Teste, 123');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').type('California');
    cy.get('[data-qa="city"]').type('Los Angeles');
    cy.get('[data-qa="zipcode"]').type('90001');
    cy.get('[data-qa="mobile_number"]').type('+1 123 456 7890');
    cy.get('[data-qa="create-account"]').click();

    //Verificar se o cadastro foi realizado com sucesso
    
    cy.get('[data-qa="account-created"]').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
    //cy.screenshot();

    //Verificar se o usuário está logado
   
    cy.get('a > b').should('contain', 'Aut-PGATS');
    cy.get('a[href*=logout]').click();

    //verificar se o botão de login está visível
    cy.get('a[href*=login]').should('be.visible');
    
    //efetuar login
    
    cy.get('[data-qa="login-email"]').should('be.visible');
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type('123456');
    cy.get('[data-qa="login-button"]').click();

    //Verificar se o usuário está logado
    cy.get('a').contains('Aut-PGATS').should('be.visible');
    //Deletar usuário
    cy.get('a[href="/delete_account"]').click();
    //Verificar se o usuário foi deletado com sucesso
    cy.get('[data-qa="account-deleted"]').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
  });
  it('Validar mensagem de erro ao tentar login com credenciais inválidas', () => {
    
    cy.visit('/');
    //verificar se a página inicial foi carregada com sucesso
    

    //cy.screenshot();
    //clicar no botão de login
    cy.get('a[href*=login]').click();
    cy.url().should('include', 'login'); //valida url atual e se contem a palavra login
    //informando credenciais inválidas
    const timestamp = Date.now();

    cy.get('[data-qa="login-email"]').should('be.visible');
    cy.get('[data-qa="login-email"]').type(`pgats-aut-test${timestamp}@test.com`);
    cy.get('[data-qa="login-password"]').type('123456');
    cy.get('[data-qa="login-button"]').click();
    //Verificar se a mensagem de erro foi exibida
    cy.get('.login-form > form > p').contains('Your email or password is incorrect!').should('be.visible');
  });
  it('efetuar o logout e retorno para página inicial', () => {
    cy.visit('/');
    //verificar se a página inicial foi carregada com sucesso
    //cy.screenshot();
    //clicar no botão de login
    cy.get('a[href*=login]').click();
    cy.url().should('include', 'login'); //valida url atual e se contem a palavra login

    //cy.get() -> elemento baseado em seletor css ou xpath
    //cy.contains() -> elemento baseado em texto

    //verificar se mensagem 'New User Signup!' apareceu na tela
    cy.get('h2').contains('New User Signup!').should('be.visible');
    //Cadastrar um usuário com sucesso
    const timestamp = Date.now();
    let email = `pgats-aut-test${timestamp}@test.com`;

    cy.get('[data-qa="signup-name"]').type('Aut-PGATS');
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();

    //Preencher o formulário de cadastro
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').type('123456');
    cy.get('[data-qa="days"]').select('25');
    cy.get('[data-qa="months"]').select('July');
    cy.get('[data-qa="years"]').select('1981');
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').type('Aut-PGATS');
    cy.get('[data-qa="last_name"]').type('Test');
    cy.get('[data-qa="address"]').type('Rua Teste, 123');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').type('California');
    cy.get('[data-qa="city"]').type('Los Angeles');
    cy.get('[data-qa="zipcode"]').type('90001');
    cy.get('[data-qa="mobile_number"]').type('+1 123 456 7890');
    cy.get('[data-qa="create-account"]').click();

    //Verificar se o cadastro foi realizado com sucesso
    
    cy.get('[data-qa="account-created"]').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
    //cy.screenshot();

    //Verificar se o usuário está logado
    cy.get('a > b').should('contain', 'Aut-PGATS');

    //efetuar o logout e verificar se a página inicial foi carregada com sucesso
    cy.get('a[href*=logout]').click();
    cy.get('.login-form > h2').should('be.visible');
    cy.get('a[href*=logout]').should('not.exist');
    cy.url().should('include', 'login'); //valida url atual e se contem a palavra login
  });
  it('Registrar usuário já cadastrado', () => {
    cy.visit('/');
    //verificar se a página inicial foi carregada com sucesso
    
    //cy.screenshot();
    //clicar no botão de login
    cy.get('a[href*=login]').click();
    cy.url().should('include', 'login'); //valida url atual e se contem a palavra login


    //cy.get() -> elemento baseado em seletor css ou xpath
    //cy.contains() -> elemento baseado em texto

    //verificar se mensagem 'New User Signup!' apareceu na tela
    cy.get('h2').contains('New User Signup!').should('be.visible');
    //Cadastrar um usuário com sucesso
    const timestamp = Date.now();
    let email = `pgats-aut-test${timestamp}@test.com`;

    cy.get('[data-qa="signup-name"]').type('Aut-PGATS');
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();

    //Preencher o formulário de cadastro
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').type('123456');
    cy.get('[data-qa="days"]').select('25');
    cy.get('[data-qa="months"]').select('July');
    cy.get('[data-qa="years"]').select('1981');
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').type('Aut-PGATS');
    cy.get('[data-qa="last_name"]').type('Test');
    cy.get('[data-qa="address"]').type('Rua Teste, 123');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').type('California');
    cy.get('[data-qa="city"]').type('Los Angeles');
    cy.get('[data-qa="zipcode"]').type('90001');
    cy.get('[data-qa="mobile_number"]').type('+1 123 456 7890');
    cy.get('[data-qa="create-account"]').click();

    //Verificar se o cadastro foi realizado com sucesso
    
    cy.get('[data-qa="account-created"]').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
    
    //efetuar o logout e verificar se a página inicial foi carregada com sucesso
    cy.get('a[href*=logout]').click();
    cy.url().should('include', 'login'); //valida url atual e se contem a palavra login


    //Tentar cadastrar o mesmo usuário novamente
    
    cy.get('[data-qa="signup-name"]').type('Aut-PGATS');
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();

    //Verificar se a mensagem de erro foi exibida
    cy.get('.signup-form > form > p').contains('Email Address already exist!').should('be.visible');
  });
});