function GreetingsFactory(storedUsers){



  var counterVariable = 0;
  var namesGreeted = storedUsers || {};


  function greetings(name,language){
      if(name !== ""){
        if (namesGreeted[name] === undefined){
        namesGreeted[name] = 0;
        }
        if(language==='English'){
          return "Hello, "+name;
        }else if (language==='Afrikaans'){
          return "Goeie dag, "+name;
        }else if (language==='isiXhosa'){
          return "Molo, "+name;
        }
      }
    }
  function greetedMap(user){
    if (namesGreeted[user] === undefined){
      namesGreeted[user] = 0;
    }
  }
  function resetCounter(){
    localStorage.clear();
    location.reload();
  }

  function counter(){
    counterVariable++;
    return counterVariable;
  }

  function totalCount(){
    return Object.keys(namesGreeted).length;
  }
  function getMap(){
    return namesGreeted;
  }


  return{
    greet : greetings,
    count : counter,
    getCountTotal: totalCount,
    userMap : getMap,

    reset : resetCounter
  }
}
