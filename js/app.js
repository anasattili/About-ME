'use strict';
var score=0;
var userName=prompt('Welcome to my page can you tell me your name');
alert('Welcome again '+userName+' to my page I will ask you some questions about my self and you will answer by yes or no');
//First question
function question1(){
  var myName= prompt('My name is anas?');
  if(myName.toLowerCase() ==='yes' || myName.toLowerCase() ==='y')
  {
    alert('This is a good starting');
  console.log('First question:Your answer is true');
  score++;
} else if(myName.toLowerCase() ==='no' || myName.toLowerCase() ==='n')
{
  alert('sorry this is not true');
  console.log('First question:Your answer is false');
}
else{
  alert('sorry you should answer by yes or no');
  console.log('First question:You should pick yes or no');
}
}
question1();
//Second question
function question2(){
  var favDrink= prompt('My favorite drink is orange juice?');
  if(favDrink.toLowerCase() ==='yes' || favDrink.toLowerCase() ==='y')
  {
  alert('sorry I do not like it');
  console.log('Second question:Your answer is false');
  
} else if(favDrink.toLowerCase() ==='no' || favDrink.toLowerCase() ==='n')
{
  alert('You are amazing keep on it');
  console.log('Second question:Your answer is true');
  score++;
}
else{
  alert('sorry you should answer by yes or no');
  console.log('Second question:You should pick yes or no');
}
}
question2();
//Third question
function question3(){
  var favMeal= prompt('My favorite meal is Shawarma?');
  if(favMeal.toLowerCase() ==='yes' || favMeal.toLowerCase() ==='y')
  {
    alert('yes this is true I fall in love with Shawarma ');
    console.log('Third question:Your answer is true');
    score++;
  } else if(favMeal.toLowerCase() ==='no' || favMeal.toLowerCase() ==='n')
  {
    alert('I am so sorry I love Shawarma');
    console.log('Third question:Your answer is false');
  }
  else{
    alert('sorry you should answer by yes or no');
    console.log('Third question:You should pick yes or no');
  }
}
question3();
//Fourth question
function question4(){
  var favTeam= prompt('My favorite football Team is Realmadrid?');
  if(favTeam.toLowerCase() ==='yes' || favTeam.toLowerCase() ==='y')
  {
    alert('you are so right Madrid is the best Team in the world, I hope you like Madrid');
    console.log('Fourth question:Your answer is true');
    score++;
  } else if(favTeam.toLowerCase() ==='no' || favTeam.toLowerCase() ==='n')
  {
    alert('I\'m sorry for that In my opinion Madrid is the best Team');
    console.log('Fourth question:Your answer is false');
  }
else{
  alert('sorry you should answer by yes or no');
  console.log('Fourth question:You should pick yes or no');
}
}
question4();
//Fifth question
function question5(){
  var favMovie= prompt('My favorite movie is Harry Potter?');
  if(favMovie.toLowerCase() ==='yes' || favMovie.toLowerCase() ==='y')
  {
    alert('That\'s true I recommended you to watch it');
    console.log('Fifth question:Your answer is true');
    score++;
} else if(favMovie.toLowerCase() ==='no' || favMovie.toLowerCase() ==='n')
{
  alert('Unfortunately this is wrong, but I recommended you to watch it ');
  console.log('Fifth question:Your answer is false');
}
else{
  alert('sorry you should answer by yes or no');
  console.log('Fifth question:You should pick yes or no');
}

}
question5();
//sixth question
function question6(){
  
  for(var i=0;i<4;i++){
    var guessNum=parseInt(prompt('Can you guess my favorite number. Please type a number.'));
    
    if(guessNum ===8){
      alert('That\'s rigth you are amazing');
      console.log('sixth question:Your answer is true');
    score++;
    break;
  }
  
  else if(guessNum >8){
    
    alert('sorry, It\'s too high');
    console.log('sixth question:Your answer is false');
  }
  else if(guessNum <8){
    alert('sorry, It\'s too low');
    console.log('sixth question:Your answer is false');
  }
  else {
    console.log('sixth question:Your answer is false');
  }
}
alert('My favorate number is 8');

}
question6();
//Seventh quastion
function question7(){
  for(var x=0;x<6;x++){
    var favFruit=['kiwi','orange','banana','strawberry','mango'];
    var guessFruit=prompt('Can you guess my favorite fruit. Please type a name of fruit.');
    guessFruit=guessFruit.toLowerCase();
    
    if(guessFruit===favFruit[0] || guessFruit===favFruit[1] ||guessFruit===favFruit[2] ||guessFruit===favFruit[3]||guessFruit===favFruit[4]){
      alert('That\'s true');
      console.log('seventh question:Your answer is true');
    score++;
    break;}
    else {
    console.log('seventh question:Your answer is false');
  }
}
alert('My favorate fruit are [kiwi, orange, banana, strawberry, mango]');
}
question7();
alert(`Thank you ${userName} Your score is = ${score}/7 `);
console.log('your score =',score);
alert(`Thank you so much ${userName} for sharing this questions with us I hope you enjoy with it. There is a short introducing about me in this page. We look forward to see you soon`);



