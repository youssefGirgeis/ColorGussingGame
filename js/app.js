var arrayOfColors = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];
var colors;
var counter = 0 ;

var randomNumber = Math.floor(Math.random() * arrayOfColors.length);
var randomColor = arrayOfColors[randomNumber];
var success = false;
var checkColor =0;
var theBody = document.getElementsByTagName('body')[0];

function mainGame(){
    
    counter++;
    
    colors = arrayOfColors.join(' ,');
    var color = prompt('I am thinking of one of these colors:' + '\n\n'+ colors + '\n\n' + 'What color am I thinking of?');


    
    console.log(randomNumber);
    console.log(randomColor);
    console.log(color);

        
            if(color.toLowerCase() > randomColor && checkColor!== arrayOfColors.length){
                alert('Sorry, your guess is not correct!' + '\n\n' + 'Hint: your color is alphabetically higher than mine' + '\n\n' + 'Please try again');
            }else if(color.toLowerCase() < randomColor && checkColor!== arrayOfColors.length){
                alert('Sorry, your guess is not correct!' + '\n\n' + 'Hint: your color is alphabetically lower than mine' + '\n\n' + 'Please try again');
            }else if(color.toLowerCase() ===  randomColor ){
                theBody.style.backgroundColor = color;
                alert('Congratulations! You have guessed the color!' + '\n\n' + 'It took you ' + counter + ' guesses to finish the game!' + '\n\n' + 'You can see the color in the background');
                success = true;
            
            }else{
                alert('please enter a color value from the list');
            }
        }

while(!success){
    mainGame();
}