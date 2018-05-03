function GreetingsFactory(){

  var counterVariable = 0;

  function greetings(name,language){
    if(language==='English'){
      return "Hello, "+name;
    }else if (language==='Afrikaans'){
      return "Goeie dag, "+name;
    }else if (language==='isiXhosa'){
      return "Molo, "+name;
    }
  }
  function resetCounter(){
    localStorage.clear();
  }
  
  function counter(){
    counterVariable++;
    return counterVariable;
  }

  function totalCount(){
    return counterVariable;
  }

  return{
    greet : greetings,
    count : counter,
    getCountTotal: totalCount,

    reset : resetCounter
  }
}
