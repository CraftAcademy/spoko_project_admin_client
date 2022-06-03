describe('User can see an web page which navigates administrator actions', () => {
    beforeEach(() => {
    //   cy.intercept('GET', '**/articles', {
    //     fixture: 'articles.json',
    //   }).as('getArticles')
      cy.visit('/')
    })
  
    it('is expected to display Spoko Administration header', () => {
      cy.get('[data-cy=main-header]').should('contain.text', 'Spoko Administrator')
    })

    it('is expected to display relevants sections ', () => {
        cy.get('[data-cy=articles-header]').should('contain.text', 'Articles')
    })
  
    it('is expected to display relevants sections ', () => {
        cy.get('[data-cy=product-header]').should('contain.text', 'Products')
    })
  })
