document.addEventListener('DOMContentLoaded',function(){


  var nameBox = document.querySelector('.name-box');
  var greetSettings = document.querySelector('.greetSettings');
  var greetBtn  = document.querySelector('.greetButton');
  var outputSection = document.querySelector('.output');
  var counterSection = document.querySelector('.counter');
  var resetBtn = document.querySelector('.resetButton');

  var storedUsers = localStorage.getItem('Users') ? JSON.parse(localStorage.getItem('Users') ): {};

  var greetObject = GreetingsFactory(storedUsers);

  counterSection.innerHTML = greetObject.getCountTotal();

  greetBtn.addEventListener('click',function(){
    var languageButtonChecked = document.querySelector("input[name='greetType']:checked");

    if (languageButtonChecked){
      var language = languageButtonChecked.value;
      var name = nameBox.value;
      if(name !== ""){
        outputSection.innerHTML = greetObject.greet(name,language);
      }else if (name === "" ){
        alert("Please enter your name");
        outputSection.innerHTML = "Name can not be empty"
      }
      counterSection.innerHTML = greetObject.getCountTotal();
      nameBox.value = ""
      localStorage.setItem('Users', JSON.stringify(greetObject.userMap()));
    }else{
      outputSection.innerHTML = alert('Please choose a language');
    }
  });

  resetBtn.addEventListener('click',function(){
    greetObject.reset();
  });
});
