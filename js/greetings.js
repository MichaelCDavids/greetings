document.addEventListener('DOMContentLoaded',function(){
  var nameBox = document.querySelector('.name-box');
  var greetSettings = document.querySelector('.greetSettings');
  var greetBtn  = document.querySelector('.greetButton');
  var outputSection = document.querySelector('.output');
  var counterSection = document.querySelector('.counter');
  var resetBtn = document.querySelector('.resetButton');


  var greetCounter = 0;
  
  if (localStorage['greetCount']){
     greetCounter = Number(localStorage['greetCount']);
    counterSection.innerHTML = greetCounter;
  }

  var greetObject = GreetingsFactory();


  greetBtn.addEventListener('click',function(){
    var languageButtonChecked = document.querySelector("input[name='greetType']:checked");
    if (languageButtonChecked){
      var language = languageButtonChecked.value;
      var name = nameBox.value;
      var greeting = greetObject.greet(name,language);
      greetCounter++;
      localStorage['greetCount'] = greetCounter;
      nameBox.value = "";
      outputSection.innerHTML = greeting;
      counterSection.innerHTML = greetCounter;
    }
  });
  resetBtn.addEventListener('click',function(){
    greetObject.reset();
  });
});
