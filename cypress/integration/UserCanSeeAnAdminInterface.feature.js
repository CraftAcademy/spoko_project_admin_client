describe('User can see an web page which navigates administrator actions', () => {
  beforeEach(() => {
    //   cy.intercept('GET', '**/articles', {
    //     fixture: 'articles.json',
    //   }).as('getArticles')
    cy.visit('/')
  })

  it('is expected to display Spoko Administration header', () => {
    cy.get('[data-cy=main-header]').should(
      'contain.text',
      'Spoko Administrator',
    )
  })

  it('is expected to display relevants sections ', () => {
    cy.get('[data-cy=articles-header]').should('contain.text', 'Articles')
  })

  it('is expected to display Title input field', () => {
    cy.get('[data-cy=title-input]').should('be.visible')
  })

  it('is expected to display a "Article Body" label', () => {
    cy.get('[data-cy=body-label]')
      .should('contain.text', 'Article body')
      .and('be.visible')
  })

  it('is expected to display Article Boby text area', () => {
    cy.get('[data-cy=body-input]').should('be.visible')
  })

  it('is expected to display category select', () => {
    cy.get('[data-cy=category-select]')
      .should('contain.text', '--select category--')
      .and('be.visible')
  })
  it('is expected to display Article Boby text area', () => {
    cy.get('[data-cy=submit-button]')
      .should('contain.text', 'Submit')
      .and('be.visible')
  })
})
