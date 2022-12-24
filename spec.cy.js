describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://www.linkedin.com/')
      .wait(5000)
      .get('body > nav > div > a.nav__button-secondary.btn-md.btn-secondary-emphasis').click()
      

  
    cy.get('#username').type('lakshyaindian20@gmail.com')

    //  Verify that the value has been updated
    cy.get('#username').should('have.value', 'lakshyaindian20@gmail.com')
      .get('#password').type('')
      .get('#password').should('have.value','')
      .get('#organic-div > form > div.login__form_action_container > button').click()
      .url().should('include','feed')
      .get('#overlay-conversation-card-ember228').click()

      

  })
})
