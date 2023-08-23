describe('Verify Login Page', () => 
{
    it('verify login with valid credintials', ()=>
     {
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get("input[name='email1']").type("ineuron@ineuron.ai").should("have.value","ineuron@ineuron.ai")
        cy.get("input[name='password1']").type("ineuron").should("have.value","ineuron")
        cy.get("button[type='submit']").should("be.enabled").click()

        cy.contains('Sign out').should("be.visible").click()

        
    });
});