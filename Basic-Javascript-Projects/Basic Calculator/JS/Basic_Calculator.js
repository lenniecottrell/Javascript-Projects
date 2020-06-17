//Creates an opject to keep track of values
const Calculator = {
    Display_Value: '0', //this displays 0 on the screen
    First_Operand: null, // this will hold the first operand for any expressions
    Wait_Second_Operand: false, //this check whether or not the second operand has been input
    operator: null, //this will hold the operator
};

/*
This function modifies values each time a button is clicked - 
Checks to see if Wait_Second_Operand is true and sets
Display_Value to the key that was clicked
 */
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else { //This overwrites Display_Value if the current value is 0, otherwise adds to it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

// *This section handles decimal points*
function Input_Decimal(dot) { //The if statements ensure that accidental clicking of the dot doesn't cause bugs
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot; //This says that if Display_Value doesn't contain a decimal point, we want to add one.
    }
}

// *This section handles operators*
/* When an operator key is pressed, we convert the current number
displayed on the screen to a number and then store the result in 
Calculator.First_Operand if it doesn't already exist.*/
/* The first IF statement checks if an operator already exists and if Wait_Second_Operand is true,
then updates the operator and exits from the function */
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    const Value_of_Input = parseFloat(Display_Value);
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
    return
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { //checks if an operator already exists
        const Value_Now = First_Operand || 0;
        /* if operator already exists, property lookup is performd for the operator
        in the Perform_Calculation object and the function that matches the 
        operator is executed */
        const result = Perform_Calculation[operator] (Value_Now, Value_of_Input);
        Calculator.Display_Value = String(result);
        Calculator.First_Operand = result;
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
//this function updates the screen with the contents of Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}
Update_Display();

//this section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => { //the target variable is an objects that represents the element clicked
    const { target } = event;
    if (!target.matches('button')) { //if the element that was clicked on is not a button, exit the function
        return
    }
    
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return
    }
    
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
            return
    }
    
    //ensures that AC clears the numberrs from the calculator
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    
    Input_Digit(target.value);
    Update_Display();
})