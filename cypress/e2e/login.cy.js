describe('Verify Login Page', () => 
{
    it('verify login with valid credintials', ()=>
     {
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get("input[name='email1']").type("ineuron@ineuron.ai")
        cy.get("input[name='password1']").type("ineuron")
        cy.get("button[type='submit']").click()

        cy.get(".navbar-menu-links > button").should("be.visible")
        
    });
});