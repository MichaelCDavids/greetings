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

   function getMap(){
      return namesGreeted;
   }

   function totalCount(){
      return Object.keys(namesGreeted).length;
   }

   function counter(){
      counterVariable++;
      return counterVariable;
   }

   function resetCounter(key){
      namesGreeted = {};
      localStorage.clear(key);
   }

   function capitalizeFirstLetter(string){
      return string.charAt(0).toUpperCase() + string.slice(1);

   }

   return{
      greet : greetings,
      userMap : getMap,
      getCountTotal: totalCount,
      count : counter,
      reset : resetCounter,
      firstCap : capitalizeFirstLetter
   }
}
