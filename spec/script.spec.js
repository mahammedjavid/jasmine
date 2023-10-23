describe('script.js', function () {
    it('should add ', () => {
        const cal = new Calculator()
        cal.add(5)
        expect(cal.total).toBe(5)
    })
    it('should subtract ', () => {
        const cal = new Calculator()
        cal.total = 1
        cal.sub(1)
        expect(cal.total).toBe(0)
    })
    it('should multiply ', () => {
        const cal = new Calculator()
        cal.total = 2
        cal.mul(5)
        expect(cal.total).toBe(10)
    })
    it('should divide ', () => {
        const cal = new Calculator()
        cal.total = 10
        cal.div(5)
        expect(cal.total).toBe(2)
    })
    it('should throw error for divide by zero ', () => {
        const cal = new Calculator()
        cal.total = 10
        expect(() => {
            cal.div(0)
        }).toThrow(new ArithmaticError("cannot divide by zero"))
    })
    it('should throw error for divide by zero 2', () => {
        const cal = new Calculator()
        cal.total = 10
        expect(() => {
            cal.div(0)
        }).toThrowError(ArithmaticError,"cannot divide by zero") //both paramer optional
    })
})