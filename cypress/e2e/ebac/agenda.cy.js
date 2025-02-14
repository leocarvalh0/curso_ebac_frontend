/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um novo contato e verificar a quantidade', () => {
        cy.get('.sc-gueYoa').its('length').then((initialCount) => {
            cy.get('[type="text"]').type('Leonardo Carvalho')
            cy.get('[type="email"]').type('LeonardoCarvalho@teste.com')
            cy.get('[type="tel"]').type('11 012345678')
            cy.get('.adicionar').click()
    
            cy.get('.sc-gueYoa').its('length').should('eq', initialCount + 1)
        })
    })
    
    
    it('Deve editar um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('Leonardo Carvalho Ramos')
        cy.get('.alterar').click()
    })

    it('Deve deletar um contato e verificar a quantidade', () => {
        cy.get('.sc-gueYoa').its('length').then((initialCount) => {
            cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
    
            cy.get('.sc-gueYoa').its('length').should('eq', initialCount - 1)
        })
    })
    
})