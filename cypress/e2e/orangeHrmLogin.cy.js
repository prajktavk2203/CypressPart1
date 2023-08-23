
describe('Verify OrangeHRM Login page functionality', () => 
{
    it('Verify login page with valid credentials', () => 
    {
       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admin").should("have.value","Admin")
        cy.get('input[type="password"]').type("admin123").should("have.value","admin123")
        cy.get('button').should("be.enabled").click()
    });
});