// need a buttton to start a quiz
// 
//QUESTIONS
var arrayOfStuff = ['Astros', 'red Sox', 'Yankees']

//If the user answers within 10seconds , next question appears

function clickHandler() {
    console.log('helloWorld!')

    for (var i = 0; i < arrayOfStuff.length; i++) {
        arrayOfStuff[i][3] = 'X'
    }

    console.log('stuff--->', arrayOfStuff)
}