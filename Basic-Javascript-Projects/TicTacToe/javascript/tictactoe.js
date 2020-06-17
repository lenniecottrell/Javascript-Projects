//This variable keeps track of who's turn it is.
let activePlayer = "X";
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an x or o in a square
function placeXOrO(squareNumber) {
//This condition ensures a square hasn't been selected already.
//The .some() method is used to check each element of the selectedSquares array to see
// if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
    //This variable retrieves the html element ID that was clicked.
        let select = document.getElementById(squareNumber);
    //This condition checks who's turn it is and places the image files in the HTML
        if (activePlayer === "X") {
            select.style.backgroundImage = 'url("images/ex.jpg")';
        } else {
            select.style.backgroundImage = 'url("images/oh.jpg")';
        }
        
    //squareNumber and activePlayer are concatenated together and added to the array.
        selectedSquares.push(squareNumber + activePlayer);
        
    //This calls a function to check for any win conditions.
        checkWinConditions();
        
    //This condition is for changing the active player.
        if (activePlayer === "X") {
            activePlayer = "O"
        } else {
            activePlayer = "X"
        }
        audio('./media/placement.mp3');    //This function plays placement sound.
    //This condition checks to see if it's the computer's turn. 
    //It disables clicking, waits 1 second before placing the image and enableing click again
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () {computersTurn();}, 1000);
        }
    //Returning true is needed for our computersTurn() function to work.
    return true;
    }
    
    //This function results in a random square being selected.
    function computersTurn() {
        let success = false;
        let pickASquare;
        while(!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }
}

function checkWinConditions() {
    if      (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100);}
        else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304);}
        else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508);}
        else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558);}
        else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558);}
        else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558);}
        else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90);}
        else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520);}
        else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100);}
        else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304);}
        else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508);}
        else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558);}
        else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558);}
        else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558);}
        else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90);}
        else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520);}
        else if (selectedSquares.length >= 9) {
        audio('./media/tie2.mp3');    //This function plays the tie game sound
        setTimeout(function () { resetGame(); }, 1000);//This function sets a 1 second timer before the resetGame is called.
    }
    //This function checks if an array includes 3 strings.
    //It is used to check for each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //The next 3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If the 3 variables we pass are all included in our array, true is returned
        // and our ELSE IF condition executes the drawWinLine function.
        if (a === true && b === true && c === true) {
            return true;
        }
    }
}

//This function makes our body element temporarily unclickable.
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000); //It is clickable again after 1 second.
}

//This function takes a string parameter of the path you set earlier for audio placement
function audio(audioURL) {
    let audio = new Audio(audioURL);    //We create a new audio object and we pass the path as a parameter.
    audio.play();    //The Play method plays the sound
}

//This function utilizes HTML canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');    //This accesses the Canvas element
    const c = canvas.getContext("2d");    //This gives us access to methods and properties to use on the canvas
    let x1 = coordX1,    //This indicates x-axis of the start of the line
    y1 = coordY1,    //This is the y-axis of the start of the line
    x2 = coordX2,    //This is the x-axis of the end of the line
    y2 = coordY2,    //This is the y-axis of the end of the line
    //These variables store temporary x- and y- axis data we update in our animation loop
    x= x1,
    y = y1;
//This function interacts with the canvas
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);    //This method clears content from the last loop iteration.
        c.beginPath();    //This method starts a new path
        c.moveTo(x1, y1);    //This method moves to the starting point of the new line
        c.lineTo(x, y);    //This method indicates the end point of the new line
        c.lineWidth = 10;    //This method sets the width of the line
        c.strokeStyle = 'rgba(70, 255, 33, 0.8)';    //This method sets the color of the line.
        c.stroke();    //This method draws everything we laid out above
        if (x1 <= x2 && y1 <= y2) {    //This condition checks if we've reached the endpoint.
            if (x < x2) { x += 10;}    //This condition adds 10 to the previous end x point.
            if (y < y2) { y += 10;}    //This condition adds 10 to the previous end y point.
            if (x >= x2 && y >=y2) { cancelAnimationFrame(animationLoop); }    //This condition cancels our animation loop if it reaches the end points.
        }
        if (x1 <= x2 && y1 >= y2) { //This condition is similar to the one above - necessary for the 6, 4, 2, win condition
            if (x < x2) { x += 10;}
            if (y > y2) { y -= 10;}
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    
    //This function clears our canvas after our win line is drawn.
    function clear() {
        const animationLoop = requestAnimationFrame(clear); //Starts animation
        c.clearRect(0, 0, 608, 608); //clears canvas
        cancelAnimationFrame(animationLoop); //stops animation
    }
    disableClick();    //This line disallows clicking while the win sound is playing
    audio('./media/newWin.mp3');   //Plays the win sound
    animateLineDrawing();   //This line calls out main animation loop
    setTimeout(function() { clear(); resetGame();}, 2000);  //waits two seconds, then clears the canvas, resets the game, and allows clicking again.
}

//This function resets the game in a tie or a win.
function resetGame() {
    for (let i = 0; i < 9; i++) { //This for loop iterates through each HTML square element
        let square = document.getElementById(String(i)); //This assigns the HTML i to the variable square
        square.style.backgroundImage = ''; //This removes our elements background image
    }
    selectedSquares = []; //This resets the array so we can start over
}