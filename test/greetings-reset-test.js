describe('The reset Function',function(){
   it('should clear whatever registration numbers are in localStorage',function(){
      var greetingsObject = GreetingsFactory();
      greetingsObject.greet('Michael','English');
      greetingsObject.reset('Users');
      assert.equal(greetingsObject.getCountTotal(),0);
   });
});
