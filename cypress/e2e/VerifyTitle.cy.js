describe('visite site and veify title', ()=>
{
    it('Verify partial title',()=>
    {
        cy.visit("https://www.amazon.com/")

        //verify the partial title with contain
        cy.title().should("contain","Amazon")
        
        //fail the assertion after 4 seconds - as expect is Amazon -capital letter A
        //cy.title().should("contain","amazon")

    })

    it('Verify Exact title',()=>
    {
        cy.visit("https://www.amazon.com/")
        // We are uing eq - to verify exact title
        cy.title().should("eq","Amazon.com. Spend less. Smile more.")
    })

    it('Verify the page by URL',()=>
    {
        cy.visit("https://ineuron-courses.vercel.app/practise")
        cy.url().should("contain","practise")
    })


})