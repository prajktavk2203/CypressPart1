describe('Second Test Suite',()=>
{
    //Arrow function used in describe and it block
    it('First Test case',()=>
    {
        expect(true).to.equal(true)
    })

    it('Second test Case',()=>
    {
        expect(true).to.equal(false)
    })

    it.skip('Third test Case',()=>
    {
        expect(true).to.equal(false)
    })
})