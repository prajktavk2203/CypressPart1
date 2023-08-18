describe('First Test Suite',function(){

    // Normal TC - Execute successfully
    it('First Test Case', function(){
        expect(true).to.equal(true)
    })

    // Skip this test Case
    it.skip('Second Test Case', function(){
        expect(true).to.equal(false)
    })

    // Extecute this test case - no output
    it('Third Test Case', function(){

    })

    it('Forth Test Case', function(){
        expect(true).to.equal(true)
    })

    //TC 5- Execute only this Test case
    // it.only('5th Test Case', function(){
    //     expect(true).to.equal(true)
    // })

    //TC 6 - Skip this TC
    it('Test case 6')
})