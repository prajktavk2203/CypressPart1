describe('Verify the Ragistration page', () => 
{
    it('Register new user', () => 
    {
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.contains("New user? Signup").click()

        cy.get('button[type="submit"]').should("be.disabled")
        cy.get('#name').type("Prajkta").should("have.value","Prajkta")
        cy.get('input[name="email"]').type("test@gmail.com").should("have.value","test@gmail.com")
        cy.get('#password').type("test@123").should("have.value","test@123")

        //It will throw an error - click() can click on only single element
        //cy.get('input[type="checkbox"]').click()

        //click on all the 8 checkboxes 
        cy.get('input[type="checkbox"]').click({multiple:true})
        //Select only first checkbox
        cy.get('input[type="checkbox"]').first().click()
        //Select last checkbox
        cy.get('input[type="checkbox"]').last().click()
        //select by indix
        cy.get('input[type="checkbox"]').eq(3).click()


        //Radio buttons
        //Select the first radio button
        cy.get('input[type="radio"]').first().click()
        //select last radio button
        cy.get('input[type="radio"]').last().click()
        //select specific radio button by index
        cy.get('input[type="radio"]').eq(0).click()
        //or find the direct x-path/ css selector to select the radio button
        cy.get('input[value="Female"]').click()

    
    });
});