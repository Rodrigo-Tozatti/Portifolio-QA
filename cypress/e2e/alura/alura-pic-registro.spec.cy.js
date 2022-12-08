describe('Funcionalidade registro alura pic', () => {

  //beforeEach(() => {
  //  cy.visit('baseUrl')
  //});

  it('Verificar mensagens de validacao', () => {
    cy.visit('https://alura-fotos.herokuapp.com/')
    cy.contains('a', 'Register now').click()
    cy.contains('button', 'Register').click()
    cy.contains('small', 'Email is required!').should('be.visible')
    cy.contains('button', 'Register').click()
    cy.contains('small', 'Full name is required!').should('be.visible')
    cy.contains('small', 'User name is required!').should('be.visible')
    cy.contains('small', 'Password is required!').should('be.visible')
  })

  it('Verificar mensagem de e-mail invalido', () => {
    cy.visit('https://alura-fotos.herokuapp.com/#/home/signup')
    cy.get('input[formcontrolname="email"]').type('rodrigo')
    cy.contains('button', 'Register').click()
    cy.contains('small', 'Invalid e-mail').should('be.visible')
  });

  it('Verificar senha com menos de 8 caracteres', () => {
    cy.visit('https://alura-fotos.herokuapp.com/#/home/signup')
    cy.get('input[formcontrolname="password"]').type('123')
    cy.contains('button', 'Register').click()
    cy.contains('small', 'Mininum length is 8').should('be.visible')
  });

  it('Verificar user name com letras maiusculas', () => {
    cy.visit('https://alura-fotos.herokuapp.com/#/home/signup')
    cy.get('input[formcontrolname="userName"]').type('RODRIGO')
    cy.contains('button', 'Register').click()
    cy.contains('small', 'Must be lower case').should('be.visible')
  });
})