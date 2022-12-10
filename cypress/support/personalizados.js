
Cypress.Commands.add('login', (nome, senha) => {
    cy.get('input[formcontrolname="userName"]').type(nome)
    cy.get('input[formcontrolname="password"]').type(senha)
    cy.contains('button', ' login').click()
})

Cypress.Commands.add('registro', (email, fullname, username, passworld) => {
    cy.contains('a', 'Register now').click()
    cy.get('input[formcontrolname="email"]').type(email)
    cy.get('input[formcontrolname="fullName"]').type(fullname)
    cy.get('input[formcontrolname="userName"]').type(username)
    cy.get('input[formcontrolname="password"]').type(passworld)

})