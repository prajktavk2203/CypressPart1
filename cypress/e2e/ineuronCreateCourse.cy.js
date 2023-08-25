describe('Create Course', () => 
{
    it('Create course and delete the same one', () => 
    {
        //Login To Ineuron 
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get("input[name='email1']").type("ineuron@ineuron.ai").should("have.value","ineuron@ineuron.ai")
        cy.get("input[name='password1']").type("ineuron").should("have.value","ineuron")
        cy.get("button[type='submit']").click({force:true})

        //mouse hour on Manage 
        cy.contains('Manage').realHover()
        cy.wait(4000)

        //click on Manage cources
        cy.contains('Manage Courses').click({force:true})

        //check the count of cources present on the screen.
        cy.get('input[type="checkbox"]').should('have.length','3')

        cy.wait(3000)

        //click on add new course button
        cy.contains('Add New Course').click({force:true})

        
    });
});