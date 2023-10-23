function Calculator(){
    this.total = 0
}
Calculator.prototype.add = function (number){
    return this.total+= number
}
Calculator.prototype.sub = function (number){
    return this.total-= number
}
Calculator.prototype.mul = function (number){
    return this.total*= number
}
Calculator.prototype.div = function (number){
    if(number == 0){
        throw new ArithmaticError("cannot divide by zero")
    }
    return this.total/= number
}
const inputValue = document.getElementById('inputValue');
if (inputValue) {
  inputValue.addEventListener('change', calculateTheAnswer);
}
function calculateTheAnswer(event){
    const value = event.target.value
    const expression = /\+|\*|\-|\//
    const numbers = value.split(expression)
    const operation = value.match(expression)
    const number_one = +numbers[0]
    const number_two = +numbers[1]
    if(!operation || isNaN(number_one) ||isNaN(number_one)){
        return displayAnswerOrError("error");
    }
    const operator = operation[0]

    const calculator = new Calculator()
    calculator.add(number_one)
    let result;
    switch(operator) {
        case '+': result = calculator.add(number_two)
        break;
        case '-': result = calculator.sub(number_two)
        break;
        case '*': result = calculator.mul(number_two)
        break;
        case '/': result = calculator.div(number_two)
        break;
    }
    displayAnswerOrError(result);
}
function displayAnswerOrError(text){
    document.getElementById('answer').innerHTML = text
}

class ArithmaticError extends Error {
    constructor(text){
        super(text)
        this.name = text
        console.log(this.name)
    }
}