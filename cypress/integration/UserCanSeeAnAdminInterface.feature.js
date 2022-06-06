describe('User can see an web page which navigates administrator actions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('is expected to display Spoko Administration header', () => {
    cy.get('[data-cy=main-header]').should(
      'contain.text',
      'Spoko Administrator',
    )
  })

  it('is expected to display Title input field', () => {
    cy.get('[data-cy=title-input]').should('be.visible')
  })

  it('is expected to display a "Article Body" label', () => {
    cy.get('[data-cy=body-label]').should('be.visible')
  })

  it('is expected to display category select', () => {
    cy.get('[data-cy=category-select]')
      .should('contain.text', 'CategoryFootballTennisGolfCricket')
      .and('be.visible')
  })




})
