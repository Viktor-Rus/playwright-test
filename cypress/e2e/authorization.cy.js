describe('Authorization', () => {
  it('Wrong email', () => {
    cy.visit('/')
    cy.get("input[name='email']").type("email")
    cy.get("input[name='password']").click()
    cy.xpath("//input[@name='email'] /following::div[1]").then(text=>{
      expect(text.text()).to.equal("Введите корректный E-Mail")
    })
  })
})
