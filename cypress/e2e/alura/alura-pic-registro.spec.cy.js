/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade registro alura pic', () => {

  beforeEach(() => {
    cy.visit('https://alura-fotos.herokuapp.com/')
  });

  it('Verificar mensagens de validacao', () => {
    cy.contains('a', 'Register now').click()
    cy.contains('button', 'Register').click()
    cy.contains('small', 'Email is required!').should('be.visible')
    cy.contains('button', 'Register').click()
    cy.contains('small', 'Full name is required!').should('be.visible')
    cy.contains('small', 'User name is required!').should('be.visible')
    cy.contains('small', 'Password is required!').should('be.visible')
  });

  it('Verificar mensagem de e-mail invalido', () => {
    cy.contains('a', 'Register now').click()
    cy.get('input[formcontrolname="email"]').type('rodrigo')
    cy.contains('button', 'Register').click()
    cy.contains('small', 'Invalid e-mail').should('be.visible')
  });

  it('Verificar senha com menos de 8 caracteres', () => {
    cy.contains('a', 'Register now').click()
    cy.get('input[formcontrolname="password"]').type('123')
    cy.contains('button', 'Register').click()
    cy.contains('small', 'Mininum length is 8').should('be.visible')
  });

  it('Verificar user name com letras maiusculas', () => {
    cy.contains('a', 'Register now').click()
    cy.get('input[formcontrolname="userName"]').type('RODRIGO')
    cy.contains('button', 'Register').click()
    cy.contains('small', 'Must be lower case').should('be.visible')
  });

  it('Login com usuario valido', () => {
    cy.login('flavio', '123')
    cy.contains('a.mr-1', 'flavio').should('be.visible')
  });

  it('Registrando um novo usuario (comando personalizado)', () => {
    let emailfaker = faker.internet.email()
    let nomefaker = faker.name.firstName()
    //let usernamefaker = faker.internet.userName()
    //let senhafaker = faker.internet.password()

    cy.registro(emailfaker, nomefaker, 'marco-01', '$12345678$')

    cy.contains('button', 'Register').click()
    cy.contains('button', 'Register').click()

    cy.contains('h4', 'Login').should('be.visible')
  });

  const dados_registro = require('../../fixtures/dados_registro.json')
  dados_registro.forEach(usuarios => {
    it.only('Registrando um novo usuario (massa de dados)' + usuarios.username, () => {
      cy.contains('a', 'Register now').click()
      cy.get('input[formcontrolname="email"]').type(usuarios.email)
      cy.get('input[formcontrolname="fullName"]').type(usuarios.fullname)
      cy.get('input[formcontrolname="userName"]').type(usuarios.username)
      cy.get('input[formcontrolname="password"]').type(usuarios.passworld)

      cy.contains('button', 'Register').click()
      cy.contains('button', 'Register').click()

      cy.contains('h4', 'Login').should('be.visible')
    });
  })
})